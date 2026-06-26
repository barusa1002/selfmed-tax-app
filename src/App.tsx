import { useState } from 'react';
import type { PurchaseRecord } from './types';
import { loadRecords, addRecord, deleteRecord } from './utils/storage';
import { calcTaxSummary, filterByYear } from './utils/tax';
import { exportToCsv } from './utils/exportCsv';
import Dashboard from './components/Dashboard';
import RecordForm from './components/RecordForm';
import RecordList from './components/RecordList';
import DrugSearch from './components/DrugSearch';
import TaxReport from './components/TaxReport';
import type { DrugEntry } from './data/drugDatabase';
import './App.css';

type Tab = 'records' | 'search' | 'taxreport';

export default function App() {
  const [records, setRecords] = useState<PurchaseRecord[]>(loadRecords);
  const [year, setYear] = useState(new Date().getFullYear());
  const [showForm, setShowForm] = useState(false);
  const [tab, setTab] = useState<Tab>('records');
  const [prefillDrug, setPrefillDrug] = useState<DrugEntry | null>(null);

  const yearRecords = filterByYear(records, year);
  const summary = calcTaxSummary(yearRecords);

  const handleAdd = (record: PurchaseRecord) => {
    setRecords((prev) => addRecord(prev, record));
    setShowForm(false);
    setPrefillDrug(null);
  };

  const handleDelete = (id: string) => {
    setRecords((prev) => deleteRecord(prev, id));
  };

  const handleAddFromSearch = (drug: DrugEntry) => {
    setPrefillDrug(drug);
    setTab('records');
    setShowForm(true);
  };

  const TAB_LABELS: Record<Tab, string> = {
    records: '記録・集計',
    search: '薬品を探す',
    taxreport: '確定申告サポート',
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div>
            <h1>セルフメディケーション税制 記録帳</h1>
            <p className="header-sub">対象OTC薬の購入を記録し、確定申告に備えましょう</p>
          </div>
          {tab === 'records' && (
            <div className="header-actions">
              <button
                className="btn-export"
                onClick={() => exportToCsv(yearRecords, year)}
                disabled={yearRecords.length === 0}
              >
                CSV出力
              </button>
              <button className="btn-primary" onClick={() => { setPrefillDrug(null); setShowForm(true); }}>
                ＋ 記録を追加
              </button>
            </div>
          )}
        </div>

        {/* タブナビゲーション */}
        <nav className="tab-nav">
          {(Object.keys(TAB_LABELS) as Tab[]).map((t) => (
            <button
              key={t}
              className={`tab-btn ${tab === t ? 'tab-active' : ''}`}
              onClick={() => setTab(t)}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>
      </header>

      <main className="app-main">
        {/* ── 記録・集計タブ ── */}
        {tab === 'records' && (
          <>
            <Dashboard summary={summary} year={year} onYearChange={setYear} />

            {showForm && (
              <div className="modal-overlay" onClick={() => { setShowForm(false); setPrefillDrug(null); }}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                  <RecordForm
                    onAdd={handleAdd}
                    onCancel={() => { setShowForm(false); setPrefillDrug(null); }}
                    prefillDrug={prefillDrug}
                  />
                </div>
              </div>
            )}

            <section className="records-section">
              <h2>{year}年の購入記録 ({yearRecords.length}件)</h2>
              <RecordList records={yearRecords} onDelete={handleDelete} />
            </section>
          </>
        )}

        {/* ── 薬品検索タブ ── */}
        {tab === 'search' && (
          <div className="tab-content">
            <DrugSearch onAddToRecord={handleAddFromSearch} />
          </div>
        )}

        {/* ── 確定申告サポートタブ ── */}
        {tab === 'taxreport' && (
          <div className="tab-content">
            <TaxReport records={yearRecords} summary={summary} year={year} />
          </div>
        )}
      </main>

      <footer className="app-footer no-print">
        <p>データはこのブラウザのローカルストレージに保存されます。</p>
      </footer>
    </div>
  );
}
