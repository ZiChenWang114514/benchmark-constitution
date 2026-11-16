# GeoSim

A geodynamics surrogate benchmark of 237 high-resolution 2D I2VIS mantle-plume trajectories with six coupled fields (density, pressure, temperature, viscosity and two velocity components), split by trajectory. The paper finds a clear scalar-velocity gap and that short-window accuracy does not guarantee stable rollout.

## Basic information

**Short name**：GeoSim

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Full name**：GeoSim: Benchmarking Multi-Field Neural Operators for Geodynamics

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Version**：arXiv:2611.04517v1; 237 mantle-plume trajectories

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Paper version**：arXiv:2611.04517v1 (first submitted 2026-11-03)

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Release date**：2026-11-03

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Section**：Earth and astronomy

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Tags**：geodynamics; mantle plumes; neural operators; surrogate models

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**License**：The paper is posted on arXiv under CC BY-NC-ND 4.0. The Hugging Face dataset declares CC BY 4.0.

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Paper or report**：https://arxiv.org/abs/2611.04517

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Code**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Dataset**：https://huggingface.co/datasets/irenier/GeoSim

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Homepage**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Paper title**：GeoSim: Benchmarking Multi-Field Neural Operators for Geodynamics

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

## Origin and maintenance

**Initiators**：Department of Mathematical Sciences, Tsinghua University

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Partners**：State Key Laboratory of Earthquake Dynamics, Institute of Geology, China Earthquake Administration; School of Resources and Environment, University of Electronic Science and Technology of China

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Authors**：Hailong Liu, Dinghui Yang, Mengxue Liu, Rui Qi, Meng Zhao, Yihang Tang, Jin Wen, Zhilong Fang (8 authors)

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Maintainer**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Funders**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

## Design goals

**Capabilities tested**：Tests whether surrogates predict all coupled physical fields, especially velocity, with comparable fidelity, and whether short-window accuracy persists under autonomous long-horizon rollout.

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Gap in prior benchmarks**：The paper notes that a surrogate can reproduce slowly varying scalar fields while missing the system's motion, and short-horizon accuracy may not survive autonomous rollout; WeatherBench and ClimSim serve weather and climate, but multi-field operator learning in geodynamics lacked a counterpart.

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

## Construction

**Question sources**：High-resolution 2D mantle-plume simulations generated with I2VIS on a 1150 x 660 km domain with a 401 x 309 nonuniform Eulerian grid, with controlled parameter variation and physical timestamps.

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Author background**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Review process**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Quality control**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Decontamination**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

## Data format

**Size**：237 trajectories in two parameter regimes (GeoSim-Plume1 with 109, GeoSim-Plume2 with 128), each with six fields: density, pressure, temperature, log viscosity and horizontal and vertical velocity

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Question types**：Short-window multi-field prediction (10 input states to the next 10) and autonomous long-horizon rollout

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Modalities**：2D multi-field gridded data

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Languages**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Difficulty**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Public and hidden split**：Splits are at the trajectory level, so frames from one simulation never cross training and evaluation; splits are fixed.

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

## Evaluation

**Metrics**：Field-wise trajectory-averaged relative L2 error; autonomous rollout stability

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Scoring**：All models use the same trajectory splits, the same 128 x 128 representation and the same 10-to-10 prediction task.

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Prompt settings**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Official scripts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Comparability note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

## Current status

**Checked on**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Latest data version**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Paper revisions**：Only arXiv v1 is available; it was submitted at 2026-11-03 08:43:06 UTC.

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Saturation**：Not saturated; the paper finds a substantial scalar-velocity prediction gap, and strong short-window accuracy does not imply stable rollout.

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Contamination and disputes**：The limitations note that the data cover only 2D mantle-plume dynamics over a finite range of plume temperatures and lithospheric thicknesses, with trajectories that are expensive but modest in scale.

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Related benchmarks**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

## Leaderboard snapshot

**Snapshot date**：2026-11-16

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Official board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Third-party board**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Results snapshot**：Author-run. Under a fixed per-field objective, the authors' MFGNO cuts horizontal and vertical velocity errors by 58.4% and 38.5% relative to an independent-field graph model, which remains better on several scalar fields.

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Coverage note**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

## Contact

**Public email**：Emails listed in the paper: ydh@mail.tsinghua.edu.cn (corresponding author Dinghui Yang), liuhl23@mails.tsinghua.edu.cn

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Code discussion**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Official social accounts**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Privacy policy**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

## Original files

**Paper PDF**：https://arxiv.org/pdf/2611.04517

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Checksum**：43991fc306b7233478e3d3a9621b6d2ce9d0d74d6ab550d168beaf45bd461fe1

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**File size**：1202564

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Folder**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

**Other documents**：Unverified

Sources: [1](https://arxiv.org/abs/2611.04517) [2](https://arxiv.org/pdf/2611.04517) [3](https://huggingface.co/datasets/irenier/GeoSim) (accessed 2026-11-16)

## Changelog

2026-11-16: Initial filing.
