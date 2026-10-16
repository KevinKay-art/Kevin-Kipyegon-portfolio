import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';
export type Palette = 'emerald' | 'cobalt' | 'gold';

export interface PaletteConfig {
  id: Palette;
  name: string;
  tagline: string;
  dotColor: string;
  primaryHex: string;
  secondaryHex: string;
  textColor: string;
  textLightColor: string;
  bgColor: string;
  bgHoverColor: string;
  buttonText: string;
  borderColor: string;
  gradientText: string;
  glowClass: string;
}

export const PALETTES: Record<Palette, PaletteConfig> = {
  emerald: {
    id: 'emerald',
    name: 'Emerald Fintech',
    tagline: 'East African Accounting & Modern Capital (Default)',
    dotColor: '#10b981',
    primaryHex: '#10b981',
    secondaryHex: '#06b6d4',
    textColor: 'text-emerald-400',
    textLightColor: 'text-emerald-600',
    bgColor: 'bg-emerald-500',
    bgHoverColor: 'hover:bg-emerald-400',
    buttonText: 'text-slate-950',
    borderColor: 'border-emerald-500/30',
    gradientText: 'from-emerald-400 via-teal-300 to-cyan-400',
    glowClass: 'shadow-emerald-500/20',
  },
  cobalt: {
    id: 'cobalt',
    name: 'Royal Cobalt',
    tagline: 'Global Fintech & High-Precision Software',
    dotColor: '#3b82f6',
    primaryHex: '#3b82f6',
    secondaryHex: '#6366f1',
    textColor: 'text-blue-400',
    textLightColor: 'text-blue-600',
    bgColor: 'bg-blue-500',
    bgHoverColor: 'hover:bg-blue-400',
    buttonText: 'text-white',
    borderColor: 'border-blue-500/30',
    gradientText: 'from-blue-400 via-indigo-300 to-cyan-400',
    glowClass: 'shadow-blue-500/20',
  },
  gold: {
    id: 'gold',
    name: 'Executive Gold',
    tagline: 'Wealth Advisory & Institutional Controllership',
    dotColor: '#eab308',
    primaryHex: '#eab308',
    secondaryHex: '#f59e0b',
    textColor: 'text-amber-400',
    textLightColor: 'text-amber-600',
    bgColor: 'bg-amber-400',
    bgHoverColor: 'hover:bg-amber-300',
    buttonText: 'text-slate-950',
    borderColor: 'border-amber-500/30',
    gradientText: 'from-amber-300 via-yellow-200 to-amber-500',
    glowClass: 'shadow-amber-500/20',
  },
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  palette: Palette;
  setPalette: (p: Palette) => void;
  activeConfig: PaletteConfig;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  palette: 'emerald',
  setPalette: () => {},
  activeConfig: PALETTES.emerald,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kevin-theme') as Theme;
      if (saved) return saved;
    }
    return 'dark';
  });

  const [palette, setPaletteState] = useState<Palette>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kevin-palette') as Palette;
      if (saved && (saved === 'emerald' || saved === 'cobalt' || saved === 'gold')) {
        return saved;
      }
    }
    return 'emerald';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('kevin-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-palette', palette);
    localStorage.setItem('kevin-palette', palette);
  }, [palette]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setPalette = (newPalette: Palette) => {
    setPaletteState(newPalette);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        palette,
        setPalette,
        activeConfig: PALETTES[palette],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
