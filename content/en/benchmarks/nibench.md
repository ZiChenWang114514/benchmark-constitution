# NIBench

A neuroimaging agent benchmark with 56 workflow tasks across seven tool ecosystems, skill distillation and transfer experiments, and judgment of 36 published claims from raw ADNI data. The paper reports Claude Opus 5.5 at 0.994 correctness with an analysis protocol and 0.949 without one.

## Basic information

**Short name**：NIBench

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Full name**：NIBench: benchmarking autonomous AI agents for execution, skill evolution and scientific judgment in neuroimaging

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Version**：arXiv:2611.15831v1; 56 workflow tasks and 36 scientific claims

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Paper version**：arXiv:2611.15831v1 (first submitted 2026-11-11)

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Release date**：2026-11-11

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Section**：Biology and medicine

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Tags**：neuroimaging; scientific agents; skill distillation; scientific judgment

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**License**：The paper is posted on arXiv under the arXiv non-exclusive distribution license. Data and code licenses follow the official repository.

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Paper or report**：https://arxiv.org/abs/2611.15831

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Code**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Dataset**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Paper title**：NIBench: benchmarking autonomous AI agents for execution, skill evolution and scientific judgment in neuroimaging

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

## Origin and maintenance

**Initiators**：University of Southern California (Stevens Neuroimaging and Informatics Institute at the Keck School of Medicine; Viterbi School of Engineering)

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Authors**：Lujia Zhong, Yihao Xia, Jianwei Zhang, Shuo Huang, Xinyu Nie, Mingyang Xia, Zhiwei Deng, Jiaxin Yue, Xinkai Wang, Junhan Zhao, Yonggang Shi (11 authors)

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Funders**：US National Institutes of Health; the acknowledgements list grants R01EB022744, R01AG077578, R01AG064584, S10OD032285, U19AG078109 and P30AG066530. Evaluation data come from the Alzheimer's Disease Neuroimaging Initiative (ADNI) database

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

## Design goals

**Capabilities tested**：Whether autonomous agents can execute and reconstruct neuroimaging workflows on real data and tools, distil execution experience into reusable and transferable skills, and reach evidence-supported scientific conclusions from raw cohort data.

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Gap in prior benchmarks**：The paper notes that prior work covers scientific question answering and tool-based automation but gives limited evidence on workflow reconstruction, acquisition of procedural expertise and evidence-based scientific judgment; in neuroimaging, plausible outputs can hide errors that change conclusions.

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

## Construction

**Question sources**：Workflow tasks span seven tool ecosystems covering structural, diffusion and functional MRI, PET and multimodal analyses. The judgment component uses 36 claims from three published Alzheimer's disease studies (longitudinal cognitive change, tau-deposition trajectories and disease progression), analysed from unfiltered ADNI tables.

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Quality control**：Each workflow task is evaluated with and without an analysis protocol. Inputs are checked for image and diffusion-gradient problems and for answer leakage.

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Decontamination**：Leakage controls restrict distiller inputs and reject skills containing benchmark-specific identifiers or private artifacts. The paper notes that correct answers without analysis may reflect prior knowledge or inference from claim wording, and that this control does not establish memorization.

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

## Data format

**Size**：56 workflow tasks (16 single-tool operations, 23 multistep pipelines, 5 group analyses, 12 tasks with problematic inputs such as corrupted images and zeroed diffusion-gradient vectors); 36 scientific claims

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Question types**：Multi-step interactive analysis tasks, skill distillation and transfer experiments, data-grounded claim judgment

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Modalities**：Neuroimaging data (MRI, PET), tables, text and code

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Public and hidden split**：Skill evolution distils skills from trajectories on 28 tasks and evaluates them on those tasks and on 28 held-out tasks, plus cross-model transfer.

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

## Evaluation

**Metrics**：Workflow correctness (mean task score over 56 tasks, with partial credit); change in correctness on acquisition and held-out tasks after distillation; judgments on scientific claims

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Scoring**：Scored against per-task reference standards with partial credit; all models run in a shared agent framework.

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

## Current status

**Checked on**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-11 18:44:56 UTC.

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Saturation**：Near saturation when the protocol is supplied: Claude Opus 5.5 fully solves 55 of 56 tasks. Without the protocol the gap widens and the best open-weight score is 0.658.

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Contamination and disputes**：The paper reports that agents reproduce their own numerical results yet sometimes reach conclusions inconsistent with expert answers, and access to data does not always improve judgment. Distilled skills did not uniformly beat the expert-written library.

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

## Leaderboard snapshot

**Snapshot date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Results snapshot**：All author-run, 19 models (11 closed-weight, 8 open-weight). Claude Opus 5.5 is highest in both conditions: 0.994 with the protocol and 0.949 without. With the protocol, closed-weight models range 0.935 to 0.994 and open-weight 0.497 to 0.845; without it, 0.810 to 0.949 and 0.125 to 0.658. Best open-weight scores: qwen3.5:122b-a10b (0.845, protocol given) and qwen3.5:27b (0.658, protocol withheld).

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Coverage note**：Figures come from the paper text and Figure 2; skill evolution covers five models only.

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

## Contact

**Public email**：Corresponding author Yonggang Shi: yshi@loni.usc.edu (as listed in the paper)

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.15831

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Checksum**：85cf28bdc41a7de20d76f88d52cd3b091b459c10a91f71b6bd7d9abe57b918c8

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**File size**：1424366

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15831) [2](https://arxiv.org/pdf/2611.15831) (accessed 2026-11-16)

## Changelog

2026-11-16: Initial filing.
