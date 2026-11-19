# DataTrace

DataTrace evaluates data agents on localizing an injected root cause in a graph of database artifacts, and on whether the diagnosis is supported by inspected evidence. The released library has 83 runnable environments; the official frozen board has 64 tasks with two repeats per model. The paper reports average root-cause accuracy of 48% and a mean conditional unsupported rate of 18% across seven proprietary models; on the frozen board, gpt-5.6-sol scores 0.688 RC@1 and 0.586 grounded accuracy.

## Basic information

**Short name**：DataTrace

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Full name**：DataTrace: Benchmarking Data Agents for Evidence-Grounded Root-Cause Localization

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Version**：arXiv:2611.18926v1; released library of 83 runnable environments; frozen board of 64 tasks with two repeats per model

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Paper version**：arXiv:2611.18926v1 (first submitted 2026-11-13)

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Release date**：2026-11-13

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Section**：Agent

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Tags**：data agents; root-cause localization; evidence grounding

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the Creative Commons Attribution 4.0 International (CC BY 4.0) license.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.18926

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Code**：https://hkustdial.github.io/datatrace/

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Dataset**：https://hkustdial.github.io/datatrace/

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Homepage**：https://hkustdial.github.io/datatrace/

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Paper title**：DataTrace: Benchmarking Data Agents for Evidence-Grounded Root-Cause Localization

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：University of California, Los Angeles (Tung Sum Thomas Kwok); Hong Kong University of Science and Technology (Guangzhou) (Xiaotian Lin, Yuyu Luo)

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Authors**：Tung Sum Thomas Kwok, Xiaotian Lin, and Yuyu Luo (3 authors)

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Whether a data agent can localize an injected single root cause on a typed provenance graph of database artifacts, and whether it inspected the evidence path that connects the observed symptom to that cause, distinguishing a supported diagnosis from an unsupported correct answer.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that existing benchmarks usually grade the final query or answer and cannot tell an evidence-based diagnosis from a correct answer reached without inspecting the needed artifacts. A data pipeline can finish with a wrong result and no error, and an explicit error still does not mark the upstream object that caused it.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

## Construction

**Question sources**：The 83 data-engineering environments come from five source families—BIRD-CRITIC, Spider2, dbt repositories, mined production incidents, and synthetic scenarios—and span nine industry sectors. The generator injects one of 21 typed fault operators, mines public-repository commits whose pre-fix and post-fix states reproduce and clear a symptom, or optionally reverse-generates open-ended questions from graph walks (those lack mechanical witness paths and are excluded from the frozen leaderboard). The frozen board uses 64 of the tasks, nine operators, and 13 environments (three local DuckDB projects and ten BIRD-derived databases).

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Quality control**：Root causes and evidence paths are derived mechanically from executable task structure, without human annotation. CoSE is an optional generator-solver protocol in which an external verifier admits only reproducible, oracle-solvable faults with a non-trivial evidence path, and then checks both the submitted answer and the inspected evidence.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

## Data format

**Size**：The released library has 83 buildable, runnable environments and 21 fault operators. The official frozen board has 64 tasks with two repeats per model (128 episodes), covering nine operators and 13 environments. The project site on 2026-11-19 also states 62 distinct domains, 7 fault types, and 0 handwritten reasoning traces, which sits beside the paper's library description; the ranking scope follows the paper's frozen board.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Question types**：Evidence-grounded root-cause localization in runnable data environments; the agent must submit a root cause and leave an inspection trace

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Modalities**：Graphs of database artifacts, including schemas, data, queries, constraints, plans, tests, logs, and incidents

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Difficulty**：Tasks vary by fault mechanism, graph distance, symptom type, modality span, and decoy evidence. The paper reports that root-cause accuracy declines toward zero at five hops from the symptom.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Public and hidden split**：The paper states that code and data are available at https://hkustdial.github.io/datatrace/. The site provides a corpus manifest and a leaderboard. The frozen board is the static ranking set; the larger library of 83 environments describes coverage, not the ranking scope.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

## Evaluation

**Metrics**：The outcome metric RC@1 records whether the injected root cause is localized. Evidence metrics compare inspected nodes with the accepted path, yielding evidence recall ER, precision EP, and F1. The reasoning metric RR measures the share of gold reasoning steps that were performed and justified. Efficiency metrics include cost and step count. With grounding threshold τg=0.5, RC@1^g requires a correct answer and ER of at least 0.5; lucky guess LG is the unconditional rate of correct but insufficiently grounded answers; the conditional unsupported rate CUR is Pr[ER<τg | RC@1=1].

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Scoring**：Frozen-board comparisons use the same task assignment. The seven-model proprietary board contains 896 episodes. Training or reinforcement-learning rows use a matched held-out batch, which the paper says is not directly comparable to the frozen board.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Official scripts**：The project site and paper point to https://hkustdial.github.io/datatrace/ for code, data, scoring scripts, and environment builders. The paper also says the artifact package includes the frozen manifest, a content hash, fault generators, prompts, tool interfaces, parsers, trajectories, and scoring scripts.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Comparability note**：The ranking scope is the 64-task frozen board, not the full library of 83 environments. Later incomplete site runs (rows whose sample size is not 128) should not be mixed with Table 6. Training or reinforcement-learning results come from a held-out batch and must be reported separately.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-13 20:27:06 UTC. The arXiv comment and preprint are marked for the KDD 2027 Datasets and Benchmarks Track (KDD ’27, August 2027, San Jose).

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Saturation**：Not saturated. On the frozen board, proprietary RC@1 ranges from 0.195 to 0.688, and grounded accuracy is lower in every case.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Contamination and disputes**：The central issue is that a correct answer can still lack evidence: seven proprietary models have a mean per-model conditional unsupported rate of 18%, and the unsupported rate among correct answers lies between 0.148 and 0.231. The paper also discusses symptom-text shortcuts: all 75 unsupported correct answers on the unified board occur among 326 correct explicit-failure diagnoses, while all 105 correct silent-drift diagnoses meet the grounding threshold. Injected faults broaden mechanism coverage but do not match the natural fault distribution.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Official board**：https://hkustdial.github.io/datatrace/

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Results snapshot**：All author-run. The abstract states that seven proprietary models achieve average root-cause accuracy of 48%, with a mean per-model conditional unsupported rate of 18%. On the Table 6 frozen board (64 tasks × 2 repeats), gpt-5.6-sol scores RC@1 / RC@1^g / ER / LG / CUR / EG-Elo of 0.688 / 0.586 / 0.816 / 0.102 / 0.148 / 1588; kimi-k3 0.641 / 0.531 / 0.741 / 0.109 / 0.171 / 1532; claude-sonnet-5 0.633 / 0.523 / 0.686 / 0.109 / 0.173 / 1524; glm-5.2 0.492 / 0.398 / 0.804 / 0.094 / 0.190 / 1396; deepseek-v4-flash 0.414 / 0.344 / 0.841 / 0.070 / 0.170 / 1340; grok-4.5 0.305 / 0.234 / 0.821 / 0.070 / 0.231 / 1229; gemini-3.5-flash 0.195 / 0.164 / 0.840 / 0.031 / 0.160 / 1157. After in-loop training on a matched held-out batch, the share of grounded correct diagnoses rises from 83.7% to 94.6%, and root-cause accuracy rises from 29.2% to 36.7%.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Coverage note**：Frozen-board figures from Table 6 are the main ranking results. The project-site leaderboard on 2026-11-19 includes later runs with different sample sizes, such as kimi-k3 with only 11 episodes, and is not a substitute for Table 6. Reinforcement-learning and training rows use a separate held-out batch.

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

## Contact

**Public email**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.18926

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Checksum**：b4d9b9c7db377b4aab9e1abee3335627cde091fa2b8168b415c79bdb06807389

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**File size**：1894935

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
