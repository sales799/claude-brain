# Tailscale Support Ticket — Draft

**Submit at:** https://tailscale.com/contact/support
**Account:** bhaskar@talpro.in
**Tailnet:** tail6279ba.ts.net

---

## Subject

Data plane fails on macOS 26.4.1 (Tahoe) + Tailscale 1.96.5 — control plane healthy, ICMP/TCP 100% loss to all peers

## Body

Hello,

Reporting what I believe is a macOS 26 Tahoe compatibility issue with Tailscale 1.96.5. Bugreport ID below.

### Environment

- **Device:** MacBook Air, Apple Silicon (arm64)
- **macOS:** 26.4.1 (build 25E253) — Tahoe
- **Tailscale:** 1.96.5 (commit 4ee448d3a47df7cbb5696e671bb317d0bb99fffc), macsys build (NOT App Store)
- **Network Extension:** `io.tailscale.ipn.macsys.network-extension` 1.96.5/101.96.5, activated and enabled
- **Bugreport ID:** `BUG-474f0faa6bcd64aa5b56bc7b7659cda4265ea7234aeb4d483db83cea5bf25a8f-20260424040206Z-b9ea1798a1b4a3e8`

### Symptom

From this MacBook, the Tailscale **control plane is fully healthy** but the **data plane drops 100% of regular IP traffic** to every peer in the tailnet, including peers on the same LAN.

| Test | Result |
|---|---|
| `tailscale status` shows all peers online | ✅ |
| `tailscale ping <any-peer>` (TSMP, control plane) | ✅ pong in 5–24 ms |
| Direct P2P negotiated (peer shows `active; direct ...:41641`) | ✅ |
| WireGuard bytes flow (TxBytes/RxBytes increase over time) | ✅ |
| Plain `ping 100.x.x.x` (kernel ICMP) to ANY peer | ❌ 100% loss |
| `nc -z 100.x.x.x <port>` (TCP SYN) to ANY peer | ❌ timeout |
| Tailscale IPv6 path `ping6 fd7a:115c:a1e0::...` | ❌ 100% loss |
| tcpdump on remote peer's `tailscale0` during my SSH attempt | **0 packets captured** |

The same target peers (e.g., my Linux VPS at `100.64.188.7` and a Mac Mini at `100.116.37.114`) are reachable from other tailnet members via SSH and ping — only this MacBook fails.

### Reproduction

1. Ensure Tailscale 1.96.5 on macOS 26.4.1
2. `tailscale up`
3. `tailscale ping <peer>` — succeeds
4. `ping <peer-100.x-IP>` — 100% loss
5. tcpdump on the peer's `tailscale0` interface confirms zero arrival of those ICMP packets

### What I've already tried (all failed to restore data plane)

1. `tailscale down && tailscale up`
2. `osascript -e 'quit app "Tailscale"'` then `open -a Tailscale`
3. Full macOS reboot (verified fresh uptime)
4. System Settings → General → Login Items & Extensions → Network Extensions → toggled Tailscale OFF then ON (admin auth on each toggle)
5. `tailscale up --reset`

After each step: control plane recovers, data plane remains 100% loss.

### Other observations

- **Only one network extension** installed (`systemextensionsctl list` shows just Tailscale's NE)
- **No competing VPN clients** running
- **macOS Application Firewall:** disabled
- **No `pf` rules** added by us (system defaults only — couldn't inspect without sudo, but no recent custom rules added)
- **utun6** is up, MTU 1280, has correct `100.111.182.49` and `fd7a:115c:a1e0::c836:b631`
- **Direct P2P endpoint** has been observed switching between IPv4 (`147.93.103.194:41641`) and IPv6 (`[2a02:4780:12:a69::1]:41641`) — same broken result on both
- **Other Macs in my tailnet** on older macOS versions work normally — issue is isolated to this Tahoe machine

### Hypothesis

The symptom signature — "WireGuard tunnel established, control protocol works end-to-end, but kernel doesn't deliver IP packets through the tun FD in either direction" — points at a kernel/extension ABI change in macOS 26 Tahoe that 1.96.5's network extension hasn't accommodated yet.

### Workaround in place

Public SSH via key auth + UFW IP-pin is operational on my VPS, so day-to-day access is preserved. I'm using other tailnet members (Mac Mini, Mac Pro, iMac) for mesh-dependent work meanwhile.

### Ask

- Is there a known Tahoe-compat issue tracked? Beta build available?
- Anything specific I should capture in the next bugreport for kernel-level diagnostics (e.g., `sudo dtrace` on the tun FD)?
- Any temporary workaround (kernel bypass, userspace networking mode flag, etc.)?

Thanks,
Bhaskar Anand
