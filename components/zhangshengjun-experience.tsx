"use client";

import Image from "next/image";
import type { PointerEvent, ReactNode } from "react";
import {
  ArrowDown,
  BookOpenText,
  ChevronRight,
  CirclePlay,
  Flame,
  Globe2,
  Handshake,
  Landmark,
  MapPinned,
  Menu,
  Mountain,
  Route,
  ScrollText,
  Shield,
  Sparkles,
  Sprout,
  Swords,
  Trees,
} from "lucide-react";
import styles from "./zhangshengjun-experience.module.css";

const navItems = [
  { label: "首页", href: "#home" },
  { label: "母殿溯源", href: "#fanghu" },
  { label: "神公传奇", href: "#legend" },
  { label: "信俗法相", href: "#heritage" },
  { label: "两岸四海", href: "#global" },
  { label: "影音文库", href: "#media" },
];

const heroStats = [
  ["千年+", "信仰传承"],
  ["五类", "圣迹景观"],
  ["两岸", "同根进香"],
  ["海外", "华人网络"],
];

const legendCards = [
  {
    icon: Trees,
    title: "凡尘起步",
    tag: "永福少年 · 山中樵夫",
    text: "张圣君民间尊称张慈观、张真君、法主公。传说他出身闽中农家，幼年家贫，曾放牧、采薪、制作锄柄，因而拥有极强的草根亲近性。",
    more: "学术与科仪材料对其生卒年有不同记载：永泰月洲张氏族谱常见北宋天圣二年（1024年）说，道坛履历咒系统则有南宋绍兴九年（1139年）生、淳熙十年（1183年）坐化的叙述。官网采用并列呈现，保留文献差异。",
  },
  {
    icon: Sparkles,
    title: "食桃悟道",
    tag: "仙人对弈 · 亦道亦佛",
    text: "入山遇仙、食桃开悟，是他由凡入圣的关键转折。方壶岩由此成为生活地、悟道地与法源地重叠的圣迹空间。",
    more: "《游宦纪闻》《夷坚志》《三山志》等叙事均保留遇仙、绝粒、预言祸福等神异线索；民间又将其法脉与闾山法、瑜伽教相连，形成亦道亦佛的复合宗教气质。",
  },
  {
    icon: Swords,
    title: "斩妖济世",
    tag: "五雷正法 · 护境安民",
    text: "传说他学成闾山正法后，斩蛇、斗五通鬼、祈雨、治疫、引水护田，将地方社会对灾害、疫病与荒蛮的恐惧转化为可亲近的护民神力。",
    more: "斩蛇石、斗鬼洞、法索剑痕、斗法石钉等景观，是神迹叙事的物质化证据。它们让信仰不只停留在故事里，而能被信众触摸、步入和反复讲述。",
  },
  {
    icon: Flame,
    title: "坐化升天",
    tag: "九龙潭畔 · 千年神公",
    text: "地方传说中，张圣君于闽清金沙九龙潭巨石上坐化升天。黑面披发、跣足执剑、蛇索绕身的武身法相，也由此凝结为民众记忆中的法主公形象。",
    more: "宋明以来，民间封号、朝廷敕封、地方志书与科仪文本共同塑造其神格，使他逐渐成为兼具农业保护、商业信用、驱邪治病和法术宗师身份的复合型神祇。",
  },
];

const originPoints = [
  {
    icon: Mountain,
    title: "地以神显",
    text: "高山险峰、丹霞岩壁、洞府灵泉与雷暴意象，强化方壶岩作为神圣修行空间的气质。",
  },
  {
    icon: Landmark,
    title: "母殿原点",
    text: "网站以永泰方壶岩母殿为叙事起点，再连接月洲、金沙、石牛山及两岸宫庙网络。",
  },
  {
    icon: ScrollText,
    title: "契子信俗",
    text: "方壶岩保留认契父的民间信俗，以文本契约和仪式关系建立神人羁绊。",
  },
];

const sacredCategories = [
  ["宗教场所", "庙宇、祖殿、故居遗址与灵泉，是信仰网络的枢纽节点。"],
  ["学法修行", "仙桃坪、棋盘石、弥勒洞等地貌，标记凡人入圣的路径。"],
  ["除妖济世", "斩蛇石、斗鬼洞、石钉与剑痕，让神迹成为可见的地方证据。"],
  ["教派法器", "法索石、净水树等意象，使闾山科仪的神力转化为空间符号。"],
  ["仪式展演", "游田、庆诞、进香巡游，在时间维度上不断激活圣迹。"],
];

const heritageDetails = [
  ["黑面圆眼", "驱邪逐疫的威慑力，也回应斗法传说中烟火熏面、双目圆瞪的民间想象。"],
  ["披发跣足", "呈现施法救民时的战斗状态，强调下界护佑、涉险济世的神格气质。"],
  ["手执宝剑", "象征法主镇邪、护境安民；与闾山科仪中的雷法、法器系统相互呼应。"],
  ["麻蛇法索", "蛇形法索连接降妖叙事与闾山法脉，突出亦道亦佛的复合信仰底色。"],
];

const roleCards = [
  {
    icon: Sprout,
    title: "农业保护神",
    text: "游田、祈雨、引水与护禾叙事，让法主公深度介入农耕秩序。",
  },
  {
    icon: Handshake,
    title: "商业信用神",
    text: "晚清以来，果商、药商、茶商等群体借法主公信仰维系契约与公义。",
  },
  {
    icon: Shield,
    title: "闾山法宗",
    text: "黑头法师、驱邪治病、镇妖收魂等科仪传统，共同构成法主公教谱系。",
  },
];

const globalRoutes = [
  { place: "永泰方壶岩母殿", note: "血缘地与法源地" },
  { place: "闽清金沙堂", note: "九龙潭坐化圣迹" },
  { place: "德化石牛山", note: "斩蛇与斗法传说" },
  { place: "台北大稻埕法主公庙", note: "茶商与城市信俗节点" },
  { place: "宜兰苏澳晋安宫", note: "清代移民信仰见证" },
  { place: "东南亚华人社群", note: "海外香火传播" },
];

const truthCards = [
  ["不是只会驱邪", "他同时承载农业、商贸、医药救助和法术宗师等多重神格。"],
  ["山川即圣殿", "方壶岩、石牛山、金沙潭把神话嵌入真实地理空间。"],
  ["亦道亦佛", "闾山法与瑜伽教双轮并行，是闽地宗教融合的典型。"],
  ["两岸同根", "台湾宫庙回祖庭进香，使信仰成为跨海文化纽带。"],
];

const mediaCards = [
  {
    eyebrow: "短视频系列 01",
    title: "深山樵夫，少而有志",
    text: "以闽中山路、锄柄、少年习武为视觉线索，建立凡人起点的亲近感。",
    image: "/zhangshengjun/peach-awakening.jpg",
  },
  {
    eyebrow: "短视频系列 02",
    title: "仙人对弈，食桃悟道",
    text: "用东方奇幻镜头表现方壶岩的悟道瞬间，适合做首批出海内容。",
    image: "/zhangshengjun/fanghu-hero.jpg",
  },
  {
    eyebrow: "短视频系列 03",
    title: "游田祈福，活态非遗",
    text: "聚焦游田、契子、进香与乡土节庆，让年轻观众看见活态信俗。",
    image: "/zhangshengjun/ritual-procession.jpg",
  },
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

function BrandSigil() {
  return (
    <svg className={styles.brandSigil} viewBox="0 0 68 68" aria-hidden="true">
      <defs>
        <linearGradient id="sigilGradient" x1="12" x2="56" y1="8" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#bf5532" />
          <stop offset="0.58" stopColor="#77251a" />
          <stop offset="1" stopColor="#3f120f" />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="58" height="58" rx="15" fill="url(#sigilGradient)" />
      <rect x="9" y="9" width="50" height="50" rx="12" fill="none" stroke="#f4d08a" strokeWidth="1.5" />
      <path
        d="M20 42c8-13 18-22 31-27M18 47c10-2 20-2 31 1M26 20c1 12 0 24-4 36M39 17c-1 13-3 25-9 38M46 28c-8 2-15 5-23 10"
        fill="none"
        stroke="#fff5d8"
        strokeLinecap="round"
        strokeWidth="3.2"
      />
      <path d="M45 18c5 4 6 8 3 13" fill="none" stroke="#f4d08a" strokeLinecap="round" strokeWidth="2.4" />
      <circle cx="48" cy="34" r="3" fill="#f4d08a" />
    </svg>
  );
}

function SectionIntro({
  eyebrow,
  title,
  children,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={`${styles.sectionIntro} ${align === "left" ? styles.sectionIntroLeft : ""}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function MorePanel({ children, label = "More" }: { children: ReactNode; label?: string }) {
  return (
    <details className={styles.morePanel}>
      <summary>
        <span>{label}</span>
        <ChevronRight size={17} aria-hidden="true" />
      </summary>
      <div>{children}</div>
    </details>
  );
}

export default function ZhangShengJunExperience() {
  return (
    <main className={styles.shell}>
      <section
        className={`${styles.hero} ${styles.parallaxArea}`}
        id="home"
        onPointerMove={updateParallax}
        onPointerLeave={resetParallax}
      >
        <Image
          src="/zhangshengjun/fanghu-hero.jpg"
          alt="永泰方壶岩母殿山水圣境"
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
          loading="eager"
          aria-hidden="true"
        />
        <Image
          src="/zhangshengjun/overlays/talisman-column.png"
          alt=""
          width={360}
          height={980}
          className={`${styles.heroTalisman} ${styles.parallaxFront}`}
          loading="eager"
          aria-hidden="true"
        />
        <div className={styles.heroVeil} />

        <header className={styles.header}>
          <a className={styles.brand} href="#home" aria-label="返回首页">
            <BrandSigil />
            <span className={styles.brandType}>
              <strong>永泰方壶岩</strong>
              <small>张圣君母殿</small>
            </span>
          </a>

          <nav className={styles.nav} aria-label="张圣君网站导航">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className={styles.watchLink} href="#media">
            <CirclePlay size={18} aria-hidden="true" />
            观看影像
          </a>

          <details className={styles.mobileMenu}>
            <summary aria-label="打开导航">
              <Menu size={22} aria-hidden="true" />
            </summary>
            <div>
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        </header>

        <div className={`${styles.heroContent} ${styles.parallaxContent}`}>
          <p className={styles.heroKicker}>千年神公 · 闾山法主 · 亦道亦佛</p>
          <h1>
            <span>永泰方壶岩</span>
            <span>张圣君母殿</span>
          </h1>
          <p className={styles.heroCopy}>
            从闽中山水间的凡人樵夫，到护佑农耕、商贸与两岸香火的法主公。这里是张圣君信仰的血缘地、法源地与万香归宗的数字原点。
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryLink} href="#fanghu">
              开启溯源之旅
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className={styles.secondaryLink} href="#legend">
              了解神公传奇
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={styles.heroStats}>
          {heroStats.map(([value, label]) => (
            <span key={label}>
              <strong>{value}</strong>
              {label}
            </span>
          ))}
        </div>
      </section>

      <section
        className={`${styles.origin} ${styles.parallaxArea}`}
        id="fanghu"
        onPointerMove={updateParallax}
        onPointerLeave={resetParallax}
      >
        <SectionIntro eyebrow="Sacred Origin" title="天下法主，根在方壶">
          永泰方壶岩是本网站的叙事原点。这里承载张圣君青年时期生活、悟道与学法的传说，也是连接闽中祖庭、两岸宫庙与海外华人社群的母殿核心。
        </SectionIntro>

        <div className={styles.originLayout}>
          <div className={styles.terrainPanel} aria-label="方壶岩圣迹示意">
            <Image
              src="/zhangshengjun/fanghu-hero.jpg"
              alt=""
              fill
              sizes="(max-width: 1080px) 100vw, 54vw"
              className={styles.terrainPhoto}
              aria-hidden="true"
            />
            <Image
              src="/zhangshengjun/overlays/ink-mountain.png"
              alt=""
              width={1180}
              height={520}
              className={`${styles.terrainMountains} ${styles.parallaxMid}`}
              aria-hidden="true"
            />
            <Image
              src="/zhangshengjun/overlays/mist-layer.png"
              alt=""
              width={1400}
              height={520}
              className={`${styles.terrainMist} ${styles.parallaxFront}`}
              aria-hidden="true"
            />
            <div className={`${styles.route} ${styles.routeOne}`} />
            <div className={`${styles.route} ${styles.routeTwo}`} />
            <div className={`${styles.route} ${styles.routeThree}`} />
            <div className={`${styles.mapNode} ${styles.nodeMain}`}>
              <MapPinned size={24} aria-hidden="true" />
              <strong>方壶岩母殿</strong>
              <span>血缘地 · 法源地</span>
            </div>
            <button className={`${styles.mapNode} ${styles.nodeA}`} type="button">
              仙桃坪
            </button>
            <button className={`${styles.mapNode} ${styles.nodeB}`} type="button">
              雷洞
            </button>
            <button className={`${styles.mapNode} ${styles.nodeC}`} type="button">
              斗鬼洞
            </button>
            <button className={`${styles.mapNode} ${styles.nodeD}`} type="button">
              天池
            </button>
          </div>

          <div className={styles.originCards}>
            {originPoints.map((point) => {
              const Icon = point.icon;
              return (
                <article className={styles.pointCard} key={point.title}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              );
            })}
            <MorePanel label="More 圣迹分类">
              <div className={styles.categoryGrid}>
                {sacredCategories.map(([title, text]) => (
                  <article key={title}>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </MorePanel>
          </div>
        </div>
      </section>

      <section className={styles.legend} id="legend">
        <SectionIntro eyebrow="Legend Timeline" title="从凡人樵夫到千年神公">
          张圣君的传奇不是高高在上的神话，而是一条由苦难、学法、护民功德与地方记忆共同铺成的成神之路。
        </SectionIntro>

        <div className={styles.legendShowcase}>
          <div
            className={`${styles.legendImage} ${styles.parallaxArea}`}
            onPointerMove={updateParallax}
            onPointerLeave={resetParallax}
          >
            <Image
              src="/zhangshengjun/peach-awakening.jpg"
              alt="张圣君食桃悟道的电影感场景"
              fill
              sizes="(max-width: 1080px) 100vw, 46vw"
              className={styles.parallaxBack}
            />
            <Image
              src="/zhangshengjun/overlays/peach-glow.png"
              alt=""
              width={420}
              height={420}
              className={`${styles.peachOverlay} ${styles.parallaxFront}`}
              aria-hidden="true"
            />
            <div className={styles.legendCaption}>
              <Sparkles size={20} aria-hidden="true" />
              <span>入山遇仙 · 食桃悟道 · 绝粒修行</span>
            </div>
          </div>

          <div className={styles.timelineGrid}>
            {legendCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <article className={styles.timelineCard} key={card.title}>
                  <div className={styles.timelineNumber}>{String(index + 1).padStart(2, "0")}</div>
                  <Icon size={22} aria-hidden="true" />
                  <span>{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <MorePanel>
                    <p>{card.more}</p>
                  </MorePanel>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.heritage} id="heritage">
        <div className={styles.splitSection}>
          <div>
            <SectionIntro eyebrow="Living Heritage" title="黑面披发，仗剑镇邪" align="left">
              张圣君的经典武身法相，将闾山法脉、降妖传说、驱邪避疫和农业护佑凝结为一尊可被民众亲近、敬畏与托付的神明形象。
            </SectionIntro>
            <div className={styles.detailList}>
              {heritageDetails.map(([title, text]) => (
                <article key={title}>
                  <Shield size={20} aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div
            className={`${styles.imageFrame} ${styles.parallaxArea}`}
            onPointerMove={updateParallax}
            onPointerLeave={resetParallax}
          >
            <Image
              src="/zhangshengjun/dharma-iconography.jpg"
              alt="张圣君黑面披发执剑法相概念图"
              fill
              sizes="(max-width: 1080px) 100vw, 54vw"
              className={styles.parallaxBack}
            />
            <Image
              src="/zhangshengjun/overlays/dharma-rope.png"
              alt=""
              width={620}
              height={420}
              className={`${styles.ropeOverlay} ${styles.parallaxFront}`}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className={styles.roleGrid}>
          {roleCards.map((role) => {
            const Icon = role.icon;
            return (
              <article key={role.title}>
                <Icon size={22} aria-hidden="true" />
                <h3>{role.title}</h3>
                <p>{role.text}</p>
              </article>
            );
          })}
        </div>

        <div className={styles.ritualBand}>
          <Image
            src="/zhangshengjun/ritual-procession.jpg"
            alt="张圣君游田进香仪式"
            width={1774}
            height={887}
          />
          <div>
            <span>Rituals & Intangible Heritage</span>
            <h3>游田祈福，护佑五谷</h3>
            <p>
              游田仪式把庙宇、村落街巷与农田连成临时圣路。神像巡游所到之处，日常生产空间被转化为祈丰、护境与凝聚乡里的神圣场域。
            </p>
            <MorePanel label="More 仪式逻辑">
              <p>
                夏至前后的农事节奏、值年组织、按户捐资、乐团仪仗与村社协作，使游田不只是宗教活动，也是地方社会治理和共同体记忆的活态机制。
              </p>
            </MorePanel>
          </div>
        </div>
      </section>

      <section className={styles.global} id="global">
        <SectionIntro eyebrow="Global Network" title="法水长流，同源同心">
          从永泰方壶岩出发，张圣君信仰连接闽中祖庭、台湾宫庙与海外华人社群。官网以“万香归宗”为核心叙事，呈现两岸同根与四海传承。
        </SectionIntro>

        <div className={styles.networkBoard}>
          <div className={styles.networkCore}>
            <Image
              src="/zhangshengjun/overlays/talisman-column.png"
              alt=""
              width={360}
              height={980}
              aria-hidden="true"
            />
            <Globe2 size={54} aria-hidden="true" />
            <strong>方壶岩母殿</strong>
            <span>万香归宗</span>
          </div>
          <div className={styles.routeList}>
            {globalRoutes.map((route, index) => (
              <article key={route.place}>
                {index < 3 ? <MapPinned size={20} aria-hidden="true" /> : <Route size={20} aria-hidden="true" />}
                <div>
                  <h3>{route.place}</h3>
                  <p>{route.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.truthStrip}>
          {truthCards.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.media} id="media">
        <SectionIntro eyebrow="Media Center" title="法主视界：短视频与文创矩阵">
          面向年轻群体和海外传播，首页预留短视频、纪录片、文创资讯与学术文库入口。真实视频素材到位后，可直接替换当前图像封面。
        </SectionIntro>

        <div className={styles.mediaGrid}>
          {mediaCards.map((item) => (
            <article className={styles.mediaCard} key={item.title}>
              <div className={styles.mediaThumb}>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 1080px) 100vw, 33vw" />
                <button type="button" aria-label={`播放${item.title}`}>
                  <CirclePlay size={20} aria-hidden="true" />
                </button>
              </div>
              <span>{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.archiveCta}>
          <div>
            <BookOpenText size={28} aria-hidden="true" />
            <h3>文库与史料</h3>
            <p>
              后续可收录宋代笔记、地方志、道坛抄本、非遗申报材料与两岸交流记录，形成面向研究者与深度爱好者的开放资料库。
            </p>
            <MorePanel label="More 文库方向">
              <ul>
                <li>《游宦纪闻》《夷坚志》《三山志》等古籍条目校勘。</li>
                <li>闾山法派、瑜伽教融合、黑头法师与法主公教研究资料。</li>
                <li>永泰、闽清、德化、台湾与海外宫庙的进香影像档案。</li>
              </ul>
            </MorePanel>
          </div>
          <a className={styles.primaryLinkDark} href="mailto:info@zhangshengjun.org">
            联系共建
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>永泰方壶岩·张圣君母殿</strong>
          <p>福建省福州市永泰县盘谷乡方壶山</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="#fanghu">母殿溯源</a>
          <a href="#heritage">信俗非遗</a>
          <a href="#media">影音文库</a>
        </div>
        <p>© {new Date().getFullYear()} 永泰方壶岩张圣君母殿管理委员会 / 福建张圣君信仰文化研究会</p>
      </footer>
    </main>
  );
}
