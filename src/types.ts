export interface PurchaseRecord {
  id: string;
  date: string; // YYYY-MM-DD
  productName: string;
  amount: number;
  store: string;
  note: string;
  eligible: boolean;
}

export interface TaxSummary {
  totalAmount: number;
  eligibleAmount: number;
  deductibleAmount: number;
  taxSavingEstimate: number;
  isEligible: boolean;
}

export const DEDUCTION_THRESHOLD = 12000;
export const DEDUCTION_MAX = 88000;
