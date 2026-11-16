# ARE-bench

科研智能体基准：75 项取自真实研究者会话、配有重放工作区的任务，覆盖七个研究阶段，以 1,173 个二值检查项评分。论文报告最强的 GPT-6.1-Sol 只有 66.2% 的任务全部检查项通过。

## 基本信息

**简称**：ARE-bench

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**全称**：ARE-bench：在真实研究者会话与工作区中评测智能体科研能力

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**基准版本**：arXiv:2611.14364v1；75 项任务、1,173 个检查项

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**论文版本**：arXiv:2611.14364v1（2026-11-10首次提交）

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**发布日期**：2026-11-10

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**主板块**：Agent

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**领域标签**：科研智能体；有状态工作区；检查清单评分；长程任务

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**许可证**：论文在 arXiv 采用 arXiv 非独占分发许可。数据与代码许可以官方仓库为准。

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**论文或技术报告**：https://arxiv.org/abs/2611.14364

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**官方代码**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**数据地址**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**官方主页**：https://arebench.com

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**论文题名**：ARE-bench: Benchmarking Agents' Research Ability in Real-World Researcher Sessions and Workspaces

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

## 发起与维护

**发起方**：上海人工智能实验室

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**协作机构**：复旦大学、华东师范大学、上海交通大学、中国人民大学、北京大学

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**作者**：Jiahang Lin、Wanying Ren、Wanghan Xu、Huayu Sha、Yang Shu、Zhonghang Lu、Chengjun Pan、Yi Dong、Shichun Liu、Yuyang Hu、Shihan Dou、Honglin Guo、Huijie Lv、Pujun Zheng、Zhe Sun、Yuankai Ying、Yiding Wang、Jiahao Chen、Zhixiong Yang、Dingbo Yuan、Yicheng Zou、Zhecan Wang、Guoxiu He、Xiaoyu Xing、Qi Zhang、Tao Gui、Xuanjing Huang（共27位作者）

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**当前维护方**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**资助方**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

## 设计目标

**要测的能力**：评估科研智能体能否在进行中的项目里推进一步工作，同时遵守会话中先前的决定，并正确处理工作区中未完成的文件、过时版本与失败尝试。

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**现有基准的缺口**：论文指出，许多科研智能体基准强调独立任务和相对自足的流程，工作区干净或经整理；而研究者实际让智能体完成进行中项目的一步，请求依赖先前决定，工作区状态复杂，高分不一定转化为可靠交付。

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

## 构建方式

**题目来源**：任务取自真实研究者会话，并配有重放到请求时刻的项目内工作区。

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**出题人背景**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**审核流程**：三阶段流水线：整理者规范化原始会话、对照完整交互核实需求并按需求分类标注；构建者把目标请求与仍有效的历史编译成可见指令、重放工作区，并把隐藏评分细则编译成二值检查清单；验证者校准裁判、核验任务包、运行智能体，并逐项送人工审核，不合格任务退回构建者。

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**质量控制**：要求空交付得分接近零，看似完整但含虚假内容的伪造交付得分应明显低于实际运行；每条标签都引用原话证据，并最终逐条核对引文。

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**去污染**：评分细则与含原话、来源轮次、路径映射、重放日志及匿名化决策的溯源包构成隐藏评测集。

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

## 数据形式

**题量**：75 项任务，覆盖七个研究阶段（调研、设计、数据与环境、代码、执行、分析、写作）、33 项需求与 150 项子需求，共 1,173 个二值检查项（平均每项任务 15.6 个）

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**题型**：在真实工作区中多步交互完成研究请求

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**模态**：文本、代码与文件

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**语言**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**难度**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**公开与隐藏划分**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

## 评测方法

**指标**：实例成功率（全部检查项通过的任务比例）；检查项成功率（给部分分）

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**评分方式**：每项任务三次运行取平均；可验证的检查项逐项判为通过或不通过，未触发的条件项不计。

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**提示设置**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**官方评测脚本**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**可比性说明**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

## 最新情况

**核验日期**：2026-11-16

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**最新数据版本**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**论文修订**：arXiv 仅有 v1，v1 提交于2026-11-10 17:21:31 UTC。

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**饱和情况**：未饱和：最强模型实例成功率 66.2%；设计与执行阶段对所有模型都属最难之列。

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**污染与争议**：论文发现，检查项成功率在各模型之间只相差 13.1 个百分点，而实例成功率相差 40.4 个百分点，说明模型多能满足大部分检查项但难以全部满足；阶段排名与总体排名不一致。

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**衍生基准**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

## 榜单快照

**快照日期**：2026-11-16

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**官方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**第三方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**结果快照**：论文作者自测七个前沿模型，每任务三次运行。GPT-6.1-Sol 实例成功率 66.2%，Claude Opus 5.5 为 56.9%，其余五个模型低于 40%，Qwen3.8-27B 仅 25.8%。

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**覆盖说明**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

## 联系方式

**公开邮箱**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**代码讨论**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**官方社交账号**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**隐私政策**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

## 原始文件

**论文PDF**：https://arxiv.org/pdf/2611.14364

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**文件校验**：fb8f375d824ed5d301f0bfce44f2ed96306665d4c865c562c8a635adb27d7f4c

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**文件大小**：1490259

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**文件夹**：待核实

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

**其他文件**：项目主页：https://arebench.com

来源: [1](https://arxiv.org/abs/2611.14364) [2](https://arxiv.org/pdf/2611.14364) [3](https://arebench.com) (访问 2026-11-16)

## 变更记录

2026-11-16：初次收录。
