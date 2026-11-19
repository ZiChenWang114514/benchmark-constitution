# EJBench

由电池冷板共轭传热设计实验构建的工程判断基准，考察模型能否根据少量既有结果预测新工况并作出设计决策，而不运行仿真软件。测试集有 272 题，其中固定的 228 题用于官方分数。十个前沿模型中最高为 GPT-6 Astra 的宏观分数 0.710；开源 Qwen3.5-9B 经强化学习后由 0.071 升至 0.106。训练、验证、测试划分、评测程序和排行榜已在 Hugging Face 发布。

## 基本信息

**简称**：EJBench

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**全称**：EJBench：由共轭传热设计实验构建的工程判断基准

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**基准版本**：EJBench v0.1（Hugging Face git 标签 v0.1）；测试集 272 题，其中 228 题计分

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**论文版本**：arXiv:2611.21707v1（2026-11-16首次提交）；数据发布标签 v0.1

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**发布日期**：2026-11-16

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**主板块**：物理

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**领域标签**：工程判断；共轭传热；电池热管理；计算流体力学

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**许可证**：论文在 arXiv 采用 Creative Commons Attribution-NonCommercial-ShareAlike 4.0 国际许可协议。Hugging Face 数据集许可为 CC BY-NC 4.0。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**论文或技术报告**：https://arxiv.org/abs/2611.21707

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**官方代码**：https://huggingface.co/datasets/GradientDynamics/EJBench

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**数据地址**：https://huggingface.co/datasets/GradientDynamics/EJBench

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**官方主页**：https://huggingface.co/datasets/GradientDynamics/EJBench

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**论文题名**：Bookkeeping Is Not Judgement: EJBench, an Engineering Judgement Benchmark Built from a Conjugate Heat Transfer Design Campaign

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

## 发起与维护

**发起方**：Gradient Dynamics（伦敦）与 AESC（伦敦）

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**协作机构**：待核实

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**作者**：James Sadler、Rotimi Alabi、Kotub Uddin（共3位作者；通讯作者为 James Sadler）

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**当前维护方**：待核实

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**资助方**：论文数据集说明写明由 Gradient Dynamics 创建并资助

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

## 设计目标

**要测的能力**：考察模型能否依据少量已完成工况的结果，判断新工况下的设计行为并作出决策，包括把未标记测试结果匹配到运行条件、在签核前选择应揭示的存档工况，以及按峰值电芯温度给新负荷排序。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**现有基准的缺口**：论文认为，许多工程基准来自教材或考试，或只测试能否操作仿真与计算机辅助设计软件；可运行并不等于判断正确。EJBench 不依赖特定软件，而问工程师在不重新仿真时会得出什么结论。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

## 构建方式

**题目来源**：题目来自电池冷板共轭传热设计实验。每个答案取自收敛且通过质量、流量与能量平衡检查的仿真，而非由大模型评判。划分按几何进行，同一设计及其工况只落在一个划分中。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**出题人背景**：待核实

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**审核流程**：待核实

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**质量控制**：仿真须收敛并通过质量、流量与能量平衡检查才成为答案。测试集设计在本发布前未公开。计分题清单及其 SHA-256 随发布提供。官方分数使用 1,000 次百分位自助法给出 95% 区间。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**去污染**：划分按几何切分，设计与运行不在划分间共享。测试集设计此前未发表。训练与验证使用附录中较容易的训练格式，其分数不代表基准成绩。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

## 数据形式

**题量**：EJBench v0.1：训练集 1,281 题，验证集 133 题，测试集 272 题；官方分数使用其中固定的 228 题，其余 44 道均为战役类题目，发布但不计分。训练与验证会随更多仿真完成而重建，测试集在此版本中冻结。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**题型**：三类任务：匹配未标记测试结果与运行条件、选择签核前应揭示的存档运行，以及按峰值电芯温度排序新负荷

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**模态**：文本提示、运行与设计记录、表格或图像形式的仿真结果；多步题可通过工具获取隐藏运行

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**语言**：英语

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**难度**：待核实

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**公开与隐藏划分**：测试集为官方基准划分并冻结；训练与验证用于微调，来自未进入评测划分的设计。计分使用测试集中固定的 228 题，全部 272 题的分数不是官方基准分。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

## 评测方法

**指标**：在 228 道计分测试题上的宏观分数（三类任务的宏平均），并报告各类分数与 95% 自助区间。任务按全对计 1、否则计 0。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**评分方式**：只有答案的每一部分都正确才得 1，否则为 0；各部分结果另行记录以便分析失败。宏观分数是三个任务族的宏平均。排行榜与评测程序随数据发布。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**提示设置**：待核实

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**官方评测脚本**：https://huggingface.co/datasets/GradientDynamics/EJBench （发布含 eval/ 评测程序与 leaderboard/）

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**可比性说明**：待核实

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

## 最新情况

**核验日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**最新数据版本**：v0.1（测试集冻结；训练与验证可能重建）

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**论文修订**：arXiv 仅有 v1，首次提交日期为 2026-11-16。数据集页面标注 pretty_name 为 EJBench v0.1 cold plate，git 标签 v0.1。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**饱和情况**：未饱和。十个前沿模型的宏观分数介于 0.36 至 0.71，最高为 GPT-6 Astra 的 0.710。论文称模型在答错与答对时陈述的置信度几乎相同。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**污染与争议**：训练与验证会随后续仿真重建，不能与冻结测试集混用。对全部 272 道测试题计分不是官方基准分。数据为非商业许可。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**衍生基准**：待核实

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

## 榜单快照

**快照日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**官方榜**：https://huggingface.co/datasets/GradientDynamics/EJBench

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**第三方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**结果快照**：均为论文作者自测。十个前沿模型宏观分数介于 0.36 至 0.71，GPT-6 Astra 以 0.710 领先（论文并给出区间 [0.651, 0.773]）。开源 Qwen3.5-9B 为 0.071，经 LoRA 与强化学习后在留出测试划分上为 0.106。单次任务费用约为 0.007 美元（GPT-6 Luna）至 0.73 美元（GPT-6 Astra）。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**覆盖说明**：划分规模取自表 1，计分规则取自第 3.3 节，模型分数取自摘要与表 3。表 3 中其他模型的完整一行数字未全部转入快照。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

## 联系方式

**公开邮箱**：james.sadler@gradient-dynamics.com、rotimi.alabi@gradient-dynamics.com、kotub.uddin@envision-energy.com

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**代码讨论**：待核实

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**官方社交账号**：待核实

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**隐私政策**：待核实

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

## 原始文件

**论文PDF**：https://arxiv.org/pdf/2611.21707

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**文件校验**：472a39bcab2df492a3f15687282fb4c90d1ca4c5e3fb024414ce25a23f0abcbf

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**文件大小**：3088285

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**文件夹**：待核实

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

**其他文件**：数据集发布含 train.csv、test.csv、train_val.csv、metadata/test_freeze.json、leaderboard 与评测代码。

来源: [1](https://arxiv.org/abs/2611.21707) [2](https://huggingface.co/datasets/GradientDynamics/EJBench) (访问 2026-11-19)

## 变更记录

2026-11-19：初次收录。
