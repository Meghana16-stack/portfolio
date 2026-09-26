import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Explore', href: '#expertise' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'expertise', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-sm shadow-pink-500/5'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Student Name */}
          <button
            onClick={() => scrollTo('#home')}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-rose-500 to-pink-400 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform duration-200">
              GM
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#1E1B2E] group-hover:text-pink-600 transition-colors">
                G MEGHANA
              </span>
              <span className="hidden sm:block text-[10px] font-semibold tracking-wider text-pink-500 uppercase">
                B.Tech CSM • Portfolio
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? 'text-pink-600 font-semibold'
                      : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50/60'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            <button
              onClick={() => scrollTo('#contact')}
              className="ml-3 px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 rounded-full shadow-sm shadow-pink-500/25 hover:shadow-md hover:shadow-pink-500/35 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center gap-1.5"
            >
              <Sparkles size={13} />
              <span>Let's Talk</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="md:hidden p-2 rounded-xl text-gray-700 hover:text-pink-600 hover:bg-pink-50/80 transition-colors focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} className="text-pink-600" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-pink-100 shadow-lg shadow-pink-500/5 overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1.5">
              {navLinks.map(link => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className={`block w-full text-left text-sm font-medium px-4 py-2.5 rounded-xl transition-all ${
                      isActive
                        ? 'text-pink-600 bg-pink-50/80 font-semibold'
                        : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full text-center py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl shadow-sm shadow-pink-500/25 active:scale-95 transition-all"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
