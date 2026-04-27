# Remote Access Runbook — Execution State

**Date of execution:** 2026-04-24
**Executed by:** Claude (CTO role) in auto mode
**Runbook version:** v1.0

## SHIPPED THIS SESSION (locked in)

### Path D — SSH attack surface reduction
Before: `2244/tcp ALLOW Anywhere` (IPv4 + IPv6) — ~4 billion IPs could attempt SSH.
After: only two pinned IPs can reach port 2244:
- `49.37.171.248` — Jio home IP (CTO workstation), rule comment `shakti-cto-dev`
- `3.109.183.7` — prod-b-talpro AWS tunnel for PG streaming replication

UFW rules added:
- `ufw allow from 3.109.183.7 to any port 2244 proto tcp comment "prod-b-talpro SSH tunnel for PG replication"`

UFW rules deleted:
- `2244/tcp ALLOW IN Anywhere # ssh-shakti-unblock` (IPv4)
- `2244/tcp (v6) ALLOW IN Anywhere (v6) # ssh-shakti-unblock` (IPv6)

Verified post-change:
- PROD-A → PROD-B streaming replica: `streaming, async, 0 bytes lag`
- prod-b autossh tunnel (pg-tunnel.service on PROD-B): established session preserved
- pgBackRest nightly cron (`/etc/cron.d/prod-b-mirror`): unaffected (outbound)
- PM2 (27+ apps): all online
- Nginx: config test passes, `talpro.in` HTTPS 301

### Step 3 — VPS hostname rename
- Tailscale hostname: `srv1129532` → `talpro-vps`
- System hostname: `srv1129532` → `talpro-vps`
- `/etc/hosts` updated: `127.0.1.1 talpro-vps srv1129532` (keeps backward-compat)
- MagicDNS resolves `talpro-vps` → `100.64.188.7` from all mesh peers

## PENDING — requires user / admin-console actions

### MacBook Tailscale data-plane (BLOCKER for tailscale0 cutover)
- Current state: mesh control plane works, data plane 100% packet loss for ICMP/TCP
- Not fixed by: `tailscale down/up`, app quit/relaunch, full system reboot
- Tailscale 1.96.5 is the latest macOS build — no newer version available
- Next steps (in order of intrusiveness):
  1. System Settings → General → Login Items & Extensions → Network Extensions → toggle Tailscale OFF then ON (admin password required)
  2. Uninstall + reinstall Tailscale.app (identity preserved via Tailscale account login)
  3. File Tailscale support ticket with bugreport ID: `BUG-474f0faa6bcd64aa5b56bc7b7659cda4265ea7234aeb4d483db83cea5bf25a8f-20260424040206Z-b9ea1798a1b4a3e8`
- Other devices are unaffected — Mac Mini, Mac Pro, iMac all work normally

### Step 2.3 — HP Laptop onboarding
Not yet on mesh. Download: https://tailscale.com/download/windows → sign in with same Google/GitHub SSO → rename in admin console to `hp-laptop`.

### Step 4 — Screen access
- Enable Screen Sharing on Mac Mini: System Settings → General → Sharing → Screen Sharing ON
- Install Jump Desktop (~$30, Mac App Store) or free: Finder → Cmd+K → `vnc://talpros-mac-mini`
- HP Laptop: enable Remote Desktop if Windows 11 Pro, else install RustDesk

### Step 5 final cutover (tailscale0-only SSH)
**Blocked on MacBook mesh fix.** Script ready at `/opt/talpro-assets/runbooks/ssh-lockdown-final-cutover.sh`.
When MacBook mesh works:
```bash
ssh -p 2244 root@talpro-vps /opt/talpro-assets/runbooks/ssh-lockdown-final-cutover.sh --dry-run
ssh -p 2244 root@talpro-vps /opt/talpro-assets/runbooks/ssh-lockdown-final-cutover.sh
```

### Step 6 — ACL policy
JSON ready at `/opt/talpro-assets/runbooks/tailscale-acl.json`.
Apply at https://login.tailscale.com/admin/acls — paste the contents, save.
After save, tag infrastructure machines: admin console → Machines → (each box) → Edit tags → add `tag:infra`.

### Stale mesh cleanup
Remove in admin console (https://login.tailscale.com/admin/machines):
- `bhaskars-macbook-air` (100.64.232.24) — stale duplicate, offline 14h+
- `iphone182` (100.91.138.74) — offline 5d+, decide if iPhone 17 Pro Max still in use
Keep:
- `bhaskars-macbook-air-1`, `bhaskars-macbook-pro`, `leeyanshs-imac`, `talpros-mac-mini`, `prod-b-talpro`, `talpro-vps`

## ARTIFACTS IN THIS DIRECTORY
- `ssh-lockdown-final-cutover.sh` — the final UFW cutover script (dry-run + rollback modes)
- `tailscale-acl.json` — Tailscale ACL policy ready to paste
- `REMOTE-ACCESS-RUNBOOK-STATE.md` — this file

## NET SECURITY POSTURE DELTA

| Dimension | Before | After |
|---|---|---|
| SSH public attack surface | ~4B IPs (Anywhere v4+v6) | 1 home IP + 1 AWS replication IP |
| Mesh in place | Partial (3 of 4 runbook devices) | Same (HP Laptop still missing) |
| Replication continuity | N/A | Preserved — 0 bytes lag |
| Backup cron continuity | N/A | Preserved |
| VPS identity in mesh | `srv1129532` | `talpro-vps` (matches runbook) |

---
Session complete. Next session picks up at MacBook data-plane fix → final cutover.
