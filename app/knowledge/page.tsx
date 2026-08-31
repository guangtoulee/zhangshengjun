import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, LibraryBig } from "lucide-react";
import BrandSymbol from "@/components/brand-symbol";
import { knowledgeArticles, knowledgeSlugs } from "@/lib/knowledge-content";
import { SITE_URL } from "@/lib/site-metadata";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "张圣君知识文库 | 人物、方壶岩、闾山法脉与非遗信俗",
  description: "以文献辨析和田野视角系统介绍张圣君、法主公、永泰方壶岩母殿、闾山法脉、迎神游田与神像造像。",
  alternates: { canonical: "/knowledge" },
  openGraph: {
    type: "website",
    url: "/knowledge",
    title: "张圣君知识文库",
    description: "从明确问题进入人物传奇、圣地母殿、法脉科仪与活态非遗。",
    images: [{ url: "/zhangshengjun/reference-bible/master-story-props-board.jpg", width: 1600, height: 1000, alt: "张圣君知识文库" }],
  },
};

export default function KnowledgeIndexPage() {
  const articles = knowledgeSlugs.map((slug) => knowledgeArticles[slug]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "张圣君知识文库",
    description: metadata.description,
    url: `${SITE_URL}/knowledge`,
    inLanguage: "zh-CN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: `${SITE_URL}/knowledge/${article.slug}`,
      })),
    },
  };

  return (
    <main className={styles.shell}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <header className={styles.header}>
        <Link href="/" className={styles.brand}><BrandSymbol /><span><strong>张圣君</strong><small>永泰方壶岩 · 母殿</small></span></Link>
        <Link href="/news">文化资讯 <ArrowRight size={16} /></Link>
      </header>

      <section className={styles.hero}>
        <div><LibraryBig size={24} /><span>KNOWLEDGE LIBRARY · 01</span></div>
        <h1>把传说放回文本，<br />把文本放回田野。</h1>
        <p>从一个明确问题开始，理解张圣君如何从凡人进入神圣，又如何在山川、科仪、造像与跨海香火中持续生长。</p>
      </section>

      <section className={styles.indexIntro}>
        <span>首批专题</span>
        <p>每篇文章区分族谱、古籍、地方志、科仪抄本与口述传统，不把存在争议的材料压缩成唯一答案。</p>
      </section>

      <section className={styles.articles}>
        {articles.map((article, index) => (
          <Link href={`/knowledge/${article.slug}`} key={article.slug} className={styles.article}>
            <div className={styles.imageWrap}>
              <Image src={article.heroImage} alt={article.heroAlt} fill sizes="(max-width: 760px) 100vw, 50vw" />
            </div>
            <div className={styles.copy}>
              <span>{String(index + 1).padStart(2, "0")} · {article.category}</span>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <strong>阅读全文 <ArrowRight size={17} /></strong>
            </div>
          </Link>
        ))}
      </section>

      <footer className={styles.footer}>
        <Link href="/"><ArrowLeft size={17} />返回首页</Link>
        <p>© 2026 · zhangshengjun.org</p>
      </footer>
    </main>
  );
}
