import type { Question } from './questions'

// CMA Final — chapter quiz bank (app-authored, syllabus-2022 accurate).
// 6 conceptual MCQs per Final chapter (ids 201-216).

export const FINAL_QUESTIONS: Question[] = [
  // ===== 201 · Companies Act — Management, Directors & Meetings =====
  { id: 'qf201-1', chapterId: 201, question: 'The minimum number of directors required for a public company is:', options: ['1', '2', '3', '5'], correctIndex: 2 },
  { id: 'qf201-2', chapterId: 201, question: 'Under Sec 149(3), every company must have at least one director who stayed in India for:', options: ['60 days', '90 days', '120 days', '182 days'], correctIndex: 3 },
  { id: 'qf201-3', chapterId: 201, question: 'Which of these is NOT Key Managerial Personnel under Sec 203?', options: ['Managing Director', 'Company Secretary', 'Chief Financial Officer', 'Internal Auditor'], correctIndex: 3 },
  { id: 'qf201-4', chapterId: 201, question: 'The maximum gap allowed between two consecutive Board meetings is:', options: ['90 days', '120 days', '150 days', '180 days'], correctIndex: 1 },
  { id: 'qf201-5', chapterId: 201, question: 'A special resolution requires a majority of at least:', options: ['Simple majority', 'Two-thirds', 'Three-fourths', 'Unanimous'], correctIndex: 2 },
  { id: 'qf201-6', chapterId: 201, question: 'An independent director can hold office for up to:', options: ['One term of 3 years', 'Two consecutive terms of 5 years each', 'Unlimited terms', 'One term of 10 years'], correctIndex: 1 },

  // ===== 202 · IBC, SEBI, Competition, FEMA =====
  { id: 'qf202-1', chapterId: 202, question: 'The Corporate Insolvency Resolution Process must ordinarily be completed within:', options: ['90 days', '180 days', '270 days', '330 days including litigation'], correctIndex: 3 },
  { id: 'qf202-2', chapterId: 202, question: 'A resolution plan is approved by the Committee of Creditors with a voting share of:', options: ['51%', '66%', '75%', '90%'], correctIndex: 1 },
  { id: 'qf202-3', chapterId: 202, question: 'Abuse of dominant position is prohibited under which section of the Competition Act, 2002?', options: ['Section 3', 'Section 4', 'Section 5', 'Section 6'], correctIndex: 1 },
  { id: 'qf202-4', chapterId: 202, question: 'Under FEMA 1999, capital-account transactions are:', options: ['Completely free', 'Regulated by the RBI', 'Prohibited entirely', 'Governed by SEBI'], correctIndex: 1 },
  { id: 'qf202-5', chapterId: 202, question: 'The regulations governing listed-company disclosures are called:', options: ['LODR Regulations', 'AS Rules', 'CARO', 'Ind AS'], correctIndex: 0 },
  { id: 'qf202-6', chapterId: 202, question: 'CIRP under Section 7 of the IBC can be initiated by a:', options: ['Financial creditor', 'Shareholder', 'Employee union', 'Government auditor'], correctIndex: 0 },

  // ===== 203 · Capital Budgeting under Risk & Portfolio =====
  { id: 'qf203-1', chapterId: 203, question: 'Under the CAPM, the required return equals:', options: ['Rf + β(Rm − Rf)', 'Rm − Rf', 'β × Rm', 'Rf × β'], correctIndex: 0 },
  { id: 'qf203-2', chapterId: 203, question: 'Diversification in a portfolio reduces:', options: ['Systematic risk', 'Unsystematic (specific) risk', 'Market risk', 'Interest-rate risk'], correctIndex: 1 },
  { id: 'qf203-3', chapterId: 203, question: 'Beta is a measure of:', options: ['Total risk', 'Systematic risk relative to the market', 'Liquidity risk', 'Default risk'], correctIndex: 1 },
  { id: 'qf203-4', chapterId: 203, question: 'The internal rate of return is the discount rate at which:', options: ['NPV is maximum', 'NPV equals zero', 'Payback is shortest', 'Profit is highest'], correctIndex: 1 },
  { id: 'qf203-5', chapterId: 203, question: 'The certainty-equivalent approach discounts adjusted cash flows at the:', options: ['Risk-adjusted rate', 'Cost of equity', 'Risk-free rate', 'WACC + risk premium'], correctIndex: 2 },
  { id: 'qf203-6', chapterId: 203, question: 'The Sharpe ratio measures excess return per unit of:', options: ['Beta', 'Total risk (standard deviation)', 'Market return', 'Fixed cost'], correctIndex: 1 },

  // ===== 204 · Derivatives, Valuation & Restructuring =====
  { id: 'qf204-1', chapterId: 204, question: 'A call option gives the holder the right to:', options: ['Sell at strike price', 'Buy at strike price', 'Borrow at a fixed rate', 'Receive a dividend'], correctIndex: 1 },
  { id: 'qf204-2', chapterId: 204, question: 'Option value is made up of:', options: ['Intrinsic value + time value', 'Strike price − premium', 'Only intrinsic value', 'Only time value'], correctIndex: 0 },
  { id: 'qf204-3', chapterId: 204, question: 'In a DCF valuation, free cash flows are discounted at the:', options: ['Risk-free rate', 'WACC', 'Coupon rate', 'Inflation rate'], correctIndex: 1 },
  { id: 'qf204-4', chapterId: 204, question: 'EV/EBITDA is an example of a:', options: ['Asset-based measure', 'Market-based (relative) multiple', 'Discount rate', 'Cost driver'], correctIndex: 1 },
  { id: 'qf204-5', chapterId: 204, question: 'The swap (exchange) ratio in a merger is commonly based on relative:', options: ['EPS or market price', 'Fixed assets only', 'Number of employees', 'Tax rates'], correctIndex: 0 },
  { id: 'qf204-6', chapterId: 204, question: 'Put-call parity is expressed as:', options: ['C + PV(K) = P + S', 'C − P = K', 'P = C × S', 'C = P − S'], correctIndex: 0 },

  // ===== 205 · Total Income & Assessment of Entities =====
  { id: 'qf205-1', chapterId: 205, question: 'How many heads of income are there under the Income-tax Act?', options: ['Three', 'Four', 'Five', 'Six'], correctIndex: 2 },
  { id: 'qf205-2', chapterId: 205, question: 'The concessional corporate tax rate under Section 115BAA is:', options: ['15%', '22%', '25%', '30%'], correctIndex: 1 },
  { id: 'qf205-3', chapterId: 205, question: 'Minimum Alternate Tax (MAT) under Sec 115JB is levied at:', options: ['10% of book profit', '15% of book profit', '18.5% of book profit', '20% of book profit'], correctIndex: 1 },
  { id: 'qf205-4', chapterId: 205, question: 'GAAR is invoked against arrangements lacking:', options: ['Commercial substance', 'A written contract', 'Foreign investors', 'Audited accounts'], correctIndex: 0 },
  { id: 'qf205-5', chapterId: 205, question: 'Section 115BAB provides a 15% rate for:', options: ['All companies', 'New domestic manufacturing companies', 'Foreign companies', 'Partnership firms'], correctIndex: 1 },
  { id: 'qf205-6', chapterId: 205, question: 'MAT credit can be carried forward for a maximum of:', options: ['5 years', '8 years', '10 years', '15 years'], correctIndex: 3 },

  // ===== 206 · International Taxation & Transfer Pricing =====
  { id: 'qf206-1', chapterId: 206, question: 'A resident assessee is taxed in India on:', options: ['Only Indian income', 'Global (world) income', 'Only foreign income', 'Only capital gains'], correctIndex: 1 },
  { id: 'qf206-2', chapterId: 206, question: 'Transfer pricing requires transactions between associated enterprises to be at:', options: ['Cost price', 'Arm’s length price', 'Market price plus tax', 'Book value'], correctIndex: 1 },
  { id: 'qf206-3', chapterId: 206, question: 'Which is NOT a prescribed transfer-pricing method?', options: ['Comparable Uncontrolled Price', 'Resale Price Method', 'Transactional Net Margin Method', 'Weighted Average Method'], correctIndex: 3 },
  { id: 'qf206-4', chapterId: 206, question: 'A DTAA relieves double taxation mainly by the exemption method or the:', options: ['Credit method', 'Refund method', 'Deduction-only method', 'Waiver method'], correctIndex: 0 },
  { id: 'qf206-5', chapterId: 206, question: 'A Permanent Establishment creates a taxable presence in the:', options: ['Residence country only', 'Source country', 'Both equally always', 'Neither country'], correctIndex: 1 },
  { id: 'qf206-6', chapterId: 206, question: 'BEPS action plans are implemented across treaties through the:', options: ['Multilateral Instrument (MLI)', 'GATT', 'WTO Charter', 'IMF Accord'], correctIndex: 0 },

  // ===== 207 · Strategic Cost Tools =====
  { id: 'qf207-1', chapterId: 207, question: 'Target cost is computed as:', options: ['Cost + desired margin', 'Selling price − desired margin', 'Selling price + margin', 'Cost − actual margin'], correctIndex: 1 },
  { id: 'qf207-2', chapterId: 207, question: 'Kaizen costing focuses on cost reduction during the:', options: ['Design stage', 'Manufacturing stage', 'Disposal stage', 'R&D stage'], correctIndex: 1 },
  { id: 'qf207-3', chapterId: 207, question: 'Life-cycle costing recognises that most cost is committed at the:', options: ['Design stage', 'Selling stage', 'Delivery stage', 'Warranty stage'], correctIndex: 0 },
  { id: 'qf207-4', chapterId: 207, question: 'Throughput contribution equals:', options: ['Sales − material cost', 'Sales − all costs', 'Sales − labour cost', 'Sales − fixed cost'], correctIndex: 0 },
  { id: 'qf207-5', chapterId: 207, question: 'Value in value engineering is defined as:', options: ['Cost ÷ function', 'Function ÷ cost', 'Price × function', 'Cost × function'], correctIndex: 1 },
  { id: 'qf207-6', chapterId: 207, question: 'The Theory of Constraints concentrates management attention on the:', options: ['Bottleneck resource', 'Cheapest resource', 'Largest department', 'Newest machine'], correctIndex: 0 },

  // ===== 208 · ABC, Relevant Costing & Variances =====
  { id: 'qf208-1', chapterId: 208, question: 'Activity Based Costing assigns overheads using:', options: ['A single plant-wide rate', 'Cost pools and cost drivers', 'Direct labour only', 'Sales value'], correctIndex: 1 },
  { id: 'qf208-2', chapterId: 208, question: 'Which cost is irrelevant for a decision?', options: ['Incremental cost', 'Opportunity cost', 'Sunk cost', 'Avoidable cost'], correctIndex: 2 },
  { id: 'qf208-3', chapterId: 208, question: 'Break-even point in units equals fixed cost divided by:', options: ['Selling price', 'Contribution per unit', 'Variable cost per unit', 'Total cost'], correctIndex: 1 },
  { id: 'qf208-4', chapterId: 208, question: 'Material usage variance arises from a difference in:', options: ['Price paid', 'Quantity used', 'Labour hours', 'Overhead rate'], correctIndex: 1 },
  { id: 'qf208-5', chapterId: 208, question: 'The learning curve shows that average time per unit falls as:', options: ['Cumulative output doubles', 'Fixed cost rises', 'Prices increase', 'Workers are added'], correctIndex: 0 },
  { id: 'qf208-6', chapterId: 208, question: 'Margin of safety is:', options: ['Break-even − actual sales', 'Actual sales − break-even sales', 'Fixed cost ÷ contribution', 'Sales − variable cost'], correctIndex: 1 },

  // ===== 209 · Cost Records & Cost Audit =====
  { id: 'qf209-1', chapterId: 209, question: 'Cost audit is governed by which section of the Companies Act, 2013?', options: ['Section 138', 'Section 143', 'Section 148', 'Section 177'], correctIndex: 2 },
  { id: 'qf209-2', chapterId: 209, question: 'The cost audit report is submitted by the cost auditor in Form:', options: ['CRA-1', 'CRA-2', 'CRA-3', 'CRA-4'], correctIndex: 2 },
  { id: 'qf209-3', chapterId: 209, question: 'Cost records are maintained in Form:', options: ['CRA-1', 'CRA-2', 'CRA-3', 'CRA-4'], correctIndex: 0 },
  { id: 'qf209-4', chapterId: 209, question: 'A cost auditor must be a:', options: ['Chartered Accountant', 'Practising Cost Accountant (CMA)', 'Company Secretary', 'Advocate'], correctIndex: 1 },
  { id: 'qf209-5', chapterId: 209, question: 'The company files the cost audit report with the MCA in Form:', options: ['CRA-1', 'CRA-2', 'CRA-3', 'CRA-4'], correctIndex: 3 },
  { id: 'qf209-6', chapterId: 209, question: 'Cost Accounting Standards are issued by:', options: ['ICAI', 'ICMAI', 'SEBI', 'MCA'], correctIndex: 1 },

  // ===== 210 · Management & Internal Audit =====
  { id: 'qf210-1', chapterId: 210, question: 'Internal audit is required under which section of the Companies Act, 2013?', options: ['Section 138', 'Section 148', 'Section 149', 'Section 203'], correctIndex: 0 },
  { id: 'qf210-2', chapterId: 210, question: 'Management audit is primarily:', options: ['Historical and financial', 'Forward-looking appraisal of management effectiveness', 'A statutory tax audit', 'A stock count'], correctIndex: 1 },
  { id: 'qf210-3', chapterId: 210, question: 'Which is NOT a component of internal control under COSO?', options: ['Control environment', 'Risk assessment', 'Monitoring', 'Profit maximisation'], correctIndex: 3 },
  { id: 'qf210-4', chapterId: 210, question: 'Operational audit evaluates the ___ of operations.', options: ['Legality only', 'Efficiency and economy', 'Tax liability', 'Share price'], correctIndex: 1 },
  { id: 'qf210-5', chapterId: 210, question: 'The audit committee is constituted under which section?', options: ['Section 177', 'Section 138', 'Section 148', 'Section 149'], correctIndex: 0 },
  { id: 'qf210-6', chapterId: 210, question: 'An audit of energy usage and conservation is called:', options: ['Propriety audit', 'Energy audit', 'Cost audit', 'Secretarial audit'], correctIndex: 1 },

  // ===== 211 · Ind AS Framework =====
  { id: 'qf211-1', chapterId: 211, question: 'Ind AS 115 recognises revenue using a model with how many steps?', options: ['Three', 'Four', 'Five', 'Six'], correctIndex: 2 },
  { id: 'qf211-2', chapterId: 211, question: 'Ind AS 116 requires lessees to recognise a:', options: ['Right-of-use asset and lease liability', 'Only rental expense', 'Contingent liability', 'Deferred revenue'], correctIndex: 0 },
  { id: 'qf211-3', chapterId: 211, question: 'The expected-credit-loss impairment model applies under:', options: ['Ind AS 2', 'Ind AS 16', 'Ind AS 109', 'Ind AS 115'], correctIndex: 2 },
  { id: 'qf211-4', chapterId: 211, question: 'The fundamental qualitative characteristics of useful information are:', options: ['Relevance and faithful representation', 'Prudence and consistency', 'Timeliness and cost', 'Accuracy and legality'], correctIndex: 0 },
  { id: 'qf211-5', chapterId: 211, question: 'Impairment of assets is dealt with under:', options: ['Ind AS 36', 'Ind AS 38', 'Ind AS 12', 'Ind AS 2'], correctIndex: 0 },
  { id: 'qf211-6', chapterId: 211, question: 'Deferred tax under Ind AS 12 uses the:', options: ['Income-statement approach', 'Balance-sheet (temporary difference) approach', 'Cash approach', 'Deferral method'], correctIndex: 1 },

  // ===== 212 · Consolidation & Reporting =====
  { id: 'qf212-1', chapterId: 212, question: 'Consolidation under Ind AS 110 is based on:', options: ['Ownership above 50% only', 'Control (power + variable returns)', 'Significant influence', 'Legal form'], correctIndex: 1 },
  { id: 'qf212-2', chapterId: 212, question: 'Business combinations are accounted for using the:', options: ['Pooling of interests method', 'Acquisition method', 'Equity method', 'Cost method'], correctIndex: 1 },
  { id: 'qf212-3', chapterId: 212, question: 'Under Ind AS, goodwill is:', options: ['Amortised over 5 years', 'Tested annually for impairment', 'Written off immediately', 'Revalued each year'], correctIndex: 1 },
  { id: 'qf212-4', chapterId: 212, question: 'Investments in associates are accounted for using the:', options: ['Equity method', 'Acquisition method', 'Fair value only', 'Proportionate consolidation'], correctIndex: 0 },
  { id: 'qf212-5', chapterId: 212, question: 'BRSR in India relates to:', options: ['Tax reporting', 'Business Responsibility & Sustainability Reporting', 'Cost audit', 'Bank returns'], correctIndex: 1 },
  { id: 'qf212-6', chapterId: 212, question: 'On consolidation, intra-group unrealised profits are:', options: ['Added', 'Eliminated', 'Deferred as tax', 'Capitalised'], correctIndex: 1 },

  // ===== 213 · GST Core =====
  { id: 'qf213-1', chapterId: 213, question: 'GST is a ___ based tax.', options: ['Origin', 'Destination', 'Production', 'Import'], correctIndex: 1 },
  { id: 'qf213-2', chapterId: 213, question: 'On an intra-state supply, the taxes levied are:', options: ['IGST only', 'CGST + SGST', 'CGST only', 'SGST only'], correctIndex: 1 },
  { id: 'qf213-3', chapterId: 213, question: 'The taxable event under GST is:', options: ['Manufacture', 'Sale', 'Supply', 'Removal'], correctIndex: 2 },
  { id: 'qf213-4', chapterId: 213, question: 'Exports under GST are treated as:', options: ['Exempt supplies', 'Zero-rated supplies', 'Nil-rated supplies', 'Non-GST supplies'], correctIndex: 1 },
  { id: 'qf213-5', chapterId: 213, question: 'The composition scheme is available to:', options: ['All taxpayers', 'Small taxpayers below a turnover limit', 'Only exporters', 'Only e-commerce operators'], correctIndex: 1 },
  { id: 'qf213-6', chapterId: 213, question: 'On inter-state supplies and imports, the tax levied is:', options: ['CGST', 'SGST', 'IGST', 'UTGST'], correctIndex: 2 },

  // ===== 214 · ITC, Returns & Customs =====
  { id: 'qf214-1', chapterId: 214, question: 'Input Tax Credit is governed mainly by which section of the CGST Act?', options: ['Section 7', 'Section 16', 'Section 22', 'Section 49'], correctIndex: 1 },
  { id: 'qf214-2', chapterId: 214, question: 'GSTR-3B is a return for:', options: ['Outward supplies detail', 'Summary and tax payment', 'Annual reconciliation', 'ITC auto-draft'], correctIndex: 1 },
  { id: 'qf214-3', chapterId: 214, question: 'Which is a blocked credit under Sec 17(5)?', options: ['Raw materials', 'Goods given as free samples', 'Input services for business', 'Capital goods used in production'], correctIndex: 1 },
  { id: 'qf214-4', chapterId: 214, question: 'Customs duty is levied under the:', options: ['Customs Act, 1962', 'CGST Act, 2017', 'Central Excise Act', 'FEMA, 1999'], correctIndex: 0 },
  { id: 'qf214-5', chapterId: 214, question: 'The annual GST return is filed in Form:', options: ['GSTR-1', 'GSTR-3B', 'GSTR-9', 'GSTR-2B'], correctIndex: 2 },
  { id: 'qf214-6', chapterId: 214, question: 'EPCG and Advance Authorisation are schemes under the:', options: ['Foreign Trade Policy', 'Income-tax Act', 'GST law', 'Companies Act'], correctIndex: 0 },

  // ===== 215 · Strategic Performance Management =====
  { id: 'qf215-1', chapterId: 215, question: 'The Balanced Scorecard has how many perspectives?', options: ['Two', 'Three', 'Four', 'Five'], correctIndex: 2 },
  { id: 'qf215-2', chapterId: 215, question: 'Which is NOT a Balanced Scorecard perspective?', options: ['Financial', 'Customer', 'Internal business process', 'Taxation'], correctIndex: 3 },
  { id: 'qf215-3', chapterId: 215, question: 'Economic Value Added (EVA) equals:', options: ['NOPAT − (Capital × WACC)', 'Sales − Cost', 'PAT − Dividend', 'EBITDA − Tax'], correctIndex: 0 },
  { id: 'qf215-4', chapterId: 215, question: 'Comparing performance against best-in-class standards is called:', options: ['Budgeting', 'Benchmarking', 'Forecasting', 'Variance analysis'], correctIndex: 1 },
  { id: 'qf215-5', chapterId: 215, question: 'Value Based Management focuses decisions on maximising:', options: ['Market share', 'Shareholder value', 'Headcount', 'Sales volume only'], correctIndex: 1 },
  { id: 'qf215-6', chapterId: 215, question: 'CSF stands for:', options: ['Cost Structure Factor', 'Critical Success Factor', 'Cash Sales Forecast', 'Capital Servicing Fund'], correctIndex: 1 },

  // ===== 216 · Business Valuation =====
  { id: 'qf216-1', chapterId: 216, question: 'Which is an income-approach valuation method?', options: ['Comparable multiples', 'Discounted cash flow', 'Net asset value', 'Replacement cost'], correctIndex: 1 },
  { id: 'qf216-2', chapterId: 216, question: 'Equity value equals enterprise value minus:', options: ['Net debt', 'Goodwill', 'Working capital', 'Depreciation'], correctIndex: 0 },
  { id: 'qf216-3', chapterId: 216, question: 'The relief-from-royalty method values:', options: ['Inventory', 'Intangible assets', 'Land', 'Debtors'], correctIndex: 1 },
  { id: 'qf216-4', chapterId: 216, question: 'In DCF, terminal value is often estimated using the:', options: ['Gordon growth model', 'Payback method', 'Book value', 'Cost approach'], correctIndex: 0 },
  { id: 'qf216-5', chapterId: 216, question: 'A control premium is added when valuing a:', options: ['Minority stake', 'Controlling stake', 'Bond', 'Preference share'], correctIndex: 1 },
  { id: 'qf216-6', chapterId: 216, question: 'P/E and EV/EBITDA are examples of:', options: ['Discount rates', 'Relative valuation multiples', 'Cost drivers', 'Tax shields'], correctIndex: 1 },
]
