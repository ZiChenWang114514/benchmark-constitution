# InclusionMed

An open evaluation initiative for inclusive healthcare. The first InclusionMed Atlas keeps four public benchmarks selected from 388 candidates, plus the private InclusionMed-DxFiles, for five equally weighted benchmarks. The paper evaluates 22 models; overall InclusionMed Index scores range from 17.5 to 49.1 out of 100, with Gemini 4 Argon highest at 49.1. The official website and GitHub repository are public.

## Basic information

**Short name**：InclusionMed

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Full name**：InclusionMed: Benchmarking AI for Inclusive Healthcare

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Version**：Technical report version 0.5 / arXiv:2611.21218v1; first Atlas release with five benchmarks

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Paper version**：arXiv:2611.21218v1 (first submitted 2026-11-16); technical report version 0.5

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Release date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Section**：Biology and medicine

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Tags**：medical evaluation; inclusive healthcare; evaluation index; role-and-capability coverage

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the arXiv non-exclusive distribution license. The PDF also states “© 2026 InclusionMed. All rights reserved.” No LICENSE file was found in the GitHub repository on 2026-11-19.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.21218

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Code**：https://github.com/panuvi/inclusionmed

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Dataset**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Homepage**：https://inclusionmed.ai/

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Paper title**：InclusionMed: Benchmarking AI for Inclusive Healthcare

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：The InclusionMed collaboration. Corresponding-author addresses map to Shanghai Innovation Institute and InclusionMed. The appendix also lists partner affiliations including Fudan University, Shanghai Artificial Intelligence Laboratory, Shanghai Jiao Tong University and Ant Group.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Authors**：The InclusionMed Collaboration (corresponding authors Junjun He and Yuanfeng Ji; the appendix lists names in a project team, collaborators and an advisory committee, alphabetically by first name within each group. The project team is Guangkun Nie, Huanze Tang, Juncheng Yang, Sihan Wang, Tianbin Li, Xinyan Deng, Xinyuan Zhu, Yifan Zhou and Yuhao Shen)

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Evaluation organized by three healthcare roles (patients and the public, healthcare professionals, and healthcare administration professionals) and three AI capabilities (knowledge, reasoning and agency). The InclusionMed Index aggregates first-release results and also reports role and capability subscores and estimated inference cost.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that inclusive medical AI needs evaluation across diverse roles, tasks and care settings, but benchmark coverage remains uneven. Some candidates were excluded in this release because of score saturation or limited discrimination.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

## Construction

**Question sources**：Four public benchmarks were selected from 388 candidates through structured audits and independent reproduction: HealthBench Professional, PhysicianBench, the Health and Medicine subset of ALE-CLI v1.0, and CHI-Bench, plus the private diagnostic-reasoning benchmark InclusionMed-DxFiles. Figure 1 maps each benchmark to role–capability cells, and each of the five contributes 20% of the Index.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Quality control**：Candidates underwent structured audits, and included public benchmarks were independently reproduced. Benchmarks were excluded if at least three models scored 85 or above, or if the sample standard deviation was 4 or below. Scoring logic for the public benchmarks was taken from the original evaluation code or documentation.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

## Data format

**Size**：The first Atlas release includes five benchmarks (four public and one private). The paper evaluates 22 model releases from 11 families. CHI-Bench comprises 75 US healthcare-operations cases; ALE-CLI v1.0: Health and Medicine comprises 22 cases. InclusionMed-DxFiles is scored as the percentage of 312 responses graded perfect and is not publicly released.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Question types**：A composite evaluation whose task types follow the included benchmarks, including professional conversations, electronic-health-record workflows, command-line medical cases, healthcare-operations cases and private diagnostic reasoning

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Modalities**：Primarily text medical tasks; exact modalities follow each included benchmark

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Public and hidden split**：The four public benchmarks follow their original data and splits. InclusionMed-DxFiles is private and its items are not released.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

## Evaluation

**Metrics**：The InclusionMed Index is the equally weighted mean of the five benchmark scores on a 0–100 scale, with additional role and capability scores and tag-level task-attribute analyses. HealthBench Professional uses the length-adjusted rubric score.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Scoring**：22 model releases were run under a shared protocol, with reasoning effort xhigh for the two Qwen releases and high for the other 20. The Index averages the five benchmarks equally. Estimated costs use recorded token usage and published prices.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Official scripts**：https://github.com/panuvi/inclusionmed

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Latest data version**：Technical report version 0.5; first-release Index over five benchmarks

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; the first submission date is 2026-11-16. The technical report is labeled Version 0.5. The GitHub news entry dates the technical-report release to 2026-11-16.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Saturation**：The first-release Index is not saturated: overall scores range from 17.5 to 49.1. Some candidate benchmarks were excluded from this Index because of saturation or limited discrimination.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Contamination and disputes**：Only three of nine role–capability cells are covered in this release. The ten highest-ranked models all scored higher on patient communication than on clinical decision-making. Models with similar Index scores differed by about 24 times in estimated inference cost. The private benchmark cannot be fully reproduced externally.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Official board**：https://inclusionmed.ai/

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Results snapshot**：Author-run or independently reproduced results for 22 models. The highest overall Index is Gemini 4 Argon at 49.1, followed by Claude Opus 5.5 and Fable 5.1 (both 48.9), GPT-6 Astra at 45.1 and GPT-6.1 Sol at 44.5; the lowest overall score is 17.5. By role, Claude Opus 5.5 leads for healthcare professionals at 55.6. The paper also reports that GPT-6 Luna ranks eighth in reasoning and fourth for healthcare administration professionals. All of the top ten models scored higher on patient communication than on clinical decision-making.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Coverage note**：The Index range and leading models come from the discussion of Figure 4 and Table 2; included-benchmark sizes come from Section 3. Some role–capability cells in Table 2 are blank or unreported.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

## Contact

**Public email**：info@inclusionmed.ai; corresponding authors Junjun He (hejunjun@sii.edu.cn) and Yuanfeng Ji (yuanfengji@inclusionmed.ai)

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Code discussion**：https://github.com/panuvi/inclusionmed/issues; the repository metadata recorded 0 open issues on 2026-11-19.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.21218

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Checksum**：618d2eabaa82c40524d58e5f2b1fb2ba173358b13f5e4daa60afe33ea0f87f5d

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**File size**：847760

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

**Other documents**：The GitHub repository provides a contribution guide and Atlas, Index and cost figures. The website hosts an interactive Atlas and Index.

Sources: [1](https://arxiv.org/abs/2611.21218) [2](https://inclusionmed.ai/) [3](https://github.com/panuvi/inclusionmed) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
