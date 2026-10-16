import React from 'react';
import { Landmark, Terminal, BarChart2, Sparkles, Award, GraduationCap, Globe2, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

export const About: React.FC = () => {
  const { theme } = useTheme();

  const pillarIcons = [
    <Landmark className="w-5 h-5 text-emerald-400" key="fin" />,
    <Terminal className="w-5 h-5 text-teal-400" key="py" />,
    <BarChart2 className="w-5 h-5 text-cyan-400" key="data" />,
    <Sparkles className="w-5 h-5 text-emerald-300" key="ai" />,
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
            Professional Profile & Vision
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-slate-900' : 'text-white'
          }`}>
            Bridging Rigorous Accounting with Modern Software & AI
          </h2>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <p className={`text-base sm:text-lg leading-relaxed ${
              theme === 'light' ? 'text-slate-700' : 'text-slate-300'
            }`}>
              {PORTFOLIO_DATA.about.summary}
            </p>

            <p className={`text-sm sm:text-base leading-relaxed ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-400'
            }`}>
              My ambition is rooted in solving real African economic bottlenecks: outdated manual spreadsheets, delayed monthly financial reporting, and inaccessible data insights for decision-makers. By coupling formal accounting standards with Python automation and intelligent LLM analysis, I build transparent, resilient financial workflows that scale across institutions and SMEs in East Africa.
            </p>

            {/* Quick Fact Badges without pills - clean typographic metadata */}
            <div className={`p-5 rounded-2xl border ${
              theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-slate-800'
            }`}>
              <div className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-3">
                Key Credentials & Background
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className={theme === 'light' ? 'text-slate-800' : 'text-slate-200'}>
                    B.Com (Accounting), Kabarak University
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className={theme === 'light' ? 'text-slate-800' : 'text-slate-200'}>
                    Second Class Honours (Upper Division)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className={theme === 'light' ? 'text-slate-800' : 'text-slate-200'}>
                    CPA (KASNEB) & FMVA (In Progress)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className={theme === 'light' ? 'text-slate-800' : 'text-slate-200'}>
                    Bilingual: English & Swahili (Full Professional)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Highlight Box */}
          <div className="lg:col-span-5 space-y-4">
            <div className={`p-6 rounded-2xl border ${
              theme === 'light'
                ? 'bg-emerald-50/50 border-emerald-200/80'
                : 'bg-emerald-950/20 border-emerald-900/60'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                  44
                </div>
                <div>
                  <h3 className={`text-base font-bold ${theme === 'light' ? 'text-emerald-950' : 'text-emerald-200'}`}>
                    East African Financial Focus
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">Nairobi, Kenya</p>
                </div>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                theme === 'light' ? 'text-slate-700' : 'text-slate-300'
              }`}>
                Specialized in navigating Kenya Revenue Authority (KRA) statutory compliance—including VAT, PAYE, and withholding taxes—while architecting automated scripts that empower regional accountants to focus on strategic capital allocation rather than manual data entry.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border ${
              theme === 'light' ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/40 border-slate-800'
            }`}>
              <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                theme === 'light' ? 'text-slate-900' : 'text-slate-200'
              }`}>
                Recognised Academic Honors
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Formally recognized at Kabarak University for outstanding performance in both <strong>Financial Accounting</strong> and <strong>Auditing & Practice Investigations</strong>, demonstrating early mastery in controllership, variance reconciliation, and forensic internal verification.
              </p>
            </div>
          </div>

        </div>

        {/* "What I Bring" 4 Pillars Row */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
              theme === 'light' ? 'text-slate-900' : 'text-white'
            }`}>
              What I Bring to Your Organization
            </h3>
            <span className="text-xs text-slate-400">4 Core Competency Pillars</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.about.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                  theme === 'light'
                    ? 'bg-white hover:bg-slate-50 border-slate-200 shadow-xs hover:shadow-md'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center mb-4">
                  {pillarIcons[idx]}
                </div>
                <h4 className={`text-base font-bold mb-2 ${
                  theme === 'light' ? 'text-slate-900' : 'text-white'
                }`}>
                  {pillar.title}
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
