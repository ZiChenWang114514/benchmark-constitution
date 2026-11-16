# AnalogLayoutWorld

An agentic analog layout benchmark of 40 expert-reviewed SKY130 fixed-netlist tasks in an open-source EDA environment, graded independently on design rules, layout-versus-schematic, post-layout simulation and engineering quality. The paper reports the team's internal Novara system first and GPT-6 Astra second.

## Basic information

**Short name**：AnalogLayoutWorld

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Full name**：AnalogLayoutWorld: An Open Benchmark for Agentic Analog Layout Design

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Version**：arXiv:2611.16991v1; 40 tasks

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Paper version**：arXiv:2611.16991v1 (first submitted 2026-11-12)

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Release date**：2026-11-12

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Section**：Agent

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Tags**：integrated circuit design; analog layout; electronic design automation; coding agents

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**License**：The paper is posted on arXiv under the arXiv non-exclusive distribution license. Data and code licenses follow the official repository.

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Paper or report**：https://arxiv.org/abs/2611.16991

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Code**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Dataset**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Paper title**：AnalogLayoutWorld: An Open Benchmark for Agentic Analog Layout Design

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

## Origin and maintenance

**Initiators**：Nova-Silicon Team (the paper is credited to the team)

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Authors**：NovaSilicon Team (1 authors)

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

## Design goals

**Capabilities tested**：Whether coding agents can turn fixed transistor-level netlists into device placements and interconnects and refine them with verification feedback, completing analog layout design end to end.

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Gap in prior benchmarks**：The paper notes that agent benchmarks in IC design mostly target digital design, from functionally verified RTL generation to workload-to-GDS flows, while analog layout needs domain knowledge, geometric reasoning and iterative verification and lacked an open end-to-end evaluation.

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

## Construction

**Question sources**：Circuits come from Analog Design Bench Team (2026) and Leibl et al.; each task combines a fixed SKY130 transistor-level netlist with electrical specifications and an executable validation procedure.

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Author background**：Analog circuit experts contributed to task selection and to task design and review.

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Quality control**：All circuits pass pre-layout simulation, giving a verified electrical baseline for layout generation.

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

## Data format

**Size**：40 expert-reviewed fixed-netlist layout tasks

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Question types**：Multi-step interactive layout in an open-source EDA environment

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Modalities**：Netlists, layout files, code and tool output

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Public and hidden split**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

## Evaluation

**Metrics**：Design rule checking, layout-versus-schematic checking, parasitic extraction and post-layout simulation, plus geometric and engineering-quality measurements, combined into a per-task score; the mean total over 40 tasks is reported

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Scoring**：Graded independently with metrics co-designed with engineers; agents freely choose design and verification workflows with their harnesses' native tools, and the environment offers no benchmark-specific tools or custom interfaces.

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

## Current status

**Checked on**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-12 15:56:13 UTC.

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Saturation**：Not saturated; the paper notes that under fixed budgets, gains depend on reasoning efficiency and on turning environment feedback into verified improvements.

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Contamination and disputes**：The top score comes from Novara, an unreleased agent system developed internally by the authors' team, so it is not a like-for-like comparison with public models.

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

## Leaderboard snapshot

**Snapshot date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Results snapshot**：Author-run. The team's internal agent system Novara has the highest aggregate score (0.8154), followed by GPT-6 Astra (0.7483). GPT-6 Astra leads on design rule checking and all-case post-layout simulation, while Novara leads on layout-versus-schematic and credited engineering quality.

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Coverage note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

## Contact

**Public email**：Contact email listed in the paper: xinxingyuan-sh@nova-silicon.com

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.16991

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Checksum**：7e8824d78e6f7c5257c00ffe5769d8a82d28184618fd0fb63401f361796c3b3e

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**File size**：8496840

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (accessed 2026-11-16)

## Changelog

2026-11-16: Initial filing.
