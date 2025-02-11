import fs from 'fs';
import path from 'path';

// Function to create a file tree structure
function generateFileTree(dir: string, prefix = ''): string {
  let output = '';
  const items = fs.readdirSync(dir);

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);

    // Add the current item to the tree
    output += `${prefix}${isLast ? '└── ' : '├── '}${item}\n`;

    // If it's a directory, recurse into it
    if (stats.isDirectory()) {
      output += generateFileTree(itemPath, prefix + (isLast ? '    ' : '│   '));
    }
  });

  return output;
}

// Function to read file contents
function readFileContents(filePath: string): string {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error: unknown) {
    if (error instanceof Error) {
      return `Error reading file: ${error.message}`;
    }
    return 'Error reading file: Unknown error occurred';
  }
}

// Function to recursively get all TypeScript files
function getTypeScriptFiles(dir: string): string[] {
  let files: string[] = [];
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      files = files.concat(getTypeScriptFiles(fullPath));
    } else if (item.endsWith('.ts')) {
      files.push(fullPath);
    }
  });

  return files;
}

// Main documentation generation function
async function generateDocumentation() {
  // Create docs directory if it doesn't exist
  const docsDir = path.join(process.cwd(), 'docs');
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);
  }

  let documentation = '';

  // Add project name and description
  documentation += '# DND Scribe Documentation\n\n';

  // Add file tree
  documentation += '## Project Structure\n\n```\n';
  documentation += generateFileTree(process.cwd());
  documentation += '```\n\n';

  // Add package.json contents
  documentation += '## Package.json\n\n```json\n';
  documentation += readFileContents(path.join(process.cwd(), 'package.json'));
  documentation += '\n```\n\n';

  // Add source code files
  documentation += '## Source Code\n\n';
  const sourceFiles = getTypeScriptFiles(path.join(process.cwd(), 'src'));

  sourceFiles.forEach((file) => {
    const relativePath = path.relative(process.cwd(), file);
    documentation += `### ${relativePath}\n\n\`\`\`typescript\n`;
    documentation += readFileContents(file);
    documentation += '\n```\n\n';
  });

  // Write the documentation file
  fs.writeFileSync(path.join(docsDir, 'documentation.md'), documentation);

  console.log('Documentation generated successfully in docs/documentation.md');
}

// Execute the documentation generation
generateDocumentation().catch(console.error);
