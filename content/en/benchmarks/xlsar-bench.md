# XLSAR-Bench

A multimodal benchmark for complete large-scene synthetic aperture radar images, with 405 images whose average long side is 7,153 pixels, covering visual question answering, visual grounding and detailed captioning in English and Chinese. Table I reports 14,250 QA items, 3,260 grounding expressions and 405 detailed captions, all human-verified. The paper says the benchmark is open-sourced on Hugging Face, but access to that page returned 401 on 2026-11-19, so download counts could not be verified.

## Basic information

**Short name**：XLSAR-Bench

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Full name**：XLSAR-Bench: Towards Extremely Large SAR Imagery Understanding of MLLMs

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Version**：arXiv:2611.19364v1; 405 images, ten tasks, bilingual English and Chinese

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Paper version**：arXiv:2611.19364v1 (first submitted 2026-11-14); submitted to IEEE Transactions on Geoscience and Remote Sensing

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Release date**：2026-11-14

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Section**：Earth and astronomy

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Tags**：synthetic aperture radar; remote sensing; multimodal large language models; large-scene understanding

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the arXiv non-exclusive distribution license. The dataset license could not be verified because the Hugging Face page returned 401 on the access date.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.19364

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Code**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Dataset**：https://huggingface.co/datasets/Jiaqikiki/XLSAR

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Paper title**：XLSAR-Bench: Towards Extremely Large SAR Imagery Understanding of MLLMs

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：College of Electronic Science and Technology, National University of Defense Technology; Jiehua Zhang is also with the Center for Machine Vision and Signal Analysis, University of Oulu

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Authors**：La Jiang, Lingfeng Chen, Jiaqi Zhu, Fengrong Guo, Jiehua Zhang, Panhe Hu, Li Liu, Zhen Liu (8 authors; La Jiang and Lingfeng Chen contributed equally; corresponding authors Panhe Hu and Zhen Liu)

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Funders**：Fundamental and Interdisciplinary Disciplines Breakthrough Plan of the Ministry of Education of China (JYB2025XDXM110), National Natural Science Foundation of China (62401585), Science and Technology Innovation Program of Hunan Province (2024RC3120), and the Innovation Foundation for Postgraduate of National University of Defense Technology (XJJCB2026040)

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Joint evaluation of global semantic interpretation and fine-grained small-target perception on complete large-scene SAR images, covering scene interpretation, regional perception, object understanding, visual grounding, detailed description and conditional counting.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that existing SAR vision–language benchmarks mostly use small patches or target-centered samples and cannot jointly test complete-scene understanding and fine target detail, and that automatic annotation can introduce unsupported attributes or linguistic bias.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

## Construction

**Question sources**：405 images were collected from 11 SAR sources, with long sides of about 2,000 to 40,000 pixels and an average size of 7,153×7,153. Annotations start from existing spatial labels and are verified against the original images; captions are produced with a semi-automatic captioner and then carefully annotated by hand. Evaluation is bilingual in English and Chinese.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Quality control**：All evaluation samples are manually verified, and captions are revised by humans after semi-automatic generation. Table I marks the QA and grounding annotations as human-verified.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

## Data format

**Size**：405 images; 405 detailed captions with average length 402 words in English and 378 in Chinese; 3,260 grounding expressions; 14,250 QA items; ten tasks.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Question types**：Ten tasks spanning visual question answering, visual grounding (including condition-based grounding) and detailed image captioning, such as counting, land-use classification, object classification, spatial relations and regional counting

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Modalities**：Large-scene SAR images and English or Chinese text instructions

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Languages**：English and Chinese

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Public and hidden split**：The paper states that the benchmark is open-sourced on Hugging Face. Access to https://huggingface.co/datasets/Jiaqikiki/XLSAR returned 401 on 2026-11-19, so public split files could not be downloaded or verified.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

## Evaluation

**Metrics**：Per-task accuracy or captioning metrics, among others. The paper also introduces XLSAR-Baseline, a whole-image LoRA adaptation of Qwen3.5-9B on downsampled views.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Scoring**：General-purpose, remote-sensing and SAR-specific MLLMs are evaluated, with English and Chinese results. Whether official scripts ship with the repository could not be verified because the dataset page was inaccessible.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; the first submission date is 2026-11-14. The manuscript header marks a submission to IEEE Transactions on Geoscience and Remote Sensing; the DOI line is still a placeholder.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Saturation**：Not saturated. The paper emphasizes persistent difficulty in understanding large SAR scenes and perceiving small targets; it states that BLEU-4 on detailed captioning reaches at most 2.13% and 1.37%.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Contamination and disputes**：Downsampling a large image can hide small targets, while cropping can remove scene context, which is why the benchmark keeps complete large images. The dataset page was not publicly accessible on the access date, which blocks external reproduction checks.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Results snapshot**：All author-run, including general-purpose and domain models and XLSAR-Baseline. In the paper’s tables, GPT-6.1-sol is higher than the listed open-source models on several English and Chinese metrics, for example one English row of 48.19, 45.85, 47.70, 80.82, 38.26, 63.26 and the corresponding Chinese row of 47.79, 42.27, 48.07, 82.70, 39.83, 64.10; grounding and captioning metrics are much lower. Column names are not assigned in this snapshot because the table header and numerals were split across columns.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Coverage note**：Scale figures come from the abstract and Table I. Model numbers are quoted as complete rows from the experimental tables without inventing column labels.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

## Contact

**Public email**：jiangla22@nudt.edu.cn, chenlingfeng@nudt.edu.cn, zhujiaqi24@nudt.edu.cn, guofengrong21@nudt.edu.cn, hupanhe13@nudt.edu.cn, liuli_nudt@nudt.edu.cn, zhen_liu@nudt.edu.cn, zhangjiehua_nudt@163.com. Underscores in the last three addresses were restored from leftover spaces after LaTeX escaping in the PDF and remain slightly uncertain.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.19364

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Checksum**：698ae1bfbf2e8eb07b79ecc4661d6570752ed0cbca02ff091641cfd4c3252a51

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**File size**：8996590

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

**Other documents**：A footnote gives https://huggingface.co/datasets/Jiaqikiki/XLSAR. That page returned 401 on the access date, so the dataset card and license text could not be saved.

Sources: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
