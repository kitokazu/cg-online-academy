import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const works = [
  '/student-work/student1.jpg',
  '/student-work/student2.jpg',
  '/student-work/student4.jpg',
  '/student-work/student5.jpg',
  '/student-work/student6.jpeg',
];

const testimonials = [
  {
    name: 'Kさん',
    role: '会社員',
    quote:
      'ほぼ初心者でしたが、大変丁寧できめ細やかなご指導により、楽しく学ぶ事ができました。先生のマニュアルは非常にわかりやすく、ずっと使えるので本当にありがたいです。ほぼ初心者からのスタートでしたがモデリング技術がかなり上達しました！',
  },
  {
    name: 'Mさん',
    role: 'キャラクターデザイナー',
    quote:
      '糸数先生の指導されるモデリング過程は、筋肉や骨の深い理解の上で進めていくのでローポリ～ハイポリまでどの過程で止めても完成度が高いです。CGに携わる方、業界を目指す方にとって、現在これ以上洗練されたメソッドは無いと思います。',
  },
  {
    name: 'Oさん',
    role: 'ゲームプロデューサー',
    quote:
      'デザインの勉強もなく、絵の知識もなく、３Dの知識もない私が、糸数先生に教えていただいた３ヶ月で、今では自分一人で好きなキャラクターの頭部を自由に作成することができます。',
  },
];

export default function StudentWorksSection() {
  return (
    <section id="works" className="cinematic-section bg-cinema-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Student Works</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            生徒<span className="text-gradient-gold">作品</span>・感想
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 md:gap-6">
          {works.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group break-inside-avoid mb-4 md:mb-6 rounded-lg overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500"
            >
              <img
                src={src}
                alt={`受講生作品 ${i + 1}`}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {t.quote}
              </p>
              <footer className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{t.name}</span>
                <span className="mx-1">—</span>
                {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/student-works"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold-light transition-colors duration-300"
          >
            もっと見る <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
