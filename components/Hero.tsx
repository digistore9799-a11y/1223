import React, { useState } from 'react';
import { ArrowDown, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import alirezaPortrait from '../assets/images/alireza_actual_portrait_1792047960216.jpg';

export const Hero: React.FC = () => {
  const { content, isRTL } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const navOffset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typographic Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 text-start">
          {/* Unboxed clean metadata kicker */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-blue-600 tracking-wide mb-4">
            <span>{content.hero.roleTag}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>2026</span>
          </div>

          {/* Name Display */}
          <h2 className="font-heading text-2xl md:text-3xl font-normal text-slate-500 tracking-tight mb-2">
            {content.hero.name}
          </h2>

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.15] mb-6 text-balance">
            {content.hero.headline}
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mb-10 text-balance">
            {content.hero.supportingText}
          </p>

          {/* Primary CTA Button */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToAbout}
              type="button"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{content.hero.discoverMore}</span>
              <ArrowDown className={`w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5 ${isRTL ? 'rotate-0' : ''}`} />
            </button>

            <a
              href="#interests"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 text-sm font-medium transition-all duration-200 shadow-xs"
            >
              <span>{content.nav.interests}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Prominent Profile Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <div className="relative group w-full max-w-[340px] sm:max-w-[380px] aspect-square">
            {/* Subtle soft blue ambient backlight bloom */}
            <div 
              className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-400/20 via-sky-300/20 to-indigo-300/20 blur-xl opacity-80 group-hover:opacity-100 transition duration-700 pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Profile frame container */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl shadow-slate-300/40 p-2.5">
              <div className="relative h-full w-full rounded-xl overflow-hidden bg-slate-50">
                {!imgError ? (
                  <img
                    src={alirezaPortrait}
                    alt="Alireza Daneshmand - Software Developer"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-102"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 p-6 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4 shadow-xs">
                      <Code2 className="w-10 h-10" />
                    </div>
                    <span className="font-heading font-semibold text-lg text-slate-900">
                      Alireza Daneshmand
                    </span>
                    <span className="text-xs text-slate-500 mt-1">
                      Software Developer
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
