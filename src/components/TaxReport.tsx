import type { PurchaseRecord, TaxSummary } from '../types';
import { DEDUCTION_THRESHOLD, DEDUCTION_MAX } from '../types';

interface Props {
  records: PurchaseRecord[];
  summary: TaxSummary;
  year: number;
}

const STEPS = [
  {
    num: 1,
    title: '健康診断等の証明書類を用意する',
    body: 'セルフメディケーション税制を利用するには、その年に健康診断・予防接種・定期検診等を受けた証明が必要です。受診した医療機関や会社の健康診断の領収書・結果通知書を保管してください。',
    docs: ['健康診断受診証明書 または 領収書', '特定健康診査（メタボ検診）の結果通知書', '予防接種の領収書', 'がん検診の受診証明書'],
  },
  {
    num: 2,
    title: '対象医薬品の領収書を保管する',
    body: '購入したOTC薬のレシート・領収書をすべて保管してください。税制対象製品には「セルフメディケーション税制対象」マーク（★マーク）が表示されています。',
    docs: ['購入時のレシート・領収書（5年間保管推奨）', '通信販売の場合は注文確認メール等'],
  },
  {
    num: 3,
    title: '医療費控除の明細書（特例用）を作成する',
    body: 'このアプリの「明細書プレビュー」から印刷できます。または国税庁の確定申告書等作成コーナーで作成可能です。',
    docs: ['医療費控除の明細書（特例用）— 下記プレビューから印刷'],
  },
  {
    num: 4,
    title: '確定申告書を提出する',
    body: '確定申告期間（原則2月16日〜3月15日）に提出します。e-Taxオンライン・郵送・税務署窓口のいずれかで申告できます。',
    docs: ['確定申告書A or B', '医療費控除の明細書（特例用）', '源泉徴収票'],
  },
];

export default function TaxReport({ records, summary, year }: Props) {
  const { totalAmount, deductibleAmount } = summary;
  const fmt = (n: number) => n.toLocaleString('ja-JP');

  const sorted = [...records].sort((a, b) => a.date.localeCompare(b.date));

  const handlePrint = () => window.print();

  return (
    <div className="tax-report">

      {/* ── 要件チェック ── */}
      <section className="report-section">
        <h2>申告要件の確認</h2>
        <div className={`requirement-box ${summary.isEligible ? 'req-ok' : 'req-ng'}`}>
          {summary.isEligible ? (
            <>
              <span className="req-icon">✓</span>
              <div>
                <p className="req-title">{year}年は申告可能です</p>
                <p className="req-body">
                  年間購入合計 ¥{fmt(totalAmount)} が ¥{fmt(DEDUCTION_THRESHOLD)} を超えています。<br />
                  控除対象額: <strong>¥{fmt(deductibleAmount)}</strong>（上限 ¥{fmt(DEDUCTION_MAX)}）
                </p>
              </div>
            </>
          ) : (
            <>
              <span className="req-icon req-icon-ng">✗</span>
              <div>
                <p className="req-title">まだ申告できません</p>
                <p className="req-body">
                  年間合計 ¥{fmt(totalAmount)} が最低控除額 ¥{fmt(DEDUCTION_THRESHOLD)} に達していません。<br />
                  あと ¥{fmt(DEDUCTION_THRESHOLD - totalAmount)} の購入で控除対象になります。
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── 手順ガイド ── */}
      <section className="report-section no-print">
        <h2>申告の手順</h2>
        <div className="steps">
          {STEPS.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-num">{step.num}</div>
              <div className="step-body">
                <p className="step-title">{step.title}</p>
                <p className="step-text">{step.body}</p>
                <ul className="step-docs">
                  {step.docs.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 明細書プレビュー ── */}
      <section className="report-section">
        <div className="meisai-header no-print">
          <h2>明細書プレビュー・印刷</h2>
          <button className="btn-print" onClick={handlePrint}>印刷する</button>
        </div>

        {/* 印刷用ヘッダー（画面では非表示） */}
        <div className="print-only print-title-block">
          <h1 className="print-title">医療費控除の明細書（特例用）</h1>
          <p className="print-subtitle">セルフメディケーション税制（特定一般用医薬品等購入費）</p>
          <p className="print-year">対象年: {year}年分</p>
        </div>

        {records.length === 0 ? (
          <p className="no-records-msg">購入記録がありません。「記録・集計」タブから登録してください。</p>
        ) : (
          <>
            <div className="meisai-table-wrapper">
              <table className="meisai-table">
                <thead>
                  <tr>
                    <th>購入日</th>
                    <th>医薬品の名称</th>
                    <th>購入した店舗の名称</th>
                    <th>支払金額 (円)</th>
                    <th>保険金等で<br />補填される金額 (円)</th>
                    <th>差引金額 (円)</th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((r) => (
                    <tr key={r.id}>
                      <td>{r.date}</td>
                      <td>{r.productName}</td>
                      <td>{r.store || '—'}</td>
                      <td className="num-cell">{fmt(r.amount)}</td>
                      <td className="num-cell">0</td>
                      <td className="num-cell">{fmt(r.amount)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="total-row">
                    <td colSpan={3}>合計</td>
                    <td className="num-cell">{fmt(totalAmount)}</td>
                    <td className="num-cell">0</td>
                    <td className="num-cell">{fmt(totalAmount)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="deduction-calc">
              <table className="calc-table">
                <tbody>
                  <tr>
                    <td>差引金額の合計（A）</td>
                    <td className="num-cell">¥{fmt(totalAmount)}</td>
                  </tr>
                  <tr>
                    <td>控除額の計算の基礎となる金額（A − 12,000円）</td>
                    <td className="num-cell">¥{fmt(Math.max(totalAmount - DEDUCTION_THRESHOLD, 0))}</td>
                  </tr>
                  <tr className={summary.isEligible ? 'highlight-row' : ''}>
                    <td>医療費控除額（上限 ¥{fmt(DEDUCTION_MAX)}）</td>
                    <td className="num-cell">¥{fmt(deductibleAmount)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="meisai-note no-print">
              ※ 印刷後、氏名・住所・保険金等で補填される金額を手書きで記入してください。<br />
              ※ 明細書と領収書を税務署に提出（または e-Tax で送信）してください。
            </p>
            <p className="meisai-note print-only">
              氏名:__________________ 　住所:__________________________________________________<br />
              ※ 本明細書は医療費控除（特例）の申告に使用します。領収書を添付してください。
            </p>
          </>
        )}
      </section>

      {/* ── e-Tax リンク案内 ── */}
      <section className="report-section no-print">
        <h2>オンライン申告（e-Tax）</h2>
        <div className="etax-info">
          <p>国税庁の確定申告書等作成コーナーを使うと、ブラウザ上で申告書を作成・送信できます。</p>
          <ul className="etax-list">
            <li>マイナンバーカードまたはID・パスワード方式で利用可能</li>
            <li>還付申告は1月1日から申告可能（医療費は5年以内なら遡って申告可）</li>
            <li>源泉徴収票・明細書のデータを入力して送信</li>
          </ul>
          <p className="etax-url-note">
            国税庁 確定申告書等作成コーナー：<br />
            <code>https://www.keisan.nta.go.jp/</code>
          </p>
        </div>
      </section>
    </div>
  );
}
