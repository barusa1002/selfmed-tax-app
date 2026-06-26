import type { PurchaseRecord } from '../types';

export function exportToCsv(records: PurchaseRecord[], year: number): void {
  const header = '日付,商品名,購入金額(円),購入店舗,メモ';
  const rows = records.map(
    (r) => `${r.date},${r.productName},${r.amount},${r.store || ''},${r.note || ''}`
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
