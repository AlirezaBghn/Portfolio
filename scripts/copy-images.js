const fs = require("fs");
const path = require("path");

// Create directories if they don't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Copy file
function copyFile(source, target) {
  fs.copyFileSync(source, target);
}

// Copy directory recursively
function copyDirectory(source, target) {
  ensureDirectoryExists(target);

  const files = fs.readdirSync(source);

  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    const stats = fs.statSync(sourcePath);

    if (stats.isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else {
      copyFile(sourcePath, targetPath);
    }
  });
}

// Main execution
try {
  console.log("Copying images to output directory...");

  // For build output
  ensureDirectoryExists(path.join(__dirname, "../out/assets"));
  copyDirectory(
    path.join(__dirname, "../src/assets/images"),
    path.join(__dirname, "../out/assets/images")
  );

  // For public directory during development
  ensureDirectoryExists(path.join(__dirname, "../public/assets/images"));
  copyDirectory(
    path.join(__dirname, "../src/assets/images"),
    path.join(__dirname, "../public/assets/images")
  );

  console.log("Successfully copied images to output and public directories!");
} catch (error) {
  console.error("Error copying images:", error);
  process.exit(1);
}
