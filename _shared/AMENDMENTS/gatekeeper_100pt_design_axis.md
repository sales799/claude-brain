# Gatekeeper Quality Gate Amendment — 80pt → 100pt (Design Axis Added)

**Amendment ID:** QG-AMEND-001
**Ratified:** 2026-04-24
**Amends:** `talpro_cto_quality_gate` (MCP tool) + Gatekeeper scoring rubric
**Authority:** CDO Constitution v1.0 §7 + CTO v11.0 co-sovereign clause
**Sovereign:** Maharani Shilpa (CDO) + Arjun (CTO) joint

---

## Change

Extend the existing 80-pt Quality Gate (10 categories × 8 pt) to **100 pt** by adding a **Design axis** (20 pt, 4 sub-scores × 5 pt). The Design axis is CDO-owned; CTO retains ownership of the existing 80 pts.

## New structure

| # | Category | Points | Owner | Minimum |
|---|---|---|---|---|
| 1 | Security | 10 | CTO | 8 |
| 2 | Build | 10 | CTO | 9 |
| 3 | Compliance | 10 | CTO | 8 |
| 4 | Tests | 10 | CTO | — |
| 5 | Performance | 10 | CTO | — |
| 6 | Observability | 10 | CTO | — |
| 7 | Deploy | 10 | CTO | — |
| 8 | Docs | 10 | CTO | — |
| 9 | Reliability | 10 | CTO | — |
| 10 | Cost | 10 | CTO | — |
| **11** | **Design** | **20** | **CDO** | **16 (AND a11y ≥4)** |
| **Total** | | **100** | | |

## Design axis detail (20 pt)

### Accessibility (5 pt) — **Maharani's veto axis**
- 1 pt: axe-core 0 critical violations
- 1 pt: keyboard-only completes primary flows
- 1 pt: screen reader announces structure correctly
- 1 pt: contrast ≥ 4.5:1 text, ≥ 3:1 UI
- 1 pt: focus visible, skip-links, ARIA correct

### Usability (5 pt)
- 1 pt: Nielsen 10 heuristics, 0 major violations
- 1 pt: task completion ≥ 90%
- 1 pt: SUS ≥ 72 or proxy
- 1 pt: error prevention + undo
- 1 pt: empty/loading/error states present

### Brand (5 pt)
- 1 pt: voice aligned (CMO QA)
- 1 pt: typography tokens compliant
- 1 pt: color tokens compliant
- 1 pt: visual hierarchy
- 1 pt: iconography consistent

### System (5 pt)
- 1 pt: tokens used (no hard-coded)
- 1 pt: component reuse ≥ 70%
- 1 pt: patterns documented
- 1 pt: responsive at 320/768/1024/1440
- 1 pt: motion respects `prefers-reduced-motion`

## Veto rule

Even with 85/100 total, if **Accessibility axis < 4/5**, Maharani vetoes ship. Per SO-CDO-19 and Pillar 8.

## MCP tool changes

`talpro_cto_quality_gate` signature extended:

```
Input: { project, scope, options }
Output: {
  categories: {
    security: { score, max: 10, minimum: 8, pass },
    build: { ... },
    ...,
    design: {
      score,
      max: 20,
      minimum: 16,
      sub: {
        accessibility: { score, max: 5, minimum: 4, pass },
        usability: { score, max: 5, pass },
        brand: { score, max: 5, pass },
        system: { score, max: 5, pass }
      },
      pass
    }
  },
  total: 0-100,
  verdict: PASS | FAIL,
  blockers: [...]
}
```

## Rollout

1. **Phase 1 (now):** Documentation in place (this file + CDO Constitution §7).
2. **Phase 2 (CDO next session):** Extend MCP tool implementation in `/opt/talpro-mcp-server/`.
3. **Phase 3:** Update Rakshak to include design-axis sub-auditor (calls Saumya).
4. **Phase 4:** Back-fill: score all live Talpro ventures on new 100-pt scale; Founder digest.

## Legacy compatibility

- Old 80-pt scores remain valid for historical Rakshak runs.
- New Rakshak runs score 100-pt.
- Prahari v2 loops must check design axis before emitting GO.

---

*Canonical copy: `~/claude-brain/_shared/AMENDMENTS/gatekeeper_100pt_design_axis.md`*
