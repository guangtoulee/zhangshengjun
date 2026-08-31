import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpenText, Clock3, LibraryBig } from "lucide-react";
import { getKnowledgeArticle, type KnowledgeArticle } from "@/lib/knowledge-content";
import BrandSymbol from "./brand-symbol";
import styles from "./knowledge-article.module.css";

const navigation = [
  ["神公传奇", "/legend"],
  ["闾山法脉", "/lushan"],
  ["文化资讯", "/news"],
  ["影音馆", "/videos"],
] as const;

export default function KnowledgeArticlePage({ article }: { article: KnowledgeArticle }) {
  return (
    <main className={styles.shell}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="返回首页">
          <BrandSymbol />
          <span>
            <strong>张圣君</strong>
            <small>永泰方壶岩 · 母殿</small>
          </span>
        </Link>
        <nav aria-label="主导航">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
          <Link href="/knowledge" aria-current="page">知识文库</Link>
        </nav>
      </header>

      <article>
        <section className={styles.hero}>
          <Image
            src={article.heroImage}
            alt={article.heroAlt}
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroShade} />
          <div className={styles.heroCopy}>
            <Link href="/knowledge"><LibraryBig size={17} />知识文库</Link>
            <span>{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.lead}</p>
            <div>
              <time dateTime={article.updatedAt}>更新于 2026年8月31日</time>
              <span><Clock3 size={16} />约 {article.readingMinutes} 分钟</span>
            </div>
          </div>
        </section>

        <div className={styles.articleGrid}>
          <aside className={styles.rail}>
            <span>IN THIS ARTICLE</span>
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
                {section.points ? (
                  <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>
                ) : null}
              </section>
            ))}

            <section className={styles.references} aria-labelledby="references-title">
              <BookOpenText size={25} />
              <div>
                <span>SOURCE NOTE</span>
                <h2 id="references-title">参考材料</h2>
                <ol>{article.references.map((reference) => <li key={reference}>{reference}</li>)}</ol>
                <p>民间传说、科仪文本与历史文献具有不同材料性质。本站保留版本差异，并持续补充可核验的出处与田野记录。</p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <section className={styles.related}>
        <div>
          <span>CONTINUE READING</span>
          <h2>继续进入张圣君知识谱系</h2>
        </div>
        <div className={styles.relatedGrid}>
          {article.related.map((slug) => {
            const related = getKnowledgeArticle(slug);
            return (
              <Link href={`/knowledge/${slug}`} key={slug}>
                <span>{related.category}</span>
                <strong>{related.title}</strong>
                <ArrowRight size={19} />
              </Link>
            );
          })}
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/knowledge"><ArrowLeft size={17} />返回知识文库</Link>
        <p>永泰方壶岩 · 张圣君母殿文化网站</p>
        <p>© 2026 · zhangshengjun.org</p>
      </footer>
    </main>
  );
}
