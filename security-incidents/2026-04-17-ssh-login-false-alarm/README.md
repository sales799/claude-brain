# 2026-04-17 — SSH Login Alert Investigation (False Alarm)

**Host:** `srv1129532` (147.93.103.194)
**Reporter:** Talpro CTO Telegram bot
**Triage:** Claude Code session `claude/investigate-ssh-logins-eHZCk`
**Verdict:** ✅ No compromise. Legitimate GitHub Actions + team activity.

---

## Summary

Four SSH login alerts fired for `root@srv1129532` on 2026-04-17:

| Time (UTC) | IP | Key fingerprint | Actor |
|---|---|---|---|
| 09:26:25 | `145.132.102.228` | `mfS7NXbHd8FOR...` | GitHub Actions runner (EU) |
| 09:27:16 | `49.37.171.248` | `KjLq6+We+YvOi...` | CEO Mac mini (Jio) |
| 09:50:19 | `172.183.91.6` | `mfS7NXbHd8FOR...` | GitHub Actions runner (Azure) |
| 11:15:01 | `52.152.180.197` | `mfS7NXbHd8FOR...` | GitHub Actions runner (Azure) |

The `mfS7NXbHd8FOR...` key is `github-actions-talpro`, installed 2026-04-16 for CI deploys. GitHub-hosted runners run on Azure, which explains the foreign-looking IPs.

## Root cause of false alarm

The Telegram CTO bot does not know about the `github-actions-talpro` deploy key, so every CI deploy generates a `🔐 SSH login on srv1129532` alert that looks like an unauthorized human login.

## Full key inventory (from 7-day auth.log audit)

| Fingerprint | Label | Legitimate source | Notes |
|---|---|---|---|
| `SHA256:KjLq6+We+YvOi...` | `macmini@talpro` | `49.37.171.248` (Jio) | CEO's Mac |
| `SHA256:zEBjajHFhA...` | `bhaskaranand@Bhaskars-MacBook-Air.local` | `49.37.171.248`, `49.205.203.134` | Bhaskar's Mac |
| `SHA256:avBNxcogddYO...` | `talprouniverse@Talpros-Mac-mini.local` (RSA) | `100.116.37.114` | CEO's Mac over Tailscale |
| `SHA256:O6LKNRGyn...` | `bhaskar@talpro.in` | `147.93.103.194` (self) | Local automation / loopback SSH |
| `SHA256:mfS7NXbHd8FOR...` | `github-actions-talpro` | Azure IP ranges | CI deploy key, installed 2026-04-16 |
| `SHA256:a44ApkJAJu08...` | (no comment, disabled 2026-04-17) | `49.37.171.248` (Jio) | Old CEO key, flagged by CTO security review and disabled; legitimate but unhygienic |
| `SHA256:2n/+PgMK...` | `#hostinger-managed-key` (RSA) | `169.254.0.1` (Hostinger panel) | Hostinger browser-terminal access; do not remove |

Cron jobs, processes, and network connections reviewed — all legitimate Talpro infrastructure (autoheal, CIE, LeadHunter, watchdogs, n8n, Grafana, Qdrant, listmonk, Tailscale, monarx-agent).

## Remediation

See `remediation.md` in this directory for copy-paste commands.

1. Harden `github-actions-talpro` with `no-pty,no-agent-forwarding,...` restrictions.
2. Teach the Telegram bot to map known key fingerprints to friendly labels so CI deploys don't fire human-login alerts.
3. Delete the already-disabled no-comment key from `authorized_keys`.
4. Properly label the Hostinger managed key.
