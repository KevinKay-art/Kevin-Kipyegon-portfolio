import React from 'react';
import {
  FileSpreadsheet,
  BarChart3,
  Terminal,
  Cpu,
  Code2,
  Languages,
  CheckCircle2,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

export const Services: React.FC = () => {
  const { theme } = useTheme();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-emerald-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-teal-400" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-300" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-teal-300" />;
      case 'Languages':
        return <Languages className="w-6 h-6 text-cyan-300" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
            Consulting & Technical Solutions
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-slate-900' : 'text-white'
          }`}>
            Services Offered
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-400'
          }`}>
            Delivering bespoke financial controllership, automated data pipelines, and modern web solutions for enterprises, statutory bodies, and growing SMEs in East Africa.
          </p>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* Services 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PORTFOLIO_DATA.services.map((service) => (
            <div
              key={service.id}
              className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                theme === 'light'
                  ? 'bg-white border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className={`text-lg font-bold mb-2 ${
                  theme === 'light' ? 'text-slate-900' : 'text-white'
                }`}>
                  {service.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {service.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/30">
                  <div className="text-xs font-semibold text-emerald-400 mb-1">Key Deliverables:</div>
                  {service.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Inquire via WhatsApp */}
              <div className="pt-5 mt-5 border-t border-slate-800/40">
                <a
                  href={`https://wa.me/${PORTFOLIO_DATA.profile.whatsappNumber}?text=${encodeURIComponent(`Hello Kevin, I would like to inquire about your service: "${service.title}".`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-between w-full px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    theme === 'light'
                      ? 'bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700'
                      : 'bg-slate-800/60 hover:bg-emerald-950/40 text-slate-200 hover:text-emerald-400 border border-slate-700/60'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Inquire for this Service</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
