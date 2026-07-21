import type { Metadata } from "next";
import type { SiteLocale } from "@/content/zhangshengjun-i18n";

const metadataByLocale: Record<
  SiteLocale,
  {
    path: string;
    locale: string;
    title: string;
    siteName: string;
    description: string;
    imageAlt: string;
    twitterDescription: string;
  }
> = {
  "zh-cn": {
    path: "/",
    locale: "zh_CN",
    title: "永泰方壶岩·张圣君母殿 | 千年神公 闾山法主",
    siteName: "永泰方壶岩·张圣君母殿",
    description:
      "永泰方壶岩·张圣君母殿官方网站，呈现张圣君亦道亦佛的信仰底蕴、从凡人到神明的传奇叙事，以及跨越海峡与海外的法主公信仰网络。",
    imageAlt: "永泰方壶岩母殿山水圣境",
    twitterDescription: "千年神公，闾山法主。探寻张圣君信仰的血缘地与法源地。",
  },
  "zh-hant": {
    path: "/zh-hant",
    locale: "zh_TW",
    title: "永泰方壺巖·張聖君母殿 | 千年神公 閭山法主",
    siteName: "永泰方壺巖·張聖君母殿",
    description:
      "永泰方壺巖·張聖君母殿官方網站，呈現張聖君亦道亦佛的信仰底蘊、從凡人到神明的傳奇敘事，以及跨越海峽與海外的法主公信仰網絡。",
    imageAlt: "永泰方壺巖母殿山水聖境",
    twitterDescription: "千年神公，閭山法主。探尋張聖君信仰的血緣地與法源地。",
  },
  en: {
    path: "/en",
    locale: "en_US",
    title: "Fanghu Rock Mother Temple | Lord Zhang, the Millennium Divine Lord",
    siteName: "Fanghu Rock Mother Temple · Lord Zhang",
    description:
      "The official cultural website of Fanghu Rock Mother Temple, tracing Lord Zhang's journey from mortal woodcutter to Fazhu Gong and the living devotional network linking Fujian, Taiwan, and overseas communities.",
    imageAlt: "The sacred mountain landscape of Fanghu Rock Mother Temple in Yongtai",
    twitterDescription:
      "Discover Lord Zhang, the Lushan Dharma Master, and the sacred origin of a millennium-old tradition at Fanghu Rock.",
  },
};

const languageAlternates = {
  "zh-CN": "/",
  "zh-Hant": "/zh-hant",
  en: "/en",
  "x-default": "/",
};

export function createSiteMetadata(locale: SiteLocale): Metadata {
  const copy = metadataByLocale[locale];
  const alternateLocales = Object.values(metadataByLocale)
    .filter((item) => item.locale !== copy.locale)
    .map((item) => item.locale);

  return {
    title: copy.title,
    description: copy.description,
    applicationName: copy.siteName,
    creator: copy.siteName,
    publisher: copy.siteName,
    alternates: {
      canonical: copy.path,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale: copy.locale,
      alternateLocale: alternateLocales,
      url: copy.path,
      siteName: copy.siteName,
      title: copy.title,
      description: copy.description,
      images: [
        {
          url: "/zhangshengjun/fanghu-hero.jpg",
          width: 1821,
          height: 864,
          alt: copy.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.twitterDescription,
      images: ["/zhangshengjun/fanghu-hero.jpg"],
    },
  };
}
