import type { PurchaseRecord } from '../types';

// カンマ・引用符・改行を含むフィールドを RFC 4180 に沿ってエスケープする
function escapeCsvField(value: string | number): string {
  const s = String(value ?? '');
  if (/[",\n\r]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

export function exportToCsv(records: PurchaseRecord[], year: number): void {
  const header = '日付,商品名,税制対象,購入金額(円),購入店舗,メモ';
  const rows = [...records]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((r) =>
      [
        r.date,
        r.productName,
        r.eligible ? '対象' : '対象外',
        r.amount,
        r.store || '',
        r.note || '',
      ]
        .map(escapeCsvField)
        .join(',')
    );
  const bom = '﻿';
  const csv = bom + [header, ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `セルフメディケーション税制_${year}年.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
