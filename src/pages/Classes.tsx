import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BarChart3, ChevronRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/PageLayout";
import { freeClasses, paidClasses, CourseClass } from "@/data/classes";
import { features } from "@/data/features";

const progressionSteps = [
  { label: "クラス 0", sub: "Maya基本操作", free: true },
  { label: "クラス 1", sub: "ローポリ / 入門", free: true },
  { label: "クラス 2", sub: "初級モデリング", free: false },
  { label: "クラス 3", sub: "頭部モデリング", free: false },
  { label: "クラス 4", sub: "ボディーモデリング", free: false },
];

function ClassCard({
  cls,
  showPrice,
}: {
  cls: CourseClass;
  showPrice: boolean;
}) {
  return (
    <Card className="h-full bg-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={cls.image}
          alt={cls.subtitle}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          {showPrice ? (
            <span className="text-2xl font-bold text-gradient-gold">
              {cls.priceLabel}
            </span>
          ) : (
            <Badge variant="secondary">無料</Badge>
          )}
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <BarChart3 className="w-3 h-3" /> {cls.level}
          </span>
        </div>
        <CardTitle className="text-lg">
          {cls.title}: {cls.subtitle}
        </CardTitle>
        <CardDescription>{cls.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 flex-shrink-0" /> {cls.duration} —{" "}
            {cls.format}
          </span>
        </div>
        <div className="space-y-1 mb-4">
          {cls.topics.map((topic) => (
            <p
              key={topic}
              className="text-sm text-muted-foreground flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
              {topic}
            </p>
          ))}
        </div>
        {showPrice && (
          <>
            <p className="text-xs text-muted-foreground mb-4">
              前提: {cls.prerequisites}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-gold-light transition-colors duration-300 text-sm"
            >
              登録・お問い合わせ <ArrowRight className="w-4 h-4" />
            </Link>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default function Classes() {
  return (
    <PageLayout>
      {/* Compact Header + Course Progression */}
      <div className="pt-12 pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-gradient-gold">クラス</span>登録
            </h1>
            <p className="text-muted-foreground">
              無料の入門クラスからプロレベルまで、段階的にスキルを習得できるカリキュラム
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 mt-8">
            {progressionSteps.map((step, i) => (
              <motion.div
                key={step.label + step.sub}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-2 md:gap-2"
              >
                <div className="text-center px-4 py-3 rounded-lg bg-card border border-border min-w-[140px]">
                  <p className="font-semibold text-sm">{step.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {step.sub}
                  </p>
                  {step.free && (
                    <Badge variant="secondary" className="mt-2 text-xs">
                      無料
                    </Badge>
                  )}
                </div>
                {i < progressionSteps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-primary hidden md:block flex-shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Free Classes */}
      <section className="cinematic-section bg-cinema-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              無料<span className="text-gradient-gold">クラス</span>
            </h2>
            <p className="text-muted-foreground">
              まずは無料クラスでMayaの世界を体験してください
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeClasses.map((cls, i) => (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ClassCard cls={cls} showPrice={false} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Paid Classes */}
      <section className="cinematic-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              有料<span className="text-gradient-gold">クラス</span>
            </h2>
            <p className="text-muted-foreground">
              ライブセッションでプロから直接学べる本格コース
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paidClasses.map((cls, i) => (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ClassCard cls={cls} showPrice={true} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="cinematic-section bg-cinema-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              CG Online Academyの
              <span className="text-gradient-gold">特徴</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-500 group"
              >
                <feature.icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-base font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
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
              まずは<span className="text-gradient-gold">無料体験</span>から
            </h2>
            <p className="text-muted-foreground mb-8">
              ご質問やお申し込みはお気軽にお問い合わせください。
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-gold-light transition-all duration-300 glow-gold"
            >
              お問い合わせ <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
