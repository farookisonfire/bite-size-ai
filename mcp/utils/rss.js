import { NodeHtmlMarkdown } from "node-html-markdown";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const ARCHIVE_DIR = resolve(__dirname, "../../archive");

// ─── RSS Parser ───────────────────────────────────────────────────────────────
// Node 18+ has built-in fetch, so no extra HTTP library needed.
// We parse the RSS XML manually with regex — simple and dependency-free.

export function parseRSS(xml) {
  const items = [];
  const itemBlocks = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];

  for (const block of itemBlocks) {
    const get = (tag) => {
      // Handle both plain tags and namespaced tags like content:encoded
      const match = block.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>|<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
      return match ? (match[1] ?? match[2] ?? "").trim() : "";
    };

    const title = get("title");
    const link = get("link") || get("guid");
    const pubDate = get("pubDate");
    const description = get("description");
    const contentHtml = get("content:encoded");

    if (!title || !link) continue;

    items.push({ title, link, pubDate, description, contentHtml });
  }

  return items;
}

// ─── Slug Generator ───────────────────────────────────────────────────────────
// Turns a Substack URL into a filename-safe slug.
// e.g. "https://bitesizeaihq.substack.com/p/how-semantic-search-actually-works"
//   → "how-semantic-search-actually-works"

export function slugFromUrl(url) {
  return url.split("/p/").pop()?.replace(/[^a-z0-9-]/g, "") || "unknown";
}

// ─── Archive Writer ───────────────────────────────────────────────────────────
// Takes a parsed article and writes it as a markdown file in /archive.

export function saveArticle(article) {
  const slug = slugFromUrl(article.link);
  const markdown = NodeHtmlMarkdown.translate(article.contentHtml);

  const content = [
    `# ${article.title}`,
    ``,
    `**Published:** ${article.pubDate}`,
    `**URL:** ${article.link}`,
    `**Subtitle:** ${article.description}`,
    ``,
    `---`,
    ``,
    markdown,
  ].join("\n");

  const filePath = resolve(ARCHIVE_DIR, `${slug}.md`);
  writeFileSync(filePath, content, "utf8");
  return filePath;
}
