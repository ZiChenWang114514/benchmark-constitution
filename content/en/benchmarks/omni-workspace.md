# Omni-Workspace

Omni-Workspace evaluates omni-modal assistants on persistent multimodal workspaces, with 380 deep-research-style tasks (211 L1, 169 L2) across four modality combinations and 10 topics, and 2,552 initial file instances. Across 18 models, the paper reports a best average score of 65.93 for Gemini 3.5 Flash, followed by 64.78 for Qwen3.7-Plus.

## Basic information

**Short name**：Omni-Workspace

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Full name**：Omni-Workspace: Benchmarking Omni-Modal AI Assistants on Multimodal Workspace Tasks

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Version**：arXiv:2611.19202v1; 380 tasks across four workspace types and two difficulty levels

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Paper version**：arXiv:2611.19202v1 (first submitted 2026-11-14)

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Release date**：2026-11-14

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Section**：Multimodal

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Tags**：omni-modal agents; multimodal workspaces; cross-file reasoning

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the arXiv non-exclusive distribution license.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.19202

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Code**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Dataset**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Paper title**：Omni-Workspace: Benchmarking Omni-Modal AI Assistants on Multimodal Workspace Tasks

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：Shanghai Jiao Tong University (Yuhao Wang, Hongcheng Liu, Yu Wang); Tongyi Lab, Alibaba Group (Yucheng Zhao, Yiran Zhong, Feida Zhu); Nanyang Technological University (Qichao Wang); University of Chinese Academy of Sciences (Ming Ma)

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Authors**：Yuhao Wang, Yucheng Zhao, Yiran Zhong, Feida Zhu, Hongcheng Liu, Qichao Wang, Ming Ma, and Yu Wang (8 authors). Corresponding authors: Yiran Zhong and Yu Wang.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Whether omni-modal agents can continually coordinate perception, reasoning, and tool use in a persistent multimodal workspace, inspect and process files, retrieve external information when needed, integrate evidence across files and modalities, and produce artifacts that satisfy explicit requirements.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that existing omni-modal benchmarks mainly test perception and understanding. Workspace-Bench evaluates workspace tasks with cross-file dependencies but offers limited coverage of audio and video. Whether agents can complete complex tasks through sustained interaction with persistent multimodal workspaces remains underexplored.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

## Construction

**Question sources**：The initial source pool comprises about 10K videos from public video platforms and FineVideo, 20K audio tracks extracted from FineVideo, and 20K images from LiveVQA and COCO 2017. Gemini 3.1 Pro writes modality-specific annotations, and a Search Agent based on Qwen3.7-Max retrieves related entities and verifiable web facts. Related files are grouped into workspaces through shared entities and semantic relations. Tasks cover 10 topics and are allocated in roughly balanced counts across four workspace types.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Quality control**：Construction includes checks for solvability and necessity, answer leakage, and evaluation correctness; failed cases are repaired or removed, followed by human review. Tasks are drafted with a GPT-5.5 task-generation agent and then checked for clarity and feasibility.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Decontamination**：The quality pipeline includes an answer-leakage check.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

## Data format

**Size**：380 deep-research-style tasks: 211 L1 and 169 L2; four workspace types, video–audio–image–text (V+A+I+T), video–audio–text (V+A+T), video–image–text (V+I+T), and audio–image–text (A+I+T), in roughly balanced counts; 10 topics. Initial workspaces contain 2,552 file instances, with 5–12 files per task and an average of 6.72. Tasks require 402 output files in total, including 49.3% Markdown and 33.8% JSON.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Question types**：Natural-language user goals paired with a multimodal workspace; the agent must deliver target files that meet format and content requirements

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Modalities**：Heterogeneous workspace files such as audio, video, images, and documents, plus optional external web retrieval

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Difficulty**：L1 (211 tasks) can be completed through direct inspection, information retrieval, and reasoning; L2 (169 tasks) requires code execution or media-processing tools to transform or analyze media first. All evaluated models score lower on L2 than on L1.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Public and hidden split**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

## Evaluation

**Metrics**：Overall score S = 0.9C + 0.1F on a 0–100 scale, averaged over tasks, where C is the content score and F is the format score. The paper also reports scores by workspace type and difficulty. Overall weights all 380 tasks equally.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Scoring**：Scoring follows the task's explicit format and content requirements. The paper compares 18 representative models and separately proposes OmniFocus, a lightweight method combining multimodal working-memory management with explicit task-state tracking. OmniFocus is a method contribution in the same paper, not a separate benchmark.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Comparability note**：Scores use S = 0.9C + 0.1F. L1 and L2, and the four workspace types, should be reported separately. OmniFocus, introduced in the same paper, is a method rather than a new benchmark.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-14 06:49:09 UTC.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Saturation**：Not saturated. The best average score among 18 models is 65.93.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Contamination and disputes**：Further analysis identifies multimodal context inflation and task-state drift as recurring challenges. The limitations note that source media must be used only where permitted by the corresponding licenses.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Results snapshot**：All author-run, 18 representative models. Gemini 3.5 Flash has the highest overall score at 65.93, followed by Qwen3.7-Plus at 64.78. Gemini 3.5 Flash reaches its highest workspace score of 68.42 on A+I+T, and scores 72.77 on L1 and 57.38 on L2; Qwen3.7-Plus scores 68.70 and 59.88 on L1 and L2 and leads on V+A+T, V+I+T, and L2. The paper states that among native omni-modal agents the strongest results concentrate in the Gemini family, while smaller open-weight models score substantially lower.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Coverage note**：Overall scores weight all 380 tasks equally. Workspace-type and difficulty breakdowns are in the text and Section 5 tables. OmniFocus is an additional method result and should not be confused with the main benchmark scores.

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

## Contact

**Public email**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.19202

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Checksum**：44b243864eccccf38eb2c660a31827954847828197a1cad8579be0938b9fb760

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**File size**：2685471

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.19202) [2](https://arxiv.org/pdf/2611.19202) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
