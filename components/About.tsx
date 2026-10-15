import React from 'react';
import { BookOpen, Cpu, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { content } = useLanguage();

  const icons = [
    <Cpu className="w-5 h-5 text-blue-600" key="cpu" />,
    <Sparkles className="w-5 h-5 text-indigo-600" key="sparkles" />,
    <BookOpen className="w-5 h-5 text-sky-600" key="book" />,
  ];

  return (
    <section id="about" className="relative py-24 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-start">
          <div className="text-xs md:text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2">
            {content.about.subtitle}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {content.about.title}
          </h2>
        </div>

        {/* Narrative Split: Authentic Student Story & Active Learning Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Prose Text */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal text-start">
            <p className="border-s-2 border-blue-600 ps-5 text-slate-800 font-medium">
              {content.about.p1}
            </p>
            <p className="ps-5 text-slate-600">
              {content.about.p2}
            </p>
          </div>

          {/* Active Exploration & Learning Focus List */}
          <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <h3 className="font-heading text-lg font-semibold text-slate-900 mb-6 text-start">
              {content.about.learningFocusTitle}
            </h3>

            <div className="space-y-6">
              {content.about.learningFocusItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 text-start">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs shrink-0 mt-0.5">
                    {icons[index % icons.length]}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
