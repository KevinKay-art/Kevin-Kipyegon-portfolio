import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${PORTFOLIO_DATA.profile.whatsappNumber}?text=${encodeURIComponent(
    PORTFOLIO_DATA.profile.whatsappDefaultText
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Optional micro popup tooltip on hover */}
      {showTooltip && (
        <div className="mb-2 bg-slate-900 text-white text-xs px-3.5 py-2 rounded-xl shadow-xl border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-200 flex items-center gap-2">
          <span>Chat with Kevin ({PORTFOLIO_DATA.profile.phoneDisplay})</span>
          <button onClick={() => setShowTooltip(false)} className="text-slate-400 hover:text-white">
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kevin Kipyegon on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 animate-wa-pulse transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/50"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
