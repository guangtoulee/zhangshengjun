import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpenText, CalendarDays, ExternalLink, Newspaper } from "lucide-react";
import { getKnowledgeArticle } from "@/lib/knowledge-content";
import type { NewsArticle } from "@/lib/news-content";
import BrandSymbol from "./brand-symbol";
import styles from "./knowledge-article.module.css";

const navigation = [
  ["神公传奇", "/legend"],
  ["闾山法脉", "/lushan"],
  ["知识文库", "/knowledge"],
  ["影音馆", "/videos"],
] as const;

export default function NewsArticlePage({ article }: { article: NewsArticle }) {
  return (
    <main className={styles.shell}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="返回首页">
          <BrandSymbol />
          <span><strong>张圣君</strong><small>永泰方壶岩 · 母殿</small></span>
        </Link>
        <nav aria-label="主导航">
          {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/news" aria-current="page">文化资讯</Link>
        </nav>
      </header>

      <article>
        <section className={styles.hero}>
          <Image src={article.heroImage} alt={article.heroAlt} fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroShade} />
          <div className={styles.heroCopy}>
            <Link href="/news"><Newspaper size={17} />方壶动态</Link>
            <span>{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.lead}</p>
            <div>
              <time dateTime={article.publishedAt}>{article.displayDate}</time>
              <span><CalendarDays size={16} />原报道日期</span>
            </div>
          </div>
        </section>

        <div className={styles.articleGrid}>
          <aside className={styles.rail}>
            <span>NEWS BRIEF</span>
            <strong>{String(article.sections.length).padStart(2, "0")}</strong>
            <nav aria-label="文章目录">
              {article.sections.map((section, index) => (
                <a key={section.title} href={`#section-${index + 1}`}>
                  {String(index + 1).padStart(2, "0")} · {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className={styles.prose}>
            <p className={styles.summary}>{article.description}</p>
            {article.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points ? <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}
              </section>
            ))}

            <section className={styles.references} aria-labelledby="source-title">
              <BookOpenText size={25} />
              <div>
                <span>SOURCE &amp; EDITORIAL NOTE</span>
                <h2 id="source-title">报道来源</h2>
                <p>本页为本站根据公开报道整理的新闻摘要，不替代原始报道。事实与日期以原文为准。</p>
                <a href={article.sourceUrl} target="_blank" rel="noreferrer">
                  {article.sourceName} · {article.sourceTitle}
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </article>

      <section className={styles.related}>
        <div><span>BACKGROUND READING</span><h2>继续理解新闻背后的文化脉络</h2></div>
        <div className={styles.relatedGrid}>
          {article.relatedKnowledge.map((slug) => {
            const related = getKnowledgeArticle(slug);
            return (
              <Link href={`/knowledge/${slug}`} key={slug}>
                <span>{related.category}</span><strong>{related.title}</strong><ArrowRight size={19} />
              </Link>
            );
          })}
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/news"><ArrowLeft size={17} />返回文化资讯</Link>
        <p>永泰方壶岩 · 张圣君母殿文化网站</p>
        <p>© 2026 · zhangshengjun.org</p>
      </footer>
    </main>
  );
}
