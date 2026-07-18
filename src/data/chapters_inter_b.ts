import type { Chapter } from './curriculum'

export const INTER_B_CHAPTERS: Chapter[] = [
  {
    id: 80,
    paperId: 9,
    level: 'intermediate',
    section: 'Introduction to Operations Management',
    title: 'Introduction to Operations Management',
    duration: '45 min',
    xpAvailable: 35,
    keyPoints: [
      'Operations Management transforms inputs (men, machines, materials, money, method) into finished goods and services.',
      'Distinguish manufacturing (tangible output) vs service operations (intangible, inseparable, perishable).',
      'Key decision areas: process design, capacity, layout, quality, inventory and supply chain.',
      'Productivity = Output / Input; total productivity and partial productivity are core measures.',
      'Operations strategy aligns with business strategy via cost leadership, differentiation and focus.',
      'Historical evolution: craft → mass production → lean → agile operations.',
      'Role of Operations Manager: planning, organising, directing and controlling production systems.'
    ]
  },
  {
    id: 81,
    paperId: 9,
    level: 'intermediate',
    section: 'Production Planning & Control',
    title: 'Production Planning & Control',
    duration: '50 min',
    xpAvailable: 35,
    keyPoints: [
      'PPC objectives: right quality, quantity, time and cost through routing, scheduling, dispatching and follow-up.',
      'Routing fixes the path of production; scheduling fixes the time; dispatching releases work orders.',
      'Master Production Schedule (MPS) and Material Requirements Planning (MRP) drive shop-floor control.',
      'Techniques: Gantt chart, line balancing, work study (method + time study), EOQ-based batch sizing.',
      'JIT and lean production reduce waste (muda) and aim for zero inventory and zero defects.',
      'Control tools: production budget, capacity loading and feedback through follow-up.',
      'Forecasting demand precedes aggregate planning and capacity decisions.'
    ]
  },
  {
    id: 82,
    paperId: 9,
    level: 'intermediate',
    section: 'Productivity, Capacity & Facility Layout',
    title: 'Productivity, Capacity & Facility Layout',
    duration: '50 min',
    xpAvailable: 35,
    keyPoints: [
      'Capacity = maximum output an operating unit can produce in a given period; design vs effective capacity.',
      'Capacity utilisation = (Actual output / Effective capacity) × 100.',
      'Facility layout types: process (functional), product (line), fixed-position, cellular and hybrid.',
      'Productivity improvement via method study, automation, TQM and worker involvement.',
      'Break-even analysis aids make-or-buy and capacity expansion decisions.',
      'Plant location factors: proximity to market, raw material, transport, labour and power.',
      'Line balancing: minimise idle time; cycle time = available time / required units.'
    ]
  },
  {
    id: 83,
    paperId: 9,
    level: 'intermediate',
    section: 'Inventory & Supply Chain Management',
    title: 'Inventory & Supply Chain Management',
    duration: '55 min',
    xpAvailable: 35,
    keyPoints: [
      'EOQ = √(2 × D × Co / Ch) where D = demand, Co = ordering cost, Ch = holding cost per unit.',
      'Reorder level = Max consumption × Max lead time; safety stock cushions uncertainty.',
      'ABC analysis (Always Better Control) classifies items by annual consumption value (A high, C low).',
      'Supply Chain Management integrates suppliers, manufacturers, warehouses and customers.',
      'Inventory carrying costs include storage, insurance, obsolescence and capital cost.',
      'VED/JIT/VMI are supplementary inventory control techniques.',
      'Logistics and distribution network design reduce total cost-to-serve.'
    ]
  },
  {
    id: 84,
    paperId: 9,
    level: 'intermediate',
    section: 'Quality Management & TQM',
    title: 'Quality Management & TQM',
    duration: '50 min',
    xpAvailable: 35,
    keyPoints: [
      'Quality dimensions: performance, features, reliability, conformance, durability, serviceability.',
      'TQM = organisation-wide continuous improvement with customer focus and employee involvement.',
      'Cost of Quality = Prevention + Appraisal + Internal failure + External failure costs.',
      '七大 QC tools: check sheet, histogram, Pareto, cause-and-effect, scatter, control chart, flow chart.',
      'Six Sigma targets 3.4 defects per million opportunities; DMAIC framework.',
      'ISO 9000 family sets quality management system standards; certification builds confidence.',
      'Statistical Process Control uses control limits (mean ± 3σ) to monitor process stability.'
    ]
  },
  {
    id: 85,
    paperId: 9,
    level: 'intermediate',
    section: 'Introduction to Strategic Management',
    title: 'Introduction to Strategic Management',
    duration: '45 min',
    xpAvailable: 35,
    keyPoints: [
      'Strategy = long-term direction and scope to achieve advantage through resource configuration.',
      'Three levels: corporate, business (competitive) and functional strategies.',
      'Strategic management process: formulation → implementation → evaluation.',
      'Mission (purpose), vision (aspiration) and objectives guide strategy.',
      'Distinguish strategy (plan) vs tactics (execution) vs policy (guideline).',
      'Competitive advantage from cost leadership, differentiation or focus (Porter).',
      'Stakeholder analysis balances interests of shareholders, employees, customers and society.'
    ]
  },
  {
    id: 86,
    paperId: 9,
    level: 'intermediate',
    section: 'Strategic Analysis (SWOT, PESTEL, Porter)',
    title: 'Strategic Analysis (SWOT, PESTEL, Porter)',
    duration: '55 min',
    xpAvailable: 35,
    keyPoints: [
      'SWOT: internal Strengths/Weaknesses and external Opportunities/Threats.',
      'PESTEL: Political, Economic, Social, Technological, Environmental, Legal macro factors.',
      'Porter’s Five Forces: rivalry, threat of new entrants, substitutes, buyer & supplier power.',
      'Industry structure determines profitability (Porter’s diamond).',
      'Value chain analysis (primary + support activities) identifies margin sources.',
      'Competitor analysis: objectives, assumptions, strategy and capabilities.',
      'Gap analysis compares current position with desired strategic position.'
    ]
  },
  {
    id: 87,
    paperId: 9,
    level: 'intermediate',
    section: 'Strategy Formulation & Implementation',
    title: 'Strategy Formulation & Implementation',
    duration: '50 min',
    xpAvailable: 35,
    keyPoints: [
      'Generic strategies: cost leadership, differentiation, focus (Porter).',
      'Ansoff matrix: market penetration, market development, product development, diversification.',
      'BCG matrix: Stars, Cash Cows, Question Marks, Dogs by market growth & share.',
      'Grand strategies: stability, expansion, retrenchment, combination.',
      'Implementation levers: structure, culture, leadership, resource allocation, systems.',
      'Balanced Scorecard tracks financial, customer, internal-process and learning perspectives.',
      'Strategy evaluation uses KPIs, variance analysis and corrective action.'
    ]
  },
  {
    id: 88,
    paperId: 11,
    level: 'intermediate',
    section: 'Introduction to Financial Management',
    title: 'Introduction to Financial Management',
    duration: '45 min',
    xpAvailable: 35,
    keyPoints: [
      'Financial Management maximises shareholder wealth (market value of equity).',
      'Finance functions: investment, financing and dividend decisions.',
      'Goal conflict: profit maximisation vs wealth maximisation (time, risk, liquidity aware).',
      'Time value of money underpins all investment and financing appraisal.',
      'Role of CFO: treasury, capital budgeting, risk management and reporting.',
      'Agency problem: separation of ownership and management; mitigated by governance.',
      'Financial markets (money & capital) channel savings to productive investment.'
    ]
  },
  {
    id: 89,
    paperId: 11,
    level: 'intermediate',
    section: 'Time Value of Money',
    title: 'Time Value of Money',
    duration: '55 min',
    xpAvailable: 35,
    keyPoints: [
      'FV = PV × (1 + r)^n ; PV = FV / (1 + r)^n for single sums.',
      'FV of annuity = A × [((1 + r)^n − 1) / r]; PV of annuity = A × [1 − (1 + r)^−n] / r.',
      'Effective annual rate (EAR) = (1 + i/m)^m − 1 where m = compounding frequency.',
      'Perpetuity PV = A / r ; growing perpetuity PV = A / (r − g).',
      'Sinking fund and loan amortisation use annuity factors.',
      'Rule of 72: doubling time ≈ 72 / (interest %).',
      'Nominal vs real rates: (1 + real)(1 + inflation) = (1 + nominal).'
    ]
  },
  {
    id: 90,
    paperId: 11,
    level: 'intermediate',
    section: 'Cost of Capital',
    title: 'Cost of Capital',
    duration: '55 min',
    xpAvailable: 35,
    keyPoints: [
      'Cost of equity (Ke): Dividend Growth Model Ke = D1/P0 + g; CAPM Ke = Rf + β(Rm − Rf).',
      'Cost of debt (Kd) = Interest(1 − t) / Net proceeds; after-tax cost = Kd(1 − t).',
      'Cost of preference = Dp / Pp.',
      'WACC = (We × Ke) + (Wd × Kd(1 − t)) + (Wp × Kp) where W = weights by market value.',
      'Weights may be book-value, market-value or target-value based.',
      'Marginal cost of capital rises with additional financing beyond optimal capital mix.',
      'WACC is the discount rate for project appraisal when risk matches the firm.'
    ]
  },
  {
    id: 91,
    paperId: 11,
    level: 'intermediate',
    section: 'Capital Structure & Leverage',
    title: 'Capital Structure & Leverage',
    duration: '55 min',
    xpAvailable: 35,
    keyPoints: [
      'Capital structure = mix of debt and equity; optimal minimises WACC and maximises value.',
      'DOL = Contribution / EBIT = (% change in EBIT)/(% change in sales).',
      'DFL = EBIT / EBT = (% change in EPS)/(% change in EBIT).',
      'DCL = DOL × DFL = (% change in EPS)/(% change in sales).',
      'EBIT-EPS (Indifference) point: EBIT where EPS is equal under two financing plans.',
      'Trade-off theory: tax shield of debt vs financial distress cost.',
      'Pecking order theory: internal funds > debt > equity.'
    ]
  },
  {
    id: 92,
    paperId: 11,
    level: 'intermediate',
    section: 'Capital Budgeting (NPV, IRR, Payback)',
    title: 'Capital Budgeting (NPV, IRR, Payback)',
    duration: '60 min',
    xpAvailable: 35,
    keyPoints: [
      'NPV = Σ [CFt / (1 + r)^t] − Initial outlay; accept if NPV > 0.',
      'IRR = discount rate where NPV = 0; accept if IRR > cost of capital.',
      'NPV vs IRR conflict under non-conventional cash flows or mutually exclusive projects of differing scale.',
      'Payback period = time to recover initial investment; ignores time value beyond cut-off.',
      'Discounted Payback uses present values of cash inflows.',
      'Profitability Index = PV of inflows / Initial outlay; accept if PI > 1.',
      'Example: project costing ₹10,00,000 with ₹3,00,000 p.a. for 5 yrs at 10% has NPV ≈ ₹1,37,240.'
    ]
  },
  {
    id: 93,
    paperId: 11,
    level: 'intermediate',
    section: 'Working Capital Management',
    title: 'Working Capital Management',
    duration: '55 min',
    xpAvailable: 35,
    keyPoints: [
      'Gross WC = current assets; Net WC = current assets − current liabilities.',
      'Operating cycle = Inventory period + Receivables period − Payables period.',
      'Cash conversion cycle (CCC) = RTO + ITO − PTO (days).',
      'Inventory turnover = COGS / Average inventory; DPO = 365 / turnover.',
      'Receivables turnover = Credit sales / Avg debtors; DSO tracks collection efficiency.',
      'Cash budget forecasts short-term surplus/deficit for treasury planning.',
      'Trade-off: too little WC risks liquidity; too much WC lowers ROI.'
    ]
  },
  {
    id: 94,
    paperId: 11,
    level: 'intermediate',
    section: 'Sources of Finance',
    title: 'Sources of Finance',
    duration: '50 min',
    xpAvailable: 35,
    keyPoints: [
      'Equity: equity shares, preference shares, retained earnings, venture capital.',
      'Debt: debentures, term loans, working capital finance, public deposits.',
      'Hybrid: convertible debentures, warrants, convertible preference.',
      'Short-term vs long-term; internal vs external; owned vs borrowed capital.',
      'Leasing and hire-purchase are off-balance-sheet/asset-based finance.',
      'Cost and risk differ: equity cheapest in tax? No—debt cheaper (tax-deductible) but riskier.',
      'Weighted cost and maturity matching (hedge) principle guide financing choice.'
    ]
  },
  {
    id: 95,
    paperId: 11,
    level: 'intermediate',
    section: 'Introduction to Business Data Analytics',
    title: 'Introduction to Business Data Analytics',
    duration: '45 min',
    xpAvailable: 35,
    keyPoints: [
      'Data analytics = examining data to draw conclusions and support decisions.',
      'Types: descriptive, diagnostic, predictive and prescriptive analytics.',
      'Data lifecycle: collection, cleaning, integration, analysis, visualisation, decision.',
      'Structured (tables) vs unstructured (text, images) data; big data = 5V (volume, velocity, variety, veracity, value).',
      'Role of analytics in finance: forecasting, risk, fraud detection, customer insight.',
      'Data quality dimensions: accuracy, completeness, consistency, timeliness, validity.',
      'Tools: Excel, Power BI, Tableau, Python/R for statistical analysis.'
    ]
  },
  {
    id: 96,
    paperId: 11,
    level: 'intermediate',
    section: 'Data Visualisation & Analytics Tools',
    title: 'Data Visualisation & Analytics Tools',
    duration: '50 min',
    xpAvailable: 35,
    keyPoints: [
      'Visualisation turns data into dashboards: bar, line, pie, scatter, heatmap, histogram.',
      'KPI dashboards monitor financial and operational performance in real time.',
      'Power BI / Tableau connect to multiple sources and enable DAX/calc fields.',
      'Excel: PivotTables, charts, What-If (Goal Seek, Solver), data tables.',
      'Correlation coefficient r ∈ [−1, 1]; regression Y = a + bX for forecasting.',
      'Moving averages and trend lines smooth time-series for prediction.',
      'Storytelling with data: clarity, context, honest scaling and actionable insight.'
    ]
  },
  {
    id: 97,
    paperId: 12,
    level: 'intermediate',
    section: 'Introduction to Management Accounting',
    title: 'Introduction to Management Accounting',
    duration: '45 min',
    xpAvailable: 35,
    keyPoints: [
      'Management accounting supplies information for planning, control and decision-making.',
      'Distinct from financial accounting: internal users, no strict format, forward-looking.',
      'Functions: forecasting, budgeting, cost ascertainment, performance appraisal.',
      'Role of Management Accountant: adviser, planner, controller, information provider.',
      'Difference between cost accounting (costing) and management accounting (decisions).',
      'Cost concepts: fixed, variable, semi-variable; direct vs indirect; controllable vs uncontrollable.',
      'Responsibility centres: cost, revenue, profit and investment centres.'
    ]
  },
  {
    id: 98,
    paperId: 12,
    level: 'intermediate',
    section: 'Activity Based Costing (ABC)',
    title: 'Activity Based Costing (ABC)',
    duration: '55 min',
    xpAvailable: 35,
    keyPoints: [
      'ABC traces overhead via cost pools → cost drivers → activities → products.',
      'Cost driver rate = Pool cost / Cost driver volume; product cost = Σ (rate × usage).',
      'Two-stage allocation: resource → activity; activity → cost object.',
      'ABC improves product/segment profitability vs traditional volume-based absorption.',
      'Limitations: costly to implement, subjective driver choice, behavioural resistance.',
      'Activity analysis: value-added vs non-value-added activities (waste reduction).',
      'Useful for low-volume complex products often under-costed by traditional systems.'
    ]
  },
  {
    id: 99,
    paperId: 12,
    level: 'intermediate',
    section: 'Marginal Costing & Decision Making',
    title: 'Marginal Costing & Decision Making',
    duration: '55 min',
    xpAvailable: 35,
    keyPoints: [
      'Marginal cost = variable cost of one extra unit; contribution = Sales − Variable cost.',
      'P/V ratio = Contribution / Sales; Break-even sales = Fixed cost / P/V ratio.',
      'BEP (units) = Fixed cost / (Selling price − Variable cost per unit).',
      'Margin of safety = Actual sales − BEP sales; MOS% = MOS / Actual sales.',
      'Profit-volume graph shows profit line slope = P/V ratio.',
      'Decision uses: make-or-buy, pricing, product mix, shutdown, key factor.',
      'Example: at ₹100 price, ₹60 VC, ₹40,000 FC → BEP = 1,000 units.'
    ]
  },
  {
    id: 100,
    paperId: 12,
    level: 'intermediate',
    section: 'Standard Costing & Variance Analysis',
    title: 'Standard Costing & Variance Analysis',
    duration: '60 min',
    xpAvailable: 35,
    keyPoints: [
      'Standard cost = predetermined realistic cost per unit; variance = Actual − Standard.',
      'Material cost variance = (SP × SQ) − (AP × AQ); split into price & usage variances.',
      'Labour cost variance = (SR × SH) − (AR × AH); split into rate & efficiency variances.',
      'Variable overhead variance: expenditure & efficiency; Fixed OH: budget & volume.',
      'Sales variance: price variance + volume variance (further mix & quantity).',
      'Favourable (F) reduces cost / increases profit; Adverse (A) the reverse.',
      'Investigate variances using materiality and control-chart (significant) thresholds.'
    ]
  },
  {
    id: 101,
    paperId: 12,
    level: 'intermediate',
    section: 'Budgeting & Budgetary Control',
    title: 'Budgeting & Budgetary Control',
    duration: '55 min',
    xpAvailable: 35,
    keyPoints: [
      'Budget = quantitative plan expressed in money/units for a period.',
      'Types: master, functional (sales, production, cash), flexible, zero-based, rolling.',
      'Flexible budget adjusts for actual activity; variance = actual vs flexible standard.',
      'Budgetary control: setting, comparing actual vs budget, corrective action.',
      'Cash budget forecasts receipts/payments to reveal surplus or deficit (₹ terms).',
      'Zero-based budgeting justifies every item from zero each period.',
      'Beyond Budgeting and Kaizen budgeting are modern adaptive approaches.'
    ]
  },
  {
    id: 102,
    paperId: 12,
    level: 'intermediate',
    section: 'Divisional Performance Measurement',
    title: 'Divisional Performance Measurement',
    duration: '55 min',
    xpAvailable: 35,
    keyPoints: [
      'ROI = Controllable profit / Divisional investment (or capital employed).',
      'Residual Income (RI) = Controllable profit − (Capital × Imputed interest rate).',
      'RI overcomes ROI’s rejection of value-adding projects; both in ₹ / %.',
      'Economic Value Added (EVA) = NOPAT − (Capital × WACC).',
      'Transfer pricing methods: market, cost-based, negotiated, dual.',
      'Divisional conflicts arise from sub-optimal transfer prices vs firm goals.',
      'Non-financial measures (balanced scorecard) complement financial metrics.'
    ]
  },
  {
    id: 103,
    paperId: 12,
    level: 'intermediate',
    section: 'Responsibility Accounting',
    title: 'Responsibility Accounting',
    duration: '45 min',
    xpAvailable: 35,
    keyPoints: [
      'Responsibility accounting assigns costs/revenues to accountable managers.',
      'Centres: cost (only cost), revenue (sales), profit (rev−cost), investment (assets employed).',
      'Controllable vs non-controllable costs determine manager evaluation fairness.',
      'Reports compare actual vs budget per responsibility centre.',
      'Supports decentralisation and delegation with accountability.',
      'Performance appraisal uses controllable variances only.',
      'Aligns individual incentives with organisational objectives.'
    ]
  },
  {
    id: 104,
    paperId: 12,
    level: 'intermediate',
    section: 'Decision Theory & Relevant Costing',
    title: 'Decision Theory & Relevant Costing',
    duration: '55 min',
    xpAvailable: 35,
    keyPoints: [
      'Relevant costs: future, incremental (avoidable), differ between alternatives.',
      'Sunk costs and committed costs are NOT relevant to decisions.',
      'Opportunity cost = benefit forgone by choosing next-best alternative.',
      'Make-or-buy: compare incremental cost vs outside price including idle-facility impact.',
      'Key factor (limiting factor) maximises contribution per unit of scarce resource.',
      'Decision under risk: expected value = Σ (probability × outcome).',
      'Decision tree maps sequential choices with probabilities and payoffs (₹).'
    ]
  }
]
