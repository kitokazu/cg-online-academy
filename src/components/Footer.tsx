import { Link } from 'react-router-dom';
const logo = '/logo-nobg.png';

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <Link to="/" className="inline-block mb-3">
            <img src={logo} alt="CG Online Academy" className="h-14 w-auto" />
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            ハリウッドのプロが教える<br />3Dキャラクターモデリング講座
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-primary tracking-wider uppercase mb-4">サイトマップ</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/classes" className="hover:text-primary transition-colors">クラス登録</Link></li>
            <li><Link to="/free-materials" className="hover:text-primary transition-colors">無料教材</Link></li>
            <li><Link to="/student-works" className="hover:text-primary transition-colors">生徒作品・感想</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-primary tracking-wider uppercase mb-4">サポート</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/install/maya" className="hover:text-primary transition-colors">Mayaインストール</Link></li>
            <li><Link to="/install/zoom" className="hover:text-primary transition-colors">ZOOMインストール</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">お問い合わせ</Link></li>
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
