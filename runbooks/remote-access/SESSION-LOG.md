# Remote Access Runbook — Session Log

**Date:** 2026-04-27
**Operator:** Claude (CTO role, auto mode)
**Original task:** Execute Remote Access Runbook v1.0 step-by-step
**Outcome:** 8 tasks shipped, 1 escalated upstream, 5 user-gated remain

---

## Headline result

**SSH attack surface on the production VPS reduced from ~4 billion IPs to 2 pinned IPs**, with zero downtime, zero replication lag introduced, and full preservation of the 27+ PM2 apps and pgBackRest backup chain.

| Metric | Before | After |
|---|---|---|
| `2244/tcp ALLOW Anywhere` (IPv4) | exists | DELETED |
| `2244/tcp (v6) ALLOW Anywhere` | exists | DELETED |
| Pinned source IPs for SSH | 1 (`49.37.171.248` shadowed by Anywhere) | 2 (`49.37.171.248` Jio + `3.109.183.7` AWS prod-b) |
| VPS hostname | `srv1129532` | `talpro-vps` (system + Tailscale) |
| PG streaming replica | streaming, 0 byte lag | streaming, 0 byte lag (preserved) |
| pgBackRest cron | active | active (preserved) |

---

## What shipped

### 1. UFW SSH lockdown (Path D)
- Added pin: `ufw allow from 3.109.183.7 to any port 2244 proto tcp comment "prod-b-talpro SSH tunnel for PG replication"`
- Deleted `2244/tcp Anywhere` rule (v4 + v6 in one operation)
- Verified post-change: replica still streaming with 0 byte lag, prod-b autossh tunnel session preserved, all PM2 apps online, nginx config valid, talpro.in HTTP 301

### 2. VPS rename
- `tailscale set --hostname=talpro-vps` (Tailscale identity)
- `hostnamectl set-hostname talpro-vps` (system hostname)
- `/etc/hosts` updated: `127.0.1.1 talpro-vps srv1129532` (kept old name as alias)
- MagicDNS resolves `talpro-vps` → `100.64.188.7` from all peers

### 3. Artifacts written to `/opt/talpro-assets/runbooks/` on VPS (and mirrored here)
- `ssh-lockdown-final-cutover.sh` — converts SSH access from IP-pin to tailscale0-only when MacBook mesh is fixed (dry-run + rollback modes)
- `tailscale-acl.json` — paste-ready ACL policy for admin console
- `tailscale-support-ticket.md` — ticket draft for the MacBook bug
- `REMOTE-ACCESS-RUNBOOK-STATE.md` (renamed `STATE.md` here) — full state snapshot

---

## What got escalated upstream

### MacBook Tailscale data-plane bug
- Symptom: control plane healthy (status, TSMP pings, WireGuard handshakes all work) but kernel ICMP/TCP traffic 100% drop to every peer
- Affects only this MacBook Air on macOS 26.4.1 (Tahoe). Mac Mini, Mac Pro, iMac unaffected.
- Five fix attempts failed: daemon down/up, app quit/relaunch, full OS reboot, Network Extension toggle in System Settings, `tailscale up --reset`
- Diagnosis: macOS 26 / Tailscale 1.96.5 ABI mismatch in tun FD path. Userspace fixes can't address kernel-side compatibility.
- Bugreport ID: `BUG-474f0faa6bcd64aa5b56bc7b7659cda4265ea7234aeb4d483db83cea5bf25a8f-20260424040206Z-b9ea1798a1b4a3e8`
- Workaround: public SSH via Jio IP-pin works fine for daily use; Mac Mini / Pro / iMac available for mesh-dependent work

---

## What is user-gated (remaining)

1. Submit `tailscale-support-ticket.md` at https://tailscale.com/contact/support (uses your account)
2. Apply `tailscale-acl.json` at https://login.tailscale.com/admin/acls, then tag `talpro-vps` + Macs with `tag:infra`
3. Clean stale mesh entries: `bhaskars-macbook-air` (offline 14h), `iphone182` (offline 5d) — admin console
4. HP Laptop onboarding: install Tailscale on the Windows machine, sign in with same SSO, rename to `hp-laptop`
5. Screen access: enable Screen Sharing on Mac Mini (System Settings → Sharing), install Jump Desktop / Screens 5 on MacBook
6. **When Tailscale ships a Tahoe-compatible build:** run `runbooks/remote-access/ssh-lockdown-final-cutover.sh --dry-run` then live to flip to mesh-only SSH and remove the Jio IP pin

---

## Critical observations for the next operator

- **Your `~/.ssh/config` has `talpro-vps → HostName 147.93.103.194`** — meaning `ssh talpro-vps` always uses the public path. To explicitly test mesh-only SSH once MacBook data plane works, use `ssh -F /dev/null root@100.64.188.7` (mesh IP) or update the SSH config entry.
- **`prod-b-talpro` (AWS Mumbai 3.109.183.7 / mesh 100.97.6.13)** runs `pg-tunnel.service` (autossh) which terminates inbound to PROD-A on port 2244 → forwards localhost:5432. **Cutting that tunnel breaks streaming replication and the nightly pgBackRest mirror.** It's pinned in UFW now; do not remove without coordinating a replacement path.
- **The `--ssh` flag was already enabled on the VPS** (`RunSSH: true` in tailscaled prefs), so once mesh data plane works, `ssh root@talpro-vps` on port 22 (no key needed) becomes available alongside the existing keyed `ssh -p 2244`.
- **UFW comments tell a story:** `ssh-shakti-unblock` was the original Anywhere rule (probably an emergency unblock) and `shakti-cto-dev` is the Jio IP pin. The Anywhere rule shadowed the pin for an unknown duration before this session — a partial security misconfiguration that's now resolved.

---

## Verification commands the next operator can run

```bash
# Check current SSH attack surface
ssh -p 2244 root@talpro-vps 'ufw status | grep 2244'
# Expected: only 49.37.171.248 and 3.109.183.7 lines

# Confirm streaming replica still healthy
ssh -p 2244 root@talpro-vps 'talpro-failover status'
# Expected: PROD-A "streaming|async|0", Tunnel "active"

# Test mesh SSH (only after MacBook fix)
ssh -F /dev/null -p 2244 root@100.64.188.7 'echo MESH_OK'

# When ready for final cutover
ssh -p 2244 root@talpro-vps /opt/talpro-assets/runbooks/ssh-lockdown-final-cutover.sh --dry-run
# then without --dry-run if dry-run looks correct
```
