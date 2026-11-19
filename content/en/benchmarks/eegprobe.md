# EEGProbe

A signal-grounded benchmark for whether general-purpose vision–language models can extract and reason from minimally processed, channel-wise EEG, with 620 questions across 13 subtasks in classification, cross-modal alignment and neurophysiological reasoning. Under a unified zero-shot protocol the paper evaluates 11 models; the strongest, GPT-5.6 Sol, reaches only 41.63% overall. A Hugging Face dataset page exists, while the paper also says evaluation resources will be made public upon publication.

## Basic information

**Short name**：EEGProbe

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Full name**：EEGProbe: Do Vision-Language Models Really Understand EEG? A Benchmark for Signal-Grounded EEG Signals Evaluation

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Version**：arXiv:2611.20779v1; 620 questions and 13 subtasks

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Paper version**：arXiv:2611.20779v1 (first submitted 2026-11-16)

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Release date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Section**：Biology and medicine

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Tags**：electroencephalography; vision–language models; neurophysiological reasoning; cross-modal alignment

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the arXiv non-exclusive distribution license. The Hugging Face dataset card had not finalized a dataset license as of 2026-11-19.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.20779

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Code**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Dataset**：https://huggingface.co/datasets/2122ZHU/EEGProbe

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Paper title**：EEGProbe: Do Vision-Language Models Really Understand EEG? A Benchmark for Signal-Grounded EEG Signals Evaluation

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：Kyushu University (Graduate School of Information Science and Electrical Engineering; Faculty of Arts and Science) and the Department of Civil Engineering, Sichuan University of Science and Engineering

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Authors**：Haozhe Zhu, Dan Yuan, Chenghao Gu, Feike Xu, Yue Wen, Shin'ichi Konomi (6 authors; Haozhe Zhu and Dan Yuan are co-first authors; corresponding authors are Yue Wen and Shin'ichi Konomi)

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Funders**：JSPS KAKENHI grants JP23H03507 and JP23K02469, and JST SPRING grant JPMJSP2136

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Whether general-purpose vision–language models can extract information and reason from minimally processed, channel-wise EEG without task-specific feature engineering or EEG-specific adaptation, across classification, cross-modal alignment and neurophysiological reasoning.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper notes that most EEG systems are designed for a single task and that it remains unclear whether VLM capabilities extend to electrophysiological signals. EEGProbe emphasizes preserved temporal structure and limited benchmark-induced processing to reduce shortcut answers.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

## Construction

**Question sources**：620 EEG-centered questions in 13 subtasks and three capability categories: EEG signal classification, EEG cross-modal alignment and EEG neurophysiological reasoning. Items undergo signal-necessity testing and expert verification.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Quality control**：Temporal structure is preserved where possible and benchmark-induced processing is minimized. Signal-necessity testing is followed by expert review. Open-ended items are scored with a rubric against expert reference answers.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

## Data format

**Size**：620 questions, 13 subtasks and three capability categories.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Question types**：Closed- and open-ended EEG-grounded questions covering classification, alignment and reasoning

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Modalities**：Channel-wise EEG signals (as visual or time-series inputs) and text questions

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Languages**：English (the dataset card is tagged language:en)

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Public and hidden split**：The paper uses a unified zero-shot protocol. A Hugging Face dataset page is public, but on 2026-11-19 the dataset API listed only README.md and.gitattributes, so it is unverified whether the full evaluation files have been uploaded. The paper’s data-availability statement says resources will be made public upon publication.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

## Evaluation

**Metrics**：Overall score under the unified protocol, plus subtask or category scores. Open-ended items use component rubric scores.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Scoring**：Eleven open- and closed-source VLMs are evaluated zero-shot under a shared protocol. Open-ended answers are judged with a rubric against expert references.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Latest data version**：Hugging Face dataset 2122ZHU/EEGProbe; the API recorded lastModified 2026-10-07. The file list observed on the access date is incomplete.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; the first submission date is 2026-11-16.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Saturation**：Not saturated. The strongest model, GPT-5.6 Sol, reaches only 41.63% overall, and the paper highlights cross-modal alignment as a major bottleneck, including near-chance behavior.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Contamination and disputes**：This benchmark is distinct from the existing eeg-bench resource. The paper reports weak use of fine-grained EEG evidence and neurophysiological interpretation. Inference-time neurophysiological guidance can change predictions, but that does not establish reliable EEG understanding. The dataset license is not finalized on the card.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Results snapshot**：All author-run on 11 representative open- and closed-source VLMs. The strongest model, GPT-5.6 Sol, scores 41.63% overall. Cross-modal EEG alignment is described as a major bottleneck. The paper also analyzes how temporal, spectral, spatial and physiological structure relates to successes and failures.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Coverage note**：Scale and the headline score come from the abstract and conclusion; subtask names come from the methods overview. Full per-subtask tables are not copied into this snapshot.

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

## Contact

**Public email**：zhu.haozhe.305@s.kyushu-u.ac.jp, yuan.dan.718@s.kyushu-u.ac.jp, gu.chenghao.564@s.kyushu-u.ac.jp, xu.feike.383@s.kyushu-u.ac.jp, wenyue@suse.edu.cn, konomi.shinichi.848@m.kyushu-u.ac.jp

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.20779

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Checksum**：9b0ea029bbd995f9e49004fa6467272d478be969e137fbfaccd047581491a814

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**File size**：8275861

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
