#!/usr/bin/env bash
# ssh-lockdown-final-cutover.sh
# Runs AFTER MacBook Tailscale mesh data-plane is restored.
# Converts SSH access from IP-pin (49.37.171.248) to tailscale0-only.
#
# Pre-flight: MacBook mesh must be working. Verify with:
#   ssh -p 2244 root@talpro-vps 'echo MESH_OK'   # no .ts.net suffix needed
# That connection must succeed before running this script — otherwise rollback path
# loses its safety net.
#
# Usage:
#   ./ssh-lockdown-final-cutover.sh                 # executes with confirmation prompt
#   ./ssh-lockdown-final-cutover.sh --dry-run       # shows what would change
#   ./ssh-lockdown-final-cutover.sh --rollback      # re-adds the Jio pin (emergency)

set -euo pipefail

DRY_RUN=0
ROLLBACK=0
case "${1:-}" in
  --dry-run) DRY_RUN=1 ;;
  --rollback) ROLLBACK=1 ;;
  '') ;;
  *) echo "Unknown flag: $1" >&2; exit 2 ;;
esac

run() {
  if [[ $DRY_RUN -eq 1 ]]; then
    echo "  [dry-run] $*"
  else
    echo "  + $*"
    eval "$@"
  fi
}

if [[ $ROLLBACK -eq 1 ]]; then
  echo "=== ROLLBACK: re-add Jio IP pin for emergency access ==="
  run "ufw allow from 49.37.171.248 to any port 2244 proto tcp comment 'rollback-jio-pin'"
  run "ufw status numbered | grep 2244"
  exit 0
fi

echo "=== Final SSH cutover to tailscale0-only ==="
echo
echo "Current state:"
ufw status numbered | grep -E "2244|tailscale" || true
echo

if [[ $DRY_RUN -eq 0 ]]; then
  read -r -p "Proceed? [y/N] " answer
  [[ "$answer" == "y" || "$answer" == "Y" ]] || { echo "Aborted."; exit 1; }
fi

echo
echo "=== STEP 1: Allow SSH on tailscale0 interface only ==="
run "ufw allow in on tailscale0 to any port 2244 proto tcp comment 'ssh-via-tailscale'"

echo
echo "=== STEP 2: Verify Tailscale SSH works from MacBook BEFORE removing Jio pin ==="
echo "  RUN THIS ON MACBOOK (separate terminal): ssh -p 2244 root@talpro-vps 'echo OK'"
echo "  It must succeed. If it doesn't, STOP and run --rollback."
if [[ $DRY_RUN -eq 0 ]]; then
  read -r -p "Did the MacBook SSH test succeed? [y/N] " answer
  [[ "$answer" == "y" || "$answer" == "Y" ]] || { echo "Aborted — rule added but pin kept. SSH still reachable via Jio pin."; exit 1; }
fi

echo
echo "=== STEP 3: Remove Jio IP pin (49.37.171.248) ==="
run "echo y | ufw delete allow from 49.37.171.248 to any port 2244 proto tcp"

echo
echo "=== STEP 4: Final state ==="
ufw status numbered | grep -E "2244|tailscale" || true
echo
echo "Expected attack surface on 2244:"
echo "  - tailscale0 (any mesh peer via Tailscale ACLs)"
echo "  - 3.109.183.7 (prod-b-talpro, for PG replication tunnel)"
echo "  - No public IPs."
