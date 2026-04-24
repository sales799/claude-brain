# STRATEGY BRIEF: HCI Intel Auto Blog Generator

**From:** CEO Mode
**To:** CTO Mode
**Date:** 2026-04-24 (dry-run)
**IdeaForge Session:** `ideaforge_dryrun_hci_intel_autoblog` (claude.ai strategy session)
**IdeaForge Gate Score:** 22/24 (computed at Stage 4 — see `04_gate_score.md`)
**Financial Gate:** Cleared (conditional on Founder bandwidth confirmation for editorial review; no new spend required)
**Frameworks Applied:** ultrathink + Cynefin + JTBD (Ulwick) + Mom Test synthesis + Lean Canvas + Value Prop Canvas + Blue Ocean ERRC + PESTEL + Five Forces + ACH + Key Assumptions Check + Pre-mortem + Red Team
**CEO Mode Confidence:** 78%

---

## 1. WHAT (one sentence)

Build an automated blog publishing pipeline for HCI Intel that mirrors the proven ProveIQ autoblog architecture: JAYA generates Career DNA–themed articles on a cron schedule and publishes them to a new `/api/articles/publish` endpoint on the `hci-intel-web` service, rendered at `hcintel.com/blog/[slug]`.

---

## 2. WHY (business case)

HCI Intel is pre-launch and currently has a **static placeholder blog**. This is a launch-readiness blocker, not a nice-to-have: launching a new product on a ghost site means (a) zero organic SEO surface, (b) paid acquisition becomes the only funnel on day 1, (c) product-market-fit signals get polluted by ad-driven traffic.

Reusing the ProveIQ autoblog pattern (already proven in production April 2026) gives us a 1-2 day CTO build instead of a 1-2 week one. The architecture is battle-tested, the brand-voice.yaml framework already exists, and JAYA already integrates with OpenRouter/Anthropic under approved budget. This is textbook Standing Order 113 (v5.2) — reuse battle-tested patterns over reinventing.

The Career DNA positioning (219 parameters, 18 categories) is genuinely unique in the Indian career-content landscape. No competitor frames career decisions as parameter optimization. This gives the blog a defensible moat against generic career content from Ambition Box, Glassdoor India, Naukri Insights, and LinkedIn creators.

**Evidence sources:**
- `proveiq_autoblog_api_key_reference` — proven architecture pattern
- `manthan_2026-04-20_audit-proveiq-s-current-blog-infrastruct` — ProveIQ autoblog audit
- `durga_response_aca1ccdd-b4d8-462f-92cf-c8597a081dd3_kali` — architecture precedent and gotchas
- Founder memory — HCI Intel "Career DNA" product thesis (219 parameters / 18 categories)
- Founder memory — `hci-intel-web`, `hci-intel-worker`, `hci-intel` already running as PM2 processes
- `cto_v5_2_decisions_2026-04-22` — Standing Order 113 (reuse over reinvent)

---

## 3. WHO (target user + JTBD)

**Primary segment:** Indian tech active job seekers, 25-40, evaluating 1+ job offers or planning a career pivot within 6 months.

**Job-to-be-done:**
> When I am evaluating a job opportunity or planning a career move, I want to understand how my unique profile (skills, experience, aspirations) maps against the market, so I can make confident, data-backed decisions without relying on anecdotes or gut feel.

**Competing alternatives (what they hire today):** friends' anecdotes, Glassdoor/Ambition Box, recruiter conversations, LinkedIn comp posts, or "nothing — just take/refuse the offer."

**Secondary segment:** Indian tech passive researchers (larger TAM, lower conversion intent — still SEO fuel).

**Non-users (explicit):** Non-tech career pivoters (Phase 2), HR/talent benchmarkers (Phase 2 with different content format).

---

## 4. SUCCESS CRITERIA (measurable)

**North Star metric:**
> `/blog` organic sessions = 5,000/month by 2026-07-31 (90 days post-ship)

**Lead indicators (weekly):**
- Posts published: 3-5/week (week 1-4), 5/week (week 5+)
- Google indexed posts: ≥90% of published within 7 days
- Top-10 Google ranking for at least one target keyword per 4 posts
- Waiting list signups attributable to `/blog` (via UTM): ≥2% of blog sessions
- Average time-on-page: ≥2m30s (indicates real reading)

**Quality bars:**
- Uptime: ≥99.5% on `/blog` surface
- p95 latency: ≤400ms
- Post quality (Founder subjective rating, week 1-2): ≥4/5 on 80% of posts before publish

---

## 5. CONSTRAINTS

- **Budget:** ₹0 net new spend for v1 (JAYA + OpenRouter + Anthropic already approved). LLM usage incremental cost estimated <₹2K/month — within existing budget envelope. **Conditional:** if Founder cannot provide ~30 min/day editorial review weeks 1-2, options are (a) delay ship 2 weeks, or (b) financial gate ask for editorial contractor (~₹8-15K for 2 weeks). This conditional is flagged below in Section 8 Assumption Log.
- **Time:** CTO build estimate 4-8 hours spread across 1-2 sessions. Ship target: within 7 days of Strategy Brief activation.
- **Tech constraints:**
  - Must reuse JAYA pipeline (no parallel service)
  - Must reuse brand-voice.yaml framework (new file: `hci-intel.yaml`)
  - Must run on existing VPS (no new infra)
  - Must respect Ollama-on-VPS ban (inference via OpenRouter/Anthropic only)
  - Must not interfere with `hci-intel-worker` auth errors currently being debugged (see Pre-mortem #6)
- **Compliance:** DPDP Act — no user data collected on blog read surface (static, anonymous reads). If analytics is added later (GA4, PostHog), revisit consent UI.
- **Brand/voice:** New file `/opt/jaya/src/publish/brand-voices/hci-intel.yaml` — CEO Mode drafts in Stage 6 handoff; tone is data-driven, founder-credible, zero fluff, 1,200-2,000 words per post.

---

## 6. NON-GOALS (explicit scope protection)

NOT doing in v1:
- Multimedia content (video, podcast)
- Interactive Career DNA calculators on the blog
- Translations (Hindi, regional languages)
- Custom blog CMS — reuse Next.js static generation pattern
- Guest author infrastructure
- Comment system
- Newsletter integration
- Paid amplification / SEM
- Analytics beyond server-side page views (Phase 2 adds GA4 with consent)

Scope creep requests during execution → redirect to new IdeaForge session via `ceo_to_cto_*.md` handoff.

---

## 7. PRE-MORTEM (top failure modes + mitigations)

1. **JAYA pipeline breaks during autoblog rollout** → mitigation: run ProveIQ smoke test before first HCI Intel publish; abort ship if ProveIQ autoblog not currently publishing successfully. (Per Kali's 2026-04-20 memo, T1-T7 harness is mandatory.)
2. **Generated content fails editorial review → ship blocked** → mitigation: editorial gate ON weeks 1-2; Founder rates each post; keep failure threshold at ≤20% (if >20% fail review, pause ship and debug brand voice YAML).
3. **Google algorithm penalizes perceived AI content** → mitigation: every post cites Bhaskar's 15yr staffing authority + Career DNA framework (E-E-A-T signal); monitor Search Console weekly from week 4.
4. **Career DNA positioning dilutes if content drifts** → mitigation: brand voice YAML enforces Career DNA lens in opening paragraph; editorial gate catches drift; monthly content audit.
5. **Competitor launches similar analytical content** → mitigation: move fast — be first with the Career DNA frame; accelerate to 5 posts/week by week 5 if quality holds.
6. **hci-intel-worker 401 auth errors cascade into autoblog integration** → mitigation: autoblog uses a separate API key (`AUTOBLOG_API_KEY`, not the worker's Anthropic key); CTO confirms separation at build time. Worker auth fix is a parallel initiative (should get its own handoff).
7. **Founder editorial bandwidth evaporates** → mitigation: financial gate ask pre-approved shape for editorial contractor (₹8-15K/2 weeks) — if Founder signals bandwidth constraint during weeks 1-2, contractor comes in without further planning cycle.
8. **Editorial backlog if content volume > review speed** → mitigation: start at 3 posts/week not 5; scale only after review cycle time is measured.
9. **DPDP Act interpretation change** → mitigation: v1 collects zero user data; Phase 2 analytics will add consent UI per DPDP; low risk for v1.
10. **Brand voice YAML for HCI Intel materially differs from ProveIQ** → mitigation: 2-3 hour budget for YAML authoring in Stage 6; CEO Mode drafts, Founder reviews; v5.2 SO-116 protects scope.

---

## 8. ASSUMPTIONS LOG

| # | Assumption | Confidence | Risk if wrong | Action |
|---|---|---|---|---|
| A1 | HCI Intel canonical domain is hcintel.com | 85% | Wasted setup (30 min) | CTO verifies pre-build |
| A2 | JAYA autoblog pipeline healthy (ProveIQ publishing) | 80% | Ship into void | **Pre-ship smoke test required** (T1-T7 harness) |
| A3 | Career DNA positioning locked | 90% | Content regen | Founder review Week 1 content |
| A4 | Founder has 30 min/day editorial review bandwidth weeks 1-2 | 70% | Brand risk OR ship delay | **Founder confirms before ship; if no → defer 2wk OR financial gate for contractor** |
| A5 | LLM budget sufficient for 3-5 posts/week | 85% | Marginal cost concern | Monitor actual usage week 1 |
| A6 | `hci-intel-web` Next.js app has a `/blog` route (or easy to add) | 60% | +2-3 hrs CTO work | CTO verifies pre-build |

---

## 9. SUGGESTED TECHNICAL DIRECTION (CTO owns final call)

**Architecture (from Stage 2 ACH, H1 wins):** Reuse ProveIQ autoblog pattern end-to-end.

**Components to build:**
1. **HCI Intel side:**
   - `/api/articles/publish` endpoint on `hci-intel-web` (mirror ProveIQ's implementation)
   - `/blog` + `/blog/[slug]` pages in Next.js app (if not already present; per A6)
   - `AUTOBLOG_API_KEY` env var added to `/opt/apps/hci-intel/.env`
   - PM2 restart after env var change (use direct SSH, not MCP — per cvpro hijack precedent from Kali's 2026-04-20 memo)

2. **JAYA side:**
   - New publish client: `/opt/jaya/src/publish/clients/hci-intel.ts` (clone `proveiq.ts`, parameterize for HCI Intel domain + auth)
   - New brand voice: `/opt/jaya/src/publish/brand-voices/hci-intel.yaml` (CEO Mode drafts; Founder reviews)
   - `HCI_INTEL_PUBLISH_KEY` env var added to `/opt/jaya/.env` (same value as HCI Intel's `AUTOBLOG_API_KEY`)
   - PM2 restart JAYA

3. **Verification (non-negotiable, pre-ship):**
   - T1-T7 harness (adapted from Kali's ProveIQ run):
     - T1: `/blog` returns 200
     - T2: `/blog` HTML contains `<article>` tags
     - T3: `/api/blog/posts` returns ≥1 post after first publish
     - T4: End-to-end JAYA publish → visible on `/blog` within 60s
     - T5: Individual post URL returns 200
     - T6: Lighthouse SEO score on sample post ≥85
     - T7: PM2 describe shows correct script path (no talpro-mcp clone hijack)
   - PM2 restart via direct SSH (not MCP) per cvpro incident precedent

**Quality gate floor for this initiative:** 65/80 (lower than usual 70+ because v1 ships minimal surface; post-launch iterations raise the bar).

**Reuse opportunities:**
- `proveiq.ts` publish client as base
- ProveIQ brand-voice.yaml structure
- Kali's T1-T7 harness verbatim, swapping domain
- Existing JAYA n8n workflow (no new cron needed; add HCI Intel to existing rotation)

**Sequencing:**
1. Verify A2 (ProveIQ autoblog healthy) — 10 min smoke test
2. Verify A1 + A6 (HCI Intel domain + Next.js routes) — 15 min
3. HCI Intel side build (endpoint + routes if missing + env var) — 2-3 hrs
4. JAYA side build (client + brand voice YAML + env var) — 1-2 hrs
5. T1-T7 verification — 30 min
6. First publish (editorial gate ON) — 1 hr for Founder review
7. Monitor week 1 — daily health check

---

## 10. POST-LAUNCH LOOP BACK TO CEO

- CTO signals SHIPPED via `_shared/HANDOFFS/cto_to_ceo_2026-XX-XX_hci_intel_autoblog_shipped.md`
- CEO runs Post-Launch Review stack (§8.13) at 24h, 7d, 30d
- Review cadence: weekly for first month, then monthly
- **Kill-criteria (if triggered, shut this down):**
  - Week 4: <500 cumulative organic sessions on `/blog` AND no post in top-50 Google ranking for any target keyword
  - Week 4: editorial review failure rate >40% (brand voice broken, can't be iterated)
  - Any single post goes viral for wrong reasons (reputational risk) → pause, review
- **Success escalator:** if week 4 hits 2,000+ sessions, accelerate to 5 posts/week and begin Phase 2 scoping (multimedia, Career DNA interactive on blog)

---

## 11. CTO PROGRESS LOG

*CTO Mode will append progress, commits, deploys, quality-gate scores here as execution proceeds. Currently empty — awaiting Stage 6 start.*

---

## 12. ATTACHED ARTIFACTS

- Lean Canvas: in `02_validate.md` §3
- Value Prop Canvas: in `02_validate.md` §4
- PESTEL + Five Forces: in `02_validate.md` §1-2
- ACH matrix (architecture choice): in `02_validate.md` §5
- Pre-mortem: §7 above
- Risk register: in `02_validate.md` §8

**Gate score breakdown:** `04_gate_score.md`
**Financial gate check:** `05_financial_gate_check.md`
**Handoff package:** `06_handoff_to_cto.md`

---

**End of Strategy Brief.**

*Signed off: CEO Mode, 2026-04-24 (dry-run). Ready for Stage 4 Gate.*
