import { Palette, Gift, BookOpen, Video, Headphones, Mail, ShieldCheck } from 'lucide-react';

export interface Feature {
  icon: typeof Palette;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Palette,
    title: 'デザイン重視の指導',
    description: 'ツール操作だけでなく、デザインや造形力を重視したカリキュラムで、本質的なスキルを身につけます。',
  },
  {
    icon: Gift,
    title: '無料の入門コース',
    description: 'まずは無料クラスでMayaの基本操作を体験。費用をかけずに3DCGの世界を始められます。',
  },
  {
    icon: BookOpen,
    title: 'イラスト・動画付きレッスン',
    description: '図解と動画で分かりやすく解説。テキストだけでは伝わりにくい操作も視覚的に理解できます。',
  },
  {
    icon: Video,
    title: 'リモート個別指導',
    description: 'ZOOMを使ったライブセッションで、講師から直接フィードバックを受けられます。',
  },
  {
    icon: Headphones,
    title: '録画で復習可能',
    description: 'レッスンは録画されるので、何度でも見返して復習できます。自分のペースで学習を進められます。',
  },
  {
    icon: Mail,
    title: 'メールサポート',
    description: 'レッスン以外の時間でも、メールで質問や相談ができます。つまずいた時も安心です。',
  },
  {
    icon: ShieldCheck,
    title: '返金保証',
    description: '未受講分は全額返金。安心してお申し込みいただけます。',
  },
];
