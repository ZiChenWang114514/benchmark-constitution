# XLSAR-Bench

面向完整大场景合成孔径雷达图像的多模态基准，含 405 张图像，长边平均 7,153 像素，任务包括视觉问答、视觉定位与详细描述，并提供英文与中文评测。表 I 记录 14,250 条问答、3,260 条定位表达式和 405 条详细描述，标注经人工核验。论文称将数据开源至 Hugging Face，但 2026-11-19 访问该页面返回 401，下载量未能核实。

## 基本信息

**简称**：XLSAR-Bench

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**全称**：XLSAR-Bench：面向多模态大模型的极大合成孔径雷达图像理解基准

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**基准版本**：arXiv:2611.19364v1；405 张图像，十项任务，中英双语

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**论文版本**：arXiv:2611.19364v1（2026-11-14首次提交）；投稿 IEEE Transactions on Geoscience and Remote Sensing

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**发布日期**：2026-11-14

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**主板块**：地球与天文

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**领域标签**：合成孔径雷达；遥感；多模态大模型；大场景理解

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**许可证**：论文在 arXiv 采用 arXiv 非独占分发许可。数据集许可因 Hugging Face 页面在核验日返回 401 而未能核实。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**论文或技术报告**：https://arxiv.org/abs/2611.19364

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**官方代码**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**数据地址**：https://huggingface.co/datasets/Jiaqikiki/XLSAR

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**官方主页**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**论文题名**：XLSAR-Bench: Towards Extremely Large SAR Imagery Understanding of MLLMs

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

## 发起与维护

**发起方**：国防科技大学电子科学与技术学院；Jiehua Zhang 同时隶属于奥卢大学机器视觉与信号处理中心

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**协作机构**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**作者**：La Jiang、Lingfeng Chen、Jiaqi Zhu、Fengrong Guo、Jiehua Zhang、Panhe Hu、Li Liu、Zhen Liu（共8位作者；La Jiang 与 Lingfeng Chen 贡献相同；通讯作者为 Panhe Hu 与 Zhen Liu）

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**当前维护方**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**资助方**：教育部基础与交叉学科突破计划 JYB2025XDXM110，国家自然科学基金 62401585，湖南省科技创新计划 2024RC3120，以及国防科技大学研究生创新基金 XJJCB2026040

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

## 设计目标

**要测的能力**：在完整的大场景合成孔径雷达图像上，同时考察全局语义理解与细粒度小目标感知，任务覆盖场景解译、区域感知、目标理解、视觉定位、详细描述和条件计数。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**现有基准的缺口**：论文指出，已有合成孔径雷达视觉–语言基准多用小图块或目标中心样本，难以同时评估完整大场景理解与小目标细节；部分自动标注还可能引入无视觉依据的属性或语言偏差。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

## 构建方式

**题目来源**：从 11 个合成孔径雷达数据源收集 405 张图像，长边约 2,000 至 40,000 像素，平均 7,153×7,153。标注来自已有空间标签并对照原始图像核验；描述由半自动描述器生成后再经细致人工标注。评测为中英双语。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**出题人背景**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**审核流程**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**质量控制**：所有评测样本经人工核验，描述在半自动生成后由人工修订。表 I 将问答与定位标注记为人工核验。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**去污染**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

## 数据形式

**题量**：405 张图像；详细描述 405 条，英文与中文平均词数分别为 402 与 378；定位表达式 3,260 条；问答 14,250 条；共十项任务。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**题型**：十项任务，涵盖视觉问答、视觉定位（含条件定位）与详细图像描述，例如计数、土地利用分类、目标分类、空间关系与区域计数

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**模态**：大场景合成孔径雷达图像与中英文本指令

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**语言**：英语与中文

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**难度**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**公开与隐藏划分**：论文声明在 Hugging Face 开源。2026-11-19 访问 https://huggingface.co/datasets/Jiaqikiki/XLSAR 返回 401，公开划分文件未能下载核验。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

## 评测方法

**指标**：按任务报告准确率或描述指标等；论文并引入基于整图降采样视图、对 Qwen3.5-9B 做 LoRA 适配的 XLSAR-Baseline。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**评分方式**：评测通用、遥感和合成孔径雷达专用多模态大模型，并报告中英文结果。因数据页面未能打开，官方脚本是否随仓库提供仍待核实。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**提示设置**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**官方评测脚本**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**可比性说明**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

## 最新情况

**核验日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**最新数据版本**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**论文修订**：arXiv 仅有 v1，首次提交日期为 2026-11-14。稿件页眉标明投稿 IEEE Transactions on Geoscience and Remote Sensing；文中 DOI 仍为占位符。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**饱和情况**：未饱和。论文强调模型在理解大场景和准确感知小目标上仍然困难；文中称详细描述的 BLEU-4 最高分别仅 2.13% 与 1.37%。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**污染与争议**：大图下采样可能掩盖小目标，裁剪又可能去掉场景上下文，这是本基准要保留完整大图的原因。数据集页面在核验日无法公开访问，外部复现受阻。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**衍生基准**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

## 榜单快照

**快照日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**官方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**第三方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**结果快照**：均为论文作者自测，包含通用与领域模型及 XLSAR-Baseline。正文表格中，GPT-6.1-sol 在英文与中文设置下多项指标高于所列开源模型，例如一组英文指标为 48.19、45.85、47.70、80.82、38.26、63.26，对应中文为 47.79、42.27、48.07、82.70、39.83、64.10；定位与描述类指标明显更低。因表头与数字分栏，快照不擅自指定每一列的名称。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**覆盖说明**：规模取自摘要与表 I；模型数字取自实验表格，仅在不臆测列名的前提下引用整行。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

## 联系方式

**公开邮箱**：jiangla22@nudt.edu.cn、chenlingfeng@nudt.edu.cn、zhujiaqi24@nudt.edu.cn、guofengrong21@nudt.edu.cn、hupanhe13@nudt.edu.cn、liuli_nudt@nudt.edu.cn、zhen_liu@nudt.edu.cn、zhangjiehua_nudt@163.com。后三个地址中的下划线由 PDF 中 LaTeX 转义残留空格恢复，存有不确定性。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**代码讨论**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**官方社交账号**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**隐私政策**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

## 原始文件

**论文PDF**：https://arxiv.org/pdf/2611.19364

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**文件校验**：698ae1bfbf2e8eb07b79ecc4661d6570752ed0cbca02ff091641cfd4c3252a51

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**文件大小**：8996590

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**文件夹**：待核实

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

**其他文件**：论文脚注给出 https://huggingface.co/datasets/Jiaqikiki/XLSAR。该页在核验日返回 401，未能保存数据卡或许可文本。

来源: [1](https://arxiv.org/abs/2611.19364) [2](https://huggingface.co/datasets/Jiaqikiki/XLSAR) (访问 2026-11-19)

## 变更记录

2026-11-19：初次收录。
