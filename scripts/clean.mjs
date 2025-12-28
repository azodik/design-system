import fs from "node:fs";
import path from "node:path";

// Configuration
const CONFIG = {
  directoriesToClean: ['node_modules', 'dist', '.wrangler', '.turbo', 'coverage', '.next', 'build', 'storybook-static']
};

// Utility functions
const log = (message, type = 'info') => {
  const colors = {
    info: '\x1b[36m',    // cyan
    success: '\x1b[32m', // green
    warning: '\x1b[33m', // yellow
    error: '\x1b[31m',   // red
    bold: '\x1b[1m',     // bold
    reset: '\x1b[0m'     // reset
  };
  
  const symbols = {
    success: '✓',
    error: '✗',
    warning: '⚠',
    info: '→',
    folder: '📁',
    home: '🏠',
    package: '📦',
    mobile: '📱',
    star: '⭐',
    tick: '✓'
  };
  
  const color = colors[type] || colors.info;
  const symbol = symbols[type] || symbols.info;
  console.log(`${color}${symbol} ${message}${colors.reset}`);
};

const createBox = (content, title) => {
  const width = 50;
  const topBottom = '═'.repeat(width);
  const sides = '║';
  
  console.log(`\n╔${topBottom}╗`);
  console.log(`${sides}${title.padStart((width + title.length) / 2).padEnd(width)}${sides}`);
  console.log(`╠${topBottom}╣`);
  console.log(`${sides}${content.padEnd(width)}${sides}`);
  console.log(`╚${topBottom}╝\n`);
};

const deleteDirectory = async (dirPath) => {
  log(`Deleting: ${path.basename(dirPath)}`, 'info');

  try {
    if (fs.existsSync(dirPath)) {
      await fs.promises.rm(dirPath, { recursive: true, force: true });
      log(`Deleted: ${path.basename(dirPath)}`, 'success');
      return true;
    } else {
      log(`Not found: ${path.basename(dirPath)}`, 'warning');
      return false;
    }
  } catch (error) {
    log(`Error deleting ${path.basename(dirPath)}: ${error.message}`, 'error');
    return false;
  }
};

// Helper function to clean directories in a specific path
const cleanDirectoryPath = async (basePath, dirName, icon) => {
  if (!fs.existsSync(basePath)) return;
  
  log(`\n\n${icon} Cleaning ${dirName}...\n`, 'info');
  
  const subdirs = fs.readdirSync(basePath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  for (const subdir of subdirs) {
    log(`\n📁 Cleaning ${dirName.slice(0, -1)}: ${subdir}`, 'info');
    
    for (const dir of CONFIG.directoriesToClean) {
      const fullPath = path.join(basePath, subdir, dir);
      await deleteDirectory(fullPath);
    }
  }
};

// Main cleanup function
const cleanDirectories = async () => {
  // Welcome message
  createBox('⭐ Azodik Cleanup Tool', 'Cleanup Tool');
  
  const currentDir = process.cwd();
  log(`🏠 Working directory: ${currentDir}\n`, 'info');
  
  // Clean root directory
  log(`🏠 Cleaning root directory...\n`, 'info');
  for (const dir of CONFIG.directoriesToClean) {
    const fullPath = path.join(currentDir, dir);
    await deleteDirectory(fullPath);
  }
  
  // Clean packages and apps directories
  await Promise.all([
    cleanDirectoryPath(path.join(currentDir, 'packages'), 'packages directory', '📦'),
    cleanDirectoryPath(path.join(currentDir, 'apps'), 'apps directory', '📱')
  ]);
  
  // Success message
  createBox('✓ Cleanup completed successfully!', 'Success');
};

// Run the cleanup
cleanDirectories().catch(console.error);