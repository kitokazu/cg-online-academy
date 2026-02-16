import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/PageLayout';

const freeLessons = [
  {
    title: 'カエル',
    description: 'シンプルなカエルのワイヤーフレームモデリングで基本操作を学びます。',
  },
  {
    title: 'ヘビ',
    description: 'ヘビの制作を通じてカーブやエッジフローの基本を理解します。',
  },
  {
    title: 'ネコ',
    description: '四足動物のモデリングで、体のプロポーションと構造を学びます。',
  },
  {
    title: 'イヌ',
    description: 'より複雑な四足動物のモデリングに挑戦し、スキルを磨きます。',
  },
];

const youtubeVideos = [
  {
    title: 'クラス解説動画',
    description: 'CG Online Academyのクラス内容を詳しくご紹介します。',
    embedId: 'dQw4w9WgXcQ',
  },
  {
    title: '授業風景',
    description: '実際のライブセッションの様子をご覧いただけます。',
    embedId: 'dQw4w9WgXcQ',
  },
];

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

      {/* Free Maya Course */}
      <section className="cinematic-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              無料Mayaコース — <span className="text-gradient-gold">基本ワイヤーフレーム</span>
            </h2>
            <p className="text-muted-foreground">
              簡単な動物モデルの制作を通じて、Mayaの基本操作を身につけましょう。
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeLessons.map((lesson, i) => (
              <motion.div
                key={lesson.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full bg-card border border-border hover:border-primary/30 transition-all duration-500 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">無料</Badge>
                      <BookOpen className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{lesson.title}</CardTitle>
                    <CardDescription>{lesson.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Tutorials */}
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {youtubeVideos.map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card border border-border overflow-hidden">
                  <div className="aspect-video bg-secondary flex items-center justify-center">
                    <Play className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold mb-1">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
