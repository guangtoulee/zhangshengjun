import type { MetadataRoute } from "next";

const baseUrl = "https://zhangshengjun.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "zh-CN": baseUrl,
          "zh-Hant": `${baseUrl}/zh-hant`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/zh-hant`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "zh-CN": baseUrl,
          "zh-Hant": `${baseUrl}/zh-hant`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "zh-CN": baseUrl,
          "zh-Hant": `${baseUrl}/zh-hant`,
          en: `${baseUrl}/en`,
        },
      },
    },
  ];
}
