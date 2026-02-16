import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, ShieldCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/PageLayout';
import { classes } from '@/data/classes';

const inquiryTypes = [
  { value: 'registration', label: 'クラス登録' },
  { value: 'question', label: '質問' },
  { value: 'cancel', label: 'キャンセル・返金' },
  { value: 'other', label: 'その他' },
];

export default function Contact() {
  const { toast } = useToast();
  const [inquiryType, setInquiryType] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: '送信完了',
      description: 'お問い合わせを受け付けました。折り返しご連絡いたします。',
    });
    (e.target as HTMLFormElement).reset();
    setInquiryType('');
  };

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
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Contact</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              お問い合わせ・<span className="text-gradient-gold">登録</span>
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              クラスへの登録やご質問など、お気軽にお問い合わせください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="cinematic-section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">お名前</Label>
                  <Input id="name" required placeholder="山田 太郎" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input id="email" type="email" required placeholder="example@email.com" />
                </div>

                <div className="space-y-2">
                  <Label>お問い合わせ種別</Label>
                  <Select value={inquiryType} onValueChange={setInquiryType} required>
                    <SelectTrigger>
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {inquiryType === 'registration' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-2"
                  >
                    <Label>登録希望クラス</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="クラスを選択" />
                      </SelectTrigger>
                      <SelectContent>
                        {classes.map((cls) => (
                          <SelectItem key={cls.id} value={cls.id}>
                            {cls.title}: {cls.subtitle} ({cls.priceLabel})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message">メッセージ</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="ご質問やご要望をご記入ください"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-gold-light transition-all duration-300 glow-gold"
                >
                  送信する
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold mb-4">連絡先</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    info@cgonline.org
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                    www.cgonline.org
                  </li>
                </ul>
              </div>

              {/* Refund Policy */}
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">返金保証</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  未受講分の全額返金を保証しています。受講開始後でも、
                  残りのセッション分の料金は全額返金いたします。安心してお申し込みください。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
