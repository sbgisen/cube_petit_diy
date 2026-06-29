import React, { useEffect } from 'react';

export function PrintButton() {
  return (
    <button
      className="button button--primary no-print"
      style={{ marginBottom: '1rem' }}
      onClick={() => window.print()}
    >
      🖨️ 印刷 / PDF 保存
    </button>
  );
}

export function OpenPrintPage({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="button button--secondary no-print"
      style={{ marginLeft: '0.5rem', marginBottom: '1rem' }}
    >
      📄 全ページ印刷用を開く
    </a>
  );
}

export function AutoPrint() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('print') === '1') {
      setTimeout(() => window.print(), 600);
    }
  }, []);
  return null;
}
