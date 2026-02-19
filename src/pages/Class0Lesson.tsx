import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { class0Lessons } from '@/data/class0';

export default function Class0Lesson() {
  const { lessonId } = useParams();
  const lessonIndex = class0Lessons.findIndex((l) => l.id === lessonId);

  if (lessonIndex === -1) {
    return <Navigate to="/free-materials/class-0" replace />;
  }

  const lesson = class0Lessons[lessonIndex];
  const nextLesson = lessonIndex < class0Lessons.length - 1 ? class0Lessons[lessonIndex + 1] : null;

  return (
    <PageLayout>
      {/* Header */}
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
              <Link to="/free-materials/class-0" className="hover:text-foreground transition-colors">
                クラス 0
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">{lesson.titleJa}</span>
            </nav>

            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
              Lesson {lessonIndex + 1} / {class0Lessons.length}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {lesson.titleJa}
            </h1>
            <p className="text-muted-foreground text-lg">{lesson.titleEn}</p>
          </motion.div>
        </div>
      </section>

      {/* Main content with sidebar */}
      <section className="cinematic-section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[240px_1fr] gap-8 max-w-5xl mx-auto">
            {/* Sidebar Nav — desktop only */}
            <nav className="hidden lg:block">
              <div className="sticky top-28">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  レッスン
                </h3>
                <ul className="space-y-1">
                  {class0Lessons.map((l, i) => (
                    <li key={l.id}>
                      <Link
                        to={`/free-materials/class-0/${l.id}`}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                          l.id === lessonId
                            ? 'text-foreground bg-card border border-border'
                            : 'text-muted-foreground hover:text-foreground hover:bg-card'
                        }`}
                      >
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          l.id === lessonId
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 border border-primary/20 text-primary'
                        }`}>
                          {i + 1}
                        </span>
                        <span className="truncate">{l.titleJa}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Demo Video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-lg overflow-hidden border border-border bg-black">
                  <video
                    controls
                    preload="none"
                    className="w-full"
                    src={lesson.video}
                  >
                    お使いのブラウザは動画再生に対応していません。
                  </video>
                </div>

                {lesson.introJa && (
                  <p className="text-muted-foreground leading-relaxed mt-6">
                    {lesson.introJa}
                  </p>
                )}
              </motion.div>

              {/* Steps */}
              <div className="space-y-6">
                {lesson.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg bg-card border border-border"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="text-xs sm:text-sm font-bold text-primary">
                        {i + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold mb-1">{step.titleJa}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{step.titleEn}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {step.descriptionJa}
                      </p>
                      {step.images.map((imgSrc, imgIndex) => (
                        <div key={imgIndex} className="mt-3 rounded-lg overflow-hidden border border-border">
                          <img
                            src={imgSrc}
                            alt={step.titleEn}
                            loading="lazy"
                            className="w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Next Lesson Button */}
              {nextLesson ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/free-materials/class-0/${nextLesson.id}`}
                    className="flex items-center justify-between p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500 group"
                  >
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground mb-1">次のレッスン</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">
                        {lessonIndex + 2}. {nextLesson.titleJa}
                      </p>
                      <p className="text-sm text-muted-foreground">{nextLesson.titleEn}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4"
                >
                  <p className="text-muted-foreground">
                    クラス 0 のすべてのレッスンを完了しました。
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      to="/free-materials/class-0"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md border border-border text-foreground hover:bg-card transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      クラス 0 に戻る
                    </Link>
                    <Link
                      to="/classes"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-gold-light transition-all duration-300 glow-gold"
                    >
                      クラス一覧を見る <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
