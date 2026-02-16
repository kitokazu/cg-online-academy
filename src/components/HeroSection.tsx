import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

const Scene3D = lazy(() => import('./Scene3D'));

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-background" />

      {/* 3D overlay */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Content — left-aligned for asymmetry with 3D model */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-6"
          >
            CG オンライン アカデミー
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          >
            3Dキャラクター
            <br />
            <span className="text-gradient-gold">モデリング講座</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="w-16 h-px bg-primary/40 mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10"
          >
            ディズニー・ピクサー作品に携わったCGクリエイターから
            <br className="hidden md:block" />
            世界レベルのスキルを学ぶ
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#register"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-gold-light transition-all duration-300 glow-gold text-center"
            >
              無料体験レッスン
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-border text-foreground font-medium rounded-md hover:border-primary hover:text-primary transition-all duration-300 text-center"
            >
              講座の詳細を見る
            </a>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-muted-foreground text-sm"
          >
            {['アカデミー賞受賞作品', 'アナと雪の女王', 'ベイマックス', '塔の上のラプンツェル'].map((credit) => (
              <span key={credit} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/60" />
                {credit}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
