import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors ${
      theme === 'light'
        ? 'bg-slate-100 border-slate-200 text-slate-700'
        : 'bg-slate-950 border-slate-800 text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/30">
          
          {/* Brand & Identity with 44 Avatar */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-emerald-500 to-cyan-500">
              <img
                src={PORTFOLIO_DATA.profile.logoAvatar}
                alt="44 Logo Avatar"
                className="w-full h-full object-cover rounded-full bg-slate-900"
              />
            </div>
            <div>
              <div className={`font-bold text-base ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                {PORTFOLIO_DATA.profile.name}
              </div>
              <div className="text-xs text-emerald-500 font-mono">
                Accountant · Software Engineer · Data Analyst
              </div>
            </div>
          </div>

          {/* Social Links (New tab, rel="noopener noreferrer") */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`p-2 rounded-xl border transition-colors ${
                theme === 'light'
                  ? 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700 hover:text-emerald-600'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-emerald-400'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={`p-2 rounded-xl border transition-colors ${
                theme === 'light'
                  ? 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700 hover:text-emerald-600'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-emerald-400'
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              aria-label="Send Email"
              className={`p-2 rounded-xl border transition-colors ${
                theme === 'light'
                  ? 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700 hover:text-emerald-600'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-emerald-400'
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className={`p-2 rounded-xl border transition-colors ${
                theme === 'light'
                  ? 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300'
              }`}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Legal, Note, and Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Kevin Kipyegon. All rights reserved.
          </div>

          <div className="font-medium text-emerald-500 dark:text-emerald-400">
            References available upon request.
          </div>

          <div className="text-slate-500">
            Nairobi, Kenya · East Africa
          </div>
        </div>

      </div>
    </footer>
  );
};
