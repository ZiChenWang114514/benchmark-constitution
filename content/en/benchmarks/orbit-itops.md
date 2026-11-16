# ORBIT

An IT-operations reasoning benchmark of 3,178 evidence-grounded multiple-choice, open-ended and troubleshooting items drawn from monitoring documentation, runbooks and Stack Overflow and reviewed by three ITOps-experienced authors. The paper reports five models doing well on multiple choice but much worse on open-ended and troubleshooting items, with rankings shifting by format.

## Basic information

**Short name**：ORBIT

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Full name**：Orbit: An Evidence-Grounded Benchmark for Evaluating LLMs on IT Operations Reasoning

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Version**：arXiv:2611.15718v1; 3,178 items generated, 3,019 evaluated

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Paper version**：arXiv:2611.15718v1 (first submitted 2026-11-11)

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Release date**：2026-11-11

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Section**：Reasoning

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Tags**：IT operations; root-cause analysis; evidence traceability; LLM judges

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**License**：The paper is posted on arXiv under CC BY-NC-ND 4.0. Data and code licenses follow the official repository.

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Paper or report**：https://arxiv.org/abs/2611.15718

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Code**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Dataset**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Paper title**：Orbit: An Evidence-Grounded Benchmark for Evaluating LLMs on IT Operations Reasoning

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

## Origin and maintenance

**Initiators**：Indian Institute of Information Technology Dharwad

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Partners**：IBM Software (India), National University of Singapore, Indian Association for the Cultivation of Science

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Authors**：Sathwik Narkedimilli, Rakshit Verma, Rahul Soni, Ankit Kushwaha, Balaji Ganesan, Kaustabha Ray, Sunil Saumya, Pratibha Moogi (8 authors)

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

## Design goals

**Capabilities tested**：Whether LLMs can link deployment history, scaling rules, metrics and documentation into one causal chain for fault diagnosis and multi-hop reasoning in IT operations, rather than recall a single fact.

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Gap in prior benchmarks**：The paper notes that assistants built into observability platforms use private models and data and cannot be compared, and that a single accuracy number hides which abilities are missing; it contrasts prior ITOps benchmarks on operational grounding, multi-entity reasoning, evidence traceability and reasoning annotations.

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

## Construction

**Question sources**：Sources include APM documentation for Instana, Dynatrace and Datadog, cloud and infrastructure docs, operational wikis and runbooks (including an internal repository) and forums such as Stack Overflow. Of 2,803 items with a recorded source, 2,005 cite the internal repository and 798 cite public pages (794 Stack Overflow threads and 4 Wikipedia pages).

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Author background**：Three authors with software engineering and ITOps experience reviewed every candidate.

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Review process**：A four-stage human-in-the-loop pipeline: assemble a knowledge base, generate evidence-grounded items, label difficulty, reasoning type and cohort, then expert validation and revision; reviewers judged correctness, reasoning, operational validity and answer-evidence fit, with majority vote for disputes and expert adjudication for hard cases.

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Quality control**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

## Data format

**Size**：3,178 items generated, 2,803 (88.2%) with at least one recorded source; 3,019 evaluated closed-book

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Question types**：Multiple-choice, open-ended and troubleshooting items

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Modalities**：Text

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Public and hidden split**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

## Evaluation

**Metrics**：Accuracy by item type; open-ended and troubleshooting items use an independent judge, with corrected significance tests, effect sizes and the smallest detectable model difference

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Scoring**：One independent LLM judge; the paper shows self-judging inflates acceptance.

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

## Current status

**Checked on**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-11 16:57:27 UTC.

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Saturation**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Contamination and disputes**：The paper reports that an options-only run without the question scores 30.9% with Llama 3.3 70B and 32.7% with Mistral Medium (chance 25%); self-judging moved Llama 3.3 70B from second to last on open-ended items and accepted up to 75% of answers to defective items; some kept items have not yet been re-reviewed by experts; internal documentation contains infrastructure identifiers and personal data and is cited by path and pinned commit, not released.

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

## Leaderboard snapshot

**Snapshot date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Results snapshot**：Author-run on five models, closed-book. Under the independent judge, all five answer most multiple-choice items correctly, between a third and just over half of open-ended items, and a minority of troubleshooting items; rankings change with the item format.

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Coverage note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

## Contact

**Public email**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.15718

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Checksum**：39dc73d6a6a187cd43b46dd8bb427740ebb85dfdd62f9be392ac6d8b5a1174dc

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**File size**：3199756

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

**Other documents**：The paper states a release of questions, reference answers, reasoning traces and source references, with code under MIT and data under CC BY-SA 4.0; the release location is unverified.

Sources: [1](https://arxiv.org/abs/2611.15718) [2](https://arxiv.org/pdf/2611.15718) (accessed 2026-11-16)

## Changelog

2026-11-16: Initial filing.
