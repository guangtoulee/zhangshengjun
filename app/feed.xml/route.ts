import { newsArticles, newsSlugs } from "@/lib/news-content";
import { SITE_URL } from "@/lib/site-metadata";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    "\"": "&quot;",
  })[character] ?? character);
}

export function GET() {
  const items = newsSlugs.map((slug) => {
    const article = newsArticles[slug];
    const url = `${SITE_URL}/news/${slug}`;
    return `<item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${article.publishedAt}T00:00:00+08:00`).toUTCString()}</pubDate>
      <description>${escapeXml(article.description)}</description>
      <category>${escapeXml(article.category)}</category>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>方壶动态｜永泰方壶岩·张圣君母殿</title>
    <link>${SITE_URL}/news</link>
    <description>方壶岩母殿动态、张圣君信俗、两岸交流与文化保护公开报道。</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date("2026-09-10T00:00:00+08:00").toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
