import { motion } from 'framer-motion';
const instructorImg = '/teacher2.jpg';

const credits = [
  'アナと雪の女王',
  'ベイマックス',
  '愛犬とごちそう',
  '塔の上のラプンツェル',
  'アイアンジャイアント',
  'シュガー・ラッシュ',
  'マジックランプ（東京ディズニーシー）',
];

export default function InstructorSection() {
  return (
    <section id="instructor" className="cinematic-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden glow-gold">
              <img
                src={instructorImg}
                alt="糸数弘樹 - CG Online 講師"
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-lg" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Instructor</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">糸数弘樹</h2>
            <p className="text-muted-foreground mb-8 text-lg">CGクリエイター / ディズニーアニメーションスタジオ出身</p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              ディズニーやワーナーなど、ハリウッドの業界で学んだ知識やテクニックなどを伝授します。
              アカデミー賞受賞作品を含む多数の映画制作に参加した経験を持ち、
              世界最高峰の3Dキャラクターモデリング技術を日本語で直接指導します。
            </p>

            <div>
              <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">参加作品</h3>
              <div className="flex flex-wrap gap-2">
                {credits.map((credit) => (
                  <span
                    key={credit}
                    className="px-3 py-1.5 text-xs rounded-full border border-border bg-secondary text-secondary-foreground"
                  >
                    {credit}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
