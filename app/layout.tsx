import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteName = "永泰方壶岩·张圣君母殿";
const siteDescription =
  "永泰方壶岩·张圣君母殿官方网站，呈现张圣君亦道亦佛的信仰底蕴、从凡人到神明的传奇叙事，以及跨越海峡与海外的法主公信仰网络。";

export const metadata: Metadata = {
  metadataBase: new URL("https://zhangshengjun.org"),
  title: {
    default: `${siteName} | 千年神公 闾山法主`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "永泰方壶岩张圣君母殿管理委员会" }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/zhangshengjun/fanghu-hero.jpg",
        width: 1821,
        height: 864,
        alt: "永泰方壶岩母殿山水圣境",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "千年神公，闾山法主，农业保护神。探寻张圣君信仰的血缘地与法源地。",
    images: ["/zhangshengjun/fanghu-hero.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
