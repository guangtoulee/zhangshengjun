export const knowledgeSlugs = [
  "who-is-zhang-shengjun",
  "fanghu-rock-mother-temple",
  "lushan-double-tradition",
  "youtian-field-procession",
  "zhang-shengjun-iconography",
  "birth-year-sources",
] as const;

export type KnowledgeSlug = (typeof knowledgeSlugs)[number];

export type KnowledgeArticle = {
  slug: KnowledgeSlug;
  category: string;
  title: string;
  description: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  sections: Array<{
    title: string;
    paragraphs: string[];
    points?: string[];
  }>;
  references: string[];
  related: KnowledgeSlug[];
};

export const knowledgeArticles: Record<KnowledgeSlug, KnowledgeArticle> = {
  "who-is-zhang-shengjun": {
    slug: "who-is-zhang-shengjun",
    category: "人物与信仰",
    title: "张圣君是谁？从“张锄柄”到法主公的千年传奇",
    description:
      "张圣君又称张慈观、张真君、法主公。本文从凡人履历、食桃悟道、护民神迹和多重神格解释这位闽台重要民间神祇。",
    lead:
      "张圣君并非生而为神。传说中的他从闽中山野出发，经历贫寒劳作、入山遇仙、学法济世与坐化升天，最终成为兼具农业、医疗、商贸信用和驱邪护境职能的复合型神祇。",
    heroImage: "/zhangshengjun/woodcutter-origin-v2.jpg",
    heroAlt: "闽中山野中的青年樵夫张圣君",
    publishedAt: "2026-08-31",
    updatedAt: "2026-08-31",
    readingMinutes: 7,
    sections: [
      {
        title: "凡人履历为何重要",
        paragraphs: [
          "族谱与地方传说常把张圣君的早年放在永泰月洲、盘谷一带。他幼年丧父，随母迁居，少年时放牧、采薪、制作锄柄，因而留下“张锄柄”的民间称呼。",
          "这段底层生活不是传奇的陪衬。它让张圣君的神格始终与土地、水利、疫病和普通人的生计相连，也解释了信众为何把他视为亲近乡野的护民之神。",
        ],
      },
      {
        title: "从食桃悟道到学法济世",
        paragraphs: [
          "宋代笔记和地方志保存了遇仙对弈、获赠仙桃或仙笋、绝粒修行与预言祸福等不同版本。方壶岩的仙桃坪、棋盘石等地貌，又把这些叙事固定在可以步入和触摸的真实山川中。",
          "后世传说进一步把他与闾山大法院、许真君、五雷法和瑜伽教法相连，形成“亦道亦佛”的地方宗教身份。",
        ],
      },
      {
        title: "法主公有哪些神格",
        paragraphs: [
          "张圣君的神迹大多回应现实风险：斩蛇与斗鬼对应山林和疫病恐惧，祈雨与引水对应农耕社会的旱涝压力，寻药治疫对应民众最直接的生命需要。",
        ],
        points: ["农业保护神：祈雨、治水、护田与游田祈丰", "保境与驱邪之神：斩妖、镇煞、护佑乡里", "商贸信用守护者：随移民和商帮进入城市商业空间", "闾山法主：成为法主公教重要的祖师性神祇"],
      },
      {
        title: "一条跨越海峡的香路",
        paragraphs: [
          "张圣君信仰随福建移民进入台湾和东南亚，在港口、商贸中心与乡村社会获得新的地方意义。今天的寻根进香，把永泰方壶岩、闽清金沙及台湾宫庙连接成持续往来的文化网络。",
          "理解张圣君，既要阅读神话，也要看见迁徙、农耕、商业和地方社会如何共同塑造一位千年神公。",
        ],
      },
    ],
    references: ["《游宦纪闻》", "《夷坚志》", "《三山志》", "《张圣君履历咒》及相关科仪抄本", "《永泰县志（1986—2005）》"],
    related: ["birth-year-sources", "fanghu-rock-mother-temple", "zhang-shengjun-iconography"],
  },
  "fanghu-rock-mother-temple": {
    slug: "fanghu-rock-mother-temple",
    category: "圣地与祖庭",
    title: "方壶岩为何被称为张圣君母殿？",
    description:
      "从血缘地、法源地、圣迹景观与契子信俗四个层面，解释永泰方壶岩在张圣君信仰网络中的母殿地位。",
    lead:
      "永泰方壶岩并非只是供奉张圣君的一座庙宇。青年生活、悟道学法、自然圣迹和活态仪式在这里重叠，使它成为信众理解张圣君信仰源头的重要空间。",
    heroImage: "/zhangshengjun/fanghu-hero.jpg",
    heroAlt: "永泰方壶岩母殿与山林圣境",
    publishedAt: "2026-08-31",
    updatedAt: "2026-08-31",
    readingMinutes: 6,
    sections: [
      {
        title: "“母殿”指向怎样的源头",
        paragraphs: [
          "在民间信仰语境中，母殿不只是建筑称谓，更强调孕育、发源与分香网络的原点。方壶岩承载张圣君青年时期生活、悟道与学法的传说，兼具“血缘地”与“法源地”的双重意义。",
          "网站以方壶岩为叙事原点，再向月洲出生地、金沙坐化地、石牛山显法地以及台湾和海外宫庙展开。",
        ],
      },
      {
        title: "山川如何成为圣迹",
        paragraphs: [
          "方壶岩的丹霞岩壁、天池、仙桃坪、雷洞、斗鬼洞等自然地貌，被食桃悟道、修炼雷法和斗法镇邪的故事反复解释。自然不是神话的背景，而是神话得以被看见和记忆的物质证据。",
        ],
        points: ["仙桃坪：遇仙、对弈与食桃悟道的叙事现场", "雷洞：修炼五雷法的地方记忆", "斗鬼洞与斗法石钉：降伏邪祟的物质化印记", "天池与灵泉：山水圣性和济世功能的结合"],
      },
      {
        title: "契子信俗构成神人关系",
        paragraphs: [
          "方壶岩保留认张圣君为“契父”的信俗。信众通过契约、仪式和长期往来建立超越血缘的神人关系，祈求平安、成长与家业兴旺。",
          "这种关系让母殿不只在庆典时被激活，也持续进入个人生命礼俗和家庭记忆。",
        ],
      },
      {
        title: "母殿与天下祖庭并非排他关系",
        paragraphs: [
          "张圣君信仰拥有多个重要圣地。方壶岩、闽清金沙、德化石牛山分别承载修行、坐化和显法等叙事。理解母殿地位，不需要抹去其他祖庭，而应看见不同地点在完整成神路径中的分工。",
        ],
      },
    ],
    references: ["《永泰县志（1986—2005）》", "方壶岩摩崖石刻与地方文物资料", "张圣君信俗相关田野调查", "福州地方媒体关于方壶岩母殿的报道"],
    related: ["who-is-zhang-shengjun", "lushan-double-tradition", "youtian-field-procession"],
  },
  "lushan-double-tradition": {
    slug: "lushan-double-tradition",
    category: "法脉与科仪",
    title: "闾山派与张圣君：什么是“亦道亦佛”的双轮法脉？",
    description:
      "解释张圣君、闾山大法院、五雷法与瑜伽教法的关系，并区分民间传说、科仪传统和学术研究中的不同表述。",
    lead:
      "张圣君信仰很难被单一宗教标签概括。道教雷法、地方巫法与佛教瑜伽教法在福建长期交汇，形成既有雷霆威仪、又强调慈悲济世的实践传统。",
    heroImage: "/zhangshengjun/dharma-iconography.jpg",
    heroAlt: "张圣君武身法相与闾山法器",
    publishedAt: "2026-08-31",
    updatedAt: "2026-08-31",
    readingMinutes: 7,
    sections: [
      {
        title: "闾山不是一座简单的地理山峰",
        paragraphs: [
          "在闽地科仪传统中，闾山更常作为法脉祖源和神圣空间被召唤。民间叙事把张圣君与许旌阳、闾山大法院和五雷心法相连，使其成为法主公教的重要法主。",
          "这些说法来自传说、仪式文本与地方记忆，不宜被简化为现代宗派组织意义上的统一谱系。",
        ],
      },
      {
        title: "五雷法回应地方社会的风险",
        paragraphs: [
          "雷法意象与高山雷暴、祈雨治旱、驱邪治疫紧密相连。所谓“法”不仅是神秘能力，也是一套传统社会处理疾病、灾害、心理安定和社区秩序的文化方法。",
        ],
      },
      {
        title: "瑜伽教法为何不是现代瑜伽",
        paragraphs: [
          "这里的瑜伽教法指向佛教密教传统南传后与地方巫法、道法交融的科仪体系，并非今天以体式训练为主的瑜伽运动。相关研究常以“瑜伽、闾山双轮并行”概括其复合特征。",
          "因此，张圣君法相既有持剑镇邪的威猛，也保留治病救民、慈悲度世的价值取向。",
        ],
      },
      {
        title: "如何读懂法剑与法索",
        paragraphs: [
          "法剑象征执法、镇邪与公义；蛇形麻索则连接降蛇传说、护法意象和科仪实践。器物不是奇幻装饰，而是把神迹、仪式和身份凝结成可识别视觉符号的媒介。",
        ],
      },
    ],
    references: ["闾山派与法主公教相关科仪文献", "《张圣君履历咒》", "闽台道教与瑜伽教法研究", "地方庙志与法师口述材料"],
    related: ["zhang-shengjun-iconography", "who-is-zhang-shengjun", "fanghu-rock-mother-temple"],
  },
  "youtian-field-procession": {
    slug: "youtian-field-procession",
    category: "非遗与仪式",
    title: "迎神游田是什么？张圣君农业神信俗的活态现场",
    description:
      "介绍闽清、永泰等地迎神游田的时间、路线、农业逻辑和社区组织，理解张圣君为何被奉为农业保护神。",
    lead:
      "迎神游田不是把神像简单抬到田里。庙宇、村巷与田垄被巡游连接成一条临时圣路，祈丰、农事检查、社区协作和地方记忆在同一仪式中发生。",
    heroImage: "/zhangshengjun/ritual-procession.jpg",
    heroAlt: "张圣君神轿巡行田野的迎神游田仪式",
    publishedAt: "2026-08-31",
    updatedAt: "2026-08-31",
    readingMinutes: 6,
    sections: [
      {
        title: "为什么要在夏至前后游田",
        paragraphs: [
          "一些地方的游田仪式安排在农历六月、夏至前后。此时插秧等阶段性农事接近完成，村民通过巡田祈求避虫、防旱和五谷丰登，也借机观察田间水利与作物状况。",
          "不同村落的日期和仪程并不完全相同，记录时应保留具体地点、年份和主持群体，避免把一种地方做法概括为全部传统。",
        ],
      },
      {
        title: "一条会移动的神圣路径",
        paragraphs: [
          "神像从庙宇出发，经过街巷、村界和田垄，再回到庙中。巡游所到之处，日常生产空间被暂时转化为神圣场域。锣鼓、仪仗、香案和沿途祭拜共同构成可观看、可参与的公共事件。",
        ],
      },
      {
        title: "仪式背后是社区组织",
        paragraphs: [
          "值年制度、按户筹资、仪仗与乐团分工、路线协调和公共宴饮，使游田成为乡村协作能力的集中展示。它既维护信仰，也不断确认社区内部的责任、关系和共同记忆。",
        ],
        points: ["生产功能：祈雨、避虫、护田与祈丰", "空间功能：连接庙宇、村落与农田", "社会功能：组织筹资、值年和公共协作", "记忆功能：通过周期性展演传递地方历史"],
      },
      {
        title: "如何保存一项活态信俗",
        paragraphs: [
          "活态传承不只是拍摄热闹场面。更重要的是记录仪式日期、路线、参与者、口述解释、器物名称和环境变化，并让当地社区参与资料校订与使用。",
        ],
      },
    ],
    references: ["闽清金沙迎神游田田野资料", "张圣君信俗非物质文化遗产相关材料", "地方庙志、值年记录与口述史", "闽台民间信仰景观研究"],
    related: ["fanghu-rock-mother-temple", "who-is-zhang-shengjun", "zhang-shengjun-iconography"],
  },
  "zhang-shengjun-iconography": {
    slug: "zhang-shengjun-iconography",
    category: "造像与器物",
    title: "黑面披发、执剑缠蛇：张圣君神像的法相密码",
    description:
      "从黑面、额包、披发跣足、法剑与麻蛇法索五个细节，解读张圣君武身神像的神迹记忆和闾山科仪含义。",
    lead:
      "张圣君最具辨识度的形象不是端坐朝服的文神，而是黑面圆眼、披发跣足、持剑捻诀并有蛇形法索缠身的武身法相。每一处细节都在讲述神迹和护民职能。",
    heroImage: "/zhangshengjun/reference-bible/master-character-lock-board.jpg",
    heroAlt: "张圣君黑面披发武身法相设定",
    publishedAt: "2026-08-31",
    updatedAt: "2026-08-31",
    readingMinutes: 6,
    sections: [
      {
        title: "黑面圆眼为何形成威慑",
        paragraphs: [
          "民间常以斗法时遭烟火熏烤解释黑面，也把深色面容理解为驱鬼逐疫的威慑标志。不同地区神像可能呈黑、红或深褐色，应结合具体宫庙传统辨识。",
        ],
      },
      {
        title: "额头隆起与斗法记忆",
        paragraphs: [
          "额头大包有被结义兄弟误伤、斗法受创或神力喷薄等多种口述版本。它让神像保留一种不完美却极具生命力的民间英雄形象。",
        ],
      },
      {
        title: "披发跣足是一种施法状态",
        paragraphs: [
          "披发、赤足和身体前倾共同表现正在行动的法主，而非静止接受朝拜的神明。它也呼应张圣君早年行走山林、贴近土地的凡人履历。",
        ],
      },
      {
        title: "法剑与麻蛇法索",
        paragraphs: [
          "法剑代表执法、镇邪和公义；法索常以麻纤维、蛇头结或缠蛇形态出现，连接降蛇神迹、闾山护法和科仪器物。现代影像创作若忽略这些材料和用途，很容易把张圣君误做成泛化仙侠角色。",
        ],
        points: ["法剑：斩妖、执法与护境", "麻蛇法索：降伏、束缚与通天护法", "月叉诀等手诀：施法状态的身体符号", "跣足与火轮：行动、牺牲与下界救民"],
      },
    ],
    references: ["闽台张圣君神像与宫庙造像实物", "地方斗法传说与口述材料", "闾山派法器和科仪研究", "网站视觉设定资料库（当代重构，非文物实拍）"],
    related: ["lushan-double-tradition", "who-is-zhang-shengjun", "youtian-field-procession"],
  },
  "birth-year-sources": {
    slug: "birth-year-sources",
    category: "文献辨析",
    title: "张圣君生于1024年还是1139年？两套纪年的来源",
    description:
      "张圣君生卒年为何有北宋1024年与南宋1139年两套说法？本文区分族谱、科仪抄本、地方志和民间传说的材料性质。",
    lead:
      "关于张圣君的出生年代，常见材料并不一致。族谱系统多见北宋天圣二年（1024年），部分科仪文本则称南宋绍兴九年（1139年）出生、淳熙十年（1183年）坐化。差异本身就是信仰史的重要证据。",
    heroImage: "/zhangshengjun/reference-bible/anchors/anchor-lacquer-rock.jpg",
    heroAlt: "黑漆岩层与朱砂裂痕象征不同年代文献的叠合",
    publishedAt: "2026-08-31",
    updatedAt: "2026-08-31",
    readingMinutes: 7,
    sections: [
      {
        title: "1024年说来自何处",
        paragraphs: [
          "永泰月洲张氏族谱及后来的地方叙述，常把张圣君的出生放在北宋天圣二年（1024年）。这一系统强调宗族谱系、出生地和凡人履历，使张慈观进入可追溯的地方家族记忆。",
        ],
      },
      {
        title: "1139年至1183年说来自何处",
        paragraphs: [
          "《张圣君履历咒》等科仪文本常见南宋绍兴九年（1139年）出生、淳熙十年（1183年）坐化的叙述，并以四十五岁济世生涯组织其神圣履历。",
          "科仪文本的目的不仅是记录年代，也是在仪式中召请、赞颂并确认神明身份，因此与族谱有不同的叙事逻辑。",
        ],
      },
      {
        title: "为什么不能简单选一个答案",
        paragraphs: [
          "族谱、文人笔记、地方志、庙志和道坛抄本分别服务宗族记忆、见闻记录、地方治理与仪式实践。它们的成书年代、抄传过程和写作目的不同，出现年代错位并不罕见。",
          "在缺乏更早且相互印证的直接材料时，把某一套纪年写成唯一确定事实，反而会掩盖张圣君神格如何在不同社群中形成。",
        ],
      },
      {
        title: "官网采用怎样的写法",
        paragraphs: [
          "本站并列两套主要纪年，并在具体文章中注明材料来源。涉及信仰仪式时尊重科仪传统，讨论凡人履历和宗族记忆时说明族谱系统，同时持续收集可核验的版本、抄本信息与研究成果。",
        ],
      },
    ],
    references: ["永泰月洲《张氏族谱》相关记载", "《张圣君履历咒》及相关道坛抄本", "《游宦纪闻》", "《夷坚志》", "地方志、庙志及当代研究中的版本比较"],
    related: ["who-is-zhang-shengjun", "fanghu-rock-mother-temple", "lushan-double-tradition"],
  },
};

export function getKnowledgeArticle(slug: KnowledgeSlug) {
  return knowledgeArticles[slug];
}
