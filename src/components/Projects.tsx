import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, BookOpen, Terminal, Sparkles, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

export const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'automation':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'data':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'web':
        return <Code className="w-4 h-4 text-teal-400" />;
      case 'research':
        return <BookOpen className="w-4 h-4 text-emerald-300" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
              Featured Engineering & Research
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              theme === 'light' ? 'text-slate-900' : 'text-white'
            }`}>
              Projects & Applied Work
            </h2>
            <div className="h-1 w-16 bg-emerald-500 rounded-full mt-4" />
          </div>

          {/* Interactive Category Tabs */}
          <div className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl border self-start md:self-auto ${
            theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'
          }`}>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-xs'
                  : theme === 'light' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setSelectedCategory('automation')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === 'automation'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-xs'
                  : theme === 'light' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Automation
            </button>
            <button
              onClick={() => setSelectedCategory('data')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === 'data'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-xs'
                  : theme === 'light' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              SQL & Data
            </button>
            <button
              onClick={() => setSelectedCategory('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === 'web'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-xs'
                  : theme === 'light' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Web Interfaces
            </button>
            <button
              onClick={() => setSelectedCategory('research')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === 'research'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-xs'
                  : theme === 'light' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Research & Policy
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                theme === 'light'
                  ? 'bg-white border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-lg'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Clean Top Meta (No pill sandwich) */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(project.category)}
                    <span className="capitalize font-mono text-emerald-400">{project.category}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Verified Repository</span>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${
                  theme === 'light' ? 'text-slate-900' : 'text-white'
                }`}>
                  {project.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  {project.description}
                </p>

                {/* Key Highlight Box */}
                <div className={`p-3.5 rounded-xl border mb-5 text-xs ${
                  theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                }`}>
                  <div className="font-semibold text-emerald-400 mb-0.5">Core Functionality:</div>
                  <div>{project.highlight}</div>
                </div>

                {/* Tech Tags - Clean unboxed style with bullet dividers */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-slate-400 mb-6">
                  {project.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span className="text-emerald-500/90">{tag}</span>
                      {idx < project.tags.length - 1 && <span className="text-slate-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Card Footer: Impact statement & GitHub CTA */}
              <div className="pt-4 border-t border-slate-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Impact: </span>
                  {project.impact}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold self-start sm:self-auto border transition-colors ${
                    theme === 'light'
                      ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                      : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* "See More on GitHub" Prompt Requirement */}
        <div className="text-center pt-4">
          <a
            href={PORTFOLIO_DATA.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-emerald-500/50 shadow-md transition-all duration-200"
          >
            <Github className="w-4 h-4 text-emerald-400" />
            <span>See more on GitHub (@KevinKay-art)</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
