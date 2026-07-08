import type { PurchaseRecord } from '../types';

interface Props {
  records: PurchaseRecord[];
  onDelete: (id: string) => void;
  onEdit: (record: PurchaseRecord) => void;
}

export default function RecordList({ records, onDelete, onEdit }: Props) {
  const sorted = [...records].sort((a, b) => b.date.localeCompare(a.date));
  const fmt = (n: number) => n.toLocaleString('ja-JP');

  if (records.length === 0) {
    return (
      <div className="record-empty">
        <p>購入記録がありません。</p>
        <p>「＋ 記録を追加」から登録してください。</p>
      </div>
    );
  }

  return (
    <div className="record-list">
      <table>
        <thead>
          <tr>
            <th>日付</th>
            <th>商品名</th>
            <th>税制</th>
            <th>金額</th>
            <th>店舗</th>
            <th>メモ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((r) => (
            <tr key={r.id} className={r.eligible ? '' : 'row-not-eligible'}>
              <td className="col-date">{r.date}</td>
              <td className="col-name">{r.productName}</td>
              <td className="col-eligible">
                <span className={`eligible-tag ${r.eligible ? 'eligible' : 'not-eligible'}`}>
                  {r.eligible ? '対象' : '対象外'}
                </span>
              </td>
              <td className="col-amount">¥{fmt(r.amount)}</td>
              <td className="col-store">{r.store || '—'}</td>
              <td className="col-note">{r.note || '—'}</td>
              <td className="col-actions">
                <button className="btn-edit" onClick={() => onEdit(r)}>編集</button>
                <button
                  className="btn-delete"
                  onClick={() => {
                    if (confirm(`「${r.productName}」を削除しますか？`)) onDelete(r.id);
                  }}
                >
                  削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
