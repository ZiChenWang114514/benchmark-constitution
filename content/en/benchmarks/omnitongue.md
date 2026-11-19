# OmniTongue

A fine-grained visual question answering benchmark for tongue diagnosis in Traditional Chinese Medicine, with 1,351 expert-validated images and 21,616 instruction pairs across 16 clinical dimensions and 66 fine-grained labels. The paper evaluates nine open-source MLLMs and stresses the gap between accuracy and Macro-F1; for example, Qwen3-VL reaches 80.7% and 90.3% accuracy on tongue size and spots, with Macro-F1 of 38.7% and 29.0%. The authors say the code and dataset will be released later; they are not public in this version.

## Basic information

**Short name**：OmniTongue

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Full name**：OmniTongue: A Comprehensive MLLM Benchmark for Automated Tongue Diagnosis in Traditional Chinese Medicine

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Version**：arXiv:2611.22652v1; 1,351 images and 21,616 instruction pairs

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Paper version**：arXiv:2611.22652v1 (first submitted 2026-11-17)

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Release date**：2026-11-17

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Section**：Biology and medicine

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Tags**：TCM tongue diagnosis; multimodal large language models; visual question answering; fine-grained attribute recognition

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the arXiv non-exclusive distribution license. Licenses for the code and dataset will follow a later official release.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.22652

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Code**：Not disclosed

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Dataset**：Not disclosed

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Paper title**：OmniTongue: A Comprehensive MLLM Benchmark for Automated Tongue Diagnosis in Traditional Chinese Medicine

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：Northeastern University (College of Information Science and Engineering; College of Computer Science and Engineering)

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Authors**：Liuyi Xu, Yun Guo, Shusheng Li, Xuewen Zhang, Yining Qian, An-Yang Lu (6 authors; corresponding author Yining Qian)

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Whether MLLMs can perceive tongue images globally and locally, including body and coating attributes such as color, shape, teeth marks and cracks, and region-specific signs at the tip, middle and root.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that prior tongue-diagnosis datasets are limited by single dimensions, coarse labels or missing region-level annotation, which hinders evaluation of authentic multi-dimensional clinical capability.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

## Construction

**Question sources**：1,351 high-resolution tongue images were collected at three clinical sites with calibrated digital cameras under standardized lighting. Each image was annotated independently by two senior TCM physicians with more than 10 years of experience across 16 dimensions, with a third senior expert adjudicating disagreements.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Quality control**：Dual independent annotation with third-expert adjudication. The paper reports Cohen’s κ of 0.709 per dimension and 0.820 when pooled, with 88.4% raw agreement. Generated questions are paraphrased by LLMs into diverse natural-language wording while preserving medical meaning.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Decontamination**：Splits are defined at the image level so that VQA items from the same source image never cross partitions.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

## Data format

**Size**：1,351 expert-validated images; 16 clinical dimensions; 66 fine-grained labels; 21,616 vision–language instruction pairs (N×K, images times dimensions).

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Question types**：Multiple-choice visual question answering covering global tongue-body, global coating and regional coating attributes

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Modalities**：Tongue images and text questions

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Public and hidden split**：The paper states that splits are image-level and that the benchmark supports zero-shot evaluation and supervised fine-tuning, but it does not report per-split sizes. Code and data have not been released.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

## Evaluation

**Metrics**：Macro-F1 is the primary metric, with top-1 accuracy as a secondary metric and random-guess accuracy 1/|V(k)| as a baseline. The paper prioritizes Macro-F1 because accuracy rewards majority classes.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Scoring**：A unified protocol is used across all 16 dimensions. Tables report Macro-F1 / accuracy (%).

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Official scripts**：Not disclosed

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Latest data version**：Not disclosed

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; the first submission date is 2026-11-17.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Saturation**：Not saturated. Even when accuracy is high, Macro-F1 remains low on rare and regional classes; InternVL3 reaches only 29.1% Macro-F1 on tip coating thickness.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Contamination and disputes**：The paper warns that high accuracy may reflect majority-class shortcuts rather than phenotype recognition, and that a medical-specific model does not show the expected domain advantage. Age and sex metadata were not collected in this release. Code and data are not yet public.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Results snapshot**：All author-run on nine open-source MLLMs, including general-purpose models (Qwen2.5-VL-7B, LLaVA-NeXT-7B, Qwen3-VL-8B and the InternVL series), MiniCPM-V models and HuatuoGPT-Vision. On the tongue-body table, Qwen3-VL averages 35.2 Macro-F1 / 70.8% accuracy, including 38.7/80.7 on size and 29.0/90.3 on spots; its averages are 39.2/64.3 on global coating and 38.1/63.4 on regional coating. HuatuoGPT-Vision reaches only 23.7% Macro-F1 on a color dimension. No single overall score is reported.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Coverage note**：Scale and annotation protocol come from the abstract and Section 2; model scores come from Tables 1–3 and the analysis. The last table column is treated as an average after checking the headers against the prose.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

## Contact

**Public email**：Public email listed in the paper: 2210718@stu.neu.edu.cn. Yining Qian is the corresponding author; a separate email for that author is not given.

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.22652

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Checksum**：40b4f43d2bc6a2ad89e9f9335d198c2a31cc40286f0c592d30a0acde4c73a2b1

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**File size**：2693071

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22652) [2](https://arxiv.org/pdf/2611.22652) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
