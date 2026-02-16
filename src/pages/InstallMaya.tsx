import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PageLayout from '@/components/PageLayout';

const steps = [
  {
    number: 1,
    title: 'Autodeskアカウントの作成',
    description: 'Autodesk公式サイトにアクセスし、無料のアカウントを作成します。学生の方は教育機関向けの無料ライセンスが利用できます。',
  },
  {
    number: 2,
    title: 'Mayaのダウンロード',
    description: 'Autodeskアカウントにログイン後、Maya のダウンロードページから最新版をダウンロードします。体験版（30日間無料）も利用可能です。',
  },
  {
    number: 3,
    title: 'インストール',
    description: 'ダウンロードしたインストーラーを実行し、画面の指示に従ってインストールを完了します。',
  },
  {
    number: 4,
    title: '初期設定',
    description: 'Mayaを起動し、ライセンス認証を行います。初回起動時にプロジェクト設定やワークスペースの基本設定を行いましょう。',
  },
];

export default function InstallMaya() {
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
              <span className="text-gradient-gold">Maya</span>をインストール
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              CG Online Academyの受講にはAutodesk Mayaが必要です。以下の手順でインストールしてください。
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

          {/* OS-specific instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-xl font-bold mb-6">OS別の注意事項</h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="windows" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-sm font-medium">Windows</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Windows 10/11 (64bit) が必要です</li>
                    <li>管理者権限でインストーラーを実行してください</li>
                    <li>DirectX 11対応のグラフィックカードが推奨されます</li>
                    <li>最低8GB以上のRAMが必要です（16GB推奨）</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mac" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-sm font-medium">Mac</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>macOS 11 (Big Sur) 以降が必要です</li>
                    <li>Apple Silicon (M1/M2) の場合はRosetta 2で動作します</li>
                    <li>Metal対応のグラフィックスが必要です</li>
                    <li>最低8GB以上のRAMが必要です（16GB推奨）</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          {/* External Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-lg bg-card border border-border text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              詳細なシステム要件やダウンロードはAutodesk公式サイトをご確認ください。
            </p>
            <a
              href="https://www.autodesk.com/products/maya/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold-light transition-colors"
            >
              Autodesk Maya 公式サイト <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
