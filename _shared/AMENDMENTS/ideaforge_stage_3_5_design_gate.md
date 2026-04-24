# IdeaForge v2.0 Amendment — Stage 3.5 Design Gate

**Amendment ID:** IF-AMEND-001
**Ratified:** 2026-04-24
**Amends:** `CEO_CONSTITUTION_v1.0.md` §IdeaForge v2.0 pipeline
**Authority:** CDO Constitution v1.0 §10
**Sovereign:** Maharani Shilpa (CDO)

---

## Change

Insert **Stage 3.5 — Design** between existing Stage 3 (Architect) and Stage 4 (Gate).

## New pipeline

| Stage | Name | Owner | Deliverable | Gate |
|---|---|---|---|---|
| 0 | Trigger Detection | — | Idea captured | — |
| 1 | Interrogate | CEO | 10 questions answered | — |
| 2 | Validate | CEO | Hypothesis log + evidence | — |
| 3 | Architect | CEO → CTO | Technical blueprint | — |
| **3.5** | **Design** | **CDO** | **Wireframes + tokens + a11y plan + Design Gate preview** | **≥16/20** |
| 4 | Gate | CEO + CTO + CDO + CMO | Joint 24-pt score | ≥20/24 |
| 5 | Financial Gate | Founder | Spend approval | Human checkpoint |
| 6 | Execute | CTO (+ CDO for UI) | Code + deploy + Prahari | Rakshak GO |
| 7 | Post-Launch | CEO + CTO + CDO | Metrics + iterate | — |

## Stage 3.5 Inputs

- Technical blueprint from Stage 3 (CTO)
- Strategy memo from Stages 1–2 (CEO)
- Customer research artifacts (if available)

## Stage 3.5 Activities (CDO-owned)

1. **User flow diagrams** — primary + edge flows
2. **Low-fi wireframes** — critical screens only (not hi-fi)
3. **Design token proposal** — reuse vs extend existing library
4. **Component inventory** — reuse vs new (justify new with ≥3× pattern rule)
5. **Accessibility plan** — who will be excluded? mitigation?
6. **Microcopy first-pass** — empty states, errors, confirmations
7. **Preliminary Design Gate self-score** — 4-axis 20-pt

## Stage 3.5 Outputs

- `designs/{project}/flows.md`
- `designs/{project}/wireframes/` (Figma links or exported PNG)
- `designs/{project}/tokens-diff.md`
- `designs/{project}/components-inventory.md`
- `designs/{project}/a11y-plan.md`
- `designs/{project}/microcopy.md`
- `designs/{project}/design-gate-self-score.json`
- `/_shared/HANDOFFS/cdo_to_all_{date}_{slug}.md`

## Stage 3.5 Pass/Fail

- **PASS (≥16/20):** Advance to Stage 4 (joint Gate)
- **FAIL (<16/20):** Return to CTO/CEO with **actionable redlines**. Maharani writes specific diff, not "redesign."
- **ACCESSIBILITY BLOCK:** If Accessibility axis < 4/5, block regardless of total. Per SO-CDO-19.

## Integration with Stage 4 Gate scoring

Stage 4 joint score expands from 20 to **24 points**:
- Strategy (CEO): 6 pt
- Technical (CTO): 6 pt
- Growth (CMO): 6 pt
- **Design (CDO): 6 pt (rolled up from Stage 3.5 Design Gate ÷ 20 × 6, rounded)**

Pass: ≥20/24 joint.

## Auto-routing

`founder_request` or `manthan_start` with `scope ∈ {product, feature, ui, launch}` auto-triggers Stage 3.5 after CTO Stage 3 completes.

## Auditing

Every Stage 3.5 run logs to `/_shared/HANDOFFS/cdo_to_all_{date}_{slug}.md` with:
- Design Gate self-score (JSON)
- Links to all deliverables
- Blockers / redlines
- Estimated design-hours remaining

---

*This amendment is binding on CEO Constitution v1.0 and the IdeaForge v2.0 pipeline.*
*Canonical copy: `~/claude-brain/_shared/AMENDMENTS/ideaforge_stage_3_5_design_gate.md`*
