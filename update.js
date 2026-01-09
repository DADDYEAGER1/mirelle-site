const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const BLOGS_DIR = path.join(
  process.cwd(),
  "src",
  "content",
  "blogs"
);

const OUTPUT_PATH = path.join(
  "C:",
  "Users",
  "gaurav verma",
  "mirelle baby",
  "valentine-frontmatter.txt"
);

const KEYWORD = "valentine";
const results = [];

function frontmatterContainsKeyword(frontmatter, keyword) {
  return JSON.stringify(frontmatter)
    .toLowerCase()
    .includes(keyword.toLowerCase());
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDirectory(fullPath);
    } else if (file.endsWith(".md") || file.endsWith(".mdx")) {
      const fileContent = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContent);

      if (frontmatterContainsKeyword(data, KEYWORD)) {
        results.push({
          file: path.relative(BLOGS_DIR, fullPath),
          frontmatter: data,
        });
      }
    }
  }
}

walkDirectory(BLOGS_DIR);

/* ---------- FORMAT TXT OUTPUT ---------- */

let output = "";
output += "VALENTINE FRONTMATTER EXTRACTION\n";
output += "========================================\n\n";

if (results.length === 0) {
  output += "No posts found containing keyword: valentine\n";
} else {
  results.forEach((item, index) => {
    output += `POST ${index + 1}\n`;
    output += "----------------------------------------\n";
    output += `File: ${item.file}\n\n`;
    output += "Frontmatter:\n";

    for (const [key, value] of Object.entries(item.frontmatter)) {
      output += `- ${key}: ${JSON.stringify(value, null, 2)}\n`;
    }

    output += "\n========================================\n\n";
  });
}

fs.writeFileSync(OUTPUT_PATH, output, "utf8");

console.log(`✅ Extraction complete`);
console.log(`📄 Output saved at:\n${OUTPUT_PATH}`);
console.log(`🔎 Total matches: ${results.length}`);
