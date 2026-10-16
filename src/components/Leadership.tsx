import React from 'react';
import { Users, Award, CheckCircle2, HeartHandshake } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

export const Leadership: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="leadership" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
            Governance & Community Impact
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-slate-900' : 'text-white'
          }`}>
            Leadership & Volunteering
          </h2>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mt-3" />
        </div>

        {/* 2-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.leadership.map((item) => (
            <div
              key={item.role}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 ${
                theme === 'light'
                  ? 'bg-white border-slate-200 shadow-xs'
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                    {item.role.includes('Treasurer') ? (
                      <Award className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <HeartHandshake className="w-5 h-5 text-teal-400" />
                    )}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold leading-snug ${
                      theme === 'light' ? 'text-slate-900' : 'text-white'
                    }`}>
                      {item.role}
                    </h3>
                    <p className="text-xs font-medium text-emerald-500 dark:text-emerald-400">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-md bg-slate-800/30 border border-slate-700/40 shrink-0">
                  {item.period}
                </span>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-300'
              }`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
