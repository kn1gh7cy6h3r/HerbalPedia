const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'Medicinal Plants Images');
const destDir = path.join(__dirname, '..', 'public', 'images', 'plants');

// Ensure destination exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir);

files.forEach(file => {
  // Extract name by removing number prefix like "1. ", "4.  ", "14 " and extension
  const ext = path.extname(file);
  let baseName = path.basename(file, ext);
  
  // Regex to remove leading numbers, dots, and spaces
  baseName = baseName.replace(/^\d+[\.\s]+/, '');
  
  // Create a URL-friendly slug
  const slug = baseName
    .toLowerCase()
    .replace(/[\s\(\)]+/g, '-') // replace spaces and parentheses with dash
    .replace(/-+/g, '-') // remove consecutive dashes
    .replace(/^-|-$/g, ''); // trim dashes from start/end
  
  const newName = `${slug}${ext.toLowerCase()}`;
  
  // Copy file
  fs.copyFileSync(
    path.join(sourceDir, file),
    path.join(destDir, newName)
  );
  console.log(`Copied: ${file} -> ${newName}`);
});

console.log('All images processed successfully.');
