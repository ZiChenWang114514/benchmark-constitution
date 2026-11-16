# AnalogLayoutWorld

智能体模拟电路版图设计基准：40 项基于 SKY130 固定网表、经专家审核的任务，在开源电子设计自动化环境中由智能体自主设计与验证，按设计规则、一致性、版图后仿真与工程质量独立评分。论文报告作者内部系统 Novara 最高，GPT-6 Astra 次之。

## 基本信息

**简称**：AnalogLayoutWorld

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**全称**：AnalogLayoutWorld：面向智能体模拟电路版图设计的开放基准

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**基准版本**：arXiv:2611.16991v1；40 项任务

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**论文版本**：arXiv:2611.16991v1（2026-11-12首次提交）

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**发布日期**：2026-11-12

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**主板块**：Agent

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**领域标签**：集成电路设计；模拟版图；电子设计自动化；编码智能体

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**许可证**：论文在 arXiv 采用 arXiv 非独占分发许可。数据与代码许可以官方仓库为准。

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**论文或技术报告**：https://arxiv.org/abs/2611.16991

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**官方代码**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**数据地址**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**官方主页**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**论文题名**：AnalogLayoutWorld: An Open Benchmark for Agentic Analog Layout Design

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

## 发起与维护

**发起方**：Nova-Silicon 团队（论文以团队署名）

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**协作机构**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**作者**：NovaSilicon Team（共1位作者）

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**当前维护方**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**资助方**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

## 设计目标

**要测的能力**：考察编码智能体能否把固定的晶体管级网表变成器件布局与互连，并借助验证反馈迭代改进，完成端到端的模拟电路版图设计。

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**现有基准的缺口**：论文指出，集成电路领域的智能体基准多集中于数字设计，从功能验证的寄存器传输级代码生成到负载到版图的流程；模拟版图需要领域知识与几何推理，并依赖反复验证，缺少开放的端到端评测。

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

## 构建方式

**题目来源**：电路取自 Analog Design Bench Team（2026）与 Leibl 等人的工作；每项任务包含固定的 SKY130 晶体管级网表、电气指标与可执行的验证流程。

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**出题人背景**：模拟电路专家参与任务选择以及任务设计与审核。

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**审核流程**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**质量控制**：所有电路均通过版图前仿真，作为后续版图生成的电气基准。

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**去污染**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

## 数据形式

**题量**：40 项经专家审核的固定网表版图任务

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**题型**：在开源电子设计自动化环境中多步交互完成版图

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**模态**：网表、版图文件、代码与工具输出

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**语言**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**难度**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**公开与隐藏划分**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

## 评测方法

**指标**：设计规则检查、版图与原理图一致性检查、寄生参数提取与版图后仿真，以及几何与工程质量测量，合成为单任务得分；报告 40 项任务平均总分

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**评分方式**：独立评分，指标与工程师共同设计；智能体可用各自框架的原生执行工具自由决定设计与验证流程，环境不提供专用工具或定制接口。

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**提示设置**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**官方评测脚本**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**可比性说明**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

## 最新情况

**核验日期**：2026-11-16

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**最新数据版本**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**论文修订**：arXiv 仅有 v1，v1 提交于2026-11-12 15:56:13 UTC。

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**饱和情况**：未饱和；论文指出在固定预算下，提升取决于推理效率以及把环境反馈转化为已验证改进的能力。

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**污染与争议**：最高分来自作者团队内部开发、未公开的智能体系统 Novara，比较时需注意其并非同等条件下的公开模型。

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**衍生基准**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

## 榜单快照

**快照日期**：2026-11-16

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**官方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**第三方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**结果快照**：论文作者自测。作者内部智能体系统 Novara 总分最高（0.8154），其次为 GPT-6 Astra（0.7483）。GPT-6 Astra 在设计规则检查与全部用例的版图后仿真上领先，Novara 在版图与原理图一致性检查及工程质量得分上领先。

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**覆盖说明**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

## 联系方式

**公开邮箱**：论文所列联系邮箱：xinxingyuan-sh@nova-silicon.com

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**代码讨论**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**官方社交账号**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**隐私政策**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

## 原始文件

**论文PDF**：https://arxiv.org/pdf/2611.16991

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**文件校验**：7e8824d78e6f7c5257c00ffe5769d8a82d28184618fd0fb63401f361796c3b3e

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**文件大小**：8496840

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**文件夹**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

**其他文件**：待核实

来源: [1](https://arxiv.org/abs/2611.16991) [2](https://arxiv.org/pdf/2611.16991) (访问 2026-11-16)

## 变更记录

2026-11-16：初次收录。
