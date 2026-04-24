# STAGE 1 — INTERROGATE
## Problem Framing, JTBD, Customer Segments

**Frameworks applied:** ultrathink + Socratic Method + 5 Whys + Starbursting + JTBD (Ulwick) + Mom Test synthesis
**Duration:** ~12 minutes simulated
**Status:** COMPLETE

---

## 1. THE STATED ASK (Founder-level)

> "Build an auto blog generator for HCI Intel — currently a static placeholder."

## 2. SOCRATIC INTERROGATION — what is actually being asked?

**Q1: Why does HCI Intel need a blog at all?**
→ HCI Intel is pre-launch; a static placeholder blog means (a) zero SEO surface, (b) zero top-of-funnel organic acquisition, (c) the product launch lands on a ghost site. This is a launch readiness blocker, not a nice-to-have.

**Q2: Why "auto" generator specifically? Why not a human-written blog?**
→ Capacity constraint. Founder's HireIQ Pro LinkedIn content is already a daily commitment. A human-driven HCI Intel blog would not maintain cadence. Autoblog is the only viable mechanism for this ecosystem.

**Q3: Why HCI Intel needs its own blog, not shared with HCITalks or ProveIQ?**
→ Search engines treat domain-level topical authority separately. HCI Intel sells Career DNA analysis to candidates — distinct audience from ProveIQ (employers) and HCITalks (general industry). Sharing blogs conflates audiences and dilutes SEO for each product.

**Q4: What does "generator" mean? Article text? Full multimedia? Interactive data?**
→ Inferred: text-first articles with Career DNA positioning, mirroring the proven ProveIQ + HCITalks autoblog pattern. Multimedia and interactive data are Phase 2 scope; out of scope for v1.

**Q5: What's the real failure mode if this stays unbuilt?**
→ HCI Intel launches with zero organic traffic on day 1. Paid acquisition becomes the only funnel — expensive and fragile. Product-market-fit signals get polluted by ad-driven traffic (not true intent). This directly threatens the launch thesis.

---

## 3. 5 WHYS

**"Why is HCI Intel autoblog unbuilt?"**
1. Why? → Product still pre-launch; blog felt lower priority than core product build
2. Why? → Content automation infrastructure (JAYA) was still being stabilized
3. Why? → JAYA has had reliability issues until April 2026; not trusted for critical content
4. Why? → Absence of clear brand voice for HCI Intel in the JAYA publish-clients set
5. Why? → Career DNA positioning (219 parameters / 18 categories) was still being refined until marketing draft in April

**Root cause:** Content infrastructure and positioning both matured at different rates, and nobody has yet drawn a straight line from "JAYA works + Career DNA positioning locked" → "autoblog can ship." This IdeaForge session is drawing that line.

---

## 4. STARBURSTING (question expansion)

### WHO
- Primary reader: active Indian job seekers, 25-40, evaluating 1+ job offers OR planning a career pivot within 6 months
- Secondary reader: passive candidates (research mode) building mental models of their market worth
- Tertiary reader: HR professionals benchmarking their comp/structure vs market

### WHAT
- Content types: offer-comparison frameworks, skill-gap analyses, career-path case studies, compensation benchmarks, company-culture deconstructions, industry trajectory pieces
- Article length: 1,200-2,000 words (SEO sweet spot)
- Cadence: 3-5 posts per week (matching ProveIQ tempo)
- Brand voice: data-driven, founder-credible (Bhaskar's 15yr staffing expertise as implicit backing), zero fluff

### WHERE
- Primary surface: `hcintel.com/blog` (or whichever HCI Intel domain is canonical — CTO confirms at Stage 3)
- Cross-post: LinkedIn Bhaskar handle, WhatsApp broadcast lists, future newsletter
- SEO target: long-tail career/comp queries ("Indian SaaS VP engineering salary 2026", "negotiate offer with startup vs MNC")

### WHEN
- Trigger: JAYA n8n cron (mirrors ProveIQ pattern) — 3 posts/week initially, scaled to 5 after week 4 if quality holds
- Editorial gate: ON for weeks 1-2, then selective (new topic types, sensitive topics)

### WHY
- Business case: HCI Intel launch readiness. Zero organic traffic at launch = expensive paid funnel = polluted PMF signal.
- User value: Career DNA lens is unique in Indian market. No competitor positions career decisions as a 219-parameter optimization.

### HOW
- Reuse ProveIQ autoblog architecture (JAYA → `/api/articles/publish` with brand-voice.yaml)
- New: `hci-intel` brand-voice.yaml + publish-client in JAYA
- New: `/api/articles/publish` endpoint on HCI Intel web service
- New: `AUTOBLOG_API_KEY` env var on hci-intel service + JAYA
- Editorial review via existing Founder workflow (LinkedIn draft review cadence)

---

## 5. JOB-TO-BE-DONE STATEMENT (Ulwick format)

**Functional job:**
> When I am evaluating a job opportunity or planning a career move, I want to understand how my unique profile (skills, experience, aspirations) maps against the market, so I can make confident, data-backed decisions without relying on anecdotes or gut feel.

**Emotional job:**
> Feel informed rather than anxious. Feel agency rather than dependence on recruiter opinions.

**Social job:**
> Be seen as someone who makes career decisions strategically, not reactively.

**Competing alternatives (what they hire today):**
1. Friends' anecdotes ("my cousin got ₹X for a similar role")
2. Glassdoor / Ambition Box salary ranges (broad, often outdated)
3. Recruiter conversations (biased toward the specific role being pitched)
4. LinkedIn comp posts (anecdotal, often US-focused)
5. Nothing — they just take/refuse the offer

**Signals the JTBD is real:**
- 1.4M+ monthly searches on Ambition Box for "salary comparison" queries (India)
- LinkedIn career-pivot posts consistently high-engagement
- Bhaskar's 15yr recruiter experience: candidates repeatedly ask "how do I know if this is a good offer?"

---

## 6. CUSTOMER SEGMENTS

| Segment | Size (India) | Priority | Why |
|---|---|---|---|
| **Tech active job seekers (25-40)** | ~2-3M | P0 | Highest-value queries, willing to read long-form, likely to sign up for Career DNA tool |
| **Tech passive researchers** | ~5-8M | P1 | Larger TAM but lower conversion intent; still SEO fuel |
| **Non-tech mid-career pivoters** | ~10M+ | P2 | Phase 2; brand voice needs adjustment; out of v1 scope |
| **HR/talent benchmarkers** | ~200K | P2 | Different content type (reports not articles); Phase 2 |

**v1 focus:** Tech active job seekers. Content calendar and brand voice tuned for this segment only. Don't dilute by trying to serve all segments from day 1.

---

## 7. THE "CLARIFYING QUESTIONS" FROM FOUNDER MEMORY — RESOLVED

### Q: "Target product?"
**Resolved:** HCI Intel. The blog belongs to HCI Intel. Content theme is Career DNA / candidate-side analysis. This is inferrable because:
- Founder memory explicitly says "HCI Intel auto blog generator"
- HCI Intel's product thesis (Career DNA, 219-parameter analysis) is the natural content anchor
- ProveIQ (employer-side) already has autoblog; HCITalks (industry) already has autoblog; HCI Intel is the obvious next

### Q: "Trigger mechanism?"
**Resolved:** JAYA n8n cron → `/api/articles/publish` endpoint on HCI Intel service, with `AUTOBLOG_API_KEY` shared secret. This is inferrable because:
- ProveIQ uses exactly this pattern (documented in `proveiq_autoblog_api_key_reference` memory)
- HCITalks uses an adjacent n8n pattern (different publish target)
- Standing Order 113 (v5.2) says reuse battle-tested patterns rather than reinvent
- Founder has not stated an alternative

Both assumptions will be flagged in the Assumption Log (Stage 3). If Founder disagrees at any point, a `ceo_to_cto` handoff redirects.

---

## 8. NON-GOALS (explicit scope protection)

This IdeaForge session is NOT doing:
- Multimedia (video, podcast) — Phase 2
- Interactive Career DNA calculators on the blog — Phase 2
- Blog content translations (Hindi, regional languages) — Phase 2
- Custom blog CMS — reuse Next.js static generation pattern
- Guest-author infrastructure — v1 is autoblog only
- Comment system — v1 is read-only
- Newsletter integration — Phase 2 (once subscriber base exists)

---

## 9. ASSUMPTIONS LOG (to re-test at Stage 4 Gate)

| # | Assumption | Confidence | Risk if wrong |
|---|---|---|---|
| A1 | HCI Intel domain is `hcintel.com` or similar — CTO confirms | 85% | Wrong domain = wasted setup; recoverable in 30 min |
| A2 | JAYA autoblog pipeline is healthy (ProveIQ publishing working) | 80% | If broken, autoblog ships into void — same failure mode as ProveIQ 2026-04-20 incident |
| A3 | Career DNA positioning is locked as blog's core theme | 90% | Moderate — if positioning shifts, regenerate content plan |
| A4 | Bhaskar has bandwidth for editorial review weeks 1-2 (~30 min/day) | 70% | High — if no editorial gate, content quality risks brand |
| A5 | OpenRouter + Anthropic LLM budget sufficient for 3-5 posts/week | 85% | Low — incremental cost of 12-20 posts/month at current rates is <₹2K/month |
| A6 | HCI Intel service has a `/blog` route in Next.js app (or needs one built) | 60% | Medium — CTO confirms; if missing, add 2-3 hrs of CTO work |

---

## 10. NEXT STAGE TRIGGER

Stage 1 complete. Problem fully framed, JTBD crisp, segments identified, assumptions logged, scope bounded.

**Advancing to Stage 2 — VALIDATE.**

Next file: `02_validate.md`
