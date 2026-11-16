export function bindToc(nav: ParentNode) {
  const links = [...nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')];
  const heads: Element[] = [];
  const byHead = new Map<Element, HTMLAnchorElement>();
  for (const link of links) {
    const id = decodeURIComponent(link.getAttribute('href')?.slice(1) ?? '');
    const head = document.getElementById(id);
    if (!head) continue;
    heads.push(head);
    byHead.set(head, link);
  }
  if (!heads.length) return;
  const mark = (head: Element) => {
    for (const link of links) link.removeAttribute('aria-current');
    byHead.get(head)?.setAttribute('aria-current', 'true');
  };
  mark(heads[0]);

  if (typeof CSS !== 'undefined' && CSS.supports?.('scroll-target-group', 'auto')) {
    const syncAria = () => {
      let current = heads[0];
      const offset = 140;
      for (const head of heads) {
        if (head.getBoundingClientRect().top <= offset) current = head;
        else break;
      }
      mark(current);
    };
    if ('onscrollend' in (window as unknown as Record<string, unknown>)) {
      window.addEventListener('scrollend', syncAria, { passive: true });
    } else {
      let timer = 0;
      window.addEventListener('scroll', () => {
        window.clearTimeout(timer);
        timer = window.setTimeout(syncAria, 120);
      }, { passive: true });
    }
    return;
  }

  if (typeof IntersectionObserver === 'undefined') return;
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) mark(visible.target);
    },
    { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.25, 1] },
  );
  for (const head of heads) observer.observe(head);
}
