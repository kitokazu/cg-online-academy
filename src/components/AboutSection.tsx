import { motion } from 'framer-motion';
import { Monitor, Users, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'ハリウッド品質',
    description: 'ディズニー、ピクサーなど世界最高峰のスタジオで培われた技術を直接学べます。',
  },
  {
    icon: Monitor,
    title: 'オンライン完結',
    description: 'Mayaを使った実践的なレッスンを、ご自宅からZOOMで受講できます。',
  },
  {
    icon: Users,
    title: '少人数制指導',
    description: '一人ひとりに丁寧なフィードバック。あなたのペースで確実にスキルアップ。',
  },
  {
    icon: Globe,
    title: '世界基準のカリキュラム',
    description: 'キャラクターモデリングの基礎から応用まで、業界標準のワークフローを習得。',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="cinematic-section bg-cinema-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">About the Course</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            プロの<span className="text-gradient-gold">技術</span>を、あなたに
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            「アナと雪の女王」をはじめ数々のディズニー映画制作に携わったCGクリエイターが、
            ハリウッドの業界で学んだ知識やテクニックを伝授します。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500 group"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
