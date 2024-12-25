const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

// 1. Path to your images folder
const folderPath = path.join(__dirname, '..', '..', 'public', 'portfolio');
// 2. Path where we'll write the JS data file
const outputPath = path.join(__dirname, '..', 'utils', 'portfolioData.js');

// Read all files in the folder
const files = fs.readdirSync(folderPath);

// Filter out only image files (e.g., .jpg, .png, .webp, etc.)
const imageFiles = files.filter((file) => {
  return /\.(jpe?g|png|webp|gif)$/i.test(file);
});

// Build an array of images with { src, width, height, alt }
const portfolioArray = imageFiles.map((file) => {
  const filePath = path.join(folderPath, file);
  const dimensions = sizeOf(filePath);

  return {
    src: `/portfolio/${file}`,         // Path relative to /public
    width: dimensions.width,
    height: dimensions.height,
    alt: path.parse(file).name,       // Use file name (without extension) as alt text
  };
});

// Format as JS module
const fileContents = `const portfolioPhotos = ${JSON.stringify(portfolioArray, null, 2)};\n\nexport default portfolioPhotos;\n`;

// Write to portfolioData.js
fs.writeFileSync(outputPath, fileContents, 'utf8');

console.log('✅  portfolioData.js generated successfully!');
