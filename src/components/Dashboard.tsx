import type { TaxSummary } from '../types';
import { DEDUCTION_THRESHOLD, DEDUCTION_MAX } from '../types';

interface Props {
  summary: TaxSummary;
  year: number;
  onYearChange: (year: number) => void;
}

export default function Dashboard({ summary, year, onYearChange }: Props) {
  const { totalAmount, eligibleAmount, deductibleAmount, taxSavingEstimate, isEligible } = summary;
  const progressPct = Math.min((eligibleAmount / DEDUCTION_THRESHOLD) * 100, 100);
  const fmt = (n: number) => n.toLocaleString('ja-JP');

  const currentYear = new Date().getFullYear();
  const yearOptions = [currentYear, currentYear - 1, currentYear - 2];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>年間集計</h2>
        <select value={year} onChange={(e) => onYearChange(Number(e.target.value))}>
          {yearOptions.map((y) => (
            <option key={y} value={y}>{y}年</option>
          ))}
        </select>
      </div>

      <div className="cards">
        <div className="card">
          <span className="card-label">購入合計（全品）</span>
          <span className="card-value">¥{fmt(totalAmount)}</span>
        </div>
        <div className={`card ${isEligible ? 'card-eligible' : ''}`}>
          <span className="card-label">控除対象額</span>
          <span className="card-value">¥{fmt(deductibleAmount)}</span>
          {isEligible && <span className="badge">適用可能</span>}
        </div>
        <div className="card">
          <span className="card-label">節税概算 (税率20%)</span>
          <span className="card-value">¥{fmt(taxSavingEstimate)}</span>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-labels">
          <span>税制対象薬品の合計: ¥{fmt(eligibleAmount)}</span>
          <span>¥{fmt(DEDUCTION_THRESHOLD)} 達成で控除開始</span>
        </div>
        <div className="progress-bar-bg">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="progress-info">
          <span className="progress-note">※ 対象外の薬品は含まれません</span>
          {!isEligible && (
            <span className="progress-remaining">
              あと ¥{fmt(DEDUCTION_THRESHOLD - eligibleAmount)} で控除対象
            </span>
          )}
          {isEligible && (
            <span className="progress-ok">
              控除上限まで ¥{fmt(DEDUCTION_MAX - deductibleAmount)} 余裕あり
            </span>
          )}
        </div>
      </div>

      <p className="disclaimer">
        ※ 節税概算は所得税10%＋住民税10%の合計20%で試算。実際の税率により異なります。<br />
        ※ 対象はセルフメディケーション税制対象マーク付きの市販薬のみです。
      </p>
    </div>
  );
}
