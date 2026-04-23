# MacBook Air Trade-In Migration — 2026-04-24

Session follow-up to the 2026-04-23 migration. Continues from the old-Mac backup
and picks up where the previous session stopped.

## What was done this session

1. Verified SSH to VPS (`talpro-vps`, 147.93.103.194:2244) works from new Mac.
2. Resolved the MCP header mystery — constant lives in `/opt/talpro-mcp-server/src/constants.ts`:
   `export const API_KEY_HEADER = "x-api-key";`
3. Mapped the real MCP endpoint via nginx on `mcp.hcitalks.com`:
   `https://mcp.hcitalks.com/cto/mcp` → `127.0.0.1:11435/mcp`.
4. Traced the phantom `claude-mem/` case-collision: it was never in the `claude-brain`
   repo. It lives in `~/Code/talpro-assets/claude-brain/claude-mem/` (5 TS files with
   PascalCase/lowercase collisions). `talpro-assets` is the repo that needs case-sensitive
   handling, not `claude-brain`.
5. Deleted a stray self-referential symlink `/Volumes/claude-brain-cs/claude-brain/claude-brain`
   that pointed back to its own parent (created by an accidental `ln -s` during
   DMG setup — created an infinite directory loop).
6. Confirmed `~/Code/claude-brain → /Volumes/claude-brain-cs/claude-brain` symlink
   is correct and DMG auto-mount line was added to `~/.zprofile`.

## Current repo state (claude-brain)

```
/Volumes/claude-brain-cs/claude-brain/
  ├── .claude/          (Claude Code local state)
  ├── .git/             (git metadata)
  ├── .mcp.json         (Hostinger MCP connector spec)
  ├── CLAUDE.md         (repo docs)
  └── context.md        (auto-sync context)
```

No `claude-mem/` folder — the repo is intentionally small (~30 KB, 195 objects).

## MCP reconnect — exact values for claude.ai UI

When re-adding the TALPRO-MCP connector in claude.ai's connector settings:

| Field        | Value                                                              |
|--------------|--------------------------------------------------------------------|
| Name         | `talpro-mcp` (or whatever label you prefer)                        |
| URL          | `https://mcp.hcitalks.com/cto/mcp`                                 |
| Header name  | `x-api-key`                                                        |
| Header value | (the `TALPRO_MCP_API_KEY` from `/opt/talpro-mcp-server/.env` on the VPS) |

The API key is in the server's `.env` — don't commit it here. Retrieve it via:
`ssh -p 2244 root@147.93.103.194 "grep TALPRO_MCP_API_KEY /opt/talpro-mcp-server/.env"`

## Outstanding items

| Item | Status | Action |
|------|--------|--------|
| MCP connector re-add | ✅ Done via CLI | `claude mcp add --transport http talpro-mcp ...` — handshake green, v1.2.0 |
| talpro-assets case-collision | ✅ Done | Re-cloned into `/Volumes/claude-brain-cs/talpro-assets`, symlinked to `~/Code/talpro-assets`. Git tree clean, all 10 collided files present |
| Tailscale CLI | Optional | `brew install --cask tailscale` if needed |
| OpenRouter API key rotation | Deferred | Founder decision — key is currently active |

## talpro-assets fix — commands used

```
rm -rf ~/Code/talpro-assets
cd /Volumes/claude-brain-cs && gh repo clone sales799/talpro-assets
ln -sfn /Volumes/claude-brain-cs/talpro-assets ~/Code/talpro-assets
```

Verification: `ls claude-brain/claude-mem/` now shows both `Context.ts` and `context.ts`
(and the 4 other pairs) side-by-side. Previously git marked these as phantom-modified
because the case-insensitive filesystem only kept one of each pair in the working tree.

## Fleet reference

New Mac Air (post-migration):
- macOS user: `bhaskar_universe`
- Case-sensitive DMG: `~/claude-brain-cs.dmg` (2 GB) mounted at `/Volumes/claude-brain-cs`
- Auto-mount: line in `~/.zprofile`
- SSH agent loaded with: `id_ed25519`, `talpro_deploy`, `competeiq_deploy`
- Homebrew tools: coreutils, gh, git, jq, node 25.9.0, pnpm 10.33.0, uv, wget, rsync, powershell
- Docker Desktop 4.70.0 installed
- Git: `sales799 / sales@talpro.in`
