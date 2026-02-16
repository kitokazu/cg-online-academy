import { motion } from 'framer-motion';
import work1 from '@/assets/student-work-1.jpg';
import work2 from '@/assets/student-work-2.jpg';
import work3 from '@/assets/student-work-3.jpg';

const works = [
  { src: work1, title: 'ファンタジーキャラクター', student: '受講生作品' },
  { src: work2, title: 'スタイライズドキャラクター', student: '受講生作品' },
  { src: work3, title: 'リアリスティック造形', student: '受講生作品' },
];

export default function StudentWorksSection() {
  return (
    <section id="works" className="cinematic-section bg-cinema-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Student Works</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            生徒<span className="text-gradient-gold">作品</span>・感想
          </h2>
          <div className="section-divider" />
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
  );
}
