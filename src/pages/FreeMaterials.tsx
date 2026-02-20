import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/PageLayout';

export default function FreeMaterials() {
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
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Free Materials</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-gold">無料</span>教材
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Mayaの基本操作から簡単なモデリングまで、無料で学べる教材をご用意しています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Class 0 — Maya Basics */}
      <section className="cinematic-section">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              クラス 0 — <span className="text-gradient-gold">Maya 基本操作</span>
            </h2>
            <p className="text-muted-foreground">
              Mayaのインターフェースからオブジェクト操作まで、基礎を段階的に学べるチュートリアルです。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/free-materials/class-0" className="block group">
              <Card className="bg-card border border-border hover:border-primary/30 transition-all duration-500">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">無料</Badge>
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Maya 基本操作 1
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    インターフェース、UIエレメント、オブジェクトの作成、カメラ操作、トランスフォーメーション、コンポーネント編集など、全7レッスンでMayaの基礎を習得します。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    チュートリアルを始める <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <Link to="/free-materials/class-0-2" className="block group">
              <Card className="bg-card border border-border hover:border-primary/30 transition-all duration-500">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">無料</Badge>
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Maya 基本操作 2（Modeling Tools）
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    プロジェクト設定、削除、Extrude、Multi-Cut、Append、Insert Edge Loop、Group、Combine、Mergeなど、モデリングに必要な基本ツールを全13レッスンで習得します。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    チュートリアルを始める <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* YouTube Tutorial */}
      <section className="cinematic-section bg-cinema-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-gradient-gold">YouTube</span> チュートリアル
            </h2>
            <p className="text-muted-foreground">動画で学べるチュートリアルをご覧ください。</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-card border border-border overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/NKn9FxdtdNE"
                  title="CG Online Academy — クラス解説"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-1">クラス解説動画</h3>
                <p className="text-sm text-muted-foreground">
                  CG Online Academyのクラス内容を詳しくご紹介します。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cinematic-section">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              さらに学びたい方へ
            </h2>
            <p className="text-muted-foreground mb-8">
              有料クラスでは、ライブセッションでプロから直接指導を受けられます。
            </p>
            <Link
              to="/classes"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-gold-light transition-all duration-300 glow-gold"
            >
              クラス一覧を見る <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
