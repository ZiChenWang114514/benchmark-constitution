# CaseScope

A case-level pathology benchmark for multimodal LLMs: 436 teaching and 800 atlas cases, each with several H&E fields of one lesion, six tasks and 4,679 items scored by circular evaluation over ten option rotations. The paper reports the best proprietary model correct under all rotations on 61.7% of teaching cases.

## Basic information

**Short name**：CaseScope

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Full name**：CaseScope: A Multi-Field Benchmark for Case-Level Pathology Diagnosis with Multimodal LLMs

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Version**：arXiv:2611.15325v1; six tasks with 4,679 items

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Paper version**：arXiv:2611.15325v1 (first submitted 2026-11-11)

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Release date**：2026-11-11

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Section**：Biology and medicine

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Tags**：pathology; multimodal LLMs; case-level diagnosis; histology images

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**License**：The paper is posted on arXiv under the arXiv non-exclusive distribution license. The official code repository declares the MIT License.

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Paper or report**：https://arxiv.org/abs/2611.15325

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Code**：https://github.com/Wenchuan-Zhang/CaseScope

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Dataset**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Paper title**：CaseScope: A Multi-Field Benchmark for Case-Level Pathology Diagnosis with Multimodal LLMs

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

## Origin and maintenance

**Initiators**：Department of Pathology and Institute of Clinical Pathology, West China Hospital, Sichuan University

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Partners**：College of Computer Science, Sichuan University; Department of Pathology, Shengjing Hospital of China Medical University; Department of Pathology, Renmin Hospital of Wuhan University

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Authors**：Wenchuan Zhang, Chengyang Zhang, Fengling Li, Ting Yin, Chen Shu, Jie Chen, Shuwan Zhang, Xiaoyan Wu, Zhang Zhang, Yuhao Yi, Jiancheng Lv, Hong Bu (12 authors)

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

## Design goals

**Capabilities tested**：Mirrors how pathologists integrate several fields of one lesion, from low to high power, into a case-level diagnosis, separating diagnosis, triage, grading, verification of morphological findings and finding location.

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Gap in prior benchmarks**：The paper notes that pathology VQA mostly asks about single images, cross-scale benchmarks show two or three nested regions of one TCGA slide with LLM-generated questions, and general multi-image benchmarks probe generic cross-image relations rather than expert evidence integration.

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

## Construction

**Question sources**：CaseScope-Teaching comes from a residency teaching library after de-duplication (3,291 raw image files but only 2,586 distinct) and removal of non-H&E images; CaseScope-Atlas comes from 88 published atlases.

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Quality control**：Cases re-filed under several organ systems and names were merged by shared pictures, keeping cases with at least two H&E fields; entities that occur at several sites get a site-agnostic label and no site hint.

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Decontamination**：The authors searched 228,899 public pathology images for near-duplicates of every field from both sources and found none; the paper notes that whole-image search can miss crops.

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

## Data format

**Size**：CaseScope-Teaching: 436 cases, 2,448 H&E fields (median five per case), 390 entities, 18 organ systems. CaseScope-Atlas: 800 cases, 2,664 fields (median three), 453 entities without a teaching case. Six tasks with 4,679 items

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Question types**：Ten-way diagnosis, triage, grading, true or false finding statements and finding location

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Modalities**：H&E histopathology images and text

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Public and hidden split**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

## Evaluation

**Metrics**：Single-pass accuracy, circular accuracy (correct under all ten option rotations), finding-verification accuracy and image gain; case-level bootstrap intervals

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Scoring**：Circular evaluation over ten option rotations; finding-verification truth follows labels (Teaching) or captions (Atlas).

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

## Current status

**Checked on**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-11 11:04:30 UTC.

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Saturation**：Not saturated: the best open and proprietary models are correct under all ten rotations on only 17.9% and 61.7% of teaching cases.

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Contamination and disputes**：The limitations note that teaching and atlas fields were chosen to illustrate an entity and are easier than unselected slides, so the benchmark measures textbook-level diagnosis; fields come in a fixed order, so field selection is untested; only H&E and site are given. Wrong answers favour the classic look-alike.

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

## Leaderboard snapshot

**Snapshot date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Results snapshot**：Author-run, 28 open and 4 proprietary models (Claude Sonnet 5.5, Claude Haiku 5.5, GPT-5.6-sol, GPT-5.6-luna). On Teaching, single-pass ten-way accuracy reaches at most 50.6% for open and 78.3% for proprietary models. In finding verification, open models score a median 62.0% (best 81.5%, chance 50%) with a median 3.4-point image gain; proprietary models score 83.2% to 93.2% with gains of 10.2 to 19.5 points. Keeping only the highest-power field changes open-model circular accuracy by -7.1 to +2.1 points, while removing the one-line specimen site lowers it by up to 9.4.

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Coverage note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

## Contact

**Public email**：Emails listed in the paper: zhangwenchuan@stu.scu.edu.cn, yuhaoyi@scu.edu.cn (corresponding author Yuhao Yi)

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Code discussion**：Issues page of the official code repository: https://github.com/Wenchuan-Zhang/CaseScope/issues

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.15325

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Checksum**：25e241eab8f018564a5af38003091f17bc56193366468d1a67b614595794143a

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**File size**：13156148

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15325) [2](https://arxiv.org/pdf/2611.15325) [3](https://github.com/Wenchuan-Zhang/CaseScope) (accessed 2026-11-16)

## Changelog

2026-11-16: Initial filing.
