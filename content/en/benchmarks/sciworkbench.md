# SciWorkBench

An agent benchmark for real experimental-science workflows in biology, chemistry, materials science and physics, with 98 tasks retained from 647 candidates (15.1%). The paper evaluates 13 model–harness agents in the Claude Code and Codex frameworks; the highest mean score is 57.38 for Codex with GPT-5.6 Sol. The authors state that the execution and evaluation code and the full benchmark data are not publicly released.

## Basic information

**Short name**：SciWorkBench

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Full name**：SciWorkBench: A Benchmark for Real Scientific Workflows

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Version**：arXiv:2611.22490v1; 98 workflow tasks

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Paper version**：arXiv:2611.22490v1 (first submitted 2026-11-17)

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Release date**：2026-11-17

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Section**：General science

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Tags**：scientific agents; experimental workflows; cross-disciplinary science; rubric grading

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the Creative Commons Attribution 4.0 International license. The full benchmark data and evaluation code are not publicly released. Availability of third-party experimental data is subject to the licenses and permissions of the original sources.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.22490

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Code**：Not disclosed

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Dataset**：Not disclosed

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Paper title**：SciWorkBench: A Benchmark for Real Scientific Workflows

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：Alibaba Group, Tsinghua University, University of Chinese Academy of Sciences, University of Alberta, and Zhejiang University

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Authors**：Yuchen Zhang, Taolin Han, Jinghang Wang, Jinxin Wang, Yun Wu, Wai Yuet Chiu, Xiaogang Li, Yuting Fu, Kewei Sun, Jiaxin Li, Qile Jin, Jiajia Li, Ruodan Chen, Qingteng Chen, Jialu Nie, Junchao Li, Yifei Zhang, Chen Zhao, Hu Wei, Lin Qu, Yanni Yin, Bing Zhao (22 authors; Yuchen Zhang, Taolin Han and Jinghang Wang are co-first authors; Yanni Yin and Bing Zhao are corresponding authors)

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Whether agents can make evidence-supported decisions in laboratory-like workflows that include hypotheses, raw experimental data, curation, preliminary and in-depth analysis, modeling or prediction, scientific conclusions and iterative revision, rather than only static question answering or single-step computation.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that prior scientific benchmarks mostly cover isolated slices such as knowledge questions, executable analyses, domain-specific tasks or predefined tool use, and do not systematically test workflow-level judgment from raw or imperfect data, uncertainty and artifacts to defensible conclusions.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

## Construction

**Question sources**：Tasks come from peer-reviewed literature or expert-contributed research scenarios in biology, chemistry, materials science and physics and their representative subfields. The construction pipeline received 647 candidates and retained 98 tasks.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Quality control**：The unified scientific analysis framework was validated by domain experts. Tasks are implemented in dockerized environments, graded with human-written rubrics and double-checked. Only 15.1% of 647 candidates entered the final benchmark.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

## Data format

**Size**：98 executable scientific-workflow tasks, selected from 647 candidates (15.1% acceptance).

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Question types**：Executable multi-stage scientific workflow tasks covering one or more stages such as hypothesis testing, data inspection, analysis, modeling and conclusion

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Modalities**：Raw or near-raw experimental data, textual instructions and agent tool use, including cross-modal evidence

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Public and hidden split**：No public full data split is released. The paper documents an example task in the appendix and states that the example is not a standalone executable benchmark release.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

## Evaluation

**Metrics**：Mean score over 98 tasks, plus domain-level scores. Scoring protocols include exact match, script-based scoring and agent judges, matched to task type.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Scoring**：Evaluated under a unified execution and rubric-based grading protocol. The paper compares exact-match, script-based and agent-judge scoring and notes that workflow tasks are better served by expert-authored rubrics.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Official scripts**：Not disclosed

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Comparability note**：Scores are joint results of a model and an agent harness and should not be read as model-only scores.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Latest data version**：Not disclosed

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; the first submission date is 2026-11-17.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Saturation**：Not saturated. Mean scores of the 13 evaluated agents range from 22.12 to 57.38.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Contamination and disputes**：The paper does not quantify training-data contamination. Failure analysis identifies three workflow-level weaknesses: difficulty translating scientific knowledge into task-specific procedures, weak cross-modal evidence integration, and limited scientific self-correction. Full code and data are not released, and third-party experimental data remain subject to original licenses.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Results snapshot**：All author-run, 13 model–harness agents under Claude Code and Codex. The highest mean score is 57.38 for Codex with GPT-5.6 Sol, followed by 57.31 for Claude Code with Opus 5 and 49.43 for Claude Code with Qwen3.8-Max; all agents range from 22.12 to 57.38. Codex with GPT-5.6 Sol scores 54.46 in biology. The paper also reports that Claude Code with Qwen3.8-Max leads in physics, and that a reported chemistry and materials science score reaches 67.59.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Coverage note**：Figures come from the abstract, introduction and experiments sections and from Figure 6 and Tables 3–4; some domain highs are given only in the prose.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

## Contact

**Public email**：Public email listed in the paper: wjh2018@mail.ustc.edu.cn

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.22490

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Checksum**：ca71751b4681d6fb64422cb90b0a2cc02ed9a954ce39baf919211dccd66bf12e

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**File size**：2026693

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

**Other documents**：Appendix D documents an example task’s instructions, input-data organization, reference-answer structure and grading rubric. The manuscript source archive includes the instruction and rubric files for that example, but not the complete data, evaluation environments, trajectories or scoring implementation.

Sources: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
