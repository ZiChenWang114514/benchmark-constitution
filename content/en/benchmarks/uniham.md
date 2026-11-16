# UniHam

A materials Hamiltonian-learning benchmark of 103,121 crystals over 72 elements, all with complex Hamiltonians under full spin-orbit coupling, with reconstruction, size and composition OOD, and downstream property tasks. The paper reports fine-tuned HamGNN at a 0.622 eV band-gap MAE, the best in its table.

## Basic information

**Short name**：UniHam

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Full name**：UniHam: A Large-Scale SOC-Complete Dataset and Benchmark for Hamiltonian Learning in Materials

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Version**：arXiv:2611.12509v1; 103,121 crystal structures

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Paper version**：arXiv:2611.12509v1 (first submitted 2026-11-09)

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Release date**：2026-11-09

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Section**：Materials

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Tags**：electronic Hamiltonians; spin-orbit coupling; equivariant graph networks; out-of-distribution generalization

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**License**：The paper is posted on arXiv under CC BY 4.0. The official code repository declares the MIT License.

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Paper or report**：https://arxiv.org/abs/2611.12509

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Code**：https://github.com/WendyYW/UniHam

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Dataset**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Paper title**：UniHam: A Large-Scale SOC-Complete Dataset and Benchmark for Hamiltonian Learning in Materials

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

## Origin and maintenance

**Initiators**：Sun Yat-sen University

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Partners**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Authors**：Yuewen Huang, Pin Chen, Yutong Lu (3 authors)

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

## Design goals

**Capabilities tested**：Predict complex-valued Hermitian electronic Hamiltonians with full spin-orbit coupling from crystal structures, and test whether the predicted Hamiltonians support downstream band structures, band gaps and densities of states.

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Gap in prior benchmarks**：The paper notes that existing Hamiltonian datasets rarely include spin-orbit coupling systematically, and the roughly 44k-structure HamGNN data are not public. UniHam is 6 times larger than the next public SOC dataset, the only one covering lanthanide 4f elements, and the only benchmark with systematic OOD evaluation and gauge-corrected multi-level metrics.

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

## Construction

**Question sources**：Labels are computed with the relativistic DFT code OpenMX under non-collinear spin and full spin-orbit coupling, with DFT+U corrections.

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Quality control**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

## Data format

**Size**：103,121 structures over 72 elements and 225 of 230 space groups

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Question types**：Structure-to-Hamiltonian regression and property prediction by diagonalizing predicted Hamiltonians

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Modalities**：Crystal structures and complex Hermitian matrices

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Public and hidden split**：The training pool keeps structures with at most 60 atoms (about 90,000), stratified by rarest element into about 86,000 training, 2,000 validation and 2,000 test structures (seed 42). Tasks: Recon-ID (8:1:1 random split), OOD-Size (larger structures), OOD-Comp (retrain with given elements removed) and Prop-ID (property prediction).

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

## Evaluation

**Metrics**：Hamiltonian mean absolute error (real and imaginary parts, meV); MAE and Pearson r for band gap, band structure and density of states

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Scoring**：Errors on fixed splits; property-level metrics diagonalize predicted Hamiltonians before comparison.

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

## Current status

**Checked on**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-09 14:49:03 UTC.

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Saturation**：Reconstruction error is already low: both equivariant models stay below 3 meV total MAE and 83.4% of samples are well predicted by both; property-level and compositional OOD settings still show clear gaps.

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Contamination and disputes**：The paper reports that hard cases concentrate in strong-SOC, small-cell, high-symmetry phases, and stresses that Hamiltonian accuracy alone does not show whether downstream properties are reliable.

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

## Leaderboard snapshot

**Snapshot date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Results snapshot**：Author-run. On property prediction, fine-tuned HamGNN reaches a band-gap MAE of 0.622 eV (Pearson r 0.988), band-structure MAE of 0.360 eV and DOS MAE of 4.73 st/eV, ahead of base HamGNN (1.697 eV) and DeepH-pack (1.925 eV).

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Coverage note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

## Contact

**Public email**：Emails listed in the paper: huangyw66@mail2.sysu.edu.cn, chenp85@mail.sysu.edu.cn (corresponding author Pin Chen), luyutong@mail.sysu.edu.cn

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Code discussion**：Issues page of the official code repository: https://github.com/WendyYW/UniHam/issues

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.12509

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Checksum**：bd053b3cb8ec9d08ed5064f8bf4bcae554fc9a5e3fe8db9f965262e172bd1b0a

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**File size**：17788071

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (accessed 2026-11-16)

## Changelog

2026-11-16: Initial filing.
