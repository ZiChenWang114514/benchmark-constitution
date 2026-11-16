# SlackBench

A collaborative-project agent benchmark of 140 tasks built on simulated research project histories run through Slack, covering cross-source search, abstention, summarization and circumstance inference. The paper reports Antigravity with Gemini 4 Argon best of 33 combinations at 80.25%, with most below 66%.

## Basic information

**Short name**：SlackBench

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Full name**：SlackBench: Benchmarking Agents on Collaborative Projects Grounded in Real Code Repositories

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Version**：arXiv:2611.05512v1; 140 tasks

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Paper version**：arXiv:2611.05512v1 (first submitted 2026-11-03)

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Release date**：2026-11-03

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Section**：Agent

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Tags**：collaborative agents; agentic search; abstention and hallucination; long-dialogue understanding

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**License**：The paper is posted on arXiv under CC BY 4.0. The Hugging Face dataset declares Apache 2.0.

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Paper or report**：https://arxiv.org/abs/2611.05512

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Code**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Dataset**：https://huggingface.co/datasets/HuanzhiMao/SlackBench

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Paper title**：SlackBench: Benchmarking Agents on Collaborative Projects Grounded in Real Code Repositories

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

## Origin and maintenance

**Initiators**：UC Berkeley Sky Computing Lab

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Partners**：University of Chicago, Bespoke Labs

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Authors**：Mingxuan Li, Huanzhi Mao, Ruitao Zheng, Jarod Stanbury James, Yunze Li, Natanya Anderson, Joseph E. Gonzalez, Alex Dimakis (8 authors)

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Funders**：The acknowledgements state partial support from NSF IFML and Bespoke Labs

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

## Design goals

**Capabilities tested**：Whether agents acting as digital coworkers can search, verify and infer across project state scattered over Slack channels, online documents, commits, source files and experiment outputs, and abstain when a question is unanswerable or has a false premise.

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Gap in prior benchmarks**：The paper notes that real project state is spread across platforms and evolves over time while existing benchmarks mostly use single sources; the authors rebuild research project histories through privacy-preserving human-in-the-loop simulation instead of releasing private organizational chats.

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

## Construction

**Question sources**：Humans and coding agents such as Cursor and Claude Code carry out, and in some cases complete, research projects using Slack as the main channel, producing multi-party dialogues tied to code, documents, experiment results and decisions, grounded in artifacts such as GitHub repositories.

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Quality control**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

## Data format

**Size**：140 tasks

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Question types**：Heterogeneous-source agentic search, abstention on unanswerable or false-premise questions, goal-directed summarization, circumstance inference from long multi-party dialogues

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Modalities**：Text and code repositories

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Public and hidden split**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

## Evaluation

**Metrics**：Per-category accuracy and overall average accuracy

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Scoring**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

## Current status

**Checked on**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-03 19:10:50 UTC.

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Saturation**：Not saturated: the best systems reach about 80% overall and most agents score below 66%.

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Contamination and disputes**：The limitations note that only frontier-lab models and harnesses were run and prompting strategies were not varied. Recurring failures include insufficient global verification, missed false premises and holding on to incorrect proxies.

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

## Leaderboard snapshot

**Snapshot date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Results snapshot**：Author-run across 33 frontier model and harness combinations. Antigravity with Gemini 4 Argon has the best overall average accuracy at 80.25%, followed by Muse Code with Muse Wonder, Claude Code with Fable 5.1, Claude Code with Opus 5.5 and Claude Code with Muse Wonder.

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Coverage note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

## Contact

**Public email**：Correspondence: huanzhimao@berkeley.edu (as listed in the paper)

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.05512

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Checksum**：fa569c3312cf8f6a905d83c666cdb2f12e69cfbc40cc217d4537ee4001bea1c0

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**File size**：48483550

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.05512) [2](https://arxiv.org/pdf/2611.05512) [3](https://huggingface.co/datasets/HuanzhiMao/SlackBench) (accessed 2026-11-16)

## Changelog

2026-11-16: Initial filing.
