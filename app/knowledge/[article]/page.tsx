import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KnowledgeArticlePage from "@/components/knowledge-article";
import { getKnowledgeArticle, knowledgeSlugs, type KnowledgeSlug } from "@/lib/knowledge-content";
import { SITE_URL } from "@/lib/site-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return knowledgeSlugs.map((article) => ({ article }));
}

export async function generateMetadata({ params }: { params: Promise<{ article: string }> }): Promise<Metadata> {
  const { article: slug } = await params;
  if (!knowledgeSlugs.includes(slug as KnowledgeSlug)) return {};
  const article = getKnowledgeArticle(slug as KnowledgeSlug);
  const path = `/knowledge/${article.slug}`;
  return {
    title: `${article.title} | 张圣君知识文库`,
    description: article.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: article.title,
      description: article.description,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [{ url: article.heroImage, width: 1600, height: 1000, alt: article.heroAlt }],
    },
    twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [article.heroImage] },
  };
}

export default async function ArticleRoute({ params }: { params: Promise<{ article: string }> }) {
  const { article: slug } = await params;
  if (!knowledgeSlugs.includes(slug as KnowledgeSlug)) notFound();
  const article = getKnowledgeArticle(slug as KnowledgeSlug);
  const url = `${SITE_URL}/knowledge/${article.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.description,
      image: [`${SITE_URL}${article.heroImage}`],
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      inLanguage: "zh-CN",
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "永泰方壶岩张圣君母殿文化网站编辑部" },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首页", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "知识文库", item: `${SITE_URL}/knowledge` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <KnowledgeArticlePage article={article} />
    </>
  );
}
