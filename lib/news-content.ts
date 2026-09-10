export const newsSlugs = [
  "provincial-support-living-heritage-2026",
  "fanghu-brand-standardization-2026",
  "fanghu-cross-strait-feature-2025",
  "taiwan-youth-root-seeking-2024",
  "millennium-exchange-2024",
] as const;

export type NewsSlug = (typeof newsSlugs)[number];

export type NewsArticle = {
  slug: NewsSlug;
  category: string;
  title: string;
  description: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  publishedAt: string;
  displayDate: string;
  sourceName: string;
  sourceTitle: string;
  sourceUrl: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
    points?: string[];
  }>;
  relatedKnowledge: Array<
    "who-is-zhang-shengjun" | "fanghu-rock-mother-temple" | "lushan-double-tradition" | "youtian-field-procession"
  >;
};

export const newsArticles: Record<NewsSlug, NewsArticle> = {
  "provincial-support-living-heritage-2026": {
    slug: "provincial-support-living-heritage-2026",
    category: "政策与保护",
    title: "福建明确支持方壶岩等核心宫庙整体保护与活态传承",
    description:
      "福建省文化和旅游厅提出，推动永泰方壶岩、闽清金沙堂等核心宫庙及周边村落整体保护，建设两岸张圣君文化交流中心。",
    lead:
      "2026年5月，福建省文化和旅游厅在公开答复中，把张圣君信俗的整体保护、两岸交流品牌与文旅融合列为后续重点，方壶岩被明确纳入核心空间与台胞寻根示范点建设。",
    heroImage: "/zhangshengjun/fanghu-hero.jpg",
    heroAlt: "永泰方壶岩母殿与山林圣境",
    publishedAt: "2026-05-18",
    displayDate: "2026年5月18日",
    sourceName: "福建省文化和旅游厅",
    sourceTitle: "关于省十四届人大四次会议第1725号建议的答复",
    sourceUrl: "https://www.fujian.gov.cn/zwgk/zdlyxxgk/jytabl_1/202605/t20260520_7150187.htm",
    sections: [
      {
        title: "从单体保护走向整体保护",
        paragraphs: [
          "公开答复提出，围绕省级非物质文化遗产代表性项目“张圣君信俗”，在规划指导、专家资源和申报路径上给予支持，并推动闽清金沙堂、永泰方壶岩等核心宫庙及周边村落的整体性保护与活态传承。",
          "这意味着保护对象不只是一座建筑，也包括仪式、口述传统、社区关系、周边景观以及持续发生的日常信仰实践。",
        ],
      },
      {
        title: "建设两岸文化交流中心",
        paragraphs: [
          "答复提出发挥方壶岩、金沙祖殿作为“台胞寻根示范点”的作用，适时组织闽台青年参访祖殿与相关场所，在共同的历史记忆和信俗文化中增进了解。",
        ],
        points: ["系统开展民俗资料挖掘与文化内涵提炼", "策划闽台信俗文化交流图片展", "支持核心宫庙与周边村落活态传承", "推动形成两岸张圣君文化交流品牌"],
      },
      {
        title: "文旅与数字传播进入下一阶段",
        paragraphs: [
          "相关工作还包括串联祖殿、历史建筑与自然景观的文旅线路，支持圣君故事手绘、福宴等文创开发，并借助海内外媒体和短视频平台扩大传播。",
          "本站将持续追踪公开进展，并把政策文本、活动记录和田野资料分别归档，避免把规划目标误写成已经完成的项目。",
        ],
      },
    ],
    relatedKnowledge: ["fanghu-rock-mother-temple", "youtian-field-procession", "who-is-zhang-shengjun"],
  },
  "fanghu-brand-standardization-2026": {
    slug: "fanghu-brand-standardization-2026",
    category: "文化传承",
    title: "方壶岩开展张圣君信俗标准化与文旅品牌保护调研",
    description:
      "福州市有关调研组走进方壶岩，围绕张圣君信俗、核心祭典、文化体验与“方壶岩”等文化标识保护展开专题调研。",
    lead:
      "2026年1月，福州市市场监管部门与相关专家走进省级对台交流示范点方壶岩，调研张圣君信俗传承、两岸交流与文化品牌保护。",
    heroImage: "/zhangshengjun/reference-bible/anchors/anchor-waterfall-temple.jpg",
    heroAlt: "方壶岩飞瀑、山岩与母殿建筑意象",
    publishedAt: "2026-01-04",
    displayDate: "2026年1月4日",
    sourceName: "福州新闻网",
    sourceTitle: "福州聚焦两岸融合发展与地标升级 激活文化传承新动能",
    sourceUrl: "https://news.fznews.com.cn/fzxw/20260104/2G81R036d4.shtml",
    sections: [
      {
        title: "调研走进省级对台交流示范点",
        paragraphs: [
          "调研聚焦两岸信俗文化融合、文化标识保护与乡村文旅品牌建设。方壶岩作为张圣君信仰的重要发祥空间，也是常态化接待台湾信众的民间交流节点。",
        ],
      },
      {
        title: "研究祭典与文化体验的表达规范",
        paragraphs: [
          "报道提到对张圣君信俗历史、核心仪轨及其两岸交流功能的系统梳理，并探讨核心祭典、文化体验等环节的标准研究。标准化的目的应是保存核心信息与服务体验，而不是抹平各地传统的差异。",
        ],
      },
      {
        title: "保护“张圣君”与“方壶岩”文化标识",
        paragraphs: [
          "调研建议梳理并保护相关文化标识，防范抢注风险，同时探索信俗文化与永泰特色农业、文旅产业的结合路径。对官方网站而言，持续发布可信资料、统一名称和建立可检索档案，也是文化品牌保护的一部分。",
        ],
      },
    ],
    relatedKnowledge: ["fanghu-rock-mother-temple", "lushan-double-tradition", "who-is-zhang-shengjun"],
  },
  "fanghu-cross-strait-feature-2025": {
    slug: "fanghu-cross-strait-feature-2025",
    category: "媒体聚焦",
    title: "《福州晚报》走进方壶岩：香火同源，福佑两岸",
    description:
      "《福州晚报》“台胞寻根工程”专栏走进永泰方壶岩，报道母殿圣迹、张圣君信俗与持续多年的两岸进香交流。",
    lead:
      "2025年4月，《福州晚报》以整版报道呈现方壶岩八百余年的山寺历史、张圣君圣迹景观，以及由福建延伸至台湾的香火网络。",
    heroImage: "/zhangshengjun/mythic-lacquer-hero-v3.jpg",
    heroAlt: "黑漆山骨、朱砂雷痕与方壶岩飞瀑构成的圣境意象",
    publishedAt: "2025-04-04",
    displayDate: "2025年4月4日",
    sourceName: "福州晚报",
    sourceTitle: "方壶岩张圣君母殿：香火同源 福佑两岸",
    sourceUrl: "https://mag.fznews.com.cn/fzwb/2025/20250404/20250404_A05/news-fzwb-15882-20250404-e-005-A05-300.pdf",
    sections: [
      {
        title: "一座山寺承载八百余年香火",
        paragraphs: [
          "报道从永泰盘谷的山势与方壶寺写起，梳理方壶寺始建、重建及文物保护信息，并将其放入张圣君信仰发祥与两岸文化联系的历史脉络。",
        ],
      },
      {
        title: "圣迹把传说留在真实山川",
        paragraphs: [
          "雷洞、天师洞、剑破石、仙桃亭以及龙泉、甘露等景观，使张圣君学法、悟道和济世传说获得可以步入、观看与讲述的空间载体。",
        ],
      },
      {
        title: "跨越海峡的进香往来",
        paragraphs: [
          "报道记录了台湾多地信众赴方壶岩进香谒祖，以及方壶岩与台湾宫庙持续开展交流的情况。2024年的千年诞辰交流活动，又让两岸专家、宫庙代表与海外侨胞在方壶岩相聚。",
        ],
      },
    ],
    relatedKnowledge: ["fanghu-rock-mother-temple", "who-is-zhang-shengjun", "youtian-field-procession"],
  },
  "taiwan-youth-root-seeking-2024": {
    slug: "taiwan-youth-root-seeking-2024",
    category: "两岸交流",
    title: "方壶岩张圣君母殿入选福州“台胞寻根示范点”",
    description:
      "方壶岩张圣君母殿与金沙张圣真君祖殿等场所入选福州第二批台胞寻根示范点，为台湾青年和信众提供寻根交流空间。",
    lead:
      "2024年，福州公布第二批台胞寻根示范点，方壶岩张圣君母殿位列其中。宗祠、祖殿、文物史迹与民俗场所共同构成可进入的闽台记忆地图。",
    heroImage: "/zhangshengjun/ritual-procession.jpg",
    heroAlt: "张圣君信众与仪仗巡行的两岸文化交流意象",
    publishedAt: "2024-12-01",
    displayDate: "2024年12月1日",
    sourceName: "福州新闻网",
    sourceTitle: "青春共融！台湾青年开启闽都寻根",
    sourceUrl: "https://news.fznews.com.cn/fzxw/20241201/pw5HVxle0C.shtml",
    sections: [
      {
        title: "十七处空间组成第二批示范点",
        paragraphs: [
          "第二批示范点涵盖宗祠宫庙、人物故居与文物史迹等多种类型。方壶岩张圣君母殿与金沙张圣真君祖殿共同进入名单，呈现张圣君信仰在闽台寻根网络中的空间位置。",
        ],
      },
      {
        title: "寻根从参访转向青年交流",
        paragraphs: [
          "相关活动通过共同种植“寻根树”、分享迁徙记忆和走访文化场所，让抽象的同源叙事转化为青年可以参与的体验。",
        ],
      },
      {
        title: "母殿承担公共文化接口",
        paragraphs: [
          "成为示范点之后，方壶岩不仅服务进香，也承担资料展示、路线讲解、青年参访与跨海交流等公共文化功能。官方网站将配合建立可持续更新的活动与文献档案。",
        ],
      },
    ],
    relatedKnowledge: ["fanghu-rock-mother-temple", "who-is-zhang-shengjun", "lushan-double-tradition"],
  },
  "millennium-exchange-2024": {
    slug: "millennium-exchange-2024",
    category: "活动回顾",
    title: "福建·永泰2024闽台张圣君信俗文化交流活动在方壶岩举行",
    description:
      "以“寻根圣君故里，促进闽台融合”为主题的交流活动在方壶岩举行，两岸嘉宾、宫庙代表和学者共同见证千年圣君文化交流。",
    lead:
      "2024年8月，闽台张圣君信俗文化交流活动在永泰方壶岩开幕。仪式、学术交流、艺术演出与共同取水汇流，把千年信仰转化为当代两岸交流现场。",
    heroImage: "/zhangshengjun/reference-bible/anchors/anchor-field-palanquin.jpg",
    heroAlt: "张圣君神轿与方壶岩信俗文化交流活动意象",
    publishedAt: "2024-08-26",
    displayDate: "2024年8月26日",
    sourceName: "元丰传媒",
    sourceTitle: "尋根聖君故裡促進閩台融合：福建·永泰2024年閩台張聖君信俗文化交流活動",
    sourceUrl: "https://yuanfengmedia.tw/detail.php?id=32821&type=lastest",
    sections: [
      {
        title: "千年节点上的两岸相聚",
        paragraphs: [
          "活动以张圣君千年诞辰为文化节点，邀请两岸宫庙代表、学者和文化界人士来到方壶岩，从信俗、历史与地方社会多个角度交流。",
        ],
      },
      {
        title: "日月潭、闽江与大樟溪之水汇流",
        paragraphs: [
          "活动现场以不同水系之水汇入圣君鼎，象征跨越海峡的共同文化记忆。歌曲、仪式与现场交流共同构成一场可感知的文化叙事。",
        ],
      },
      {
        title: "活动档案将持续补充",
        paragraphs: [
          "本站将继续征集经授权的现场照片、活动议程、嘉宾名单、发言记录和影像资料，并在核验来源后补充进本页。",
        ],
      },
    ],
    relatedKnowledge: ["fanghu-rock-mother-temple", "who-is-zhang-shengjun", "youtian-field-procession"],
  },
};

export function getNewsArticle(slug: NewsSlug) {
  return newsArticles[slug];
}
