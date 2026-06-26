export interface DrugEntry {
  jan: string;
  name: string;
  maker: string;
  category: string;
  eligible: boolean;
  price: number;
  symptoms: string[];
  activeIngredient?: string;
}

export const SYMPTOM_CATEGORIES: Record<string, string[]> = {
  '痛み・発熱': ['頭痛', '発熱', '生理痛', '歯痛', '喉の痛み'],
  '風邪・鼻': ['鼻水', '鼻づまり', '咳・痰', '悪寒', '倦怠感'],
  '胃腸': ['胃痛', '胃もたれ', '胸やけ', '消化不良', '胃酸過多', '下痢', '便秘'],
  'アレルギー': ['花粉症', 'アレルギー性鼻炎', '目のかゆみ', 'くしゃみ'],
  '筋肉・関節': ['肩こり', '腰痛', '筋肉痛', '関節痛', '打撲', 'ねんざ', 'スポーツ障害'],
  '目': ['目のかゆみ', '目の充血', '疲れ目', 'ドライアイ'],
};

export const ALL_SYMPTOMS = Object.values(SYMPTOM_CATEGORIES).flat();

export const DRUG_DATABASE: DrugEntry[] = [
  // ── 解熱鎮痛薬 ──
  {
    jan: '4987138391038', name: 'ロキソニンS', maker: '第一三共ヘルスケア',
    category: '解熱鎮痛', eligible: true, price: 660,
    symptoms: ['頭痛', '発熱', '生理痛', '歯痛', '喉の痛み', '筋肉痛', '関節痛'],
    activeIngredient: 'ロキソプロフェンナトリウム水和物',
  },
  {
    jan: '4987138391052', name: 'ロキソニンSプレミアム', maker: '第一三共ヘルスケア',
    category: '解熱鎮痛', eligible: true, price: 880,
    symptoms: ['頭痛', '発熱', '生理痛', '歯痛'],
    activeIngredient: 'ロキソプロフェンナトリウム水和物',
  },
  {
    jan: '4987138391137', name: 'ロキソニンSプラス', maker: '第一三共ヘルスケア',
    category: '解熱鎮痛', eligible: true, price: 770,
    symptoms: ['頭痛', '発熱', '生理痛'],
    activeIngredient: 'ロキソプロフェンナトリウム水和物',
  },
  {
    jan: '4901301033963', name: 'イブA錠', maker: 'エスエス製薬',
    category: '解熱鎮痛', eligible: true, price: 660,
    symptoms: ['頭痛', '発熱', '生理痛', '歯痛'],
    activeIngredient: 'イブプロフェン',
  },
  {
    jan: '4901301033970', name: 'イブA錠EX', maker: 'エスエス製薬',
    category: '解熱鎮痛', eligible: true, price: 880,
    symptoms: ['頭痛', '発熱', '生理痛', '歯痛'],
    activeIngredient: 'イブプロフェン',
  },
  {
    jan: '4901301503022', name: 'バファリンA', maker: 'ライオン',
    category: '解熱鎮痛', eligible: false, price: 660,
    symptoms: ['頭痛', '発熱', '生理痛'],
    activeIngredient: 'アスピリン',
  },
  {
    jan: '4901301503046', name: 'バファリンプレミアム', maker: 'ライオン',
    category: '解熱鎮痛', eligible: true, price: 880,
    symptoms: ['頭痛', '発熱', '生理痛', '歯痛'],
    activeIngredient: 'イブプロフェン・アリルイソプロピルアセチル尿素',
  },
  {
    jan: '4901521509232', name: 'タイレノールA', maker: 'ジョンソン・エンド・ジョンソン',
    category: '解熱鎮痛', eligible: false, price: 660,
    symptoms: ['頭痛', '発熱', '喉の痛み'],
    activeIngredient: 'アセトアミノフェン',
  },

  // ── 総合感冒薬 ──
  {
    jan: '4901301240019', name: '新ルルA錠s', maker: '第一三共ヘルスケア',
    category: '総合感冒', eligible: true, price: 880,
    symptoms: ['発熱', '鼻水', '鼻づまり', '咳・痰', '悪寒', '倦怠感'],
  },
  {
    jan: '4901301240040', name: '新ルルAゴールドDX', maker: '第一三共ヘルスケア',
    category: '総合感冒', eligible: true, price: 1100,
    symptoms: ['発熱', '鼻水', '鼻づまり', '咳・痰', '悪寒', '喉の痛み'],
  },
  {
    jan: '4901234540039', name: 'パブロンSゴールドW錠', maker: '大正製薬',
    category: '総合感冒', eligible: true, price: 880,
    symptoms: ['発熱', '鼻水', '咳・痰', '悪寒'],
  },
  {
    jan: '4901234540046', name: 'パブロンエースPro錠', maker: '大正製薬',
    category: '総合感冒', eligible: true, price: 1100,
    symptoms: ['発熱', '鼻水', '鼻づまり', '咳・痰', '悪寒', '倦怠感'],
  },
  {
    jan: '4901504811019', name: 'ベンザブロックSプラス', maker: '武田薬品',
    category: '総合感冒', eligible: true, price: 990,
    symptoms: ['発熱', '鼻水', '鼻づまり', '咳・痰'],
  },
  {
    jan: '4901504811057', name: 'ベンザブロックIPプラス', maker: '武田薬品',
    category: '総合感冒', eligible: true, price: 1100,
    symptoms: ['発熱', '鼻水', '鼻づまり', '咳・痰', '悪寒'],
  },
  {
    jan: '4987080103317', name: 'コルゲンコーワIB錠TX', maker: '興和',
    category: '総合感冒', eligible: true, price: 880,
    symptoms: ['発熱', '鼻水', '咳・痰', '喉の痛み'],
  },

  // ── 咳・喉 ──
  {
    jan: '4901234520018', name: 'パブロン鼻炎カプセルSα', maker: '大正製薬',
    category: '鼻炎・花粉症', eligible: false, price: 880,
    symptoms: ['鼻水', '鼻づまり', 'くしゃみ'],
  },
  {
    jan: '4901504810029', name: 'ベンザエース', maker: '武田薬品',
    category: '鎮咳去痰', eligible: false, price: 770,
    symptoms: ['咳・痰'],
  },
  {
    jan: '4901234540060', name: 'パブロンエース せき止め錠', maker: '大正製薬',
    category: '鎮咳去痰', eligible: false, price: 770,
    symptoms: ['咳・痰'],
  },

  // ── 胃腸薬・制酸薬 ──
  {
    jan: '4987072030011', name: 'ガスター10 錠', maker: '第一三共ヘルスケア',
    category: '胃腸薬', eligible: true, price: 1320,
    symptoms: ['胃痛', '胃もたれ', '胸やけ', '胃酸過多'],
    activeIngredient: 'ファモチジン',
  },
  {
    jan: '4987072030028', name: 'ガスター10 散', maker: '第一三共ヘルスケア',
    category: '胃腸薬', eligible: true, price: 1320,
    symptoms: ['胃痛', '胸やけ', '胃酸過多'],
    activeIngredient: 'ファモチジン',
  },
  {
    jan: '4901019035016', name: '大正漢方胃腸薬', maker: '大正製薬',
    category: '胃腸薬', eligible: false, price: 660,
    symptoms: ['胃痛', '胃もたれ', '消化不良'],
  },
  {
    jan: '4901234540053', name: 'パンシロン01プラス', maker: '大正製薬',
    category: '胃腸薬', eligible: false, price: 880,
    symptoms: ['胃もたれ', '消化不良', '胸やけ'],
  },
  {
    jan: '4901519041141', name: 'スクラール胃腸薬S', maker: '田辺三菱製薬',
    category: '胃腸薬', eligible: false, price: 770,
    symptoms: ['胃痛', '胃もたれ', '消化不良'],
  },

  // ── 整腸・下痢止め・便秘薬 ──
  {
    jan: '4901519040052', name: 'ストッパ下痢止めEX', maker: '田辺三菱製薬',
    category: '整腸・止瀉', eligible: false, price: 660,
    symptoms: ['下痢'],
  },
  {
    jan: '4901519040069', name: 'ビオフェルミン止瀉薬', maker: '武田',
    category: '整腸・止瀉', eligible: false, price: 770,
    symptoms: ['下痢'],
  },
  {
    jan: '4987300032237', name: 'コーラックII', maker: '大正製薬',
    category: '便秘薬', eligible: false, price: 550,
    symptoms: ['便秘'],
  },

  // ── 花粉症・アレルギー ──
  {
    jan: '4901301503404', name: 'アレグラFX', maker: 'アベンティス',
    category: 'アレルギー', eligible: true, price: 1980,
    symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ', '鼻水', '目のかゆみ'],
    activeIngredient: 'フェキソフェナジン塩酸塩',
  },
  {
    jan: '4901301503411', name: 'アレグラFXジュニア', maker: 'アベンティス',
    category: 'アレルギー', eligible: true, price: 1760,
    symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ', '鼻水'],
    activeIngredient: 'フェキソフェナジン塩酸塩',
  },
  {
    jan: '4901072010028', name: 'クラリチンEX', maker: 'バイエル',
    category: 'アレルギー', eligible: true, price: 1980,
    symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ', '目のかゆみ'],
    activeIngredient: 'ロラタジン',
  },
  {
    jan: '4901504820028', name: 'アレジオン20', maker: '武田薬品',
    category: 'アレルギー', eligible: true, price: 2200,
    symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ', '鼻水', '目のかゆみ'],
    activeIngredient: 'エピナスチン塩酸塩',
  },
  {
    jan: '4901234020011', name: '鼻炎カプセルSα', maker: '大正製薬',
    category: 'アレルギー', eligible: false, price: 880,
    symptoms: ['鼻水', '鼻づまり', 'くしゃみ', 'アレルギー性鼻炎'],
  },
  {
    jan: '4987315120025', name: 'エバステルAL', maker: '久光製薬',
    category: 'アレルギー', eligible: true, price: 2090,
    symptoms: ['花粉症', 'アレルギー性鼻炎', 'くしゃみ', '目のかゆみ'],
    activeIngredient: 'エバスチン',
  },

  // ── 外用薬（貼付・塗布） ──
  {
    jan: '4901544100012', name: 'ボルタレンEXテープ', maker: 'グラクソ',
    category: '外用鎮痛', eligible: true, price: 1430,
    symptoms: ['肩こり', '腰痛', '筋肉痛', '関節痛', '打撲', 'ねんざ'],
    activeIngredient: 'ジクロフェナクナトリウム',
  },
  {
    jan: '4901544100029', name: 'ボルタレンEXゲル', maker: 'グラクソ',
    category: '外用鎮痛', eligible: true, price: 1100,
    symptoms: ['肩こり', '腰痛', '筋肉痛', '関節痛'],
    activeIngredient: 'ジクロフェナクナトリウム',
  },
  {
    jan: '4901322011014', name: 'フェイタス5.0', maker: '久光製薬',
    category: '外用鎮痛', eligible: true, price: 1320,
    symptoms: ['肩こり', '腰痛', '筋肉痛', '関節痛', '打撲', 'ねんざ', 'スポーツ障害'],
    activeIngredient: 'フルルビプロフェン',
  },
  {
    jan: '4901322011021', name: 'フェイタスZαジクサス', maker: '久光製薬',
    category: '外用鎮痛', eligible: true, price: 1540,
    symptoms: ['肩こり', '腰痛', '筋肉痛', '関節痛'],
    activeIngredient: 'ジクロフェナクナトリウム',
  },
  {
    jan: '4987085040014', name: 'バンテリンコーワパップ', maker: '興和',
    category: '外用鎮痛', eligible: true, price: 1210,
    symptoms: ['肩こり', '腰痛', '筋肉痛', '打撲'],
    activeIngredient: 'インドメタシン',
  },
  {
    jan: '4987072085011', name: 'サロンパスAe', maker: '久光製薬',
    category: '外用鎮痛', eligible: false, price: 550,
    symptoms: ['肩こり', '腰痛', '筋肉痛'],
  },

  // ── 目薬 ──
  {
    jan: '4987046180827', name: 'ロートCキューブ', maker: 'ロート製薬',
    category: '点眼薬', eligible: false, price: 770,
    symptoms: ['疲れ目', 'ドライアイ', '目の充血'],
  },
  {
    jan: '4987046180834', name: 'ロートアルガードクリアブロックEX', maker: 'ロート製薬',
    category: '点眼薬', eligible: true, price: 1100,
    symptoms: ['目のかゆみ', '花粉症', 'アレルギー性鼻炎'],
    activeIngredient: 'ケトチフェンフマル酸塩',
  },
  {
    jan: '4987046181015', name: 'ロートアルガードEX', maker: 'ロート製薬',
    category: '点眼薬', eligible: true, price: 1320,
    symptoms: ['目のかゆみ', '目の充血', '花粉症'],
    activeIngredient: 'ケトチフェンフマル酸塩',
  },
  {
    jan: '4901301040008', name: 'スマイルザメディカルA DX', maker: 'ライオン',
    category: '点眼薬', eligible: false, price: 990,
    symptoms: ['疲れ目', 'ドライアイ', '目の充血'],
  },
];

export function lookupByJan(jan: string): DrugEntry | undefined {
  return DRUG_DATABASE.find((d) => d.jan === jan);
}

export function searchByName(query: string): DrugEntry[] {
  const q = query.toLowerCase();
  return DRUG_DATABASE.filter(
    (d) => d.name.toLowerCase().includes(q) || d.maker.toLowerCase().includes(q)
  );
}

export function searchBySymptom(symptom: string): DrugEntry[] {
  return DRUG_DATABASE.filter((d) => d.symptoms.includes(symptom));
}

export function searchByCategory(category: string): DrugEntry[] {
  return DRUG_DATABASE.filter((d) => d.category === category);
}

export const DRUG_CATEGORIES = [...new Set(DRUG_DATABASE.map((d) => d.category))];
