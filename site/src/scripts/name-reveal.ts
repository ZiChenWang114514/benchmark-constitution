/** Show a clipped name in full on hover, keyboard focus, and tap. Unclipped names are left alone. */
export function mountNameReveal(): void {
  const panel = document.createElement('div');
  panel.className = 'name-reveal';
  panel.setAttribute('role', 'tooltip');
  panel.hidden = true;
  document.body.append(panel);
  let current: HTMLElement | null = null;
  let pinned = false;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const clipped = (host: HTMLElement) =>
    host.scrollWidth > host.clientWidth + 1 || host.scrollHeight > host.clientHeight + 1;

  const hide = () => {
    panel.hidden = true;
    pinned = false;
    current = null;
  };

  const place = (host: HTMLElement) => {
    panel.textContent = host.dataset.full || '';
    panel.hidden = false;
    const rect = host.getBoundingClientRect();
    const width = Math.min(320, window.innerWidth - 16);
    panel.style.maxWidth = `${width}px`;
    let left = rect.left;
    left = Math.max(8, Math.min(left, window.innerWidth - panel.offsetWidth - 8));
    let top = rect.bottom + 6;
    if (top + panel.offsetHeight > window.innerHeight - 8) top = Math.max(8, rect.top - panel.offsetHeight - 6);
    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
  };

  const show = (host: HTMLElement) => {
    if (!host.dataset.full || !clipped(host)) return;
    if (host.tabIndex < 0 && host.tagName !== 'A') host.tabIndex = 0;
    current = host;
    place(host);
  };

  let fromPointer = false;
  document.addEventListener('pointerdown', () => { fromPointer = true; });
  document.addEventListener('pointerover', (event) => {
    if (!fine || pinned) return;
    const host = (event.target as Element | null)?.closest<HTMLElement>('.name-block');
    if (host) show(host);
  });
  document.addEventListener('pointerout', (event) => {
    if (!fine || pinned) return;
    const host = (event.target as Element | null)?.closest('.name-block');
    if (host) hide();
  });
  document.addEventListener('focusin', (event) => {
    const host = (event.target as Element | null)?.closest<HTMLElement>('.name-block');
    if (!host) return;
    if (fromPointer) {
      fromPointer = false;
      return;
    }
    show(host);
  });
  document.addEventListener('focusout', () => {
    if (!pinned) hide();
  });
  document.addEventListener('click', (event) => {
    if (fine) return;
    const host = (event.target as Element | null)?.closest<HTMLElement>('.name-block');
    if (!host || !clipped(host)) {
      if (pinned) hide();
      return;
    }
    if (current === host && !panel.hidden) {
      const href = host instanceof HTMLAnchorElement ? host.href : '';
      hide();
      if (href) window.location.assign(href);
      return;
    }
    event.preventDefault();
    pinned = true;
    show(host);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hide();
  });
  window.addEventListener('scroll', () => { if (!panel.hidden) hide(); }, true);
  window.addEventListener('resize', () => { if (!panel.hidden && current) place(current); });
}
