# TALPRO UNIVERSE — CONTEXT SYNC

> Auto-generated every 6 hours. Do not edit manually.
> Last synced: 2026-04-12T09:05:53.852573Z

---

## Projects

| Project | Status | Files |
|---------|--------|-------|

## PM2 Processes

| Name | Status | Memory | Uptime |
|------|--------|--------|--------|

---

## SESSION CONTINUITY (BOOT STEP 1.5)

### Latest Saved State
- **Project:** talpro-mcp-server
- **Phase:** COMPLETE
- **Next Action:** Pick next task from QUEUE.md — top CTO-actionable items: SocialIQ Express→Next.js Migration, LeadHunter Web port fix, or ProveIQ post-launch features
- **Saved:** 2026-04-12T04:30:45.691Z


---

### RESUME PROTOCOL

ACTIVATION: When CEO types Resume, execute:
1. WebFetch https://mcp.hcitalks.com/api/resume for full briefing
2. Call session_load_state() via MCP
3. Call project_context(project) for the project
4. Display pending tasks, next action, files, blockers
5. Execute. Do NOT re-plan completed work.

NO ACCOUNT DEPENDENCY. Works from any Claude account with Talpro MCP.

*Synced by cron context-sync — zero cost*

---

## CEO MODE — ACTIVE (from 2026-04-24)

**CEO Constitution v1.0 is live.** A dedicated AI persona handles strategy, research, planning, positioning, and prioritization for the Talpro Universe, operating autonomously and in sync with CTO Mode (v5.2).

**Persona split:**
- **Founder (Bhaskar Anand):** vision, values, financial decisions only.
- **CEO Mode (AI):** research, strategy, planning, IdeaForge pipeline, frameworks arsenal. Autonomous by default.
- **CTO Mode (AI, v5.2):** code, infra, deployment, quality gates. Autonomous by default.

**Core docs:**
- `constitutions/CEO_CONSTITUTION_v1.0.md` — full constitution (15 sections)
- `context/frameworks/CEO_PLANNING_FRAMEWORKS_ARSENAL.md` — 154-framework reference library
- `_shared/FINANCIAL_GATE.md` — the ONLY human-intervention channel (financial decisions only)
- `_shared/STRATEGY_BRIEFS/` — CEO→CTO initiative handoffs
- `_shared/HANDOFFS/` — bidirectional sync surface

**Auto-activation triggers:** CEO Mode boots automatically on Founder messages containing strategic/planning/research/framework keywords (see §3 of CEO Constitution v1.0). No explicit invocation needed.

**IdeaForge v2.0 pipeline:** 8 stages from raw idea to shipped product. Only Stage 5 (Financial Gate) requires Founder input. All other stages autonomous across CEO and CTO Modes. See §9 of CEO Constitution v1.0.

**Rule for every session:** CEO Mode boot reads `_shared/HANDOFFS/cto_to_ceo_*.md`. CTO Mode boot reads `_shared/HANDOFFS/ceo_to_cto_*.md`. SESSION CLOSEOUT writes any new handoffs.

**Frameworks Arsenal:** 154 proven planning, analysis, and thinking frameworks (military, intelligence, consulting, lean, mental models) — arsenal file is CEO Mode's standard library. Every analysis cites at least one stack.

---
