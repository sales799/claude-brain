# Remote Access Runbook — Artifacts

Output of the 2026-04-27 execution of the Talpro Remote Access Runbook v1.0 (Tailscale mesh + SSH lockdown).

## Files

| File | Purpose |
|---|---|
| `SESSION-LOG.md` | What was done, what shipped, what remains. Read this first. |
| `STATE.md` | Snapshot of system state at end of session (mirror of `/opt/talpro-assets/runbooks/REMOTE-ACCESS-RUNBOOK-STATE.md` on VPS). |
| `ssh-lockdown-final-cutover.sh` | Bash script that flips VPS SSH from IP-pin to tailscale0-only. Run when MacBook Tailscale mesh data plane is restored. Has `--dry-run` and `--rollback` modes. |
| `tailscale-acl.json` | ACL policy ready to paste at https://login.tailscale.com/admin/acls. |
| `tailscale-support-ticket.md` | Draft to paste at https://tailscale.com/contact/support for the MacBook macOS 26 / Tailscale 1.96.5 data-plane bug. |

## Headline result

VPS SSH attack surface reduced from ~4 billion IPs (`ALLOW Anywhere`) to **2 pinned IPs** with zero replication lag, zero downtime, all 27+ apps preserved.

## Status of the runbook

- **8 tasks completed** in-session
- **1 task escalated upstream** (MacBook Tailscale data-plane — likely macOS 26 Tahoe ABI bug)
- **5 tasks remain user-gated** — see `SESSION-LOG.md` § "What is user-gated"

## How to read these files

If you're picking this up cold, read in this order:
1. `SESSION-LOG.md` — context + what was done + what's left
2. `STATE.md` — full state snapshot
3. The three operational files (`*.sh`, `*.json`, `*.md`) only when ready to apply them

## Deployment

These files exist in two places:

1. **VPS** (production source of truth): `/opt/talpro-assets/runbooks/`
   - Reach via: `ssh -p 2244 root@talpro-vps 'ls /opt/talpro-assets/runbooks/'`
2. **GitHub** (this repo, version-controlled): `runbooks/remote-access/`
   - Reach via: https://github.com/sales799/claude-brain/tree/main/runbooks/remote-access

Keeping both in sync is manual for now — when you update `*.sh` or `*.json` on the VPS, mirror the change here and commit.
