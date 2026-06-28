export interface DrugEntry {
  jan?: string;
  name: string;
  maker: string;
  category: string;
  eligible: boolean;
  price: number;
  symptoms: string[];
  activeIngredient?: string;
}

export const SYMPTOM_CATEGORIES: Record<string, string[]> = {
  '痛み・発熱': ['頭痛', '発熱', '生理痛', '歯痛', '喉の痛み', '筋肉痛', '関節痛'],
  '風邪・鼻・咳': ['鼻水', '鼻づまり', '咳・痰', '悪寒', '倦怠感', 'くしゃみ'],
  'アレルギー': ['花粉症', 'アレルギー性鼻炎', '目のかゆみ', '皮膚のかゆみ'],
  '胃腸': ['胃痛', '胃もたれ', '胸やけ', '消化不良', '胃酸過多', '下痢', '便秘', '膨満感'],
  '皮膚・外用': ['肩こり', '腰痛', '打撲', 'ねんざ', 'スポーツ障害', '水虫', '湿疹・かぶれ', '虫刺され'],
  '目': ['目のかゆみ', '目の充血', '疲れ目', 'ドライアイ'],
  'その他': ['禁煙', '抜け毛・薄毛', 'ニキビ', '口内炎'],
};

export const ALL_SYMPTOMS = Object.values(SYMPTOM_CATEGORIES).flat();

export const DRUG_DATABASE: DrugEntry[] = [

  // ── 解熱鎮痛薬 ──
  { jan: '4987107610867', name: 'ロキソニンS', maker: '第一三共ヘルスケア株式会社', category: '解熱鎮痛', eligible: true, price: 660, symptoms: ['頭痛', '発熱', '生理痛', '歯痛', '喉の痛み', '筋肉痛', '関節痛'], activeIngredient: 'ロキソプロフェンNa水和物' },
  { jan: '4987107619006', name: 'ロキソニンSプレミアム', maker: '第一三共ヘルスケア株式会社', category: '解熱鎮痛', eligible: true, price: 880, symptoms: ['頭痛', '発熱', '生理痛', '歯痛'], activeIngredient: 'ロキソプロフェンNa水和物' },
  { jan: '4987107617668', name: 'ロキソニンSプラス', maker: '第一三共ヘルスケア株式会社', category: '解熱鎮痛', eligible: true, price: 770, symptoms: ['頭痛', '発熱', '生理痛'], activeIngredient: 'ロキソプロフェンNa水和物' },
  { jan: '4987107630025', name: 'ロキソニンSクイック', maker: '第一三共ヘルスケア株式会社', category: '解熱鎮痛', eligible: true, price: 770, symptoms: ['頭痛', '発熱', '生理痛'], activeIngredient: 'ロキソプロフェンNa水和物' },
  { jan: '4987300054987', name: 'イブA錠', maker: 'エスエス製薬株式会社', category: '解熱鎮痛', eligible: true, price: 660, symptoms: ['頭痛', '発熱', '生理痛', '歯痛'], activeIngredient: 'イブプロフェン・アリルイソプロピルアセチル尿素・無水カフェイン' },
  { jan: '4987300058503', name: 'イブA錠EX', maker: 'エスエス製薬株式会社', category: '解熱鎮痛', eligible: true, price: 880, symptoms: ['頭痛', '発熱', '生理痛', '歯痛'], activeIngredient: 'イブプロフェン・アリルイソプロピルアセチル尿素・無水カフェイン' },
  { jan: '4987300052709', name: 'イブクイック頭痛薬', maker: 'エスエス製薬株式会社', category: '解熱鎮痛', eligible: true, price: 880, symptoms: ['頭痛', '発熱'], activeIngredient: 'イブプロフェン・アリルイソプロピルアセチル尿素・無水カフェイン' },
  { jan: '4987300058800', name: 'イブクイック頭痛薬DX', maker: 'エスエス製薬株式会社', category: '解熱鎮痛', eligible: true, price: 1100, symptoms: ['頭痛', '発熱', '生理痛'], activeIngredient: 'イブプロフェン・アリルイソプロピルアセチル尿素・無水カフェイン' },
  { jan: '4903301199380', name: 'バファリンA', maker: 'ライオン株式会社', category: '解熱鎮痛', eligible: false, price: 660, symptoms: ['頭痛', '発熱', '生理痛'], activeIngredient: 'アスピリン' },
  { jan: '4903301190929', name: 'バファリンプレミアム', maker: 'ライオン株式会社', category: '解熱鎮痛', eligible: true, price: 880, symptoms: ['頭痛', '発熱', '生理痛', '歯痛'], activeIngredient: 'イブプロフェン' },
  { jan: '4903301241850', name: 'バファリンルナJ', maker: 'ライオン株式会社', category: '解熱鎮痛', eligible: false, price: 880, symptoms: ['頭痛', '発熱', '生理痛'], activeIngredient: 'イブプロフェン' },
  { jan: '4903301235187', name: 'バファリンEX', maker: 'ライオン株式会社', category: '解熱鎮痛', eligible: true, price: 1100, symptoms: ['頭痛', '発熱', '生理痛', '歯痛'], activeIngredient: 'ロキソプロフェンNa水和物' },
  { jan: '4987123701709', name: 'タイレノールA', maker: '東亜薬品株式会社', category: '解熱鎮痛', eligible: false, price: 660, symptoms: ['頭痛', '発熱', '喉の痛み'], activeIngredient: 'アセトアミノフェン' },
  { jan: '4987306040885', name: 'ナロンエースT', maker: '大正製薬株式会社', category: '解熱鎮痛', eligible: true, price: 880, symptoms: ['頭痛', '発熱', '生理痛'], activeIngredient: 'イブプロフェン' },
  { jan: '4987306040960', name: 'ナロンエースR', maker: '大正製薬株式会社', category: '解熱鎮痛', eligible: true, price: 770, symptoms: ['頭痛', '発熱'], activeIngredient: 'イブプロフェン' },
  { jan: '4987087031539', name: 'セデスV', maker: 'シオノギヘルスケア株式会社', category: '解熱鎮痛', eligible: true, price: 660, symptoms: ['頭痛', '発熱', '生理痛'], activeIngredient: 'イブプロフェン' },
  { jan: '4987087036145', name: 'セデス・ハイG', maker: 'シオノギヘルスケア株式会社', category: '解熱鎮痛', eligible: false, price: 660, symptoms: ['頭痛', '発熱'], activeIngredient: 'アセトアミノフェン・エテンザミド' },
  { jan: '4987009111042', name: 'ノーシンピュア', maker: '株式会社アラクス', category: '解熱鎮痛', eligible: false, price: 550, symptoms: ['頭痛', '発熱'], activeIngredient: 'アセトアミノフェン' },
  { jan: '4987009111615', name: 'ノーシンアイ', maker: '株式会社アラクス', category: '解熱鎮痛', eligible: true, price: 770, symptoms: ['頭痛', '発熱', '生理痛'], activeIngredient: 'イブプロフェン' },
  { jan: '4903301011057', name: 'エキセドリンA錠', maker: 'ライオン株式会社', category: '解熱鎮痛', eligible: false, price: 550, symptoms: ['頭痛', '発熱'], activeIngredient: 'イブプロフェン' },

  // ── 総合感冒薬 ──
  { jan: '4901301240019', name: '新ルルA錠s', maker: '第一三共ヘルスケア株式会社', category: '総合感冒', eligible: true, price: 880, symptoms: ['発熱', '鼻水', '鼻づまり', '咳・痰', '悪寒', '倦怠感'] },
  { jan: '4987107611437', name: '新ルルAゴールドDX', maker: '第一三共ヘルスケア株式会社', category: '総合感冒', eligible: true, price: 1100, symptoms: ['発熱', '鼻水', '鼻づまり', '咳・痰', '悪寒', '喉の痛み'] },
  { jan: '4901301240057', name: '新ルルA錠Pro', maker: '第一三共ヘルスケア株式会社', category: '総合感冒', eligible: true, price: 1320, symptoms: ['発熱', '鼻水', '咳・痰', '悪寒', '倦怠感'] },
  { jan: '4987306047310', name: 'パブロンSゴールドW錠', maker: '大正製薬株式会社', category: '総合感冒', eligible: true, price: 880, symptoms: ['発熱', '鼻水', '咳・痰', '悪寒'] },
  { jan: '4987306045941', name: 'パブロンエースPro錠', maker: '大正製薬株式会社', category: '総合感冒', eligible: true, price: 1100, symptoms: ['発熱', '鼻水', '鼻づまり', '咳・痰', '悪寒', '倦怠感'] },
  { jan: '4987306045378', name: 'パブロン50錠', maker: '大正製薬株式会社', category: '総合感冒', eligible: false, price: 1320, symptoms: ['発熱', '鼻水', '咳・痰', '悪寒'] },
  { jan: '4987123700818', name: 'ベンザブロックSプラス', maker: 'アリナミン製薬株式会社', category: '総合感冒', eligible: true, price: 990, symptoms: ['発熱', '鼻水', '鼻づまり', '咳・痰'] },
  { jan: '4987123700856', name: 'ベンザブロックIPプラス', maker: 'アリナミン製薬株式会社', category: '総合感冒', eligible: true, price: 1100, symptoms: ['発熱', '鼻水', '鼻づまり', '咳・痰', '悪寒'] },
  { jan: '4901504811088', name: 'ベンザブロックL錠', maker: 'アリナミン製薬株式会社', category: '総合感冒', eligible: false, price: 880, symptoms: ['発熱', '鼻水', '咳・痰'] },
  { jan: '4987067222001', name: 'コルゲンコーワIB錠TX', maker: '興和株式会社', category: '総合感冒', eligible: true, price: 880, symptoms: ['発熱', '鼻水', '咳・痰', '喉の痛み'] },
  { jan: '4987300059005', name: 'エスタックイブファインEX', maker: 'エスエス製薬株式会社', category: '総合感冒', eligible: true, price: 1100, symptoms: ['発熱', '鼻水', '咳・痰', '悪寒', '倦怠感'], activeIngredient: 'イブプロフェン' },
  { jan: '4987300058909', name: 'エスタックイブNT', maker: 'エスエス製薬株式会社', category: '総合感冒', eligible: true, price: 1320, symptoms: ['発熱', '鼻水', '鼻づまり', '咳・痰'], activeIngredient: 'イブプロフェン' },
  { jan: '4987316012599', name: 'ストナアイビー', maker: '佐藤製薬株式会社', category: '総合感冒', eligible: true, price: 990, symptoms: ['発熱', '鼻水', '咳・痰'], activeIngredient: 'イブプロフェン' },
  { jan: '4987321543013', name: 'ストナジェルサイナスS', maker: '佐藤製薬株式会社', category: '総合感冒', eligible: true, price: 1100, symptoms: ['発熱', '鼻水', '鼻づまり', '咳・痰'] },

  // ── 鼻炎・咳・のど ──
  { jan: '4987306045897', name: 'パブロン鼻炎カプセルSα', maker: '大正製薬株式会社', category: '鼻炎・鎮咳', eligible: false, price: 880, symptoms: ['鼻水', '鼻づまり', 'くしゃみ'] },
  { jan: '4987123145183', name: 'ベンザエース', maker: 'アリナミン製薬株式会社', category: '鼻炎・鎮咳', eligible: false, price: 770, symptoms: ['咳・痰'] },
  { jan: '4901234540060', name: 'パブロンエース せき止め錠', maker: '大正製薬株式会社', category: '鼻炎・鎮咳', eligible: false, price: 770, symptoms: ['咳・痰'] },
  { jan: '4902223124010', name: 'ブロン錠エース', maker: '大塚製薬株式会社', category: '鼻炎・鎮咳', eligible: false, price: 770, symptoms: ['咳・痰'] },
  { jan: '4987072068017', name: '龍角散ダイレクトスティック ミント', maker: '株式会社龍角散', category: '鼻炎・鎮咳', eligible: false, price: 660, symptoms: ['咳・痰', '喉の痛み'] },
  { jan: '4901547200115', name: 'のどぬーるスプレー', maker: '小林製薬株式会社', category: '鼻炎・鎮咳', eligible: false, price: 880, symptoms: ['喉の痛み'] },

  // ── 胃腸薬 ──
  { jan: '4987107600035', name: 'ガスター10 錠', maker: '第一三共ヘルスケア株式会社', category: '胃腸薬', eligible: true, price: 1320, symptoms: ['胃痛', '胃もたれ', '胸やけ', '胃酸過多'], activeIngredient: 'ファモチジン' },
  { jan: '4987107600035', name: 'ガスター10 散', maker: '第一三共ヘルスケア株式会社', category: '胃腸薬', eligible: true, price: 1320, symptoms: ['胃痛', '胸やけ', '胃酸過多'], activeIngredient: 'ファモチジン' },
  { jan: '4987107600004', name: 'ガスター10 S錠', maker: '第一三共ヘルスケア株式会社', category: '胃腸薬', eligible: true, price: 1430, symptoms: ['胃痛', '胸やけ', '胃酸過多'], activeIngredient: 'ファモチジン' },
  { jan: '4987241600103', name: 'タガメット100', maker: 'グラクソ・スミスクライン・コンシューマー・ヘルスケア・ジャパン株式会社', category: '胃腸薬', eligible: true, price: 1320, symptoms: ['胃痛', '胸やけ', '胃酸過多'], activeIngredient: 'シメチジン' },
  { jan: '4901019035016', name: '大正漢方胃腸薬', maker: '大正製薬株式会社', category: '胃腸薬', eligible: false, price: 660, symptoms: ['胃痛', '胃もたれ', '消化不良'] },
  { jan: '4901234540053', name: 'パンシロン01プラス', maker: '大正製薬株式会社', category: '胃腸薬', eligible: false, price: 880, symptoms: ['胃もたれ', '消化不良', '胸やけ'] },
  { jan: '4901519041141', name: 'スクラール胃腸薬S', maker: '田辺三菱製薬株式会社', category: '胃腸薬', eligible: false, price: 770, symptoms: ['胃痛', '胃もたれ', '消化不良'] },
  { jan: '4901019660016', name: '太田胃散 分包', maker: '株式会社太田胃散', category: '胃腸薬', eligible: false, price: 880, symptoms: ['胃痛', '胃もたれ', '消化不良', '膨満感'] },
  { jan: '4902223530017', name: 'キャベジンコーワα', maker: '興和株式会社', category: '胃腸薬', eligible: false, price: 880, symptoms: ['胃もたれ', '消化不良', '膨満感'] },
  { jan: '4906243010016', name: '第一三共胃腸薬プラス細粒', maker: '第一三共ヘルスケア株式会社', category: '胃腸薬', eligible: false, price: 880, symptoms: ['胃痛', '胃もたれ', '消化不良'] },

  // ── 整腸・止瀉・便秘 ──
  { jan: '4901519040052', name: 'ストッパ下痢止めEX', maker: '田辺三菱製薬株式会社', category: '整腸・止瀉・便秘', eligible: false, price: 660, symptoms: ['下痢'] },
  { jan: '4901519040069', name: 'ビオフェルミン止瀉薬', maker: '武田コンシューマーヘルスケア株式会社', category: '整腸・止瀉・便秘', eligible: false, price: 770, symptoms: ['下痢'] },
  { jan: '4901019072022', name: 'ビオフェルミンS錠', maker: '武田コンシューマーヘルスケア株式会社', category: '整腸・止瀉・便秘', eligible: false, price: 770, symptoms: ['下痢', '便秘', '膨満感'] },
  { jan: '4987107622129', name: 'ビオスリーHi錠', maker: '東亜薬品株式会社', category: '整腸・止瀉・便秘', eligible: false, price: 880, symptoms: ['下痢', '便秘', '膨満感'] },
  { jan: '4987300032237', name: 'コーラックII', maker: '大正製薬株式会社', category: '整腸・止瀉・便秘', eligible: false, price: 550, symptoms: ['便秘'] },
  { jan: '4987300032244', name: 'コーラックファースト', maker: '大正製薬株式会社', category: '整腸・止瀉・便秘', eligible: false, price: 660, symptoms: ['便秘'] },
  { jan: '4901577050020', name: 'スルーラックS', maker: 'エスエス製薬株式会社', category: '整腸・止瀉・便秘', eligible: false, price: 550, symptoms: ['便秘'] },
  { jan: '4901577050037', name: 'スルーラックデルカス', maker: 'エスエス製薬株式会社', category: '整腸・止瀉・便秘', eligible: false, price: 660, symptoms: ['便秘'] },

  // ── アレルギー・花粉症 ──
  { jan: '4987188166031', name: 'アレグラFX', maker: 'サノフィ株式会社', category: 'アレルギー', eligible: true, price: 1980, symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ', '鼻水', '目のかゆみ'], activeIngredient: 'フェキソフェナジン塩酸塩' },
  { jan: '4987188166055', name: 'アレグラFXジュニア', maker: 'サノフィ株式会社', category: 'アレルギー', eligible: true, price: 1760, symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ', '鼻水'], activeIngredient: 'フェキソフェナジン塩酸塩' },
  { jan: '4987306049963', name: 'クラリチンEX', maker: '大正製薬株式会社', category: 'アレルギー', eligible: true, price: 1980, symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ', '目のかゆみ'], activeIngredient: 'ロラタジン' },
  { jan: '4987300060001', name: 'アレジオン20', maker: 'エスエス製薬株式会社', category: 'アレルギー', eligible: true, price: 2200, symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ', '鼻水', '目のかゆみ'], activeIngredient: 'エピナスチン塩酸塩' },
  { jan: '4901504820011', name: 'アレジオン10', maker: 'エスエス製薬株式会社', category: 'アレルギー', eligible: true, price: 1760, symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ', '鼻水'], activeIngredient: 'エピナスチン塩酸塩' },
  { jan: '4987067816606', name: 'エバステルAL', maker: '興和株式会社', category: 'アレルギー', eligible: true, price: 2090, symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ', '目のかゆみ'], activeIngredient: 'エバスチン' },
  { jan: '4987128222117', name: 'タリオンAR', maker: '田辺ファーマ株式会社', category: 'アレルギー', eligible: true, price: 1980, symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ', '鼻水', '目のかゆみ'], activeIngredient: 'ベポタスチンベシル酸塩' },
  { jan: '4987246601832', name: 'コンタック鼻炎Z', maker: 'グラクソ・スミスクライン・コンシューマー・ヘルスケア・ジャパン株式会社', category: 'アレルギー', eligible: true, price: 1980, symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ', '鼻水'], activeIngredient: 'セチリジン塩酸塩' },
  { jan: '4987343083722', name: 'アレルビ', maker: '皇漢堂製薬株式会社', category: 'アレルギー', eligible: true, price: 1540, symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ'], activeIngredient: 'セチリジン塩酸塩' },
  { jan: '4901234020011', name: '鼻炎カプセルSα', maker: '大正製薬株式会社', category: 'アレルギー', eligible: false, price: 880, symptoms: ['鼻水', '鼻づまり', 'くしゃみ', 'アレルギー性鼻炎'] },
  { jan: '4901547001231', name: '鼻炎薬A クニヒロ', maker: '皇漢堂製薬株式会社', category: 'アレルギー', eligible: false, price: 770, symptoms: ['鼻水', '鼻づまり', 'くしゃみ'] },

  // ── 外用鎮痛薬 ──
  { jan: '4987443351707', name: 'ボルタレンEXテープ', maker: '同仁医薬化工株式会社', category: '外用鎮痛', eligible: true, price: 1430, symptoms: ['肩こり', '腰痛', '筋肉痛', '関節痛', '打撲', 'ねんざ'], activeIngredient: 'ジクロフェナクナトリウム' },
  { jan: '4987443351752', name: 'ボルタレンEXゲル', maker: '同仁医薬化工株式会社', category: '外用鎮痛', eligible: true, price: 1100, symptoms: ['肩こり', '腰痛', '筋肉痛', '関節痛'], activeIngredient: 'ジクロフェナクナトリウム' },
  { jan: '4901322011014', name: 'フェイタス5.0', maker: '久光製薬株式会社', category: '外用鎮痛', eligible: true, price: 1320, symptoms: ['肩こり', '腰痛', '筋肉痛', '関節痛', '打撲', 'ねんざ', 'スポーツ障害'], activeIngredient: 'フルルビプロフェン' },
  { jan: '4987188123805', name: 'フェイタスZαジクサス', maker: '久光製薬株式会社', category: '外用鎮痛', eligible: true, price: 1540, symptoms: ['肩こり', '腰痛', '筋肉痛', '関節痛'], activeIngredient: 'ジクロフェナクナトリウム' },
  { jan: '4987188123171', name: 'フェイタスチック', maker: '東光薬品工業株式会社', category: '外用鎮痛', eligible: true, price: 1210, symptoms: ['肩こり', '腰痛', '筋肉痛'], activeIngredient: 'フルルビプロフェン' },
  { jan: '4987067263905', name: 'バンテリンコーワパップ', maker: '興和株式会社', category: '外用鎮痛', eligible: true, price: 1210, symptoms: ['肩こり', '腰痛', '筋肉痛', '打撲'], activeIngredient: 'インドメタシン' },
  { jan: '4987085040021', name: 'バンテリンコーワゲルS', maker: '興和株式会社', category: '外用鎮痛', eligible: true, price: 1100, symptoms: ['肩こり', '腰痛', '筋肉痛'], activeIngredient: 'インドメタシン' },
  { jan: '4987107617859', name: 'ロキソニンSテープ', maker: 'リードケミカル株式会社', category: '外用鎮痛', eligible: true, price: 1430, symptoms: ['肩こり', '腰痛', '筋肉痛', '関節痛', '打撲', 'ねんざ'], activeIngredient: 'ロキソプロフェンNa水和物' },
  { jan: '4987107617873', name: 'ロキソニンSテープL', maker: 'リードケミカル株式会社', category: '外用鎮痛', eligible: true, price: 1650, symptoms: ['肩こり', '腰痛', '筋肉痛', '関節痛'], activeIngredient: 'ロキソプロフェンNa水和物' },
  { jan: '4987107617903', name: 'ロキソニンSゲル', maker: '第一三共ヘルスケア株式会社', category: '外用鎮痛', eligible: true, price: 1210, symptoms: ['肩こり', '腰痛', '筋肉痛'], activeIngredient: 'ロキソプロフェンNa水和物' },
  { jan: '4987188100325', name: 'サロンパスAe', maker: '久光製薬株式会社', category: '外用鎮痛', eligible: false, price: 550, symptoms: ['肩こり', '腰痛', '筋肉痛'] },
  { jan: '4987188122013', name: 'サロンパス30', maker: '久光製薬株式会社', category: '外用鎮痛', eligible: false, price: 770, symptoms: ['肩こり', '腰痛', '筋肉痛'] },
  { jan: '4987072001264', name: 'アンメルツヨコヨコ', maker: '小林製薬株式会社', category: '外用鎮痛', eligible: false, price: 880, symptoms: ['肩こり', '腰痛', '筋肉痛'] },
  { jan: '4901107505016', name: 'スタックiローション', maker: '森下仁丹株式会社', category: '外用鎮痛', eligible: true, price: 1320, symptoms: ['肩こり', '腰痛', '筋肉痛', '関節痛'], activeIngredient: 'フェルビナク' },

  // ── 水虫・皮膚 ──
  { jan: '4987443354906', name: 'ラミシールATクリーム', maker: 'グラクソ・スミスクライン・コンシューマー・ヘルスケア・ジャパン株式会社', category: '水虫・皮膚', eligible: true, price: 1650, symptoms: ['水虫'], activeIngredient: 'テルビナフィン塩酸塩' },
  { jan: '4987443354913', name: 'ラミシールAT液', maker: 'グラクソ・スミスクライン・コンシューマー・ヘルスケア・ジャパン株式会社', category: '水虫・皮膚', eligible: true, price: 1650, symptoms: ['水虫'], activeIngredient: 'テルビナフィン塩酸塩' },
  { jan: '4595641889122', name: 'テルビーナクリーム', maker: '万協製薬株式会社', category: '水虫・皮膚', eligible: true, price: 1650, symptoms: ['水虫'], activeIngredient: 'テルビナフィン塩酸塩' },
  { jan: '4595641889122', name: 'テルビーナ液', maker: '万協製薬株式会社', category: '水虫・皮膚', eligible: true, price: 1650, symptoms: ['水虫'], activeIngredient: 'テルビナフィン塩酸塩' },
  { jan: '4987306035119', name: 'ダマリングランデX', maker: '大正製薬株式会社', category: '水虫・皮膚', eligible: true, price: 1320, symptoms: ['水虫'], activeIngredient: 'ビホナゾール' },
  { jan: '4987188188279', name: 'ブテナロックVαクリーム', maker: '久光製薬株式会社', category: '水虫・皮膚', eligible: true, price: 1540, symptoms: ['水虫'], activeIngredient: 'ブテナフィン塩酸塩' },
  { jan: '4987188188286', name: 'ブテナロックVα液', maker: '久光製薬株式会社', category: '水虫・皮膚', eligible: true, price: 1540, symptoms: ['水虫'], activeIngredient: 'ブテナフィン塩酸塩' },
  { jan: '4901547170078', name: 'メンソレータムAD軟膏m', maker: 'ロート製薬株式会社', category: '水虫・皮膚', eligible: false, price: 770, symptoms: ['湿疹・かぶれ', '皮膚のかゆみ', '虫刺され'] },
  { jan: '4962456410124', name: 'ムヒS2a', maker: '株式会社池田模範堂', category: '水虫・皮膚', eligible: false, price: 660, symptoms: ['虫刺され', '皮膚のかゆみ', '湿疹・かぶれ'] },
  { jan: '4987426002138', name: 'ムヒアルファEX', maker: '株式会社池田模範堂', category: '水虫・皮膚', eligible: true, price: 880, symptoms: ['虫刺され', '皮膚のかゆみ', '湿疹・かぶれ'] },
  { jan: '4902735021138', name: 'オロナインH軟膏', maker: '大塚製薬株式会社', category: '水虫・皮膚', eligible: false, price: 660, symptoms: ['湿疹・かぶれ', 'ニキビ', '虫刺され'] },
  { jan: '4987247135028', name: 'テラ・コートリル軟膏a', maker: '佐藤製薬株式会社', category: '水虫・皮膚', eligible: true, price: 880, symptoms: ['湿疹・かぶれ', '皮膚のかゆみ'], activeIngredient: 'ヒドロコルチゾン酢酸エステル' },
  { jan: '4902071151007', name: 'ベトネベートN軟膏AS', maker: '塩野義製薬株式会社', category: '水虫・皮膚', eligible: true, price: 990, symptoms: ['湿疹・かぶれ', '皮膚のかゆみ'], activeIngredient: 'ベタメタゾン吉草酸エステル' },

  // ── 目薬 ──
  { jan: '4987046180827', name: 'ロートCキューブ', maker: 'ロート製薬株式会社', category: '点眼薬', eligible: false, price: 770, symptoms: ['疲れ目', 'ドライアイ', '目の充血'] },
  { jan: '4987046180834', name: 'ロートアルガードクリアブロックEX', maker: 'ロート製薬株式会社', category: '点眼薬', eligible: true, price: 1100, symptoms: ['目のかゆみ', '花粉症'], activeIngredient: 'ケトチフェンフマル酸塩' },
  { jan: '4987241100187', name: 'ロートアルガードEX', maker: 'ロート製薬株式会社', category: '点眼薬', eligible: true, price: 1320, symptoms: ['目のかゆみ', '目の充血', '花粉症'], activeIngredient: 'ケトチフェンフマル酸塩' },
  { jan: '4987241100224', name: 'ロートアルガードs', maker: 'ロート製薬株式会社', category: '点眼薬', eligible: true, price: 990, symptoms: ['目のかゆみ', '花粉症'], activeIngredient: 'ケトチフェンフマル酸塩' },
  { jan: '4987443323360', name: 'ザジテンAL点眼薬', maker: 'グラクソ・スミスクライン・コンシューマー・ヘルスケア・ジャパン株式会社', category: '点眼薬', eligible: true, price: 1320, symptoms: ['目のかゆみ', '花粉症', 'アレルギー性鼻炎'], activeIngredient: 'ケトチフェンフマル酸塩' },
  { jan: '4978544022012', name: 'サンテアルジードEX', maker: '参天製薬株式会社', category: '点眼薬', eligible: true, price: 1100, symptoms: ['目のかゆみ', '花粉症'], activeIngredient: 'ケトチフェンフマル酸塩' },
  { jan: '4987084315106', name: 'サンテFX Vプラス', maker: '参天製薬株式会社', category: '点眼薬', eligible: false, price: 880, symptoms: ['疲れ目', '目の充血'] },
  { jan: '4987084410276', name: 'サンテメディカル12', maker: '参天製薬株式会社', category: '点眼薬', eligible: false, price: 1100, symptoms: ['疲れ目', 'ドライアイ'] },
  { jan: '4901301040008', name: 'スマイルザメディカルA DX', maker: 'ライオン株式会社', category: '点眼薬', eligible: false, price: 990, symptoms: ['疲れ目', 'ドライアイ', '目の充血'] },

  // ── 禁煙補助薬（全てeligible） ──
  { jan: '4987123142151', name: 'ニコレットチュアブル 2mg', maker: 'ジョンソン・エンド・ジョンソン株式会社', category: '禁煙補助', eligible: true, price: 2750, symptoms: ['禁煙'], activeIngredient: 'ニコチン' },
  { jan: '4987123142151', name: 'ニコレットミント', maker: 'ジョンソン・エンド・ジョンソン株式会社', category: '禁煙補助', eligible: true, price: 2750, symptoms: ['禁煙'], activeIngredient: 'ニコチン' },
  { jan: '4987123142151', name: 'ニコレット フルーツ', maker: 'ジョンソン・エンド・ジョンソン株式会社', category: '禁煙補助', eligible: true, price: 2750, symptoms: ['禁煙'], activeIngredient: 'ニコチン' },
  { jan: '4987443323469', name: 'ニコチネルパッチ10', maker: 'グラクソ・スミスクライン・コンシューマー・ヘルスケア・ジャパン株式会社', category: '禁煙補助', eligible: true, price: 2200, symptoms: ['禁煙'], activeIngredient: 'ニコチン' },
  { jan: '4987443323490', name: 'ニコチネルパッチ20', maker: 'グラクソ・スミスクライン・コンシューマー・ヘルスケア・ジャパン株式会社', category: '禁煙補助', eligible: true, price: 2530, symptoms: ['禁煙'], activeIngredient: 'ニコチン' },
  { jan: '4987072130034', name: 'ニコチネルパッチ30', maker: 'グラクソ・スミスクライン・コンシューマー・ヘルスケア・ジャパン株式会社', category: '禁煙補助', eligible: true, price: 2750, symptoms: ['禁煙'], activeIngredient: 'ニコチン' },
  { jan: '4901107830016', name: 'ニコパッチ10mg', maker: '大正製薬株式会社', category: '禁煙補助', eligible: true, price: 2200, symptoms: ['禁煙'], activeIngredient: 'ニコチン' },

  // ── 育毛剤（eligible - ミノキシジル） ──
  { jan: '4901301033994', name: 'リアップ 60mL', maker: '大正製薬株式会社', category: '育毛剤', eligible: true, price: 4950, symptoms: ['抜け毛・薄毛'], activeIngredient: 'ミノキシジル' },
  { jan: '4901301034007', name: 'リアップX5プラス', maker: '大正製薬株式会社', category: '育毛剤', eligible: true, price: 5940, symptoms: ['抜け毛・薄毛'], activeIngredient: 'ミノキシジル' },
  { jan: '4901301034014', name: 'リアップX5プラスネオ', maker: '大正製薬株式会社', category: '育毛剤', eligible: true, price: 6600, symptoms: ['抜け毛・薄毛'], activeIngredient: 'ミノキシジル' },
  { jan: '4986674700133', name: 'スカルプD メディカルミノキ5', maker: '株式会社アンファー', category: '育毛剤', eligible: true, price: 5280, symptoms: ['抜け毛・薄毛'], activeIngredient: 'ミノキシジル' },
  { jan: '4571199021017', name: 'フィンジア', maker: '興和株式会社', category: '育毛剤', eligible: true, price: 5500, symptoms: ['抜け毛・薄毛'], activeIngredient: 'ミノキシジル' },

  // ── ニキビ・口内炎 ──
  { jan: '4902735026133', name: 'クレアラシル 薬用バニシングクリーム', maker: 'レキットベンキーザー・ジャパン株式会社', category: 'ニキビ・口内炎', eligible: false, price: 880, symptoms: ['ニキビ'] },
  { jan: '4903301025719', name: 'ペアアクネクリームW', maker: 'ライオン株式会社', category: 'ニキビ・口内炎', eligible: true, price: 880, symptoms: ['ニキビ'] },
  { jan: '4987316004044', name: 'アフタッチ', maker: '佐藤製薬株式会社', category: 'ニキビ・口内炎', eligible: true, price: 550, symptoms: ['口内炎'], activeIngredient: 'トリアムシノロンアセトニド' },
  { jan: '4901547171457', name: '口内炎パッチ大正A', maker: '大正製薬株式会社', category: 'ニキビ・口内炎', eligible: true, price: 660, symptoms: ['口内炎'], activeIngredient: 'トリアムシノロンアセトニド' },
  { jan: '4987086610019', name: 'ケナログ口腔用軟膏A', maker: '丸石製薬株式会社', category: 'ニキビ・口内炎', eligible: true, price: 660, symptoms: ['口内炎'], activeIngredient: 'トリアムシノロンアセトニド' },

  // ── 漢方薬（基本的にeligible外） ──
  { jan: '4987138390024', name: '葛根湯エキス顆粒 クラシエ', maker: 'クラシエ薬品株式会社', category: '漢方薬', eligible: false, price: 880, symptoms: ['悪寒', '鼻水', '発熱', '肩こり'] },
  { jan: '4987138390031', name: '小青竜湯エキス顆粒 クラシエ', maker: 'クラシエ薬品株式会社', category: '漢方薬', eligible: false, price: 880, symptoms: ['鼻水', '鼻づまり', '花粉症', 'くしゃみ'] },
  { jan: '4987138390048', name: '防風通聖散エキス顆粒 クラシエ', maker: 'クラシエ薬品株式会社', category: '漢方薬', eligible: false, price: 1320, symptoms: ['便秘', '膨満感'] },
  { jan: '4904360012053', name: '葛根湯 ツムラ漢方', maker: '株式会社ツムラ', category: '漢方薬', eligible: false, price: 1320, symptoms: ['悪寒', '鼻水', '発熱', '肩こり'] },
  { jan: '4904360012060', name: '麦門冬湯 ツムラ漢方', maker: '株式会社ツムラ', category: '漢方薬', eligible: false, price: 1100, symptoms: ['咳・痰', '喉の痛み'] },
  { jan: '4904360012077', name: '麻黄湯 ツムラ漢方', maker: '株式会社ツムラ', category: '漢方薬', eligible: false, price: 1100, symptoms: ['発熱', '悪寒', '倦怠感'] },
  { jan: '4904360012084', name: '桂枝茯苓丸 ツムラ漢方', maker: '株式会社ツムラ', category: '漢方薬', eligible: false, price: 1320, symptoms: ['生理痛', '頭痛'] },

];

export function lookupByJan(jan: string): DrugEntry | undefined {
  return DRUG_DATABASE.find((d) => d.jan === jan);
}

export function searchByName(query: string): DrugEntry[] {
  const q = query.toLowerCase();
  return DRUG_DATABASE.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.maker.toLowerCase().includes(q) ||
      (d.activeIngredient ?? '').toLowerCase().includes(q)
  );
}

export function searchBySymptom(symptom: string): DrugEntry[] {
  return DRUG_DATABASE.filter((d) => d.symptoms.includes(symptom));
}

export function searchByCategory(category: string): DrugEntry[] {
  return DRUG_DATABASE.filter((d) => d.category === category);
}

export const DRUG_CATEGORIES = [...new Set(DRUG_DATABASE.map((d) => d.category))];
