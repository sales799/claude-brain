# AGENTS.md — Talpro Universe Agent Registry

**Type:** Index only. No content duplication. Every row points to its canonical source.
**Scope:** All agents across Claude Code, Durga Council, Talpro MCP, JAYA, and product-internal AI.
**Last verified:** 2026-04-24 (v1.1 — CDO activation)
**Regenerate:** `bash scripts/regen-agents-md.sh` (reads canonical sources, rewrites this file)
**Read order at session boot:** After `cto_king_character` + `cmo_queen_character` + `cdo_maharani_character`, before first user-visible action.

---

## 0. Truth Hierarchy for This File

1. **Canonical source column wins.** If this file disagrees with the canonical source, the canonical source is right and this file is stale — run the regenerator.
2. **Unverified entries are marked `🟡 TO VERIFY`** and must not be invoked until confirmed against live code.
3. **Never hard-code scope/tool-access claims here.** This file describes *pointers* to scope, not scope itself.

---

## 1. Sovereign Characters (the co-rulers)

| Agent | Archetype | Purpose | Canonical Source |
|---|---|---|---|
| **Arjun** — CTO King | 👑 | Ship product. Defend realm. Rule systems end-to-end. | `cto_king_character` (MCP memory) → constitution v11.0 §9 + Pillar O |
| **Nisha** — CMO Queen | 👸 | Grow pipeline. Compound brand. Win the market. | `cmo_queen_character` (MCP memory) |
| **Shilpa** — CDO Maharani | 🎨 | Rule craft. Enforce accessibility. Own design system. | `cdo_maharani_character` (MCP memory) → `CDO_CONSTITUTION_v1.0.md` |

Joint decisions: Durga Council (`manthan_start`) or `ceo-cto-dialogue` skill (now extendable to 3-sovereign deliberation).

**Founder (Bhaskar):** the 5% — vision, capital, final override. All three sovereigns report to Founder.

---

## 2. Durga Council (VPS service `durga-coo` :3030) — v2.0 (6 Shaktis)

| Agent | Shakti | Role | Canonical Source |
|---|---|---|---|
| **Durga** | Mother/container | COO orchestrator. Receives `founder_request`, fires 5 parallel sub-agents, synthesizes. | `durga_council_charter` + `/opt/apps/durga-coo/` |
| **Saraswati** | Vidya | Research sub-agent. Memory/transcript excavation. | `durga_council_charter` |
| **Lakshmi** | Sthira | Infra readiness. PM2, disk, DB, nginx. | `durga_council_charter` |
| **Kali** | Kriya | Execution. Runnable plan + rollback + tests. | `durga_council_charter` |
| **Saumya** | सौम्य (grace) | **Design readiness. CDO arm. Gates UI-touching requests.** | `_shared/AMENDMENTS/durga_6th_shakti_saumya.md` |
| **Chandi** | Fierce defender | Constitution gatekeeper. Verdict: AUTO_EXECUTE / ASK_CEO / REJECT / CLARIFY. | `durga_council_charter` |

---

## 3. Claude Code Delegation Agents (~/.claude/agents/)

19 total. Per-agent `.md` files. Verify with `ls ~/.claude/agents/`.

cto · cmo · **cdo (NEW)** · architect · planner · code-builder · code-reviewer · database-reviewer · build-error-resolver · security-reviewer · refactor-cleaner · deployer · ops-monitor · rakshak · nirmaan · prahari · Explore · Plan · general-purpose

Each `.md` defines its own tool access + system prompt. `rakshak`/`nirmaan`/`prahari` also have MCP tool counterparts — MCP is canonical for stateful runs.

---

## 4. Talpro MCP-Backed Operational Agents

| Agent | Purpose | MCP Invocation |
|---|---|---|
| **Rakshak** | Pre-launch audit. Emits GO/NO-GO. Now 100-pt (incl. Design axis). | `rakshak_consolidate`, `rakshak_save`, `rakshak_status` |
| **Nirmaan** | Autonomous remediation of Rakshak findings. | `nirmaan_start`, `nirmaan_next_autonomous` |
| **Prahari** | Launch loop (audit→fix→verify until GO). | `prahari_advance`, `prahari_tick`, `prahari_status` |
| **Manthan (MANTHAN-3)** | Founder-request deliberation. Feeds Durga. | `manthan_start`, `manthan_list`, `manthan_status`, `manthan_save`, `manthan_blueprint` |
| **Token Sentinel** | Spend/cache/opus%/quota. SO-173 auto-load at boot. | `memory_get("token_sentinel_latest")` |
| **Design Gate (planned)** | 20-pt Design Quality Gate scorer. CDO-owned. | `talpro_design_gate_score` (v2 roadmap) |

---

## 5. JAYA Internal Agents (`/opt/jaya`, PM2 `jaya`, :3020)

Pipeline sub-agents, not standalone Claude agents:
- **topic-queue scorer** — trend 40% + authority 25% + keyword 20% + freshness 15%
- **synthesis** — draft gen with inline `<sup>[n]</sup>` citations
- **pariksha (eval-judge)** — weekly LLM-as-judge, 5-axis rubric → `JayaEvalScore`
- **cover+visuals** — fal.ai Flux Schnell waterfall
- **plagiarism+dedup** — duplicate gate before publish
- **venture-direct-scheduler** — 9 ventures × 27 runs/day staggered

Live state: memory key `jaya_production_state`.

---

## 6. Product-Internal Agents — 🟡 TO VERIFY

Claimed in userPreferences context but NOT confirmed in live memory/services as of 2026-04-24:

| Product | Claimed | Status | Verification Path |
|---|---|---|---|
| HireIQ Pro | 18 agents: SCAN, HELIX, LENS, PING, FLOW, LOOP, SYNC, SPAR, NOTE, EDGE, AURA, PATH, +6 | 🟡 | grep `/opt/apps/hireiqpro/` |
| SocialIQ | 5 personas: Aarya, Dev, Meera, Kabir, Zara | 🟡 | Pending Telegram token + N8N API key |
| ProveIQ | Playbook Generator + AI-Employer Scorer + Integrity Layer | 🟡 | Check ProveIQ codebase vs Constitution v2.0 |

**Next-session action:** promote to §4 or delete.

---

## 7. Invocation Cheat Sheet

| Intent | Route |
|---|---|
| Deploy / ship / launch | `prahari` or `rakshak` (MCP) |
| Fix / remediate | `nirmaan` (MCP) |
| Audit / review | `rakshak` (MCP) or `code-reviewer` agent |
| Build / code | `code-builder` agent + stack skill |
| Architecture decision | `architect` agent + `cto-advisor` skill |
| **Design review / critique / UX** | **`cdo` agent + `design:*` skills** |
| **Accessibility / WCAG / a11y** | **`cdo` agent — `design:accessibility-review` (Maharani veto)** |
| **Design system / tokens / components** | **`cdo` agent + `design:design-system` + `theme-factory`** |
| Founder request (cross-scope) | `founder_request()` → Durga (now fires Saumya too) |
| Deep research | `Explore` agent or `Saraswati` via Durga |
| Infra readiness | `ops-monitor` agent or `Lakshmi` via Durga |
| Safe to auto-execute? | `Chandi` via Durga |
| Spend / token check | `memory_get("token_sentinel_latest")` (SO-173 auto) |
| Marketing / campaign | Inherit Nisha + marketing skills |
| Cross-session deep work | `manthan_start()` |

---

## 8. Boot Integration (v1.1)

Cowork Master Prompt v5.1 boot sequence (updated 2026-04-24):

```
1. cto_king_character        — CTO sovereign
2. cmo_queen_character       — CMO sovereign
2.5 cdo_maharani_character   — CDO sovereign (NEW v1.1)
3. cto_skill_arsenal
3a. cmo_skill_arsenal
3b. cdo_skill_arsenal        — NEW v1.1
4. cto_autonomous_operation_protocol
5. cto_credential_vault
6. device_account_mapping
7. MEMORY                    — index
7a. agents_registry_canonical v1.1
```

---

## 9. Version

- **v1.1 (2026-04-24)** — CDO activation. 3 sovereigns (Arjun, Nisha, **Shilpa**), 6 Durga Shaktis (+ Saumya), 19 Claude Code delegates (+ cdo), 5 MCP operational + 1 planned (Design Gate), 6 JAYA internals, 3 product-internal 🟡 TO VERIFY.
- **v1.0 (2026-04-24 earlier)** — Initial. 2 sovereigns, 5 Durga, 18 Claude Code delegates, 5 MCP operational, 6 JAYA internals, 3 product-internal 🟡 TO VERIFY.

---

*Maintained by: Arjun (CTO King) + Shilpa (CDO Maharani) | Ratified: CEO Bhaskar Anand | Brain repo mirror: `claude-brain/AGENTS.md`*
