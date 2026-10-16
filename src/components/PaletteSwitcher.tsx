import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles, ChevronDown } from 'lucide-react';
import { useTheme, PALETTES, Palette as PaletteType } from './ThemeContext';

export const PaletteSwitcher: React.FC = () => {
  const { palette, setPalette, theme, activeConfig } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const palettesList: PaletteType[] = ['emerald', 'cobalt', 'gold'];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button with Active Color Dot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change color theme palette"
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 focus:outline-hidden focus-visible:ring-2 ${
          theme === 'light'
            ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
            : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200 hover:border-slate-600'
        }`}
      >
        <div
          className="w-3 h-3 rounded-full shadow-xs"
          style={{ backgroundColor: activeConfig.dotColor }}
        />
        <span className="hidden sm:inline">{activeConfig.name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-64 rounded-2xl border p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 ${
            theme === 'light'
              ? 'bg-white border-slate-200'
              : 'bg-slate-900 border-slate-800'
          }`}
        >
          <div className="px-3 py-2 border-b border-slate-800/40 mb-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Select Brand Palette
            </div>
            <div className="text-[11px] text-slate-500">
              Live preview across charts, accents & glow
            </div>
          </div>

          <div className="space-y-1">
            {palettesList.map((pKey) => {
              const p = PALETTES[pKey];
              const isSelected = palette === pKey;
              return (
                <button
                  key={pKey}
                  onClick={() => {
                    setPalette(pKey);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-colors text-xs ${
                    isSelected
                      ? theme === 'light'
                        ? 'bg-slate-100 font-bold text-slate-900'
                        : 'bg-slate-800/80 font-bold text-white'
                      : theme === 'light'
                      ? 'hover:bg-slate-50 text-slate-700'
                      : 'hover:bg-slate-800/40 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs"
                      style={{ backgroundColor: p.dotColor }}
                    />
                    <div>
                      <div className="font-semibold leading-tight">{p.name}</div>
                      <div className="text-[10px] text-slate-400 leading-tight">
                        {pKey === 'emerald' ? 'Finance & East Africa' : pKey === 'cobalt' ? 'Stripe & Systems' : 'Private Equity & Wealth'}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" style={{ color: p.primaryHex }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
