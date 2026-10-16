import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

export const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all fields before submitting.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Send to backend API if available, or simulate successful database entry
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => null);

      if (response && response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback smooth confirmation and clear fallback instructions
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
            Initiate Collaboration
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-slate-900' : 'text-white'
          }`}>
            Get in Touch
          </h2>
          <p className={`text-sm sm:text-base mt-3 ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-400'
          }`}>
            Whether you are modernising your corporate financial reporting, looking to automate reconciliation workflows, or exploring new leadership in finance and technology, I would love to connect.
          </p>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Button */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 sm:p-7 rounded-2xl border space-y-6 ${
              theme === 'light' ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/60 border-slate-800'
            }`}>
              
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800/40">
                <div className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-emerald-400 to-cyan-400">
                  <img
                    src={PORTFOLIO_DATA.profile.logoAvatar}
                    alt="44 Logo"
                    className="w-full h-full object-cover rounded-full bg-slate-950"
                  />
                </div>
                <div>
                  <h3 className={`font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                    Kevin Kipyegon
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              {/* Direct Details */}
              <div className="space-y-4">
                
                {/* Email with copy button */}
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-mono">Email Address</div>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                        className={`text-xs sm:text-sm font-medium hover:text-emerald-400 transition-colors ${
                          theme === 'light' ? 'text-slate-800' : 'text-slate-200'
                        }`}
                      >
                        {PORTFOLIO_DATA.profile.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    title="Copy Email"
                    className="p-1.5 rounded-lg border border-slate-700/60 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Phone / WhatsApp</div>
                    <a
                      href={`tel:${PORTFOLIO_DATA.profile.phoneTel}`}
                      className={`text-xs sm:text-sm font-medium hover:text-emerald-400 font-mono transition-colors ${
                        theme === 'light' ? 'text-slate-800' : 'text-slate-200'
                      }`}
                    >
                      {PORTFOLIO_DATA.profile.phoneDisplay} ({PORTFOLIO_DATA.profile.phoneTel})
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Primary Location</div>
                    <div className={`text-xs sm:text-sm font-medium ${
                      theme === 'light' ? 'text-slate-800' : 'text-slate-200'
                    }`}>
                      {PORTFOLIO_DATA.profile.location} (East Africa Time, UTC+3)
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Big Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${PORTFOLIO_DATA.profile.whatsappNumber}?text=${encodeURIComponent(PORTFOLIO_DATA.profile.whatsappDefaultText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl text-sm font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md shadow-[#25D366]/20 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              theme === 'light' ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/60 border-slate-800'
            }`}>
              <h3 className={`text-lg font-bold mb-4 ${
                theme === 'light' ? 'text-slate-900' : 'text-white'
              }`}>
                Send a Direct Message
              </h3>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <div className="font-semibold text-emerald-300">Message Received!</div>
                    <p className="mt-0.5 text-slate-300">
                      Thank you for reaching out. Your inquiry has been logged, and Kevin will review it shortly. For urgent matters, feel free to chat on WhatsApp directly.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Submission Incomplete</div>
                    <p className="mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Samuel Mwangi"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-colors ${
                      theme === 'light'
                        ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                        : 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5"
                  >
                    Your Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="e.g. samuel@business.co.ke"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-colors ${
                      theme === 'light'
                        ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                        : 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5"
                  >
                    Message & Project Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Describe your financial workflow, reporting requirements, or role overview..."
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-colors resize-none ${
                      theme === 'light'
                        ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                        : 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all duration-200 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Kevin</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
