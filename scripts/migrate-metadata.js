const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BLOG_DIRECTORY = path.join(process.cwd(), 'src/content/blogs');
const METADATA_DIRECTORY = path.join(process.cwd(), 'src/content/metadata');

// Ensure metadata directory exists
if (!fs.existsSync(METADATA_DIRECTORY)) {
  fs.mkdirSync(METADATA_DIRECTORY, { recursive: true });
}

// Get all .md files
const files = fs.readdirSync(BLOG_DIRECTORY).filter(file => file.endsWith('.md'));

console.log(`📚 Processing ${files.length} blog posts...\n`);

// Initialize separate objects for each field
const titles = {};
const excerpts = {};
const tags = {};
const images = {};
const imageAlts = {};
const dateModified = {};
const tldr = {};
const faqItems = {};

// Extract data from each file
files.forEach(file => {
  const slug = file.replace('.md', '');
  const filePath = path.join(BLOG_DIRECTORY, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);

  // Populate each field object
  titles[slug] = data.title || 'Untitled';
  excerpts[slug] = data.excerpt || '';
  tags[slug] = data.tags || [];
  images[slug] = data.image || null;
  imageAlts[slug] = data.imageAlt || null;
  dateModified[slug] = data.dateModified || null;
  tldr[slug] = data.tldr || null;
  faqItems[slug] = data.faqItems || null;

  console.log(`✅ Processed: ${slug}`);
});

// Save each field to its own file
const saveToFile = (filename, data) => {
  const filePath = path.join(METADATA_DIRECTORY, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`📝 Created: ${filename}`);
};

console.log('\n📦 Saving metadata files...\n');

saveToFile('titles.json', titles);
saveToFile('excerpts.json', excerpts);
saveToFile('tags.json', tags);
saveToFile('images.json', images);
saveToFile('imageAlts.json', imageAlts);
saveToFile('dateModified.json', dateModified);
saveToFile('tldr.json', tldr);
saveToFile('faqItems.json', faqItems);

console.log(`\n🎉 Successfully created 8 metadata files with ${files.length} posts each!`);
