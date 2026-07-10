"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpenText,
  ChevronDown,
  CirclePlay,
  Compass,
  Globe2,
  Handshake,
  MapPin,
  Menu,
  Route,
  ScrollText,
  Shield,
  Sparkles,
  Sprout,
} from "lucide-react";
import styles from "./zhangshengjun-experience.module.css";

const navItems = [
  { label: "圣境方壶", href: "#fanghu" },
  { label: "千年神公", href: "#legend" },
  { label: "法相非遗", href: "#heritage" },
  { label: "万香归宗", href: "#global" },
  { label: "影音文库", href: "#media" },
];

const heroStats = [
  ["千年+", "信仰传承"],
  ["五大谱系", "圣迹景观"],
  ["50余座", "台湾主祀宫庙"],
  ["两岸四海", "香火网络"],
];

const originSites = [
  {
    title: "方壶岩母殿",
    eyebrow: "信仰原点",
    text: "青年生活、悟道与学法传说在此重叠，使方壶岩兼具“血缘地”与“法源地”的双重神圣意义。",
    detail: "网站由此向外连接月洲出生地、金沙坐化地、石牛山显法地，以及台湾与东南亚香火网络。",
    className: "originNodeMain",
  },
  {
    title: "仙桃坪",
    eyebrow: "学法修行",
    text: "传说张圣君入山遇仙、观弈食桃，由凡入圣。天然山坪因故事附着，成为朝圣者可步入的悟道现场。",
    detail: "《游宦纪闻》《夷坚志》《三山志》对遇仙、食桃或仙笋、绝粒与预言祸福保留了不同叙述。",
    className: "originNodeA",
  },
  {
    title: "雷洞",
    eyebrow: "闾山法源",
    text: "高山雷暴与洞府空间共同强化“五雷正法”的地方想象，形成地貌、神力与科仪互相印证的圣迹。",
    detail: "闾山法与瑜伽教在民间叙事中呈双轮并行，也构成张圣君“亦道亦佛”的独特底色。",
    className: "originNodeB",
  },
  {
    title: "斗鬼洞",
    eyebrow: "除妖济世",
    text: "斗五通鬼、镇山魈的传说被嵌入岩洞与石钉，让抽象的降妖叙事转化为可见、可触、可讲述的地方物证。",
    detail: "方壶岩后殿石壁的斗法石钉等景观，体现“地以神显、神由地生”的圣迹营造逻辑。",
    className: "originNodeC",
  },
  {
    title: "天池",
    eyebrow: "山水圣境",
    text: "池、台、洞、峰与岩共同构成方壶山的自然谱系。水、雾、岩壁与飞瀑把神公传说安放在真实山川之中。",
    detail: "自然奇观不是故事的布景，而是信仰记忆持续发生的空间载体。",
    className: "originNodeD",
  },
];

const landscapeCategories = [
  ["01", "宗教场所", "庙宇、祖殿、故居与灵泉"],
  ["02", "学法修行", "仙桃坪、棋盘石与洞府"],
  ["03", "除妖济世", "斩蛇石、斗法石钉与剑痕"],
  ["04", "教派法器", "法索石、净水树与雷法意象"],
  ["05", "仪式展演", "游田、庆诞与寻根进香"],
];

const legendChapters = [
  {
    number: "01",
    title: "凡尘起步",
    subtitle: "从永福少年到山中樵夫",
    image: "/zhangshengjun/woodcutter-origin-v2.jpg",
    alt: "宋代闽中山路上的青年樵夫",
    text: "张圣君并非生而为神。民间记忆中的他四岁丧父、家境贫寒，曾放牧、采薪、制作锄柄，因而被乡人称作“张锄柄”。",
    quote: "底层的土地经验，使他成神后始终与农事、水利、疫病和普通人的生计相连。",
    more: "族谱常见北宋天圣二年（1024年）生的记载；《张圣君履历咒》等科仪系统则有南宋绍兴九年（1139年）生、淳熙十年（1183年）坐化的叙述。官网保留差异，不把民间信仰史压缩成单一答案。",
    facts: ["永泰月洲：出生记忆", "盘谷乡野：成长与劳作", "急公好义：护民性格的起点"],
  },
  {
    number: "02",
    title: "食桃悟道",
    subtitle: "入山遇仙，法脉双轮",
    image: "/zhangshengjun/peach-awakening.jpg",
    alt: "张圣君在山中遇仙食桃悟道",
    text: "采薪途中遇仙人对弈、忍苦食下半颗仙桃，是凡人命运的转折。自此绝粒、通晓异文、预言祸福，踏上修道济世之路。",
    quote: "方壶岩不是一处背景，而是生活地、悟道地与法源地叠合而成的信仰原点。",
    more: "《游宦纪闻》侧重食桃顿悟，《夷坚志》保留仙桃或仙笋与“似狂非狂”的异人特质，《三山志》强调绝粒与预言应验。民间又把他与闾山大法院、许真君及瑜伽教法相连。",
    facts: ["仙人对弈：奇遇母题", "食桃绝粒：由凡入圣", "闾山与瑜伽：亦道亦佛"],
  },
  {
    number: "03",
    title: "斩妖济世",
    subtitle: "五雷正法，护境安民",
    image: "/zhangshengjun/dharma-iconography.jpg",
    alt: "张圣君黑面披发执剑的武身法相",
    text: "斩蛇、斗五通鬼、祈雨、治疫、引水护田，一连串神迹把地方社会对荒蛮、旱灾和疫病的恐惧，转化为可亲近的护民神力。",
    quote: "他所降伏的不只是妖怪，也是闽中先民面对自然风险时最具体的焦虑。",
    more: "德化石牛山的斩蛇石、方壶岩的斗鬼洞、漳州祈雨与尤溪治疫，共同塑造了保境神、农业神、医药救助者与闾山法宗的复合身份。",
    facts: ["石牛山：斩蛇显法", "方壶岩：斗五通鬼", "祈雨治疫：济世护民"],
  },
  {
    number: "04",
    title: "坐化升天",
    subtitle: "由人而神，香火千年",
    image: "/zhangshengjun/ritual-procession.jpg",
    alt: "张圣君神像巡行田野所延续的千年香火",
    text: "地方传说中，张圣君于闽清金沙九龙潭巨石上披发跣足、持剑捻诀，坐化升天。凡人功德由此凝结为法主公神格。",
    quote: "生于月洲，寄居盘谷，修道方壶，显法石牛，成神金沙。",
    more: "宋明以来，地方志书、文人笔记、道坛科仪、朝廷封号与百姓口述共同推动神格演变，使他成为农业、商贸、医药、驱邪与法术传承的多面守护者。",
    facts: ["金沙九龙潭：坐化圣迹", "大化真人：历代尊号", "法主公：民间亲昵称谓"],
  },
];

const dharmaFeatures = [
  {
    title: "黑面圆眼",
    short: "威慑",
    text: "黑红面色与圆瞪双目，回应斗法烟熏的传说，也形成驱鬼逐疫、震慑邪祟的视觉力量。",
    className: "dharmaHotspotFace",
  },
  {
    title: "额前隆起",
    short: "神力",
    text: "额头大包既有斗法误伤的民间解释，也被信众视为慧根与法力喷薄的鲜明标记。",
    className: "dharmaHotspotForehead",
  },
  {
    title: "披发跣足",
    short: "亲民",
    text: "披发是施法时的战斗状态，赤足则保留行走山野、涉险救民的草根气质。",
    className: "dharmaHotspotFoot",
  },
  {
    title: "手执宝剑",
    short: "镇邪",
    text: "宝剑指向斩妖、护境与执法如山的神格，也延伸为民间对公义和信用的期待。",
    className: "dharmaHotspotSword",
  },
  {
    title: "麻蛇法索",
    short: "法脉",
    text: "蛇形法索把降伏妖蛇的神迹与闾山科仪法器相连，是最具辨识度的法主符号之一。",
    className: "dharmaHotspotRope",
  },
];

const divineRoles = [
  { icon: Sprout, title: "农业保护", text: "祈雨、引水、游田、护禾" },
  { icon: Handshake, title: "商业信用", text: "果商、药商与大稻埕茶商" },
  { icon: Shield, title: "法术宗师", text: "闾山法宗、驱邪与护境" },
  { icon: Sparkles, title: "医药救助", text: "寻药治疫、济困安民" },
];

const networkNodes = [
  {
    place: "方壶岩母殿",
    meta: "永泰 · 原点",
    text: "青年生活、悟道学法与契子信俗共同构成母殿的核心权重。",
    className: "networkNodeCore",
  },
  {
    place: "金沙堂祖殿",
    meta: "闽清 · 坐化",
    text: "九龙潭坐化圣迹与迎神游田，使金沙成为祭祀与农业信俗核心。",
    className: "networkNodeA",
  },
  {
    place: "石牛山",
    meta: "德化 · 显法",
    text: "斩蛇、斗法等地貌叙事强化法主公降妖护境的神格。",
    className: "networkNodeB",
  },
  {
    place: "大稻埕法主公庙",
    meta: "台北 · 商贸",
    text: "茶商与城市商业网络把法主公发展为航运、契约与诚信守护者。",
    className: "networkNodeC",
  },
  {
    place: "苏澳晋安宫",
    meta: "宜兰 · 移民",
    text: "清道光年间的移民信仰节点，见证闽台跨海迁徙与精神安顿。",
    className: "networkNodeD",
  },
  {
    place: "海外华人社群",
    meta: "东南亚 · 传播",
    text: "伴随福建移民与商贸网络，香火进入海外华人社区并持续本土化。",
    className: "networkNodeE",
  },
];

const archiveSources = [
  ["宋代笔记", "《游宦纪闻》", "遇仙食桃、预言祸福等早期叙事线索"],
  ["宋代志怪", "《夷坚志》", "仙缘、绝粒与异人形象的文本参照"],
  ["地方志书", "《三山志》", "张道人及其地方信仰的制度化记忆"],
  ["道坛抄本", "《张圣君履历咒》", "生卒、法脉与科仪身份的另一套叙事"],
];

const ritualSteps = [
  ["01", "请神出殿", "科仪开启"],
  ["02", "巡行村落", "连接家户"],
  ["03", "神轿游田", "祈丰护禾"],
  ["04", "回銮安座", "共同体重聚"],
];

function updateParallax(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
  const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  event.currentTarget.style.setProperty("--mx", x.toFixed(3));
  event.currentTarget.style.setProperty("--my", y.toFixed(3));
}

function resetParallax(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.setProperty("--mx", "0");
  event.currentTarget.style.setProperty("--my", "0");
}

function BrandMark() {
  return (
    <span className={styles.brandMark} aria-hidden="true">
      <span>法</span>
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  align = "left",
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  return (
    <div
      className={`${styles.sectionHeading} ${tone === "dark" ? styles.sectionHeadingDark : ""} ${
        align === "center" ? styles.sectionHeadingCenter : ""
      }`}
      data-reveal
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

function MoreDetails({ children, label = "展开深读" }: { children: ReactNode; label?: string }) {
  return (
    <details className={styles.moreDetails}>
      <summary>
        {label}
        <ChevronDown size={16} aria-hidden="true" />
      </summary>
      <div>{children}</div>
    </details>
  );
}

export default function ZhangShengJunExperience() {
  const [originActive, setOriginActive] = useState(0);
  const [legendActive, setLegendActive] = useState(0);
  const [dharmaActive, setDharmaActive] = useState(0);
  const [networkActive, setNetworkActive] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [headerCompact, setHeaderCompact] = useState(false);
  const legendRefs = useRef<(HTMLElement | null)[]>([]);
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
        setHeaderCompact(window.scrollY > 72);
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const legendObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.legendIndex);
        if (!Number.isNaN(index)) setLegendActive(index);
      },
      { rootMargin: "-28% 0px -42%", threshold: [0.12, 0.3, 0.55] },
    );

    legendRefs.current.forEach((element) => {
      if (element) legendObserver.observe(element);
    });
    return () => legendObserver.disconnect();
  }, []);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) mobileMenuRef.current.open = false;
  };

  return (
    <main className={styles.shell}>
      <div className={styles.scrollProgress} aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>

      <header className={`${styles.header} ${headerCompact ? styles.headerCompact : ""}`}>
        <a className={styles.brand} href="#home" aria-label="返回首页">
          <BrandMark />
          <span className={styles.brandType}>
            <strong>永泰方壶岩</strong>
            <small>张圣君母殿 · FANGHU MOTHER TEMPLE</small>
          </span>
        </a>

        <nav className={styles.nav} aria-label="网站主导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className={styles.headerAction} href="#media">
          <CirclePlay size={17} aria-hidden="true" />
          法主视界
        </a>

        <details className={styles.mobileMenu} ref={mobileMenuRef}>
          <summary aria-label="打开导航菜单">
            <Menu size={22} aria-hidden="true" />
          </summary>
          <div>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMobileMenu}>
                {item.label}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </details>
      </header>

      <section
        className={`${styles.hero} ${styles.parallaxArea}`}
        id="home"
        onPointerMove={updateParallax}
        onPointerLeave={resetParallax}
      >
        <Image
          src="/zhangshengjun/fanghu-hero.jpg"
          alt="云海、飞瀑与绝壁之间的永泰方壶岩母殿圣境"
          fill
          priority
          sizes="100vw"
          className={`${styles.heroImage} ${styles.parallaxBack}`}
        />
        <Image
          src="/zhangshengjun/overlays/mist-layer.png"
          alt=""
          width={1400}
          height={520}
          className={`${styles.heroMist} ${styles.parallaxMid}`}
          priority
          aria-hidden="true"
        />
        <Image
          src="/zhangshengjun/overlays/talisman-column.png"
          alt=""
          width={360}
          height={980}
          className={`${styles.heroTalisman} ${styles.parallaxFront}`}
          priority
          aria-hidden="true"
        />
        <div className={styles.heroShade} />
        <div className={styles.heroVertical} aria-hidden="true">
          THE SACRED ORIGIN · FUJIAN, CHINA
        </div>

        <div className={`${styles.heroContent} ${styles.parallaxContent}`}>
          <p className={styles.heroLocation}>
            <MapPin size={15} aria-hidden="true" />
            中国 · 福建 · 永泰
          </p>
          <p className={styles.heroStrap}>千年神公，根在方壶</p>
          <h1>
            永泰方壶岩
            <span>张圣君母殿</span>
          </h1>
          <p className={styles.heroCopy}>
            从闽中山野的凡人樵夫，到亦道亦佛的闾山法主；从护田祈雨，到跨越海峡与四海的共同香火。沿着圣迹，走近一位神明的诞生。
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryAction} href="#fanghu">
              开启溯源
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className={styles.secondaryAction} href="#legend">
              进入神公传奇
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={styles.heroStats} aria-label="张圣君信仰概览">
          {heroStats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <a className={styles.scrollCue} href="#fanghu" aria-label="继续向下浏览">
          <span />
          SCROLL TO TRACE
        </a>
      </section>

      <section className={styles.origin} id="fanghu">
        <div className={styles.sectionInner}>
          <SectionHeading eyebrow="01 · SACRED ORIGIN" title="天下法主，根在方壶">
            一池、三台、七洞、三峰、二十一岩。这里的山水不是传说的布景，而是“圣迹营造”的本体：自然地貌、神公叙事与日常信仰彼此嵌合。
          </SectionHeading>

          <div className={styles.originExperience} data-reveal>
            <div
              className={`${styles.originMap} ${styles.parallaxArea}`}
              onPointerMove={updateParallax}
              onPointerLeave={resetParallax}
            >
              <Image
                src="/zhangshengjun/fanghu-hero.jpg"
                alt="方壶岩圣迹交互地图背景"
                fill
                sizes="(max-width: 980px) 100vw, 68vw"
                className={`${styles.originMapImage} ${styles.parallaxBack}`}
              />
              <Image
                src="/zhangshengjun/overlays/ink-mountain.png"
                alt=""
                width={1180}
                height={520}
                className={`${styles.originInk} ${styles.parallaxMid}`}
                aria-hidden="true"
              />
              <Image
                src="/zhangshengjun/overlays/mist-layer.png"
                alt=""
                width={1400}
                height={520}
                className={`${styles.originMist} ${styles.parallaxFront}`}
                aria-hidden="true"
              />
              <div className={styles.originRoute} aria-hidden="true" />
              {originSites.map((site, index) => (
                <button
                  type="button"
                  key={site.title}
                  className={`${styles.originNode} ${styles[site.className]} ${
                    originActive === index ? styles.originNodeActive : ""
                  }`}
                  onClick={() => setOriginActive(index)}
                  aria-pressed={originActive === index}
                >
                  <span />
                  {site.title}
                </button>
              ))}
              <div className={styles.originMapLabel}>
                <Compass size={18} aria-hidden="true" />
                方壶圣迹图
              </div>
            </div>

            <aside className={styles.originStory} aria-live="polite">
              <span className={styles.storyIndex}>{String(originActive + 1).padStart(2, "0")}</span>
              <p>{originSites[originActive].eyebrow}</p>
              <h3>{originSites[originActive].title}</h3>
              <strong>{originSites[originActive].text}</strong>
              <p>{originSites[originActive].detail}</p>
              <div className={styles.originStoryRule} />
              <span className={styles.originStoryHint}>点击图中圣迹继续探索</span>
            </aside>
          </div>

          <div className={styles.landscapeRail} data-reveal>
            {landscapeCategories.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.legend} id="legend">
        <div className={styles.sectionInner}>
          <SectionHeading eyebrow="02 · LEGEND OF APOTHEOSIS" title="一个凡人，如何成为千年神公" tone="dark">
            这不是四张生平卡片，而是一条由贫寒、奇遇、修行、护民功德与地方记忆共同铺成的成神之路。继续滚动，四幕依次显现。
          </SectionHeading>

          <div className={styles.legendJourney}>
            <div className={styles.legendVisual} aria-live="polite">
              <div className={styles.legendImageStack}>
                {legendChapters.map((chapter, index) => (
                  <Image
                    key={chapter.number}
                    src={chapter.image}
                    alt={index === legendActive ? chapter.alt : ""}
                    fill
                    loading="eager"
                    sizes="(max-width: 980px) 100vw, 50vw"
                    className={`${styles.legendStageImage} ${index === legendActive ? styles.legendStageImageActive : ""}`}
                    style={{ objectPosition: index === 0 ? "38% center" : "center" }}
                    aria-hidden={index !== legendActive}
                  />
                ))}
                <div className={styles.legendVisualShade} />
                <div className={styles.legendVisualNumber}>{legendChapters[legendActive].number}</div>
                <div className={styles.legendVisualCaption}>
                  <span>CHAPTER {legendChapters[legendActive].number}</span>
                  <strong>{legendChapters[legendActive].title}</strong>
                </div>
              </div>
              <div className={styles.legendProgress}>
                {legendChapters.map((chapter, index) => (
                  <button
                    type="button"
                    key={chapter.number}
                    aria-label={`查看${chapter.title}`}
                    aria-pressed={legendActive === index}
                    className={legendActive === index ? styles.legendProgressActive : ""}
                    onClick={() => legendRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                  >
                    <span />
                    {chapter.number}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.legendSteps}>
              {legendChapters.map((chapter, index) => (
                <article
                  key={chapter.number}
                  ref={(element) => {
                    legendRefs.current[index] = element;
                  }}
                  data-legend-index={index}
                  className={legendActive === index ? styles.legendStepActive : ""}
                >
                  <div className={styles.legendMobileImage}>
                    <Image
                      src={chapter.image}
                      alt={chapter.alt}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="100vw"
                    />
                  </div>
                  <span className={styles.legendStepNumber}>{chapter.number}</span>
                  <p className={styles.legendStepSubtitle}>{chapter.subtitle}</p>
                  <h3>{chapter.title}</h3>
                  <p className={styles.legendStepText}>{chapter.text}</p>
                  <blockquote>{chapter.quote}</blockquote>
                  <ul>
                    {chapter.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                  <MoreDetails>
                    <p>{chapter.more}</p>
                  </MoreDetails>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.syncretic} aria-labelledby="syncretic-title">
        <Image
          src="/zhangshengjun/overlays/talisman-column.png"
          alt=""
          width={360}
          height={980}
          className={styles.syncreticTalisman}
          aria-hidden="true"
        />
        <div className={styles.syncreticInner} data-reveal>
          <p>THE DUAL TRADITION</p>
          <h2 id="syncretic-title">亦道 · 亦佛</h2>
          <div className={styles.syncreticColumns}>
            <article>
              <span>闾山法脉</span>
              <h3>雷霆之威</h3>
              <p>五雷正法、法索、宝剑与驱邪科仪，建立护境镇邪的行动力量。</p>
            </article>
            <div className={styles.syncreticCenter} aria-hidden="true">
              双轮
            </div>
            <article>
              <span>瑜伽教法</span>
              <h3>慈悲度世</h3>
              <p>治病、救苦、济民与普度叙事，让法术始终指向现实人生。</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.heritage} id="heritage">
        <div className={styles.sectionInner}>
          <SectionHeading eyebrow="03 · ICONOGRAPHY & LIVING HERITAGE" title="一尊法相，藏着整套民间密码" tone="dark">
            黑面、披发、跣足、宝剑与麻蛇不是装饰，而是神迹、法脉与民众愿望共同留下的视觉档案。点击法相标记，逐一解读。
          </SectionHeading>

          <div className={styles.dharmaExperience} data-reveal>
            <div
              className={`${styles.dharmaPortrait} ${styles.parallaxArea}`}
              onPointerMove={updateParallax}
              onPointerLeave={resetParallax}
            >
              <Image
                src="/zhangshengjun/dharma-iconography.jpg"
                alt="张圣君黑面披发、手执宝剑与麻蛇法索的武身法相"
                fill
                sizes="(max-width: 980px) 100vw, 62vw"
                className={styles.parallaxBack}
              />
              <div className={styles.dharmaShade} />
              {dharmaFeatures.map((feature, index) => (
                <button
                  type="button"
                  key={feature.title}
                  className={`${styles.dharmaHotspot} ${styles[feature.className]} ${
                    dharmaActive === index ? styles.dharmaHotspotActive : ""
                  }`}
                  onClick={() => setDharmaActive(index)}
                  aria-label={`解读${feature.title}`}
                  aria-pressed={dharmaActive === index}
                >
                  <span>{index + 1}</span>
                </button>
              ))}
              <div className={styles.dharmaCaption}>武身法相 · 降妖护民</div>
            </div>

            <aside className={styles.dharmaAnnotation} aria-live="polite">
              <div className={styles.dharmaAnnotationIndex}>0{dharmaActive + 1}</div>
              <p>{dharmaFeatures[dharmaActive].short}</p>
              <h3>{dharmaFeatures[dharmaActive].title}</h3>
              <p>{dharmaFeatures[dharmaActive].text}</p>
              <div className={styles.dharmaFeatureNav}>
                {dharmaFeatures.map((feature, index) => (
                  <button
                    type="button"
                    key={feature.title}
                    onClick={() => setDharmaActive(index)}
                    className={dharmaActive === index ? styles.dharmaFeatureNavActive : ""}
                    aria-label={`切换到${feature.title}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </aside>
          </div>

          <div className={styles.roleBand} data-reveal>
            {divineRoles.map((role) => {
              const Icon = role.icon;
              return (
                <article key={role.title}>
                  <Icon size={24} aria-hidden="true" />
                  <div>
                    <h3>{role.title}</h3>
                    <p>{role.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.ritual} id="ritual">
        <Image
          src="/zhangshengjun/ritual-procession.jpg"
          alt="村民抬神轿行进在田垄之间的迎神游田仪式"
          fill
          sizes="100vw"
          className={styles.ritualImage}
        />
        <div className={styles.ritualShade} />
        <div className={styles.ritualContent} data-reveal>
          <span>活态非遗 · 迎神游田</span>
          <h2>神轿走过田垄，日常山村成为神圣路径</h2>
          <p>
            夏至前后，庙宇、村巷与农田被一条巡游路线重新连接。它既祈求风调雨顺，也通过值年组织、按户协作与仪仗分工，维系乡村共同体。
          </p>
          <MoreDetails label="展开仪式逻辑">
            <p>
              农事节奏决定仪式时间，神像巡行把生产空间临时转化为圣境；村民共同筹资、分工与迎送，则让信仰成为活态的社会治理资源。
            </p>
          </MoreDetails>
        </div>
        <div className={styles.ritualRoute} data-reveal>
          {ritualSteps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.global} id="global">
        <div className={styles.sectionInner}>
          <SectionHeading eyebrow="04 · CROSS-STRAIT INCENSE ROUTES" title="从一座母殿，到一张跨海香路">
            自明清移民以来，法主公信仰由闽中山地进入台湾城市与港口，再随华人社群远播海外。点击节点，查看每一段香火如何落地。
          </SectionHeading>

          <div className={styles.networkExperience} data-reveal>
            <div className={styles.networkMap}>
              <div className={styles.networkRings} aria-hidden="true" />
              <div className={styles.networkAxis} aria-hidden="true" />
              {networkNodes.map((node, index) => (
                <button
                  type="button"
                  key={node.place}
                  className={`${styles.networkNode} ${styles[node.className]} ${
                    networkActive === index ? styles.networkNodeActive : ""
                  }`}
                  onClick={() => setNetworkActive(index)}
                  aria-pressed={networkActive === index}
                >
                  <span />
                  <strong>{node.place}</strong>
                  <small>{node.meta}</small>
                </button>
              ))}
              <div className={styles.networkMapTitle}>
                <Globe2 size={22} aria-hidden="true" />
                万香归宗图
              </div>
            </div>

            <aside className={styles.networkStory} aria-live="polite">
              <span>{String(networkActive + 1).padStart(2, "0")} / {String(networkNodes.length).padStart(2, "0")}</span>
              <p>{networkNodes[networkActive].meta}</p>
              <h3>{networkNodes[networkActive].place}</h3>
              <p>{networkNodes[networkActive].text}</p>
              <div className={styles.networkMilestones}>
                <article>
                  <strong>1827</strong>
                  <span>宜兰移民信仰线索</span>
                </article>
                <article>
                  <strong>2000—2001</strong>
                  <span>台湾信众规模化寻根</span>
                </article>
                <article>
                  <strong>今日</strong>
                  <span>两岸与海外持续进香</span>
                </article>
              </div>
            </aside>
          </div>

          <div className={styles.networkStatement} data-reveal>
            <Route size={28} aria-hidden="true" />
            <p>香路不只连接庙宇，也连接移民记忆、商贸信用、乡土身份与两岸共同的文化根脉。</p>
          </div>
        </div>
      </section>

      <section className={styles.media} id="media">
        <div className={styles.sectionInner}>
          <SectionHeading eyebrow="05 · MEDIA & ARCHIVE" title="让千年神公，进入今天的观看方式">
            网站同时服务三种阅读：二十秒看见方壶、三分钟理解传奇、三十分钟进入史料。短视频、影像策展与文献目录由此汇合。
          </SectionHeading>

          <div className={styles.mediaMosaic} data-reveal>
            <article className={styles.mediaFeature}>
              <Image src="/zhangshengjun/peach-awakening.jpg" alt="食桃悟道短视频概念画面" fill sizes="(max-width: 980px) 100vw, 58vw" />
              <div className={styles.mediaShade} />
              <div>
                <span>东方奇幻系列 · 01</span>
                <h3>仙人对弈，食桃悟道</h3>
                <p>以方壶岩实景、史料旁白与电影化重构，讲清凡人命运发生改变的一刻。</p>
                <button type="button" aria-label="食桃悟道影像正在筹备" disabled>
                  <CirclePlay size={19} aria-hidden="true" />
                  影像筹备中
                </button>
              </div>
            </article>
            <article className={styles.mediaSideTop}>
              <Image src="/zhangshengjun/woodcutter-origin-v2.jpg" alt="山中樵夫短视频概念画面" fill sizes="(max-width: 980px) 100vw, 36vw" />
              <div className={styles.mediaShade} />
              <div>
                <span>人物前传 · 02</span>
                <h3>张锄柄：神明之前的普通人</h3>
              </div>
            </article>
            <article className={styles.mediaSideBottom}>
              <Image src="/zhangshengjun/ritual-procession.jpg" alt="迎神游田纪录影像概念画面" fill sizes="(max-width: 980px) 100vw, 36vw" />
              <div className={styles.mediaShade} />
              <div>
                <span>非遗现场 · 03</span>
                <h3>游田：一条会移动的圣路</h3>
              </div>
            </article>
          </div>

          <div className={styles.archive} id="archive" data-reveal>
            <div className={styles.archiveIntro}>
              <BookOpenText size={34} aria-hidden="true" />
              <p>文库与史料</p>
              <h3>把传说放回文本，把文本放回田野</h3>
              <p>
                文库将区分古籍原文、地方志、科仪抄本、田野记录与当代研究，并明确标示生卒年、封号等材料差异。
              </p>
              <a href="mailto:info@zhangshengjun.org">
                提交史料线索
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className={styles.archiveList}>
              {archiveSources.map(([type, title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p>{type}</p>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                  <ScrollText size={21} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <BrandMark />
          <div>
            <strong>永泰方壶岩 · 张圣君母殿</strong>
            <p>天下法主，根在方壶</p>
          </div>
        </div>
        <div className={styles.footerAddress}>
          <MapPin size={18} aria-hidden="true" />
          <span>福建省福州市永泰县盘谷乡方壶山</span>
        </div>
        <nav aria-label="页脚导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <p className={styles.footerLegal}>
          © {new Date().getFullYear()} 永泰方壶岩张圣君母殿管理委员会 / 福建张圣君信仰文化研究会
        </p>
      </footer>
    </main>
  );
}
