import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="register" className="cinematic-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cinema-blue/5" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            あなたの<span className="text-gradient-gold">クリエイティブ</span>な旅を始めよう
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            まずは無料体験レッスンで、ハリウッド品質の3Dモデリングの世界を体験してください。
            初心者の方も大歓迎です。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#"
              className="px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-gold-light transition-all duration-300 glow-gold text-lg"
            >
              無料体験に申し込む
            </a>
            <a
              href="#"
              className="px-10 py-4 border border-border text-foreground font-medium rounded-md hover:border-primary hover:text-primary transition-all duration-300 text-lg"
            >
              資料をダウンロード
            </a>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
            <div>
              <p className="text-2xl font-bold text-gradient-gold">100+</p>
              <p className="text-xs text-muted-foreground mt-1">受講生</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gradient-gold">15+</p>
              <p className="text-xs text-muted-foreground mt-1">年の経験</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gradient-gold">98%</p>
              <p className="text-xs text-muted-foreground mt-1">満足度</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
