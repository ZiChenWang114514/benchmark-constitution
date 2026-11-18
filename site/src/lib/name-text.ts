export type NameMode = 'table' | 'compact';

export type NameParts = { primary: string; secondary: string };

const CURLY = /[\u2018\u2019\u201A\u201B\u2032\uFF07]/g;
const WEAK = new Set(['a', 'an', 'the', 'of', 'for', 'and', 'or', 'to', 'in', 'on', 'with', 'vs', 'via', 'by']);

export function plainName(name: string): string {
  return name.replace(CURLY, "'").replace(/\s+/g, ' ').trim();
}

function wordKey(word: string): string {
  return word.toLowerCase().replace(/[^a-z]/g, '');
}

function hyphenSplit(name: string): NameParts | null {
  if (name.includes(' ') || name.length < 18) return null;
  const parts = name.split('-').filter(Boolean);
  if (parts.length < 3) return null;
  const mid = Math.ceil(parts.length / 2);
  return { primary: parts.slice(0, mid).join('-'), secondary: parts.slice(mid).join('-') };
}

function splitPhrase(name: string, mode: NameMode): NameParts {
  const limit = mode === 'compact' ? 22 : 36;
  if (!name.includes(' ')) return hyphenSplit(name) ?? { primary: name, secondary: '' };
  const words = name.split(' ');
  const last = words[words.length - 1] ?? '';
  if (name.length > 18 && words.length >= 2 && /^v?\d+(?:\.\d+)*$/i.test(last)) {
    const primary = words.slice(0, -1).join(' ');
    if (primary.length >= 8) return { primary, secondary: last };
  }
  if (name.length <= limit) return { primary: name, secondary: '' };
  const target = mode === 'compact' ? 16 : 24;
  let bestIndex = -1;
  let bestScore = Infinity;
  for (let index = 1; index < words.length; index += 1) {
    const primary = words.slice(0, index).join(' ');
    const secondary = words.slice(index).join(' ');
    if (primary.length < 6 || secondary.length < 3) continue;
    if (WEAK.has(wordKey(words[index - 1] ?? ''))) continue;
    let score = Math.abs(primary.length - target);
    if (secondary.split(' ').length === 1 && secondary.length < 10) score += 12;
    if (primary.length > target + 14) score += 10;
    if (score < bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  }
  if (bestIndex < 0) return { primary: name, secondary: '' };
  return { primary: words.slice(0, bestIndex).join(' '), secondary: words.slice(bestIndex).join(' ') };
}

/** Split a public name into a recognizable line and a quieter qualifier. Nothing is dropped. */
export function splitName(name: string, mode: NameMode = 'table'): NameParts {
  const clean = plainName(name);
  if (!clean) return { primary: '', secondary: '' };
  const paren = /^(.*?)\s*[（(]([^()（）]+)[)）]\s*$/.exec(clean);
  if (paren) {
    const head = paren[1]?.trim() ?? '';
    const tail = paren[2]?.trim() ?? '';
    if (head.length >= 2 && tail.length >= 1) {
      const inner = splitPhrase(head, mode);
      const secondary = [inner.secondary, tail].filter(Boolean).join(' · ');
      return { primary: inner.primary || head, secondary };
    }
  }
  const spaced = /^(.*?)\s+[–—]\s+(.*)$/.exec(clean) || /^(.*?)\s+-\s+(.*)$/.exec(clean);
  if (spaced && (spaced[1]?.trim().length ?? 0) >= 2 && (spaced[2]?.trim().length ?? 0) >= 2) {
    return { primary: spaced[1]!.trim(), secondary: spaced[2]!.trim() };
  }
  const colon = /^(.*?)\s*[:：]\s+(.*)$/.exec(clean);
  if (colon && (colon[1]?.trim().length ?? 0) >= 2 && (colon[2]?.trim().length ?? 0) >= 2 && !/https?:/i.test(colon[2] ?? '')) {
    return { primary: colon[1]!.trim(), secondary: colon[2]!.trim() };
  }
  return splitPhrase(clean, mode);
}

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      default: return '&#39;';
    }
  });
}

/** Soft breaks at hyphens, slashes, and camel boundaries. CJK runs stay intact. */
export function breakHtml(value: string): string {
  return escapeHtml(value)
    .replace(/([-_/·・、，])/g, '$1<wbr>')
    .replace(/([a-z\d])([A-Z])/g, '$1<wbr>$2')
    .replace(/([A-Za-z])(\d)/g, '$1<wbr>$2');
}

export function nameBlockHtml(name: string, href = '', mode: NameMode = 'table'): string {
  const parts = splitName(name, mode);
  const body = `<span class="name-primary">${breakHtml(parts.primary)}</span>${
    parts.secondary ? `<span class="name-secondary">${breakHtml(parts.secondary)}</span>` : ''
  }`;
  const full = escapeHtml(plainName(name));
  if (href) return `<a class="name-block" href="${escapeHtml(href)}" data-full="${full}">${body}</a>`;
  return `<span class="name-block" data-full="${full}">${body}</span>`;
}
