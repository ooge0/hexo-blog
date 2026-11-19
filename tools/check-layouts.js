#!/usr/bin/env node
'use strict';

// Utility: find _posts/ files with layout:page (renders without board wrapper in Fluid theme).
// Run: node tools/check-layouts.js

const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '..', 'source', '_posts');
const LAYOUT_RE = /^layout:\s*(\S+)/m;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name)
  );
}

const issues = [];

walk(POSTS_DIR)
  .filter(f => f.endsWith('.md'))
  .forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    const m = content.match(LAYOUT_RE);
    const layout = m ? m[1] : '(none)';
    // Only flag explicit layout:page — missing layout defaults to 'post' in Hexo
    if (layout === 'page') {
      issues.push({ file: path.relative(POSTS_DIR, f), layout });
    }
  });

if (issues.length === 0) {
  console.log('✓ All _posts files use layout: post');
} else {
  console.log(`✗ Found ${issues.length} file(s) in _posts/ with wrong layout:\n`);
  issues.forEach(({ file, layout }) => console.log(`  [${layout}]  ${file}`));
  console.log('\nFix: change layout to "post", or move file to source/<name>/index.md for a standalone page.');
  process.exit(1);
}
