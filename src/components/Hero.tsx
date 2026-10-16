import React from 'react';
import { ArrowRight, Download, MessageCircle, MapPin, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const { theme, activeConfig } = useTheme();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Decorative Grids and Light Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className={`absolute inset-0 opacity-[0.03] ${
            theme === 'light' ? 'invert' : ''
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${activeConfig.primaryHex} 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />

        {/* Dynamic Glow Highlights */}
        <div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20 transition-colors duration-500"
          style={{ backgroundColor: activeConfig.primaryHex }}
        />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20 transition-colors duration-500"
          style={{ backgroundColor: activeConfig.secondaryHex }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-900/30 rounded-full blur-[120px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text, Taglines, and Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Live Location & Availability Header */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border ${activeConfig.borderColor} bg-slate-900/40 text-xs font-medium tracking-wide`}>
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: activeConfig.primaryHex }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: activeConfig.primaryHex }}
                />
              </span>
              <span className="flex items-center gap-1.5 font-medium" style={{ color: activeConfig.primaryHex }}>
                <MapPin className="w-3.5 h-3.5" />
                {PORTFOLIO_DATA.profile.location} · Available for Roles & Consulting
              </span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className={theme === 'light' ? 'text-slate-900' : 'text-white'}>
                  {PORTFOLIO_DATA.profile.name}
                </span>
              </h1>
              
              {/* Tagline */}
              <p className={`text-xl sm:text-2xl font-semibold bg-gradient-to-r ${activeConfig.gradientText} bg-clip-text text-transparent transition-all duration-300`}>
                {PORTFOLIO_DATA.profile.tagline}
              </p>
            </div>

            {/* Sub-line */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              {PORTFOLIO_DATA.profile.subline}
            </p>

            {/* Micro Highlights Pill-less Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-medium text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 font-medium" style={{ color: activeConfig.primaryHex }}>
                <CheckCircle2 className="w-4 h-4" /> B.Com (Upper Division), Kabarak
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4" style={{ color: activeConfig.secondaryHex }} /> PLP Software Engineering
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4" style={{ color: activeConfig.primaryHex }} /> CPA & FMVA Candidate
              </span>
            </div>

            {/* CTAs Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              {/* View My Work */}
              <a
                href="#projects"
                style={{ backgroundColor: activeConfig.primaryHex }}
                className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold ${activeConfig.buttonText} shadow-lg ${activeConfig.glowClass} hover:opacity-95 transition-all duration-200 transform hover:-translate-y-0.5`}
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download CV */}
              <button
                onClick={onOpenCVModal}
                className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  theme === 'light'
                    ? 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800 shadow-xs'
                    : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700 hover:border-slate-600 text-slate-200'
                }`}
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download CV</span>
              </button>

              {/* Chat on WhatsApp */}
              <a
                href={`https://wa.me/${PORTFOLIO_DATA.profile.whatsappNumber}?text=${encodeURIComponent(PORTFOLIO_DATA.profile.whatsappDefaultText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-[#25D366]/20 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Contact quick links */}
            <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-3">
              <span>Tel: <a href={`tel:${PORTFOLIO_DATA.profile.phoneTel}`} className="hover:text-emerald-400 font-mono transition-colors">{PORTFOLIO_DATA.profile.phoneDisplay}</a></span>
              <span>·</span>
              <span>Email: <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="hover:text-emerald-400 transition-colors">{PORTFOLIO_DATA.profile.email}</a></span>
            </div>
          </div>

          {/* Right Column: Visual Avatar Composition (44 Logo Avatar + Portrait Card) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-cyan-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

              {/* Main Card Frame */}
              <div className={`relative rounded-3xl border p-5 sm:p-6 transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-white/90 border-slate-200/90 shadow-xl'
                  : 'bg-slate-900/90 border-slate-800/90 shadow-2xl backdrop-blur-xl'
              }`}>
                
                {/* Top Badge: 44 Avatar Logo as official brand emblem */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/40">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 shadow-lg shadow-emerald-500/20">
                      <img
                        src={PORTFOLIO_DATA.profile.logoAvatar}
                        alt="44 Logo Avatar"
                        className="w-full h-full object-cover rounded-full bg-slate-950"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                        Brand Identity
                      </div>
                      <div className={`text-sm font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                        Kevin Kipyegon #44
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    Verified
                  </span>
                </div>

                {/* Portrait Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-slate-800/60 group shadow-inner">
                  <img
                    src={PORTFOLIO_DATA.profile.portrait}
                    alt="Kevin Kipyegon - Accountant, Software Engineer & Data Analyst"
                    className="w-full h-full object-cover object-top transform group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Micro-Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-md border border-slate-700/60 rounded-xl p-3 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-white">East Africa Financial Modernisation</div>
                      <div className="text-[11px] text-emerald-400 font-mono">Python · SQL · IPSAS · AI Models</div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Metric strip */}
                <div className="grid grid-cols-3 gap-2 pt-4 mt-4 text-center border-t border-slate-800/40">
                  <div className="p-2 rounded-lg bg-slate-800/30">
                    <div className="text-base sm:text-lg font-bold" style={{ color: activeConfig.primaryHex }}>5+ Yrs</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Accounting</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-800/30">
                    <div className="text-base sm:text-lg font-bold text-teal-400" style={{ color: activeConfig.secondaryHex }}>PLP Eng</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Software</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-800/30">
                    <div className="text-base sm:text-lg font-bold text-cyan-400">B.Com</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Kabarak Univ</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
