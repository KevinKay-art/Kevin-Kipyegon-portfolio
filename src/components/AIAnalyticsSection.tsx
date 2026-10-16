import React, { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import {
  Database,
  LineChart,
  Cpu,
  LayoutDashboard,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Send,
  HelpCircle,
  TrendingUp,
  FileSpreadsheet,
  Info
} from 'lucide-react';
import { PORTFOLIO_DATA, MonthlyFinancialRecord } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const AIAnalyticsSection: React.FC = () => {
  const { theme, activeConfig } = useTheme();
  const [activeChartTab, setActiveChartTab] = useState<'trends' | 'budget'>('trends');
  const [selectedMonth, setSelectedMonth] = useState<string | null>('Aug');
  const [queryInput, setQueryInput] = useState('');
  const [queryHistory, setQueryHistory] = useState<Array<{ q: string; a: string; time: string }>>([
    {
      q: "Which month had the biggest budget variance and why?",
      a: "August recorded the largest adverse variance of -KES 80,000 (KES 510,000 actual expenses vs. KES 430,000 budget). The variance was driven by advance bulk material procurement for Q4 contracts, which was subsequently absorbed by record revenues in September and October.",
      time: "Just now"
    }
  ]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const sampleData = PORTFOLIO_DATA.sampleFinancialData;

  // Chart 1: Revenue vs Expenses Trends
  const trendChartData = useMemo(() => {
    return {
      labels: sampleData.map(d => d.month),
      datasets: [
        {
          label: 'Revenue (KES)',
          data: sampleData.map(d => d.revenue),
          borderColor: activeConfig.primaryHex,
          backgroundColor: `${activeConfig.primaryHex}1a`,
          tension: 0.35,
          fill: true,
          pointBackgroundColor: activeConfig.primaryHex,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
        {
          label: 'Actual Expenses (KES)',
          data: sampleData.map(d => d.expenses),
          borderColor: activeConfig.secondaryHex,
          backgroundColor: `${activeConfig.secondaryHex}0d`,
          tension: 0.35,
          fill: true,
          pointBackgroundColor: activeConfig.secondaryHex,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    };
  }, [sampleData, activeConfig]);

  // Chart 2: Budget vs Actual Bar Chart
  const budgetChartData = useMemo(() => {
    return {
      labels: sampleData.map(d => d.month),
      datasets: [
        {
          label: 'Budgeted Expenses (KES)',
          data: sampleData.map(d => d.budgetExpenses),
          backgroundColor: theme === 'light' ? 'rgba(148, 163, 184, 0.8)' : 'rgba(71, 85, 105, 0.7)',
          borderRadius: 6,
        },
        {
          label: 'Actual Expenses (KES)',
          data: sampleData.map(d => d.expenses),
          backgroundColor: sampleData.map(d => (d.variance < 0 ? '#f43f5e' : activeConfig.primaryHex)),
          borderRadius: 6,
        },
      ],
    };
  }, [sampleData, theme, activeConfig]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: theme === 'light' ? '#334155' : '#cbd5e1',
          font: { family: 'Inter', size: 12 },
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: theme === 'light' ? '#ffffff' : '#0f172a',
        titleColor: theme === 'light' ? '#0f172a' : '#f8fafc',
        bodyColor: theme === 'light' ? '#334155' : '#cbd5e1',
        borderColor: theme === 'light' ? '#e2e8f0' : '#334155',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        callbacks: {
          label: (context: any) => {
            const val = context.parsed.y || 0;
            return ` ${context.dataset.label}: KES ${val.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: theme === 'light' ? 'rgba(226, 232, 240, 0.6)' : 'rgba(51, 65, 85, 0.3)',
        },
        ticks: {
          color: theme === 'light' ? '#64748b' : '#94a3b8',
          font: { family: 'Inter', size: 11 },
        },
      },
      y: {
        grid: {
          color: theme === 'light' ? 'rgba(226, 232, 240, 0.6)' : 'rgba(51, 65, 85, 0.3)',
        },
        ticks: {
          color: theme === 'light' ? '#64748b' : '#94a3b8',
          font: { family: 'Inter', size: 11 },
          callback: (value: any) => `KES ${(value / 1000)}k`,
        },
      },
    },
  };

  // Rule-based and semantic answer generator
  const handleAskQuestion = (customQ?: string) => {
    const q = (customQ || queryInput).trim();
    if (!q) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      let answer = "";
      const lower = q.toLowerCase();

      if (lower.includes('variance') || lower.includes('biggest') || lower.includes('worst') || lower.includes('overrun')) {
        answer = "The most significant budget variance occurred in August with an adverse variance of -KES 80,000 (Actual: KES 510,000 vs Budget: KES 430,000). Management notes confirm this was an intentional advance bulk purchase of materials for anticipated Q4 order volume, which successfully shielded against regional price increases.";
      } else if (lower.includes('margin') || lower.includes('profit') || lower.includes('highest') || lower.includes('best month')) {
        answer = "October was the peak revenue and margin month, generating KES 820,000 in revenue, KES 445,000 in expenses, and a net operating income of KES 375,000 (a 45.7% net operating margin). Cumulative year-to-date operating margin across all 10 months is 40.4%.";
      } else if (lower.includes('tax') || lower.includes('kra') || lower.includes('vat')) {
        answer = "Tax and statutory compliance status is green: All monthly VAT and PAYE obligations were accurately calculated and reconciled prior to the 20th statutory deadline. Withholding taxes on external contractor invoices were validated against KRA withholding certificates.";
      } else if (lower.includes('reconciliation') || lower.includes('bank') || lower.includes('anomaly')) {
        answer = "Automated Python reconciliation checks confirmed 100% agreement between bank statements and internal cash book entries with zero unpresented cheques outstanding past 30 days. No duplicate payment transactions detected across the 10-month ledger period.";
      } else {
        answer = `Financial Ledger Analysis: Across the 10-month evaluation period, cumulative revenue totaled KES 6,380,000 against expenses of KES 3,925,000, yielding a favorable net variance of +KES 50,000 against overall departmental budget allocations. Cash flow runway remains robust.`;
      }

      setQueryHistory(prev => [{ q, a: answer, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }, ...prev]);
      setQueryInput('');
      setIsAnalyzing(false);
    }, 600);
  };

  const workflowSteps = [
    {
      num: "01",
      title: "Collect & Clean",
      tech: "Python (Pandas) · SQL",
      desc: "Pull, sanitize, and validate transaction feeds, bank statements, and ERP tables to eliminate errors at the source.",
      icon: <Database className="w-5 h-5 text-emerald-400" />
    },
    {
      num: "02",
      title: "Analyse",
      tech: "Variance Models · Excel Pivot",
      desc: "Run trend calculations, budget vs. actual variances, 3-way reconciliation checks, and operational ratio models.",
      icon: <LineChart className="w-5 h-5 text-teal-400" />
    },
    {
      num: "03",
      title: "Synthesize & Explain",
      tech: "Automated Commentary · Anomaly Detection",
      desc: "Scan ledgers for anomalies, draft plain-language management commentary, and interrogate financial datasets in natural language.",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />
    },
    {
      num: "04",
      title: "Deliver",
      tech: "Chart.js · Actionable Dashboards",
      desc: "Produce visual interactive dashboards, clear board packs, and concise briefs that executives can act on immediately.",
      icon: <LayoutDashboard className="w-5 h-5 text-emerald-300" />
    }
  ];

  const useCases = [
    {
      title: "AI-Assisted Bank Reconciliation & Discrepancy Detection",
      desc: "Automated reconciliation matching between cashbooks and bank statements, flagging timing lags and duplicate debit records."
    },
    {
      title: "Automated Monthly Financial Reports with Written Commentary",
      desc: "Generates comprehensive management packs paired with an AI-authored narrative that explains revenue drivers and cost centers in plain business terms."
    },
    {
      title: "Expense & Budget Variance Analysis with Plain Explanations",
      desc: "Decomposes departmental spend line items against approved budgets and explains the operational 'why' behind adverse spikes."
    },
    {
      title: "SME Financial Performance & Tax Compliance Insights",
      desc: "Monitors VAT thresholds, PAYE liabilities, and cash runway specifically calibrated for Kenyan and East African statutory requirements."
    },
    {
      title: "Chat-Style Assistant for Uploaded Financial Data",
      desc: "Allows directors and accountants to interrogate financial spreadsheets in natural language without writing SQL queries."
    }
  ];

  const toolsList = [
    "Python", "Pandas", "NumPy", "SQL", "Excel (Advanced)", "Chart.js", "Matplotlib / Plotly", "LLM APIs", "Prompt Engineering"
  ];

  return (
    <section id="ai-analytics" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Intro Copy */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
            Finance × Data Science × Artificial Intelligence
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
            theme === 'light' ? 'text-slate-900' : 'text-white'
          }`}>
            Data Analytics with AI
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === 'light' ? 'text-slate-700' : 'text-slate-300'
          }`}>
            {PORTFOLIO_DATA.aiAnalytics.intro}
          </p>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mt-4" />
        </div>

        {/* 4-Step Workflow (Connected line) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className={`text-xl font-bold tracking-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
              End-to-End Financial Intelligence Workflow
            </h3>
            <span className="text-xs text-slate-400">4-Step Automated Pipeline</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {workflowSteps.map((step, idx) => (
              <div
                key={step.title}
                className={`p-6 rounded-2xl border relative transition-all duration-200 hover:-translate-y-1 ${
                  theme === 'light'
                    ? 'bg-white border-slate-200 shadow-xs hover:border-emerald-300'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-500">
                    Step {step.num}
                  </span>
                </div>

                <h4 className={`text-base font-bold mb-1 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                  {step.title}
                </h4>

                <div className="text-xs font-medium text-emerald-400 font-mono mb-2">
                  {step.tech}
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Working Financial & AI Demo */}
        <div className={`rounded-3xl border p-6 sm:p-8 mb-20 transition-all ${
          theme === 'light'
            ? 'bg-white border-slate-200 shadow-xl'
            : 'bg-slate-900/70 border-slate-800 shadow-2xl backdrop-blur-md'
        }`}>
          
          {/* Demo Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/40 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                  Live Interactive Demo
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded-sm">
                  Sample data for demonstration
                </span>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                10-Month Financial Performance & Variance Engine
              </h3>
            </div>

            {/* Segmented Chart Selector */}
            <div className={`flex items-center gap-1 p-1 rounded-xl border self-start sm:self-auto ${
              theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'
            }`}>
              <button
                onClick={() => setActiveChartTab('trends')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeChartTab === 'trends'
                    ? 'bg-emerald-500 text-slate-950 shadow-xs'
                    : theme === 'light' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Revenue vs Expenses Trends
              </button>
              <button
                onClick={() => setActiveChartTab('budget')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeChartTab === 'budget'
                    ? 'bg-emerald-500 text-slate-950 shadow-xs'
                    : theme === 'light' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Budget vs Actual Variance
              </button>
            </div>
          </div>

          {/* Metric Overview Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6 border-b border-slate-800/40">
            <div className="p-4 rounded-xl bg-slate-800/20 border border-slate-800/40">
              <span className="text-xs text-slate-400 block mb-1">Total Revenue</span>
              <span className="text-lg sm:text-xl font-bold text-emerald-400">KES 6,580,000</span>
              <span className="text-[11px] text-slate-500 block mt-0.5">10-month trading aggregate</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/20 border border-slate-800/40">
              <span className="text-xs text-slate-400 block mb-1">Total Operating Expenses</span>
              <span className="text-lg sm:text-xl font-bold text-cyan-400">KES 3,925,000</span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Actual ledger disbursements</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/20 border border-slate-800/40">
              <span className="text-xs text-slate-400 block mb-1">Net Operating Margin</span>
              <span className="text-lg sm:text-xl font-bold text-emerald-400">40.4%</span>
              <span className="text-[11px] text-slate-500 block mt-0.5">KES 2,655,000 net income</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/20 border border-slate-800/40">
              <span className="text-xs text-slate-400 block mb-1">Budget Variance Health</span>
              <span className="text-lg sm:text-xl font-bold text-teal-400">+KES 50,000</span>
              <span className="text-[11px] text-emerald-500 font-medium block mt-0.5">Favorable overall position</span>
            </div>
          </div>

          {/* Chart Canvas Area */}
          <div className="py-6 h-[340px] sm:h-[380px] w-full">
            {activeChartTab === 'trends' ? (
              <Line data={trendChartData} options={chartOptions} />
            ) : (
              <Bar data={budgetChartData} options={chartOptions} />
            )}
          </div>

          {/* Dynamic AI Insights Box (Prompt Requirement) */}
          <div className={`p-5 rounded-2xl border transition-all mt-4 ${
            theme === 'light'
              ? 'bg-emerald-50/70 border-emerald-200'
              : 'bg-emerald-950/20 border-emerald-800/40'
          }`}>
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className={`text-sm font-bold ${theme === 'light' ? 'text-emerald-950' : 'text-emerald-300'}`}>
                    Management Variance Commentary & Audit Notes
                  </h4>
                  <span className="text-[11px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-sm">
                    Automated Variance Report
                  </span>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  <strong>Critical Finding:</strong> August posted the highest adverse variance of <strong>-KES 80,000</strong> (Expenses: KES 510,000 vs. Budget: KES 430,000). <em>Operational Context:</em> An advance bulk inventory procurement was executed prior to anticipated supplier tariff increases, successfully protecting Q4 margins where revenue reached a record KES 820,000 in October with 45.7% net operating margin.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
                  <span><strong>Audit Trail:</strong> Bank reconciliation verified with zero unpresented cheques.</span>
                  <span>·</span>
                  <span><strong>KRA Compliance:</strong> All monthly VAT & PAYE returns filed prior to deadlines.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Ledger Query Tool */}
          <div className="mt-8 pt-8 border-t border-slate-800/40">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <h4 className={`text-sm font-bold uppercase tracking-wider ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                Interactive Ledger Query Tool
              </h4>
            </div>

            <p className="text-xs text-slate-400 mb-4">
              Select a standard financial inquiry below or enter a custom metric query to inspect the transaction data:
            </p>

            {/* Quick Prompt Suggestions */}
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => handleAskQuestion("Which month had the biggest budget variance and why?")}
                className={`text-xs px-3 py-1.5 rounded-lg border text-left transition-colors ${
                  theme === 'light'
                    ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
                    : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-300'
                }`}
              >
                Which month had the biggest budget variance and why?
              </button>
              <button
                onClick={() => handleAskQuestion("What was our highest margin quarter?")}
                className={`text-xs px-3 py-1.5 rounded-lg border text-left transition-colors ${
                  theme === 'light'
                    ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
                    : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-300'
                }`}
              >
                What was our highest margin month?
              </button>
              <button
                onClick={() => handleAskQuestion("Are there any bank reconciliation anomalies or audit flags?")}
                className={`text-xs px-3 py-1.5 rounded-lg border text-left transition-colors ${
                  theme === 'light'
                    ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
                    : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-300'
                }`}
              >
                Are there any bank reconciliation anomalies?
              </button>
            </div>

            {/* Input Bar */}
            <div className="flex gap-2">
              <input
                type="text"
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAskQuestion()}
                placeholder="Inquire about revenue trends, monthly variances, or audit status..."
                className={`flex-1 px-4 py-2.5 rounded-xl text-sm border focus:outline-hidden focus:ring-2 focus:ring-emerald-500 ${
                  theme === 'light'
                    ? 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
                    : 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500'
                }`}
              />
              <button
                onClick={() => handleAskQuestion()}
                disabled={isAnalyzing}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-semibold text-sm flex items-center gap-1.5 transition-colors"
              >
                {isAnalyzing ? (
                  <span className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Processing</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5" />
                    <span>Run Query</span>
                  </span>
                )}
              </button>
            </div>

            {/* Query History Responses */}
            <div className="mt-4 space-y-3">
              {queryHistory.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border text-xs sm:text-sm space-y-1.5 ${
                    theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/80 border-slate-850'
                  }`}
                >
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                    <span className="text-emerald-500 font-semibold">{item.q}</span>
                    <span>{item.time}</span>
                  </div>
                  <p className={theme === 'light' ? 'text-slate-700' : 'text-slate-300'}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* 5 Use-Case Cards */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <h3 className={`text-2xl font-bold tracking-tight mb-2 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
              Practical AI & Analytics Use Cases in Finance
            </h3>
            <p className="text-sm text-slate-400">
              Demonstrating direct operational capability across accounting, controllership, and business management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, index) => (
              <div
                key={uc.title}
                className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                  theme === 'light'
                    ? 'bg-white border-slate-200 shadow-xs hover:shadow-md'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xs font-mono font-bold">
                    0{index + 1}
                  </div>
                  <h4 className={`text-base font-bold leading-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                    {uc.title}
                  </h4>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Shown Row (Prompt Requirement) */}
        <div className={`p-6 rounded-2xl border ${
          theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/40 border-slate-800'
        }`}>
          <div className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-3">
            Core Tools & Technologies Employed in This Workflow
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-slate-300">
            {toolsList.map((tool, idx) => (
              <React.Fragment key={tool}>
                <span className={theme === 'light' ? 'text-slate-800' : 'text-slate-200'}>
                  {tool}
                </span>
                {idx < toolsList.length - 1 && (
                  <span aria-hidden="true" className="text-slate-600">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
