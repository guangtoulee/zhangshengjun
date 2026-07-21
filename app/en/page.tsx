import ZhangShengJunExperience from "@/components/zhangshengjun-experience";
import { createSiteMetadata } from "@/lib/site-metadata";

export const metadata = createSiteMetadata("en");

export default function EnglishPage() {
  return <ZhangShengJunExperience locale="en" />;
}
