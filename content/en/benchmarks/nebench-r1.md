# NEBench R1

A reasoning benchmark of 7,546 unique multiple-choice questions extracted from US Nuclear Regulatory Commission reactor operator licensing examinations covering 18 facilities, classified by the NRC Knowledge and Abilities catalogs and paired with official explanations for reasoning evaluation. Six models score between 34.0% and 73.9% overall accuracy, with Claude Opus 5.5 highest at 73.9%. The paper does not provide a public URL for a compiled dataset or evaluation code.

## Basic information

**Short name**：NEBench R1

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Full name**：NEBench R1: a Reasoning Benchmark for Evaluating Nuclear Domain Competence in Large Language Models

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Version**：NEBench R1; 7,546 unique multiple-choice questions

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Paper version**：arXiv:2611.21682v1 (first submitted 2026-11-15)

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Release date**：2026-11-15

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Section**：Physics

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Tags**：nuclear engineering; reactor operations; reasoning quality; licensing examinations

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International license. A license for a compiled benchmark release is not stated in the paper.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.21682

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Code**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Dataset**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Paper title**：NEBench R1: a Reasoning Benchmark for Evaluating Nuclear Domain Competence in Large Language Models

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：Department of Computer Science and Department of Civil and Environmental Engineering, University of Idaho; Department of Material Science, Oregon State University; and the Department of Nuclear Engineering and Industrial Management, Idaho Falls (the paper does not name a university on that affiliation line)

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Authors**：Liyan Wang, Longze Li, Mohamed Hassan, Isshu Lee, Dajie Sun, Ruimin Feng, Aleksandar Vakanski (7 authors; corresponding author Liyan Wang)

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Both final-answer accuracy on nuclear-engineering multiple-choice questions and the quality of the reasoning behind correct answers, including problem comprehension, factual and procedural accuracy, and distractor analysis.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that existing nuclear-domain benchmarks have limited coverage or focus on answer accuracy without systematically evaluating reasoning quality, whereas nuclear applications require accurate technical reasoning across coupled disciplines such as nuclear physics, reactor theory, thermodynamics and instrumentation and control.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

## Construction

**Question sources**：Questions were extracted from US NRC reactor operator licensing examinations covering 18 nuclear facilities. Qwen3.6-35B-A3B was used to extract structured fields from examination PDFs, and deduplication produced 7,546 unique questions. Of these, 3,893 (51.6%) are Knowledge, 2,898 (38.4%) Ability and 755 (10.0%) Other. Each item has an official explanation.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Quality control**：Items are classified with the NRC Knowledge and Abilities catalogs, and K/A codes are retained. Deduplication was applied because questions can be repeated or slightly modified across exam cycles. Reasoning quality is scored with a multidimensional rubric by an LLM judge on correctly answered items; the paper reports an inter-rater check of that automated scoring.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Decontamination**：The limitations section notes that NRC licensing examination materials are publicly available, and that contamination in pretraining corpora cannot be quantified without access to training data.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

## Data format

**Size**：7,546 unique four-choice questions from licensing examinations at 18 nuclear facilities.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Question types**：Four-choice multiple-choice questions, with rubric scoring of reasoning quality on correct answers

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Modalities**：Text questions, answer choices and official explanations

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Languages**：English

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Public and hidden split**：Models are evaluated on the full set or on subsets, but the paper does not describe a public/hidden split or release split files. Some reasoning comparisons use a random 1,000-question subset.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

## Evaluation

**Metrics**：Overall and category accuracy, plus multidimensional rubric scores (1–5) on correctly answered items. Table 2 also reports the number of questions actually scored per model, which is not always 7,546 because of failed items.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Scoring**：A standardized prompt asks models to answer in the form “Answer: X.” Qwen3.8-27B and Gemma 4.1 were run locally on four Quadro RTX 8000 GPUs at temperature 0.3 and a 256-token output limit. Other models were accessed through APIs. Correct answers were then judged by GPT-5.6-Terra with the rubric.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; the first submission date is 2026-11-15. The PDF was generated with Microsoft Word.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Saturation**：Not saturated. Overall accuracy ranges from 34.0% to 73.9% in three tiers: about 34% for Llama 3.3 70B and Qwen3.8-27B, 41.3% for Gemma 4.1 and 44.9% for Nemotron-Ultra-550B, then 68.4% for Grok 4.6 and 73.9% for Claude Opus 5.5.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Contamination and disputes**：Source materials are public and contamination cannot be quantified. Automated rubric scoring with GPT-5.6-Terra may introduce bias, and the rubric is applied only to correct answers. Longer reasoning traces were associated with lower accuracy in both frontier reasoning models; for Grok 4.6, accuracy fell from 90.3% below 500 reasoning tokens to 39.0% above 20,000 tokens. Nemotron-Ultra-550B showed a pronounced answer-position bias; the other five models did not.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Results snapshot**：All author-run on six models. Table 2 overall accuracy: Llama 3.3 70B 34.0% (7,540 items), Qwen3.8-27B 34.5% (7,357), Gemma 4.1 41.3% (7,517), Nemotron-Ultra-550B 44.9% (7,314), Grok 4.6 68.4% (7,530) and Claude Opus 5.5 73.9% (7,544). On rubric scores for correct answers, problem comprehension and clarity are higher than factual and procedural accuracy and distractor analysis.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Coverage note**：Item counts and accuracies come from the abstract and Table 2; rubric means come from Table 3 and the analysis. Other Table 2 columns besides overall accuracy are not fully copied into this snapshot.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

## Contact

**Public email**：Corresponding author Liyan Wang: iwang@uidaho.edu

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.21682

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Checksum**：12b015c74dfc3847cd5dda0c38dec3dc71af98aff591e6e5456cbff51c9957c4

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**File size**：558012

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

**Other documents**：Source examinations are publicly available NRC licensing materials, but the paper does not provide a download URL for the compiled benchmark.

Sources: [1](https://arxiv.org/abs/2611.21682) [2](https://arxiv.org/pdf/2611.21682) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
