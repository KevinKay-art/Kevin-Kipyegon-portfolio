import React from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Briefcase, Award, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className={`relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden transition-all ${
        theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
      }`}>
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-base font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                Curriculum Vitae Preview
              </h3>
              <p className="text-xs text-slate-400">
                Kevin Kipyegon · Accountant & Software Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.profile.cvPath}
              download="Kevin_Kipyegon_CV.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-slate-700/60 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-xs sm:text-sm">
          
          {/* Header Summary */}
          <div className="border-b border-slate-800/40 pb-6 text-center space-y-2">
            <h1 className={`text-2xl font-extrabold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
              KEVIN KIPYEGON
            </h1>
            <p className="font-semibold text-emerald-400 text-sm">
              Accountant | Software Engineer | Data Analyst | AI Builder
            </p>
            <p className="text-xs text-slate-400">
              Nairobi, Kenya · {PORTFOLIO_DATA.profile.phoneDisplay} · {PORTFOLIO_DATA.profile.email} · github.com/KevinKay-art
            </p>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/40 pb-1">
              Professional Summary
            </h4>
            <p className={`leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              {PORTFOLIO_DATA.about.summary}
            </p>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/40 pb-1">
              Education & Certifications
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between font-bold text-slate-200">
                  <span className={theme === 'light' ? 'text-slate-900' : 'text-white'}>Software Development & Engineering</span>
                  <span className="text-xs font-mono text-slate-400">2024 – Present</span>
                </div>
                <div className="text-xs text-emerald-400">PLP Africa (Power Learn Project)</div>
                <div className="text-xs text-slate-400 mt-0.5">Python, web development, relational database design, SQL.</div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-200">
                  <span className={theme === 'light' ? 'text-slate-900' : 'text-white'}>Bachelor of Commerce (Accounting Option)</span>
                  <span className="text-xs font-mono text-slate-400">Dec 2021</span>
                </div>
                <div className="text-xs text-emerald-400">Kabarak University · Second Class Honours (Upper Division)</div>
                <div className="text-xs text-slate-400 mt-0.5">Recognized for outstanding performance in Financial Accounting and Auditing & Practice Investigations.</div>
              </div>

              <div>
                <div className="text-xs text-slate-300">
                  <strong>Certifications in Progress:</strong> CPA (KASNEB), FMVA (Corporate Finance Institute)
                </div>
                <div className="text-xs text-slate-400">
                  <strong>Completed:</strong> Excel for Accountants, Coursera (2022)
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/40 pb-1">
              Professional Experience
            </h4>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-bold">
                  <span className={theme === 'light' ? 'text-slate-900' : 'text-white'}>Accountant Intern</span>
                  <span className="text-xs font-mono text-slate-400">April 2023 – April 2024</span>
                </div>
                <div className="text-xs text-emerald-400">County Government of Kericho · Kericho, Kenya</div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400 text-xs">
                  <li>Prepared and reviewed financial statements in compliance with IPSAS and public finance accounting standards.</li>
                  <li>Processed and verified multi-departmental payment vouchers, receipts, and invoices.</li>
                  <li>Executed monthly bank reconciliations and general ledger adjustments.</li>
                  <li>Assisted in annual budget preparation and expenditure variance modeling.</li>
                  <li>Prepared statutory tax filings (VAT, PAYE, withholding tax) in line with KRA regulations.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold">
                  <span className={theme === 'light' ? 'text-slate-900' : 'text-white'}>Junior Accountant (Industrial Attachment)</span>
                  <span className="text-xs font-mono text-slate-400">Sept 2021 – Nov 2021</span>
                </div>
                <div className="text-xs text-emerald-400">KEPHIS (Kenya Plant Health Inspectorate Service) · Nairobi, Kenya</div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400 text-xs">
                  <li>Managed daily financial transactions, cheque issuances, bank deposits, and payment processing.</li>
                  <li>Conducted regular bank reconciliations and maintained audit-ready filing archives.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/40 pb-1">
              Core Skills & Tools
            </h4>
            <div className="text-xs space-y-1.5 text-slate-400">
              <div><strong>Accounting & Finance:</strong> Financial Reporting, Budgeting & Forecasting, Tax Preparation (VAT/PAYE), Bank Reconciliation, Auditing, IFRS/IPSAS.</div>
              <div><strong>Programming & Data:</strong> Python (Pandas, NumPy, scripts), SQL (PostgreSQL, schema design), Chart.js, AI/LLM integration.</div>
              <div><strong>Tools & Software:</strong> Microsoft Excel (Advanced: PivotTables, VLOOKUP, Financial Modelling), QuickBooks, Sage, Tally ERP.</div>
              <div><strong>Languages:</strong> English (Full professional), Swahili (Full professional, translation & localization).</div>
            </div>
          </div>

          {/* References */}
          <div className="text-xs text-center text-slate-400 pt-4 border-t border-slate-800/40">
            <em>References available upon request.</em>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800/40 flex items-center justify-between bg-slate-950/40">
          <span className="text-xs text-slate-400">
            Verified Curriculum Vitae
          </span>
          <a
            href={PORTFOLIO_DATA.profile.cvPath}
            download="Kevin_Kipyegon_CV.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Kevin_Kipyegon_CV.pdf</span>
          </a>
        </div>

      </div>
    </div>
  );
};
