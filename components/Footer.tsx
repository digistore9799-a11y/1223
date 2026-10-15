import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { content } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-slate-50 py-12 px-6 z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-xs text-slate-500">
          <span className="font-heading font-semibold tracking-wide text-slate-800">
            ALIREZA DANESHMAND
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>
          <span>{content.footer.copyright}</span>
        </div>

        {/* Action: Quiet Back to Top */}
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Back to top"
          className="group inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer py-1"
        >
          <span>{content.footer.backToTop}</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 text-blue-600" />
        </button>
      </div>
    </footer>
  );
};
