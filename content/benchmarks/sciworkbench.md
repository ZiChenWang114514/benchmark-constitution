# SciWorkBench

面向真实实验科学工作流的智能体基准，覆盖生物学、化学、材料科学与物理学，最终收录 98 项任务（647 项候选中的 15.1%）。论文在 Claude Code 与 Codex 框架下评测 13 个模型–框架组合，最高均分为 Codex 搭配 GPT-5.6 Sol 的 57.38。论文写明执行与评测代码及完整数据未公开发布。

## 基本信息

**简称**：SciWorkBench

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**全称**：SciWorkBench：面向真实科学工作流的基准

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**基准版本**：arXiv:2611.22490v1；98 项工作流任务

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**论文版本**：arXiv:2611.22490v1（2026-11-17首次提交）

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**发布日期**：2026-11-17

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**主板块**：综合科学

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**领域标签**：科学智能体；实验工作流；跨学科科学；评分细则评测

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**许可证**：论文在 arXiv 采用 Creative Commons Attribution 4.0 国际许可协议。完整基准数据与评测代码未公开，第三方实验数据的可用性取决于原出处许可与授权。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**论文或技术报告**：https://arxiv.org/abs/2611.22490

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**官方代码**：未公开

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**数据地址**：未公开

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**官方主页**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**论文题名**：SciWorkBench: A Benchmark for Real Scientific Workflows

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

## 发起与维护

**发起方**：阿里巴巴集团、清华大学、中国科学院大学、阿尔伯塔大学、浙江大学

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**协作机构**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**作者**：Yuchen Zhang、Taolin Han、Jinghang Wang、Jinxin Wang、Yun Wu、Wai Yuet Chiu、Xiaogang Li、Yuting Fu、Kewei Sun、Jiaxin Li、Qile Jin、Jiajia Li、Ruodan Chen、Qingteng Chen、Jialu Nie、Junchao Li、Yifei Zhang、Chen Zhao、Hu Wei、Lin Qu、Yanni Yin、Bing Zhao（共22位作者；Yuchen Zhang、Taolin Han 与 Jinghang Wang 为共同第一作者；Yanni Yin 与 Bing Zhao 为通讯作者）

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**当前维护方**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**资助方**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

## 设计目标

**要测的能力**：考察智能体能否在接近真实实验室分析的工作流中，围绕假设、原始实验数据、数据整理、初步与深入分析、建模或预测、科学结论与迭代修正等环节作出有证据支持的判断，而不只是完成单步计算或静态问答。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**现有基准的缺口**：论文指出，已有科学基准多只覆盖知识问答、可执行程序生成、领域分析或预定义工具使用等局部环节，缺少在原始或不完美数据、不确定性与伪迹上，把实验证据推进到可辩护结论的工作流级评测。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

## 构建方式

**题目来源**：任务来自同行评议文献或专家提供的研究场景，覆盖生物学、化学、材料科学与物理学及其代表性子领域；构建流程共收到 647 项候选，最终保留 98 项。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**出题人背景**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**审核流程**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**质量控制**：统一科学分析框架经领域专家验证；任务在容器化环境中实现，使用人工提供的评分细则，并经双重检查。647 项候选中仅 15.1% 进入最终基准。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**去污染**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

## 数据形式

**题量**：最终 98 项可执行科学工作流任务，由 647 项候选筛选得到（通过率 15.1%）。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**题型**：可执行的多阶段科学工作流任务，覆盖假设检验、数据检查、分析、建模与结论等一个或多个环节

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**模态**：原始或接近原始的实验数据、文本说明与智能体工具使用（含跨模态证据）

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**语言**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**难度**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**公开与隐藏划分**：未公开完整数据划分。论文仅在附录中给出示例任务格式，并写明示例不是可独立运行的完整基准发布。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

## 评测方法

**指标**：在 98 项任务上的均分；并按学科报告领域成绩。评分协议按任务类型匹配精确匹配、脚本评分或智能体评判。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**评分方式**：在统一执行与基于评分细则的打分协议下评测。论文比较了精确匹配、脚本评分与智能体评判对各类科学任务的适用性，工作流任务更依赖专家撰写的评分细则。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**提示设置**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**官方评测脚本**：未公开

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**可比性说明**：成绩是模型与智能体框架的联合结果，不能单独解读为模型分数。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

## 最新情况

**核验日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**最新数据版本**：未公开

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**论文修订**：arXiv 仅有 v1，首次提交日期为 2026-11-17。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**饱和情况**：未饱和。13 个被测智能体的均分介于 22.12 至 57.38。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**污染与争议**：论文未提供训练数据污染的量化估计。失败分析归纳三类工作流级弱点：科学知识难以转化为任务特定程序、跨模态证据整合弱，以及科学自我纠正能力有限。完整代码与数据未公开，第三方实验数据还受原出处许可限制。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**衍生基准**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

## 榜单快照

**快照日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**官方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**第三方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**结果快照**：均为论文作者自测，13 个模型–框架组合，在 Claude Code 与 Codex 下运行。最高均分为 Codex 搭配 GPT-5.6 Sol 的 57.38，Claude Code 搭配 Opus 5 为 57.31，Claude Code 搭配 Qwen3.8-Max 为 49.43，全部组合介于 22.12 至 57.38。Codex 搭配 GPT-5.6 Sol 在生物学上均分为 54.46；论文还报告 Claude Code 搭配 Qwen3.8-Max 在物理学上领先，化学与材料科学上有组合达到 67.59。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**覆盖说明**：数值取自论文摘要、引言与实验章节及图 6、表 3 和表 4；部分领域最高分仅在正文叙述中给出。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

## 联系方式

**公开邮箱**：论文所列公开邮箱：wjh2018@mail.ustc.edu.cn

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**代码讨论**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**官方社交账号**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**隐私政策**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

## 原始文件

**论文PDF**：https://arxiv.org/pdf/2611.22490

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**文件校验**：ca71751b4681d6fb64422cb90b0a2cc02ed9a954ce39baf919211dccd66bf12e

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**文件大小**：2026693

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**文件夹**：待核实

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

**其他文件**：论文附录 D 记录了示例任务的说明、输入组织、参考答案结构与评分细则；手稿源档含该示例的说明与细则文件，但不含完整数据、评测环境、轨迹或评分实现。

来源: [1](https://arxiv.org/abs/2611.22490) [2](https://arxiv.org/pdf/2611.22490) (访问 2026-11-19)

## 变更记录

2026-11-19：初次收录。
