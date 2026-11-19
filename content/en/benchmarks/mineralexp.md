# MineralExp

A benchmark for LLM agents that design geochemical experiments in real-world mineral exploration. It is built from published ore-deposit literature and expert review, with 277 cases and 1,572 reference experimental plans organized by five mineral-system processes and 19 scientific-task categories. The paper evaluates four open-source agent harnesses, each paired with seven frontier models (28 configurations). Overall recall ranges from 70.76% to 91.56%, but the highest overall F1 is only 63.84%, for GPT-6.1 Sol with OpenCode. Code and a project page are public.

## Basic information

**Short name**：MineralExp

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Full name**：MineralExp: Benchmarking LLM Agents for Experimental Design in Real-World Mineral Exploration

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Version**：arXiv:2611.17931v1; 277 cases, 1,572 reference experimental plans and 19 task categories

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Paper version**：arXiv:2611.17931v1 (first submitted 2026-11-13)

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Release date**：2026-11-13

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Section**：Earth and astronomy

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Tags**：mineral exploration; geochemical experimental design; scientific agents; mineral systems

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the arXiv non-exclusive distribution license. No LICENSE file was found in the GitHub repository on 2026-11-19.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.17931

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Code**：https://github.com/wangbing1416/MineralExp

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Dataset**：https://github.com/wangbing1416/MineralExp

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Homepage**：https://wangbing1416.github.io/projects/mineralexp

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Paper title**：MineralExp: Benchmarking LLM Agents for Experimental Design in Real-World Mineral Exploration

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：College of Computer Science and Technology and the Key Laboratory of Symbolic Computation and Knowledge Engineering of the Ministry of Education, Jilin University; and the State Key Laboratory of Geological Processes and Mineral Resources, School of Earth Science and Resources, and Frontiers Science Center for Deep-time Digital Earth, China University of Geosciences (Beijing)

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Authors**：Bing Wang, Mingyang Wang, Yuanhang Mi, Yue Xu, Kaibo Su, Li'ang Xiao, Chunguo Wu, Changchun Li, Ximing Li, Kun-Feng Qiu, Bo Yang (11 authors; Bing Wang and Mingyang Wang are co-first authors; corresponding authors Changchun Li and Ximing Li)

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Funders**：New Generation Artificial Intelligence National Science and Technology Major Project (2026ZD0126104)

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Given a geological hypothesis and initial context, whether an agent can select relevant scientific tasks and generate concrete experimental plans before costly laboratory work, scored with multi-label classification metrics and an LLM-as-a-judge evidence-coverage metric.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that LLM agents increasingly automate downstream geoscientific data analysis, but upstream geochemical experimental design—deciding which experiments to run before laboratory work—remains unevaluated. The same hypothesis can support diverse valid protocols, and open-ended plans are hard to represent as a single reference answer.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

## Construction

**Question sources**：Cases are constructed from published ore-deposit literature and verified by domain experts. A taxonomy maps experiments onto five mineral-system processes (source, transport, deposition, modification, preservation) and 19 scientific-task categories, yielding deterministic multi-label targets while allowing methodological diversity. Construction started from 353 candidate studies and excluded 54 incomplete records.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Quality control**：Reference annotations are expert-reviewed and must be supported by the source text. The project page states that the public explorer shows references for inspection, while evaluation requests contain only the three input fields, the shared taxonomy and output instructions, not publication metadata or reference answers.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Decontamination**：Evaluation inputs omit publication metadata and reference answers. The documentation stresses that scores measure agreement with expert-reviewed reference task categories, not experimental necessity, scientific validity or budget, and that valid alternatives may be absent from a source paper.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

## Data format

**Size**：277 cases, 1,572 reference experimental plans and 19 scientific-task categories. Table 1 gives process-level positive-case counts, including 160 for source, 170 for transport and 146 for deposition; cases may span multiple processes.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Question types**：Open-ended experimental-plan generation, scored as multi-label classification over 19 task categories, plus an evidence-coverage judge

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Modalities**：Textual geological hypotheses, context and conditions from the literature; outputs are task categories and concrete experimental plans

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Languages**：The project page offers Chinese and English interfaces. The paper does not give a single-language breakdown of evaluation text; the released data are authoritative.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Public and hidden split**：Data and code are released on GitHub, and the project page provides a case explorer and a JSONL download. The paper does not describe a hidden test split.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

## Evaluation

**Metrics**：Micro-averaged precision, recall and F1, macro-F1, and exact-set or subset accuracy, plus an LLM-as-a-judge evidence-coverage metric. Every process uses all 277 rows and projects only that process’s label columns.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Scoring**：Four open-source agent harnesses are each paired with seven frontier LLMs, for 28 configurations. Official notes emphasize that predicting four of ten reference labels yields 40% recall, 100% precision and 0 exact-set accuracy, which must not be described as 40% accuracy.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Official scripts**：https://github.com/wangbing1416/MineralExp

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; the first submission date is 2026-11-13.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Saturation**：Not saturated. Overall recall ranges from 70.76% to 91.56% across 28 configurations, but the highest overall F1 is only 63.84%. Agents generally have high recall and low precision, proposing more experiments than needed to test the hypothesis.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Contamination and disputes**：Reference annotations do not establish a unique or necessary-and-sufficient experimental plan. The label distribution is long-tailed. The repository had no license file on the access date.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Results snapshot**：All author-run on four open-source harnesses and seven models. The highest overall F1 is 63.84% for GPT-6.1 Sol with OpenCode; Claude Sonnet 5.5 scores 60.42% on OpenCode. These flagship reasoning models lead F1 on all four harnesses, for example 60.73% and 60.51% on another harness. Overall recall ranges from 70.76% to 91.56%.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Coverage note**：Scale comes from the abstract and Table 1; headline scores come from the results narrative. The full 28-configuration table is not copied into this snapshot. Some process-level counts were read from a two-column table; deposition is 146, and other counts are quoted only where clearly readable.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

## Contact

**Public email**：wangbing1416@gmail.com, Huysmanwang@qq.com, miyh26@mails.jlu.edu.cn, yuexu26@mails.jlu.edu.cn, sukb26@mails.jlu.edu.cn, xiaola26@mails.jlu.edu.cn, wucg@jlu.edu.cn, changchunli93@gmail.com, liximing86@gmail.com, kunfengqiu@qq.com, ybo@jlu.edu.cn

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Code discussion**：https://github.com/wangbing1416/MineralExp/issues; repository metadata recorded 0 open issues on 2026-11-19.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.17931

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Checksum**：9a1d35e451194720dbab0eef6560858a5ba3f9a8022023723e8d64e2b26e8a9b

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**File size**：2420454

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

**Other documents**：The project page provides a case explorer, taxonomy notes, a JSONL download and an independent gpt-6.1-sol walkthrough.

Sources: [1](https://arxiv.org/abs/2611.17931) [2](https://github.com/wangbing1416/MineralExp) [3](https://wangbing1416.github.io/projects/mineralexp) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
