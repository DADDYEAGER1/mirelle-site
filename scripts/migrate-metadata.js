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

// Initialize objects for ONLY the editable fields
const titles = {};
const excerpts = {};
const tags = {};
const images = {};
const imageAlts = {};
const dateModified = {};
const tldr = {};
const faqItems = {};

// Extract ONLY editable fields from frontmatter
files.forEach(file => {
  const slug = file.replace('.md', '');
  const filePath = path.join(BLOG_DIRECTORY, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);

  // ✅ Extract the 7 fields (excluding TLDR for now)
  titles[slug] = data.title || 'Untitled';
  excerpts[slug] = data.excerpt || '';
  tags[slug] = data.tags || [];
  images[slug] = data.image || null;
  imageAlts[slug] = data.imageAlt || null;
  dateModified[slug] = data.dateModified || null;
  
  // ✅ Extract TLDR with ALL fields merged together
  if (data.tldr && data.tldr.summary && data.tldr.keyTakeaways) {
    tldr[slug] = {
      summary: data.tldr.summary || [],
      keyTakeaways: data.tldr.keyTakeaways || [],
      creativeLine: data.tldr.creativeLine || '',
      faqs: data.tldr.faqs || data.faqItems || []  // ✅ Include FAQs from either location
    };
  } else {
    tldr[slug] = null;
  }

  // ✅ Keep faqItems separate for backward compatibility (optional)
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
console.log(`\n📂 Files created in: ${METADATA_DIRECTORY}`);
console.log(`\n💡 To update metadata, edit the JSON files directly.`);
console.log(`   Example: Edit tldr.json to update all TL;DRs at once.`);
console.log(`\n✨ TLDR structure includes: summary, keyTakeaways, creativeLine, and faqs`);
