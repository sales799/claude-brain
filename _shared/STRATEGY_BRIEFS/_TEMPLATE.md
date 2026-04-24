# STRATEGY BRIEF: {Initiative Name}

**From:** CEO Mode
**To:** CTO Mode
**Date:** YYYY-MM-DD
**IdeaForge Session:** {MANTHAN session ID or link}
**IdeaForge Gate Score:** {X}/24 (must be ≥20 to ship; see §9.2 of CEO Constitution v1.0)
**Financial Gate:** {Cleared | Pending Ask #N | Not Required}
**Frameworks Applied:** {comma-separated list from Arsenal}
**CEO Mode Confidence:** {XX%}

---

## 1. WHAT (one sentence)
{The thing to build, in one line. No buzzwords. A CTO reads this and knows exactly what code needs to exist.}

---

## 2. WHY (business case)
{2-3 paragraphs. Cite frameworks. Reference evidence sources. No "I think.".}

**Evidence sources:**
- {URL / document / research artifact / primary interview}
- {...}

---

## 3. WHO (target user + JTBD)

**Primary segment:** {specific user type}
**Job-to-be-done:** When I'm in [situation], I want to [motivation], so I can [outcome].
**Secondary segments (if any):** {list}
**Non-users (explicit):** {who this is NOT for}

---

## 4. SUCCESS CRITERIA (measurable)

**North Star metric:** {metric} = {target} by {date}

**Lead indicators (weekly):**
- {indicator 1} = {target}
- {indicator 2} = {target}
- {indicator 3} = {target}

**Quality bars:**
- Uptime: ≥99.5% in first 30 days
- p95 latency: ≤{Xms}
- Error rate: ≤{Y%}
- {product-specific quality metric}

---

## 5. CONSTRAINTS

- **Budget:** ₹{X} ({one-time / monthly}) — {financial gate status}
- **Time:** ship by {deadline}
- **Tech constraints:** {e.g., "must run on VPS KVM4, no new Docker containers", "must reuse JAYA publish endpoint"}
- **Compliance:** {e.g., DPDP Act, SOC-2 applicable}
- **Brand/voice:** {e.g., "follow existing ProveIQ brand-voice.yaml"}

---

## 6. NON-GOALS (explicit scope protection)

These are things we are NOT doing in this initiative:
- {non-goal 1}
- {non-goal 2}
- {non-goal 3}

Any scope-creep request during execution → redirect to a new IdeaForge session.

---

## 7. PRE-MORTEM (top 3 failure modes)

1. **{failure mode}** → mitigation: {specific action}
2. **{failure mode}** → mitigation: {specific action}
3. **{failure mode}** → mitigation: {specific action}

---

## 8. ASSUMPTIONS LOG

Things believed but not fully verified. Any of these turning out wrong should trigger a re-evaluation of the brief.

| # | Assumption | Confidence | Risk if wrong |
|---|---|---|---|
| A1 | {assumption} | {XX%} | {consequence} |
| A2 | {assumption} | {XX%} | {consequence} |

---

## 9. SUGGESTED TECHNICAL DIRECTION (CTO owns final call)

{Non-binding technical suggestions. CTO Mode makes the final architecture call after reviewing this brief.}

- Architecture hint: {X}
- Reuse opportunity: {reference to CVPRO / existing service / skill}
- Data model consideration: {Y}
- Deploy approach: {Z}
- Quality gate floor for this initiative: {N}/80

---

## 10. POST-LAUNCH LOOP BACK TO CEO

- CTO signals "shipped" via `_shared/HANDOFFS/cto_to_ceo_{date}.md`
- CEO runs Post-Launch Review stack (CEO Constitution v1.0 §8.13) at 24h, 7d, 30d
- Review cadence: {daily | weekly | monthly}
- Kill-criteria (if triggered, we shut this down):
  - {criterion 1}
  - {criterion 2}

---

## 11. CTO PROGRESS LOG (CTO appends here)

*CTO Mode appends progress, commits, deploys, quality-gate scores here as execution proceeds.*

### {YYYY-MM-DD HH:MM} — {status update}
- Commit: {SHA}
- Deploy: {URL}
- Quality gate: {X}/80
- Health: {200 / errors}
- Notes: {any deviation from brief}

---

**End of Strategy Brief template.**

*Every field must be filled before the brief is handed off. `TBD` is acceptable only for the CTO Progress Log section.*
