# TrialDesignBench

A benchmark for recommending statistical designs in clinical trials: 617 early-phase oncology dose-finding trials, each with an expert-validated reference design over 11 method classes, tested under five tiers of input information. The paper reports Claude Opus 5 highest at 0.955 class-wise accuracy in the richest configuration.

## Basic information

**Short name**：TrialDesignBench

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Full name**：TrialDesignBench: a benchmark for statistical design recommendation in clinical trials

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Version**：arXiv:2611.12640v1; 617 early-phase oncology dose-finding trials

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Paper version**：arXiv:2611.12640v1 (first submitted 2026-11-09)

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Release date**：2026-11-09

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Section**：Biology and medicine

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Tags**：clinical trials; statistical design; oncology; dose finding

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**License**：The paper is posted on arXiv under the arXiv non-exclusive distribution license. Data and code licenses follow the official repository.

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Paper or report**：https://arxiv.org/abs/2611.12640

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Code**：https://github.com/hanktang-research/TrialDesignBench

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Dataset**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Paper title**：TrialDesignBench: Benchmarking Language Models for Phase-I Trial Design Against Clinical Knowledge

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

## Origin and maintenance

**Initiators**：University of Pennsylvania

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Partners**：The University of Texas MD Anderson Cancer Center

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Authors**：Yihan Hank Tang, Peng Yang, Jiayi Xin, Tianqi Shang, Xuyang Chen, Ying Yuan, Yi Lian, Qi Long (8 authors)

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

## Design goals

**Capabilities tested**：Recommend a suitable statistical design method (such as BOIN, 3+3 or CRM) for early-phase oncology dose-finding trials from their clinical information, and test how information richness and expert design principles affect recommendations.

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Gap in prior benchmarks**：The paper presents it as the first benchmark for AI-assisted statistical design recommendation in clinical trials; the chosen design strongly affects assessment accuracy and the number of patients needed, and with it timelines, costs and success.

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

## Construction

**Question sources**：The sampling frame is the AACT database of about 70,810 interventional trial records (fetched 2026-05-28); three levels of trial attributes are curated per trial.

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Author background**：Reference designs were reviewed and validated by experienced trial methodologists and biostatisticians.

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Review process**：Reference designs come from formalizing the expert design process as a decision tree that reflects FDA Project Optimus guidelines; node rules, especially late-onset determination, were calibrated on expert-labelled case sets, and experts re-verified the single-agent versus combination node for every trial.

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Quality control**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

## Data format

**Size**：617 early-phase oncology dose-finding trials with reference designs over 11 design method classes

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Question types**：Design method recommendation from trial information

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Modalities**：Text

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Public and hidden split**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

## Evaluation

**Metrics**：Class-wise accuracy, class-wise balanced accuracy, macro-F1 and Cohen's kappa

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Scoring**：Model recommendations and reference designs are mapped to design method classes before comparison.

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Prompt settings**：Five input configurations (A to E) progressively add trial information and are crossed with the expert design workflow; all share a system block with a role definition and an anti-lookup instruction.

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

## Current status

**Checked on**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-09 16:15:57 UTC.

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Saturation**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Contamination and disputes**：The limitations note that many trials admit several acceptable designs while the benchmark gives one reference design, mitigated by grouping design methods into classes.

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

## Leaderboard snapshot

**Snapshot date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Results snapshot**：Author-run on five models (Claude Opus 5, GPT-5, OpenAI o3, gpt-oss-120b, Llama 4 Maverick). In configuration E, with the richest information, Claude Opus 5 has the highest class-wise accuracy at 0.955. Ablations identify two bottlenecks: recovering unrecorded latent design information from source text (+0.22 class-wise balanced accuracy when supplied) and structured decision reasoning.

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Coverage note**：The paper is a 13-page poster at the NeurIPS 2026 Workshop on World Models for High-Stakes Health (WMHS).

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

## Contact

**Public email**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Code discussion**：Issues page of the official code repository: https://github.com/hanktang-research/TrialDesignBench/issues

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.12640

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Checksum**：81fe41d62552d0ba7c3792a9d6369ebc074bd5fdd0966acf9f5f2bac0f28cf8e

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**File size**：383277

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12640) [2](https://arxiv.org/pdf/2611.12640) [3](https://github.com/hanktang-research/TrialDesignBench) (accessed 2026-11-16)

## Changelog

2026-11-16: Initial filing.
