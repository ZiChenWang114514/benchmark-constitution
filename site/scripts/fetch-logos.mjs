import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(siteRoot, 'public', 'logos');
mkdirSync(outDir, { recursive: true });

const LOBE_TGZ = 'https://registry.npmjs.org/@lobehub/icons-static-svg/-/icons-static-svg-1.102.0.tgz';
const SI_TGZ = 'https://registry.npmjs.org/simple-icons/-/simple-icons-16.37.0.tgz';

const LOBE_FILES = [
  'gemini-color.svg', 'gemini.svg', 'deepmind-color.svg', 'deepmind.svg',
  'gemma-color.svg', 'gemma.svg', 'google-color.svg', 'google.svg', 'palm-color.svg',
  'openai.svg', 'codex-color.svg', 'codex.svg',
  'claude-color.svg', 'claude.svg', 'anthropic.svg',
  'meta-color.svg', 'meta.svg', 'metaai-color.svg',
  'deepseek-color.svg', 'deepseek.svg',
  'qwen-color.svg', 'qwen.svg', 'alibaba-color.svg', 'alibaba.svg',
  'kimi-color.svg', 'kimi.svg', 'moonshot.svg',
  'minimax-color.svg', 'minimax.svg',
  'mistral-color.svg', 'mistral.svg',
  'grok.svg', 'xai.svg',
  'hunyuan-color.svg', 'hunyuan.svg', 'tencent-color.svg', 'tencent.svg',
  'longcat-color.svg', 'longcat.svg',
  'zhipu-color.svg', 'zhipu.svg', 'chatglm-color.svg',
  'doubao-color.svg', 'doubao.svg', 'bytedance-color.svg', 'bytedance.svg', 'trae-color.svg',
  'nvidia-color.svg', 'nvidia.svg',
  'microsoft-color.svg', 'microsoft.svg', 'azure-color.svg',
  'nova-color.svg', 'aws-color.svg',
  'cohere-color.svg', 'cohere.svg', 'aya-color.svg',
  'ibm.svg',
  'wenxin-color.svg', 'baidu-color.svg',
  'spark-color.svg', 'iflytekcloud-color.svg',
  'yi-color.svg', 'zeroone-color.svg',
  'xiaomimimo.svg',
  'stepfun-color.svg',
  'internlm-color.svg',
  'elevenlabs.svg',
  'assemblyai-color.svg', 'assemblyai.svg',
  'reka.svg',
  'ai21-brand-color.svg', 'ai21.svg',
  'lg-color.svg',
  'inception.svg', 'manus.svg',
  'huawei-color.svg', 'baai.svg', 'baichuan-color.svg', 'sensenova-color.svg',
  'ai2-color.svg', 'huggingface-color.svg', 'llava-color.svg', 'antgroup-color.svg',
  'kwaipilot-color.svg', 'perplexity-color.svg', 'dbrx-color.svg', 'snowflake-color.svg',
  'cerebras-color.svg', 'groq.svg', 'upstage-color.svg', 'tii-color.svg',
];

const SI_FILES = ['deepgram.svg', 'meituan.svg', 'xiaomi.svg'];

const DIRECT_URLS = [
  ['meituan.ico', 'https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:1040877d/favicon-mt.ico'],
  ['epoch.svg', 'https://epoch.ai/favicon.svg'],
  ['artificial-analysis.ico', 'https://artificialanalysis.ai/favicon.ico'],
  ['scale.svg', 'https://scale.com/favicon.svg'],
  ['arc-prize.png', 'https://arcprize.org/media/images/favicon.png'],
  ['livebench.ico', 'https://livebench.ai/favicon.ico'],
  ['benchlm.svg', 'https://benchlm.ai/favicon.svg'],
  ['benchleader.svg', 'https://www.benchleader.com/icon.svg'],
  ['vals.svg', 'https://www.vals.ai/favicon-dark.svg'],
  ['surge.png', 'https://cdn.prod.website-files.com/68dc970bd6e945ea3fb0f426/6a5b7e19105f4fce18c0625c_surge-favicon.png'],
  ['handshake.svg', 'https://joinhandshake.com/handshake-app-icon.svg'],
  ['heygen.ico', 'https://www.heygen.com/favicon.ico'],
  ['servicenow.webp', 'https://cdn-avatars.huggingface.co/v1/production/uploads/63d3095c2727d7888cbb54e2/Uv-Lx8PVGviqokfOyYlCN.png'],
  ['steel.svg', 'https://steel.dev/icon.svg'],
  ['wisedocs.svg', 'https://cdn.prod.website-files.com/681b7c91df230659c88b003f/681b81b1b164258ffb60b3c0_32x32-white.svg'],
  ['fedscoop.webp', 'https://fedscoop.com/wp-content/uploads/sites/5/2023/01/cropped-fs_favicon-3.png?w=32'],
  ['datacurve.svg', 'https://datacurve.ai/icon.svg'],
  ['c5r.png', 'https://c5r.net/_app/immutable/assets/c5r-favicon.CUKV6Ks-.png'],
  ['posttrainbench.svg', 'https://posttrainbench.com/favicon.svg'],
  ['openbmb.svg', 'https://openbmb.cn/favicon.svg'],
];

async function downloadBuffer(url, timeoutMs = 45000) {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(timeoutMs),
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

function extractTarFiles(tgzBuf, files, label) {
  const tmpTgz = join('/tmp', `bc-${label}-${Date.now()}.tgz`);
  try {
    writeFileSync(tmpTgz, tgzBuf);
    const members = files.map((f) => `package/icons/${f}`);
    execFileSync('tar', ['-xzf', tmpTgz, '--strip-components=2', '-C', outDir, ...members], {
      stdio: 'inherit',
    });
  } finally {
    rmSync(tmpTgz, { force: true });
  }
}

function validateSavedFile(filename) {
  const full = join(outDir, filename);
  if (!existsSync(full)) throw new Error(`Missing output file: ${filename}`);
  const size = statSync(full).size;
  if (size <= 50) throw new Error(`File too small (${size} bytes): ${filename}`);
  const head = readFileSync(full).subarray(0, 256).toString('utf8').trimStart().toLowerCase();
  if (head.startsWith('<!doctype html') || head.startsWith('<html')) {
    throw new Error(`HTML error page saved instead of logo asset: ${filename}`);
  }
}

async function main() {
  console.log('Downloading @lobehub/icons-static-svg tarball...');
  const lobeTgz = await downloadBuffer(LOBE_TGZ);
  extractTarFiles(lobeTgz, LOBE_FILES, 'lobe');

  console.log('Downloading simple-icons tarball...');
  const siTgz = await downloadBuffer(SI_TGZ);
  extractTarFiles(siTgz, SI_FILES, 'si');

  console.log('Downloading official favicons and SVG logos...');
  const results = await Promise.allSettled(
    DIRECT_URLS.map(async ([filename, url]) => {
      const buf = await downloadBuffer(url);
      writeFileSync(join(outDir, filename), buf);
      return filename;
    }),
  );

  for (let i = 0; i < results.length; i += 1) {
    const r = results[i];
    if (r.status === 'rejected') {
      throw new Error(`Failed direct download ${DIRECT_URLS[i][0]}: ${r.reason?.message || r.reason}`);
    }
  }

  const allFiles = [...LOBE_FILES, ...SI_FILES, ...DIRECT_URLS.map(([f]) => f)];
  for (const file of allFiles) validateSavedFile(file);
  console.log(`Verified ${allFiles.length} official logo assets in ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
