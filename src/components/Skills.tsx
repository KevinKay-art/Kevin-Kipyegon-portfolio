import React, { useState } from 'react';
import { Calculator, Terminal, Globe, Layers, Languages, Check, Filter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

export const Skills: React.FC = () => {
  const { theme } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Accounting & Finance':
        return <Calculator className="w-5 h-5 text-emerald-400" />;
      case 'Programming & Data':
        return <Terminal className="w-5 h-5 text-teal-400" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Tools & Software':
        return <Layers className="w-5 h-5 text-emerald-300" />;
      case 'Languages':
        return <Languages className="w-5 h-5 text-teal-300" />;
      default:
        return <Check className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredCategories = selectedFilter === 'all'
    ? PORTFOLIO_DATA.skills.categories
    : PORTFOLIO_DATA.skills.categories.filter(c => c.name.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
              Capabilities & Toolchain
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              theme === 'light' ? 'text-slate-900' : 'text-white'
            }`}>
              Skills Rooted in Finance, Accelerated by Tech
            </h2>
            <div className="h-1 w-16 bg-emerald-500 rounded-full mt-4" />
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl border self-start md:self-auto ${
            theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'
          }`}>
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedFilter === 'all'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-xs'
                  : theme === 'light' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setSelectedFilter('accounting')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedFilter === 'accounting'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-xs'
                  : theme === 'light' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Accounting
            </button>
            <button
              onClick={() => setSelectedFilter('programming')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedFilter === 'programming'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-xs'
                  : theme === 'light' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Python & SQL
            </button>
            <button
              onClick={() => setSelectedFilter('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedFilter === 'web'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-xs'
                  : theme === 'light' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setSelectedFilter('tools')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedFilter === 'tools'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-xs'
                  : theme === 'light' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ERP & Excel
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className={`p-6 rounded-2xl border transition-all duration-200 ${
                theme === 'light'
                  ? 'bg-white border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0">
                  {getCategoryIcon(category.name)}
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${
                    theme === 'light' ? 'text-slate-900' : 'text-white'
                  }`}>
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List without Pill enclosures (Clean unboxed typographic discipline) */}
              <ul className="mt-4 space-y-2.5">
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                    <span className={theme === 'light' ? 'text-slate-700' : 'text-slate-300'}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
