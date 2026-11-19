# ForecastGym

ForecastGym evaluates forecasting agents by recording what four commercial web search APIs return every two days while prediction-market questions are still open, then replaying that frozen evidence offline after outcomes are known. The first release covers 150 questions, 614 evidence states, and 131k search results. In the main condition (Tavily evidence, last state), the paper reports a market Brier score of 0.176 versus 0.217 for GPT-5.6 Terra, with all tested models trailing the market.

## Basic information

**Short name**：ForecastGym

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Full name**：ForecastGym: A Live, Controlled, and Replayable Benchmark for Forecasting Agents

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Version**：arXiv:2611.23045v1; first release with 150 questions, 614 evidence states, and 131k search results

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Paper version**：arXiv:2611.23045v1 (first submitted 2026-11-17)

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Release date**：2026-11-17

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Section**：Agent

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Tags**：forecasting agents; retrieval-augmented reasoning; prediction markets

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the Creative Commons Attribution 4.0 International (CC BY 4.0) license.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.23045

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Code**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Dataset**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Paper title**：ForecastGym: A Live, Controlled, and Replayable Benchmark for Forecasting Agents

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：Carnegie Mellon University (Yicheng Tao, Yuante Li); Jilin University (Zipei Fan)

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Authors**：Yicheng Tao, Yuante Li, Zipei Fan (3 authors)

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Comparing models, memory strategies, and search sources on the same prospectively recorded evidence trajectories; whether agents can issue probability forecasts from search results available at the time and revise them as evidence updates.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that live evaluations entangle retrieval with reasoning, and that retrospective reconstruction via date filters or today's rankings can leak post-settlement information. Prior benchmarks do not jointly provide live capture, fixed evidence, multi-state replay, and source comparisons on the same trajectories.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

## Construction

**Question sources**：Binary prediction-market questions from Polymarket and Kalshi that close within 14 days. Markets priced below 10% or above 90%, or closing within 48 hours, are dropped. An LLM reviewer removes questions with vague rules or hard-to-verify outcomes, and selection balances horizon and domain across six domains.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Quality control**：An LLM reviewer removes vague or hard-to-verify questions; selection balances horizon and domain. Before scoring forecasters, the batch is used to test search-source disagreement, evidence turnover, and whether page dates bound what was knowable.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Decontamination**：Evidence is captured while questions are still open and then frozen, so it was knowable at that time by construction. The paper reports that rerunning the same queries after settlement can still yield results that all but state the outcome for up to 92% of questions, even with the tested date filters.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

## Data format

**Size**：First release: 150 questions, 614 evidence states (one per question and collection time, two to seven states per question), and 131k search results. The four APIs are Serper, Tavily, Parallel, and Exa, queried every two days.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Question types**：Probability forecasts on binary prediction-market questions; replayable comparisons of models, memory, and search sources on frozen trajectories

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Modalities**：Text search results from four commercial web search APIs, plus prediction-market question text

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Public and hidden split**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

## Evaluation

**Metrics**：Primary metric is the Brier score. The paper also reports time-averaged Brier score (TBS), last-state accuracy (share of forecasts on the correct side of 0.5, with 0.5 counted as half), and the gap to the market. Scores average states within a question first, then average over questions, with 95% bootstrap intervals from resampling questions.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Scoring**：The main condition uses Tavily evidence. Four models forecast every state and also run once closed-book. Market quotes are the platform's latest price at the same state or when collection began. GPT-6.1 Sol, released after the batch resolved, is marked and not ranked.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Prompt settings**：The paper states that all four models use the same prompt and settings given in Appendix C.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Comparability note**：URL overlap across providers is low, and source differences can exceed model differences. Post-hoc date-filtered scores are not comparable to frozen-evidence scores because leakage remains. GPT-6.1 Sol is not ranked because it was released after the batch resolved. A model is evaluated only on batches opened after its release.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-17 16:44:38 UTC.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Saturation**：Not saturated. Every tested model trails the market at the last state and over the full trajectory. Ranked last-state Brier scores range from 0.217 to 0.244, versus 0.176 for the market.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Contamination and disputes**：A central finding is that post-hoc search leaks outcomes: on 60 settled questions, filtered Exa results all but state the outcome for 92% of questions, and Gemini 3.8 Flash then scores 0.080 Brier, better than the market's 0.176 on live evidence. Tavily is the main provider. The paper treats evidence as a controlled experimental variable.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Results snapshot**：All author-run. In the main condition (Tavily, last state): GPT-5.6 Terra 0.217 Brier, 0.642 accuracy, 0.260 closed-book, +0.022 gap to the market; Claude Sonnet 5 0.244, 0.597, 0.279, +0.046; Gemini 3.8 Flash 0.218, 0.628, 0.300, +0.028; DeepSeek-V4.1-Flash 0.220, 0.660, 0.258, +0.028. The market is 0.176 and 0.719. GPT-6.1 Sol (released after resolution, not ranked) is 0.208, 0.653, 0.266, +0.018. Switching the search API moves Gemini's last-state Brier by up to 0.043, more than the 0.027 spread among the four models; Serper is significantly worse than Tavily.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Coverage note**：The main comparison in Table 4 covers four models released before the batch opened; GPT-6.1 Sol is a check only. Source comparisons are in Tables 3 and 6; memory variants are reported only for Gemini 3.8 Flash.

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

## Contact

**Public email**：Yicheng Tao: yichengtao@cmu.edu; Yuante Li: yuantel@cs.cmu.edu; Zipei Fan: fanzipei@jlu.edu.cn (as listed in the paper)

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.23045

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Checksum**：7360c32fbf8b22dc09cd920a3bedaf5c43033f811daf7362be46b5a7de99134d

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**File size**：1099624

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.23045) [2](https://arxiv.org/pdf/2611.23045) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
