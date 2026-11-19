# AfriNORM

AfriNORM evaluates normative reasoning about African cultural norms and taboos with scenario-based multiple-choice questions. The current release is a Yoruba case study of 65 items, each with a correct norm, a commonsense default, and an adversarial distractor, in parallel English and Yoruba. The paper reports GPT-5 accuracy of 98.46% in English and 89.23% in Yoruba, while Llama 3.1 8B Instruct falls from 85.94% to 52.31%.

## Basic information

**Short name**：AfriNORM

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Full name**：AfriNORM: An Evaluation Benchmark for Normative Reasoning of LLMs Across African Cultures

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Version**：arXiv:2611.22580v1; Yoruba case study with 65 scenario-based multiple-choice questions

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Paper version**：arXiv:2611.22580v1 (first submitted 2026-11-17)

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Release date**：2026-11-17

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Section**：Reasoning

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Tags**：normative reasoning; cultural evaluation; African languages

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the Creative Commons Attribution 4.0 International (CC BY 4.0) license.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.22580

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Code**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Dataset**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Paper title**：AfriNORM: An Evaluation Benchmark for Normative Reasoning of LLMs Across African Cultures

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：Independent researcher Ahmad Samuel Gali; Instituto Politécnico Nacional (Tadesse Destaw Belay); University of Pretoria (Idris Abdulmumin); University of Hamburg (Seid Muhie Yimam); Bayero University Kano and Imperial College London (Shamsuddeen Hassan Muhammad)

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Authors**：Ahmad Samuel Gali, Tadesse Destaw Belay, Idris Abdulmumin, Seid Muhie Yimam, Shamsuddeen Hassan Muhammad (5 authors)

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Whether large language models can perform normative reasoning in African sociocultural settings—judging obligations, permissions, and taboos—rather than only linguistic fluency or everyday convention.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that existing African NLP benchmarks largely test linguistic skill or domain knowledge, and that cultural benchmarks such as BLEND cover social conventions (what people typically do) rather than deontic modality (norms and taboos). SocialIQA uses scenario-based QA but is English-only and lacks African cultural specificity.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

## Construction

**Question sources**：The current release is a Yoruba-culture case study. Local experts from the target culture write culturally grounded scenarios as multiple-choice questions, with parallel English and Yoruba versions. The pipeline is planned to expand to 20 other African languages. Options are built in three steps: the correct culture-specific normative answer, a commonsense default obtained by stripping cultural cues and querying a mainstream LLM, and an adversarial cultural distractor.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Quality control**：Questions are curated by local experts from each target culture. Adversarial distractors are used to reduce success by simple pattern recognition. The limitations section notes that the Yoruba set has only 65 questions, which may limit statistical power.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

## Data format

**Size**：The Yoruba case study comprises 65 questions, each a three-option scenario-based multiple-choice item (correct norm, commonsense default, cultural distractor). Appendix Table 5 lists cultural domains including respect, dietary permissions, gender permissions, kingship, life cycle and metaphysics, justice, oaths, environmental norms, greetings and social interaction, pregnancy, and death.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Question types**：Scenario-based three-option multiple-choice questions

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Modalities**：Text

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Languages**：Parallel English and Yoruba

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Public and hidden split**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

## Evaluation

**Metrics**：Accuracy (whether the correct normative option is chosen); Universal Commonsense Bias Score (UCBS), the share of commonsense-default choices; Distractor Bias Score (DBS), the share of cultural-distractor choices.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Scoring**：Zero-shot prompting with minimal cultural tuning, so as to observe natural bias. Scoring uses the model's final choice rather than log-probability comparisons.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Prompt settings**：Zero-shot prompting with the template in Figure 3; the paper says cultural tuning is kept minimal so as not to override natural bias.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Comparability note**：Results come from a 65-question Yoruba pilot and should not be generalized directly to other African languages or cultures. English and Yoruba scores should be reported separately.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-17 11:04:36 UTC. The arXiv comment lists 8 pages, 3 figures, and 5 tables.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Saturation**：English-prompt accuracy is already high, but Yoruba-prompt accuracy drops, especially for the open-weight model. The paper does not claim saturation.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Contamination and disputes**：The paper attributes the Yoruba drop mainly to cultural confusion rather than bias toward general answers: UCBS stays roughly stable across languages, while DBS for Llama 3.1 8B Instruct rises from 4.69% in English to 38.46% in Yoruba. Empirical validation is limited to Yoruba and a small item set.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Results snapshot**：All author-run, on Llama 3.1 8B Instruct, Gemini 2.0 Flash, and GPT-5. English accuracy is 85.94%, 95.38%, and 98.46%, with UCBS 9.23%, 3.08%, and 0.00%, and DBS 4.69%, 1.54%, and 1.54%. Yoruba accuracy is 52.31%, 89.23%, and 89.23%, with UCBS 9.23%, 3.08%, and 1.54%, and DBS 38.46%, 7.69%, and 9.23%. The paper describes the Llama Yoruba accuracy as barely above chance.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Coverage note**：Figures are from Table 4. The reported English accuracy of 85.94% coexists with the stated 65-question size; the paper does not separately explain whether any item was excluded. The evaluation is a case study with three models and two languages.

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

## Contact

**Public email**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.22580

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Checksum**：4a515f7371807bd0f4784120967239f1a8158c6201785dce20e846f03be3ad25

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**File size**：535219

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22580) [2](https://arxiv.org/pdf/2611.22580) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
