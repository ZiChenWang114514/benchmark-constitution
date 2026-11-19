# Visual Cipher Bench

长程视觉推理智能体基准：40 道原创图像谜题，规则与线索只藏在图像中，每题限时 60 分钟、按最终答案精确匹配。论文报告 29 种配置中 GPT-6 Astra（max）最高，仅 26.7%，八个模型中五个低于 1%。

## 基本信息

**简称**：Visual Cipher Bench

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**全称**：Visual Cipher Bench：评测大模型智能体长程视觉推理的基准

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**基准版本**：arXiv:2611.16861v1；40 道原创谜题、67 张图像

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**论文版本**：arXiv:2611.16861v1（2026-11-12首次提交）

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**发布日期**：2026-11-12

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**主板块**：多模态

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**领域标签**：视觉推理；长程推理；智能体；谜题

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**许可证**：论文在 arXiv 采用 arXiv 非独占分发许可。数据与代码许可以官方仓库为准。

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**论文或技术报告**：https://arxiv.org/abs/2611.16861

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**官方代码**：官方项目主页链接的代码仓库：https://github.com/Einsia/Visual-Cipher-Bench

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**数据地址**：题目与图像随官方代码仓库发布：https://github.com/Einsia/Visual-Cipher-Bench（仓库说明写明含40道原创视觉谜题与67幅图像，任务目录为 tasks/）

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**官方主页**：https://lab.einsia.ai/visual-cipher-bench

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**论文题名**：Visual Cipher Bench: Benchmarking LLM Agents on Long-Horizon Visual Reasoning

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

## 发起与维护

**发起方**：Navers Lab、Einsia.AI 与清华大学

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**协作机构**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**作者**：Deyao Hong、Jiayi Jiang、Yuchun Chen、Yixuan Shi、Wenyi Li、Zheng Jiang、Chengxing Xie、Mingyu Su、Qingle Liu、Mingju Gao、Yizhe Chi、Youjie Zheng、Calvin Xiao、Kaisen Yang、Huan-ang Gao（共15位作者）

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**当前维护方**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**资助方**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

## 设计目标

**要测的能力**：考察智能体能否在长时间内反复在视觉检查与假设检验之间循环：提出规则、对照全局视觉约束验证，并从静态图像中解出答案。

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**现有基准的缺口**：论文指出，语言模型智能体在 SWE-Bench Pro 与 Terminal-Bench 等编码与终端任务上已展现长程推理，但这种能力能否迁移到视觉推理仍不清楚；没有外部验证时，智能体容易在局部合理的一步后停下或过早采纳错误规则。

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

## 构建方式

**题目来源**：全部谜题为本基准原创，所有规则与线索只嵌入在静态图像中，求解过程中不提供中间反馈。

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**出题人背景**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**审核流程**：每道谜题都经人工专家审核，确认解题路径成立、视觉证据充分且答案唯一；隐藏的解题步骤与参考求解器用于保证可解并支持过程审计。

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**质量控制**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**去污染**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

## 数据形式

**题量**：40 道谜题（共 67 张图像），分四类各 10 道：空间操作与模拟、逻辑约束与规划、规则归纳、基于知识的解码

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**题型**：每题 1 至 3 张谜题图像，提交单一最终答案

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**模态**：图像与文本，在离线编码沙箱中可用工具处理图像

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**语言**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**难度**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**公开与隐藏划分**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

## 评测方法

**指标**：平均准确率：每种模型与推理强度配置在 40 题上独立运行三次，取 120 次的平均

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**评分方式**：严格按最终答案精确匹配评分；每题时限 60 分钟。

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**提示设置**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**官方评测脚本**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**可比性说明**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

## 最新情况

**核验日期**：2026-11-16

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**最新数据版本**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**论文修订**：arXiv 仅有 v1，v1 提交于2026-11-12 14:33:46 UTC。

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**饱和情况**：远未饱和：最强配置仅 26.7%，八个模型中五个在最佳配置下低于 1%。

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**污染与争议**：论文报告，在覆盖四类的十题子集上，只给一条不剧透的机制提示，准确率就从 7.8% 升至 55.6%，超时次数从 51 降至 18。

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**衍生基准**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

## 榜单快照

**快照日期**：2026-11-16

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**官方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**第三方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**结果快照**：论文作者自测，八个模型、29 种推理强度配置（Claude Opus 5.5、Claude Sonnet 5.5、GPT-6.1 Sol、GPT-6 Astra、GPT-6 Luna、DeepSeek V4.1 Flash、Qwen 3.8 Max、Kimi K3.1 Pro）。GPT-6 Astra（max）最高，为 26.7%。按类别汇总，空间操作与模拟为 22.8%，规则归纳仅 0.6%。

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**覆盖说明**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

## 联系方式

**公开邮箱**：论文所列联系邮箱：nana@einsia.ai

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**代码讨论**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**官方社交账号**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**隐私政策**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

## 原始文件

**论文PDF**：https://arxiv.org/pdf/2611.16861

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**文件校验**：ab27d860e82b2ab8f09f242bda065862962210160b89237f25d400640ae21e19

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**文件大小**：1554439

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**文件夹**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

**其他文件**：待核实

来源: [1](https://arxiv.org/abs/2611.16861) [2](https://arxiv.org/pdf/2611.16861) [3](https://lab.einsia.ai/visual-cipher-bench) (访问 2026-11-16)

## 变更记录

2026-11-16：初次收录。

2026-11-19：补充官方代码仓库地址；补充官方题目与图像发布位置。
