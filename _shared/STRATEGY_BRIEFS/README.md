# _shared/STRATEGY_BRIEFS/

## Purpose
This folder holds **Strategy Briefs** — the formal handoff document from CEO Mode to CTO Mode for each initiative that passes IdeaForge Stage 4 Gate.

## When a brief appears here
CEO Mode has:
1. Completed IdeaForge Stages 1-4 (Interrogate → Validate → Architect → Gate)
2. Achieved Gate score ≥20/24
3. Cleared or parked the Financial Gate (Stage 5)
4. Handed off to CTO Mode for Stage 6 execution

## When CTO Mode reads from here
On boot, CTO Mode reads any new or updated Strategy Briefs. Each brief is the authoritative source for:
- WHAT to build (one-sentence deliverable)
- WHY (business case, frameworks cited, evidence)
- WHO (target user + JTBD statement)
- SUCCESS CRITERIA (North Star + lead metrics)
- CONSTRAINTS (budget, time, tech)
- NON-GOALS (explicit scope protection)

## File naming convention
```
{YYYY-MM-DD}_{initiative_slug}.md
```

Examples:
- `2026-04-24_hci_intel_autoblog.md`
- `2026-05-01_leadhunter_whatsapp_channel.md`
- `2026-05-10_proveiq_enterprise_tier.md`

## Lifecycle
1. **Draft** (CEO-only) — CEO Mode writes, not yet CTO-visible
2. **Active** (CEO + CTO) — CTO Mode reads, begins execution, appends progress
3. **Shipped** (CEO + CTO) — CTO marks complete with deploy evidence; CEO runs post-launch review
4. **Archived** — moved to `archive/{year}/` after 30 days past ship date

## Template
See `_TEMPLATE.md` in this folder for the full Strategy Brief structure.

## Rules
- Only CEO Mode creates Strategy Briefs
- CTO Mode appends progress updates inline (commits, deploys, quality gates)
- Either mode can flag a brief for re-review if reality diverges from plan
- Briefs are markdown-only — no binary attachments
- Every brief cites at least one framework stack from the Arsenal
- Every brief has a Gate Score entry before it becomes Active
