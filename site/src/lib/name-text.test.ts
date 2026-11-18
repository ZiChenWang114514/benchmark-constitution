import assert from 'node:assert/strict';
import { test } from 'node:test';
import { breakHtml, plainName, splitName } from './name-text.ts';

test('short proper names stay on one line', () => {
  for (const name of ['GPT-6 Astra', 'Muse Wonder', 'Muse Wonder Full', 'Claude Fable 5.2', 'Grok 4.7']) {
    const parts = splitName(name, 'compact');
    assert.equal(parts.primary, name);
    assert.equal(parts.secondary, '');
  }
});

test('long hyphenated model ids keep every token, and only column headers split', () => {
  const compact = splitName('DeepSeek-V4.1-Flash-1017', 'compact');
  assert.equal(compact.primary, 'DeepSeek');
  assert.equal(compact.secondary, 'V4.1 Flash 1017');
  const table = splitName('DeepSeek-V4.1-Flash-1017');
  assert.equal(table.primary, 'DeepSeek-V4.1-Flash-1017');
  assert.equal(table.secondary, '');
  assert.equal(splitName('Terminal-Bench-Science').primary, 'Terminal-Bench-Science');
  assert.equal(splitName('GPT-6 Astra').primary, 'GPT-6 Astra');
  assert.equal(splitName('Muse Wonder').primary, 'Muse Wonder');
});

test('parenthetical qualifiers become the secondary line', () => {
  const arc = splitName('Abstraction and Reasoning Corpus for Artificial General Intelligence (ARC-AGI-2)');
  assert.match(arc.primary, /Abstraction/);
  assert.match(arc.secondary, /ARC-AGI-2/);
  assert.match(`${arc.primary} ${arc.secondary}`, /Artificial General Intelligence/);
  const mmmu = splitName('MMMU-Pro (A More Robust Multi-discipline Multimodal Understanding Benchmark)', 'compact');
  assert.equal(mmmu.primary, 'MMMU-Pro');
  assert.match(mmmu.secondary, /Multimodal Understanding Benchmark/);
  const sre = splitName('SRE Bench（SRE-Bench）');
  assert.equal(sre.primary, 'SRE Bench');
  assert.equal(sre.secondary, 'SRE-Bench');
});

test('a trailing version stays readable as the secondary line', () => {
  const parts = splitName("Agents' Last Exam v1.1", 'compact');
  assert.equal(parts.primary, "Agents' Last Exam");
  assert.equal(parts.secondary, 'v1.1');
});

test('curly apostrophes fold without dropping the name', () => {
  const parts = splitName('Humanity’s Last Exam (HLE)');
  assert.equal(plainName('Humanity’s Last Exam'), "Humanity's Last Exam");
  assert.equal(parts.primary, "Humanity's Last Exam");
  assert.equal(parts.secondary, 'HLE');
});

test('break opportunities respect CJK and markup', () => {
  assert.equal(breakHtml('模型数'), '模型数');
  assert.equal(breakHtml('用于评估模型知识应用、逻辑或常识推理能力的评测集。'), '用于评估模型知识应用、<wbr>逻辑或常识推理能力的评测集。');
  assert.equal(breakHtml('Terminal-Bench-Science'), 'Terminal-<wbr>Bench-<wbr>Science');
  assert.equal(breakHtml('GPT-6 Astra'), 'GPT-6 Astra');
  assert.equal(breakHtml('BrowseCompPlusRetrieval'), 'BrowseCompPlusRetrieval');
  assert.equal(breakHtml('AutomationBench-AA'), 'AutomationBench-AA');
  assert.equal(breakHtml('<script>'), '&lt;script&gt;');
});
