// Taiwan Monitor — news proxy to Render relay
export const config = { runtime: 'edge' };

const RENDER_API = 'https://taiwan-monitor.onrender.com/api/news';

export async function POST(req: Request) {
  try {
    const resp = await fetch(RENDER_API);
    const data = await resp.json();
    const articles = (data.articles || []).map((a: any) => ({
      title: a.title,
      url: a.link,
      source: a.source,
      publishedAt: a.pubDate,
      snippet: a.snippet,
    }));
    return Response.json({ ok: true, result: { articles } });
  } catch {
    return Response.json({ ok: true, result: { articles: [] } });
  }
}
