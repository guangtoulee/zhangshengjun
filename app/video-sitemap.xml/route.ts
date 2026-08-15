import { SITE_URL } from "@/lib/site-metadata";

export const dynamic = "force-static";

const VIDEO_PATH = "/zhangshengjun/video/hero-cinematic-wide.mp4";
const THUMBNAIL_PATH = "/zhangshengjun/mythic-lacquer-hero-v3.jpg";

const entries = [
  {
    page: "/videos",
    title: "法主降临：黑漆山骨中的千年神公",
    description: "四幕概念影像串联张圣君显现、食桃悟道、镇邪护民与万香归宗。",
  },
  {
    page: "/zh-hant/videos",
    title: "法主降臨：黑漆山骨中的千年神公",
    description: "四幕概念影像串聯張聖君顯現、食桃悟道、鎮邪護民與萬香歸宗。",
  },
  {
    page: "/en/videos",
    title: "The Dharma Master Appears: Lord Zhang in Four Acts",
    description:
      "A four-part concept film tracing Lord Zhang's appearance, awakening, protection of the people, and living devotional network.",
  },
];

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(`${SITE_URL}${entry.page}`)}</loc>
    <video:video>
      <video:thumbnail_loc>${escapeXml(`${SITE_URL}${THUMBNAIL_PATH}`)}</video:thumbnail_loc>
      <video:title>${escapeXml(entry.title)}</video:title>
      <video:description>${escapeXml(entry.description)}</video:description>
      <video:content_loc>${escapeXml(`${SITE_URL}${VIDEO_PATH}`)}</video:content_loc>
      <video:duration>40</video:duration>
      <video:publication_date>2026-07-29T00:00:00+08:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
