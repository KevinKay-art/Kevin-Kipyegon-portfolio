import React from 'react';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

export const Experience: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
            Work History & Financial Controllership
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-slate-900' : 'text-white'
          }`}>
            Professional Experience
          </h2>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {PORTFOLIO_DATA.experience.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Pin Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500 group-hover:bg-emerald-500 transition-colors" />

              {/* Card Container */}
              <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 ${
                theme === 'light'
                  ? 'bg-white border-slate-200 shadow-xs hover:shadow-md'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}>
                
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${
                      theme === 'light' ? 'text-slate-900' : 'text-white'
                    }`}>
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-400 mt-1">
                      <span className="flex items-center gap-1.5 font-medium text-emerald-500 dark:text-emerald-400">
                        <Building2 className="w-3.5 h-3.5" />
                        {item.company}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-500 font-mono text-xs">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium self-start sm:self-auto bg-slate-800/40 text-emerald-400 border border-slate-700/50">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-2.5 mt-4">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={theme === 'light' ? 'text-slate-700' : 'text-slate-300'}>
                        {ach}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
