# EEGProbe

考察通用视觉–语言模型能否在最少预处理的通道级脑电上提取并推理信息的基准，含 620 道题、13 个子任务，分为信号分类、跨模态对齐与神经生理推理三类。论文以统一零样本协议评测 11 个模型，最强的 GPT-5.6 Sol 总分仅为 41.63%。数据集页面位于 Hugging Face，但论文同时写明评测资源将在正式发表后公开。

## 基本信息

**简称**：EEGProbe

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**全称**：EEGProbe：面向信号接地脑电理解的视觉–语言模型基准

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**基准版本**：arXiv:2611.20779v1；620 道题，13 个子任务

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**论文版本**：arXiv:2611.20779v1（2026-11-16首次提交）

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**发布日期**：2026-11-16

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**主板块**：生物与医学

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**领域标签**：脑电图；视觉–语言模型；神经生理推理；跨模态对齐

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**许可证**：论文在 arXiv 采用 arXiv 非独占分发许可。Hugging Face 数据卡在 2026-11-19 未给出已定稿的数据集许可。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**论文或技术报告**：https://arxiv.org/abs/2611.20779

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**官方代码**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**数据地址**：https://huggingface.co/datasets/2122ZHU/EEGProbe

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**官方主页**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**论文题名**：EEGProbe: Do Vision-Language Models Really Understand EEG? A Benchmark for Signal-Grounded EEG Signals Evaluation

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

## 发起与维护

**发起方**：九州大学（信息科学与电气工程研究生院、文理学院）与四川轻化工大学土木工程系

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**协作机构**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**作者**：Haozhe Zhu、Dan Yuan、Chenghao Gu、Feike Xu、Yue Wen、Shin'ichi Konomi（共6位作者；Haozhe Zhu 与 Dan Yuan 为共同第一作者；通讯作者为 Yue Wen 与 Shin'ichi Konomi）

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**当前维护方**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**资助方**：日本学术振兴会科学研究费补助金 JP23H03507、JP23K02469，以及科学技术振兴机构 SPRING 项目 JPMJSP2136

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

## 设计目标

**要测的能力**：考察通用视觉–语言模型能否在不做任务特定特征工程或脑电专用适配的前提下，从最少预处理的通道级脑电中提取信息并完成分类、跨模态对齐与神经生理推理。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**现有基准的缺口**：论文认为，已有脑电系统多为单一任务而设计，视觉–语言模型在图像与文本上的能力是否延伸到电生理信号仍不清楚；EEGProbe 强调保留时间结构并降低基准引入的加工，以避免捷径作答。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

## 构建方式

**题目来源**：620 道以脑电为中心的问题，分 13 个子任务、三类能力：脑电信号分类、脑电跨模态对齐、脑电神经生理推理。题目经信号必要性测试与专家核对。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**出题人背景**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**审核流程**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**质量控制**：为减少捷径，尽量保留记录的时间结构并最小化基准引入的处理；先做信号必要性测试，再经专家核查。开放式问题采用基于评分细则的评判，对照专家参考答案。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**去污染**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

## 数据形式

**题量**：620 道题，13 个子任务，三类能力。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**题型**：封闭式与开放式的脑电接地问题，包括分类、对齐与推理

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**模态**：通道级脑电信号（作为视觉或时间序列输入）与文本问题

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**语言**：英语（数据卡标记 language:en）

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**难度**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**公开与隐藏划分**：论文采用统一零样本协议。Hugging Face 页面已公开，但 2026-11-19 经数据集接口可见文件仅有 README.md 与.gitattributes，完整评测文件是否已上传仍待核实。论文数据可用性声明写明将在正式发表后公开。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

## 评测方法

**指标**：统一协议下的总分与子任务或类别成绩；开放题按评分细则的分量评分。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**评分方式**：11 个开源与闭源视觉–语言模型在统一零样本协议下评测。开放题由评分细则对照专家参考答案打分。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**提示设置**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**官方评测脚本**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**可比性说明**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

## 最新情况

**核验日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**最新数据版本**：Hugging Face 数据集 2122ZHU/EEGProbe；接口记录最近修改时间为 2026-10-07。页面文件清单在核验日不完整。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**论文修订**：arXiv 仅有 v1，首次提交日期为 2026-11-16。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**饱和情况**：未饱和。最强模型 GPT-5.6 Sol 总分仅 41.63%，跨模态对齐仍是主要瓶颈，接近随机水平的表现在文中被强调。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**污染与争议**：本基准与已有 eeg-bench 不是同一资源。论文分析显示模型在细粒度脑电证据和神经生理解释上薄弱；推理时的神经生理提示可以改变预测，但并不等于已经具备可靠的脑电理解。数据集许可尚未在数据卡中定稿。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**衍生基准**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

## 榜单快照

**快照日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**官方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**第三方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**结果快照**：均为论文作者自测，11 个代表性开源与闭源视觉–语言模型。最强模型 GPT-5.6 Sol 总分为 41.63%。论文将跨模态脑电对齐列为主要瓶颈，并讨论时间、频谱、空间与生理结构与对错案例的关系。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**覆盖说明**：规模与总分取自摘要与结论；子任务名称取自方法概述。完整分表未全部转入快照。

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

## 联系方式

**公开邮箱**：zhu.haozhe.305@s.kyushu-u.ac.jp、yuan.dan.718@s.kyushu-u.ac.jp、gu.chenghao.564@s.kyushu-u.ac.jp、xu.feike.383@s.kyushu-u.ac.jp、wenyue@suse.edu.cn、konomi.shinichi.848@m.kyushu-u.ac.jp

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**代码讨论**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**官方社交账号**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**隐私政策**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

## 原始文件

**论文PDF**：https://arxiv.org/pdf/2611.20779

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**文件校验**：9b0ea029bbd995f9e49004fa6467272d478be969e137fbfaccd047581491a814

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**文件大小**：8275861

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**文件夹**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

**其他文件**：待核实

来源: [1](https://arxiv.org/abs/2611.20779) [2](https://huggingface.co/datasets/2122ZHU/EEGProbe) (访问 2026-11-19)

## 变更记录

2026-11-19：初次收录。
