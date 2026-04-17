# Remediation Steps

All commands run as `root` on `srv1129532` unless noted.
Work on a copy of `authorized_keys` first — one bad edit locks you out (Hostinger browser console is your backup).

```bash
cp /root/.ssh/authorized_keys /root/.ssh/authorized_keys.bak.$(date +%Y%m%d-%H%M%S)
```

---

## 1. Harden `github-actions-talpro` deploy key

GitHub-hosted runner IPs change constantly (published at `https://api.github.com/meta`), so a static `from=` allowlist will break deploys. Safer approach: strip the capabilities the CI doesn't need.

**Restrictions to add:** `no-pty,no-agent-forwarding,no-X11-forwarding,no-port-forwarding,no-user-rc`

Skip `command=` too — without knowing exactly what every workflow runs (`scp`, `rsync`, `git pull`, `systemctl restart`), locking to one command risks breaking CI. Revisit once the CI surface is standardised behind a single `deploy.sh`.

### Apply

```bash
python3 - <<'PY'
from pathlib import Path
path = Path('/root/.ssh/authorized_keys')
text = path.read_text()
old = 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGBchY1Zqk3MfEqo1zQwiBZPgC5G+10+yYTjSDHRs6ix github-actions-talpro'
new = 'no-pty,no-agent-forwarding,no-X11-forwarding,no-port-forwarding,no-user-rc ' + old
assert old in text, "github-actions-talpro line not found — check file manually"
assert new not in text, "already hardened"
path.write_text(text.replace(old, new))
print("OK — hardened github-actions-talpro")
PY
```

### Verify

```bash
grep github-actions-talpro /root/.ssh/authorized_keys
sshd -T -C addr=127.0.0.1,user=root,host=localhost,laddr=127.0.0.1,lport=22 >/dev/null && echo "sshd config still valid"
```

Then trigger a GitHub Actions deploy and confirm it still succeeds.

---

## 2. Teach the Telegram bot to label known keys

Bot source: `/opt/apps/talpro-telegram-bot/index.js` (PM2 pid 1295486 in the audit).

Without seeing the bot source, here's the shape of the change to apply. Adapt to the bot's existing code style.

### Add a fingerprint → friendly-name map

```js
// Known SSH key fingerprints → (label, isHuman)
// isHuman=false means "don't page the CTO, just log it"
const KEY_LABELS = {
  'SHA256:mfS7NXbHd8FORLjnCzaOkR0aBL7n/YVQrjKRZbx5XNM': { label: '🤖 CI Deploy (github-actions-talpro)', human: false },
  'SHA256:KjLq6+We+YvOivSFBYqNOv0jRF1s3gh2VSb6AV6LKCo': { label: '👤 CEO (macmini@talpro)',               human: true  },
  'SHA256:avBNxcogddYOFs0lAOVju4lSEUs5hBbeDigtVOW9plw': { label: '👤 CEO (Talpros-Mac-mini RSA)',         human: true  },
  'SHA256:zEBjajHFhA+Ya3pva+J+ViVvO7YqbCnoS0QWC5UqGEI': { label: '👤 Bhaskar (MacBook Air)',              human: true  },
  'SHA256:O6LKNRGynIwcDddHrO/XDI40BFW3mb/zE6SEmCZHaLw': { label: '⚙️ Local automation (bhaskar@talpro.in)', human: false },
  'SHA256:2n/+PgMK2W/XibXqFTutu0PuERaOf2skIipqtN3vMQQ': { label: '🛠️ Hostinger panel',                     human: false },
};

function classifyLogin({ fingerprint, sourceIp }) {
  const known = KEY_LABELS[fingerprint];
  if (known) return known;
  // Loopback / Hostinger console / Tailscale CGNAT — quiet by source too
  if (sourceIp === '169.254.0.1' || sourceIp === '127.0.0.1') {
    return { label: '🛠️ Hostinger panel (loopback)', human: false };
  }
  if (sourceIp.startsWith('100.')) {
    return { label: '🔗 Tailscale', human: false };
  }
  return { label: '❗ UNKNOWN KEY', human: true };  // loud — genuine unknown
}
```

### Change the alert formatter

```js
// Before — every login became a 🔐 alert
function formatLoginAlert(evt) {
  return `🔐 SSH login on ${evt.host}\nUser: ${evt.user}\nFrom: ${evt.ip}\nTime: ${evt.time}\nKey: ${evt.keyFingerprint}`;
}

// After — CI and known automation go to a quiet channel; unknown keys escalate
function formatLoginAlert(evt) {
  const { label, human } = classifyLogin({ fingerprint: evt.keyFingerprint, sourceIp: evt.ip });
  const header = human ? '🔐 SSH login' : '✅ SSH login (routine)';
  return {
    text: `${header} on ${evt.host}\nWho:  ${label}\nFrom: ${evt.ip}\nTime: ${evt.time}`,
    channel: human ? 'cto-alerts' : 'cto-audit',  // route non-human events away from pager
  };
}
```

### Deploy

```bash
cd /opt/apps/talpro-telegram-bot
# edit index.js (or wherever the alert formatter lives)
pm2 restart talpro-telegram-bot
pm2 logs talpro-telegram-bot --lines 20
```

Then trigger a test deploy — the alert should land in the audit channel, not the pager channel.

---

## 3. Delete the disabled no-comment key

Fingerprint confirmed: `SHA256:a44ApkJAJu08O0XhgcElFIrw8RJ+yx7GwrLVz2osBgk`. Commented out by CTO security review on 2026-04-17.

```bash
sed -i '/^# DISABLED-NO-COMMENT 2026-04-17/d' /root/.ssh/authorized_keys
grep -c DISABLED /root/.ssh/authorized_keys   # expect 0
```

---

## 4. Properly label the Hostinger managed key

Currently the comment is `#hostinger-managed-key` (which `ssh-keygen -lf` reports as `no comment` because of the leading `#`). Replace with a clean label and add a do-not-remove warning.

```bash
python3 - <<'PY'
from pathlib import Path
path = Path('/root/.ssh/authorized_keys')
text = path.read_text()
old = '== #hostinger-managed-key'
new = '== hostinger-panel-browser-terminal'
assert old in text, "hostinger-managed-key not found — check file manually"
path.write_text(text.replace(old, new))
print("OK — relabeled hostinger managed key")
PY
```

Add an inline note above the line so future readers know not to delete it:

```bash
sed -i '/hostinger-panel-browser-terminal/i\
# hostinger-panel-browser-terminal — Hostinger-managed. Used by the web console (169.254.0.1). DO NOT REMOVE.' /root/.ssh/authorized_keys
```

---

## Post-change verification

```bash
# 1. File is still valid
ssh-keygen -lf /root/.ssh/authorized_keys

# 2. sshd still parses the file cleanly
sshd -T >/dev/null && echo OK

# 3. Do NOT log out of the current session until you've opened a SECOND SSH session
#    and confirmed login still works with your own key.
```

If anything goes wrong, restore the backup:

```bash
cp /root/.ssh/authorized_keys.bak.<timestamp> /root/.ssh/authorized_keys
```
