# Content Management Scripts

This directory contains 5 powerful scripts for managing and maintaining your blog content at scale.

## 📋 Scripts Overview

| Script | Purpose | Dry Run |
|--------|---------|---------|
| `content-audit.js` | Identify posts needing updates, missing fields, health score | ✅ |
| `add-schema-fields.js` | Add missing schema.org fields (canonical, wordCount, imageWidth, etc.) | ✅ |
| `update-categories-bulk.js` | Bulk update category names across multiple posts | ✅ |
| `regenerate-metadata.js` | Re-extract metadata from MD to JSON files | ✅ |
| `update-image-paths.js` | Bulk update image paths (CDN migration, reorganization) | ✅ |

---

## 🔍 1. Content Audit Script

**Purpose:** Scan all blog posts and generate comprehensive health report

### Usage

```bash
# Run audit and output to console
node scripts/content-audit.js

# Save full report to JSON file
node scripts/content-audit.js --output my-report.json
```

### What It Checks

- ✅ Posts older than 12 months (flags for update)
- ✅ Posts missing required metadata fields
- ✅ Posts without images
- ✅ Category distribution
- ✅ Tag usage statistics
- ✅ Overall content health score (0-100)

### Output Example

```
═══════════════════════════════════════════════
📋 CONTENT AUDIT RESULTS
═══════════════════════════════════════════════

📊 Total Posts: 11
💯 Health Score: 85/100

⏰ Posts Needing Update (3):
  🔴 old-post-2023 - 547 days old - URGENT: Update or archive
  🟡 summer-nails-2024 - 398 days old - Consider updating

🚨 Posts Missing Fields (2):
  🔴 new-draft - Missing: canonical, imageAlt
  🟡 quick-post - Missing: category

📁 Category Distribution:
  Seasonal Nail Trends       ████████ (8)
  Nail Care                  ████ (3)

🏷️ Top 10 Tags:
  christmas nails            ████████ (8)
  nail art                   ██████ (6)
```

### JSON Report Structure

```json
{
  "totalPosts": 11,
  "postsNeedingUpdate": [...],
  "postsMissingFields": [...],
  "postsWithoutImages": [...],
  "categoryDistribution": {...},
  "tagDistribution": {...},
  "summary": {
    "healthScore": 85
  }
}
```

---

## 🔧 2. Add Schema Fields Script

**Purpose:** Automatically add missing schema.org fields to all posts

### Usage

```bash
# Preview changes without modifying files
node scripts/add-schema-fields.js --dry-run

# Apply changes
node scripts/add-schema-fields.js
```

### Fields Added

| Field | Default Value | Purpose |
|-------|---------------|---------|
| `canonical` | `https://mirelleinspo.com/blog/{slug}` | SEO canonical URL |
| `imageWidth` | `1200` | Schema.org ImageObject |
| `imageHeight` | `630` | Schema.org ImageObject |
| `wordCount` | Calculated from content | Article schema |
| `dateModified` | Uses `updatedDate` or `date` | Last modified date |

### Output Example

```
✅ christmas-nail-designs-2025
   Added: canonical, wordCount, dateModified

✅ halloween-nails-2025
   Added: imageWidth, imageHeight

═══════════════════════════════════════════════
✅ Modified: 8 posts
⏭️  Skipped: 3 posts (already complete)
✨ Schema fields added successfully!
```

---

## 📂 3. Update Categories Bulk Script

**Purpose:** Rename categories across multiple posts at once

### Usage

```bash
# List all current categories
node scripts/update-categories-bulk.js --list

# Preview changes
node scripts/update-categories-bulk.js \
  --from "Old Category Name" \
  --to "New Category Name" \
  --dry-run

# Apply changes
node scripts/update-categories-bulk.js \
  --from "Seasonal Nail Trends" \
  --to "Seasonal Trends"
```

### Use Cases

- ✅ Rename category for consistency
- ✅ Fix typos in category names
- ✅ Merge similar categories
- ✅ Standardize naming conventions

### Output Example

```
🔍 Searching for: "Seasonal Nail Trends"
➡️  Replacing with: "Seasonal Trends"

✅ christmas-nails-2025
   Current: "Seasonal Nail Trends"
   New:     "Seasonal Trends"

✅ halloween-nails-2025
   Current: "Seasonal Nail Trends"
   New:     "Seasonal Trends"

═══════════════════════════════════════════════
✅ Updated: 8 posts
✨ Categories updated successfully!
```

---

## 🔄 4. Regenerate Metadata Script

**Purpose:** Re-extract metadata from markdown frontmatter to JSON files

### Usage

```bash
# Preview without changes
node scripts/regenerate-metadata.js --dry-run

# Apply with automatic backup
node scripts/regenerate-metadata.js

# Apply without backup (not recommended)
node scripts/regenerate-metadata.js --no-backup
```

### When To Use

- ✅ After bulk editing markdown frontmatter
- ✅ After adding new metadata fields to posts
- ✅ To fix corrupted JSON metadata files
- ✅ To sync MD and JSON after manual edits

### What It Does

1. **Creates automatic backup** of existing JSON files (unless `--no-backup`)
2. **Reads all markdown files** in `src/content/blogs/`
3. **Extracts metadata** from frontmatter
4. **Writes to JSON files** in `src/content/metadata/`

### Files Regenerated

- `titles.json`
- `excerpts.json`
- `tags.json`
- `images.json`
- `imageAlts.json`
- `dateModified.json`
- `tldr.json`
- `faqItems.json`

### Backup Location

```
src/content/metadata/backups/backup-2025-10-29T14-30-00/
├── titles.json
├── excerpts.json
├── tags.json
├── images.json
├── imageAlts.json
├── dateModified.json
├── tldr.json
└── faqItems.json
```

---

## 🖼️ 5. Update Image Paths Script

**Purpose:** Bulk update image paths across all posts and metadata

### Usage

```bash
# Replace path
node scripts/update-image-paths.js \
  --from "/images/blog/" \
  --to "/cdn/blog-images/" \
  --dry-run

# Add CDN prefix
node scripts/update-image-paths.js \
  --prefix "https://cdn.mirelleinspo.com" \
  --dry-run

# Apply changes
node scripts/update-image-paths.js \
  --from "/old/" \
  --to "/new/"
```

### Use Cases

- ✅ Migrate images to CDN
- ✅ Reorganize image directory structure
- ✅ Add domain prefix for absolute URLs
- ✅ Fix broken image paths after refactoring

### What It Updates

- ✅ `image` field in markdown frontmatter
- ✅ `galleryImages` array in markdown frontmatter
- ✅ `images.json` metadata file

### Output Example

```
🖼️ Bulk Updating Image Paths...

📄 Updating Markdown Files...

✅ christmas-nails-2025
   image: /images/blog/hero.jpg → /cdn/blog/hero.jpg
   gallery: /images/blog/step1.jpg → /cdn/blog/step1.jpg
   gallery: /images/blog/step2.jpg → /cdn/blog/step2.jpg

📋 Updating images.json Metadata...

✅ halloween-nails-2025
   /images/blog/halloween.jpg → /cdn/blog/halloween.jpg

═══════════════════════════════════════════════
✅ Markdown files updated: 8
✅ Metadata entries updated: 11
📊 Total changes: 19
✨ Image paths updated successfully!
```

---

## 🚀 Quick Start Guide

### 1. Install Dependencies

Make sure you have required packages:

```bash
npm install gray-matter
```

### 2. Make Scripts Executable (Optional)

```bash
chmod +x scripts/*.js
```

### 3. Run Content Audit First

```bash
node scripts/content-audit.js
```

This gives you a baseline understanding of your content health.

### 4. Use Dry Run Always

**ALWAYS test with `--dry-run` first:**

```bash
node scripts/add-schema-fields.js --dry-run
```

Review the output, then run without `--dry-run` to apply.

---

## ⚙️ Common Workflows

### Workflow 1: Adding New Schema Fields

```bash
# 1. Check what's missing
node scripts/content-audit.js

# 2. Preview schema field additions
node scripts/add-schema-fields.js --dry-run

# 3. Apply changes
node scripts/add-schema-fields.js

# 4. Verify with audit
node scripts/content-audit.js
```

### Workflow 2: Category Reorganization

```bash
# 1. See current categories
node scripts/update-categories-bulk.js --list

# 2. Preview rename
node scripts/update-categories-bulk.js \
  --from "Old Name" \
  --to "New Name" \
  --dry-run

# 3. Apply rename
node scripts/update-categories-bulk.js \
  --from "Old Name" \
  --to "New Name"
```

### Workflow 3: CDN Migration

```bash
# 1. Preview image path changes
node scripts/update-image-paths.js \
  --prefix "https://cdn.example.com" \
  --dry-run

# 2. Apply changes
node scripts/update-image-paths.js \
  --prefix "https://cdn.example.com"

# 3. Regenerate metadata
node scripts/regenerate-metadata.js
```

### Workflow 4: After Bulk MD Edits

```bash
# 1. Regenerate metadata with backup
node scripts/regenerate-metadata.js

# 2. Add any missing schema fields
node scripts/add-schema-fields.js

# 3. Run audit to verify
node scripts/content-audit.js
```

---

## 🛡️ Safety Features

### Dry Run Mode

All scripts support `--dry-run`:
- ✅ Shows what would change
- ✅ No files modified
- ✅ Safe to run anytime

### Automatic Backups

`regenerate-metadata.js` creates timestamped backups:
```
src/content/metadata/backups/backup-2025-10-29T14-30-00/
```

### Validation

Scripts validate:
- ✅ File existence before reading
- ✅ JSON syntax before writing
- ✅ Required arguments before execution

---

## 📊 Best Practices

### 1. Run Audit Weekly

```bash
# Add to cron or run manually every Friday
node scripts/content-audit.js --output weekly-report.json
```

### 2. Always Use Dry Run First

```bash
# Good ✅
node scripts/update-categories-bulk.js --dry-run
node scripts/update-categories-bulk.js

# Bad ❌
node scripts/update-categories-bulk.js
```

### 3. Commit After Each Script

```bash
git add .
git commit -m "feat: added schema fields to all posts"
```

### 4. Keep Backups

Don't use `--no-backup` unless you're certain:

```bash
# Good ✅
node scripts/regenerate-metadata.js

# Risky ⚠️
node scripts/regenerate-metadata.js --no-backup
```

---

## 🐛 Troubleshooting

### "No such file or directory"

**Problem:** Script can't find blog directory

**Solution:** Run scripts from project root:
```bash
cd /path/to/mirelle-site
node scripts/content-audit.js
```

### "Cannot find module 'gray-matter'"

**Problem:** Missing dependency

**Solution:** Install required packages:
```bash
npm install gray-matter
```

### "Permission denied"

**Problem:** Script not executable

**Solution:** Add execution permission:
```bash
chmod +x scripts/content-audit.js
```

### Corrupted Metadata

**Problem:** JSON files broken after script run

**Solution:** Restore from backup:
```bash
cp src/content/metadata/backups/backup-*/titles.json src/content/metadata/
```

---

## 📝 Script Output Files

### content-audit-report.json

```json
{
  "totalPosts": 11,
  "timestamp": "2025-10-29T14:30:00.000Z",
  "postsNeedingUpdate": [...],
  "summary": {
    "healthScore": 85
  }
}
```

### Backup Structure

```
src/content/metadata/backups/
└── backup-2025-10-29T14-30-00/
    ├── titles.json
    ├── excerpts.json
    └── ...
```

---

## 🔗 Related Documentation

- [Blog System Architecture](../README.md)
- [Content Management Guide](../docs/CONTENT_MANAGEMENT.md)
- [SEO Best Practices](../docs/SEO.md)

---

## 📞 Need Help?

If you encounter issues:

1. ✅ Check this README first
2. ✅ Run audit to see current state
3. ✅ Use `--dry-run` to preview
4. ✅ Check backups in `metadata/backups/`
5. ✅ Review git history for recent changes

---

**Last Updated:** October 29, 2025  
**Scripts Version:** 1.0.0  
**Tested With:** Node.js 18+, Next.js 15
