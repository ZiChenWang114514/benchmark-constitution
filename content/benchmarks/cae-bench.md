# CAE-Bench

评测智能体能否开发可在未见输入上复用的计算机辅助工程求解器。RC7 版本含 80 项计算任务：13 项给定方程的偏微分方程任务、43 项流体力学任务，以及 24 项改编自 CFDCodeBench、无留出工况的固定问题。论文评测 12 个模型，GPT-6.1 Sol 在中等推理设置下总分为 65.24，但在输入变化的 56 项任务上仅为 50.35；即使公开工况满分，留出工况仍可能得 0 分。代码以 Apache 2.0 许可发布。

## 基本信息

**简称**：CAE-Bench

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**全称**：CAE-Bench：面向可复用计算机辅助工程求解器开发的智能体基准

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**基准版本**：RC7；80 项计算任务

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**论文版本**：arXiv:2611.21273v1（2026-11-16首次提交）；评测使用 RC7 版本

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**发布日期**：2026-11-16

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**主板块**：物理

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**领域标签**：计算机辅助工程；偏微分方程求解器；流体力学；智能体代码生成

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**许可证**：论文在 arXiv 采用 Creative Commons Attribution 4.0 国际许可协议。官方代码仓库采用 Apache License 2.0。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**论文或技术报告**：https://arxiv.org/abs/2611.21273

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**官方代码**：https://github.com/AXeonV/CAE-Bench

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**数据地址**：https://github.com/AXeonV/CAE-Bench

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**官方主页**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**论文题名**：CAE-Bench: Benchmarking AI Agents for Reusable CAE Solver Development

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

## 发起与维护

**发起方**：南方科技大学、宁波东方理工大学、北京大学

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**协作机构**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**作者**：Zhiyu Zhou、Tianyou Liu、Xinping Yang、Yiyao Liu、Jiayi Dong、Yihan Lin、Haokai Ye、Yifan Lu、Zeyu Dong、Yansong Li、Shengqi Zhang（共11位作者；Zhiyu Zhou 与 Tianyou Liu 为共同第一作者；通讯作者为 Yansong Li）

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**当前维护方**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**资助方**：待核实。致谢感谢宁波东方理工大学高性能计算平台提供计算资源，以及南方科技大学魏张（Wei Zhang）提供 Titan 工作站。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

## 设计目标

**要测的能力**：考察智能体能否只利用少量公开工况开发可复用的计算机辅助工程求解器，并在几何、材料、初值或边界条件不同的留出工况上泛化，而不是只为固定输入写出一次性求解程序。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**现有基准的缺口**：论文认为，已有基准多评估在给定问题或给定输入上开发数值求解器或完成仿真；工业级求解器必须在开发阶段看不到的多种输入上复用。若输入在开发时已知，智能体甚至可能记住答案。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

## 构建方式

**题目来源**：RC7 含 80 项计算任务：13 项给定方程的偏微分方程任务、43 项流体力学任务，以及 24 项改编自 CFDCodeBench 的固定问题（无留出工况，单独报告）。参考结果来自解析解、已有数据集和成熟仿真软件。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**出题人背景**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**审核流程**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**质量控制**：每个工况有输入与用于计分的参考结果。公开工况在开发阶段提供输入和格式正确但数值随机的模板输出；留出工况仅用于评测。评测通过求解器入口 solve.py 进行。基础设施测试在最终报告中剔除。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**去污染**：留出工况在开发阶段不可见。公开工况的示例输出数值是随机的，只提供格式。固定问题没有留出工况，与有输入变化的任务分开报告。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

## 数据形式

**题量**：RC7：80 项计算任务，计 13 项给定方程任务、43 项流体力学任务和 24 项固定问题。有输入变化的任务为 56 项。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**题型**：智能体开发可复用求解器，并在公开与留出工况上接受评测

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**模态**：任务说明、DATA.md、CONTRACT.md、HDF5 与 Gmsh 网格、problem.json 中的物理设置，以及数值场输出

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**语言**：英语

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**难度**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**公开与隐藏划分**：公开工况用于开发与评测；留出工况只用于评测。24 项固定问题没有留出工况。数据格式与软件开发工具包用于在自有基础设施上注册任务和评测。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

## 评测方法

**指标**：先对任务内各工况得分取平均，再对任务等权平均，分数为 0 至 100。分别报告输入变化任务、给定方程任务、流体力学任务、固定问题与总分。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**评分方式**：若智能体未提交求解器则该任务得 0。许多零分来自数值未达精度要求，而非执行失败或格式错误。论文比较不同推理强度，并报告平均接口费用。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**提示设置**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**官方评测脚本**：https://github.com/AXeonV/CAE-Bench

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**可比性说明**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

## 最新情况

**核验日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**最新数据版本**：RC7

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**论文修订**：arXiv 仅有 v1，首次提交日期为 2026-11-16。正文日期行印有 2026-11-17，以 arXiv 首次提交日为发布日期。评测快照对应 RC7。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**饱和情况**：未饱和。GPT-6 Sol、GPT-6.1 Sol 与 GPT-6 Astra 在 24 项固定问题上得到满分，但在输入变化任务上的平均分分别只有 39.90、50.35 与 49.79。有的求解器在全部公开工况上满分，却在同一任务的至少一个留出工况上得 0。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**污染与争议**：论文作者写明因访问限制未能评测 Claude 系列。更高推理强度并不总带来更高分数：GPT-6 Luna 在 xhigh 时输入变化任务为 42.25，在 max 时降至 38.18，并有 17 项任务未能提交求解器。开发时若看到固定输入，存在记住答案的风险，这正是设置留出工况的原因。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**衍生基准**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

## 榜单快照

**快照日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**官方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**第三方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**结果快照**：均为论文作者自测，12 个模型、多种推理设置。表 4 中等或高推理设置下，总分最高为 GPT-6.1 Sol medium 的 65.24，随后是 GPT-6 Astra medium 的 64.85 与 Gemini 4 Argon medium 的 62.49。GPT-5.6 Sol 在给定方程任务上最高，为 87.27；GPT-6.1 Sol 在流体力学任务上最高，为 40.25。GLM-5.3-Flash high 总分最低，为 27.10。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**覆盖说明**：任务规模取自引言与第 2 节；模型分数取自表 4 及第 4.2 至 4.3 节叙述。完整复现说明在附录 B 与 C。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

## 联系方式

**公开邮箱**：通讯作者 Yansong Li：ysli@eitech.edu.cn

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**代码讨论**：https://github.com/AXeonV/CAE-Bench/issues ；2026-11-19 经仓库元数据记录的开放条目数为 6（该计数可能包含 pull request）。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**官方社交账号**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**隐私政策**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

## 原始文件

**论文PDF**：https://arxiv.org/pdf/2611.21273

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**文件校验**：f597ba3143097044093415ccd92d52fc2bcb8a2a64053752592d9bdcf4544653

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**文件大小**：402893

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**文件夹**：待核实

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

**其他文件**：仓库提供任务注册与评测用的数据格式和软件开发工具包。arXiv 摘要页标注源档约 5,060 KB，与 402,893 字节的生成 PDF 不同，后者完整且有 17 页。

来源: [1](https://arxiv.org/abs/2611.21273) [2](https://github.com/AXeonV/CAE-Bench) (访问 2026-11-19)

## 变更记录

2026-11-19：初次收录。
