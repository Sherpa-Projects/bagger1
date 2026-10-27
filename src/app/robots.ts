import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/site";

// KI-Crawler ausdrücklich erlauben (Suche & Assistenten)
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = BASE_URL;
  // QR-Code-Weiterleitungen (/q/[id]) haben keinen eigenen Inhalt
  const disallow = ["/q/"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: AI_BOTS, allow: "/", disallow },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
