import fs from "fs";
import path from "path";
import { visit } from "unist-util-visit";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "content");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const shikiRemarkPlugin = (options) => async (tree) => {
  visit(
    tree,
    "code",
    (node: { type: string; value: any; lang: string; meta: string }) => {
      node.type = "html";
      node.value = options.highlighter
        .codeToHtml(node.value, node.lang)
        .replace(
          '<pre class="shiki"',
          `<pre class="shiki" language="${node.lang}" meta="${node.meta}"`
        );
    }
  );
};
