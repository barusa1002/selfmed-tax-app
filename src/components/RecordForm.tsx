import { useState } from 'react';
import type { PurchaseRecord } from '../types';
import type { DrugEntry } from '../data/drugDatabase';
import { searchByName } from '../data/drugDatabase';
import BarcodeScanner from './BarcodeScanner';

interface Props {
  onAdd: (record: PurchaseRecord) => void;
  onCancel: () => void;
  prefillDrug?: DrugEntry | null;
}

export default function RecordForm({ onAdd, onCancel, prefillDrug }: Props) {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [productName, setProductName] = useState(prefillDrug?.name ?? '');
  const [amount, setAmount] = useState(prefillDrug ? String(prefillDrug.price) : '');
  const [store, setStore] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const [eligible, setEligible] = useState<boolean>(prefillDrug?.eligible ?? true);
  const [eligibleLocked, setEligibleLocked] = useState<boolean>(prefillDrug != null);
  const [suggestions, setSuggestions] = useState<DrugEntry[]>([]);

  const handleNameChange = (value: string) => {
    setProductName(value);
    setError('');
    setEligibleLocked(false);
    if (value.length >= 2) {
      setSuggestions(searchByName(value).slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const applySuggestion = (drug: DrugEntry) => {
    setProductName(drug.name);
    if (!amount) setAmount(String(drug.price));
    setEligible(drug.eligible);
    setEligibleLocked(true);
    setSuggestions([]);
  };

  const handleScanDetected = (drug: DrugEntry) => {
    if (drug.name) {
      setProductName(drug.name);
      if (!amount) setAmount(String(drug.price));
      setEligible(drug.eligible);
      setEligibleLocked(true);
    }
    setShowScanner(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName.trim()) { setError('商品名を入力してください'); return; }
    if (!amount || Number(amount) <= 0) { setError('金額を正しく入力してください'); return; }
    onAdd({
      id: crypto.randomUUID(),
      date,
      productName: productName.trim(),
      amount: Number(amount),
      store: store.trim(),
      note: note.trim(),
      eligible,
    });
  };

  if (showScanner) {
    return (
      <BarcodeScanner
        onDetected={handleScanDetected}
        onClose={() => setShowScanner(false)}
      />
    );
  }

  return (
    <form className="record-form" onSubmit={handleSubmit}>
      <h3>購入記録を追加</h3>

      {error && <p className="form-error">{error}</p>}

      <div className="form-group">
        <label>購入日</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>

      <div className="form-group">
        <label>商品名 <span className="required">*</span></label>
        <div className="input-with-scan">
          <div className="autocomplete-wrapper">
            <input
              type="text"
              placeholder="例: ロキソニンS、新ルルA"
              value={productName}
              onChange={(e) => handleNameChange(e.target.value)}
              autoComplete="off"
            />
            {suggestions.length > 0 && (
              <ul className="suggestion-list">
                {suggestions.map((d) => (
                  <li key={d.jan} onClick={() => applySuggestion(d)}>
                    <span className="sug-name">{d.name}</span>
                    <span className="sug-detail">{d.maker}</span>
                    <span className={`sug-badge ${d.eligible ? 'eligible' : 'not-eligible'}`}>
                      {d.eligible ? '対象' : '対象外'}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="button"
            className="btn-scan"
            onClick={() => setShowScanner(true)}
            title="バーコードをスキャン"
          >
            📷 スキャン
          </button>
        </div>
      </div>

      <div className="form-group">
        <label>購入金額 (円) <span className="required">*</span></label>
        <input
          type="number"
          min="1"
          placeholder="例: 1280"
          value={amount}
          onChange={(e) => { setAmount(e.target.value); setError(''); }}
        />
      </div>

      <div className="form-group">
        <label>購入店舗</label>
        <input
          type="text"
          placeholder="例: ドラッグストア○○店"
          value={store}
          onChange={(e) => setStore(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>メモ</label>
        <input
          type="text"
          placeholder="例: レシート保管済み"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      {/* 対象チェックボックス */}
      <div className={`eligible-toggle ${eligible ? 'toggle-on' : 'toggle-off'}`}>
        <label className="eligible-label">
          <input
            type="checkbox"
            checked={eligible}
            onChange={(e) => { setEligible(e.target.checked); setEligibleLocked(false); }}
          />
          <span>
            セルフメディケーション税制の対象商品
            {eligibleLocked && <span className="auto-detected">（自動判定）</span>}
          </span>
        </label>
        {!eligible && (
          <p className="eligible-hint">対象外の場合、購入合計には含まれますが控除計算には使われません。</p>
        )}
      </div>

      <div className="form-actions">
        <button type="button" className="btn-secondary" onClick={onCancel}>キャンセル</button>
        <button type="submit" className="btn-primary">追加する</button>
      </div>
    </form>
  );
}
