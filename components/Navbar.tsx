import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { content, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-sm shadow-slate-900/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="font-heading text-base md:text-lg font-semibold tracking-wider text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
        >
          {content.nav.brand}
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="hover:text-slate-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform whitespace-nowrap shrink-0"
          >
            {content.nav.home}
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="hover:text-slate-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform whitespace-nowrap shrink-0"
          >
            {content.nav.about}
          </a>
          <a
            href="#interests"
            onClick={(e) => scrollToSection(e, 'interests')}
            className="hover:text-slate-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform whitespace-nowrap shrink-0"
          >
            {content.nav.interests}
          </a>
        </nav>

        {/* Zone 3: Primary Action (Language Switcher) & Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleLanguage}
            type="button"
            aria-label="Switch language"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all hover:border-blue-500/50 whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>{language === 'en' ? 'فارسی (FA)' : 'English (EN)'}</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 text-base font-medium">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="py-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              {content.nav.home}
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="py-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              {content.nav.about}
            </a>
            <a
              href="#interests"
              onClick={(e) => scrollToSection(e, 'interests')}
              className="py-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              {content.nav.interests}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
