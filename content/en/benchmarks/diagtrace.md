# DiagTrace

An interactive clinical decision benchmark built from PubMed Central case reports, with 510 cases across eight specialties and 225 used in the main evaluation. Given the final diagnosis, a model must request information from a source-grounded report agent under a fixed turn budget to reconstruct the documented diagnostic trajectory. Among four evaluated models, Claude Haiku 4.5 attains event-level recall of 0.665 and pairwise order accuracy of 0.690. Data and interaction traces are released on GitHub.

## Basic information

**Short name**：DiagTrace

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Full name**：DiagTrace: An Interactive Benchmark for Clinical Decision Making

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Version**：arXiv:2611.22009v1; 510 cases, with 225 in the main evaluation

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Paper version**：arXiv:2611.22009v1 (first submitted 2026-11-16)

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Release date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Section**：Biology and medicine

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Tags**：clinical decision making; interactive information seeking; diagnostic trajectories; case reports

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the Creative Commons Attribution 4.0 International license. The official data repository’s license is recorded as Other in repository metadata; the repository files are authoritative for the exact terms.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.22009

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Code**：https://github.com/Fanncg1229/DiagTrace-code

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Dataset**：https://github.com/Fanncg1229/Diagtrace

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Paper title**：DiagTrace: An Interactive Benchmark for Clinical Decision Making

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：Weill Cornell Medicine, Cornell University, and Columbia University

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Authors**：Yufan Wang, Rui Yang, Yi Lin, Chunhua Weng, Yifan Peng (5 authors)

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Funders**：Supported in part by the US National Institutes of Health under grants R01LM014306, R01LM014573 and UG3TR005954

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Given the correct diagnosis, whether a model can actively request information over multiple turns and reconstruct a source-consistent diagnostic trajectory, rather than predicting a diagnosis from a fully observed static case.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper notes that medical question-answering and diagnostic-reasoning evaluations typically provide all patient information up front and focus on final diagnosis or dialogue quality, leaving incremental evidence acquisition under-evaluated.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

## Construction

**Question sources**：Each instance is built from a PubMed Central case report and includes an initial presentation, a source-ordered event bank, a clinical course and diagnostic references. The full set has 510 cases across eight specialties; event banks contain 11.59 source events on average.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Quality control**：Source events must be grounded in the report text, with leakage controls. Two annotators reviewed 52 unique extracted events; the paper reports agreement on 48 labels (92.3%), Cohen’s κ of 0.874 and weighted κ of 0.925. On 20 events overlapping a GPT-4.1 mini audit, judgments agreed on 18/20 and 20/20 events.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Decontamination**：Diagnosis-revealing content is marked for protected handling. Interactive experiments use separately matched and full-scale interaction episodes. Because the clinician agent is given the final diagnosis, scores measure trajectory reconstruction rather than autonomous diagnosis.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

## Data format

**Size**：510 cases across eight specialties; the main experiment evaluates four models on 225 cases. A 16-case specialty-stratified fixed-checklist evaluation is also reported. Event banks average 11.59 source events.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Question types**：Multi-turn interactive information requests and diagnostic-trajectory reconstruction under a fixed turn budget

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Modalities**：Textual clinical findings from case reports; a substantial fraction of events are linked to article figures or captions

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Languages**：English (source case reports and benchmark resources)

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Public and hidden split**：The paper does not describe a hidden test set. Public data and interaction traces are in the GitHub repository, with camera-ready artifacts under camera_ready_release/.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

## Evaluation

**Metrics**：Clinical-course alignment (including LCS recall and pairwise order accuracy), interaction quality, turn efficiency and availability, and event-level recall.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Scoring**：The model’s request trajectory is compared with a source-derived reference. The appendix provides deterministic metrics and reproduction instructions.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Official scripts**：https://github.com/Fanncg1229/DiagTrace-code

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; the first submission date is 2026-11-16. The abs page states that the paper was accepted to Findings of EACL 2027.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Saturation**：Not saturated. The four models show trade-offs in coverage, ordering and turn use. Claude Haiku 4.5 has the highest event-level recall (0.665) and pairwise order accuracy (0.690).

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Contamination and disputes**：Source order follows the published article narrative rather than an adjudicated clinical timeline, and human auditing found article-order discrepancies that may affect order-sensitive metrics. Case reports are selective summaries. Construction and auditing rely in part on LLMs and may leave residual errors. The benchmark is for research evaluation only, not clinical decision support.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Results snapshot**：All author-run on four models: GPT-4.1 mini, Claude Haiku 4.5, Gemini 2.5 Flash and Kimi K2.5. Pairwise order accuracy is 0.646, 0.690, 0.654 and 0.601, respectively. Event-level recall is highest for Claude Haiku 4.5 (0.665), then Kimi K2.5 (0.661), Gemini 2.5 Flash (0.655) and GPT-4.1 mini (0.577). The paper reports that principal metrics changed by at most 0.037 in sensitivity analyses.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Coverage note**：Scale and protocol come from the abstract and methods; main results come from Tables 3–4 and the conclusion. Two-column layout can interleave appendix numbers, so quoted figures follow explicit prose statements.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

## Contact

**Public email**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Code discussion**：Data repository issues: https://github.com/Fanncg1229/Diagtrace/issues. Code repository issues: https://github.com/Fanncg1229/DiagTrace-code/issues. Open issue counts recorded on 2026-11-19 were 0 for both.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.22009

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Checksum**：e71d71c8356a9b7b588737e74397b3f22f65f07409627b6613ed36e1bb6fe943

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**File size**：421975

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

**Other documents**：Appendix A.7 states that the camera-ready release includes canonical event banks, matched and full-scale interaction episodes, evaluation manifests and fixed-checklist artifacts.

Sources: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
