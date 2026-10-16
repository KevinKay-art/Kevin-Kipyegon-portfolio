import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, MessageCircle, ExternalLink, Palette as PaletteIcon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from './ThemeContext';
import { PaletteSwitcher } from './PaletteSwitcher';

interface NavbarProps {
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'ai-analytics', 'experience', 'education', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'AI & Analytics', href: '#ai-analytics', id: 'ai-analytics' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? theme === 'light'
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
            : 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-md shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity with Number 44 Avatar */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
          >
            <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
              <img
                src={PORTFOLIO_DATA.profile.logoAvatar}
                alt="44 Logo Avatar - Kevin Kipyegon"
                className="w-full h-full object-cover rounded-full bg-slate-900"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-tight text-base sm:text-lg transition-colors ${
                theme === 'light' ? 'text-slate-900 group-hover:text-emerald-700' : 'text-slate-100 group-hover:text-emerald-400'
              }`}>
                {PORTFOLIO_DATA.profile.name}
              </span>
              <span className="text-xs font-medium text-emerald-500 dark:text-emerald-400 tracking-wide">
                Finance × Software × AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm ${
                    isActive
                      ? theme === 'light' ? 'text-emerald-600 font-semibold' : 'text-emerald-400 font-semibold'
                      : theme === 'light' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Palette Switcher, Dark/Light Mode, CV modal trigger, WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Palette Switcher */}
            <PaletteSwitcher />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2.5 rounded-xl border transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                theme === 'light'
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300'
              }`}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-emerald-400" />}
            </button>

            {/* CV Button */}
            <button
              onClick={onOpenCVModal}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                theme === 'light'
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                  : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700 text-slate-200 hover:border-slate-600'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-emerald-500" />
              <span>CV</span>
            </button>

            {/* WhatsApp Direct Header Link */}
            <a
              href={`https://wa.me/${PORTFOLIO_DATA.profile.whatsappNumber}?text=${encodeURIComponent(PORTFOLIO_DATA.profile.whatsappDefaultText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs hover:shadow-emerald-500/25 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <PaletteSwitcher />

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border ${
                theme === 'light'
                  ? 'bg-slate-100 border-slate-200 text-slate-700'
                  : 'bg-slate-900 border-slate-800 text-slate-300'
              }`}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-emerald-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2 rounded-lg border transition-colors ${
                theme === 'light'
                  ? 'bg-slate-100 text-slate-800 border-slate-200'
                  : 'bg-slate-900 text-slate-200 border-slate-800'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-3 transition-colors ${
            theme === 'light'
              ? 'bg-white/95 backdrop-blur-xl border-slate-200'
              : 'bg-slate-950/95 backdrop-blur-xl border-slate-800'
          }`}
        >
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-800/20">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-500/10 text-emerald-500 font-semibold'
                    : theme === 'light' ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCVModal();
              }}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border ${
                theme === 'light'
                  ? 'bg-slate-100 border-slate-300 text-slate-800'
                  : 'bg-slate-900 border-slate-700 text-slate-200'
              }`}
            >
              <FileText className="w-4 h-4 text-emerald-500" />
              <span>View & Download CV</span>
            </button>

            <a
              href={`https://wa.me/${PORTFOLIO_DATA.profile.whatsappNumber}?text=${encodeURIComponent(PORTFOLIO_DATA.profile.whatsappDefaultText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp (0740 840 045)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
