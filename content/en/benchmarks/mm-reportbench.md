# MM-ReportBench

MM-ReportBench evaluates multimodal business report generation from structured tables, with 386 tasks, 185 real tables, and 2,992 reference keypoints across six domains, scored by a dual-judge protocol. Across 20 models, the paper reports a best overall score of 68.9 for DeepSeek-R1, still below the human baseline of 92.3, and numerical hallucination in 38.5% of reports.

## Basic information

**Short name**：MM-ReportBench

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Full name**：MM-ReportBench: A Comprehensive Benchmark for Multimodal Report Generation from Tables

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Version**：arXiv:2611.22514v1; 386 tasks, 185 tables, and 2,992 reference keypoints

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Paper version**：arXiv:2611.22514v1 (first submitted 2026-11-17)

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Release date**：2026-11-17

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Section**：Multimodal

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Tags**：table-to-report generation; multimodal generation; business analytics

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**License**：The paper is posted on arXiv under the arXiv non-exclusive distribution license.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Paper or report**：https://arxiv.org/abs/2611.22514

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Code**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Dataset**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Paper title**：MM-ReportBench: A Comprehensive Benchmark for Multimodal Report Generation from Tables

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

## Origin and maintenance

**Initiators**：Hong Kong University of Science and Technology (Guangzhou) (Teng Lin, Nan Tang)

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Authors**：Teng Lin and Nan Tang (2 authors)

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

## Design goals

**Capabilities tested**：Whether a model can generate a multimodal report that combines fluent narrative with faithful visualizations from one or more structured tables and a natural-language analytical instruction, including structured chapters and charts embedded in the text and supported by table evidence.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Gap in prior benchmarks**：The paper argues that prior table-understanding benchmarks focus on narrower tasks such as question answering, and that table-to-report work often scores text and visuals separately or ignores visual output. LLM-as-a-judge methods scale, but a single judge can be deceived by cross-modal compensation and can inflate overall scores.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

## Construction

**Question sources**：The 185 real-world business tables come from municipal open data, industry association reports, corporate annual disclosures, and open tabular datasets, following the protocol of T2R-Bench, and span finance, manufacturing, healthcare, education, retail, and IT operations. The set includes 38 extremely large tables with over 50,000 cells (20.5%) and complex header structures (32.4%). Queries are generated with a template-based self-instruct method covering scenarios such as trend analysis, comparison, ranking, anomaly detection, composition, correlation, forecasting, segmentation, year-over-year change, and cross-dimensional analysis, then selected by humans.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Review process**：Tables were manually reviewed; reference reports were curated and verified by human experts after Monte Carlo tree search generated candidates.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Quality control**：All tables undergo manual review to remove personally identifiable information and to verify sufficient quantitative depth. Reference reports are first generated as candidates by Monte Carlo tree search with a multi-dimensional reward, then curated and refined by human experts. Each task has a human-authored reference specifying expected chapter structure and verifiable key insight points.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

## Data format

**Size**：185 tables, 6 domains, and 386 tasks; 2.09 tasks per table on average; 4.2 tables per multi-table task; 285 rows and 21,200 cells per table on average; 7.75 reference keypoints per task and 2,992 keypoints in total.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Question types**：Table-to-multimodal report generation: an analytical report with structured chapters and charts embedded in the text

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Modalities**：Structured tables, text instructions, generated text reports, and charts

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Languages**：The final collection contains bilingual tables in Chinese and English

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Public and hidden split**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

## Evaluation

**Metrics**：A dual-judge suite: T-Judge scores text (including numerical accuracy and information coverage, averaged into a text score), V-Judge scores visuals (including data fidelity, expression, and aesthetics, averaged as VisScore), and the overall score is reported on a 0–100 scale. Each report is evaluated three times and the average is reported.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Scoring**：Reports are graded against a human-authored reference chapter structure and key insight points. Factual checks use the source tables rather than external retrieval. The paper also compares a single judge with the dual-judge design.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Comparability note**：Overall scores use the dual-judge protocol; the paper shows that a single judge inflates scores by 8–12 points, so single-judge numbers should not be mixed with them. The human baseline of 92.3 should be reported alongside model scores.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

## Current status

**Checked on**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-17 10:06:56 UTC.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Saturation**：Not saturated. The best overall score among 20 models is 68.9, versus a human baseline of 92.3. Insight novelty and visualization quality are described as the main bottlenecks.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Contamination and disputes**：The paper reports that a single judge consistently inflates overall scores by 8–12 points, whereas the dual-judge design reduces cross-modality compensation and aligns better with human expert judgment. Error analysis includes numerical hallucination in 38.5% of reports, trivial insights in 31%, chart-data mismatch in 22%, multi-table confusion in 14%, and truncation in 12.5% of reports on extremely large tables.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

## Leaderboard snapshot

**Snapshot date**：2026-11-19

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Results snapshot**：All author-run, 20 models. DeepSeek-R1 has the highest overall score at 68.9, ahead of the strongest vision-language model Gemini-2.5-Pro at 66.8, but still below the human baseline of 92.3. An ablation that removes visualizations drops the overall score from 66.8 to 38.2. The paper also reports that the aesthetics dimension reaches a maximum of 76.0.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Coverage note**：Overall and main component scores are in Table 2; the human baseline of 92.3 is stated in the text. Full component scores for all 20 models follow Table 2. Construction used generative AI to help produce queries and reference-report candidates, as disclosed in the AI use statement.

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

## Contact

**Public email**：Teng Lin: tlin280@connect.hkust-gz.edu.cn; Nan Tang: nantang@hkust-gz.edu.cn (as listed in the paper)

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.22514

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Checksum**：7470ef8e3a0ef7f77dc756d13e38454e740680b0a3f4e35fe9a69481a28095d0

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**File size**：2567197

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.22514) [2](https://arxiv.org/pdf/2611.22514) (accessed 2026-11-19)

## Changelog

2026-11-19: Initial filing.
