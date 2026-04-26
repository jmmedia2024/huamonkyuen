import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: '브랜드 스토리', 
      path: '/about',
      submenu: [
        { name: '회사소개', path: '/about' },
        { name: '대표인사말', path: '/ceo' },
        { name: '오시는 길', path: '/location' }
      ]
    },
    { 
      name: '서비스 안내', 
      path: '/services',
      submenu: [
        { name: '초혼 서비스', path: '/services/first-marriage' },
        { name: '재혼 서비스', path: '/services/remarriage' },
        { name: '노블레스', path: '/services/noblesse' },
        { name: '새터민 성혼', path: '/services/saeteomin' }
      ]
    },
    { 
      name: '가입안내', 
      path: '/membership/procedure',
      submenu: [
        { name: '가입절차', path: '/membership/procedure' },
        { name: '가입비', path: '/membership/fee' }
      ]
    },
    { name: '성혼 갤러리', path: '/gallery' },
  ];

  const handleScrollToSection = (path: string) => {
    if (path.includes('#')) {
      const id = path.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-6',
        isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-gradient-to-b from-black/50 to-transparent text-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
            <Sparkles className="text-forest-green" size={22} />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "text-2xl font-serif font-bold tracking-[0.1em]",
              isScrolled ? "text-forest-green" : "text-white"
            )}>
              화목연
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative py-4"
              onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                to={item.path}
                className={cn(
                  'text-sm font-semibold tracking-widest hover:text-gold transition-colors block uppercase drop-shadow-sm',
                  location.pathname === item.path ? 'text-gold' : ''
                )}
              >
                {item.name}
              </Link>

              <AnimatePresence>
                {item.submenu && activeSubmenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48"
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-3 text-xs font-bold text-forest-green hover:bg-soft-bg hover:text-gold rounded-xl transition-all"
                          onClick={() => {
                            setActiveSubmenu(null);
                            handleScrollToSection(sub.path);
                          }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <a href="tel:02-538-3407" className="btn-3d-gold !py-2 !px-6 text-xs">
            상담문의 02.538.3407
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white text-forest-green absolute top-full left-0 w-full overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col space-y-4">
                  <Link
                    to={item.path}
                    className="text-lg font-bold tracking-wider flex justify-between items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="grid grid-cols-2 gap-3 pl-4">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="text-sm font-medium text-forest-green/60 hover:text-gold transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            handleScrollToSection(sub.path);
                          }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="tel:02-538-3407" className="btn-3d-gold flex items-center justify-center gap-2">
                <Phone size={18} /> 상담전화 02-538-3407
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
