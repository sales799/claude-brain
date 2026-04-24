# STAGE 6 — HANDOFF PACKAGE TO CTO MODE
## Files CEO Mode Writes to Shared State

**Status:** COMPLETE (simulated — files not actually written to brain repo; this is a dry-run)

---

## 1. WHAT GETS WRITTEN

Per CEO Constitution v1.0 §6, this handoff package materializes as the following files in the brain repo (`_shared/`):

### File 1 — Strategy Brief
**Path:** `_shared/STRATEGY_BRIEFS/2026-04-24_hci_intel_autoblog.md`
**Content:** The Strategy Brief from `03_architect_strategy_brief.md` (12 sections, ~2,400 words)
**Trigger for CTO:** CTO Mode boot (per v5.2 Delta step 11.5) reads all non-SHIPPED briefs

### File 2 — Main CEO→CTO Handoff (the initiative kickoff)
**Path:** `_shared/HANDOFFS/ceo_to_cto_2026-04-24_hci_intel_autoblog_kickoff.md`

Content:

```markdown
# CEO → CTO HANDOFF: HCI Intel Autoblog Kickoff

**From:** CEO Mode
**To:** CTO Mode
**Date raised:** 2026-04-24
**Priority:** Normal
**Related:** _shared/STRATEGY_BRIEFS/2026-04-24_hci_intel_autoblog.md
**Expected CTO action:** Execute Strategy Brief Stage 6 — build the autoblog pipeline per brief

## CONTEXT
CEO Mode completed IdeaForge v2.0 Stages 0-4 for HCI Intel Auto Blog Generator.
- Gate score: 22/24 (AUTO-PASS)
- Financial Gate: CLEARED (conditional contractor ask pre-drafted, not yet active)
- Architecture: reuse ProveIQ autoblog pattern (H1 from ACH matrix)
- Build estimate: 4-8 CTO hours across 1-2 sessions
- Ship target: within 7 days

## ASK
Execute the Strategy Brief. Begin with the non-negotiable pre-build verification:
1. Run T1-T7 harness on ProveIQ autoblog FIRST — if ProveIQ publish is broken, HCI Intel will
   ship into the same void. Abort ship if any T1-T7 fails on ProveIQ.
2. Verify A1 (hcintel.com canonical) and A6 (/blog route exists or needs building).
3. Only after both pass, begin HCI Intel side + JAYA side build.
4. Before first publish: Founder confirms A4 (editorial bandwidth) — if no, trigger
   conditional ask in FINANCIAL_GATE.md.

## CONSTRAINTS
- Deadline: 7 days from receipt
- Budget impact: none for v1 (conditional ask if A4 fails)
- Do-NOT list:
  - Do NOT install Ollama on VPS (per v5.1 ban)
  - Do NOT use MCP for PM2 restart on hci-intel service — direct SSH only (cvpro hijack precedent)
  - Do NOT add analytics that collect user data without DPDP consent (Phase 2 scope)
  - Do NOT exceed 65/80 quality-gate floor for v1 — push quality in iterations, not first ship

## EVIDENCE / REFERENCES
- Strategy Brief: _shared/STRATEGY_BRIEFS/2026-04-24_hci_intel_autoblog.md
- ProveIQ autoblog precedent: memory key `proveiq_autoblog_api_key_reference`
- Kali's T1-T7 harness: memory key `durga_response_aca1ccdd-b4d8-462f-92cf-c8597a081dd3_kali`
- HCITalks autoblog reference: `/opt/hcitalks/docs/n8n-autoblog-workflow.md` on VPS
```

### File 3 — Parallel Initiative Flag (the worker auth fix)
**Path:** `_shared/HANDOFFS/ceo_to_cto_2026-04-24_hci_intel_worker_auth_fix.md`

Content:

```markdown
# CEO → CTO HANDOFF: HCI Intel Worker Auth Fix

**From:** CEO Mode
**To:** CTO Mode
**Date raised:** 2026-04-24
**Priority:** High
**Related:** Parallel to _shared/STRATEGY_BRIEFS/2026-04-24_hci_intel_autoblog.md
**Expected CTO action:** Fix hci-intel-worker 401 auth errors before HCI Intel product launch

## CONTEXT
Founder memory flags `hci-intel-worker` as having active 401 authentication errors on all AI
scoring calls due to an invalid or expired Anthropic API key. This is ADJACENT to the autoblog
initiative (they use different API keys, so autoblog is not blocked) but BOTH must be green for
HCI Intel launch readiness.

## ASK
Independently of autoblog work:
1. Check `hci-intel-worker` current state (PM2 status + recent logs)
2. Identify which Anthropic API key is expired/invalid
3. Rotate or re-provision the key, update `.env`, restart worker via direct SSH
4. Verify scoring calls now return 200

## CONSTRAINTS
- Deadline: within 48 hours (parallel track, not blocking autoblog)
- Budget impact: none (API key is already on existing approved budget)
- Do-NOT list:
  - Do NOT share the autoblog AUTOBLOG_API_KEY with worker — they must remain separate
  - Do NOT use MCP for restart — direct SSH

## EVIDENCE / REFERENCES
- Founder memory (this session userPreferences block): "hci-intel-worker service has active 401
  authentication errors on all AI scoring calls due to an invalid or expired Anthropic API key
  in the worker environment"
```

### File 4 — Brand Voice YAML (draft)
**Path:** `_shared/STRATEGY_BRIEFS/assets/hci-intel-brand-voice.yaml.draft`

Content (CEO Mode's draft; CTO + Founder finalize during Stage 6 build):

```yaml
# HCI Intel — Brand Voice for JAYA autoblog publish client
# Target file (after ratification): /opt/jaya/src/publish/brand-voices/hci-intel.yaml
# Version: 0.1 (draft)
# Author: CEO Mode, 2026-04-24
# Status: DRAFT — Founder reviews during Stage 6 build, then ratified

product: HCI Intel
url: hcintel.com  # A1 — CTO verifies
audience: Indian tech active job seekers, 25-40, evaluating offers or planning career pivots

tone:
  - data-driven
  - founder-credible (Bhaskar Anand, 15yr IT staffing)
  - zero fluff
  - analytical but readable
  - long-form: 1,200-2,000 words

core_lens: "Career DNA"
core_lens_frame: |
  Every article references the Career DNA framework at least once in the opening
  two paragraphs. Career DNA = 219 parameters across 18 categories that map a
  candidate profile against market. Use the lens to:
  1. Frame the problem quantitatively, not anecdotally
  2. Position HCI Intel's eventual Career DNA tool as the natural solution (soft CTA)
  3. Differentiate from generic career content on Ambition Box, Glassdoor, LinkedIn

banned_phrases:
  - "in today's fast-paced world"  # AI-cliche
  - "game-changer"                  # AI-cliche
  - "at the end of the day"         # filler
  - "think outside the box"         # cliche
  - "low-hanging fruit"             # corporate
  - "synergy"                        # corporate

required_elements:
  - headline: SEO-optimized, question-format when possible, <60 chars
  - subheading: specific benefit or stat, 1 sentence
  - Career DNA lens mention: by end of paragraph 2
  - data point or stat: at least 3 per article, cited
  - founder authority signal: "In 15 years of placing {Indian tech role}, I've..." — once per article
  - actionable framework or checklist: 1 per article
  - soft CTA to HCI Intel waiting list: final paragraph

article_structure:
  1: "Opening hook (question or stat)"
  2: "Career DNA lens — why this matters quantitatively"
  3-6: "Core analysis / framework / data"
  7: "Worked example (real-ish, anonymized)"
  8: "Actionable checklist or framework"
  9: "Soft CTA to waiting list"

topic_pillars:
  - offer_comparison          # How to evaluate 1 offer vs another
  - compensation_benchmarking # Market-rate analysis for specific roles
  - career_pivot_planning     # Planning a role/company change
  - skill_gap_analysis        # What to learn for next role
  - negotiation_frameworks    # Salary / equity / role negotiation
  - company_culture_decon     # Reading between lines of job posts
  - industry_trajectories     # Where different sub-industries are headed
  - early_career_strategy     # Decisions in first 3-5 years
  - mid_career_inflection     # Years 7-12 career inflection points
  - startup_vs_mnc_analysis   # Comparing org types

cadence:
  week_1_2: 3 posts/week, editorial gate ON
  week_3_4: 3 posts/week, editorial gate selective
  week_5_plus: 5 posts/week, editorial gate for sensitive topics only

llm_config:
  provider: openrouter  # primary
  fallback: anthropic   # if openrouter fails
  model: claude-sonnet-4-6  # or current best
  max_tokens: 3500
  temperature: 0.4      # low — factual / analytical
  forbidden_topics:
    - specific named companies' internal structure (avoid defamation risk)
    - specific named individuals' comp (privacy)
    - political takes (stay neutral)
    - predictions older than 18 months out (low-confidence territory)

publish_endpoint:
  url: https://{HCI_INTEL_DOMAIN}/api/articles/publish
  auth_header: "x-api-key"
  auth_env_var: HCI_INTEL_PUBLISH_KEY  # shared secret with hci-intel-web AUTOBLOG_API_KEY
```

---

## 2. AUTO-GENERATED QUEUE.md ENTRIES

Per CEO Constitution v1.0, CEO Mode also updates `_shared/QUEUE.md`:

```markdown
- [HIGH] **HCI Intel: Auto Blog Generator v1** — JAYA autoblog integration mirroring ProveIQ.
  Strategy Brief: `_shared/STRATEGY_BRIEFS/2026-04-24_hci_intel_autoblog.md`.
  Gate score: 22/24 AUTO-PASS. Ship target: 7 days. Status: AWAITING CTO START.

- [HIGH] **HCI Intel: Worker Auth Fix** — hci-intel-worker 401 errors on Anthropic API.
  Handoff: `_shared/HANDOFFS/ceo_to_cto_2026-04-24_hci_intel_worker_auth_fix.md`.
  Parallel to autoblog. Status: AWAITING CTO START.
```

---

## 3. CONSOLIDATED FOUNDER MESSAGE

After Stage 6 handoff completes, CEO Mode writes a single digest message to the Founder. NOT a financial ask (gate cleared). Just a status digest.

```markdown
## CEO DIGEST — 2026-04-24

**IdeaForge: HCI Intel Auto Blog Generator → HANDED OFF TO CTO**

**What I did (autonomous):**
- Classified, interrogated, validated the initiative using 14-framework stack
- Resolved the two "clarifying questions" from memory (target product = HCI Intel;
  trigger mechanism = reuse ProveIQ pattern via JAYA n8n cron)
- Chose architecture via ACH: reuse ProveIQ pattern (beat 3 alternatives)
- Scored 22/24 on the Gate rubric (AUTO-PASS)
- Drafted the brand-voice.yaml for HCI Intel
- Handed 2 items to CTO: autoblog kickoff + parallel worker auth fix

**What CTO will do (next 7 days):**
- Pre-build smoke test of ProveIQ (T1-T7 harness)
- Verify HCI Intel domain + /blog route
- Build HCI Intel side + JAYA side per Strategy Brief
- Run T1-T7 again, ship to production
- Fix hci-intel-worker auth in parallel

**What you (Founder) need to do:**
- One thing only: confirm ~30 min/day editorial review bandwidth for Weeks 1-2
  (CTO will ask when build is ready to publish first post)
- If bandwidth unavailable, I'll raise a conditional ask for an editorial contractor
  (₹8-15K for 2 weeks) via _shared/FINANCIAL_GATE.md — you decide then

**What I'm watching:**
- A2 (JAYA health) — CTO pre-ship verification
- A4 (your editorial bandwidth) — the one potential financial gate
- Kill criteria at Week 4 (defined in Strategy Brief)
- Cross-initiative link to HCI Intel launch readiness

**Total Founder intervention this initiative: 0 approvals needed today.
Possibly 1 yes/no in Week 1 of execution (editorial bandwidth).**
```

---

## 4. STAGE 6 OUTPUT

Files CEO Mode would write (dry-run — not actually committed):
- [x] `_shared/STRATEGY_BRIEFS/2026-04-24_hci_intel_autoblog.md`
- [x] `_shared/STRATEGY_BRIEFS/assets/hci-intel-brand-voice.yaml.draft`
- [x] `_shared/HANDOFFS/ceo_to_cto_2026-04-24_hci_intel_autoblog_kickoff.md`
- [x] `_shared/HANDOFFS/ceo_to_cto_2026-04-24_hci_intel_worker_auth_fix.md`
- [x] Append to `_shared/QUEUE.md`
- [x] Digest message to Founder (informational, not a gate)

**Handoff complete. CTO Mode takes it from here.**

In actual deployment, CTO Mode would then:
- Read these files at boot (per v5.2 Delta step 11.5 for briefs, step 4.5 for handoffs)
- Begin execution per Strategy Brief
- Append CTO Progress Log entries to the brief as work progresses
- Write `cto_to_ceo_*` signal when shipped

The dry-run stops here.

Next file: `DRYRUN_SUMMARY.md` — meta-analysis of what worked and what gaps were found.
