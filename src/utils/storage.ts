import type { PurchaseRecord } from '../types';

const KEY = 'selfmed_records';

export function loadRecords(): PurchaseRecord[] {
  try {
    const raw = localStorage.getItem(KEY);
    const records: PurchaseRecord[] = raw ? JSON.parse(raw) : [];
    // eligible フィールドがない旧データは true（対象）として扱う
    return records.map((r) => ({ ...r, eligible: r.eligible ?? true }));
  } catch {
    return [];
  }
}

export function saveRecords(records: PurchaseRecord[]): void {
  localStorage.setItem(KEY, JSON.stringify(records));
}

export function addRecord(records: PurchaseRecord[], record: PurchaseRecord): PurchaseRecord[] {
  const next = [...records, record];
  saveRecords(next);
  return next;
}

export function updateRecord(records: PurchaseRecord[], record: PurchaseRecord): PurchaseRecord[] {
  const next = records.map((r) => (r.id === record.id ? record : r));
  saveRecords(next);
  return next;
}

export function deleteRecord(records: PurchaseRecord[], id: string): PurchaseRecord[] {
  const next = records.filter((r) => r.id !== id);
  saveRecords(next);
  return next;
}
