import React from 'react';
import styles from './styles.module.css';

function parseDomTables() {
  const container =
    document.querySelector('.theme-doc-markdown') ||
    document.querySelector('article');
  if (!container) return [];

  return Array.from(container.querySelectorAll('table')).map((table, idx) => {
    let name = `Table ${idx + 1}`;
    let prev = table.parentElement?.previousElementSibling;
    while (prev) {
      if (/^H[1-6]$/.test(prev.tagName)) {
        name = prev.textContent.trim();
        break;
      }
      prev = prev.previousElementSibling;
    }
    const headers = Array.from(table.querySelectorAll('thead th')).map(th =>
      th.textContent.trim()
    );
    const rows = Array.from(table.querySelectorAll('tbody tr')).map(tr =>
      Array.from(tr.querySelectorAll('td')).map(td => td.textContent.trim())
    );
    return { name, headers, rows };
  });
}

function sectionsToCSV(sections) {
  const BOM = '﻿';
  const lines = sections.flatMap(({ name, headers, rows }) => [
    `"[${name}]"`,
    headers.map(h => `"${h.replace(/"/g, '""')}"`).join(','),
    ...rows.map(row =>
      row.map(c => `"${String(c ?? '').replace(/"/g, '""')}"`).join(',')
    ),
    '',
  ]);
  return BOM + lines.join('\r\n');
}

async function sectionsToXlsx(sections, filename) {
  const XLSX = await import('xlsx');
  const wb = XLSX.utils.book_new();
  sections.forEach(({ name, headers, rows }) => {
    const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    ws['!cols'] = headers.map(() => ({ wch: 22 }));
    XLSX.utils.book_append_sheet(wb, ws, name.slice(0, 31));
  });
  XLSX.writeFile(wb, `${filename}.xlsx`);
}

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function BomDownload({ sections: propSections, filename = 'cube_petit_bom' }) {
  const getSections = () => propSections ?? parseDomTables();

  const handleCsv = () => {
    const sections = getSections();
    if (!sections.length) return alert('テーブルが見つかりませんでした。');
    downloadBlob(sectionsToCSV(sections), `${filename}.csv`, 'text/csv;charset=utf-8;');
  };

  const handleXlsx = async () => {
    const sections = getSections();
    if (!sections.length) return alert('テーブルが見つかりませんでした。');
    await sectionsToXlsx(sections, filename);
  };

  return (
    <div className={styles.wrap}>
      <button className={`button button--primary ${styles.btn}`} onClick={handleCsv}>
        ⬇ CSV ダウンロード
      </button>
      <button className={`button ${styles.btn} ${styles.excel}`} onClick={handleXlsx}>
        ⬇ Excel ダウンロード
      </button>
    </div>
  );
}
