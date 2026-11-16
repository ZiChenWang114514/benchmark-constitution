# UniHam

材料电子哈密顿量学习基准：103,121 个晶体结构、72 种元素，全部以完整自旋轨道耦合计算复数哈密顿量，设重建、尺寸与组成分布外及下游性质任务。论文报告微调 HamGNN 带隙误差 0.622 eV，为表中最佳。

## 基本信息

**简称**：UniHam

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**全称**：UniHam：面向材料哈密顿量学习、完整包含自旋轨道耦合的大规模数据集与基准

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**基准版本**：arXiv:2611.12509v1；103,121 个晶体结构

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**论文版本**：arXiv:2611.12509v1（2026-11-09首次提交）

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**发布日期**：2026-11-09

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**主板块**：材料

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**领域标签**：电子哈密顿量；自旋轨道耦合；等变图神经网络；分布外泛化

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**许可证**：论文在 arXiv 采用知识共享署名 4.0 国际许可。官方代码仓库声明 MIT 许可。

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**论文或技术报告**：https://arxiv.org/abs/2611.12509

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**官方代码**：https://github.com/WendyYW/UniHam

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**数据地址**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**官方主页**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**论文题名**：UniHam: A Large-Scale SOC-Complete Dataset and Benchmark for Hamiltonian Learning in Materials

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

## 发起与维护

**发起方**：中山大学

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**协作机构**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**作者**：Yuewen Huang、Pin Chen、Yutong Lu（共3位作者）

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**当前维护方**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**资助方**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

## 设计目标

**要测的能力**：从晶体结构预测完整包含自旋轨道耦合的复数厄米电子哈密顿量，并检验预测的哈密顿量能否支撑能带、带隙与态密度等下游电子性质计算。

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**现有基准的缺口**：论文指出，已有哈密顿量数据集普遍缺少对自旋轨道耦合的系统纳入；HamGNN 报告的约 4.4 万结构数据未公开。UniHam 规模是次大公开自旋轨道耦合数据集的 6 倍，也是唯一覆盖镧系 4f 元素、带系统分布外评测与规范校正多层指标的基准。

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

## 构建方式

**题目来源**：用相对论密度泛函程序 OpenMX 在非共线自旋与完整自旋轨道耦合下计算哈密顿量标签，并加 DFT+U 修正。

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**出题人背景**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**审核流程**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**质量控制**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**去污染**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

## 数据形式

**题量**：103,121 个结构，覆盖 72 种元素与 230 个空间群中的 225 个

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**题型**：结构到哈密顿量的回归，及由预测哈密顿量对角化得到的性质预测

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**模态**：晶体结构与复数厄米矩阵

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**语言**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**难度**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**公开与隐藏划分**：训练池限于不超过 60 个原子的结构（约 9 万个），按最稀有元素分箱分层，划分为约 86,000 训练、2,000 验证、2,000 测试（随机种子 42）。任务包括 Recon-ID（8:1:1 随机划分）、OOD-Size（更大结构）、OOD-Comp（移除指定元素后重训）与 Prop-ID（性质预测）。

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

## 评测方法

**指标**：哈密顿量平均绝对误差（实部与虚部，meV）；带隙、能带结构与态密度的平均绝对误差和皮尔逊相关系数

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**评分方式**：在固定划分上计算误差；性质层面先对角化预测哈密顿量再比较。

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**提示设置**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**官方评测脚本**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**可比性说明**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

## 最新情况

**核验日期**：2026-11-16

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**最新数据版本**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**论文修订**：arXiv 仅有 v1，v1 提交于2026-11-09 14:49:03 UTC。

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**饱和情况**：重建任务误差已低：两种等变模型总平均绝对误差都低于 3 meV，83.4% 的样本两者均预测良好；性质层面与组成分布外设置仍有明显差距。

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**污染与争议**：论文报告，困难样本集中在强自旋轨道耦合、小晶胞、高对称性的物相，并强调仅看哈密顿量精度不足以判断下游性质是否可靠。

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**衍生基准**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

## 榜单快照

**快照日期**：2026-11-16

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**官方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**第三方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**结果快照**：论文作者自测。性质预测任务中，微调后的 HamGNN 带隙平均绝对误差 0.622 eV（皮尔逊相关 0.988）、能带结构 0.360 eV、态密度 4.73 st/eV，优于 HamGNN 基础版（1.697 eV）与 DeepH-pack（1.925 eV）。

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**覆盖说明**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

## 联系方式

**公开邮箱**：论文所列邮箱：huangyw66@mail2.sysu.edu.cn、chenp85@mail.sysu.edu.cn（通讯作者 Pin Chen）、luyutong@mail.sysu.edu.cn

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**代码讨论**：官方代码仓库的议题页：https://github.com/WendyYW/UniHam/issues

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**官方社交账号**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**隐私政策**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

## 原始文件

**论文PDF**：https://arxiv.org/pdf/2611.12509

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**文件校验**：bd053b3cb8ec9d08ed5064f8bf4bcae554fc9a5e3fe8db9f965262e172bd1b0a

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**文件大小**：17788071

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**文件夹**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

**其他文件**：待核实

来源: [1](https://arxiv.org/abs/2611.12509) [2](https://arxiv.org/pdf/2611.12509) [3](https://github.com/WendyYW/UniHam) (访问 2026-11-16)

## 变更记录

2026-11-16：初次收录。
