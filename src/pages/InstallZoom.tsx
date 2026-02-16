import { motion } from 'framer-motion';
import { ExternalLink, Mic, Camera, Wifi } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const steps = [
  {
    number: 1,
    title: 'ZOOMのダウンロード',
    description: 'ZOOM公式サイトからZOOMクライアントをダウンロードします。デスクトップ版の利用を推奨します。',
  },
  {
    number: 2,
    title: 'アカウント作成',
    description: 'メールアドレスまたはGoogleアカウントでZOOMアカウントを作成します。無料プランで十分です。',
  },
  {
    number: 3,
    title: 'オーディオ・ビデオのテスト',
    description: 'ZOOMの設定画面でマイクとカメラが正しく動作するか確認してください。テストミーティングで事前に確認できます。',
  },
  {
    number: 4,
    title: 'セッションに参加',
    description: '講師からお送りするミーティングリンクをクリックして、レッスンに参加します。開始5分前にはリンクをクリックしてお待ちください。',
  },
];

const tips = [
  {
    icon: Mic,
    title: 'マイク',
    description: '外付けマイクまたはヘッドセットの使用を推奨します。雑音の少ない環境で受講してください。',
  },
  {
    icon: Camera,
    title: 'カメラ',
    description: 'カメラはオンでもオフでも構いません。画面共有で作業を見せる場面があります。',
  },
  {
    icon: Wifi,
    title: '回線',
    description: '安定したインターネット接続が必要です。有線LANの使用を推奨します。',
  },
];

export default function InstallZoom() {
  return (
    <PageLayout>
      {/* Page Header */}
      <section className="cinematic-section bg-cinema-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Setup Guide</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-gold">ZOOM</span>をインストール
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              ライブセッションにはZOOMを使用します。以下の手順で準備を整えてください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="cinematic-section">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-lg bg-card border border-border"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-xl font-bold mb-6">快適な受講のために</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {tips.map((tip, i) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-lg bg-card border border-border"
                >
                  <tip.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-sm mb-2">{tip.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* External Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-lg bg-card border border-border text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              ZOOMのダウンロードは公式サイトから行ってください。
            </p>
            <a
              href="https://zoom.us/download"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold-light transition-colors"
            >
              ZOOM ダウンロードページ <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
