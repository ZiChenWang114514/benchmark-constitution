export type LogoKind = 'color' | 'mask';

export interface ColorTheme {
  id: string;
  family: string;
  logo: string | null;
  logoKind: LogoKind | null;
  cellMask: string | null;
  light: string;
  dark: string;
  style: string;
}

type ThemeSpec = Omit<ColorTheme, 'style'>;

function build(spec: ThemeSpec): ColorTheme {
  return {
    ...spec,
    style: `--m-light:${spec.light};--m-dark:${spec.dark}`,
  };
}

/**
 * Curated representative color pairs & downloaded official logos for every model
 * in data/frontier/models.json and data/frontier/heat.json, plus sibling generations.
 * Every light hex maintains >= 4.5:1 contrast on #ffffff/#f3efe6;
 * every dark hex maintains >= 4.5:1 contrast on #161411/#1f1c18.
 */
const FRONTIER_EXACT: Record<string, ThemeSpec> = {
  // Google DeepMind / Gemini
  'gemini-4-carbon': { id: 'gemini-4-carbon', family: 'Gemini', logo: 'gemini-color.svg', logoKind: 'color', cellMask: 'gemini.svg', light: '#185abc', dark: '#7cacf8' },
  'gemini-4-hydrogen': { id: 'gemini-4-hydrogen', family: 'Gemini', logo: 'gemini-color.svg', logoKind: 'color', cellMask: 'gemini.svg', light: '#0277bd', dark: '#4fc3f7' },
  'gemini-4-argon': { id: 'gemini-4-argon', family: 'Gemini', logo: 'gemini-color.svg', logoKind: 'color', cellMask: 'gemini.svg', light: '#3949ab', dark: '#9fa8da' },
  'gemini-3-8-flash': { id: 'gemini-3-8-flash', family: 'Gemini', logo: 'gemini-color.svg', logoKind: 'color', cellMask: 'gemini.svg', light: '#007b83', dark: '#4dd0e1' },

  // OpenAI / GPT
  'gpt-6-1-terra': { id: 'gpt-6-1-terra', family: 'OpenAI', logo: 'openai.svg', logoKind: 'mask', cellMask: 'openai.svg', light: '#067647', dark: '#47cd89' },
  'gpt-6-1-sol': { id: 'gpt-6-1-sol', family: 'OpenAI', logo: 'openai.svg', logoKind: 'mask', cellMask: 'openai.svg', light: '#0d7a63', dark: '#2dd4bf' },
  'gpt-6-sol': { id: 'gpt-6-sol', family: 'OpenAI', logo: 'openai.svg', logoKind: 'mask', cellMask: 'openai.svg', light: '#166534', dark: '#6ee7b7' },
  'gpt-6-astra': { id: 'gpt-6-astra', family: 'OpenAI', logo: 'openai.svg', logoKind: 'mask', cellMask: 'openai.svg', light: '#0f6e78', dark: '#67e8f9' },
  'gpt-6-luna': { id: 'gpt-6-luna', family: 'OpenAI', logo: 'openai.svg', logoKind: 'mask', cellMask: 'openai.svg', light: '#047857', dark: '#5eead4' },

  // Anthropic / Claude
  'claude-opus-5-5': { id: 'claude-opus-5-5', family: 'Claude', logo: 'claude-color.svg', logoKind: 'color', cellMask: 'claude.svg', light: '#9a3412', dark: '#fb923c' },
  'claude-sonnet-5-5': { id: 'claude-sonnet-5-5', family: 'Claude', logo: 'claude-color.svg', logoKind: 'color', cellMask: 'claude.svg', light: '#c2410c', dark: '#fdba74' },
  'claude-fable-5-2': { id: 'claude-fable-5-2', family: 'Claude', logo: 'claude-color.svg', logoKind: 'color', cellMask: 'claude.svg', light: '#b45309', dark: '#fbbf24' },
  'claude-mythos-5-2': { id: 'claude-mythos-5-2', family: 'Claude', logo: 'claude-color.svg', logoKind: 'color', cellMask: 'claude.svg', light: '#7c2d12', dark: '#f97316' },
  'claude-haiku-5-5': { id: 'claude-haiku-5-5', family: 'Claude', logo: 'claude-color.svg', logoKind: 'color', cellMask: 'claude.svg', light: '#a16207', dark: '#fde047' },

  // Meta / Muse & Llama
  'muse-wonder-full': { id: 'muse-wonder-full', family: 'Meta', logo: 'meta-color.svg', logoKind: 'color', cellMask: 'meta.svg', light: '#0056d2', dark: '#60a5fa' },
  'muse-wonder': { id: 'muse-wonder', family: 'Meta', logo: 'meta-color.svg', logoKind: 'color', cellMask: 'meta.svg', light: '#4338ca', dark: '#a5b4fc' },
  'muse-spark-1-3': { id: 'muse-spark-1-3', family: 'Meta', logo: 'meta-color.svg', logoKind: 'color', cellMask: 'meta.svg', light: '#1d4ed8', dark: '#93c5fd' },
  'muse-spark-open': { id: 'muse-spark-open', family: 'Meta', logo: 'meta-color.svg', logoKind: 'color', cellMask: 'meta.svg', light: '#3730a3', dark: '#c7d2fe' },
  'muse-ember': { id: 'muse-ember', family: 'Meta', logo: 'meta-color.svg', logoKind: 'color', cellMask: 'meta.svg', light: '#6d28d9', dark: '#c4b5fd' },

  // DeepSeek
  'deepseek-v4-1-flash-1017': { id: 'deepseek-v4-1-flash-1017', family: 'DeepSeek', logo: 'deepseek-color.svg', logoKind: 'color', cellMask: 'deepseek.svg', light: '#1e3a8a', dark: '#60a5fa' },
  'deepseek-v4-1-flash': { id: 'deepseek-v4-1-flash', family: 'DeepSeek', logo: 'deepseek-color.svg', logoKind: 'color', cellMask: 'deepseek.svg', light: '#1e40af', dark: '#93c5fd' },

  // Alibaba Qwen
  'qwen3-8-omni-flash': { id: 'qwen3-8-omni-flash', family: 'Qwen', logo: 'qwen-color.svg', logoKind: 'color', cellMask: 'qwen.svg', light: '#6d28d9', dark: '#c084fc' },
  'qwen4-max-preview': { id: 'qwen4-max-preview', family: 'Qwen', logo: 'qwen-color.svg', logoKind: 'color', cellMask: 'qwen.svg', light: '#7e22ce', dark: '#d8b4fe' },

  // Moonshot AI / Kimi
  'kimi-k3-1-pro': { id: 'kimi-k3-1-pro', family: 'Kimi', logo: 'kimi-color.svg', logoKind: 'color', cellMask: 'kimi.svg', light: '#0e7490', dark: '#22d3ee' },

  // MiniMax
  'minimax-m3-1-flash': { id: 'minimax-m3-1-flash', family: 'MiniMax', logo: 'minimax-color.svg', logoKind: 'color', cellMask: 'minimax.svg', light: '#be185d', dark: '#f472b6' },

  // Mistral AI
  'mistral-large-4': { id: 'mistral-large-4', family: 'Mistral', logo: 'mistral-color.svg', logoKind: 'color', cellMask: 'mistral.svg', light: '#c2410c', dark: '#fb923c' },

  // xAI / Grok
  'grok-4-7': { id: 'grok-4-7', family: 'Grok', logo: 'grok.svg', logoKind: 'mask', cellMask: 'grok.svg', light: '#be123c', dark: '#fb7185' },

  // Tencent / Hunyuan
  'hy4': { id: 'hy4', family: 'Tencent', logo: 'hunyuan-color.svg', logoKind: 'color', cellMask: 'hunyuan.svg', light: '#0369a1', dark: '#38bdf8' },

  // Meituan / LongCat
  'longcat-2-5': { id: 'longcat-2-5', family: 'LongCat', logo: 'longcat-color.svg', logoKind: 'color', cellMask: 'longcat.svg', light: '#a16207', dark: '#facc15' },
};

const FAMILY_RULES: (ThemeSpec & { match: RegExp })[] = [
  // Exact frontier model aliases / leaderboard formatting variants first
  { ...FRONTIER_EXACT['gemini-4-carbon'], match: /\bgemini[- ]?4[- ]?carbon\b/i },
  { ...FRONTIER_EXACT['gemini-4-hydrogen'], match: /\bgemini[- ]?4[- ]?hydrogen\b/i },
  { ...FRONTIER_EXACT['gemini-4-argon'], match: /\bgemini[- ]?(?:4[- ]?argon|argon[- ]?4)\b/i },
  { ...FRONTIER_EXACT['gemini-3-8-flash'], match: /\bgemini[- ]?3[._-]?8[- ]?flash\b/i },

  { ...FRONTIER_EXACT['gpt-6-1-terra'], match: /\bgpt[- ]?6[._-]?1[- ]?(?:\(terra\)|terra)\b/i },
  { ...FRONTIER_EXACT['gpt-6-1-sol'], match: /\bgpt[- ]?6[._-]?1[- ]?(?:\(sol\)|sol)\b/i },
  { ...FRONTIER_EXACT['gpt-6-sol'], match: /\bgpt[- ]?(?:6|5[._-]?6)[- ]?(?:\(sol\)|sol)\b/i },
  { ...FRONTIER_EXACT['gpt-6-astra'], match: /\bgpt[- ]?6[- ]?(?:\(astra\)|astra)\b/i },
  { ...FRONTIER_EXACT['gpt-6-luna'], match: /\bgpt[- ]?(?:6|5[._-]?6)[- ]?(?:\(luna\)|luna)\b/i },

  { ...FRONTIER_EXACT['claude-opus-5-5'], match: /\b(?:claude[- ]?)?opus[- ]?5[._-]?5\b/i },
  { ...FRONTIER_EXACT['claude-sonnet-5-5'], match: /\b(?:claude[- ]?)?sonnet[- ]?5[._-]?5\b/i },
  { ...FRONTIER_EXACT['claude-fable-5-2'], match: /\b(?:claude[- ]?)?fable[- ]?5(?:[._-]?[12])?\b/i },
  { ...FRONTIER_EXACT['claude-mythos-5-2'], match: /\b(?:claude[- ]?)?mythos\b/i },
  { ...FRONTIER_EXACT['claude-haiku-5-5'], match: /\b(?:claude[- ]?)?haiku[- ]?5[._-]?5\b/i },

  { ...FRONTIER_EXACT['muse-wonder-full'], match: /\b(?:muse[- ]?|meta[- ]?)?wonder[- ]?full\b/i },
  { ...FRONTIER_EXACT['muse-wonder'], match: /\b(?:muse[- ]?|meta[- ]?)?wonder\b/i },
  { ...FRONTIER_EXACT['muse-spark-1-3'], match: /\bmuse[- ]?spark[- ]?1[._-]?[23]\b/i },
  { ...FRONTIER_EXACT['muse-spark-open'], match: /\bmuse[- ]?spark[- ]?open\b/i },
  { ...FRONTIER_EXACT['muse-ember'], match: /\b(?:muse[- ]?)?ember\b/i },

  { ...FRONTIER_EXACT['deepseek-v4-1-flash-1017'], match: /\bdeepseek[- ]?v?4[p._-]?1[- ]?flash[- ]?1017\b/i },
  { ...FRONTIER_EXACT['deepseek-v4-1-flash'], match: /\bdeepseek[- ]?v?4[p._-]?1[- ]?flash\b/i },
  { ...FRONTIER_EXACT['qwen3-8-omni-flash'], match: /\bqwen[- ]?3[._-]?8[- ]?omni[- ]?flash\b/i },
  { ...FRONTIER_EXACT['qwen4-max-preview'], match: /\bqwen[- ]?4\b/i },
  { ...FRONTIER_EXACT['kimi-k3-1-pro'], match: /\bkimi[- ]?k3[._-]?1[- ]?pro\b/i },
  { ...FRONTIER_EXACT['minimax-m3-1-flash'], match: /\bminimax[- ]?m3[p._-]?1[- ]?flash\b/i },
  { ...FRONTIER_EXACT['mistral-large-4'], match: /\bmistral[- ]?large[- ]?4\b/i },
  { ...FRONTIER_EXACT['grok-4-7'], match: /\bgrok[- ]?4[._-]?7\b/i },
  { ...FRONTIER_EXACT['hy4'], match: /\b(?:tencent[- ]?)?hy4\b/i },
  { ...FRONTIER_EXACT['longcat-2-5'], match: /\blongcat\b/i },

  // Historical / broader families (found across 2,200+ benchmark leaderboard rows)
  { id: 'gemini-pro', family: 'Gemini', logo: 'gemini-color.svg', logoKind: 'color', cellMask: 'gemini.svg', light: '#1967d2', dark: '#8ab4f8', match: /\bgemini\b(?=.*\bpro\b)/i },
  { id: 'gemini-flash', family: 'Gemini', logo: 'gemini-color.svg', logoKind: 'color', cellMask: 'gemini.svg', light: '#007b83', dark: '#5eead4', match: /\bgemini\b(?=.*\bflash\b)/i },
  { id: 'google-gemini', family: 'Gemini', logo: 'gemini-color.svg', logoKind: 'color', cellMask: 'gemini.svg', light: '#185abc', dark: '#7cacf8', match: /\bgemini\b/i },
  { id: 'google-gemma', family: 'Gemma', logo: 'gemma-color.svg', logoKind: 'color', cellMask: 'gemma.svg', light: '#1967d2', dark: '#8ab4f8', match: /\bgemma\b/i },
  { id: 'google-palm', family: 'Google', logo: 'palm-color.svg', logoKind: 'color', cellMask: null, light: '#185abc', dark: '#7cacf8', match: /\bpalm\b/i },
  { id: 'google-deepmind', family: 'DeepMind', logo: 'deepmind-color.svg', logoKind: 'color', cellMask: 'deepmind.svg', light: '#185abc', dark: '#7cacf8', match: /\bchinchilla\b|\bgraphcast\b|\bgencast\b|\bgopher\b|\bdeepmind\b/i },
  { id: 'google', family: 'Google', logo: 'google-color.svg', logoKind: 'color', cellMask: 'google.svg', light: '#185abc', dark: '#7cacf8', match: /\bgoogle\b|\bchirp\b|\bbard\b/i },

  { id: 'openai-codex', family: 'OpenAI', logo: 'codex-color.svg', logoKind: 'color', cellMask: 'codex.svg', light: '#067647', dark: '#47cd89', match: /\bcodex\b/i },
  { id: 'openai-o-series', family: 'OpenAI', logo: 'openai.svg', logoKind: 'mask', cellMask: 'openai.svg', light: '#0e7490', dark: '#67e8f9', match: /\bo[134](?:[- ](?:mini|pro|preview|high|low|medium))?\b/i },
  { id: 'openai-gpt5', family: 'OpenAI', logo: 'openai.svg', logoKind: 'mask', cellMask: 'openai.svg', light: '#067647', dark: '#47cd89', match: /\bgpt[- ]?[56]\b/i },
  { id: 'openai-gpt4', family: 'OpenAI', logo: 'openai.svg', logoKind: 'mask', cellMask: 'openai.svg', light: '#166534', dark: '#6ee7b7', match: /\bchatgpt\b|\bgpt[- ]?[234]\b|\bgpt4\b|\bgpt[- ]?realtime\b|\bgpt[- ]?transcribe\b|\bgpt[- ]?oss\b|\bopenai\b|\bwhisper\b|\bdavinci\b|\bgpt[- ]?rosalind\b|\bgpt[- ]?f\b/i },

  { id: 'claude-opus', family: 'Claude', logo: 'claude-color.svg', logoKind: 'color', cellMask: 'claude.svg', light: '#9a3412', dark: '#fb923c', match: /\bopus\b/i },
  { id: 'claude-sonnet', family: 'Claude', logo: 'claude-color.svg', logoKind: 'color', cellMask: 'claude.svg', light: '#c2410c', dark: '#fdba74', match: /\bsonnet\b/i },
  { id: 'claude-haiku', family: 'Claude', logo: 'claude-color.svg', logoKind: 'color', cellMask: 'claude.svg', light: '#a16207', dark: '#fde047', match: /\bhaiku\b/i },
  { id: 'claude', family: 'Claude', logo: 'claude-color.svg', logoKind: 'color', cellMask: 'claude.svg', light: '#b45309', dark: '#fbbf24', match: /\bclaude\b|\bfable\b|\bmythos\b/i },
  { id: 'anthropic', family: 'Anthropic', logo: 'anthropic.svg', logoKind: 'mask', cellMask: null, light: '#9a3412', dark: '#fb923c', match: /\banthrop/i },

  { id: 'meta-muse', family: 'Meta', logo: 'meta-color.svg', logoKind: 'color', cellMask: 'meta.svg', light: '#1d4ed8', dark: '#93c5fd', match: /\bmuse\b|\bglimmer\b/i },
  { id: 'meta-llama', family: 'Meta', logo: 'meta-color.svg', logoKind: 'color', cellMask: 'meta.svg', light: '#1e40af', dark: '#7dd3fc', match: /\bllama\b|\bcodellama\b|\bgalactica\b|\bmetaclip\b|\bmeta\b/i },

  { id: 'deepseek-r', family: 'DeepSeek', logo: 'deepseek-color.svg', logoKind: 'color', cellMask: 'deepseek.svg', light: '#1e3a8a', dark: '#60a5fa', match: /\bdeepseek[- ]?(?:r1|v4[- ]?pro|prover)\b/i },
  { id: 'deepseek', family: 'DeepSeek', logo: 'deepseek-color.svg', logoKind: 'color', cellMask: 'deepseek.svg', light: '#1d4ed8', dark: '#93c5fd', match: /\bdeepseek\b|\bmars?code\b/i },

  { id: 'qwen-max', family: 'Qwen', logo: 'qwen-color.svg', logoKind: 'color', cellMask: 'qwen.svg', light: '#7e22ce', dark: '#d8b4fe', match: /\bqwen\b(?=.*\bmax\b)/i },
  { id: 'qwen', family: 'Qwen', logo: 'qwen-color.svg', logoKind: 'color', cellMask: 'qwen.svg', light: '#6d28d9', dark: '#c084fc', match: /\bqwen\b|\bqwq\b/i },
  { id: 'alibaba', family: 'Alibaba', logo: 'alibaba-color.svg', logoKind: 'color', cellMask: 'alibaba.svg', light: '#c2410c', dark: '#fb923c', match: /\bmplug\b|\blingma\b|\balibaba\b/i },

  { id: 'kimi', family: 'Kimi', logo: 'kimi-color.svg', logoKind: 'color', cellMask: 'kimi.svg', light: '#0e7490', dark: '#22d3ee', match: /\bkimi\b|\bk2\.5-1t\b/i },
  { id: 'moonshot', family: 'Moonshot AI', logo: 'moonshot.svg', logoKind: 'mask', cellMask: 'moonshot.svg', light: '#0e7490', dark: '#22d3ee', match: /\bmoonshot\b/i },
  { id: 'grok', family: 'Grok', logo: 'grok.svg', logoKind: 'mask', cellMask: 'grok.svg', light: '#be123c', dark: '#fb7185', match: /\bgrok\b/i },
  { id: 'xai', family: 'xAI', logo: 'xai.svg', logoKind: 'mask', cellMask: 'xai.svg', light: '#be123c', dark: '#fb7185', match: /\bxai\b/i },
  { id: 'minimax', family: 'MiniMax', logo: 'minimax-color.svg', logoKind: 'color', cellMask: 'minimax.svg', light: '#be185d', dark: '#f472b6', match: /\bminimax\b/i },
  { id: 'mistral', family: 'Mistral', logo: 'mistral-color.svg', logoKind: 'color', cellMask: 'mistral.svg', light: '#c2410c', dark: '#fb923c', match: /\bmistral\b|\bmixtral\b|\bmagistral\b|\bdevstral\b|\bmathstral\b|\bministral\b|\bvoxtral\b/i },

  { id: 'chatglm', family: 'Zhipu', logo: 'chatglm-color.svg', logoKind: 'color', cellMask: null, light: '#0f766e', dark: '#2dd4bf', match: /\bchatglm\b|\bglm\b|\bautowebglm\b/i },
  { id: 'zhipu', family: 'Zhipu', logo: 'zhipu-color.svg', logoKind: 'color', cellMask: 'zhipu.svg', light: '#0f766e', dark: '#2dd4bf', match: /\bzhipu\b|\bz\.ai\b/i },
  { id: 'trae', family: 'Seed', logo: 'trae-color.svg', logoKind: 'color', cellMask: null, light: '#0d7a63', dark: '#47cd89', match: /\btrae\b/i },
  { id: 'doubao', family: 'Seed', logo: 'doubao-color.svg', logoKind: 'color', cellMask: 'doubao.svg', light: '#0284c7', dark: '#38bdf8', match: /\bdoubao\b|\bseed(?:1\.6|2\.0|2\.1|[- ]?oss|[- ]?thinking)?\b/i },
  { id: 'bytedance', family: 'ByteDance', logo: 'bytedance-color.svg', logoKind: 'color', cellMask: 'bytedance.svg', light: '#0284c7', dark: '#38bdf8', match: /\bbytedance\b/i },
  { id: 'hunyuan', family: 'Tencent', logo: 'hunyuan-color.svg', logoKind: 'color', cellMask: 'hunyuan.svg', light: '#0369a1', dark: '#38bdf8', match: /\bhunyuan\b/i },
  { id: 'tencent', family: 'Tencent', logo: 'tencent-color.svg', logoKind: 'color', cellMask: 'tencent.svg', light: '#0369a1', dark: '#38bdf8', match: /\btencent\b|\bvita\b/i },
  { id: 'nvidia', family: 'NVIDIA', logo: 'nvidia-color.svg', logoKind: 'color', cellMask: 'nvidia.svg', light: '#3f6212', dark: '#a3e635', match: /\bnemotron\b|\bnvlm\b|\bnvila\b|\bparakeet\b|\bnvidia\b|\baudio flamingo\b/i },
  { id: 'azure', family: 'Microsoft', logo: 'azure-color.svg', logoKind: 'color', cellMask: null, light: '#0369a1', dark: '#38bdf8', match: /\bazure\b/i },
  { id: 'microsoft', family: 'Microsoft', logo: 'microsoft-color.svg', logoKind: 'color', cellMask: 'microsoft.svg', light: '#1d4ed8', dark: '#93c5fd', match: /\bphi[- ]?[234]\b|\bmattergen\b|\bmattersim\b|\baurora\b|\bwizard|\bmicrosoft\b/i },
  { id: 'nova', family: 'Amazon', logo: 'nova-color.svg', logoKind: 'color', cellMask: null, light: '#b45309', dark: '#fbbf24', match: /\bnova\b/i },
  { id: 'amazon', family: 'Amazon', logo: 'aws-color.svg', logoKind: 'color', cellMask: null, light: '#b45309', dark: '#fbbf24', match: /\bamazon\b|\baws\b/i },
  { id: 'aya', family: 'Cohere', logo: 'aya-color.svg', logoKind: 'color', cellMask: null, light: '#9f1239', dark: '#fda4af', match: /\baya\b/i },
  { id: 'cohere', family: 'Cohere', logo: 'cohere-color.svg', logoKind: 'color', cellMask: 'cohere.svg', light: '#9f1239', dark: '#fda4af', match: /\bcommand[- ]?[ra]\b|\bcohere\b/i },
  { id: 'ibm', family: 'IBM', logo: 'ibm.svg', logoKind: 'mask', cellMask: 'ibm.svg', light: '#1e40af', dark: '#93c5fd', match: /\bgranite\b|\bibm\b/i },
  { id: 'baidu', family: 'Baidu', logo: 'wenxin-color.svg', logoKind: 'color', cellMask: null, light: '#1d4ed8', dark: '#60a5fa', match: /\bernie\b|文心一言|\bbaidu\b/i },
  { id: 'iflytek', family: 'iFlytek', logo: 'spark-color.svg', logoKind: 'color', cellMask: null, light: '#0369a1', dark: '#7dd3fc', match: /\bspark4\b|\bsparkdesk\b|\bspark\b|星火|\biflytek\b/i },
  { id: 'yi', family: '01.AI', logo: 'yi-color.svg', logoKind: 'color', cellMask: null, light: '#166534', dark: '#4ade80', match: /\byi[- ]|\b01\.ai\b/i },
  { id: 'xiaomi', family: 'Xiaomi', logo: 'xiaomimimo.svg', logoKind: 'mask', cellMask: 'xiaomimimo.svg', light: '#c2410c', dark: '#fb923c', match: /\bmimo\b|\bxiaomi\b/i },
  { id: 'stepfun', family: 'StepFun', logo: 'stepfun-color.svg', logoKind: 'color', cellMask: null, light: '#4338ca', dark: '#a5b4fc', match: /\bstep[- ]?(?:5|r1|audio)\b|\bstepfun\b/i },
  { id: 'shanghai-ai', family: 'ShanghaiAI', logo: 'internlm-color.svg', logoKind: 'color', cellMask: null, light: '#0369a1', dark: '#67e8f9', match: /\bintern(?:-s1|lm|vl|math)\b|\bshanghai ai\b/i },
  { id: 'elevenlabs', family: 'ElevenLabs', logo: 'elevenlabs.svg', logoKind: 'mask', cellMask: 'elevenlabs.svg', light: '#4338ca', dark: '#a5b4fc', match: /\belevenlabs\b|\bscribe\b/i },
  { id: 'deepgram', family: 'Deepgram', logo: 'deepgram.svg', logoKind: 'mask', cellMask: 'deepgram.svg', light: '#0f766e', dark: '#5eead4', match: /\bdeepgram\b|\bflux\b/i },
  { id: 'assemblyai', family: 'AssemblyAI', logo: 'assemblyai-color.svg', logoKind: 'color', cellMask: 'assemblyai.svg', light: '#1d4ed8', dark: '#93c5fd', match: /\bassemblyai\b/i },
  { id: 'reka', family: 'Reka', logo: 'reka.svg', logoKind: 'mask', cellMask: 'reka.svg', light: '#7e22ce', dark: '#d8b4fe', match: /\breka\b/i },
  { id: 'ai21', family: 'AI21', logo: 'ai21-brand-color.svg', logoKind: 'color', cellMask: 'ai21.svg', light: '#9f1239', dark: '#fda4af', match: /\bjamba\b|\bai21\b/i },
  { id: 'lg', family: 'LG', logo: 'lg-color.svg', logoKind: 'color', cellMask: null, light: '#991b1b', dark: '#fca5a5', match: /\bexaone\b/i },
  { id: 'openbmb', family: 'OpenBMB', logo: 'openbmb.svg', logoKind: 'color', cellMask: null, light: '#0d7a63', dark: '#5eead4', match: /\bminicpm\b|\bopenbmb\b/i },
  { id: 'inkling', family: 'Inkling', logo: 'inception.svg', logoKind: 'mask', cellMask: 'inception.svg', light: '#6d28d9', dark: '#c4b5fd', match: /\binkling\b|\bmercury\b|\blaguna\b|\binception\b/i },
  { id: 'manus', family: 'Manus', logo: 'manus.svg', logoKind: 'mask', cellMask: 'manus.svg', light: '#52525b', dark: '#d4d4d8', match: /\bmanus\b/i },
  { id: 'huawei', family: 'Huawei', logo: 'huawei-color.svg', logoKind: 'color', cellMask: null, light: '#b91c1c', dark: '#fca5a5', match: /\bpangu\b|\bhuawei\b/i },
  { id: 'baai', family: 'BAAI', logo: 'baai.svg', logoKind: 'mask', cellMask: 'baai.svg', light: '#1d4ed8', dark: '#93c5fd', match: /\bbaai\b/i },
  { id: 'baichuan', family: 'Baichuan', logo: 'baichuan-color.svg', logoKind: 'color', cellMask: null, light: '#c2410c', dark: '#fb923c', match: /\bbaichuan\b/i },
  { id: 'sensenova', family: 'SenseTime', logo: 'sensenova-color.svg', logoKind: 'color', cellMask: null, light: '#0369a1', dark: '#38bdf8', match: /\bsensenova\b|\binternvl\b/i },
  { id: 'ai2', family: 'AI2', logo: 'ai2-color.svg', logoKind: 'color', cellMask: null, light: '#9f1239', dark: '#fda4af', match: /\bolmo\b|\btulu\b|\bmolmo\b|\bai2\b/i },
  { id: 'huggingface', family: 'HuggingFace', logo: 'huggingface-color.svg', logoKind: 'color', cellMask: null, light: '#b45309', dark: '#fbbf24', match: /\bsmollm\b|\bzephyr\b|\bhuggingface\b/i },
  { id: 'llava', family: 'LLaVA', logo: 'llava-color.svg', logoKind: 'color', cellMask: null, light: '#9a3412', dark: '#fb923c', match: /\bllava\b/i },
  { id: 'antgroup', family: 'Ant Group', logo: 'antgroup-color.svg', logoKind: 'color', cellMask: null, light: '#0284c7', dark: '#38bdf8', match: /\bant group\b/i },
  { id: 'kwaipilot', family: 'Kwai', logo: 'kwaipilot-color.svg', logoKind: 'color', cellMask: null, light: '#c2410c', dark: '#fb923c', match: /\bkwai\b|\bkeye\b/i },
  { id: 'perplexity', family: 'Perplexity', logo: 'perplexity-color.svg', logoKind: 'color', cellMask: null, light: '#0f766e', dark: '#5eead4', match: /\bsonar\b|\bperplexity\b/i },
  { id: 'databricks', family: 'Databricks', logo: 'dbrx-color.svg', logoKind: 'color', cellMask: null, light: '#b91c1c', dark: '#fca5a5', match: /\bdbrx\b|\bdatabricks\b/i },
  { id: 'snowflake', family: 'Snowflake', logo: 'snowflake-color.svg', logoKind: 'color', cellMask: null, light: '#0369a1', dark: '#38bdf8', match: /\barctic\b|\bsnowflake\b/i },
  { id: 'cerebras', family: 'Cerebras', logo: 'cerebras-color.svg', logoKind: 'color', cellMask: null, light: '#9a3412', dark: '#fb923c', match: /\bcerebras\b/i },
  { id: 'groq', family: 'Groq', logo: 'groq.svg', logoKind: 'mask', cellMask: 'groq.svg', light: '#c2410c', dark: '#fb923c', match: /\bgroq\b/i },
  { id: 'upstage', family: 'Upstage', logo: 'upstage-color.svg', logoKind: 'color', cellMask: null, light: '#6d28d9', dark: '#c4b5fd', match: /\bsolar\b|\bupstage\b/i },
  { id: 'tii', family: 'TII', logo: 'tii-color.svg', logoKind: 'color', cellMask: null, light: '#4338ca', dark: '#a5b4fc', match: /\bfalcon\b/i },
  { id: 'meituan', family: 'Meituan', logo: 'meituan.ico', logoKind: 'color', cellMask: 'meituan.svg', light: '#a16207', dark: '#facc15', match: /\bmeituan\b/i },

  // Unbranded academic / baseline entries: keep color tint without simulated glyph
  { id: 'scientific', family: 'Scientific', logo: null, logoKind: null, cellMask: null, light: '#335c67', dark: '#7ec4cf', match: /\bmace\b|\bsevennet\b|\borb\b|\bchgnet\b|\balignn\b|\bequiformer\b|\bbiobert\b|\bpubmedbert\b|\bscibert\b|\bifs\b|\bmatgl\b|\bco[gn]+\b|\bpotnet\b|\bmodnet\b/i },
  { id: 'baseline', family: 'Baseline', logo: null, logoKind: null, cellMask: null, light: '#57534e', dark: '#d6d3d1', match: /\bhuman\b|\brandom\b|\bclimatology\b|\bpersistence\b|\bmean of dataset\b|\boracle\b/i },
];

const ARCHIVAL_HASH_PALETTE: { light: string; dark: string }[] = [
  { light: '#1d4ed8', dark: '#93c5fd' },
  { light: '#0f766e', dark: '#5eead4' },
  { light: '#9a3412', dark: '#fb923c' },
  { light: '#6d28d9', dark: '#c4b5fd' },
  { light: '#0369a1', dark: '#38bdf8' },
  { light: '#15803d', dark: '#86efac' },
  { light: '#9f1239', dark: '#fda4af' },
  { light: '#a16207', dark: '#facc15' },
  { light: '#4338ca', dark: '#a5b4fc' },
  { light: '#0e7490', dark: '#22d3ee' },
  { light: '#7e22ce', dark: '#d8b4fe' },
  { light: '#b45309', dark: '#fbbf24' },
];

const ORG_EXACT: Record<string, ThemeSpec> = {
  'Google DeepMind': { id: 'org-google', family: 'Google DeepMind', logo: 'deepmind-color.svg', logoKind: 'color', cellMask: 'deepmind.svg', light: '#185abc', dark: '#7cacf8' },
  OpenAI: { id: 'org-openai', family: 'OpenAI', logo: 'openai.svg', logoKind: 'mask', cellMask: 'openai.svg', light: '#067647', dark: '#47cd89' },
  Anthropic: { id: 'org-anthropic', family: 'Anthropic', logo: 'anthropic.svg', logoKind: 'mask', cellMask: null, light: '#9a3412', dark: '#fb923c' },
  Meta: { id: 'org-meta', family: 'Meta', logo: 'meta-color.svg', logoKind: 'color', cellMask: 'meta.svg', light: '#0056d2', dark: '#60a5fa' },
  DeepSeek: { id: 'org-deepseek', family: 'DeepSeek', logo: 'deepseek-color.svg', logoKind: 'color', cellMask: 'deepseek.svg', light: '#1e3a8a', dark: '#60a5fa' },
  'Alibaba Qwen': { id: 'org-qwen', family: 'Alibaba Qwen', logo: 'qwen-color.svg', logoKind: 'color', cellMask: 'qwen.svg', light: '#6d28d9', dark: '#c084fc' },
  Alibaba: { id: 'org-alibaba', family: 'Alibaba', logo: 'alibaba-color.svg', logoKind: 'color', cellMask: 'alibaba.svg', light: '#c2410c', dark: '#fb923c' },
  'Moonshot AI': { id: 'org-moonshot', family: 'Moonshot AI', logo: 'moonshot.svg', logoKind: 'mask', cellMask: 'moonshot.svg', light: '#0e7490', dark: '#22d3ee' },
  MiniMax: { id: 'org-minimax', family: 'MiniMax', logo: 'minimax-color.svg', logoKind: 'color', cellMask: 'minimax.svg', light: '#be185d', dark: '#f472b6' },
  'Mistral AI': { id: 'org-mistral', family: 'Mistral', logo: 'mistral-color.svg', logoKind: 'color', cellMask: 'mistral.svg', light: '#c2410c', dark: '#fb923c' },
  xAI: { id: 'org-xai', family: 'xAI', logo: 'xai.svg', logoKind: 'mask', cellMask: 'xai.svg', light: '#be123c', dark: '#fb7185' },
  Tencent: { id: 'org-tencent', family: 'Tencent', logo: 'tencent-color.svg', logoKind: 'color', cellMask: 'tencent.svg', light: '#0369a1', dark: '#38bdf8' },
  Meituan: { id: 'org-meituan', family: 'Meituan', logo: 'meituan.ico', logoKind: 'color', cellMask: 'meituan.svg', light: '#a16207', dark: '#facc15' },
  'Epoch AI': { id: 'org-epoch', family: 'Epoch AI', logo: 'epoch.svg', logoKind: 'color', cellMask: null, light: '#1e4e8c', dark: '#7aa8e8' },
  'Artificial Analysis': { id: 'org-aa', family: 'Artificial Analysis', logo: 'artificial-analysis.ico', logoKind: 'color', cellMask: null, light: '#0f6b63', dark: '#5cd1c5' },
  'Scale AI': { id: 'org-scale', family: 'Scale AI', logo: 'scale.svg', logoKind: 'mask', cellMask: 'scale.svg', light: '#4338ca', dark: '#a5b4fc' },
  'ARC Prize': { id: 'org-arc', family: 'ARC Prize', logo: 'arc-prize.png', logoKind: 'color', cellMask: null, light: '#b45309', dark: '#fbbf24' },
  LiveBench: { id: 'org-livebench', family: 'LiveBench', logo: 'livebench.ico', logoKind: 'color', cellMask: null, light: '#6d28d9', dark: '#c084fc' },
  BenchLM: { id: 'org-benchlm', family: 'BenchLM', logo: 'benchlm.svg', logoKind: 'color', cellMask: null, light: '#0d7a63', dark: '#2dd4bf' },
  BenchLeader: { id: 'org-benchleader', family: 'BenchLeader', logo: 'benchleader.svg', logoKind: 'color', cellMask: null, light: '#8f2d56', dark: '#f08ab3' },
  'Vals AI': { id: 'org-vals', family: 'Vals AI', logo: 'vals.svg', logoKind: 'color', cellMask: null, light: '#165d7a', dark: '#6bc5e8' },
  'Surge AI': { id: 'org-surge', family: 'Surge AI', logo: 'surge.png', logoKind: 'color', cellMask: null, light: '#9c4a1a', dark: '#f29b68' },
  'Handshake AI': { id: 'org-handshake', family: 'Handshake AI', logo: 'handshake.svg', logoKind: 'color', cellMask: null, light: '#236b42', dark: '#6dd598' },
  C5R: { id: 'org-c5r', family: 'C5R', logo: 'c5r.png', logoKind: 'color', cellMask: null, light: '#1d4ed8', dark: '#93c5fd' },
  FedScoop: { id: 'org-fedscoop', family: 'FedScoop', logo: 'fedscoop.webp', logoKind: 'color', cellMask: null, light: '#0369a1', dark: '#38bdf8' },
  HeyGen: { id: 'org-heygen', family: 'HeyGen', logo: 'heygen.ico', logoKind: 'color', cellMask: null, light: '#6d28d9', dark: '#c4b5fd' },
  ServiceNow: { id: 'org-servicenow', family: 'ServiceNow', logo: 'servicenow.webp', logoKind: 'color', cellMask: null, light: '#067647', dark: '#47cd89' },
  'Steel.dev': { id: 'org-steel', family: 'Steel.dev', logo: 'steel.svg', logoKind: 'mask', cellMask: 'steel.svg', light: '#0e7490', dark: '#22d3ee' },
  Wisedocs: { id: 'org-wisedocs', family: 'Wisedocs', logo: 'wisedocs.svg', logoKind: 'color', cellMask: null, light: '#4338ca', dark: '#a5b4fc' },
  'deepswe.datacurve.ai': { id: 'org-datacurve', family: 'Datacurve', logo: 'datacurve.svg', logoKind: 'mask', cellMask: 'datacurve.svg', light: '#0f766e', dark: '#5eead4' },
  'posttrainbench.com': { id: 'org-posttrainbench', family: 'PostTrainBench', logo: 'posttrainbench.svg', logoKind: 'color', cellMask: null, light: '#9a3412', dark: '#fb923c' },
  'frontierswe.com': { id: 'org-frontierswe', family: 'FrontierSWE', logo: null, logoKind: null, cellMask: null, light: '#4338ca', dark: '#a5b4fc' },
};

function slugify(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function hashIndex(value: string, mod: number): number {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) % mod;
}

export function resolveModelTheme(modelIdOrName: string, orgHint?: string | null): ColorTheme {
  const raw = (modelIdOrName || '').trim();
  const slug = slugify(raw);
  if (slug && FRONTIER_EXACT[slug]) return build(FRONTIER_EXACT[slug]);

  for (const rule of FAMILY_RULES) {
    if (rule.match.test(raw)) {
      return build({
        id: rule.id,
        family: rule.family,
        logo: rule.logo,
        logoKind: rule.logoKind,
        cellMask: rule.cellMask,
        light: rule.light,
        dark: rule.dark,
      });
    }
  }

  if (orgHint) {
    const orgTheme = resolveOrgTheme(orgHint);
    if (orgTheme.id !== 'org-hash') return orgTheme;
  }

  const slot = ARCHIVAL_HASH_PALETTE[hashIndex(slug || raw || 'model', ARCHIVAL_HASH_PALETTE.length)];
  return build({
    id: `model-${slug || 'item'}`,
    family: 'Model',
    logo: null,
    logoKind: null,
    cellMask: null,
    light: slot.light,
    dark: slot.dark,
  });
}

export function resolveOrgTheme(orgName: string): ColorTheme {
  const raw = (orgName || '').trim();
  if (ORG_EXACT[raw]) return build(ORG_EXACT[raw]);
  for (const rule of FAMILY_RULES) {
    if (rule.match.test(raw)) {
      return build({
        id: `org-${rule.id}`,
        family: rule.family,
        logo: rule.logo,
        logoKind: rule.logoKind,
        cellMask: rule.cellMask,
        light: rule.light,
        dark: rule.dark,
      });
    }
  }
  const slug = slugify(raw);
  const slot = ARCHIVAL_HASH_PALETTE[hashIndex(slug || raw || 'org', ARCHIVAL_HASH_PALETTE.length)];
  return build({
    id: 'org-hash',
    family: raw || 'Organization',
    logo: null,
    logoKind: null,
    cellMask: null,
    light: slot.light,
    dark: slot.dark,
  });
}
