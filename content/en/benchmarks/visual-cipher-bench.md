# Visual Cipher Bench

A long-horizon visual reasoning benchmark for agents: 40 original image puzzles whose rules and clues live only in the images, 60 minutes each, graded by exact match. The paper reports GPT-6 Astra (max) as the best of 29 configurations at only 26.7%, with five of eight models below 1%.

## Basic information

**Short name**：Visual Cipher Bench

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Full name**：Visual Cipher Bench: Benchmarking LLM Agents on Long-Horizon Visual Reasoning

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Version**：arXiv:2611.16861v1; 40 original puzzles, 67 images

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Paper version**：arXiv:2611.16861v1 (first submitted 2026-11-12)

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Release date**：2026-11-12

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Section**：Multimodal

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Tags**：visual reasoning; long-horizon reasoning; agents; puzzles

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**License**：The paper is posted on arXiv under the arXiv non-exclusive distribution license. Data and code licenses follow the official repository.

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Paper or report**：https://arxiv.org/abs/2611.16861

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Code**：Official code repository linked from the project homepage: https://github.com/Einsia/Visual-Cipher-Bench

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Dataset**：The tasks and images are published in the official code repository: https://github.com/Einsia/Visual-Cipher-Bench (the README states that the benchmark contains 40 original visual puzzles and 67 images, under tasks/)

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Homepage**：https://lab.einsia.ai/visual-cipher-bench

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Paper title**：Visual Cipher Bench: Benchmarking LLM Agents on Long-Horizon Visual Reasoning

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

## Origin and maintenance

**Initiators**：Navers Lab, Einsia.AI and Tsinghua University

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Authors**：Deyao Hong, Jiayi Jiang, Yuchun Chen, Yixuan Shi, Wenyi Li, Zheng Jiang, Chengxing Xie, Mingyu Su, Qingle Liu, Mingju Gao, Yizhe Chi, Youjie Zheng, Calvin Xiao, Kaisen Yang, Huan-ang Gao (15 authors)

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

## Design goals

**Capabilities tested**：Whether agents can cycle between visual inspection and hypothesis testing over long horizons: propose rules, check them against global visual constraints and decode the answer from static images.

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Gap in prior benchmarks**：The paper notes that language-model agents show long-horizon reasoning on coding and terminal benchmarks such as SWE-Bench Pro and Terminal-Bench, but whether this carries over to visual reasoning is unclear; without external verification an agent may stop after a locally valid step or commit early to a flawed rule.

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

## Construction

**Question sources**：All puzzles are original; every rule and clue is embedded only in static images, with no intermediate feedback during solving.

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Review process**：Human experts reviewed every puzzle to confirm a sound solution path, sufficient visual evidence and a unique answer; hidden walkthroughs and reference solvers ensure solvability and enable process auditing.

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Quality control**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

## Data format

**Size**：40 puzzles (67 images) in four categories of 10: spatial manipulation and simulation, logical constraints and planning, rule induction, and knowledge-based decoding

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Question types**：One to three puzzle images per task with a single final answer

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Modalities**：Images and text, with tools for image processing in an offline coding sandbox

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Public and hidden split**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

## Evaluation

**Metrics**：Mean accuracy: each model and reasoning-effort configuration runs three times on all 40 tasks, averaged over 120 attempts

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Scoring**：Strict exact match on the final answer; 60 minutes per puzzle.

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

## Current status

**Checked on**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-12 14:33:46 UTC.

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Saturation**：Far from saturated: the strongest configuration reaches only 26.7%, and five of eight models score below 1% at their best.

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Contamination and disputes**：The paper reports that on a ten-task subset spanning all four categories, a single non-spoiler mechanism hint lifts accuracy from 7.8% to 55.6% and cuts timeouts from 51 to 18.

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

## Leaderboard snapshot

**Snapshot date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Results snapshot**：Author-run across eight models and 29 reasoning-effort configurations (Claude Opus 5.5, Claude Sonnet 5.5, GPT-6.1 Sol, GPT-6 Astra, GPT-6 Luna, DeepSeek V4.1 Flash, Qwen 3.8 Max, Kimi K3.1 Pro). GPT-6 Astra (max) is highest at 26.7%. Pooled by category, spatial manipulation and simulation reaches 22.8% and rule induction only 0.6%.

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Coverage note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

## Contact

**Public email**：Contact email listed in the paper: nana@einsia.ai

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.16861

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Checksum**：ab27d860e82b2ab8f09f242bda065862962210160b89237f25d400640ae21e19

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**File size**：1554439

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (accessed 2026-11-16)

## Changelog

2026-11-16: Initial filing.

2026-11-19: Added official code repository URL; Added official location of the task and image data.
