# CEO PLANNING FRAMEWORKS ARSENAL
## The Complete Toolkit for a Non-Tech Founder's Research, Analysis & Planning Team
### Beyond `ultrathink + MDMP + OODA + JOPP` — 150+ frameworks that take a CEO team global

**Version 1.0 | April 24, 2026 | For Bhaskar Anand, Talpro Universe**
**Purpose:** Reference library of proven planning, thinking, and analysis frameworks you can invoke by name in any LLM prompt, strategy session, or team brief. Treat this as the "playbook inventory" your virtual research & analysis team pulls from.

---

## HOW TO READ THIS DOCUMENT

**The stack you already use is:**

| Trigger | Type | What it does |
|---|---|---|
| `ultrathink` | LLM reasoning amplifier | Tells Claude to allocate maximum extended thinking before answering |
| `MDMP` | Military planning | US Army's 7-step Military Decision-Making Process — mission analysis to orders |
| `OODA` | Decision cycle | Observe → Orient → Decide → Act — fastest decision loop ever designed |
| `JOPP` | Joint planning | US Joint Operation Planning Process — 7-step enterprise-scale operation planning |

Every framework below is compatible with these. They stack. **The power move isn't picking one — it's chaining 3-5 per question.**

**Each entry in this doc has:**
- **Name + origin** (so you know it's real and can cite it)
- **One-line definition**
- **When to use it** (the trigger conditions)
- **Prompt trigger phrase** (what to type into Claude/ChatGPT)
- **Stacks with** (frameworks that pair naturally)

---

# PART 1 — LLM REASONING AMPLIFIERS
*These change how the AI itself thinks. `ultrathink` is one of ~15.*

### 1. Ultrathink / Extended Thinking
- **Origin:** Anthropic (Claude-specific trigger word), echoed by OpenAI o1/o3 "reasoning" models
- **Does:** Allocates maximum internal reasoning budget before the model outputs a single word
- **When:** Any high-stakes analysis, synthesis across many inputs, or multi-step planning
- **Trigger:** `ultrathink` or `think hard` or `think step by step in extreme detail`
- **Stacks with:** Everything. This is the "turn on the engine" command.

### 2. Chain of Thought (CoT)
- **Origin:** Wei et al., Google Brain, 2022
- **Does:** Forces the model to show its reasoning step by step before concluding
- **When:** Math, logic, multi-step reasoning, any "why" question
- **Trigger:** `Let's think step by step` or `Walk through your reasoning before answering`
- **Stacks with:** Self-consistency, Tree of Thoughts

### 3. Tree of Thoughts (ToT)
- **Origin:** Yao et al., Princeton/DeepMind, 2023
- **Does:** Explores multiple reasoning branches in parallel, evaluates, backtracks if needed
- **When:** Strategic decisions with 3+ viable paths; anything requiring exploration over linear logic
- **Trigger:** `Explore 3-5 distinct reasoning branches, evaluate each, then pick the winner`
- **Stacks with:** MCDA, Scenario Planning, Red Teaming

### 4. Self-Consistency
- **Origin:** Wang et al., Google, 2022
- **Does:** Runs the same question through multiple reasoning paths, picks the majority answer
- **When:** High-stakes numerical or factual questions where hallucination risk matters
- **Trigger:** `Solve this 5 independent times with different reasoning paths, then report the consensus`
- **Stacks with:** CoT, ACH (Analysis of Competing Hypotheses)

### 5. ReAct (Reason + Act)
- **Origin:** Yao et al., Princeton, 2022
- **Does:** Alternates reasoning steps with tool-use actions (search, calculate, lookup)
- **When:** Any task needing external facts — research, market sizing, competitive intelligence
- **Trigger:** `Interleave reasoning with tool calls — think, act, observe, repeat`
- **Stacks with:** Ultrathink, ACH, Systematic Review

### 6. Reflexion / Self-Critique
- **Origin:** Shinn et al., Northeastern, 2023
- **Does:** Model generates answer → critiques its own output → regenerates with fixes
- **When:** Writing, code, analysis drafts where first-pass quality matters
- **Trigger:** `Draft your answer, then critique it harshly as an expert would, then rewrite`
- **Stacks with:** Red Teaming, Devil's Advocacy, Pre-mortem

### 7. Chain of Verification (CoVe)
- **Origin:** Meta AI, 2023
- **Does:** Generates answer → generates verification questions → answers them independently → revises
- **When:** Factual claims, research briefs, investor-grade analysis
- **Trigger:** `Answer, then write 5 verification questions, answer each independently, then correct`
- **Stacks with:** Systematic Review, Key Assumptions Check

### 8. Step-Back Prompting
- **Origin:** Zheng et al., Google DeepMind, 2023
- **Does:** Forces abstraction — ask the higher-level principle before the specific answer
- **When:** Complex technical or strategic questions where first principles matter
- **Trigger:** `Before answering, step back and state the general principle at play`
- **Stacks with:** First Principles Thinking, Five Whys

### 9. Plan-and-Solve
- **Origin:** Wang et al., 2023
- **Does:** Writes a full plan FIRST, then executes the plan step by step
- **When:** Multi-step problems where jumping in causes errors
- **Trigger:** `First devise a plan. Then execute the plan step by step.`
- **Stacks with:** MDMP, JOPP, WBS (Work Breakdown Structure)

### 10. Skeleton-of-Thought
- **Origin:** Ning et al., 2023
- **Does:** Generates a skeleton/outline first, then fills in each section in parallel
- **When:** Long-form deliverables (reports, strategy docs, proposals)
- **Trigger:** `Generate a skeleton outline first, then expand each section`
- **Stacks with:** Pyramid Principle, MECE

### 11. Least-to-Most Prompting
- **Origin:** Zhou et al., Google, 2022
- **Does:** Breaks hard problem into a sequence of easier sub-problems, solves in order
- **When:** Complex analysis a single prompt can't handle
- **Trigger:** `Decompose this into sub-problems from easiest to hardest, solve in sequence`
- **Stacks with:** Issue Trees, WBS, MDMP

### 12. Multi-Agent Debate
- **Origin:** Du et al., MIT/Google, 2023
- **Does:** Multiple "personas" argue different positions, synthesis emerges from debate
- **When:** Controversial decisions, strategy pivots, go/no-go calls
- **Trigger:** `Simulate a debate between 3 expert personas [CFO, CTO, CMO] on this decision`
- **Stacks with:** Team A/Team B, Six Thinking Hats, Red Teaming

### 13. Constitutional Critique (Anthropic-style)
- **Origin:** Anthropic, Constitutional AI, 2022
- **Does:** Model critiques its own output against a stated value set, then revises
- **When:** Anything where bias, ethics, or policy alignment matters
- **Trigger:** `Critique this against [principles X, Y, Z], then revise`
- **Stacks with:** Reflexion, Devil's Advocacy

### 14. Role Prompting / Persona Priming
- **Origin:** Folk practice, formalized in prompt engineering literature
- **Does:** Assigns the model a specific expert identity to shift output quality and tone
- **When:** Always. "Act as a McKinsey senior partner" produces different output than "explain this."
- **Trigger:** `Act as [specific senior role with 20+ years in Y]`
- **Stacks with:** Everything

### 15. Few-Shot + Exemplar Priming
- **Origin:** Brown et al., OpenAI GPT-3 paper, 2020
- **Does:** Showing 2-5 examples of desired output dramatically raises quality
- **When:** Formatted outputs, brand-voice writing, analytical templates
- **Trigger:** `Here are 3 gold-standard examples of what I want: [...]. Now do the same for [X]`
- **Stacks with:** All writing/formatting tasks

---

# PART 2 — MILITARY & DEFENSE PLANNING
*The frameworks MDMP and JOPP come from. Military planning has been refined over 200+ years of "people die if you get this wrong." It's the gold standard for structured planning under uncertainty.*

### 16. OODA Loop
- **Origin:** Col. John Boyd, USAF, 1976 (dogfighting theory)
- **Does:** Observe → Orient → Decide → Act. Whoever cycles faster wins.
- **When:** Competitive moves, crisis response, real-time decisions
- **Trigger:** `Run an OODA loop on [situation]`
- **Stacks with:** Everything tactical. Boyd's insight: speed of iteration > quality of first plan.

### 17. MDMP (Military Decision-Making Process)
- **Origin:** US Army FM 6-0
- **Does:** 7 steps — receipt of mission, mission analysis, COA development, COA analysis (wargaming), COA comparison, COA approval, orders production
- **When:** Planning a major initiative from scratch with unknowns
- **Trigger:** `Run MDMP on [initiative]`
- **Stacks with:** IPB, COG Analysis, Wargaming, JOPP (MDMP is the tactical cousin of JOPP)

### 18. JOPP (Joint Operation Planning Process)
- **Origin:** US Joint Chiefs of Staff, JP 5-0
- **Does:** 7-step enterprise-scale planning — initiation, mission analysis, COA development, COA analysis, COA comparison, COA approval, plan/order development
- **When:** Company-wide or multi-product strategic initiatives
- **Trigger:** `Run JOPP on [initiative]`
- **Stacks with:** MDMP, PMESII-PT, COG, DIME

### 19. NATO COPD (Comprehensive Operations Planning Directive)
- **Origin:** NATO, 2010 (updated 2021)
- **Does:** 6-phase planning process designed for multi-national, whole-of-government operations
- **When:** Multi-stakeholder initiatives with diverse interests (partnerships, alliances, M&A integration)
- **Trigger:** `Apply COPD phases 1-6 to [multi-stakeholder problem]`
- **Stacks with:** JOPP, PESTEL, Stakeholder Analysis

### 20. Army Design Methodology (ADM)
- **Origin:** US Army, 2010, ATP 5-0.1
- **Does:** "What problem are we actually solving?" — frames ill-structured problems before jumping to MDMP
- **When:** BEFORE planning, when the problem itself is fuzzy
- **Trigger:** `Apply Army Design Methodology — frame the environment, frame the problem, develop operational approach`
- **Stacks with:** MDMP, Cynefin, Design Thinking, Problem Framing

### 21. Troop Leading Procedures (TLP)
- **Origin:** US Army, FM 6-0
- **Does:** 8-step abbreviated planning for small units / short timelines
- **When:** Small team, fast decision — MDMP is overkill
- **Trigger:** `Apply TLP — receive mission, issue WARNO, make tentative plan, initiate movement, recon, complete plan, issue OPORD, supervise`
- **Stacks with:** OODA, RDSP

### 22. Rapid Decision-Making and Synchronization Process (RDSP)
- **Origin:** US Army, FM 6-0
- **Does:** Abbreviated decision loop for in-flight plan changes when a full MDMP isn't feasible
- **When:** Plan is already executing and reality has shifted
- **Trigger:** `Run RDSP — compare current situation, determine if variance is significant, develop COA, execute`
- **Stacks with:** OODA, MDMP (as the "replan" loop)

### 23. Intelligence Preparation of the Battlefield (IPB) / Environment (IPE)
- **Origin:** US Army, ATP 2-01.3
- **Does:** 4-step environmental analysis — define the environment, describe its effects, evaluate threats, determine threat COAs
- **When:** Market entry, competitive analysis, any "know the terrain before moving" moment
- **Trigger:** `Run IPB on [market/industry/competitive landscape]`
- **Stacks with:** PESTEL, Five Forces, Wardley Mapping, Scenario Planning

### 24. Center of Gravity (COG) Analysis
- **Origin:** Carl von Clausewitz, *On War*, 1832; formalized by Joe Strange (USMC)
- **Does:** Identifies the critical source of power — yours and the adversary's — and attacks their critical vulnerabilities
- **When:** Competitive strategy, where to attack/defend, resource concentration
- **Trigger:** `Run COG analysis on us and [competitor] — identify centers of gravity, critical capabilities, critical requirements, critical vulnerabilities`
- **Stacks with:** Five Forces, VRIO, Blue Ocean Strategy

### 25. Course of Action (COA) Development + Wargaming
- **Origin:** Embedded in MDMP/JOPP
- **Does:** Generate 3-5 distinct options, then wargame each against projected adversary actions
- **When:** Major strategic decisions; pre-launch stress-testing
- **Trigger:** `Develop 3 distinct COAs, then wargame each against [competitor/market] reactions`
- **Stacks with:** Scenario Planning, Red Teaming, ToT

### 26. PMESII-PT
- **Origin:** US military environmental analysis framework
- **Does:** 8-variable environmental scan — Political, Military, Economic, Social, Information, Infrastructure, Physical environment, Time
- **When:** Entering a complex new market, country, or operating domain
- **Trigger:** `Run PMESII-PT on [country/market]`
- **Stacks with:** PESTEL (civilian analogue), IPB, Scenario Planning

### 27. DOTMLPF-P
- **Origin:** US DoD capability gap framework
- **Does:** Analyzes capability gaps across Doctrine, Organization, Training, Materiel, Leadership, Personnel, Facilities, Policy
- **When:** Operational readiness audits, "why can't we execute this?" analysis
- **Trigger:** `Run DOTMLPF-P on our capability to [do X]`
- **Stacks with:** McKinsey 7S, Gap Analysis

### 28. DIME (Instruments of National Power)
- **Origin:** US national strategy framework
- **Does:** Diplomatic, Informational, Military, Economic — the 4 levers a nation (or company) can pull
- **When:** Broad strategy where you have multiple types of power to deploy
- **Trigger:** `Map our DIME instruments — where do we apply diplomatic, informational, product/capability, economic pressure?`
- **Stacks with:** Blue Ocean, Porter's Generic Strategies

### 29. Red Teaming (Military)
- **Origin:** US Army UFMCS (University of Foreign Military and Cultural Studies)
- **Does:** Dedicated team attacks the plan from the adversary's perspective BEFORE execution
- **When:** Before every major launch, deal, or bet-the-company move
- **Trigger:** `Red team this plan — identify every way it fails, every assumption a competitor could exploit`
- **Stacks with:** Pre-mortem, Devil's Advocacy, Team A/Team B

### 30. Commander's Critical Information Requirements (CCIR)
- **Origin:** US military planning doctrine
- **Does:** Explicitly names the handful of pieces of information that would change your decision
- **When:** Information overload — what signals actually matter?
- **Trigger:** `Define our CCIRs — what 5-10 pieces of information would change my decision?`
- **Stacks with:** OKRs (CCIRs for metrics), I&W

### 31. Indicators & Warning (I&W)
- **Origin:** CIA / military intelligence
- **Does:** Pre-defines observable signals that tip you off to adversary/market moves before they happen
- **When:** Competitive intelligence, early-warning systems
- **Trigger:** `Build an I&W watchlist — what signals indicate [competitor pivot / market shift / crisis]?`
- **Stacks with:** CCIRs, Weak Signal Analysis, Horizon Scanning

---

# PART 3 — INTELLIGENCE ANALYSIS TRADECRAFT (CIA Structured Analytic Techniques)

*The CIA published "A Tradecraft Primer: Structured Analytic Techniques" — these are the techniques intelligence analysts use to avoid cognitive bias and produce defensible analysis. They are absurdly underused in business.*

### 32. Analysis of Competing Hypotheses (ACH)
- **Origin:** Richards Heuer, CIA, 1999, *Psychology of Intelligence Analysis*
- **Does:** Lists all hypotheses, matrixes them against evidence, identifies which evidence DISCONFIRMS each — the one with least disconfirming evidence wins (not the one with most supporting)
- **When:** Diagnosing market failures, competitor intentions, "why did this happen?" questions
- **Trigger:** `Run ACH on [question] — list hypotheses, matrix against evidence, find the one with least disconfirming evidence`
- **Stacks with:** Bayesian Updating, Key Assumptions Check

### 33. Key Assumptions Check (KAC)
- **Origin:** CIA Structured Analytic Techniques
- **Does:** Makes implicit assumptions explicit, then stress-tests which would invalidate the conclusion if wrong
- **When:** Before any major strategic decision; during plan reviews
- **Trigger:** `List every assumption underlying this plan, rate each for confidence and impact, flag the load-bearing ones`
- **Stacks with:** Pre-mortem, Red Teaming

### 34. Devil's Advocacy
- **Origin:** Roman Catholic Church (canonization process), formalized in intelligence
- **Does:** One person is assigned to argue against the consensus regardless of personal view
- **When:** When a team is converging too fast or too unanimously
- **Trigger:** `Act as a devil's advocate — argue the strongest case against our consensus`
- **Stacks with:** Red Teaming, Team A/Team B

### 35. Team A / Team B
- **Origin:** Gerald Ford administration CIA exercise, 1976
- **Does:** Two full teams independently analyze the same data, produce competing conclusions, then debate
- **When:** High-stakes strategic calls where groupthink risk is high
- **Trigger:** `Simulate Team A (bull case) vs Team B (bear case) on [decision] — both have full access to same facts`
- **Stacks with:** Multi-Agent Debate, Scenario Planning

### 36. Pre-Mortem
- **Origin:** Gary Klein (decision researcher), 2007 HBR
- **Does:** Imagine the project has failed 12 months from now — work backward to explain why
- **When:** Before every major launch. Cheapest, highest-ROI technique in this document.
- **Trigger:** `Run a pre-mortem — assume this has failed catastrophically in 12 months. Why? List 20 reasons.`
- **Stacks with:** Red Teaming, FMEA

### 37. Alternative Futures Analysis
- **Origin:** CIA SAT
- **Does:** Builds 4 distinct future scenarios from 2 critical uncertainty axes, then plans for all 4
- **When:** High uncertainty strategic planning; anything 2+ years out
- **Trigger:** `Build 4 alternative futures on 2 key uncertainty axes — [X] and [Y]`
- **Stacks with:** Scenario Planning, 2x2 Matrix, Three Horizons

### 38. High-Impact / Low-Probability Analysis
- **Origin:** CIA SAT
- **Does:** Systematically considers events that are unlikely but would be catastrophic or transformative if they occurred
- **When:** Risk planning, resilience, opportunity scouting
- **Trigger:** `List 10 low-probability, high-impact events for [business/market] — plan for each`
- **Stacks with:** Black Swan analysis, Antifragility, Wild Card Analysis

### 39. Quality of Information Check
- **Origin:** CIA SAT
- **Does:** Rates every piece of evidence on source reliability, information credibility, and how much the conclusion depends on it
- **When:** When building a case from mixed-quality sources (most real-world research)
- **Trigger:** `Rate each source and claim on reliability (A-F) and credibility (1-6); flag load-bearing claims with weak sources`
- **Stacks with:** ACH, CoVe

### 40. Structured Brainstorming
- **Origin:** CIA SAT
- **Does:** Divergent-then-convergent process: silent individual ideation → affinity clustering → systematic evaluation
- **When:** Generating options; resists the "loudest voice wins" failure of regular brainstorming
- **Trigger:** `Run structured brainstorming — 1) silent ideation of 30+ ideas, 2) cluster into themes, 3) score each cluster`
- **Stacks with:** Design Thinking, Six Thinking Hats

### 41. Morphological Analysis
- **Origin:** Fritz Zwicky, astrophysicist, 1960s
- **Does:** Builds a matrix of all dimensions × all possible values, then explores combinations
- **When:** Generating novel product/strategy options systematically
- **Trigger:** `Build a morphological box — all dimensions of [problem] × all possible values — generate 10 novel combinations`
- **Stacks with:** Blue Ocean, TRIZ, Lateral Thinking

### 42. Delphi Method
- **Origin:** RAND Corporation, 1950s
- **Does:** Iterative anonymous expert surveys with controlled feedback — converges toward consensus without groupthink
- **When:** Forecasting where no data exists; aligning distributed experts
- **Trigger:** `Run a Delphi — 3 rounds of anonymous expert prediction on [question], share distribution after each round`
- **Stacks with:** Scenario Planning, Foresight techniques

### 43. Cross-Impact Matrix
- **Origin:** Theodore Gordon / Olaf Helmer, RAND, 1966
- **Does:** Matrixes events against each other — "if X happens, how does it affect probability of Y?"
- **When:** Understanding systemic risk or opportunity interactions
- **Trigger:** `Build a cross-impact matrix of [events] — for each pair, score how one event changes probability of the other`
- **Stacks with:** Scenario Planning, Systems Thinking

### 44. Starbursting
- **Origin:** Creative problem-solving technique
- **Does:** Instead of generating answers, generate questions — 6 branches: Who, What, Where, When, Why, How
- **When:** Early problem exploration; when you don't know what you don't know
- **Trigger:** `Starburst this idea — generate 10 questions each for Who, What, Where, When, Why, How`
- **Stacks with:** 5 Whys, Jobs-to-be-Done

---

# PART 4 — STRATEGIC PLANNING FRAMEWORKS (Enterprise Consulting)

*These are what McKinsey, BCG, Bain partners reach for. Memorize them; they're the lingua franca of corporate strategy.*

### 45. McKinsey 7S Framework
- **Origin:** McKinsey, Peters & Waterman, 1980
- **Does:** Audits org alignment across Strategy, Structure, Systems, Shared Values, Style, Staff, Skills
- **When:** Reorgs, M&A integration, strategy execution diagnosis
- **Trigger:** `Run 7S on [organization] — rate alignment of each S with the others`
- **Stacks with:** DOTMLPF-P, Balanced Scorecard

### 46. Porter's Five Forces
- **Origin:** Michael Porter, *Competitive Strategy*, 1980
- **Does:** Analyzes industry attractiveness via 5 forces: supplier power, buyer power, new entrants, substitutes, rivalry
- **When:** Market entry, industry analysis, investment decisions
- **Trigger:** `Run Porter's Five Forces on [industry]`
- **Stacks with:** PESTEL, VRIO, Wardley Mapping

### 47. Porter's Value Chain
- **Origin:** Michael Porter, *Competitive Advantage*, 1985
- **Does:** Maps a business's primary and support activities to find where value is created and where differentiation is possible
- **When:** Operational strategy, cost optimization, differentiation hunting
- **Trigger:** `Map the value chain for [business] — identify where we can reduce cost or differentiate`
- **Stacks with:** VRIO, Core Competencies, Wardley Mapping

### 48. Porter's Generic Strategies
- **Origin:** Porter, 1980
- **Does:** Forces choice between Cost Leadership, Differentiation, or Focus — "stuck in the middle" is the failure mode
- **When:** Positioning decisions; when a strategy lacks clarity
- **Trigger:** `Classify our strategy against Porter's Generic Strategies — are we cost leader, differentiator, or focused? Any "stuck in middle" risk?`
- **Stacks with:** Blue Ocean, Playing to Win

### 49. Blue Ocean Strategy
- **Origin:** W. Chan Kim & Renée Mauborgne, INSEAD, 2005
- **Does:** Find uncontested market space (blue oceans) rather than fighting in existing markets (red oceans). Uses ERRC grid — Eliminate, Reduce, Raise, Create.
- **When:** When existing market is bloody; when you need differentiation
- **Trigger:** `Apply Blue Ocean ERRC grid — what factors can we Eliminate, Reduce, Raise, Create?`
- **Stacks with:** Value Proposition Canvas, Morphological Analysis

### 50. Wardley Mapping
- **Origin:** Simon Wardley, 2005
- **Does:** Maps your value chain on an evolution axis (genesis → custom → product → commodity) — reveals where to innovate vs where to buy
- **When:** Technology strategy, build-vs-buy, anticipating market shifts
- **Trigger:** `Build a Wardley Map of our value chain — position each component on the evolution axis`
- **Stacks with:** Three Horizons, Cynefin, Porter's Value Chain

### 51. Cynefin Framework
- **Origin:** Dave Snowden, IBM Global Services, 1999
- **Does:** Classifies problems as Clear, Complicated, Complex, or Chaotic — each needs a different response style
- **When:** BEFORE choosing a planning framework. Don't apply MDMP to a complex-domain problem.
- **Trigger:** `Classify this problem in Cynefin — Clear, Complicated, Complex, or Chaotic? What's the right response style?`
- **Stacks with:** Everything. This is the "which framework do I even use?" meta-framework.

### 52. Three Horizons Framework
- **Origin:** McKinsey / Baghai, Coley, White, *The Alchemy of Growth*, 1999
- **Does:** Allocates strategy across Horizon 1 (defend core), Horizon 2 (emerging), Horizon 3 (create future)
- **When:** Portfolio strategy, R&D allocation, resisting short-termism
- **Trigger:** `Classify our initiatives into Horizons 1, 2, 3 — are we over-indexed anywhere?`
- **Stacks with:** BCG Matrix, Wardley Mapping, Real Options

### 53. Playing to Win (PTW)
- **Origin:** A.G. Lafley (P&G) & Roger Martin, 2013
- **Does:** 5 linked strategic choices — What's our winning aspiration? Where to play? How to win? Capabilities required? Management systems?
- **When:** CEO-level strategy formulation; forcing concrete choices
- **Trigger:** `Run the Playing to Win cascade — answer all 5 choices for [business]`
- **Stacks with:** OKRs, 7S

### 54. VRIO Framework
- **Origin:** Jay Barney, 1991 (Resource-Based View)
- **Does:** Tests each resource for Value, Rarity, Imitability, Organization — only all four = sustained competitive advantage
- **When:** Identifying real moats vs illusory ones
- **Trigger:** `Run VRIO on our top 5 assets/capabilities — which are sustained competitive advantages?`
- **Stacks with:** Core Competencies, Five Forces, Blue Ocean

### 55. Core Competencies
- **Origin:** C.K. Prahalad & Gary Hamel, HBR, 1990
- **Does:** Identifies capabilities that are hard to imitate, applicable across markets, and valuable to customers
- **When:** Diversification decisions, make-or-buy calls
- **Trigger:** `Identify our core competencies — what passes the 3 tests: customer value, competitor difficulty, market breadth?`
- **Stacks with:** VRIO, Ansoff

### 56. BCG Growth-Share Matrix
- **Origin:** Boston Consulting Group, Bruce Henderson, 1970
- **Does:** Portfolio classification — Stars, Cash Cows, Question Marks, Dogs
- **When:** Multi-product portfolio decisions; resource allocation
- **Trigger:** `Place our products on the BCG matrix — growth rate × relative market share`
- **Stacks with:** Three Horizons, Ansoff, GE-McKinsey

### 57. GE-McKinsey Nine-Box Matrix
- **Origin:** GE + McKinsey, 1970s
- **Does:** More nuanced BCG — plots industry attractiveness × business unit strength on a 3x3 grid
- **When:** Portfolio strategy with more dimensions than BCG allows
- **Trigger:** `Build the GE-McKinsey nine-box for our units — multi-factor industry attractiveness × business strength`
- **Stacks with:** BCG Matrix, Five Forces

### 58. Ansoff Matrix
- **Origin:** Igor Ansoff, 1957
- **Does:** 2x2 growth strategies — Market Penetration, Market Development, Product Development, Diversification
- **When:** Growth strategy; deciding where to expand
- **Trigger:** `Place our growth options in the Ansoff matrix — existing/new markets × existing/new products`
- **Stacks with:** BCG, Three Horizons

### 59. SWOT & TOWS Analysis
- **Origin:** Stanford/Albert Humphrey, 1960s (SWOT); Heinz Weihrich, 1982 (TOWS)
- **Does:** SWOT catalogs Strengths, Weaknesses, Opportunities, Threats. TOWS matrixes them to generate strategies (SO, WO, ST, WT).
- **When:** Starting point for strategy; SWOT is famously overused alone — always follow with TOWS
- **Trigger:** `Run SWOT, then TOWS — generate 4 strategy quadrants by crossing internal with external`
- **Stacks with:** PESTEL (for O and T), VRIO (for S and W)

### 60. PESTEL / STEEPLE / PESTLIED
- **Origin:** PEST by Francis Aguilar (Harvard), 1967; extensions over the decades
- **Does:** External environment scan — Political, Economic, Social, Technological, Environmental, Legal (add Ethical, International, Demographic for PESTLIED)
- **When:** Market entry, country expansion, long-range planning
- **Trigger:** `Run PESTEL on [market] — 3 bullets per factor, flag which are material`
- **Stacks with:** Five Forces, PMESII-PT (military analogue), Scenario Planning

### 61. Scenario Planning (Shell / GBN / Oxford Method)
- **Origin:** Pierre Wack, Shell, 1970s; refined by Peter Schwartz / GBN
- **Does:** Builds 3-4 plausible, divergent, internally-consistent future scenarios and tests strategy against each
- **When:** Long-range planning under deep uncertainty (10+ years)
- **Trigger:** `Build 4 scenarios for [industry/market] in 10 years using 2 critical uncertainties`
- **Stacks with:** Alternative Futures (CIA version), Three Horizons, PESTEL

### 62. Real Options Analysis
- **Origin:** Stewart Myers, MIT, 1977; popularized by Black-Scholes extensions
- **Does:** Values strategic flexibility — the option to expand, defer, or abandon — like a financial option
- **When:** High-uncertainty investments; staged commitments
- **Trigger:** `Frame this investment as a portfolio of real options — what's the value of waiting, expanding, abandoning?`
- **Stacks with:** Decision Trees, Monte Carlo, Three Horizons

---

# PART 5 — PROBLEM-SOLVING FRAMEWORKS (Consulting + Lean)

### 63. MECE Principle
- **Origin:** Barbara Minto, McKinsey, 1960s
- **Does:** Mutually Exclusive, Collectively Exhaustive — categories that don't overlap and cover everything
- **When:** Every time you make a list or structure analysis
- **Trigger:** `Ensure these categories are MECE — no overlaps, nothing missing`
- **Stacks with:** Pyramid Principle, Issue Trees

### 64. Pyramid Principle
- **Origin:** Barbara Minto, *The Minto Pyramid Principle*, 1985
- **Does:** Structure: Answer first, then 3 supporting arguments, then evidence per argument. Top-down communication.
- **When:** Executive communication, board decks, investor memos
- **Trigger:** `Structure this as a Minto pyramid — answer on top, 3 supports, evidence below each`
- **Stacks with:** MECE, SCR (Situation-Complication-Resolution)

### 65. Issue Trees / Logic Trees / Hypothesis Trees
- **Origin:** McKinsey problem-solving methodology
- **Does:** Breaks a complex question into a tree of MECE sub-questions, each answerable
- **When:** Complex analysis; "boil the ocean" problems
- **Trigger:** `Build an issue tree — decompose this question into MECE sub-questions, 3 levels deep`
- **Stacks with:** MECE, Hypothesis-Driven Problem Solving

### 66. Hypothesis-Driven Problem Solving
- **Origin:** McKinsey core methodology
- **Does:** Start with a tentative answer (hypothesis), design analysis to confirm/refute, iterate — vs. boiling the ocean
- **When:** Consulting-style engagements; time-constrained analysis
- **Trigger:** `Frame a lead hypothesis, design analysis to test it, iterate — don't boil the ocean`
- **Stacks with:** ACH, Lean Startup

### 67. Five Whys
- **Origin:** Sakichi Toyoda, Toyota, 1930s
- **Does:** Ask "why?" five times to drill from symptom to root cause
- **When:** Every post-incident, every outage, every missed target
- **Trigger:** `Run 5 Whys on [problem]`
- **Stacks with:** Fishbone, RCA, Step-Back

### 68. Fishbone (Ishikawa) Diagram
- **Origin:** Kaoru Ishikawa, Japan, 1960s
- **Does:** Categorizes potential causes into 6M's (Man, Method, Machine, Material, Measurement, Mother Nature) or custom buckets
- **When:** Multi-cause problems where 5 Whys isn't enough
- **Trigger:** `Build a fishbone diagram for [problem] — 6M categories`
- **Stacks with:** 5 Whys, RCA

### 69. Root Cause Analysis (RCA)
- **Origin:** Aerospace/nuclear industries
- **Does:** Formal methodology — define problem, gather data, identify causal factors, find root cause, recommend solutions
- **When:** Incidents requiring post-mortem (outages, customer churn spikes, project failures)
- **Trigger:** `Run RCA — formal problem statement, data gathered, causal factors, root cause, recommendations`
- **Stacks with:** 5 Whys, Fishbone, FMEA

### 70. A3 Thinking / A3 Problem Solving
- **Origin:** Toyota Production System
- **Does:** Forces the entire problem-solving process onto a single A3 sheet — background, current state, goal, root cause, countermeasures, plan, follow-up
- **When:** Operational problems; forcing clarity
- **Trigger:** `Write this up as an A3 — all 7 sections on one page`
- **Stacks with:** PDCA, DMAIC

### 71. PDCA / Deming Cycle
- **Origin:** Walter Shewhart 1920s, popularized by W. Edwards Deming
- **Does:** Plan → Do → Check → Act — continuous improvement loop
- **When:** Any iterative improvement process
- **Trigger:** `Run a PDCA loop on [process]`
- **Stacks with:** OODA, Build-Measure-Learn, DMAIC

### 72. DMAIC (Six Sigma)
- **Origin:** Motorola, 1986; Six Sigma core
- **Does:** Define → Measure → Analyze → Improve → Control — data-driven process improvement
- **When:** Process improvement with measurable quality targets
- **Trigger:** `Run DMAIC on [process] — define problem, measure baseline, analyze causes, improve, control`
- **Stacks with:** Lean, A3, Statistical Process Control

### 73. 8D Problem Solving
- **Origin:** Ford Motor Company, 1987
- **Does:** 8 Disciplines: team formation, problem description, containment, root cause, permanent corrective action, implementation, prevention, team recognition
- **When:** Customer-facing defects, quality issues, regulatory responses
- **Trigger:** `Run 8D on [defect] — all 8 disciplines`
- **Stacks with:** RCA, DMAIC

### 74. TRIZ (Theory of Inventive Problem Solving)
- **Origin:** Genrikh Altshuller, Soviet Union, 1946
- **Does:** 40 inventive principles derived from patent analysis; resolves technical contradictions without compromise
- **When:** Innovation problems where "tradeoffs" are assumed but might not be real
- **Trigger:** `Identify the core contradiction — apply TRIZ's 40 principles to find a non-compromise solution`
- **Stacks with:** Morphological Analysis, Blue Ocean

### 75. Design Thinking
- **Origin:** IDEO / Stanford d.school, 2000s
- **Does:** 5 stages — Empathize, Define, Ideate, Prototype, Test
- **When:** User-facing products, service design, ill-defined problems
- **Trigger:** `Run Design Thinking on [problem] — all 5 stages`
- **Stacks with:** JTBD, Double Diamond, Lean Startup

### 76. Double Diamond
- **Origin:** British Design Council, 2005
- **Does:** Two diamonds — Discover/Define (find the right problem), Develop/Deliver (find the right solution)
- **When:** Design processes; any time "are we solving the right problem?" is a risk
- **Trigger:** `Apply Double Diamond — discover problem, define problem, develop solutions, deliver solution`
- **Stacks with:** Design Thinking, ADM

### 77. Kepner-Tregoe Problem Analysis
- **Origin:** Charles Kepner & Benjamin Tregoe, RAND alumni, 1958
- **Does:** Structured 4-process problem-solving — Situation Appraisal, Problem Analysis, Decision Analysis, Potential Problem Analysis
- **When:** Rigorous industrial/operational decisions
- **Trigger:** `Run Kepner-Tregoe — situation, problem, decision, potential problem analysis`
- **Stacks with:** MCDA, RCA

---

# PART 6 — DECISION-MAKING FRAMEWORKS

### 78. Eisenhower Matrix (Urgent-Important)
- **Origin:** Dwight Eisenhower (attributed); popularized by Stephen Covey
- **Does:** 2x2 — urgent × important → Do, Schedule, Delegate, Delete
- **When:** Weekly planning, inbox triage, priority resets
- **Trigger:** `Place these tasks on an Eisenhower matrix`
- **Stacks with:** Impact-Effort Matrix, OKRs

### 79. RAPID Decision Framework
- **Origin:** Bain & Company
- **Does:** Names the Recommender, Agreers, Performers, Input providers, Decider for each decision — kills ambiguity about who decides what
- **When:** Complex orgs; when decisions keep stalling or getting re-opened
- **Trigger:** `Assign RAPID roles for [decision] — R, A, P, I, D`
- **Stacks with:** RACI, DACI

### 80. DACI
- **Origin:** Intuit
- **Does:** Driver, Approver, Contributors, Informed — lightweight alternative to RAPID
- **When:** Project-level decision ownership
- **Trigger:** `Assign DACI roles for [decision]`
- **Stacks with:** RAPID, RACI

### 81. RACI / RASCI
- **Origin:** Project management, 1950s-60s
- **Does:** Responsible, Accountable, Consulted, Informed (+ Supportive for RASCI)
- **When:** Ongoing operational responsibility mapping
- **Trigger:** `Build a RACI chart for [project/process]`
- **Stacks with:** DACI, RAPID

### 82. Weighted Decision Matrix
- **Origin:** Classic operations research
- **Does:** Lists options × criteria, weights criteria by importance, scores each, picks highest weighted sum
- **When:** Multi-criteria choices with quantifiable criteria
- **Trigger:** `Build a weighted decision matrix — options × criteria × weights`
- **Stacks with:** AHP, MCDA

### 83. Analytic Hierarchy Process (AHP)
- **Origin:** Thomas Saaty, 1970s
- **Does:** Pairwise comparisons of criteria to derive weights mathematically — more rigorous than intuitive weighting
- **When:** High-stakes multi-criteria decisions where weights matter
- **Trigger:** `Run AHP — pairwise compare criteria, derive weights, score options`
- **Stacks with:** MCDA, Weighted Decision Matrix

### 84. Decision Trees / Expected Value Analysis
- **Origin:** Classical decision theory
- **Does:** Maps decisions and probabilistic outcomes, calculates expected value of each path
- **When:** Decisions with quantifiable probabilities and payoffs
- **Trigger:** `Build a decision tree — decisions, chance nodes, payoffs; compute EV per path`
- **Stacks with:** Monte Carlo, Real Options

### 85. Multi-Criteria Decision Analysis (MCDA)
- **Origin:** Operations research, 1960s-70s
- **Does:** Umbrella term for structured multi-criteria evaluation methods (AHP, ELECTRE, TOPSIS, etc.)
- **When:** Government-style procurement, enterprise vendor selection
- **Trigger:** `Run MCDA using [AHP/TOPSIS/ELECTRE] on [decision]`
- **Stacks with:** AHP, Weighted Decision Matrix

### 86. Monte Carlo Simulation
- **Origin:** Stanislaw Ulam, Manhattan Project, 1940s
- **Does:** Runs thousands of simulations with random inputs from probability distributions — gives distribution of outcomes, not point estimates
- **When:** Risk analysis, financial forecasting, project timeline estimation
- **Trigger:** `Run Monte Carlo — sample input distributions 10,000 times, report outcome distribution`
- **Stacks with:** Decision Trees, Real Options

### 87. Cost-Benefit Analysis (CBA)
- **Origin:** Jules Dupuit, 1848; refined by Alfred Kahn and others
- **Does:** Enumerate all costs and benefits (including externalities), discount to present value, compare
- **When:** Investment decisions, policy decisions, capital allocation
- **Trigger:** `Run full CBA — enumerate direct/indirect costs and benefits, DCF to NPV`
- **Stacks with:** NPV, IRR, Sensitivity Analysis

### 88. SPADE Framework
- **Origin:** Gokul Rajaram (Square, DoorDash)
- **Does:** Setting, People, Alternatives, Decide, Explain — written decision framework for distributed teams
- **When:** Async decision-making; documentation-heavy cultures
- **Trigger:** `Write this decision as a SPADE — setting, people, alternatives, decision, explanation`
- **Stacks with:** DACI, RAPID

### 89. WRAP Framework
- **Origin:** Chip & Dan Heath, *Decisive*, 2013
- **Does:** Widen options, Reality-test assumptions, Attain distance, Prepare to be wrong
- **When:** Individual or team decisions prone to bias
- **Trigger:** `Apply WRAP — widen options, reality-test, attain emotional distance, prepare to be wrong`
- **Stacks with:** Pre-mortem, Devil's Advocacy

### 90. Vroom-Yetton-Jago Decision Model
- **Origin:** Victor Vroom & Philip Yetton, 1973
- **Does:** Decision tree that tells you whether to decide alone, consult individuals, consult team, or decide by consensus — based on decision attributes
- **When:** Deciding HOW to decide with a team
- **Trigger:** `Run Vroom-Yetton — what decision style fits this situation?`
- **Stacks with:** RAPID, DACI

---

# PART 7 — MENTAL MODELS & THINKING AMPLIFIERS

### 91. First Principles Thinking
- **Origin:** Aristotle; revived by Elon Musk in modern usage
- **Does:** Break a problem down to fundamental truths, rebuild reasoning from scratch — ignore analogies and convention
- **When:** When "the industry always does X" is the answer you're being given
- **Trigger:** `Reason from first principles — what are the fundamental physical/economic/logical truths here? Rebuild up.`
- **Stacks with:** Step-Back Prompting, Five Whys, TRIZ

### 92. Second-Order Thinking
- **Origin:** Charlie Munger, popularized by Howard Marks
- **Does:** "And then what?" — think past the immediate consequence to the consequence of the consequence
- **When:** Any decision with non-trivial downstream effects
- **Trigger:** `Apply second- and third-order thinking — what happens after the initial effect?`
- **Stacks with:** Systems Thinking, Scenario Planning

### 93. Inversion
- **Origin:** Carl Jacobi; Charlie Munger's "invert, always invert"
- **Does:** Instead of asking "how do I succeed?" ask "how do I guarantee failure?" — then avoid those things
- **When:** When forward planning is stuck; risk identification
- **Trigger:** `Invert — instead of planning how to succeed, plan how to guarantee failure. Then avoid those things.`
- **Stacks with:** Pre-mortem, Red Teaming

### 94. Steel Manning
- **Origin:** Philosophy (opposite of "strawmanning")
- **Does:** Articulate your opponent's position stronger than they can themselves, THEN respond
- **When:** Any disagreement; any devil's advocate work
- **Trigger:** `Steel-man the opposing view — state it in its strongest possible form before responding`
- **Stacks with:** Devil's Advocacy, ACH

### 95. Six Thinking Hats
- **Origin:** Edward de Bono, 1985
- **Does:** Forces distinct thinking modes — White (facts), Red (emotions), Black (risks), Yellow (optimism), Green (creativity), Blue (process)
- **When:** Group decisions, balanced analysis, avoiding one-dimensional thinking
- **Trigger:** `Run Six Hats on [topic] — cycle through White, Red, Black, Yellow, Green, Blue`
- **Stacks with:** Multi-Agent Debate, Structured Brainstorming

### 96. Lateral Thinking
- **Origin:** Edward de Bono, 1967
- **Does:** Escapes linear logic via random input, provocation (PO), concept fan — generates non-obvious solutions
- **When:** Stuck on a problem that linear reasoning can't solve
- **Trigger:** `Apply lateral thinking — use random provocation or concept fan to break out of the current frame`
- **Stacks with:** TRIZ, Morphological Analysis

### 97. Socratic Method
- **Origin:** Socrates, 5th century BC
- **Does:** Questions rather than assertions — exposes contradictions and assumptions in reasoning
- **When:** Stress-testing arguments; teaching; self-interrogation
- **Trigger:** `Interrogate this position Socratically — ask probing questions that expose hidden assumptions`
- **Stacks with:** Five Whys, Starbursting, Key Assumptions Check

### 98. Bayesian Thinking / Bayesian Updating
- **Origin:** Thomas Bayes, 1763
- **Does:** Start with prior belief, update probability as new evidence arrives, never claim certainty
- **When:** Any belief or forecast over time; intelligence analysis
- **Trigger:** `Apply Bayesian reasoning — state prior, weigh new evidence, update posterior`
- **Stacks with:** ACH, Probabilistic Thinking

### 99. Probabilistic Thinking / Superforecasting
- **Origin:** Philip Tetlock, *Superforecasting*, 2015
- **Does:** Expresses all predictions as probabilities, calibrates against outcomes, avoids false precision and false modesty
- **When:** Any forecast, plan, or prediction
- **Trigger:** `State all predictions as calibrated probabilities — avoid "likely" in favor of "65-75%"`
- **Stacks with:** Bayesian Updating, Monte Carlo

### 100. Occam's Razor
- **Origin:** William of Ockham, 14th century
- **Does:** Among competing explanations, prefer the one requiring fewest assumptions
- **When:** Theorizing causes; avoiding elaborate explanations
- **Trigger:** `Apply Occam's Razor — what's the simplest explanation?`
- **Stacks with:** ACH, Hanlon's Razor

### 101. Hanlon's Razor
- **Origin:** Robert J. Hanlon (attributed), 1980
- **Does:** "Never attribute to malice that which is adequately explained by stupidity (or incompetence or misaligned incentives)."
- **When:** Interpreting others' confusing behavior; de-escalating conflicts
- **Trigger:** `Apply Hanlon's Razor — before assuming malice, check for incompetence or misaligned incentives`
- **Stacks with:** Steel Manning, ACH

### 102. Chesterton's Fence
- **Origin:** G.K. Chesterton, 1929
- **Does:** Before removing a rule/policy/convention you don't understand, find out why it was put there in the first place
- **When:** Changing inherited systems; simplification efforts
- **Trigger:** `Apply Chesterton's Fence — why does this rule/system exist before we remove it?`
- **Stacks with:** Systems Thinking, Root Cause Analysis

### 103. Hickam's Dictum (opposite of Occam)
- **Origin:** John Hickam, physician
- **Does:** "Patients can have as many diseases as they damn well please." Multiple causes can coexist.
- **When:** Complex systems where Occam's Razor is leading you astray
- **Trigger:** `Consider Hickam's Dictum — multiple overlapping causes may be simultaneously true`
- **Stacks with:** ACH, Systems Thinking

### 104. Munger's Latticework of Mental Models
- **Origin:** Charlie Munger, Berkshire Hathaway
- **Does:** Apply models from multiple disciplines — economics, psychology, physics, biology — to avoid the "man with a hammer" trap
- **When:** Every meaningful decision; building worldly wisdom
- **Trigger:** `Apply mental models from at least 3 disciplines to this problem`
- **Stacks with:** Everything. This is the meta-principle behind this entire document.

### 105. Systems Thinking
- **Origin:** Jay Forrester (MIT), popularized by Peter Senge (*The Fifth Discipline*), Donella Meadows (*Thinking in Systems*)
- **Does:** Sees the system — feedback loops, stocks and flows, delays, leverage points — not isolated events
- **When:** Any complex adaptive system (businesses, markets, organizations, ecosystems)
- **Trigger:** `Apply systems thinking — identify stocks, flows, feedback loops, delays, leverage points`
- **Stacks with:** Causal Loop Diagrams, Cynefin

### 106. Causal Loop Diagrams
- **Origin:** System dynamics (Forrester), 1960s
- **Does:** Visualizes reinforcing and balancing feedback loops as arrows with polarity
- **When:** Modeling any system with feedback
- **Trigger:** `Draw causal loop diagrams — identify R (reinforcing) and B (balancing) loops`
- **Stacks with:** Systems Thinking, Cross-Impact Matrix

### 107. Iceberg Model
- **Origin:** Systems thinking literature (Senge et al.)
- **Does:** Events (visible) → Patterns → Structures → Mental Models (deepest, least visible) — forces you past symptoms
- **When:** Recurring problems; cultural issues; "why does this keep happening?"
- **Trigger:** `Apply the Iceberg Model — event, pattern, structure, mental model`
- **Stacks with:** 5 Whys, Systems Thinking

### 108. Ladder of Inference
- **Origin:** Chris Argyris, Harvard
- **Does:** Traces reasoning from observable data → selected data → meanings → assumptions → conclusions → beliefs → actions
- **When:** Conflict resolution; interrogating your own reasoning
- **Trigger:** `Walk this conclusion down the Ladder of Inference — back to observable data`
- **Stacks with:** Key Assumptions Check, Systems Thinking

---

# PART 8 — RESEARCH METHODS (Rigorous)

### 109. PRISMA (Systematic Review)
- **Origin:** 2009 by Moher et al., updated 2020
- **Does:** Gold standard for systematic literature reviews — 27-item checklist + flow diagram
- **When:** Any "what does the evidence say?" question across many sources
- **Trigger:** `Apply PRISMA methodology — define question, search strategy, inclusion criteria, extraction, synthesis`
- **Stacks with:** CoVe, Quality of Information Check

### 110. Systematic Literature Review
- **Origin:** Medical research, 1990s
- **Does:** Reproducible, comprehensive literature synthesis with documented search strategy
- **When:** Board papers, market primers, evidence-based analysis
- **Trigger:** `Conduct a systematic literature review on [topic] — document search strategy and inclusion criteria`
- **Stacks with:** PRISMA, Meta-analysis

### 111. Grounded Theory
- **Origin:** Glaser & Strauss, 1967
- **Does:** Builds theory from qualitative data via iterative coding — not from pre-existing hypotheses
- **When:** Customer research; exploratory qualitative work
- **Trigger:** `Apply grounded theory — open coding, axial coding, selective coding — let theory emerge from data`
- **Stacks with:** Ethnography, JTBD interviews

### 112. Jobs-to-be-Done Interviews (Ulwick / Christensen method)
- **Origin:** Tony Ulwick, Clayton Christensen, early 2000s
- **Does:** Uncovers functional, emotional, and social "jobs" customers hire products to do
- **When:** Product discovery, positioning, innovation
- **Trigger:** `Run JTBD interview structure — uncover the job, the progress sought, competing solutions, struggle moments`
- **Stacks with:** Mom Test, Lean Canvas

### 113. Mom Test (Rob Fitzpatrick)
- **Origin:** Rob Fitzpatrick, *The Mom Test*, 2013
- **Does:** Customer interview rules that prevent false positives — ask about their past behavior, not hypothetical future behavior
- **When:** Any customer discovery conversation
- **Trigger:** `Apply Mom Test rules — talk about their life not your idea, specifics not generalities, past not hypothetical`
- **Stacks with:** JTBD, Customer Development

### 114. Delphi Method (also in Part 3)
- Already covered — iterative expert forecasting

### 115. Case Study Method (Yin)
- **Origin:** Robert Yin, *Case Study Research*, 1984
- **Does:** Rigorous qualitative methodology for "how" and "why" questions about contemporary phenomena
- **When:** Deep dives on exemplars or failures
- **Trigger:** `Apply Yin's case study method — define the case, propositions, unit of analysis, data sources`
- **Stacks with:** Grounded Theory, Comparative Analysis

---

# PART 9 — FORESIGHT & FUTURES STUDIES

### 116. Scenario Planning (covered in Part 4)

### 117. Three Horizons Framework (covered in Part 4)

### 118. Backcasting
- **Origin:** John B. Robinson, 1982 (sustainability research)
- **Does:** Start from a desired future state, work backward to identify steps needed — opposite of forecasting
- **When:** Ambitious goals where forecasting says "impossible"
- **Trigger:** `Backcast from [desired future state in Y years] — what had to be true at year -1, -2, -3 to get there?`
- **Stacks with:** Three Horizons, OKRs

### 119. Futures Wheel
- **Origin:** Jerome Glenn, 1971
- **Does:** Maps first-order, second-order, third-order consequences of an event or trend in concentric rings
- **When:** Exploring implications of a trend, regulation, or technology shift
- **Trigger:** `Build a futures wheel for [event/trend] — 3 rings of consequences`
- **Stacks with:** Second-Order Thinking, Systems Thinking

### 120. Causal Layered Analysis (CLA)
- **Origin:** Sohail Inayatullah, 1998
- **Does:** 4 analytical layers — Litany (surface), Systemic Causes, Worldview, Myth/Metaphor
- **When:** Deep transformation questions; cultural change
- **Trigger:** `Apply CLA — analyze at litany, systemic, worldview, and myth/metaphor layers`
- **Stacks with:** Iceberg Model, Systems Thinking

### 121. Horizon Scanning
- **Origin:** UK government, Foresight program
- **Does:** Systematic scanning of emerging trends, weak signals, and discontinuities
- **When:** Strategic planning; staying ahead of disruption
- **Trigger:** `Run horizon scanning on [domain] — weak signals, emerging trends, wild cards`
- **Stacks with:** Weak Signal Analysis, I&W, Scenario Planning

### 122. Weak Signal Analysis
- **Origin:** Igor Ansoff, 1975
- **Does:** Identifies faint, fragmentary early indicators of major change before they become mainstream
- **When:** Competitive intelligence; disruption early warning
- **Trigger:** `Identify weak signals in [domain] — faint indicators that could signal big change`
- **Stacks with:** Horizon Scanning, I&W

### 123. Wild Card Analysis
- **Origin:** Futures studies literature
- **Does:** Identifies low-probability, high-impact events and prepares for them
- **When:** Black swan preparation; resilience planning
- **Trigger:** `Identify 10 wild cards for [industry] — low probability, high impact, and plan for each`
- **Stacks with:** High-Impact/Low-Probability (CIA), Black Swan

### 124. Visioning
- **Origin:** Strategic planning tradition
- **Does:** Concrete articulation of the desired future state — sensory, specific, time-bound
- **When:** Strategy formulation; cultural change; inspiration
- **Trigger:** `Write a concrete vision for [entity] in Y years — what does a day look like? What do customers say?`
- **Stacks with:** Backcasting, OKRs

---

# PART 10 — RISK MANAGEMENT & ANTI-FRAGILITY

### 125. FMEA (Failure Mode & Effects Analysis)
- **Origin:** US military, 1949 (MIL-P-1629); widely adopted in aerospace and automotive
- **Does:** For each failure mode: severity × occurrence × detectability = Risk Priority Number (RPN)
- **When:** Product design; process design; preventing known-unknowns
- **Trigger:** `Run FMEA on [product/process] — every failure mode × severity × likelihood × detectability`
- **Stacks with:** Pre-mortem, RCA, Fault Tree Analysis

### 126. Bow Tie Analysis
- **Origin:** ICI (chemical industry), 1970s
- **Does:** Visualizes hazard on left (causes → barriers → event), right (event → barriers → consequences) — like a bowtie
- **When:** High-consequence risk management; safety engineering
- **Trigger:** `Build a bow tie for [hazard] — left side causes/preventive barriers, right side consequences/mitigation barriers`
- **Stacks with:** FMEA, Fault Tree

### 127. Fault Tree Analysis (FTA)
- **Origin:** Bell Labs, 1962 (Minuteman missile program)
- **Does:** Top-down logical tree from undesired event to all contributing causes, with AND/OR gates
- **When:** Safety-critical systems; cybersecurity threat modeling
- **Trigger:** `Build a fault tree for [failure event] — logical decomposition with AND/OR gates`
- **Stacks with:** FMEA, Bow Tie

### 128. Risk Matrix / Heat Map
- **Origin:** Enterprise risk management practice
- **Does:** Plots risks on 2D grid — probability × impact — buckets them into zones
- **When:** Board-level risk reporting; prioritization
- **Trigger:** `Build a risk matrix — plot all risks on probability × impact grid`
- **Stacks with:** Monte Carlo, Scenario Planning

### 129. Black Swan Theory
- **Origin:** Nassim Nicholas Taleb, 2007
- **Does:** Recognizes that the most consequential events are unpredictable outliers — plan for resilience, not prediction
- **When:** Planning; humility in forecasting
- **Trigger:** `Apply Black Swan framing — don't forecast the specific event, build antifragility to whatever happens`
- **Stacks with:** Antifragility, Wild Card, High-Impact/Low-Probability

### 130. Antifragility
- **Origin:** Nassim Nicholas Taleb, 2012
- **Does:** Designs systems that BENEFIT from stress, volatility, and disorder (not just resist — benefit)
- **When:** Business model design; resilience strategy
- **Trigger:** `Design for antifragility — what configurations make us stronger under stress, not just resistant?`
- **Stacks with:** Real Options, Barbell Strategy

### 131. Chaos Engineering
- **Origin:** Netflix, 2011 (Chaos Monkey)
- **Does:** Deliberately injects failures into production to verify resilience — "break things on purpose"
- **When:** Operational resilience of production systems
- **Trigger:** `Design chaos experiments — what failures can we inject to test resilience?`
- **Stacks with:** Pre-mortem, FMEA

---

# PART 11 — LEAN STARTUP & PRODUCT STRATEGY

### 132. Lean Startup
- **Origin:** Eric Ries, 2011
- **Does:** Build-Measure-Learn loop with validated learning; pivot or persevere decisions
- **When:** New product development; early-stage ventures
- **Trigger:** `Apply Lean Startup — hypotheses, MVP, build-measure-learn loop, pivot/persevere decision`
- **Stacks with:** Customer Development, PDCA, OODA

### 133. Customer Development
- **Origin:** Steve Blank, 2005
- **Does:** 4 stages — Customer Discovery, Customer Validation, Customer Creation, Company Building
- **When:** Pre-product-market fit
- **Trigger:** `Apply Blank's Customer Development — which of the 4 stages are we in? What must be proven?`
- **Stacks with:** Lean Startup, JTBD

### 134. Lean Canvas
- **Origin:** Ash Maurya, 2010 (adaptation of Business Model Canvas for startups)
- **Does:** One-page business model — Problem, Solution, Key Metrics, Unique Value Prop, Unfair Advantage, Channels, Customer Segments, Cost Structure, Revenue Streams
- **When:** Early-stage startups; hypothesis mapping
- **Trigger:** `Draft a Lean Canvas for [venture]`
- **Stacks with:** BMC, Value Prop Canvas

### 135. Business Model Canvas
- **Origin:** Alexander Osterwalder, *Business Model Generation*, 2010
- **Does:** 9-block one-page business model — customers, value, channels, relationships, revenues, resources, activities, partners, costs
- **When:** Established businesses; business model innovation
- **Trigger:** `Build BMC for [business]`
- **Stacks with:** Lean Canvas, Value Prop Canvas

### 136. Value Proposition Canvas
- **Origin:** Osterwalder et al., 2014
- **Does:** Maps customer jobs-pains-gains against product's pain relievers, gain creators, products/services
- **When:** Aligning product to customer need; positioning
- **Trigger:** `Map the VPC — customer jobs/pains/gains vs our pain relievers/gain creators`
- **Stacks with:** JTBD, BMC

### 137. Kano Model
- **Origin:** Noriaki Kano, 1984
- **Does:** Classifies features as Must-have, Performance, Delighters, Indifferent, Reverse — predicts satisfaction
- **When:** Feature prioritization; product positioning
- **Trigger:** `Classify features using Kano — must-have, performance, delighter, indifferent, reverse`
- **Stacks with:** MoSCoW, RICE

### 138. RICE Scoring
- **Origin:** Intercom, mid-2010s
- **Does:** Reach × Impact × Confidence ÷ Effort = RICE score for prioritization
- **When:** Product backlog prioritization
- **Trigger:** `Score these features using RICE — reach × impact × confidence / effort`
- **Stacks with:** Kano, ICE, Impact-Effort

### 139. ICE Scoring
- **Origin:** Sean Ellis, Growth Hackers, 2010s
- **Does:** Impact × Confidence × Ease — faster lighter-weight version of RICE
- **When:** Growth experiments prioritization
- **Trigger:** `Score growth experiments with ICE`
- **Stacks with:** RICE, Experiment design

### 140. MoSCoW Prioritization
- **Origin:** Dai Clegg, Oracle UK, 1994
- **Does:** Classifies requirements as Must, Should, Could, Won't
- **When:** Scope management; MVP definition
- **Trigger:** `Apply MoSCoW — must, should, could, won't`
- **Stacks with:** Kano, RICE

### 141. Impact-Effort Matrix
- **Origin:** Project management folk practice
- **Does:** 2x2 — plot initiatives on impact × effort → Quick Wins, Major Projects, Fill-ins, Thankless Tasks
- **When:** Portfolio prioritization; resource allocation
- **Trigger:** `Plot initiatives on impact × effort 2x2`
- **Stacks with:** Eisenhower, RICE

### 142. North Star Framework
- **Origin:** Amplitude / Sean Ellis lineage
- **Does:** One primary metric (the North Star) + 3-5 input metrics that drive it
- **When:** Aligning teams around a single outcome metric
- **Trigger:** `Define the North Star metric for [product] + input metrics that drive it`
- **Stacks with:** OKRs, AARRR

### 143. Pirate Metrics (AARRR)
- **Origin:** Dave McClure, 2007
- **Does:** Acquisition → Activation → Retention → Referral → Revenue — funnel metrics
- **When:** Growth strategy; startup metrics dashboards
- **Trigger:** `Map our funnel to AARRR — identify leaks and biggest levers`
- **Stacks with:** North Star, Cohort Analysis

---

# PART 12 — EXECUTION & STRATEGIC ALIGNMENT

### 144. OKRs (Objectives and Key Results)
- **Origin:** Andy Grove at Intel (1970s), popularized at Google by John Doerr
- **Does:** Ambitious qualitative Objective + 3-5 quantitative Key Results — quarterly or annual
- **When:** Goal-setting across teams; strategy execution
- **Trigger:** `Write OKRs for [team/company] — ambitious Os, measurable KRs, 3-5 per O`
- **Stacks with:** North Star, Hoshin Kanri, 4DX

### 145. Hoshin Kanri (Policy Deployment)
- **Origin:** Toyota, 1960s
- **Does:** Cascades 3-5 year strategy to annual, monthly, daily execution via the X-matrix and catchball process
- **When:** Multi-year strategy execution in operational cultures
- **Trigger:** `Cascade strategy via Hoshin Kanri — build the X-matrix linking long-term to annual to tactics`
- **Stacks with:** OKRs, Balanced Scorecard

### 146. 4 Disciplines of Execution (4DX)
- **Origin:** Chris McChesney, Sean Covey, Jim Huling, 2012
- **Does:** 1) Focus on Wildly Important Goals, 2) Act on Lead Measures, 3) Compelling Scoreboard, 4) Cadence of Accountability
- **When:** Execution-heavy environments; closing the "strategy-execution gap"
- **Trigger:** `Apply 4DX — WIGs, lead measures, scoreboard, cadence`
- **Stacks with:** OKRs, Hoshin

### 147. Balanced Scorecard
- **Origin:** Robert Kaplan & David Norton, HBR, 1992
- **Does:** Measures performance across 4 perspectives — Financial, Customer, Internal Process, Learning & Growth
- **When:** Enterprise performance management
- **Trigger:** `Build a balanced scorecard — metrics across financial, customer, process, learning perspectives`
- **Stacks with:** Hoshin, 7S

### 148. V2MOM
- **Origin:** Marc Benioff, Salesforce, 1999
- **Does:** Vision, Values, Methods, Obstacles, Measures — cascades company alignment
- **When:** Alignment at scale; Salesforce-style culture
- **Trigger:** `Build a V2MOM — vision, values, methods, obstacles, measures`
- **Stacks with:** OKRs, Playing to Win

### 149. EOS (Entrepreneurial Operating System)
- **Origin:** Gino Wickman, *Traction*, 2011
- **Does:** Six Key Components — Vision, People, Data, Issues, Process, Traction — with specific tools (VTO, Scorecard, Rocks, L10 meeting)
- **When:** Small/mid-sized business operating rhythm
- **Trigger:** `Apply EOS — VTO, Scorecard, Rocks, L10 meetings, IDS`
- **Stacks with:** OKRs, 4DX

### 150. Scaling Up (Rockefeller Habits)
- **Origin:** Verne Harnish, *Scaling Up*, 2014 (evolution of *Mastering the Rockefeller Habits*, 2002)
- **Does:** 4 Decisions — People, Strategy, Execution, Cash — with the One-Page Strategic Plan
- **When:** Growing from startup to mid-market
- **Trigger:** `Apply Scaling Up — People, Strategy, Execution, Cash — fill the OPSP`
- **Stacks with:** OKRs, EOS

---

# PART 13 — NEGOTIATION & INFLUENCE

### 151. BATNA / ZOPA / WATNA
- **Origin:** Fisher & Ury, *Getting to Yes*, 1981 (Harvard Negotiation Project)
- **Does:** BATNA = Best Alternative to a Negotiated Agreement. ZOPA = Zone of Possible Agreement. WATNA = Worst Alternative.
- **When:** Every negotiation; especially before starting one
- **Trigger:** `Define BATNA, WATNA, and ZOPA for [negotiation]`
- **Stacks with:** Principled Negotiation, 7 Elements

### 152. Principled Negotiation (Harvard Method)
- **Origin:** Fisher & Ury, Roger Fisher, William Ury — Harvard
- **Does:** 4 principles — separate people from problem, focus on interests not positions, invent options for mutual gain, insist on objective criteria
- **When:** High-stakes negotiations; ongoing relationships
- **Trigger:** `Apply Principled Negotiation — separate people from problem, interests not positions, options for mutual gain, objective criteria`
- **Stacks with:** BATNA, Tactical Empathy

### 153. Tactical Empathy (Chris Voss / FBI)
- **Origin:** Chris Voss, *Never Split the Difference*, 2016
- **Does:** Uses labeling, mirroring, calibrated questions, and "no-oriented" questions to shift negotiations
- **When:** High-emotion or adversarial negotiations
- **Trigger:** `Apply Voss's tactical empathy — labeling, mirroring, calibrated questions`
- **Stacks with:** Principled Negotiation, Socratic Method

### 154. 7 Elements of Negotiation (Harvard)
- **Origin:** Harvard Negotiation Project
- **Does:** Interests, Options, Alternatives, Legitimacy, Communication, Relationship, Commitment
- **When:** Preparing for complex negotiations
- **Trigger:** `Prepare the 7 elements — interests, options, alternatives, legitimacy, communication, relationship, commitment`
- **Stacks with:** BATNA, Principled Negotiation

---

# PART 14 — STACKING RECIPES (Power Combos)

**The real leverage is combining frameworks. Here are proven stacks by use case.**

### Recipe 1: NEW PRODUCT IDEATION
```
ultrathink + Cynefin + Jobs-to-be-Done + Morphological Analysis +
Lean Canvas + Value Proposition Canvas + Kano Model
```
→ Classify problem, understand customer jobs, generate options systematically, frame business model, align value to job, prioritize features.

### Recipe 2: MARKET ENTRY / EXPANSION
```
ultrathink + PESTEL + Porter's Five Forces + IPB +
Blue Ocean ERRC + Wardley Mapping + COA Development + Pre-mortem
```
→ Scan environment, assess industry, map terrain, find white space, map evolution, generate courses of action, stress-test.

### Recipe 3: STRATEGIC PIVOT DECISION
```
ultrathink + OODA + ACH + Key Assumptions Check +
Devil's Advocacy + Pre-mortem + WRAP
```
→ Observe-orient fast, enumerate hypotheses, check assumptions, have devil advocate, pre-mortem the pivot, prepare for wrongness.

### Recipe 4: BET-THE-COMPANY DECISION
```
ultrathink + MDMP + COG Analysis + Scenario Planning +
Red Teaming + Monte Carlo + AHP + Pre-mortem
```
→ Full military planning, identify critical sources of power, plan across 4 scenarios, red team, run probabilistic simulation, formally score, pre-mortem.

### Recipe 5: PRODUCT-MARKET FIT HUNT
```
ultrathink + Customer Development + JTBD + Mom Test +
Lean Startup (Build-Measure-Learn) + RICE + North Star
```
→ Blank's 4 stages, understand jobs, interview cleanly, iterate MVP, prioritize experiments, align on one metric.

### Recipe 6: COMPETITIVE COUNTER-MOVE
```
ultrathink + OODA + COG Analysis + Team A/Team B +
Wargaming + RDSP
```
→ Observe faster, find their center of gravity, two-team analysis, wargame 3 COAs, rapid decision synchronization.

### Recipe 7: PROJECT RESCUE (When Things Are On Fire)
```
ultrathink + 5 Whys + Fishbone + A3 +
Eisenhower Matrix + 4DX + Cadence of Accountability
```
→ Find root cause fast, visualize all contributors, one-page problem framing, brutal prioritization, execution discipline.

### Recipe 8: BOARD / INVESTOR PRESENTATION
```
ultrathink + Pyramid Principle + MECE + SCR + Scenario Planning +
Steel Manning + Chain of Verification
```
→ Top-down structure, clean categorization, situation-complication-resolution narrative, 3 scenarios, steel-man critiques, verify every factual claim.

### Recipe 9: 3-YEAR STRATEGY FORMULATION
```
ultrathink + Cynefin + PESTEL + Porter's Five Forces +
Three Horizons + Wardley Mapping + Scenario Planning +
Playing to Win + Hoshin Kanri + OKRs
```
→ Classify, scan, analyze industry, plan horizons, map evolution, scenario-plan, make the 5 PTW choices, cascade via Hoshin, land in annual OKRs.

### Recipe 10: POST-LAUNCH REVIEW
```
ultrathink + 5 Whys + Fishbone + A3 +
Red Team Retrospective + PDCA
```
→ Drill to root cause, enumerate contributors, one-pager, red team what we missed, close the loop with PDCA.

### Recipe 11: INNOVATION SPRINT
```
ultrathink + Design Thinking + Double Diamond + JTBD +
TRIZ + Morphological Analysis + Lateral Thinking + Kano
```
→ Empathy-driven, problem-solution double diamond, job understanding, contradiction resolution, systematic option generation, break frames, classify resulting features.

### Recipe 12: CRISIS RESPONSE (First 24 Hours)
```
ultrathink + OODA + CCIRs + RDSP + Hanlon's Razor +
RAPID + A3 + Chaos → Recovery
```
→ Observe-orient fast, define what would change the decision, rapid synchronization, assume incompetence not malice, assign decision roles clearly, one-page plan, execute.

---

# PART 15 — THE PROMPT TRIGGER QUICK-REFERENCE

**Copy-paste these into any LLM prompt. Chain multiple with `+`.**

### Deep Thinking Amplifiers
- `ultrathink` — maximum reasoning allocation
- `think step by step` — chain of thought
- `solve 5 ways then consensus` — self-consistency
- `explore 3 branches then pick winner` — tree of thoughts
- `draft, critique harshly, rewrite` — reflexion
- `answer, write 5 verification questions, revise` — chain of verification
- `step back and state the general principle first` — step-back prompting
- `devise plan, then execute` — plan-and-solve
- `simulate debate between [CFO, CTO, CMO]` — multi-agent debate

### Military / Defense Triggers
- `run MDMP on [initiative]`
- `run JOPP on [initiative]`
- `OODA loop on [situation]`
- `IPB on [market]`
- `COG analysis on us and [competitor]`
- `develop 3 COAs then wargame each`
- `PMESII-PT on [country/market]`
- `red team this plan`
- `run Army Design Methodology before MDMP`

### Intelligence Analysis Triggers
- `run ACH on [question]`
- `key assumptions check on this plan`
- `devil's advocate argument`
- `Team A / Team B analysis`
- `pre-mortem — assume failure in 12 months, why?`
- `alternative futures on 2 uncertainty axes`
- `starburst — 10 questions each of who/what/where/when/why/how`

### Strategy Triggers
- `run Cynefin classification`
- `Porter's Five Forces on [industry]`
- `Blue Ocean ERRC grid`
- `build Wardley Map`
- `Three Horizons classification`
- `Playing to Win cascade — all 5 choices`
- `VRIO on our top 5 capabilities`
- `PESTEL on [market]`
- `4 scenarios on 2 critical uncertainties`

### Problem-Solving Triggers
- `MECE these categories`
- `Minto Pyramid — answer first, 3 supports, evidence`
- `build an issue tree, 3 levels deep`
- `5 Whys on [problem]`
- `fishbone diagram — 6M categories`
- `A3 one-page write-up`
- `run DMAIC on [process]`

### Decision Triggers
- `RAPID roles — R, A, P, I, D`
- `weighted decision matrix`
- `run AHP — pairwise compare criteria`
- `Monte Carlo with 10,000 runs`
- `apply WRAP — widen, reality-test, distance, prepare wrong`

### Mental Models Triggers
- `reason from first principles`
- `apply second- and third-order thinking`
- `invert — how to guarantee failure`
- `steel-man the opposing view`
- `six thinking hats cycle`
- `apply Bayesian updating`
- `calibrated probabilities only — no "likely"`
- `apply mental models from 3+ disciplines`
- `systems thinking — stocks, flows, loops, leverage points`

### Lean / Product Triggers
- `Lean Canvas for [venture]`
- `JTBD interview structure`
- `apply Mom Test rules`
- `Kano classify features`
- `RICE scoring`
- `MoSCoW prioritization`
- `AARRR funnel map`

### Execution Triggers
- `write OKRs — ambitious Os, measurable KRs`
- `cascade via Hoshin Kanri X-matrix`
- `apply 4DX — WIGs, lead measures, scoreboard, cadence`
- `build balanced scorecard`
- `V2MOM — vision, values, methods, obstacles, measures`

### Risk / Foresight Triggers
- `run FMEA — severity × occurrence × detectability`
- `black swan framing — build antifragility not forecast`
- `horizon scan — weak signals, emerging trends, wild cards`
- `backcast from [desired future]`
- `futures wheel — 3 rings of consequences`

### Negotiation Triggers
- `define BATNA, WATNA, ZOPA`
- `principled negotiation — separate people, interests, options, criteria`
- `tactical empathy — label, mirror, calibrated questions`

---

# HOW TO USE THIS DOCUMENT (for Bhaskar specifically)

**1. For every major CEO decision, prefix your Claude prompt with a stack.**
Example instead of:
> "Should we launch HireIQ Pro Enterprise tier?"

Try:
> ```
> ultrathink + Cynefin + JTBD + COG Analysis + Playing to Win cascade + Pre-mortem + AHP
>
> Should we launch HireIQ Pro Enterprise tier? Current state: [data]. Options: [A/B/C]. Give me the full analysis end-to-end.
> ```

**2. Build a "framework stack per venture" preset.** One stack for HireIQ Pro, one for ProveIQ, one for HCI Intel. Paste at start of every planning session.

**3. Train your team (human or AI agents) to cite the framework being used.** "I'm applying Wardley Mapping + Three Horizons" is more defensible to investors than "I think."

**4. The v5.1 constitution's PRISM protocol is itself a stack.** INTENT + SCOPE + CONTEXT + GAP + PLAN + QUALITY + EXECUTE = a proprietary hybrid of MDMP mission analysis, JOPP plan development, and Design Thinking. Extend it by plugging any of these 150+ tools into the CONTEXT / PLAN / QUALITY steps.

**5. For IdeaForge specifically** (your INTERROGATE → VALIDATE → ARCHITECT → GATE pipeline), the natural stack is:

| IdeaForge Stage | Recommended Framework Stack |
|---|---|
| INTERROGATE | ultrathink + Socratic Method + 5 Whys + Starbursting + JTBD |
| VALIDATE | PESTEL + Five Forces + Mom Test + Lean Canvas + ACH |
| ARCHITECT | MDMP + Wardley Mapping + Three Horizons + Monte Carlo + RICE |
| GATE | Red Teaming + Pre-mortem + AHP + Key Assumptions Check + Weighted Scorecard |

**6. Add a `frameworks_used:` field to every major deliverable.** Board memos, strategy docs, product specs — cite the frameworks applied. This is how McKinsey and BCG charge $500K per deck — the method is the value, not just the answer.

---

# APPENDIX A — FRAMEWORK ORIGINS BY DECADE

| Decade | Key Frameworks |
|---|---|
| Pre-1900 | Occam's Razor (1320), Clausewitz Center of Gravity (1832), Bayes (1763), Socratic Method (5th BC) |
| 1920s-40s | PDCA (Shewhart), 5 Whys (Toyoda), Monte Carlo (Manhattan Project), FMEA |
| 1950s | Ansoff Matrix, Kepner-Tregoe, Delphi (RAND), TRIZ (Altshuller), RACI |
| 1960s | McKinsey 7S origin, PEST (Aguilar), Fishbone (Ishikawa), Cross-Impact Matrix, Grounded Theory |
| 1970s | OODA (Boyd), BCG Matrix, Porter's Five Forces emerging, Wardley-precursors, Ansoff Weak Signals, Futures Wheel (Glenn), AHP (Saaty), Pyramid Principle (Minto starts) |
| 1980s | Porter's Five Forces published, Value Chain, Core Competencies, Six Thinking Hats, MDMP formalized, Kano Model, Toyota A3 codified, 8D (Ford) |
| 1990s | Balanced Scorecard, Cynefin, VRIO, CIA Structured Analytic Techniques, Backcasting, MoSCoW, V2MOM (1999) |
| 2000s | Blue Ocean, Wardley Mapping starts, Lean Startup origins, Customer Development (Blank), BMC (Osterwalder), Horizon 1-2-3, AARRR (McClure), ADM (Army Design Methodology) |
| 2010s | Lean Canvas, RICE, Design Thinking codified, Playing to Win, 4DX, EOS/Traction, Scaling Up, Tactical Empathy (Voss), Antifragility, SPADE |
| 2020s | LLM reasoning amplifiers — CoT, ToT, ReAct, Reflexion, CoVe, Constitutional AI, ultrathink |

---

# APPENDIX B — WHAT TO DO NEXT

1. **Pin this doc in your Talpro brain repo.** `/context/frameworks/CEO_PLANNING_FRAMEWORKS_ARSENAL.md`.
2. **Build 3-5 preset prompt stacks** for your highest-frequency decision types (product launch, market entry, team scaling, crisis response, pricing).
3. **Add a mandatory `frameworks_applied:` field** to PRISM protocol outputs in v5.1.
4. **Create a Cowork skill** (`framework-stacker`) that routes a CEO question to the right stack automatically — you feed it "Should we launch X?" and it returns the right ultrathink+stack prompt.
5. **For the IdeaForge pipeline specifically**, embed the 4-stage stack table above as the default prompt scaffold.

---

**End of document. Version 1.0. 154 frameworks + 12 stacking recipes + 50+ prompt triggers.**

Stack early, stack often, cite the method. The best research teams in the world aren't smarter — they're more systematic.
