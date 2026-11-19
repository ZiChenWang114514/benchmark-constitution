# EJBench

An engineering-judgement benchmark built from a conjugate heat-transfer design campaign for battery cold plates. It asks whether a model can predict behavior at new conditions from a few stored results and decide on a design, without running simulation software. The test split has 272 tasks, of which a fixed 228 enter the official score. Among ten frontier models, GPT-6 Astra leads with a macro score of 0.710; reinforcement learning raises Qwen3.5-9B from 0.071 to 0.106. Train, validation and test splits, the evaluation harness and a leaderboard are released on Hugging Face.

## Basic information

**Short name**：EJBench

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Full name**：EJBench: an Engineering Judgement Benchmark Built from a Conjugate Heat Transfer Design Campaign

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Version**：EJBench v0.1 (Hugging Face git tag v0.1); 272 test tasks, of which 228 are scored

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Paper version**：arXiv:2611.21707v1 (first submitted 2026-11-16); dataset release tag v0.1

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Release date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Section**：Physics

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Tags**：engineering judgement; conjugate heat transfer; battery thermal management; computational fluid dynamics

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license. The Hugging Face dataset is licensed CC BY-NC 4.0.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.21707

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Code**：https://huggingface.co/datasets/GradientDynamics/EJBench

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Dataset**：https://huggingface.co/datasets/GradientDynamics/EJBench

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Homepage**：https://huggingface.co/datasets/GradientDynamics/EJBench

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Paper title**：Bookkeeping Is Not Judgement: EJBench, an Engineering Judgement Benchmark Built from a Conjugate Heat Transfer Design Campaign

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：Gradient Dynamics, London, and AESC, London

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Authors**：James Sadler, Rotimi Alabi, Kotub Uddin (3 authors; corresponding author James Sadler)

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Funders**：The dataset documentation in the paper states that EJBench was created and funded by Gradient Dynamics

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Whether a model can predict how a design behaves at new conditions from a few earlier results and decide on it, including matching unlabelled test results to operating points, choosing which stored runs to reveal before sign-off, and ranking new duties by peak cell temperature.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that many engineering benchmarks come from textbooks or exams, or test whether an agent can operate simulation or CAD software, and that runnable is not the same as correct judgement. EJBench is software-agnostic and asks what an engineer would conclude without rerunning a simulation.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

## Construction

**Question sources**：Tasks come from a conjugate heat-transfer design campaign for battery cold plates. Every answer is taken from a converged simulation that passes mass, flow-rate and energy-balance checks, not from an LLM judge. Splits are by geometry: a design and all its operating points sit in one split.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Quality control**：A run becomes an answer only if it converges and passes mass, flow-rate and energy-balance checks. Test designs were unpublished before this release. The scored-task list and its SHA-256 hash ship with the release. Official scores include a 95% percentile bootstrap interval from 1,000 resamples.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Decontamination**：Splits are by geometry, and no design or run is shared across splits. Test designs were not published before this release. Train and validation use easier training formats from the appendix, so their scores do not measure benchmark performance.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

## Data format

**Size**：EJBench v0.1: 1,281 train tasks, 133 validation tasks and 272 test tasks. The official score uses a fixed 228 of the test tasks; the other 44, all campaign tasks, are released but not scored. Train and validation will be rebuilt as more simulations finish; test is frozen for this version.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Question types**：Three task families: matching unlabelled test results to operating points, choosing which stored runs to reveal before signing off a design, and ranking new duties by peak cell temperature

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Modalities**：Text prompts, stored run and design records, and simulation outputs as tables or images; multi-step tasks can retrieve hidden runs through a tool

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Languages**：English

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Public and hidden split**：The test split is the official frozen benchmark. Train and validation are for fine-tuning and come from designs outside the evaluation splits. A score over all 272 test tasks is not the official benchmark score.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

## Evaluation

**Metrics**：Macro score on the 228 scored test tasks (macro mean over three families), with family scores and 95% bootstrap intervals. Each task scores 1 only if every part of the answer is right, otherwise 0.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Scoring**：Binary per-task scoring with part-level records for error analysis. The headline is the macro mean over the three families. The evaluation harness and leaderboard are released with the dataset.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Official scripts**：https://huggingface.co/datasets/GradientDynamics/EJBench (release includes eval/ and leaderboard/)

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Latest data version**：v0.1 (test frozen; train and validation may be rebuilt)

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; the first submission date is 2026-11-16. The dataset card uses pretty_name “EJBench v0.1 cold plate” and git tag v0.1.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Saturation**：Not saturated. Ten frontier models span 0.36 to 0.71 in macro score, with GPT-6 Astra at 0.710. The paper states that models report almost the same confidence on tasks they get wrong as on tasks they get right.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Contamination and disputes**：Train and validation will be rebuilt and must not be mixed with the frozen test split. Scoring all 272 test tasks is not the official benchmark score. The dataset uses a non-commercial license.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Official board**：https://huggingface.co/datasets/GradientDynamics/EJBench

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Results snapshot**：All author-run. Ten frontier models range from 0.36 to 0.71; GPT-6 Astra leads at 0.710 with interval [0.651, 0.773]. Open-weight Qwen3.5-9B scores 0.071, rising to 0.106 on the held-out test split after LoRA and reinforcement learning. Per-task cost is reported from about $0.007 (GPT-6 Luna) to $0.73 (GPT-6 Astra).

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Coverage note**：Split sizes come from Table 1, scoring rules from Section 3.3, and model scores from the abstract and Table 3. Full per-model rows from Table 3 are not all copied into this snapshot.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

## Contact

**Public email**：james.sadler@gradient-dynamics.com, rotimi.alabi@gradient-dynamics.com, kotub.uddin@envision-energy.com

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.21707

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Checksum**：472a39bcab2df492a3f15687282fb4c90d1ca4c5e3fb024414ce25a23f0abcbf

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**File size**：3088285

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

**Other documents**：The dataset release includes train.csv, test.csv, train_val.csv, metadata/test_freeze.json, leaderboard files and evaluation code.

Sources: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
