# CAE-Bench

A benchmark for whether AI agents can develop reusable computer-aided engineering solvers that generalize to unseen inputs. The RC7 release has 80 computational tasks: 13 prescribed-PDE tasks, 43 fluid-mechanics tasks, and 24 fixed-problem tasks adapted from CFDCodeBench without held-out cases. Among 12 models, GPT-6.1 Sol scores 65.24 overall at medium effort, but only 50.35 on the 56 tasks with varying physical inputs; a solver can score full marks on public cases and 0 on held-out cases. Code is released under Apache 2.0.

## Basic information

**Short name**：CAE-Bench

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Full name**：CAE-Bench: Benchmarking AI Agents for Reusable CAE Solver Development

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Version**：RC7; 80 computational tasks

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Paper version**：arXiv:2611.21273v1 (first submitted 2026-11-16); results use the RC7 release

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Release date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Section**：Physics

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Tags**：computer-aided engineering; PDE solvers; fluid mechanics; agent code generation

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the Creative Commons Attribution 4.0 International license. The official code repository uses Apache License 2.0.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.21273

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Code**：https://github.com/AXeonV/CAE-Bench

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Dataset**：https://github.com/AXeonV/CAE-Bench

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Paper title**：CAE-Bench: Benchmarking AI Agents for Reusable CAE Solver Development

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：Southern University of Science and Technology; Eastern Institute of Technology, Ningbo; and Peking University

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Authors**：Zhiyu Zhou, Tianyou Liu, Xinping Yang, Yiyao Liu, Jiayi Dong, Yihan Lin, Haokai Ye, Yifan Lu, Zeyu Dong, Yansong Li, Shengqi Zhang (11 authors; Zhiyu Zhou and Tianyou Liu contributed equally; corresponding author Yansong Li)

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Funders**：Unverified. The acknowledgements thank the EIT High Performance Computing Platform for compute and Wei Zhang of Southern University of Science and Technology for access to a Titan workstation.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Whether an agent can develop a reusable CAE solver from a few public cases and generalize to held-out cases whose geometry, materials, initial states or boundary conditions were not seen during development, rather than writing a one-off solver for fixed inputs.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that prior benchmarks mostly test solver development or simulation on a given problem or given inputs, whereas an industrial CAE solver must generalize to inputs withheld during development. If those inputs are visible, an agent could even store the answer.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

## Construction

**Question sources**：RC7 contains 80 computational tasks: 13 prescribed-PDE tasks, 43 fluid-mechanics tasks, and 24 fixed-problem tasks adapted from CFDCodeBench, which have no held-out cases and are reported separately. References come from analytical solutions, existing datasets and established simulation software.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Quality control**：Each case has inputs and a scoring reference. Public cases provide inputs and format-correct template outputs with random values during development; held-out cases are used only for evaluation. Evaluation calls the solver entry point solve.py. Infrastructure tests are excluded from the final report.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Decontamination**：Held-out cases are inaccessible during development. Public example outputs are randomized and supply format only. Fixed-problem tasks have no held-out cases and are reported separately from tasks with varying inputs.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

## Data format

**Size**：RC7: 80 computational tasks, comprising 13 prescribed-PDE tasks, 43 fluid-mechanics tasks and 24 fixed-problem tasks. Tasks with varying physical inputs number 56.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Question types**：Agent development of a reusable solver, evaluated on public and held-out cases

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Modalities**：Task instructions, DATA.md, CONTRACT.md, HDF5 and Gmsh mesh files, physical setup in problem.json, and numerical field outputs

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Languages**：English

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Public and hidden split**：Public cases are used in development and evaluation; held-out cases are used only for evaluation. The 24 fixed-problem tasks have no held-out cases. A data format and SDK support task registration and evaluation on a researcher’s own infrastructure.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

## Evaluation

**Metrics**：The score of each task is the mean of its case scores; the headline is the equal-weight mean of task scores on a 0–100 scale. Results are reported for varying-input, prescribed-PDE, fluid-mechanics, fixed-problem and overall columns.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Scoring**：An agent that fails to submit a solver scores 0. Many zero scores come from failing accuracy checks after a successful, correctly formatted run. The paper also compares reasoning-effort settings and reports mean API cost per task.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Official scripts**：https://github.com/AXeonV/CAE-Bench

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Latest data version**：RC7

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; the first submission date is 2026-11-16. A date line in the PDF reads 17 November 2026; the official first-public date is the arXiv submission date. The evaluation snapshot corresponds to RC7.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Saturation**：Not saturated. GPT-6 Sol, GPT-6.1 Sol and GPT-6 Astra score full marks on all 24 fixed-problem tasks, but only 39.90, 50.35 and 49.79 on tasks with varying physical inputs. A solver may score full marks on all public cases of a task and 0 on at least one held-out case.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Contamination and disputes**：The authors state that they could not evaluate Claude models because of access restrictions. Higher reasoning effort is not always better: GPT-6 Luna scores 42.25 on varying-input tasks at xhigh and 38.18 at max, failing to submit a solver on 17 tasks. Seeing fixed inputs during development would allow answer memorization, which is why held-out cases exist.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Results snapshot**：All author-run on 12 models across reasoning settings. In Table 4, at medium or high effort, the highest overall score is 65.24 for GPT-6.1 Sol medium, then 64.85 for GPT-6 Astra medium and 62.49 for Gemini 4 Argon medium. GPT-5.6 Sol leads prescribed-PDE tasks at 87.27, and GPT-6.1 Sol leads fluid-mechanics tasks at 40.25. The lowest overall score is 27.10 for GLM-5.3-Flash high.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Coverage note**：Task counts come from the introduction and Section 2; model scores come from Table 4 and Sections 4.2–4.3. Full reproduction notes are in Appendices B and C.

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

## Contact

**Public email**：Corresponding author Yansong Li: ysli@eitech.edu.cn

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Code discussion**：https://github.com/AXeonV/CAE-Bench/issues; repository metadata recorded 6 open items on 2026-11-19 (this count may include pull requests).

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.21273

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Checksum**：f597ba3143097044093415ccd92d52fc2bcb8a2a64053752592d9bdcf4544653

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**File size**：402893

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

**Other documents**：The repository provides a data format and SDK for task registration and evaluation. The arXiv abs page lists a source size of about 5,060 KB, which differs from the 402,893-byte generated PDF; the downloaded PDF is complete (17 pages, valid EOF).

Sources: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
