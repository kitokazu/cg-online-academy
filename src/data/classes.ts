export interface CourseClass {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  priceLabel: string;
  isFree: boolean;
  duration: string;
  level: string;
  topics: string[];
  prerequisites: string;
  image: string;
  schedule: string;
  format: string;
  instructor: string;
}

export const classes: CourseClass[] = [
  {
    id: 'class-0',
    title: 'クラス 0',
    subtitle: 'Maya基本操作',
    description: 'Mayaの基本的な操作方法を学ぶ無料の入門コースです。教材を使って自分のペースで進められます。',
    price: 0,
    priceLabel: '無料',
    isFree: true,
    duration: '自分のペースで',
    level: '初心者',
    topics: [
      'Mayaの基本UI・ビューポート操作',
      '移動・回転・スケールツール',
      'ポリゴンプリミティブの作成',
      'ショートカットキーの基本',
    ],
    prerequisites: 'なし',
    image: '/class/class0.png',
    schedule: '随時受講可能',
    format: '教材ベース（自習型）',
    instructor: '糸数 弘樹',
  },
  {
    id: 'class-1-lowpoly',
    title: 'クラス 1',
    subtitle: 'ローポリキャラクター制作',
    description: 'Zoomライブ授業でローポリキャラクターを制作しながら、モデリングの基礎を身につけます。全2回のコースです。',
    price: 0,
    priceLabel: '無料',
    isFree: true,
    duration: '全2回',
    level: '初心者',
    topics: [
      'ローポリモデリングの基礎',
      'キャラクターの基本構造',
      'UV展開の基礎',
      'テクスチャの基本',
    ],
    prerequisites: 'クラス0修了推奨',
    image: '/class/class1.jpeg',
    schedule: 'スケジュールはお問い合わせください',
    format: 'Zoomライブ授業（全2回）',
    instructor: '糸数 弘樹',
  },
  {
    id: 'class-1-snowman',
    title: 'クラス 1',
    subtitle: 'Maya入門 雪だるま制作',
    description: '雪だるまの制作を通じて、Mayaの基本操作とモデリングの流れを学びます。教材を使って自分のペースで進められます。',
    price: 0,
    priceLabel: '無料',
    isFree: true,
    duration: '自分のペースで',
    level: '初心者',
    topics: [
      'プリミティブの操作と変形',
      '基本的なモデリングの流れ',
      'マテリアルの基礎',
      'レンダリングの基本',
    ],
    prerequisites: 'クラス0修了推奨',
    image: '/class/class1.gif',
    schedule: '随時受講可能',
    format: '教材ベース（自習型）',
    instructor: '糸数 弘樹',
  },
  {
    id: 'class-2',
    title: 'クラス 2',
    subtitle: 'Maya 初級モデリング',
    description: 'Mayaを使ったモデリングの基礎を全6回で習得するコースです。Zoomライブセッションで直接指導を受けられます。',
    price: 18000,
    priceLabel: '¥18,000',
    isFree: false,
    duration: '全6回',
    level: '初級',
    topics: [
      'モデリング基礎の徹底',
      'トポロジーの理解',
      'リファレンスの活用方法',
      'フィードバックによる個別指導',
    ],
    prerequisites: 'クラス0・1修了',
    image: '/class/class2.gif',
    schedule: 'スケジュールはお問い合わせください',
    format: 'Zoomライブ授業（全6回）',
    instructor: '糸数 弘樹',
  },
  {
    id: 'class-3',
    title: 'クラス 3',
    subtitle: 'キャラクター頭部モデリング',
    description: 'キャラクターの頭部モデリングを本格的に学ぶコースです。全8回のZoomライブセッションで、定員20名の少人数制による個別指導を行います。',
    price: 48000,
    priceLabel: '¥48,000',
    isFree: false,
    duration: '全8回',
    level: '中級',
    topics: [
      '頭部の基本構造とプロポーション',
      '顔のトポロジー',
      '目・鼻・口・耳のモデリング',
      '表情を考慮したメッシュフロー',
      '個別フィードバック指導',
    ],
    prerequisites: 'クラス2修了またはMaya基本操作の経験',
    image: '/class/class3.gif',
    schedule: 'スケジュールはお問い合わせください',
    format: 'Zoomライブ授業（全8回・定員20名）',
    instructor: '糸数 弘樹',
  },
  {
    id: 'class-4',
    title: 'クラス 4',
    subtitle: 'ボディーモデリング',
    description: '人体モデリングの本格コースです。解剖学に基づいたボディモデリング、トポロジー、衣装制作まで学びます。全8回のZoomライブセッションで、定員20名の少人数制による個別指導を行います。',
    price: 48000,
    priceLabel: '¥48,000',
    isFree: false,
    duration: '全8回',
    level: '中級〜上級',
    topics: [
      '人体解剖学の基礎',
      'ボディトポロジーの構築',
      '衣装モデリング',
      'プロのワークフロー',
      '個別フィードバック指導',
    ],
    prerequisites: 'クラス2修了またはMaya基本操作の経験',
    image: '/class/class4.gif',
    schedule: 'スケジュールはお問い合わせください',
    format: 'Zoomライブ授業（全8回・定員20名）',
    instructor: '糸数 弘樹',
  },
];

export const freeClasses = classes.filter((c) => c.isFree);
export const paidClasses = classes.filter((c) => !c.isFree);
