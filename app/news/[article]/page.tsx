import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsArticlePage from "@/components/news-article";
import { getNewsArticle, newsSlugs, type NewsSlug } from "@/lib/news-content";
import { SITE_URL } from "@/lib/site-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return newsSlugs.map((article) => ({ article }));
}

export async function generateMetadata({ params }: { params: Promise<{ article: string }> }): Promise<Metadata> {
  const { article: slug } = await params;
  if (!newsSlugs.includes(slug as NewsSlug)) return {};
  const article = getNewsArticle(slug as NewsSlug);
  const path = `/news/${article.slug}`;
  return {
    title: `${article.title} | 方壶动态`,
    description: article.description,
    keywords: ["方壶岩", "张圣君", "法主公", "永泰", article.category],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: article.title,
      description: article.description,
      publishedTime: article.publishedAt,
      modifiedTime: "2026-09-10",
      images: [{ url: article.heroImage, width: 1600, height: 1000, alt: article.heroAlt }],
    },
    twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [article.heroImage] },
  };
}

export default async function NewsRoute({ params }: { params: Promise<{ article: string }> }) {
  const { article: slug } = await params;
  if (!newsSlugs.includes(slug as NewsSlug)) notFound();
  const article = getNewsArticle(slug as NewsSlug);
  const url = `${SITE_URL}/news/${article.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.description,
      image: [`${SITE_URL}${article.heroImage}`],
      datePublished: article.publishedAt,
      dateModified: "2026-09-10",
      inLanguage: "zh-CN",
      mainEntityOfPage: url,
      about: { "@id": `${SITE_URL}/#zhang-shengjun` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      author: { "@type": "Organization", name: "永泰方壶岩张圣君母殿文化网站编辑部" },
      publisher: { "@id": `${SITE_URL}/#organization` },
      citation: article.sourceUrl,
      isBasedOn: article.sourceUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首页", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "文化资讯", item: `${SITE_URL}/news` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <NewsArticlePage article={article} />
    </>
  );
}
