import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import work1 from '@/assets/student-work-1.jpg';
import work2 from '@/assets/student-work-2.jpg';
import work3 from '@/assets/student-work-3.jpg';

const works = [
  { src: work1, title: 'ファンタジーキャラクター', student: '受講生作品' },
  { src: work2, title: 'スタイライズドキャラクター', student: '受講生作品' },
  { src: work3, title: 'リアリスティック造形', student: '受講生作品' },
];

const testimonials = [
  {
    quote: '初心者でも分かりやすく教えていただき、Mayaの操作がどんどん楽しくなりました。先生のフィードバックが具体的で、毎回成長を実感できます。',
    name: '受講生',
    course: 'クラス2受講',
  },
  {
    quote: 'ハリウッドで実際に使われているテクニックを直接学べるのは本当に貴重です。録画もあるので、何度も復習できるのが助かります。',
    name: '受講生',
    course: 'クラス4受講',
  },
  {
    quote: '無料クラスから始めて、今ではキャラクターモデリングが趣味になりました。丁寧な指導のおかげで、独学では絶対に得られないスキルが身につきました。',
    name: '受講生',
    course: 'クラス1→2受講',
  },
];

export default function StudentWorks() {
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
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Student Works</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              生徒<span className="text-gradient-gold">作品</span>・感想
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              CG Online Academyで学んだ受講生の作品と感想をご紹介します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="cinematic-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              受講生<span className="text-gradient-gold">作品</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {works.map((work, i) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={work.src}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <p className="text-xs text-primary mb-1">{work.student}</p>
                  <h3 className="text-lg font-semibold">{work.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="cinematic-section bg-cinema-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Testimonials</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              受講生の<span className="text-gradient-gold">感想</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-lg bg-card border border-border"
              >
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <footer className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{t.name}</span> — {t.course}
                </footer>
              </motion.blockquote>
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
              あなたも<span className="text-gradient-gold">始めてみませんか</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              無料クラスから、プロレベルのモデリングまで段階的に学べます。
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
