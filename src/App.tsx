import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { AIAnalyticsSection } from './components/AIAnalyticsSection';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CVModal } from './components/CVModal';

function PortfolioApp() {
  const { theme } = useTheme();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-slate-950 text-slate-100'
    }`}>
      {/* Sticky Header with 44 Logo Avatar */}
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
        <About />
        <Skills />
        <AIAnalyticsSection />
        <Experience />
        <Education />
        <Projects />
        <Services />
        <Leadership />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Fixed Button on Every Screen with Pulse Animation */}
      <FloatingWhatsApp />

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
