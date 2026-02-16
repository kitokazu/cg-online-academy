const logo = '/logo-nobg.png';

const Footer = () => (
  <footer id="contact" className="border-t border-border py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <a href="#hero" className="inline-block mb-3">
            <img src={logo} alt="CG Online Academy" className="h-14 w-auto" />
          </a>
          <p className="text-muted-foreground text-sm leading-relaxed">
            ハリウッドのプロが教える<br />3Dキャラクターモデリング講座
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-primary tracking-wider uppercase mb-4">リンク</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-primary transition-colors">講座について</a></li>
            <li><a href="#instructor" className="hover:text-primary transition-colors">講師紹介</a></li>
            <li><a href="#works" className="hover:text-primary transition-colors">生徒作品</a></li>
            <li><a href="#register" className="hover:text-primary transition-colors">クラス登録</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-primary tracking-wider uppercase mb-4">お問い合わせ</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>メール: info@cgonline.org</li>
            <li>Web: www.cgonline.org</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
        © 2026 CG Online Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
