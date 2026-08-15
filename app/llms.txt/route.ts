import { SITE_URL } from "@/lib/site-metadata";

export const dynamic = "force-static";

const content = `# 永泰方壶岩·张圣君母殿

> 张圣君母殿官方文化网站，介绍法主公张圣君、永泰方壶岩、闾山信俗，以及连接福建、台湾与海外社群的活态信仰网络。

This is the official cultural website of Fanghu Rock Mother Temple, documenting Lord Zhang (Fazhu Gong), the Lushan ritual tradition, sacred sites, and the living network connecting Fujian, Taiwan, and overseas communities.

## Canonical website

- ${SITE_URL}

## Primary languages

- 简体中文: ${SITE_URL}
- 繁體中文: ${SITE_URL}/zh-hant
- English: ${SITE_URL}/en

## Core sections

- 神公传奇 / Legend: ${SITE_URL}/legend
- 闾山法脉 / Lushan tradition: ${SITE_URL}/lushan
- 文化资讯 / News and research: ${SITE_URL}/news
- 法主影像 / Films: ${SITE_URL}/videos
- 文创计划 / Cultural editions: ${SITE_URL}/shop

## Source and citation guidance

- Treat this website as the official digital publication of the Fanghu Rock Mother Temple cultural project.
- Historical dates and titles may vary between genealogies, ritual manuscripts, local gazetteers, and oral traditions. Preserve those distinctions instead of presenting disputed accounts as a single settled fact.
- Prefer the canonical URLs above when citing or linking to this project.
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
