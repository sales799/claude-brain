# Durga Council Amendment — 6th Shakti: Saumya (Design)

**Amendment ID:** DURGA-AMEND-001
**Ratified:** 2026-04-24
**Amends:** `durga_council_charter` (MCP memory) + `/opt/apps/durga-coo/` service config
**Authority:** CDO Constitution v1.0 §11
**Sovereign:** Maharani Shilpa (CDO)

---

## Change

Add **Saumya** (सौम्य — graceful, harmonious) as the 6th Shakti of the Durga Council. Saumya is the CDO's sub-agent inside Durga — design-readiness checker on any cross-scope `founder_request`.

## Updated Council

| Shakti | Sanskrit | Role | Owner |
|---|---|---|---|
| Durga | दुर्गा | Orchestrator / COO container | — |
| Saraswati | सरस्वती | Research (Vidya) | CEO arm |
| Lakshmi | लक्ष्मी | Infra readiness (Sthira) | CTO arm |
| Kali | काली | Execution (Kriya) | CTO arm |
| Chandi | चण्डी | Gatekeeper verdict | Constitution enforcer |
| **Saumya** | **सौम्य** | **Design readiness** | **CDO arm (NEW)** |

## Saumya's Scope

When Durga receives a `founder_request` and fires sub-agents in parallel, Saumya runs if the request has ANY of:
- UI/UX touched (`scope=ui` or keywords: design, component, page, landing, screen, form, modal, error state)
- New user-facing flow
- Launch readiness check
- Brand surface change
- Accessibility question

### Saumya's outputs

```json
{
  "shakti": "saumya",
  "scope": "design",
  "verdict": "DESIGN_READY | DESIGN_GAPS | DESIGN_BLOCK",
  "design_gate_quick_score": {
    "accessibility": 0-5,
    "usability": 0-5,
    "brand": 0-5,
    "system": 0-5,
    "total": 0-20
  },
  "blockers": ["..."],
  "redlines": ["..."],
  "estimated_design_hours": N
}
```

### Saumya's verdict rules

- **DESIGN_READY:** score ≥16/20 AND accessibility ≥4/5
- **DESIGN_GAPS:** score 10-15 or accessibility 2-3 — needs iteration before ship
- **DESIGN_BLOCK:** score <10 OR accessibility ≤1 — Maharani veto invoked per SO-CDO-19

## Routing in Durga

Chandi (final gatekeeper) now waits for Saumya's verdict before emitting final AUTO_EXECUTE / ASK_CEO / REJECT / CLARIFY on design-touching requests.

```
Durga → parallel fire [Saraswati, Lakshmi, Kali, Saumya] → Chandi synthesizes → verdict
```

If Saumya returns DESIGN_BLOCK, Chandi's verdict defaults to REJECT or CLARIFY, never AUTO_EXECUTE.

## Implementation

1. **Memory:** Update `durga_council_charter` to include Saumya.
2. **Service:** Extend `/opt/apps/durga-coo/` parallel-agent dispatcher to include `saumya` worker.
3. **Saumya worker logic:**
   - Parse request scope
   - If UI-touching: run axe-core on referenced URL, pull design token compliance stats, invoke `design:design-critique` quick-mode
   - Emit JSON verdict
4. **Chandi update:** Incorporate `saumya.verdict` into final verdict synthesis.
5. **Test:** Fire test `founder_request({ scope: "design", text: "review cvpro landing page" })` → verify Saumya runs and returns structured verdict.

## Invocation from CDO Agent

```
Task(subagent_type: "cdo", prompt: "Score cvpro.in landing page via Saumya quick-audit, return JSON")
```

Or direct MCP:
```
mcp__talpro-cto__founder_request({ scope: "design", ... })
  → internally fires Saumya alongside Saraswati + Lakshmi + Kali
```

---

*Canonical copy: `~/claude-brain/_shared/AMENDMENTS/durga_6th_shakti_saumya.md`*
*Mirror: `durga_council_charter` (MCP memory) once service update deployed*
