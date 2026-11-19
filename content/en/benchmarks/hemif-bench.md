# HEmIF-Bench

A benchmark of downstream utility for hematoxylin-and-eosin to multiplex-immunofluorescence generators, beyond pixel-level stain fidelity. It evaluates five frozen generators on five tasks across eight public datasets, against the pure-H&E foundation model UNI2. Foundation-backed MIPHEI-ViT leads among the generators, for example at 0.807 macro-AUROC in single-cell classification, but neither encoder features nor generated outputs consistently surpass UNI2 at 0.816. The paper does not provide an official code or evaluation-package URL.

## Basic information

**Short name**：HEmIF-Bench

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Full name**：HEmIF-Bench: Benchmarking H&E-to-mIF Models Beyond Virtual-Stain Fidelity

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Version**：arXiv:2611.19905v1; five generators, five tasks and eight public datasets

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Paper version**：arXiv:2611.19905v1 (first submitted 2026-11-15)

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Release date**：2026-11-15

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Section**：Biology and medicine

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Tags**：computational pathology; virtual staining; multiplex immunofluorescence; downstream utility

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the arXiv non-exclusive distribution license. A license for evaluation code or a packaged release is not stated in the paper.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.19905

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Code**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Dataset**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Paper title**：HEmIF-Bench: Benchmarking H&E-to-mIF Models Beyond Virtual-Stain Fidelity

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：Department of Physics and Division of Life Science, The Hong Kong University of Science and Technology

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Authors**：Fuxian Zhao, Hyokeun Park (2 authors)

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Funders**：Research Grants Council of Hong Kong grants 16103224, 16103625, 16102322, 16100926 and N_HKUST648/24 to Hyokeun Park

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Whether internal encoder features and generated outputs of H&E-to-mIF generators provide downstream utility at molecular, cellular, tissue and patient scales—including external CD3 recovery, single-cell classification, dense nuclear segmentation, TLS/GC segmentation and patient survival—relative to frozen UNI2.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that virtual-staining studies mainly report pixel-level correlation with measured protein signals, and that recent benchmarks cover only selected downstream uses. Evaluating generated outputs alone does not test whether translation yields stronger internal features than a pure-H&E foundation model, or whether outputs preserve that predictive signal.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

## Construction

**Question sources**：Five tasks on eight public datasets: external CD3 recovery on Cell-niches, single-cell classification on Immunocto and NuCLS, dense nuclear segmentation on PathoCell and Lizard, TLS/GC segmentation on HookNet-TLS, and survival prediction on TCGA-COAD and TCGA-LUAD. Five publicly released generators are evaluated frozen.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Quality control**：Internal encoder features are taken from the deepest pre-decoder bottleneck or final backbone tokens and are scored separately from generated outputs. External CD3 recovery is reported separately to distinguish pixel-level correlation from downstream utility. The authors declare no competing interests.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

## Data format

**Size**：Five frozen H&E-to-mIF generators, five downstream tasks and eight public datasets.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Question types**：Downstream probing tasks including correlation or recovery, single-cell classification, segmentation and survival prediction, comparing an internal-feature route with a generated-output route

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Modalities**：H&E histology images, generated mIF outputs, and cell, tissue and patient labels from the source datasets

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Public and hidden split**：Evaluation is built on eight existing public datasets. The paper does not describe a new hidden split or provide a URL for a unified evaluation package.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

## Evaluation

**Metrics**：Task-specific metrics include Spearman correlation, macro-AUROC, macro-F1 and C-index, plus mean gaps between encoder features and generated outputs and comparisons with UNI2.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Scoring**：The five generators are frozen. Task-specific heads probe either internal features or generated outputs, and both are compared with frozen UNI2. No official evaluation-script URL is provided.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; the first submission date is 2026-11-15.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Saturation**：At current paired-translation data scales, generators have not consistently surpassed a large-scale pure-H&E foundation model. UNI2 scores 0.816 macro-AUROC, 0.517 and 0.876 macro-F1, and 0.664 C-index on the corresponding tasks.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Contamination and disputes**：Larger output marker panels do not guarantee stronger downstream utility: 16-marker MIPHEI-ViT is stronger overall than 50-marker ROSIE and 23-marker GigaTIME. Internal features generally beat generated outputs, but not on every task. No official code release was found.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Results snapshot**：All author-run. Among generators, foundation-backed MIPHEI-ViT leads on internal features for single-cell classification (0.807 macro-AUROC), dense nuclear segmentation (0.527 macro-F1), TLS/GC segmentation (0.884 macro-F1) and patient survival (0.655 C-index), and reaches Spearman ρ 0.265 on external CD3 recovery from generated outputs. Generated outputs trail internal features by 0.093 mean macro-AUROC in single-cell classification (0.721 vs 0.627) and 0.084 mean macro-F1 in dense nuclear segmentation (0.363 vs 0.279). No generator consistently outperforms frozen UNI2.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Coverage note**：Protocol and headline numbers come from the abstract, introduction and the overview in Section 2 and the results. Detailed dataset splits and implementation notes are not fully copied into this snapshot.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

## Contact

**Public email**：fzhaoai@connect.ust.hk, hkpark@ust.hk

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.19905

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Checksum**：ce10cd3f2ba95025bde9991296216490871535cdbfa644a9a18ca6733c1ef1d6

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**File size**：2599443

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

**Other documents**：The eight downstream datasets are existing public resources; their locations follow the original releases.

Sources: [1](https://arxiv.org/abs/2611.19905) [2](https://arxiv.org/pdf/2611.19905) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
