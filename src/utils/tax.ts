import type { PurchaseRecord, TaxSummary } from '../types';
import { DEDUCTION_THRESHOLD, DEDUCTION_MAX } from '../types';

export function calcTaxSummary(records: PurchaseRecord[]): TaxSummary {
  const totalAmount = records.reduce((sum, r) => sum + r.amount, 0);
  const eligibleAmount = records.filter((r) => r.eligible).reduce((sum, r) => sum + r.amount, 0);
  const over = eligibleAmount - DEDUCTION_THRESHOLD;
  const deductibleAmount = over > 0 ? Math.min(over, DEDUCTION_MAX) : 0;
  const taxSavingEstimate = Math.floor(deductibleAmount * 0.2);
  return {
    totalAmount,
    eligibleAmount,
    deductibleAmount,
    taxSavingEstimate,
    isEligible: eligibleAmount > DEDUCTION_THRESHOLD,
  };
}

export function filterByYear(records: PurchaseRecord[], year: number): PurchaseRecord[] {
  return records.filter((r) => r.date.startsWith(String(year)));
}
