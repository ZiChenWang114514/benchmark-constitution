import { currentLocale, t, type Locale } from '../i18n';
import { translateContent } from '../i18n/content';

export type Source = { url: string; accessed: string };

export type Field = {
  value: unknown;
  sources: Source[];
  status?: string;
  note?: string;
};

export const PENDING_EXPLANATION =
  '该字段尚未完成精确核验，不表示官方未公开。';

const LABELS: Record<string, string> = {
  name: '简称',
  full_name: '全称',
  version: '数据集版本',
  paper_version: '论文版本',
  release_date: '发布日期',
  section: '主板块',
  subfields: '领域标签',
  license: '许可证',
  paper_url: '论文',
  code_url: '代码仓库',
  dataset_url: '数据集',
  official_homepage: '官方主页',
  paper_title: '论文标题',
  initiators: '发起机构',
  partners: '合作机构',
  authors: '作者',
  maintainer: '当前维护方',
  funders: '资助方',
  capabilities: '要测的能力',
  gap_in_prior_benchmarks: '既有评测的不足',
  question_sources: '题目来源',
  author_background: '出题人背景',
  review_process: '审核流程',
  quality_control: '质量控制',
  decontamination: '去污染',
  size: '规模',
  question_types: '题型',
  modalities: '模态',
  languages: '语言',
  difficulty: '难度',
  public_hidden_split: '公开集与隐藏集',
  metrics: '指标',
  scoring: '评分方式',
  prompt_settings: '提示设置',
  official_scripts: '官方评测脚本',
  comparability_warning: '可比性',
  checked_at: '核验日期',
  latest_dataset_version: '最新数据版本',
  paper_revision_history: '论文修订',
  saturation: '是否接近饱和',
  contamination_and_issues: '污染与争议',
  derivatives: '衍生基准',
  snapshot_date: '快照日期',
  official_url: '官方榜单',
  third_party_url: '第三方榜单',
  results: '榜单结果',
  coverage_note: '覆盖说明',
  public_emails: '公开邮箱',
  github_issues: 'GitHub Issues',
  official_social: '官方公开账号',
  privacy_policy: '收录边界',
  paper_pdf_url: '论文 PDF 下载',
  sha256: 'SHA-256',
  pdf_bytes: '文件大小',
  drive_folder: '归档位置',
  other_documents: '其他文档',
  drive_pdf: '论文 PDF',
  id: '文件标识',
  kind: '类型',
  type: '类型',
  url: '链接',
  source_url: '来源链接',
  accessed: '访问日期',
  date: '日期',
  note: '说明',
  bytes: '字节数',
  rank: '名次',
  model: '模型',
  model_version: '模型版本',
  score: '分数',
  result: '结果',
  unit: '单位',
  metric: '指标',
  scope: '范围',
  scope_and_protocol: '范围与协议',
  benchmark_version: '基准版本',
  result_type: '结果类型',
  evaluation_date: '评测日期',
  result_date: '结果日期',
  source_date: '来源日期',
  collected_at: '采集时间',
  source_class: '来源等级',
  provenance: '出处说明',
  checkpoint_note: '检查点说明',
  settings: '设置',
  ci: '区间',
  uncertainty: '不确定度',
  harness: '评测框架',
  model_release: '模型发布',
  model_date: '模型日期',
  submitted_at: '提交时间',
  run_started_at: '运行开始日期',
  evaluation_started_at: '评测开始日期',
  started_at: '开始日期',
  paper_first_submission: '论文首次提交',
  arxiv_revisions: 'arXiv 修订',
  arxiv_submissions: 'arXiv 提交',
  arxiv_submission_history: 'arXiv 提交记录',
  last_modified: '最后修改',
  observed_on: '观察日期',
  timezone: '时区',
  change: '变更',
  arxiv_version: 'arXiv 版本',
  history_note: '修订说明',
  evidence_2026_h2: '2026下半年证据',
  '2026_h2_evidence': '2026下半年证据',
  continued_use_2026h2: '2026下半年仍被引用',
  evidence_boundary: '证据边界',
  paper_metadata: '论文元数据',
  revisions: '修订',
  verification: '核验',
  chinese_intro_doc: '中文介绍文档',
  local_markdown: '本地 Markdown',
  date_precision: '日期精度',
};

export function labelFor(key: string, locale: Locale = currentLocale()): string {
  const label = t(locale, `field.${key}`);
  if (!label.startsWith('field.')) return label;
  if (locale === 'en') {
    const translated = translateContent(key, locale);
    if (translated !== key) return translated;
  }
  return LABELS[key] ?? key;
}

export function statusOf(field: Field | undefined): string | null {
  if (!field) return null;
  if (field.status) return field.status;
  if (field.value === '待核实' || field.value === '未公开') return field.value;
  return null;
}

export function isStatusWord(value: unknown): value is string {
  return value === '待核实' || value === '未公开' || value === 'Unverified' || value === 'Not disclosed';
}

export function hasPublicValue(field: Field | undefined): boolean {
  if (!field) return false;
  if (statusOf(field)) return false;
  const value = field.value;
  if (isStatusWord(value) || value == null || value === '') return false;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object') return Object.keys(value as object).length > 0;
  return true;
}

export function badgeClass(status: string): string {
  return status === '待核实' || status === 'Unverified' ? 'badge-pending' : 'badge-muted';
}

export function publicText(value: string): string {
  return value.replaceAll('Benchmark Atlas', 'Benchmark Constitution');
}

const EXPLANATIONS = new Set([
  PENDING_EXPLANATION,
  '本批已查看所列官方材料，但尚未完成该字段的精确核验；不表示官方未公开。',
  'This field has not been confirmed exactly. It does not mean the information is unpublished.',
]);

export function notableNote(field: Field | undefined): string | null {
  const note = field?.note?.trim();
  if (!note || EXPLANATIONS.has(note)) return null;
  return publicText(note);
}

export function safeUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') return parsed.toString();
  } catch {
    return null;
  }
  return null;
}

export function sourceText(url: string): string {
  if (url.startsWith('urn:')) return t(currentLocale(), 'detail.archive_record');
  return url;
}

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function textValue(field: Field | undefined): string {
  return typeof field?.value === 'string' ? field.value : '';
}

export function sortDate(value: string): string {
  const normalized = value.trim().replace(/\//g, '-');
  return /^\d{4}/.test(normalized) ? normalized : '';
}

export function formatBytes(bytes: number, locale: Locale = currentLocale()): string {
  const formatted = new Intl.NumberFormat(locale === 'zh' ? 'zh-Hans' : 'en').format(bytes);
  return t(locale, 'value.bytes', { n: formatted });
}

export function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) {
    const kb = bytes / 1024;
    return `${kb.toFixed(kb < 10 ? 1 : 0)} KB`;
  }
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export function isField(value: unknown): value is Field {
  return !!value && typeof value === 'object' && !Array.isArray(value) && 'value' in value && 'sources' in value;
}

export function countPending(node: unknown): number {
  if (!node || typeof node !== 'object' || Array.isArray(node)) return 0;
  if (isField(node)) return statusOf(node) ? 1 : 0;
  return Object.values(node).reduce<number>((sum, value) => sum + countPending(value), 0);
}

export function orderedEntries(section: Record<string, Field> | undefined, keys: string[]): { name: string; field: Field }[] {
  if (!section) return [];
  const seen = new Set<string>();
  const entries: { name: string; field: Field }[] = [];
  for (const key of keys) {
    const field = section[key];
    if (field) {
      entries.push({ name: key, field });
      seen.add(key);
    }
  }
  for (const [key, field] of Object.entries(section)) {
    if (!seen.has(key) && isField(field)) entries.push({ name: key, field });
  }
  return entries;
}

export function page(path = '', locale: Locale = currentLocale()): string {
  const base = import.meta.env.BASE_URL || '/';
  const prefix = locale === 'zh' ? 'zh/' : '';
  if (!path) return `${base}${prefix}`;
  return `${base}${prefix}${path.replace(/^\/+|\/+$/g, '')}/`;
}

export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\/+/, '')}`;
}

export function dateStamp(value?: string | null): string {
  if (!value) return '';
  const match = /^(\d{4}-\d{2}-\d{2})/.exec(value.trim());
  return match ? match[1] : value;
}

export function displayName(name: string): string {
  return name.replace(/[\u2018\u2019\u201A\u201B\u2032\uFF07]/g, "'");
}

export interface SectionPalette {
  light: string;
  dark: string;
  style: string;
}

export const SECTION_PALETTES: Record<string, SectionPalette> = {
  物理: { light: '#1d4ed8', dark: '#93c5fd', style: '--tone-light:#1d4ed8;--tone-dark:#93c5fd' },
  化学: { light: '#0f766e', dark: '#5eead4', style: '--tone-light:#0f766e;--tone-dark:#5eead4' },
  生物与医学: { light: '#15803d', dark: '#86efac', style: '--tone-light:#15803d;--tone-dark:#86efac' },
  地球与天文: { light: '#0369a1', dark: '#7dd3fc', style: '--tone-light:#0369a1;--tone-dark:#7dd3fc' },
  材料: { light: '#b45309', dark: '#fbbf24', style: '--tone-light:#b45309;--tone-dark:#fbbf24' },
  综合科学: { light: '#4338ca', dark: '#a5b4fc', style: '--tone-light:#4338ca;--tone-dark:#a5b4fc' },
  语言: { light: '#9a3412', dark: '#fdba74', style: '--tone-light:#9a3412;--tone-dark:#fdba74' },
  推理: { light: '#6d28d9', dark: '#c4b5fd', style: '--tone-light:#6d28d9;--tone-dark:#c4b5fd' },
  数学: { light: '#7e22ce', dark: '#d8b4fe', style: '--tone-light:#7e22ce;--tone-dark:#d8b4fe' },
  代码: { light: '#047857', dark: '#6ee7b7', style: '--tone-light:#047857;--tone-dark:#6ee7b7' },
  多模态: { light: '#be185d', dark: '#f9a8d4', style: '--tone-light:#be185d;--tone-dark:#f9a8d4' },
  Agent: { light: '#c2410c', dark: '#fb923c', style: '--tone-light:#c2410c;--tone-dark:#fb923c' },
  安全: { light: '#b91c1c', dark: '#fca5a5', style: '--tone-light:#b91c1c;--tone-dark:#fca5a5' },
  语音: { light: '#0e7490', dark: '#67e8f9', style: '--tone-light:#0e7490;--tone-dark:#67e8f9' },
  机器人与具身: { light: '#4d7c0f', dark: '#bef264', style: '--tone-light:#4d7c0f;--tone-dark:#bef264' },
};

const DEFAULT_SECTION_PALETTE: SectionPalette = {
  light: '#7a4e08',
  dark: '#eab308',
  style: '--tone-light:#7a4e08;--tone-dark:#eab308',
};

export const TONES: Record<string, string> = Object.fromEntries(
  Object.entries(SECTION_PALETTES).map(([key, palette]) => [key, palette.light]),
);

export function sectionPalette(section: string): SectionPalette {
  return SECTION_PALETTES[section] ?? DEFAULT_SECTION_PALETTE;
}

export function sectionStyle(section: string): string {
  return sectionPalette(section).style;
}

export function tone(section: string): string {
  return sectionPalette(section).light;
}
