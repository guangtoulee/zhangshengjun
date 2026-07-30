import type { MetadataRoute } from "next";
import { contentSlugs } from "@/lib/platform-content";
import { SITE_UPDATED_AT, SITE_URL } from "@/lib/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeEntries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "zh-CN": SITE_URL,
          "zh-Hant": `${SITE_URL}/zh-hant`,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/zh-hant`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "zh-CN": SITE_URL,
          "zh-Hant": `${SITE_URL}/zh-hant`,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "zh-CN": SITE_URL,
          "zh-Hant": `${SITE_URL}/zh-hant`,
          en: `${SITE_URL}/en`,
        },
      },
    },
  ];

  const contentEntries = contentSlugs.flatMap((slug): MetadataRoute.Sitemap => {
    const languages = {
      "zh-CN": `${SITE_URL}/${slug}`,
      "zh-Hant": `${SITE_URL}/zh-hant/${slug}`,
      en: `${SITE_URL}/en/${slug}`,
    };
    return [
      {
        url: languages["zh-CN"],
        lastModified: SITE_UPDATED_AT,
        changeFrequency: slug === "news" ? "weekly" : "monthly",
        priority: slug === "legend" ? 0.9 : 0.8,
        alternates: { languages },
      },
      {
        url: languages["zh-Hant"],
        lastModified: SITE_UPDATED_AT,
        changeFrequency: slug === "news" ? "weekly" : "monthly",
        priority: 0.75,
        alternates: { languages },
      },
      {
        url: languages.en,
        lastModified: SITE_UPDATED_AT,
        changeFrequency: slug === "news" ? "weekly" : "monthly",
        priority: 0.75,
        alternates: { languages },
      },
    ];
  });

  return [...homeEntries, ...contentEntries];
}
