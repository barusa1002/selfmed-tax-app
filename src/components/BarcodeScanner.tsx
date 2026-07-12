import { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';
import { lookupByJan } from '../data/drugDatabase';
import type { DrugEntry } from '../data/drugDatabase';

interface Props {
  onDetected: (drug: DrugEntry, jan: string) => void;
  onClose: () => void;
}

export default function BarcodeScanner({ onDetected, onClose }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const readerRef = useRef<BrowserMultiFormatReader | null>(null);
  const [status, setStatus] = useState<'scanning' | 'found' | 'notfound'>('scanning');
  const [foundDrug, setFoundDrug] = useState<DrugEntry | null>(null);
  const [scannedJan, setScannedJan] = useState('');
  const [error, setError] = useState('');

  const startScan = () => {
    const reader = new BrowserMultiFormatReader();
    readerRef.current = reader;
    reader
      .decodeFromVideoDevice(null, videoRef.current!, (result, err) => {
        if (result) {
          const jan = result.getText();
          const drug = lookupByJan(jan);
          setScannedJan(jan);
          if (drug) {
            setFoundDrug(drug);
            setStatus('found');
          } else {
            setStatus('notfound');
          }
          reader.reset();
        } else if (err && !(err instanceof NotFoundException)) {
          setError('カメラへのアクセスに失敗しました。設定でカメラの使用を許可してください。');
        }
      })
      .catch(() => {
        setError('カメラへのアクセスに失敗しました。設定でカメラの使用を許可してください。');
      });
  };

  useEffect(() => {
    startScan();
    return () => {
      // 再スキャンでリーダーが差し替わっている可能性があるため、
      // 必ず最新のインスタンスを解放する（カメラの消し忘れ防止）
      readerRef.current?.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleConfirm = () => {
    if (foundDrug) onDetected(foundDrug, scannedJan);
  };

  const handleRescan = () => {
    setStatus('scanning');
    setFoundDrug(null);
    setScannedJan('');
    readerRef.current?.reset();
    startScan();
  };

  return (
    <div className="scanner-wrapper">
      <div className="scanner-header">
        <h3>バーコードをスキャン</h3>
        <button className="scanner-close" onClick={onClose}>✕</button>
      </div>

      {error ? (
        <div className="scanner-error">
          <p>{error}</p>
          <button className="btn-secondary" onClick={onClose}>閉じる</button>
        </div>
      ) : (
        <>
          <div className="scanner-video-wrapper">
            <video ref={videoRef} className="scanner-video" />
            {status === 'scanning' && (
              <div className="scanner-overlay">
                <div className="scanner-frame" />
                <p className="scanner-hint">薬のパッケージのバーコードをカメラに向けてください</p>
              </div>
            )}
          </div>

          {status === 'found' && foundDrug && (
            <div className="scanner-result found">
              <div className={`eligibility-badge ${foundDrug.eligible ? 'eligible' : 'not-eligible'}`}>
                {foundDrug.eligible ? '対象' : '対象外'}
              </div>
              <div className="drug-info">
                <p className="drug-name">{foundDrug.name}</p>
                <p className="drug-detail">{foundDrug.maker} / {foundDrug.category}</p>
                <p className="drug-price">参考価格: ¥{foundDrug.price.toLocaleString('ja-JP')}</p>
                {!foundDrug.eligible && (
                  <p className="drug-warning">
                    この商品はセルフメディケーション税制の対象外です。
                  </p>
                )}
              </div>
              <p className="jan-code">JAN: {scannedJan}</p>
              <div className="scanner-actions">
                <button className="btn-secondary" onClick={handleRescan}>再スキャン</button>
                <button className="btn-primary" onClick={handleConfirm}>
                  この商品を使用
                </button>
              </div>
            </div>
          )}

          {status === 'notfound' && (
            <div className="scanner-result notfound">
              <p className="notfound-title">データベースに見つかりませんでした</p>
              <p className="notfound-jan">JAN: {scannedJan}</p>
              <p className="notfound-hint">
                手動で商品名を入力するか、再スキャンしてください。
              </p>
              <div className="scanner-actions">
                <button className="btn-secondary" onClick={handleRescan}>再スキャン</button>
                <button className="btn-primary" onClick={() => onDetected(
                  { jan: scannedJan, name: '', maker: '', category: '', eligible: false, price: 0, symptoms: [] },
                  scannedJan
                )}>
                  手動入力に移る
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
