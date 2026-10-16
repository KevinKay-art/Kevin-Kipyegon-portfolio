export interface Project {
  id: string;
  title: string;
  category: 'automation' | 'data' | 'web' | 'research';
  description: string;
  highlight: string;
  tags: string[];
  githubUrl: string;
  impact: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  status: 'In Progress' | 'Completed';
  honours?: string;
  details: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface MonthlyFinancialRecord {
  month: string;
  revenue: number;
  expenses: number;
  budgetExpenses: number;
  variance: number; // budgetExpenses - expenses (positive = favorable, negative = adverse)
  netIncome: number;
  notes: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Kevin Kipyegon",
    tagline: "Accountant. Software Engineer. Data Analyst. AI Builder.",
    subline: "I turn financial data into decisions, using Python, SQL and AI to modernise financial systems across East Africa.",
    logoAvatar: "/static/images/logo_avatar_44.jpg",
    portrait: "/static/images/kevin_portrait.jpg",
    cvPath: "/static/Kevin_Kipyegon_CV.pdf",
    location: "Nairobi, Kenya",
    email: "kevinkipyegon111@gmail.com",
    phoneDisplay: "0740 840 045",
    phoneTel: "+254740840045",
    whatsappNumber: "254740840045",
    whatsappDefaultText: "Hello Kevin, I visited your portfolio and would like to connect.",
    githubUrl: "https://github.com/KevinKay-art",
    linkedinUrl: "https://www.linkedin.com/in/kevin-kipyegon-814439362/",
    status: "Open to full-time roles & consulting projects in East Africa & remote"
  },
  
  about: {
    summary: "Detail-oriented accounting and technology professional with a Bachelor of Commerce (Accounting Option, Second Class Honours Upper Division) from Kabarak University and over 5 years of progressive experience in financial reporting, budgeting, reconciliation, and tax compliance. Currently expanding into software development and data analysis through PLP Africa (2024–present). Pursuing CPA (KASNEB) and FMVA certifications. Bilingual in English and Swahili.",
    pillars: [
      {
        title: "Financial Acumen",
        description: "Deep mastery of IPSAS, IFRS, statutory tax filing (VAT, PAYE, withholding), bank reconciliations, and budgeting controls."
      },
      {
        title: "Python Engineering",
        description: "Building production scripts, automated ETL pipelines, and robust backends that eliminate repetitive ledger entry."
      },
      {
        title: "Data-Driven Insight",
        description: "Transforming messy transactional raw dumps into pristine relational SQL models, interactive dashboards, and variance trends."
      },
      {
        title: "AI Solutions",
        description: "Implementing LLM-guided ledger audits, plain-language reporting commentary, and intelligent discrepancy detection."
      }
    ]
  },

  skills: {
    categories: [
      {
        name: "Accounting & Finance",
        icon: "Calculator",
        description: "Rigorous financial controllership, compliance, and reporting",
        items: [
          "Financial Reporting & Analysis",
          "Budgeting & Forecasting",
          "Tax Preparation & Compliance (VAT, PAYE, withholding tax)",
          "Auditing & Internal Controls",
          "Bank Reconciliation",
          "Accounts Payable & Receivable",
          "Financial Statements",
          "Payroll Processing",
          "IFRS & IPSAS Standards"
        ]
      },
      {
        name: "Programming & Data",
        icon: "Terminal",
        description: "Modern data engineering, scripting, and analytical modeling",
        items: [
          "Python (data scripts, automation, Pandas, NumPy)",
          "SQL (querying, aggregation, relational schema design)",
          "Data cleaning & automated ETL pipelines",
          "AI/LLM integration & prompt engineering",
          "Variance & trend analysis algorithms"
        ]
      },
      {
        name: "Web Development",
        icon: "Globe",
        description: "Full-stack software craft and responsive user interfaces",
        items: [
          "HTML5 & Modern CSS / Tailwind",
          "JavaScript & TypeScript",
          "Responsive front-end interfaces",
          "Flask & RESTful API architecture",
          "Client-side dashboards & interactive charts"
        ]
      },
      {
        name: "Tools & Software",
        icon: "Layers",
        description: "Industry-standard accounting suites and analytics environments",
        items: [
          "QuickBooks",
          "Sage",
          "Tally ERP",
          "Microsoft Excel (Advanced: PivotTables, VLOOKUP/XLOOKUP, Financial Modelling, Dashboards)",
          "Git & GitHub"
        ]
      },
      {
        name: "Languages",
        icon: "Languages",
        description: "Native and professional multilingual communication",
        items: [
          "English (Full professional proficiency)",
          "Swahili (Full professional proficiency, translation, interpretation & document localisation)"
        ]
      }
    ]
  },

  aiAnalytics: {
    intro: "I turn financial and business data into decisions. I clean and analyse data with Python and SQL, then use AI to automate reporting, spot anomalies, and explain results in plain language.",
    workflow: [
      {
        step: 1,
        title: "Collect & Clean",
        tech: "Python (Pandas) & SQL",
        description: "Extract, ingest, clean, and validate multi-source transaction feeds and accounting records to ensure complete ledger integrity."
      },
      {
        step: 2,
        title: "Analyse",
        tech: "Variance Models & Excel",
        description: "Execute trend analysis, budget vs. actual variance calculations, 3-way reconciliation checks, and dimensional pivots."
      },
      {
        step: 3,
        title: "Apply AI",
        tech: "LLM Commentary & Anomaly Detection",
        description: "Deploy targeted AI prompt chains to flag ledger outliers, generate executive commentary in plain language, and answer natural-language queries."
      },
      {
        step: 4,
        title: "Deliver",
        tech: "Chart.js & Actionable Dashboards",
        description: "Present high-clarity visualizations, automated management packs, and concise strategic recommendations for decision-makers."
      }
    ],
    useCases: [
      {
        title: "AI-Assisted Bank Reconciliation & Discrepancy Detection",
        summary: "Automated fuzzy-matching between bank statements and internal ledgers, instantly surfacing timing differences, unpresented cheques, or duplicate transactions."
      },
      {
        title: "Automated Monthly Financial Reports with Written Commentary",
        summary: "Pipeline that compiles balance sheets and income statements while synthesizing a concise board-ready narrative explaining key drivers."
      },
      {
        title: "Expense & Budget Variance Analysis with Plain-Language Explanations",
        summary: "Deconstructs departmental spend against budget ceilings and explains the operational 'why' behind adverse line-item variances."
      },
      {
        title: "SME Financial Performance & Tax Compliance Insights",
        summary: "Real-time indicators tailored for East African SMEs, monitoring VAT thresholds, PAYE liabilities, and cash flow runways."
      },
      {
        title: "Chat-Style Assistant for Uploaded Financial Data",
        summary: "Interactive natural-language interface allowing finance heads to query ledgers directly (e.g., 'What was our Q2 gross margin?')."
      }
    ],
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Excel",
      "Matplotlib/Plotly",
      "Chart.js",
      "LLM APIs",
      "Prompt Engineering"
    ]
  },

  sampleFinancialData: [
    { month: "Jan", revenue: 480000, expenses: 310000, budgetExpenses: 330000, variance: 20000, netIncome: 170000, notes: "Favorable utility spend; timely receivables collection" },
    { month: "Feb", revenue: 520000, expenses: 340000, budgetExpenses: 335000, variance: -5000, netIncome: 180000, notes: "Minor travel expense variance due to regional tax audit visit" },
    { month: "Mar", revenue: 610000, expenses: 360000, budgetExpenses: 350000, variance: -10000, netIncome: 250000, notes: "End of Q1 inventory restocking; strong trading margin" },
    { month: "Apr", revenue: 580000, expenses: 345000, budgetExpenses: 350000, variance: 5000, netIncome: 235000, notes: "Consistent operational spend; VAT returns filed smoothly" },
    { month: "May", revenue: 640000, expenses: 390000, budgetExpenses: 360000, variance: -30000, netIncome: 250000, notes: "Adverse variance: emergency IT equipment upgrade and staff software licenses" },
    { month: "Jun", revenue: 710000, expenses: 410000, budgetExpenses: 420000, variance: 10000, netIncome: 300000, notes: "Mid-year performance peak; favorable operational efficiency" },
    { month: "Jul", revenue: 690000, expenses: 405000, budgetExpenses: 410000, variance: 5000, netIncome: 285000, notes: "Steady cash flow; payroll reconciled with zero discrepancy" },
    { month: "Aug", revenue: 750000, expenses: 510000, budgetExpenses: 430000, variance: -80000, netIncome: 240000, notes: "Significant adverse variance: advance bulk material procurement for Q4 contracts" },
    { month: "Sep", revenue: 780000, expenses: 420000, budgetExpenses: 440000, variance: 20000, netIncome: 360000, notes: "Strong operational rebound; benefits of August procurement realized" },
    { month: "Oct", revenue: 820000, expenses: 445000, budgetExpenses: 450000, variance: 5000, netIncome: 375000, notes: "Record monthly top-line revenue; tight departmental cost governance" }
  ] as MonthlyFinancialRecord[],

  experience: [
    {
      id: "kericho-intern",
      role: "Accountant Intern",
      company: "County Government of Kericho",
      location: "Kericho, Kenya",
      period: "April 2023 – April 2024",
      type: "Full-time Internship",
      achievements: [
        "Prepared and reviewed comprehensive financial statements aligned with IPSAS and Kenyan government public finance accounting standards.",
        "Processed and verified invoices, official receipts, and payment vouchers across multiple county government departments.",
        "Executed end-to-end monthly bank reconciliations, identifying timing differences and reconciling general ledger cash balances.",
        "Assisted in formulating annual budgets and fiscal forecasts by conducting deep comparative analysis of historical expenditure trends.",
        "Supported statutory tax compliance through accurate preparation and submission of VAT, PAYE, and withholding tax returns in line with KRA regulations.",
        "Maintained systematic, audit-ready financial records and documentation that facilitated smooth internal and external audit reviews."
      ]
    },
    {
      id: "kephis-attachment",
      role: "Junior Accountant (Industrial Attachment)",
      company: "KEPHIS (Kenya Plant Health Inspectorate Service)",
      location: "Nairobi, Kenya",
      period: "September 2021 – November 2021",
      type: "Industrial Attachment",
      achievements: [
        "Handled day-to-day financial transactions, including cheque preparation, banking deposits, and multi-currency payment processing.",
        "Conducted routine bank reconciliations between internal cashbooks and commercial bank statements.",
        "Managed physical and electronic accounting records, voucher filing systems, and transaction verification registries."
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      id: "plp-africa",
      title: "Software Development & Engineering",
      institution: "PLP Africa (Power Learn Project)",
      period: "2024 – Present",
      status: "In Progress",
      details: [
        "Rigorous software engineering curriculum covering Python, modern web development, relational database design (SQL), and clean system architecture.",
        "Building practical automation scripts and data-driven web tools tailored to business applications."
      ]
    },
    {
      id: "kabarak-bcom",
      title: "Bachelor of Commerce (B.Com) – Accounting Option",
      institution: "Kabarak University",
      period: "Graduated December 2021",
      status: "Completed",
      honours: "Second Class Honours (Upper Division)",
      details: [
        "Specialized in Financial Accounting, Auditing & Practice Investigations, Cost Accounting, and Public Finance.",
        "Recognised for outstanding academic performance in Financial Accounting and in Auditing & Practice Investigations.",
        "Final year research thesis on the impact of Kenyan tax reforms on SME financial performance."
      ]
    },
    {
      id: "certifications",
      title: "Professional Certifications & Continuous Learning",
      institution: "KASNEB, CFI & Coursera",
      period: "2022 – Present",
      status: "In Progress",
      details: [
        "CPA (Certified Public Accountants) – KASNEB (In Progress)",
        "FMVA® (Financial Modeling & Valuation Analyst) – Corporate Finance Institute (In Progress)",
        "Software Development & Engineering Certificate – PLP Africa (In Progress)",
        "Excel for Accountants – Coursera (Completed, 2022)"
      ]
    }
  ] as EducationItem[],

  projects: [
    {
      id: "financial-reporting-automation",
      title: "Financial Reporting Automation",
      category: "automation",
      description: "Python scripts that automate data extraction, ledger cleaning, and financial report preparation, drastically cutting down manual processing hours and eliminating transposition errors.",
      highlight: "Automated monthly ledger parsing, journal entry reconciliation, and variance alerting.",
      tags: ["Python", "Pandas", "Excel Automation", "Financial Reporting", "ETL"],
      githubUrl: "https://github.com/KevinKay-art",
      impact: "Reduced monthly reporting cycle turnaround by over 60% in tested ledger workflows."
    },
    {
      id: "transaction-sql-analysis",
      title: "Transaction Data Analysis with SQL",
      category: "data",
      description: "Relational database schema design and querying pipeline for high-volume business transaction datasets. Implemented optimized queries for monthly churn, sales reconciliation, and debtor aging.",
      highlight: "Complex multi-table joins, subqueries, and window functions for financial audits.",
      tags: ["SQL", "PostgreSQL", "Database Design", "Audit Trail", "Data Analytics"],
      githubUrl: "https://github.com/KevinKay-art",
      impact: "Accelerated discrepancy identification across 10,000+ line transaction ledgers."
    },
    {
      id: "responsive-web-interfaces",
      title: "Responsive Web Interfaces",
      category: "web",
      description: "Modern, high-performance web front-ends developed through PLP software engineering training, showcasing responsive layouts, clean accessibility, and seamless REST API integrations.",
      highlight: "Single-page responsive layouts, modern JavaScript, and Flask backends.",
      tags: ["HTML5", "CSS3 / Tailwind", "JavaScript", "Flask", "UI/UX"],
      githubUrl: "https://github.com/KevinKay-art",
      impact: "Full cross-device compatibility with sub-second page loads."
    },
    {
      id: "tax-reforms-sme-research",
      title: "Research: Tax Reforms & SME Financial Performance",
      category: "research",
      description: "Final-year academic and empirical study examining how recent Kenyan tax reforms (VAT adjustments, turnover tax, and digital service taxes) affect SME performance and statutory compliance.",
      highlight: "Grounded in case studies and structured surveys across Kenyan businesses.",
      tags: ["Tax Research", "KRA Compliance", "SME Economics", "Policy Analysis", "Kabarak University"],
      githubUrl: "https://github.com/KevinKay-art",
      impact: "Policy recommendations were officially recognized and adopted into the final academic report."
    }
  ] as Project[],

  services: [
    {
      id: "serv-reporting",
      title: "Financial Reporting & Reconciliation Support",
      description: "Preparation of audit-ready balance sheets, profit & loss statements, cash flow statements, and multi-account bank reconciliations adhering to IFRS and IPSAS standards.",
      deliverables: ["Monthly management packs", "Bank reconciliation statements", "Audit preparation files", "Variance reports"],
      icon: "FileSpreadsheet"
    },
    {
      id: "serv-dashboards",
      title: "Data Analysis & Excel Dashboards",
      description: "Transforming complex raw business records into intuitive, automated Excel models with dynamic PivotTables, XLOOKUP models, KPI scorecards, and visual trends.",
      deliverables: ["Dynamic cash flow models", "Debtor aging dashboards", "Custom KPI trackers", "Automated templates"],
      icon: "BarChart3"
    },
    {
      id: "serv-python",
      title: "Python Automation for Finance Workflows",
      description: "Bespoke Python scripts that automate data ingestion, invoice verification, batch PDF report compilation, and multi-bank ledger formatting.",
      deliverables: ["Automated reconciliation scripts", "Scheduled ETL routines", "CSV & ledger parsers", "Error-flagging tools"],
      icon: "Terminal"
    },
    {
      id: "serv-ai",
      title: "AI-Assisted Reporting & Insights",
      description: "Implementation of tailored LLM workflows to parse financial statements, highlight variance anomalies, and generate plain-language management commentary.",
      deliverables: ["Automated narrative summaries", "Discrepancy detection rules", "Natural language ledger queries", "Executive briefs"],
      icon: "Cpu"
    },
    {
      id: "serv-web",
      title: "Web Development & Digital Systems",
      description: "Clean, responsive, mobile-first web applications and dashboards built with modern HTML5, CSS/Tailwind, JavaScript, and Flask backends.",
      deliverables: ["Responsive landing pages", "Data entry web forms", "Internal business portals", "API integrations"],
      icon: "Code2"
    },
    {
      id: "serv-translation",
      title: "English–Swahili Translation & Localisation",
      description: "Professional translation, interpretation, and document localisation between English and Swahili for financial, corporate, and statutory publications.",
      deliverables: ["Financial document translation", "Localized compliance guides", "Corporate communications", "Software localization"],
      icon: "Languages"
    }
  ] as ServiceItem[],

  leadership: [
    {
      role: "Treasurer",
      organization: "Kabarak University Accounting Club",
      period: "2020 – 2021",
      description: "Managed club treasury funds, developed annual event budgets, tracked expenditure against allocations, and presented audited financial statements to members and faculty advisors."
    },
    {
      role: "Volunteer Organizer",
      organization: "Kabarak University Career Fair",
      period: "2019",
      description: "Coordinated professional development workshops, facilitated employer-student networking, and assisted in logistical management for hundreds of visiting corporate representatives."
    }
  ]
};
