// scripts/migrate-metadata.js
// One-time migration script to separate metadata from markdown files into JSON

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BLOG_DIR = path.join(process.cwd(), 'src/content/blogs');
const METADATA_DIR = path.join(process.cwd(), 'src/content/metadata');

// Ensure metadata directory exists
if (!fs.existsSync(METADATA_DIR)) {
  fs.mkdirSync(METADATA_DIR, { recursive: true });
}

function migrateMetadata() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  
  console.log(`Found ${files.length} markdown files to migrate\n`);
  
  files.forEach(file => {
    const slug = file.replace('.md', '');
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    // Extract metadata fields
    const metadata = {
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      date: data.date || new Date().toISOString(),
      updatedDate: data.updatedDate || null,
      author: data.author || 'Mirelle',
      category: data.category || 'Uncategorized',
      tags: data.tags || [],
      image: data.image || null,
      imageAlt: data.imageAlt || null,
      imageWidth: data.imageWidth || 1200,
      imageHeight: data.imageHeight || 630,
      readTime: data.readTime || '5 min',
      wordCount: data.wordCount || 0,
      canonical: data.canonical || `https://mirelleinspo.com/blog/${slug}`,
      dateModified: data.dateModified || data.updatedDate || null,
      rating: data.rating || null,
      galleryImages: data.galleryImages || []
    };
    
    // Write metadata JSON file
    const metadataPath = path.join(METADATA_DIR, `${slug}.json`);
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
    
    console.log(`✅ Migrated: ${slug}`);
  });
  
  console.log(`\n🎉 Migration complete! ${files.length} files processed.`);
  console.log(`Metadata saved to: ${METADATA_DIR}`);
}

// Run migration
migrateMetadata();