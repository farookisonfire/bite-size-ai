import { mkdirSync } from "fs";
import { ARCHIVE_DIR, parseRSS, saveArticle } from "../utils/rss.js";

const FEED_URL = "https://bitesizeaihq.substack.com/feed";

export function registerRefreshArchive(server) {
  server.registerTool(
    "refresh_article_archive",
    {
      description: "Fetches all published articles from the BiteSizeAI Substack and saves them as markdown files in the /archive folder. Call this to sync the local archive with the latest published posts.",
    },
    async () => {
      mkdirSync(ARCHIVE_DIR, { recursive: true });

      const response = await fetch(FEED_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch feed: ${response.status} ${response.statusText}`);
      }
      const xml = await response.text();

      const articles = parseRSS(xml);
      if (articles.length === 0) {
        return {
          content: [{ type: "text", text: "No articles found in the feed." }],
        };
      }

      const saved = [];
      for (const article of articles) {
        const filePath = saveArticle(article);
        saved.push(`- ${article.title} → ${filePath}`);
      }

      return {
        content: [
          {
            type: "text",
            text: `Archived ${saved.length} article(s):\n\n${saved.join("\n")}`,
          },
        ],
      };
    }
  );
}
