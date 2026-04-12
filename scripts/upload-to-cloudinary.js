const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// ⚙️ CONFIGURE - Your Cloudinary credentials
cloudinary.config({
  cloud_name: 'de1yf0iuo',
  api_key: '884557589547588',
  api_secret: 'YpVmNLD5gpmtVRVodjcFovDBKUY'
});

// 📁 Folder mappings - ONLY INSPO
const FOLDERS = [
  // { local: 'public/images/blog', cloud: 'mirelleinspo/images/blog' },
  // { local: 'public/images/shop', cloud: 'mirelleinspo/images/shop' },
  // { local: 'public/images/topic', cloud: 'mirelleinspo/images/topic' },
];

// Handle inspo with subfolders (public/inspo/category/*.webp)
const INSPO_BASE = 'public/inspo';

async function uploadFile(filePath, cloudFolder) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: cloudFolder,
      use_filename: true,
      unique_filename: false,
      overwrite: false, // Don't re-upload existing
    });
    return result.secure_url;
  } catch (err) {
    console.error(`❌ Failed: ${filePath}`, err.message);
    return null;
  }
}

async function uploadFolder(localFolder, cloudFolder) {
  if (!fs.existsSync(localFolder)) {
    console.warn(`⚠️  Folder not found: ${localFolder}`);
    return;
  }

  const files = fs.readdirSync(localFolder).filter(f => 
    /\.(jpg|jpeg|png|webp)$/i.test(f) && f !== '.gitkeep'
  );

  console.log(`\n📂 Uploading ${files.length} files from ${localFolder}...`);

  for (const file of files) {
    const filePath = path.join(localFolder, file);
    const url = await uploadFile(filePath, cloudFolder);
    if (url) {
      console.log(`✅ ${file}`);
    }
  }
}

async function uploadInspoFolders() {
  if (!fs.existsSync(INSPO_BASE)) return;

  const categories = fs.readdirSync(INSPO_BASE).filter(f => 
    fs.statSync(path.join(INSPO_BASE, f)).isDirectory()
  );

  for (const category of categories) {
    const localFolder = path.join(INSPO_BASE, category);
    const cloudFolder = `mirelleinspo/inspo/${category}`;
    await uploadFolder(localFolder, cloudFolder);
  }
}

async function main() {
  console.log('🚀 Starting Cloudinary upload (INSPO ONLY)...\n');

  // Skip main folders - only upload inspo
  // for (const folder of FOLDERS) {
  //   await uploadFolder(folder.local, folder.cloud);
  // }

  // Upload inspo subfolders
  await uploadInspoFolders();

  console.log('\n✅ Upload complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Verify images at: https://cloudinary.com/console');
  console.log('2. Update inspo sitemap with Cloudinary URLs');
  console.log('3. Test site locally');
  console.log('4. Deploy');
}

main().catch(err => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});