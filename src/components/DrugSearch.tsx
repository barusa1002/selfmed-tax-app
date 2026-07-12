import { useState } from 'react';
import { DRUG_DATABASE, SYMPTOM_CATEGORIES, DRUG_CATEGORIES, searchBySymptom, searchByCategory } from '../data/drugDatabase';
import type { DrugEntry } from '../data/drugDatabase';

interface Props {
  onAddToRecord?: (drug: DrugEntry) => void;
}

type SearchMode = 'symptom' | 'category' | 'keyword';

export default function DrugSearch({ onAddToRecord }: Props) {
  const [mode, setMode] = useState<SearchMode>('symptom');
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [eligibleOnly, setEligibleOnly] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const getResults = (): DrugEntry[] => {
    let results: DrugEntry[] = [];
    if (mode === 'symptom' && selectedSymptom) {
      results = searchBySymptom(selectedSymptom);
    } else if (mode === 'category' && selectedCategory) {
      results = searchByCategory(selectedCategory);
    } else if (mode === 'keyword' && keyword.trim().length >= 1) {
      const q = keyword.toLowerCase();
      results = DRUG_DATABASE.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.maker.toLowerCase().includes(q) ||
          d.symptoms.some((s) => s.includes(q)) ||
          (d.activeIngredient ?? '').toLowerCase().includes(q)
      );
    }
    return eligibleOnly ? results.filter((d) => d.eligible) : results;
  };

  const results = getResults();
  const fmt = (n: number) => n.toLocaleString('ja-JP');

  return (
    <div className="drug-search">
      <div className="search-header">
        <h2>対応医薬品を探す</h2>
        <p className="search-subtitle">症状・薬効カテゴリ・キーワードから市販薬を検索できます</p>
      </div>

      {/* 検索モード切替 */}
      <div className="search-mode-tabs">
        {(['symptom', 'category', 'keyword'] as SearchMode[]).map((m) => (
          <button
            key={m}
            className={`mode-tab ${mode === m ? 'active' : ''}`}
            onClick={() => { setMode(m); setSelectedSymptom(''); setSelectedCategory(''); setKeyword(''); }}
          >
            {m === 'symptom' ? '症状から探す' : m === 'category' ? '薬効から探す' : 'キーワード検索'}
          </button>
        ))}
      </div>

      {/* 症状選択 */}
      {mode === 'symptom' && (
        <div className="symptom-picker">
          {Object.entries(SYMPTOM_CATEGORIES).map(([group, symptoms]) => (
            <div key={group} className="symptom-group">
              <p className="symptom-group-label">{group}</p>
              <div className="symptom-chips">
                {symptoms.map((s) => (
                  <button
                    key={s}
                    className={`chip ${selectedSymptom === s ? 'chip-active' : ''}`}
                    onClick={() => setSelectedSymptom(selectedSymptom === s ? '' : s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 薬効カテゴリ選択 */}
      {mode === 'category' && (
        <div className="category-picker">
          <div className="symptom-chips">
            {DRUG_CATEGORIES.map((c) => (
              <button
                key={c}
                className={`chip ${selectedCategory === c ? 'chip-active' : ''}`}
                onClick={() => setSelectedCategory(selectedCategory === c ? '' : c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* キーワード検索 */}
      {mode === 'keyword' && (
        <div className="keyword-input-wrapper">
          <input
            type="text"
            className="keyword-input"
            placeholder="商品名・成分名・症状で検索（例: ロキソプロフェン、頭痛）"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      )}

      {/* フィルター */}
      <div className="search-filter-row">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={eligibleOnly}
            onChange={(e) => setEligibleOnly(e.target.checked)}
          />
          <span>セルフメディケーション税制対象のみ</span>
        </label>
        {results.length > 0 && (
          <span className="result-count">{results.length}件</span>
        )}
      </div>

      {/* 結果一覧 */}
      {results.length === 0 && (mode === 'symptom' ? selectedSymptom : mode === 'category' ? selectedCategory : keyword) && (
        <p className="no-results">該当する医薬品が見つかりませんでした。</p>
      )}

      <div className="drug-results">
        {results.map((drug) => (
          <div key={drug.jan ?? drug.name} className={`drug-card ${drug.eligible ? 'drug-card-eligible' : ''}`}>
            <div className="drug-card-header" onClick={() => setExpanded(expanded === drug.jan ? null : drug.jan ?? null)}>
              <div className="drug-card-title">
                <span className={`badge-small ${drug.eligible ? 'eligible' : 'not-eligible'}`}>
                  {drug.eligible ? '税制対象' : '対象外'}
                </span>
                <span className="drug-card-name">{drug.name}</span>
              </div>
              <div className="drug-card-meta">
                <span className="drug-card-category">{drug.category}</span>
                <span className="drug-card-price">¥{fmt(drug.price)}</span>
                <span className="expand-icon">{expanded === drug.jan ? '▲' : '▼'}</span>
              </div>
            </div>

            {expanded === drug.jan && (
              <div className="drug-card-detail">
                <p className="detail-maker">{drug.maker}</p>
                {drug.activeIngredient && (
                  <p className="detail-ingredient">主成分: {drug.activeIngredient}</p>
                )}
                <div className="detail-symptoms">
                  {drug.symptoms.map((s) => (
                    <span key={s} className="symptom-tag">{s}</span>
                  ))}
                </div>
                {onAddToRecord && (
                  <button
                    className="btn-add-record"
                    onClick={() => onAddToRecord(drug)}
                  >
                    ＋ 購入記録に追加
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
