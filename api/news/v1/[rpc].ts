// Taiwan Monitor: news proxy to Render API
export const config = { runtime: 'edge' };

const RENDER_API = 'https://taiwan-monitor.onrender.com/api/news';

export async function POST(req: Request) {
  try {
    const resp = await fetch(RENDER_API);
    const data = await resp.json();
    const articles = (data.articles || []).map((a: any) => ({
      title: a.title || '',
      url: a.link || '',
      sourceName: a.source || '',
      publishedAt: a.pubDate || new Date().toISOString(),
      snippet: a.snippet || '',
      category: a.region === 'tw' ? 'politics' : a.region === 'cn-zh' ? 'china-news' : 'intl-cross-strait',
    }));

    const emptyCategories = {
      politics: [] as typeof articles,
      tech: [], finance: [], us: [], europe: [], middleeast: [],
      asia: [], latam: [], africa: [], oceania: [],
    };

    const byCategory: Record<string, typeof articles> = { ...emptyCategories };
    for (const a of articles) {
      const cat = a.category || 'politics';
      if (!byCategory[cat]) byCategory[cat] = [];
      byCategory[cat].push(a);
    }

    return Response.json({
      ok: true,
      result: {
        categories: Object.fromEntries(
          Object.entries(byCategory).map(([k, v]) => [k, { items: v }])
        ),
        items: articles,
      },
    });
  } catch {
    return Response.json({ ok: true, result: { categories: {}, items: [] } });
  }
}
