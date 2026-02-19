import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const works = [
  "/student-work/student1.jpg",
  "/student-work/student2.jpg",
  "/student-work/student3.jpeg",
  "/student-work/student4.jpg",
  "/student-work/student5.jpg",
  "/student-work/student6.jpeg",
  "/student-work/student7.jpg",
  "/student-work/student8.jpg",
  "/student-work/student9.jpg",
  "/student-work/student10.jpg",
  "/student-work/student11.jpg",
  "/student-work/student12.jpg",
  "/student-work/student13.jpg",
  "/student-work/student14.jpg",
  "/student-work/student15.jpg",
];

const testimonials = [
  {
    name: "Iさん",
    role: "会社員",
    quote:
      "何よりも教材の分かり易さが凄いと思います。一つ一つの行程を動画や画像で丁寧に教えて頂け、とても分かり易く一度で理解できました。録画した授業をいつでも見返せる点、facebookやメールで先生に直接質問でき丁寧に回答をして頂ける点にも大変感謝しています。直接ハリウッドで活躍されていた先生から教えて頂けるということ、こんな経験は滅多に無いと思います。",
  },
  {
    name: "Kさん",
    role: "会社員",
    quote:
      "ほぼ初心者でしたが、大変丁寧できめ細やかなご指導により、楽しく学ぶ事ができました。先生のモデリング法を見ているだけでとても勉強になりましたし、大切なポイントは繰り返して下さるので非常にわかりやすかったです。先生のマニュアルは非常にわかりやすく、ずっと使えるので本当にありがたいです。ほぼ初心者からのスタートでしたがモデリング技術がかなり上達しました！",
  },
  {
    name: "Mさん",
    role: "キャラクターデザイナー",
    quote:
      "糸数先生の指導されるモデリング過程は、筋肉や骨の深い理解の上で進めていくのでローポリ～ハイポリまでどの過程で止めても完成度が高いです。モデルの修正がしやすい状態が続くという事で、クリエイティブの試行錯誤に充てる時間を多く取れるようになります。CGに携わる方、業界を目指す方にとって、現在これ以上洗練されたメソッドは無いと思います。",
  },
  {
    name: "Yさん",
    role: "デザイナー",
    quote:
      "「Maya 入門」は無料の講座でしたが、内容は驚くほど濃く、3Dの魅力を感じるとともにどんどんとその世界に引き込まれていきました。分かりやすくいつでも活用できる教材、先生の手厚く丁寧なサポート、ソフトの使い方のみならず物の見方や考え方を学べる点が魅力です。何かしらの理由で3Dを学ぼうかと考えている方がいらっしゃったら、本当におすすめできる講座です。",
  },
  {
    name: "Uさん",
    role: "会社員",
    quote:
      "講座の内容は、本当にとても丁寧で分かりやすく、マンツーマンで質問にも丁寧に動画で解説してくれて、本当に一歩一歩進める事が出来ました。全くの初心者でしたが、糸数先生の熱心な講座のお陰で、最終的な作品を仕上げる事が出来ました。他の講座を受講していたら、私は途中で挫折していたと思います。独学には限界がありますが、マンツーマンでやり取り出来る事には限界がありません。",
  },
  {
    name: "Tさん",
    role: "キャラクターデザイナー",
    quote:
      "50歳手前になって受講しました。本場アメリカの、そしてディズニーにて培ってきたノウハウを教えて頂けるのはとても贅沢な経験でした。常に学んでいく姿勢、調べる姿勢を教えて頂いたと思います。何故4角ポリゴンにこだわるのか、何故ここにエッジを追加するとよいのかなどわかりやすくためになることばかりでした。",
  },
  {
    name: "Sさん",
    role: "デザイナー",
    quote:
      "キャラクター製作は教本ではわかりにくい事が多いのですが、本講義は動画解説があり、その動画を見ながら操作するだけでもキャラクターが出来上がります。実際に自分が作ったモデルデータを添削してもらう事で、どこが間違っていたかなども明確にわかります。キャラクター製作が苦手な人、興味があったけど手が出せないと思っている人などお勧めです。",
  },
  {
    name: "Kさん",
    role: "会社員",
    quote:
      "3Dクリエイターを目指したいと思い立ち、右も左もわからない中受講いたしました。毎週作品を提出し、フィードバックをいただける環境はとてもよかったです。先生のご指導の下、プロセスに沿って自分の作品作りをされたい方にお勧めです。美術的な知識やここだけでしか聞けないディズニーのお話もとても楽しかったです。",
  },
  {
    name: "Iさん",
    role: "キャラクターモデラー",
    quote:
      "先生の指導の下、成功やつまづいた部分をクラスの皆さんと共有でき、多くのことを学ぶことができました。教材は技術的な面や操作面でも解り易く、映画で見たアイデアやテクニックを学べたこと、先生から直にたくさんのお話が聞けたことがとても嬉しかったです。糸数弘樹先生の頭部とボディーモデリングの2クラスを4ヶ月間受講。感謝しかありません。",
  },
  {
    name: "Oさん",
    role: "ゲームプロデューサー",
    quote:
      "デザインの勉強もなく、絵の知識もなく、３Dの知識もない私が、糸数先生に教えていただいた３ヶ月で、今では自分一人で好きなキャラクターの頭部を自由に作成することができます。キャラクター頭部の講座だったにもかかわらず、今私はMayaで注文住宅の外観も内装の家具も外構まで制作できています。",
  },
  {
    name: "Kさん",
    role: "CG ジェネラリスト",
    quote:
      "基礎の部分から、レクチャー動画と参考シーンのハイブリッドで自学自習が出来、Zoomクラスやメールでの直接指導で、より理解を深めることができます。アナトミーの基礎の部分の指導や、ディズニースタイルのノウハウ、糸数先生のアメリカでの仕事上の経験談やお宝エピソードなどもお聞きすることができ、大変勉強になりました。",
  },
];

export default function StudentWorks() {
  return (
    <PageLayout>
      {/* Page Header */}
      <section className="pt-16 pb-4 md:pt-16 md:pb-10 bg-cinema-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">
              Student Works
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              生徒<span className="text-gradient-gold">作品</span>・感想
            </h1>
            <div className="section-divider" />
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="cinematic-section">
        <div className="container mx-auto px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6">
            {works.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1, duration: 0.6 }}
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
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="cinematic-section bg-cinema-gradient"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              受講生の<span className="text-gradient-gold">感想</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
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
              あなたも
              <span className="text-gradient-gold">始めてみませんか</span>
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
