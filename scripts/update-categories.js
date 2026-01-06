const fs = require('fs');
const path = require('path');

// Configuration
const BLOGS_DIR = path.join(__dirname, '../src/content/blogs');
const DRY_RUN = true; // Set to false to actually update files

// Category mappings
const CATEGORY_MAPPINGS = {
  // Rename existing
  'Nail Care': 'Nail Care Guide',
  
  // Keep as-is (no change needed)
  'Seasonal Nail Trends': 'Seasonal Nail Trends',
  'Tutorial': 'Tutorial'
};

// Posts that need categories added
const ADD_CATEGORIES = {
  // Seasonal Nail Trends
  'easy-halloween-nail-designs.md': 'Seasonal Nail Trends',
  'halloween-nail-ideas-2025.md': 'Seasonal Nail Trends',
  'new-year-nails-2025.md': 'Seasonal Nail Trends',
  'thanksgiving-nails-2025.md': 'Seasonal Nail Trends',
  'valentine-nails-2026.md': 'Seasonal Nail Trends',
  'vampire-nails-2025.md': 'Seasonal Nail Trends',
  'winter-nails-2025.md': 'Seasonal Nail Trends',
  'holiday-vacation-nails-travel-guide.md': 'Seasonal Nail Trends',
  
  // Inspiration Gallery
  'goddess-nails-2025.md': 'Inspiration Gallery',
  'wedding-nail-designs.md': 'Inspiration Gallery'
};

// Function to update frontmatter in markdown content