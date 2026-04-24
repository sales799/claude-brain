# _shared/HANDOFFS/

## Purpose
This folder is the **bidirectional sync surface** between CEO Mode and CTO Mode. It carries asynchronous signals that don't fit neatly into a Strategy Brief — quick status updates, strategy-call requests, escalation flags, out-of-band events.

## Two file patterns

### CEO → CTO handoffs
```
ceo_to_cto_{YYYY-MM-DD}_{slug}.md
```
CEO Mode writes these when it has a strategy-layer instruction that CTO needs to see but doesn't warrant a full Strategy Brief (e.g., "pause deploys on HireIQ until Tuesday", "flag this customer as high-priority in the data layer").

### CTO → CEO signals
```
cto_to_ceo_{YYYY-MM-DD}_{slug}.md
```
CTO Mode writes these when:
- An initiative ships (SHIPPED signal)
- An initiative blocks (BLOCKED signal)
- A strategic decision is needed (NEEDS_STRATEGY_CALL signal)
- A quality gate fails and needs CEO re-scoping

## When each mode reads this folder

**CEO Mode boot sequence (§4 of CEO Constitution v1.0):**
Reads all `cto_to_ceo_*.md` files modified since last CEO session. Processes unresolved signals first, before any new work.

**CTO Mode boot sequence (v5.2 CEO Integration Delta):**
Adds a step to read all `ceo_to_cto_*.md` files modified since last CTO session. Processes before running boot summary.

**CTO Mode SESSION CLOSEOUT (v5.2 CEO Integration Delta):**
Writes `cto_to_ceo_{date}_{slug}.md` for any CEO-relevant events occurring during the session (ships, blocks, strategy calls).

## Lifecycle

1. **Open** — file created, not yet acknowledged by the other mode
2. **Acknowledged** — receiving mode reads the file, appends an acknowledgment block at the bottom
3. **Resolved** — action taken; receiving mode appends a resolution block
4. **Archived** — file moved to `archive/{YYYY-MM}/` after 7 days past resolution

## File naming conventions

- Date format: `YYYY-MM-DD`
- Slug: short snake_case, 2-4 words, descriptive
- Examples:
  - `ceo_to_cto_2026-04-24_pause_hireiq_deploys.md`
  - `cto_to_ceo_2026-04-24_proveiq_v2.5_shipped.md`
  - `cto_to_ceo_2026-04-25_jaya_autoblog_blocked_api_key.md`

## Rules

- Handoffs are markdown-only
- Acknowledgment and resolution blocks appear at the BOTTOM of the file, in order
- Once resolved, the file is read-only and awaits archival
- High-priority handoffs use `_URGENT` prefix: `ceo_to_cto_2026-04-24_URGENT_stop_all_deploys.md`
- URGENT handoffs trigger immediate session wake if Cowork is running

## Templates

- `_TEMPLATE_ceo_to_cto.md` — for CEO Mode outgoing handoffs
- `_TEMPLATE_cto_to_ceo.md` — for CTO Mode outgoing signals

---

**This folder is the async bloodstream between CEO and CTO Modes. Neither reads the other's session transcripts — they communicate through here.**
