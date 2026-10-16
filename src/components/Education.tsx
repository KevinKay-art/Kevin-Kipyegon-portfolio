import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

export const Education: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
            Academic Pedigree & Professional Growth
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-slate-900' : 'text-white'
          }`}>
            Education & Certifications
          </h2>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.education.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                theme === 'light'
                  ? 'bg-white border-slate-200 shadow-xs hover:shadow-md'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Header with status badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-md border ${
                    item.status === 'Completed'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : 'bg-teal-500/10 text-teal-300 border-teal-500/30'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <h3 className={`text-lg font-bold mb-1 leading-snug ${
                  theme === 'light' ? 'text-slate-900' : 'text-white'
                }`}>
                  {item.title}
                </h3>

                <div className="text-xs font-medium text-emerald-500 dark:text-emerald-400 mb-2">
                  {item.institution}
                </div>

                {item.honours && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 mb-3 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/20">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.honours}</span>
                  </div>
                )}

                <ul className="space-y-2 mt-3">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span className={theme === 'light' ? 'text-slate-600' : 'text-slate-400'}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/40 text-xs font-mono text-slate-500">
                {item.period}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
