import { h, render, type VNode } from 'preact';

const API = 'https://taiwan-monitor.onrender.com/api/news';

interface Article {
  title: string;
  link: string;
  source: string;
  pubDate: string;
  snippet: string;
  region: string;
}

export class TaiwanNewsPanel {
  private el: HTMLElement | null = null;
  private articles: Article[] = [];
  private loading = true;
  private error = '';
  private region: string = '';

  async mount(el: HTMLElement, region?: string) {
    this.el = el;
    this.region = region || '';
    this.render();
    await this.fetchNews();
  }

  private async fetchNews() {
    this.loading = true;
    this.render();
    try {
      const url = this.region ? `${API}?region=${this.region}` : API;
      const resp = await fetch(url);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();
      this.articles = data.articles || [];
      this.error = '';
    } catch (e) {
      this.error = `無法載入新聞: ${(e as Error).message}`;
      this.articles = [];
    }
    this.loading = false;
    this.render();
  }

  private render() {
    if (!this.el) return;
    const regionLabel = this.region === 'tw' ? '台灣' : this.region === 'cn-zh' ? '中國' : this.region === 'xs' ? '兩岸' : '全部';
    const vnode = h('div', { className: 'taiwan-news-panel' },
      h('div', { className: 'tnp-header' },
        h('span', { className: 'tnp-title' }, `📰 新聞 — ${regionLabel}`),
      ),
      this.loading
        ? h('div', { className: 'tnp-loading' }, '載入中...')
        : this.error
          ? h('div', { className: 'tnp-error' }, this.error)
          : h('div', { className: 'tnp-list' },
              this.articles.map(a => h('a', {
                className: 'tnp-item',
                href: a.link,
                target: '_blank',
                rel: 'noopener',
              },
                h('span', { className: 'tnp-source' }, `[${a.source}]`),
                h('span', { className: 'tnp-article-title' }, a.title),
                a.snippet ? h('span', { className: 'tnp-snippet' }, a.snippet) : null,
              )),
            ),
    );
    render(vnode, this.el);
  }

  destroy() {
    if (this.el) {
      render(null, this.el);
      this.el = null;
    }
  }
}
