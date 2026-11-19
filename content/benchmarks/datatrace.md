# DataTrace

DataTrace 评测数据智能体能否在数据库产物图上定位被注入的根因，并检查诊断是否有查阅证据支撑。发布库含 83 个可运行环境；官方冻结榜为 64 项任务、每种模型两次重复。论文报告，七个专有模型的平均根因准确率为 48%，平均条件未支持率为 18%；冻结榜上 gpt-5.6-sol 的 RC@1 为 0.688，接地准确率为 0.586。

## 基本信息

**简称**：DataTrace

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**全称**：DataTrace：面向有证据支撑的根因定位的数据智能体基准

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**基准版本**：arXiv:2611.18926v1；发布库含 83 个可运行环境；冻结榜为 64 项任务、每种模型两次重复

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**论文版本**：arXiv:2611.18926v1（2026-11-13首次提交）

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**发布日期**：2026-11-13

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**主板块**：Agent

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**领域标签**：数据智能体；根因定位；证据落地

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**许可证**：论文在 arXiv 采用 Creative Commons Attribution 4.0 International（CC BY 4.0）许可。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**论文或技术报告**：https://arxiv.org/abs/2611.18926

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**官方代码**：https://hkustdial.github.io/datatrace/

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**数据地址**：https://hkustdial.github.io/datatrace/

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**官方主页**：https://hkustdial.github.io/datatrace/

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**论文题名**：DataTrace: Benchmarking Data Agents for Evidence-Grounded Root-Cause Localization

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

## 发起与维护

**发起方**：美国加州大学洛杉矶分校（Tung Sum Thomas Kwok）；香港科技大学（广州）（Xiaotian Lin、Yuyu Luo）

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**协作机构**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**作者**：Tung Sum Thomas Kwok、Xiaotian Lin、Yuyu Luo（共3位作者）

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**当前维护方**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**资助方**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

## 设计目标

**要测的能力**：考察数据智能体能否在数据库产物的类型化血缘图上定位被注入的单一故障根因，并检查其是否查阅了把可见症状连接到该根因的证据路径，从而区分有依据的诊断与缺乏证据的碰巧答对。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**现有基准的缺口**：论文指出，已有基准通常只评最终查询或最终答案，无法区分基于证据的诊断与没有查阅必要产物却答对的情况。数据管道可以在不报错的情况下给出错误结果，而显式报错也不标出上游根因。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

## 构建方式

**题目来源**：83 个数据工程环境来自五个源家族：BIRD-CRITIC、Spider2、dbt 仓库、采集的生产事故和合成场景，并跨越九个行业部门。生成器通过 21 种类型化故障算子注入故障、从可复现的公开仓库提交中挖掘事故，或可选地从图游走反向生成开放问题（开放问题没有机械见证路径，不进入冻结榜）。冻结榜使用其中 64 项任务、9 种算子和 13 个环境（3 个本地 DuckDB 项目与 10 个源自 BIRD 的数据库）。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**出题人背景**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**审核流程**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**质量控制**：根因与证据路径由可执行的任务结构机械导出，无需人工标注。CoSE 是可选的生成–求解协议：外部验证器只承认可复现、可由神谕求解且证据路径非平凡的故障，并同时检查提交的答案与已查阅证据。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**去污染**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

## 数据形式

**题量**：发布库含 83 个可构建、可运行环境与 21 种故障算子。官方冻结榜为 64 项任务、每种模型两次重复（128 次回合），覆盖 9 种算子与 13 个环境。官网在 2026-11-19 另写有 62 个不同领域、7 类故障和 0 条手写推理轨迹，与论文的库规模表述并存，排名范围以论文冻结榜为准。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**题型**：在可运行数据环境中做有证据约束的根因定位；智能体需提交根因并留下查阅轨迹

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**模态**：数据库产物图，包括模式、数据、查询、约束、计划、测试、日志与事故等

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**语言**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**难度**：任务在故障机制、图距离、症状类型、模态跨度和诱饵证据上变化。论文报告根因准确率随与症状的跳数增加而下降，在五跳处接近零。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**公开与隐藏划分**：论文称代码与数据位于 https://hkustdial.github.io/datatrace/ 。主站提供语料清单与榜单。冻结榜是用于排名的静态评测集；更大的 83 环境库描述覆盖范围，不是排名范围。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

## 评测方法

**指标**：结果指标 RC@1 表示是否定位到注入根因。证据指标把已查阅节点与接受路径比较，得到证据召回 ER、精确率 EP 和 F1。推理指标 RR 衡量金标准推理步骤被执行并说明的比例。效率指标包括代价与步数。接地阈值 τg=0.5：RC@1^g 要求答案正确且 ER 至少为 0.5；幸运猜中 LG 是正确但不充分接地的无条件比例；条件未支持率 CUR 为在 RC@1=1 的条件下 ER<τg 的概率。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**评分方式**：冻结榜比较使用相同的任务分配。七个专有模型的比较共 896 次回合。训练或强化学习行使用匹配的留出批次，论文写明不可与冻结榜直接比较。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**提示设置**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**官方评测脚本**：项目主页与论文将代码、数据、评分脚本和环境构建工具指向 https://hkustdial.github.io/datatrace/ 。论文还称产物包含冻结清单、内容哈希、故障生成器、提示、工具接口、解析器、轨迹和评分脚本。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**可比性说明**：排名范围是 64 项任务的冻结榜，不是全部 83 个环境。官网后来的不完全运行（例如样本量不是 128 的行）不可与表 6 混排。训练或强化学习结果来自留出批次，须单独报告。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

## 最新情况

**核验日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**最新数据版本**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**论文修订**：arXiv 仅有 v1，v1 提交于2026-11-13 20:27:06 UTC。arXiv 注释与预印本标注为 KDD 2027 Datasets and Benchmarks Track（KDD ’27，2027 年 8 月，圣何塞）。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**饱和情况**：未饱和。冻结榜上专有模型的 RC@1 介于 0.195 至 0.688，接地准确率一律更低。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**污染与争议**：核心问题是正确答案也可能缺乏证据：七个专有模型的平均条件未支持率为 18%，正确答中的未支持率介于 0.148 至 0.231。论文还讨论症状文本捷径：统一榜上全部 75 个未支持正确答案都出现在 326 个正确的显式失败诊断中，而 105 个正确的静默漂移诊断都达到接地阈值。注入故障会拓宽机制覆盖，但与自然故障分布并不相同。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**衍生基准**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

## 榜单快照

**快照日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**官方榜**：https://hkustdial.github.io/datatrace/

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**第三方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**结果快照**：均为论文作者自测。摘要称七个专有模型的平均根因准确率为 48%，平均每模型条件未支持率为 18%。表 6 冻结榜（64 项任务×2 次重复）上，gpt-5.6-sol 的 RC@1 / RC@1^g / ER / LG / CUR / EG-Elo 为 0.688 / 0.586 / 0.816 / 0.102 / 0.148 / 1588；kimi-k3 为 0.641 / 0.531 / 0.741 / 0.109 / 0.171 / 1532；claude-sonnet-5 为 0.633 / 0.523 / 0.686 / 0.109 / 0.173 / 1524；glm-5.2 为 0.492 / 0.398 / 0.804 / 0.094 / 0.190 / 1396；deepseek-v4-flash 为 0.414 / 0.344 / 0.841 / 0.070 / 0.170 / 1340；grok-4.5 为 0.305 / 0.234 / 0.821 / 0.070 / 0.231 / 1229；gemini-3.5-flash 为 0.195 / 0.164 / 0.840 / 0.031 / 0.160 / 1157。在匹配留出批次上的环内训练中，有依据的正确诊断比例从 83.7% 升至 94.6%，根因准确率从 29.2% 升至 36.7%。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**覆盖说明**：冻结榜数字来自论文表 6，是排名主结果。官网 2026-11-19 的榜单含部分不同样本量的后续运行，例如 kimi-k3 仅 11 次，不能替代表 6。强化学习与训练行使用另一留出批次。

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

## 联系方式

**公开邮箱**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**代码讨论**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**官方社交账号**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**隐私政策**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

## 原始文件

**论文PDF**：https://arxiv.org/pdf/2611.18926

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**文件校验**：b4d9b9c7db377b4aab9e1abee3335627cde091fa2b8168b415c79bdb06807389

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**文件大小**：1894935

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**文件夹**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

**其他文件**：待核实

来源: [1](https://arxiv.org/abs/2611.18926) [2](https://arxiv.org/pdf/2611.18926) [3](https://hkustdial.github.io/datatrace/) (访问 2026-11-19)

## 变更记录

2026-11-19：初次收录。
