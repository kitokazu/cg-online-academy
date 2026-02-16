import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
const logo = '/logo-nobg.png';

const navItems = [
  { label: 'ホーム', to: '/' },
  { label: 'クラス登録', to: '/classes' },
  { label: '生徒作品・感想', to: '/student-works' },
  { label: '無料教材', to: '/free-materials' },
  { label: 'お問い合わせ', to: '/contact' },
];

const supportItems = [
  { label: 'Mayaインストール', to: '/install/maya' },
  { label: 'ZOOMインストール', to: '/install/zoom' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (to: string) => {
    const path = to.split('#')[0];
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="CG Online Academy" className="h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm transition-colors duration-300 ${
                isActive(item.to) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Support dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSupportOpen(true)}
            onMouseLeave={() => setSupportOpen(false)}
          >
            <button className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1">
              サポート <ChevronDown className="w-3 h-3" />
            </button>
            <AnimatePresence>
              {supportOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-48 py-2 bg-card border border-border rounded-md shadow-lg"
                >
                  {supportItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/classes"
            className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-gold-light transition-colors duration-300"
          >
            無料体験
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`transition-colors py-2 ${
                    isActive(item.to) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border pt-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">サポート</p>
                {supportItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/classes"
                className="px-5 py-3 text-center font-medium bg-primary text-primary-foreground rounded-md"
                onClick={() => setIsOpen(false)}
              >
                無料体験
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
