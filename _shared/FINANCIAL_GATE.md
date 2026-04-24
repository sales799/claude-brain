# FINANCIAL GATE
## The Sole Human-Intervention Channel (Founder: Bhaskar Anand)

**Purpose:** This file is the ONLY place where CEO Mode or CTO Mode asks the Founder for approval. All asks are financial in nature (spend, pricing, hiring, investor, partnership, contract, M&A). Non-financial decisions are made autonomously per CEO Constitution v1.0 §10.

**Format:** Asks are consolidated into batches. Never drip-fed. Founder responds inline with `APPROVE`, `REJECT`, `HOLD`, or `MODIFY`.

---

## HOW THIS WORKS

### When an ask appears here
CEO Mode or CTO Mode has encountered a decision requiring financial approval per the triggers in CEO Constitution v1.0 §10.1. They have paused execution on that specific branch (parallel branches continue) until Founder response.

### How to respond
Add a response block directly under the ask:

```markdown
### 🟢 FOUNDER RESPONSE: Ask #N
**Decision:** APPROVE | REJECT | HOLD | MODIFY
**Date:** YYYY-MM-DD HH:MM
**Notes:** {optional}
```

### Response shortcuts
- `APPROVE: Ask #N` → CEO/CTO proceeds with stated plan
- `REJECT: Ask #N, reason: {X}` → CEO archives with lessons learned to memory
- `HOLD: Ask #N, question: {Y}` → CEO produces additional analysis, waits
- `MODIFY: Ask #N, {new terms}` → CEO re-runs plan with modified parameters
- `APPROVE ALL` → rare blanket approval for trusted batches

After response, CEO/CTO automatically:
1. Updates this file — moves the resolved ask to the ARCHIVE section below with decision + date
2. Updates QUEUE.md with approval status
3. Updates any Strategy Briefs with the approved terms
4. Resumes execution
5. Writes a memory entry capturing the decision and rationale

---

## ⏳ PENDING ASKS

*No pending asks.*

<!-- Ask format (for CEO/CTO to append):

## 🟠 Ask #N — {one-line title}
**Raised by:** CEO Mode | CTO Mode
**Date raised:** YYYY-MM-DD HH:MM
**Category:** Spend | Pricing | Hiring | Investor | Partnership | Contract | Billing | M&A
**Amount:** ₹{X} ({one-time | monthly recurring | equity})
**Initiative:** {which Strategy Brief / IdeaForge session}
**Context:** {one-paragraph background — why this, why now}
**Frameworks applied:** {list from arsenal}

**Options considered:**
- Option A: {description} — cost ₹{X} — recommendation: YES/NO because Y
- Option B: {description} — cost ₹{X} — recommendation: YES/NO because Y
- Option C (do nothing): {consequence of inaction}

**Pre-mortem (top 3 ways this fails):**
1. {failure mode} → mitigation: {X}
2. {failure mode} → mitigation: {X}
3. {failure mode} → mitigation: {X}

**Recommendation:** {one sentence, what CEO/CTO advises}
**Decision needed by:** {date} — after which default is {REJECT | PROCEED}
**Confidence:** {XX%}

-->

---

## ✅ ARCHIVE — RESOLVED ASKS

*No resolved asks yet. Archive format: move completed asks here with response block inline.*

---

**File version:** 1.0
**Last updated:** 2026-04-24 (initial activation)
