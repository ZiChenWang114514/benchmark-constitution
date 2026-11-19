# DiagTrace

基于 PubMed Central 病例报告构建的交互式临床决策基准，共 510 例、覆盖八个专科，其中 225 例用于主评测。模型在已知最终诊断的前提下，于固定轮次预算内向报告智能体请求信息，以重建有来源依据的诊断轨迹。论文评测四个模型，Claude Haiku 4.5 的事件级召回为 0.665、成对顺序准确率为 0.690。数据与交互轨迹发布于 GitHub。

## 基本信息

**简称**：DiagTrace

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**全称**：DiagTrace：面向临床决策的交互式基准

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**基准版本**：arXiv:2611.22009v1；510 例病例，主评测使用 225 例

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**论文版本**：arXiv:2611.22009v1（2026-11-16首次提交）

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**发布日期**：2026-11-16

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**主板块**：生物与医学

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**领域标签**：临床决策；交互式信息获取；诊断轨迹；病例报告

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**许可证**：论文在 arXiv 采用 Creative Commons Attribution 4.0 国际许可协议。官方数据仓库的许可证在仓库元数据中记为 Other，具体条款以仓库文件为准。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**论文或技术报告**：https://arxiv.org/abs/2611.22009

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**官方代码**：https://github.com/Fanncg1229/DiagTrace-code

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**数据地址**：https://github.com/Fanncg1229/Diagtrace

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**官方主页**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**论文题名**：DiagTrace: An Interactive Benchmark for Clinical Decision Making

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

## 发起与维护

**发起方**：威尔康奈尔医学院、康奈尔大学、哥伦比亚大学

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**协作机构**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**作者**：Yufan Wang、Rui Yang、Yi Lin、Chunhua Weng、Yifan Peng（共5位作者）

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**当前维护方**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**资助方**：美国国立卫生研究院（NIH）部分资助，致谢列出项目 R01LM014306、R01LM014573 与 UG3TR005954

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

## 设计目标

**要测的能力**：在给定正确诊断的前提下，考察模型能否通过多轮交互主动获取信息，重建与文献来源一致的诊断轨迹，而不是在信息一次给全的静态设置中只预测最终诊断。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**现有基准的缺口**：论文指出，已有医学问答和诊断推理评测通常预先提供全部患者信息，并主要看最终诊断或对话质量，较少系统考察模型能否在信息不完整时、在恰当时间请求恰当证据。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

## 构建方式

**题目来源**：每条实例由 PubMed Central 病例报告构建，包含初始表现、有来源顺序的事件库、临床病程和诊断参考文献。全文共 510 例，覆盖八个专科；事件库平均含 11.59 个来源事件。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**出题人背景**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**审核流程**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**质量控制**：来源事件须有报告文本依据，并控制泄漏。两名标注者审核了 52 个互异抽取事件，论文报告 48 条标签一致（92.3%），Cohen κ 为 0.874，加权 κ 为 0.925；在与 GPT-4.1 mini 审核重叠的 20 个事件上，分别有 18/20 与 20/20 的判断一致。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**去污染**：构建时要求标记会泄露诊断的内容并作保护处理；交互实验使用单独的匹配与全量交互回合。因临床智能体被给予最终诊断，分数衡量的是轨迹重建而非自主诊断能力。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

## 数据形式

**题量**：共 510 例病例，覆盖八个专科；主实验在 225 例上评测四个模型。另有 16 例按专科分层的固定清单评测。事件库平均 11.59 个来源事件。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**题型**：多轮交互式信息请求与诊断轨迹重建，在固定轮次预算下进行

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**模态**：来自病例报告的文本临床发现；部分事件与文章图表或图注相联系

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**语言**：英语（源病例报告与基准资源）

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**难度**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**公开与隐藏划分**：论文未另设隐藏测试集叙述。公开数据与交互轨迹位于 GitHub 仓库，相机就绪发布目录为 camera_ready_release/。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

## 评测方法

**指标**：临床病程对齐（包括最长公共子序列召回与成对顺序准确率）、交互质量、轮次效率与可用性，以及事件级召回等。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**评分方式**：将模型的请求轨迹与来源导出的参考轨迹比较。附录给出确定性指标与复现说明。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**提示设置**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**官方评测脚本**：https://github.com/Fanncg1229/DiagTrace-code

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**可比性说明**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

## 最新情况

**核验日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**最新数据版本**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**论文修订**：arXiv 仅有 v1，首次提交日期为 2026-11-16。摘要页注明被 EACL 2027 Findings 接收。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**饱和情况**：未饱和。四个模型在覆盖、顺序一致性与轮次使用上表现各有取舍；Claude Haiku 4.5 事件级召回最高为 0.665，成对顺序准确率最高为 0.690。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**污染与争议**：来源顺序反映已发表文章叙事，未必是经裁定的临床时间线；人工审核发现可能影响顺序类指标的文章顺序不一致。病例报告是选择性摘要。基准构建与审核部分依赖大模型，可能残留错误。基准仅供研究评测，不用于临床决策支持。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**衍生基准**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

## 榜单快照

**快照日期**：2026-11-19

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**官方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**第三方榜**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**结果快照**：均为论文作者自测，四个模型：GPT-4.1 mini、Claude Haiku 4.5、Gemini 2.5 Flash、Kimi K2.5。成对顺序准确率分别为 0.646、0.690、0.654、0.601。事件级召回以 Claude Haiku 4.5 最高（0.665），随后为 Kimi K2.5（0.661）、Gemini 2.5 Flash（0.655）与 GPT-4.1 mini（0.577）。论文称主指标在敏感性分析中的变化至多为 0.037。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**覆盖说明**：规模与协议取自摘要与方法；主结果取自表 3、表 4 及结论段。双栏排版可能使个别附录数字交错，引用时以正文明确句子为准。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

## 联系方式

**公开邮箱**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**代码讨论**：数据仓库 https://github.com/Fanncg1229/Diagtrace/issues ；代码仓库 https://github.com/Fanncg1229/DiagTrace-code/issues 。2026-11-19 记录的开放问题数均为 0。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**官方社交账号**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**隐私政策**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

## 原始文件

**论文PDF**：https://arxiv.org/pdf/2611.22009

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**文件校验**：e71d71c8356a9b7b588737e74397b3f22f65f07409627b6613ed36e1bb6fe943

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**文件大小**：421975

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**文件夹**：待核实

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

**其他文件**：论文附录 A.7 说明相机就绪发布含规范事件库、匹配与全量交互回合、评测清单和固定核对清单产物。

来源: [1](https://arxiv.org/abs/2611.22009) [2](https://arxiv.org/pdf/2611.22009) [3](https://github.com/Fanncg1229/Diagtrace) (访问 2026-11-19)

## 变更记录

2026-11-19：初次收录。
