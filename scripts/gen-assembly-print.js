#!/usr/bin/env node
// Generates docs/assembly/print-all.md by concatenating all step files.
// Run automatically before build/start so print-all stays in sync with step pages.

const fs = require('fs');
const path = require('path');

const ASSEMBLY_DIR = path.join(__dirname, '../docs/assembly');

const STEPS = [
  'step1-face',
  'step2-frame',
  'step3-caster',
  'step4-tire',
  'step5-undercarriage',
  'step6-motor',
  'step7-sensor',
  'step8-speaker',
];

const HEADER = `---
id: print-all
sidebar_class_name: hidden
pagination_prev: null
pagination_next: null
---

import { PrintButton, AutoPrint } from '@site/src/components/PrintButton';

# Cube Petit v3 組み立て手順（全ページ）

<AutoPrint />
<PrintButton />

> このページは印刷・PDF 保存用です。ブラウザの印刷ダイアログで「PDF に保存」を選択してください。
`;

function stripFrontmatter(text) {
  return text.replace(/^---[\s\S]*?---\n+/, '');
}

let output = HEADER;

for (const step of STEPS) {
  const filePath = path.join(ASSEMBLY_DIR, `${step}.md`);
  if (!fs.existsSync(filePath)) {
    console.warn(`  Warning: ${step}.md not found, skipping`);
    continue;
  }
  const text = fs.readFileSync(filePath, 'utf8');
  const body = stripFrontmatter(text).trim();
  output += `\n---\n\n${body}\n`;
}

output += '\n---\n\n*組み立て完了。次は [PC 設定・USB 配線](/software/) へ進んでください。*\n';

const outPath = path.join(ASSEMBLY_DIR, 'print-all.md');
fs.writeFileSync(outPath, output);
console.log('✓ Generated docs/assembly/print-all.md');
