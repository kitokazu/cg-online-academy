import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { class0Part2Lessons } from '@/data/class0-2';

export default function Class0Part2() {
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
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/free-materials" className="hover:text-foreground transition-colors">
                無料教材
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">クラス 0-2</span>
            </nav>

            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Class 0 — Part 2</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-gold">Maya</span> 基本操作 2
            </h1>
            <p className="text-muted-foreground text-sm mb-4">Modeling Tools</p>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              モデリングに必要な基本ツールを13のレッスンで学びます。
              Extrude、Multi-Cut、Merge など、制作に欠かせない操作を身につけましょう。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lesson Cards */}
      <section className="cinematic-section">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {class0Part2Lessons.map((lesson, i) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/free-materials/class-0-2/${lesson.id}`}
                  className="flex items-center gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {lesson.titleJa}
                    </h3>
                    <p className="text-sm text-muted-foreground">{lesson.titleEn}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {lesson.steps.length} ステップ
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cinematic-section bg-cinema-gradient">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              次のステップへ
            </h2>
            <p className="text-muted-foreground mb-8">
              基本操作を習得したら、有料クラスでプロから直接指導を受けましょう。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/free-materials"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md border border-border text-foreground hover:bg-card transition-colors"
              >
                無料教材に戻る
              </Link>
              <Link
                to="/classes"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-gold-light transition-all duration-300 glow-gold"
              >
                クラス一覧を見る <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
