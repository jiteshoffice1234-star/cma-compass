import type { Chapter } from './curriculum'

// ICMAI CMA Final — Syllabus 2022 (Papers 13-20, Groups III & IV).
// Chapter IDs 201+ (Foundation 1-40, Intermediate 41-99, Final 201+).
// Two chapters per paper covering the exam-heavy modules, each with
// substantive, syllabus-accurate key points.

const FN = 'final' as const

function kp(...points: string[]): string[] {
  return points
}

export const FINAL_CHAPTERS: Chapter[] = [
  // ==========================================================================
  // Paper 13 · CEL — Corporate and Economic Laws
  // ==========================================================================
  {
    id: 201, paperId: 13, level: FN, section: 'Corporate Laws',
    title: 'Companies Act 2013 — Management, Directors & Meetings', duration: '~30 min',
    keyPoints: kp(
      'A company must have a Board of Directors; a public company needs a minimum of 3 directors, a private company 2, and a One Person Company 1. Maximum is 15 (more allowed by special resolution).',
      'Every company must have at least one director who has stayed in India for 182+ days in the financial year (resident director, Sec 149(3)).',
      'Key Managerial Personnel (KMP) under Sec 203 include the MD/CEO/Manager, Company Secretary and CFO — mandatory for listed and large public companies.',
      'Independent directors (Sec 149(6)) must meet independence criteria and hold office for up to two consecutive terms of five years each.',
      'Board meetings: minimum 4 per year with a gap of not more than 120 days between two consecutive meetings; quorum is 1/3rd or 2 directors, whichever is higher.',
      'Annual General Meeting must be held within 6 months of the financial-year end (9 months for the first AGM), with gap not exceeding 15 months between two AGMs.',
      'Resolutions are ordinary (simple majority) or special (≥ 3/4 majority); certain items such as alteration of Articles require a special resolution.',
    ), xpAvailable: 40,
  },
  {
    id: 202, paperId: 13, level: FN, section: 'Economic Laws & Regulations',
    title: 'IBC 2016, SEBI, Competition Act & FEMA', duration: '~28 min',
    keyPoints: kp(
      'The Insolvency and Bankruptcy Code, 2016 provides a time-bound Corporate Insolvency Resolution Process (CIRP) — to be completed within 330 days including litigation.',
      'CIRP can be triggered by a financial creditor (Sec 7), operational creditor (Sec 9) or the corporate debtor itself (Sec 10); an Interim Resolution Professional runs the company and forms the Committee of Creditors (CoC).',
      'The CoC approves a resolution plan by 66% voting share; failing resolution, the company goes into liquidation with a waterfall of claims under Sec 53.',
      'SEBI Act, 1992 established SEBI to protect investors and regulate securities markets; the LODR Regulations govern listed-company disclosures and corporate governance.',
      'The Competition Act, 2002 prohibits anti-competitive agreements (Sec 3) and abuse of dominant position (Sec 4) and regulates combinations (mergers) through the CCI.',
      'FEMA, 1999 governs foreign exchange; current-account transactions are generally free while capital-account transactions are regulated by the RBI.',
      'Contraventions under FEMA attract civil penalties (up to 3× the sum involved), unlike the earlier FERA which was criminal in nature.',
    ), xpAvailable: 40,
  },

  // ==========================================================================
  // Paper 14 · SFM — Strategic Financial Management
  // ==========================================================================
  {
    id: 203, paperId: 14, level: FN, section: 'Investment & Portfolio',
    title: 'Capital Budgeting under Risk & Portfolio Theory', duration: '~30 min',
    keyPoints: kp(
      'Risk in capital budgeting is analysed using sensitivity analysis, scenario analysis, simulation, decision trees and the certainty-equivalent / risk-adjusted discount rate (RADR) approaches.',
      'NPV = Σ (cash flow ÷ (1+r)^t) − initial outlay; a positive NPV adds shareholder value. IRR is the rate at which NPV = 0.',
      'Under RADR a higher discount rate is used for riskier projects; the certainty-equivalent method instead shrinks risky cash flows and discounts at the risk-free rate.',
      'Portfolio risk depends on the correlation between assets — diversification reduces unsystematic (specific) risk but not systematic (market) risk.',
      'The CAPM gives required return = Rf + β(Rm − Rf); beta measures systematic risk relative to the market.',
      'The efficient frontier shows portfolios offering the maximum return for a given level of risk; the market portfolio lies where the Capital Market Line is tangent to it.',
      'Sharpe ratio (excess return per unit of total risk) and Treynor ratio (per unit of beta) are used to evaluate portfolio performance.',
    ), xpAvailable: 40,
  },
  {
    id: 204, paperId: 14, level: FN, section: 'Derivatives & Valuation',
    title: 'Derivatives, Business Valuation & Restructuring', duration: '~28 min',
    keyPoints: kp(
      'Derivatives (forwards, futures, options, swaps) derive value from an underlying asset and are used for hedging, speculation and arbitrage.',
      'A call option gives the right to buy and a put option the right to sell at a strike price; option value = intrinsic value + time value.',
      'The Black-Scholes and binomial models are used to price options; put-call parity links the price of European calls and puts: C + PV(K) = P + S.',
      'Business valuation approaches: asset-based (net asset value), income-based (DCF / capitalisation of earnings) and market-based (comparable multiples like P/E, EV/EBITDA).',
      'In a DCF valuation, free cash flows are discounted at the WACC; terminal value often uses the Gordon growth model.',
      'Mergers & acquisitions create synergy; the exchange ratio (swap ratio) is set on the basis of relative EPS, market price or intrinsic value.',
      'Corporate restructuring includes mergers, demergers, reverse mergers, leveraged buyouts and financial restructuring to maximise value.',
    ), xpAvailable: 40,
  },

  // ==========================================================================
  // Paper 15 · DIT — Direct Tax Laws and International Taxation
  // ==========================================================================
  {
    id: 205, paperId: 15, level: FN, section: 'Assessment & Computation',
    title: 'Total Income, Assessment of Entities & Tax Planning', duration: '~30 min',
    keyPoints: kp(
      'Total income is computed under five heads: Salaries, House Property, Profits & Gains of Business or Profession, Capital Gains and Income from Other Sources.',
      'Companies are taxed at rates that depend on turnover and the regime chosen; concessional rates apply under Sec 115BAA (22%) and 115BAB (15% for new manufacturing).',
      'Minimum Alternate Tax (MAT) under Sec 115JB is levied at 15% of book profit where normal tax is lower; MAT credit can be carried forward for 15 years.',
      'The distinction between tax planning (legitimate), tax avoidance and tax evasion (illegal) is central; GAAR can override arrangements lacking commercial substance.',
      'Deductions under Chapter VI-A (80C, 80D, 80G, 80-IA etc.) reduce gross total income; set-off and carry-forward rules govern losses.',
      'Assessment of firms, LLPs, AOPs, trusts and co-operative societies each follow special provisions on rates and allowable deductions.',
      'TDS/TCS provisions require tax to be deducted/collected at source and deposited, with returns filed to enable credit to the deductee.',
    ), xpAvailable: 40,
  },
  {
    id: 206, paperId: 15, level: FN, section: 'International Taxation',
    title: 'International Taxation, Transfer Pricing & DTAA', duration: '~28 min',
    keyPoints: kp(
      'Residential status determines the scope of total income; a resident is taxed on global income while a non-resident is taxed only on Indian-source income.',
      'Double Taxation Avoidance Agreements (DTAAs) allocate taxing rights between countries and provide relief by the exemption or credit method (Sec 90/91).',
      'Transfer pricing (Sec 92-92F) requires international transactions between associated enterprises to be at arm’s length price (ALP).',
      'ALP methods: CUP, Resale Price, Cost Plus, Profit Split and Transactional Net Margin Method (TNMM); the most appropriate method is selected.',
      'A Permanent Establishment (PE) creates a taxable presence; business profits are taxed in the source country only to the extent attributable to the PE.',
      'The Equalisation Levy and Significant Economic Presence rules address taxation of the digital economy.',
      'BEPS (Base Erosion and Profit Shifting) action plans and the Multilateral Instrument (MLI) modify treaties to curb tax avoidance.',
    ), xpAvailable: 40,
  },

  // ==========================================================================
  // Paper 16 · SCM — Strategic Cost Management
  // ==========================================================================
  {
    id: 207, paperId: 16, level: FN, section: 'Strategic Cost Tools',
    title: 'Value Chain, Target, Life-cycle & Kaizen Costing', duration: '~28 min',
    keyPoints: kp(
      'Strategic Cost Management aligns cost information with strategy using value-chain analysis, cost-driver analysis and strategic positioning.',
      'Target costing works backwards: target cost = expected selling price − desired profit margin; the product is engineered to meet that cost.',
      'Life-cycle costing accumulates all costs from R&D through to disposal, recognising that a large share of cost is committed at the design stage.',
      'Kaizen costing seeks continuous, incremental cost reduction during the manufacturing phase, unlike target costing which acts at design.',
      'Value analysis / value engineering improves the value (function ÷ cost) of a product by eliminating unnecessary cost without reducing function.',
      'Theory of Constraints focuses on the bottleneck; throughput accounting maximises throughput contribution (sales − material cost) per bottleneck hour.',
      'Business Process Re-engineering fundamentally redesigns processes to achieve dramatic improvements in cost, quality and speed.',
    ), xpAvailable: 40,
  },
  {
    id: 208, paperId: 16, level: FN, section: 'Decision Making',
    title: 'ABC, Relevant Costing & Variance Analysis', duration: '~30 min',
    keyPoints: kp(
      'Activity Based Costing assigns overheads to products via cost pools and cost drivers, giving more accurate product costs than volume-based absorption.',
      'Activity Based Management uses ABC information to eliminate non-value-adding activities and improve profitability.',
      'Relevant costs for decisions are future, incremental cash flows; sunk costs and allocated fixed costs are ignored, while opportunity cost is included.',
      'Typical short-run decisions: make-or-buy, accept/reject a special order, add/drop a segment, and further-processing decisions — all use contribution analysis.',
      'CVP analysis: break-even (units) = fixed cost ÷ contribution per unit; margin of safety = actual − break-even sales.',
      'Standard costing computes variances: material (price, usage), labour (rate, efficiency), overhead (expenditure, volume) and sales (price, volume).',
      'The learning curve models how average time per unit falls by a fixed percentage as cumulative output doubles, affecting labour cost estimates.',
    ), xpAvailable: 40,
  },

  // ==========================================================================
  // Paper 17 · CMAD — Cost and Management Audit
  // ==========================================================================
  {
    id: 209, paperId: 17, level: FN, section: 'Cost Audit',
    title: 'Cost Records, Cost Audit Rules & Reporting', duration: '~28 min',
    keyPoints: kp(
      'Cost audit is the verification of cost accounts and a check on adherence to the cost accounting plan, governed by Sec 148 of the Companies Act, 2013.',
      'The Companies (Cost Records and Audit) Rules, 2014 prescribe which companies must maintain cost records (Rule 3) and undergo cost audit (Rule 4) based on industry and turnover thresholds.',
      'Cost records are maintained in Form CRA-1; the cost auditor is appointed in Form CRA-2 and submits the cost audit report in Form CRA-3; the company files CRA-4 with the MCA.',
      'A cost auditor must be a practising Cost Accountant (CMA) and cannot be the statutory (financial) auditor of the same company.',
      'Cost Accounting Standards (CAS 1-24) issued by ICMAI standardise the treatment of elements such as materials, employee cost, overheads and capacity determination.',
      'The cost audit report includes cost statements per product/service, reconciliation with financial accounts and the auditor’s observations.',
      'Cost audit improves cost control, aids pricing and provides assurance to management, shareholders and regulators.',
    ), xpAvailable: 40,
  },
  {
    id: 210, paperId: 17, level: FN, section: 'Management Audit',
    title: 'Management, Operational & Internal Audit', duration: '~26 min',
    keyPoints: kp(
      'Management audit is a comprehensive, forward-looking appraisal of the effectiveness of management and its decision-making at all levels.',
      'Operational audit evaluates the efficiency and economy of operations, often focusing on specific functions such as production, marketing or purchasing.',
      'Internal audit (Sec 138) is an independent appraisal function within the organisation that reviews internal control, risk management and governance.',
      'Standards on Internal Audit (SIAs) and the Standards on Auditing (SAs) provide the professional framework for audit conduct.',
      'Energy audit, efficiency audit, propriety audit and social/sustainability audit are specialised management-audit applications.',
      'Internal control components (per COSO): control environment, risk assessment, control activities, information & communication and monitoring.',
      'Corporate governance and audit committees (Sec 177) strengthen oversight and the reliability of financial and cost reporting.',
    ), xpAvailable: 40,
  },

  // ==========================================================================
  // Paper 18 · CFR — Corporate Financial Reporting
  // ==========================================================================
  {
    id: 211, paperId: 18, level: FN, section: 'Ind AS Framework',
    title: 'Indian Accounting Standards (Ind AS) — Key Standards', duration: '~30 min',
    keyPoints: kp(
      'Ind AS are IFRS-converged standards notified under the Companies (Indian Accounting Standards) Rules, applicable in phases based on net worth and listing.',
      'The Conceptual Framework defines the qualitative characteristics of useful information — relevance and faithful representation, enhanced by comparability, verifiability, timeliness and understandability.',
      'Ind AS 115 recognises revenue using a five-step model: identify the contract, performance obligations, transaction price, allocate the price, and recognise revenue as obligations are satisfied.',
      'Ind AS 116 requires lessees to recognise a right-of-use asset and a lease liability for most leases, removing the old operating/finance distinction for lessees.',
      'Ind AS 16 (PP&E), Ind AS 38 (intangibles) and Ind AS 36 (impairment) govern non-current assets and their impairment testing.',
      'Ind AS 109 classifies financial assets as amortised cost, FVOCI or FVTPL and introduces the expected-credit-loss impairment model.',
      'Ind AS 12 accounts for deferred tax using the balance-sheet (temporary difference) approach.',
    ), xpAvailable: 40,
  },
  {
    id: 212, paperId: 18, level: FN, section: 'Consolidation & Reporting',
    title: 'Consolidation, Business Combinations & Disclosures', duration: '~30 min',
    keyPoints: kp(
      'Ind AS 110 requires consolidation of all entities the parent controls; control = power + exposure to variable returns + ability to affect those returns.',
      'Ind AS 103 accounts for business combinations by the acquisition method — assets and liabilities are measured at fair value and the excess consideration is goodwill.',
      'Non-controlling interest (NCI) is measured at fair value or at the proportionate share of net assets; goodwill is tested annually for impairment (not amortised).',
      'Ind AS 28 (associates/joint ventures) uses the equity method; Ind AS 111 distinguishes joint operations from joint ventures.',
      'Consolidated financial statements eliminate intra-group balances, transactions and unrealised profits.',
      'Integrated Reporting <IR> connects financial and non-financial capitals; sustainability/ESG reporting (e.g. BRSR in India) is increasingly required for listed entities.',
      'Segment reporting (Ind AS 108) and related-party disclosures (Ind AS 24) enhance transparency for users.',
    ), xpAvailable: 40,
  },

  // ==========================================================================
  // Paper 19 · ITP — Indirect Tax Laws and Practice
  // ==========================================================================
  {
    id: 213, paperId: 19, level: FN, section: 'GST Core',
    title: 'GST — Supply, Levy, Time & Place of Supply', duration: '~30 min',
    keyPoints: kp(
      'GST is a destination-based, multi-stage tax on the supply of goods and services, subsuming excise, service tax, VAT and several other levies.',
      'Supply (Sec 7) is the taxable event and includes sale, transfer, barter, exchange, licence, rental, lease and disposal made for consideration in the course of business.',
      'The dual GST model levies CGST + SGST on intra-state supplies and IGST on inter-state supplies and imports.',
      'Place of supply rules determine whether a transaction is intra-state or inter-state and hence which tax applies.',
      'Time of supply fixes when GST becomes payable — generally the earlier of invoice date or payment for goods/services, with special rules for reverse charge.',
      'Composition scheme allows small taxpayers (turnover up to the prescribed limit) to pay tax at a flat rate without input tax credit.',
      'Exempt, nil-rated, zero-rated and non-GST supplies are distinct; exports and supplies to SEZ are zero-rated.',
    ), xpAvailable: 40,
  },
  {
    id: 214, paperId: 19, level: FN, section: 'ITC, Returns & Customs',
    title: 'Input Tax Credit, Returns & Customs', duration: '~28 min',
    keyPoints: kp(
      'Input Tax Credit (Sec 16) is available on inputs, input services and capital goods used in business, subject to conditions such as possession of a tax invoice, receipt of goods and the supplier having paid tax.',
      'Blocked credits (Sec 17(5)) include motor vehicles (with exceptions), personal consumption and goods lost, stolen or given as gifts/free samples.',
      'The registration threshold is turnover-based; registration is compulsory for inter-state suppliers, e-commerce operators and those under reverse charge.',
      'Returns include GSTR-1 (outward supplies), GSTR-3B (summary and payment) and the annual GSTR-9; GSTR-2B is an auto-drafted ITC statement.',
      'The electronic cash and credit ledgers record tax payments and available credit; refund arises on exports, inverted duty structure and excess balance.',
      'Customs duty is levied under the Customs Act, 1962 on imports and exports; transaction value is the primary basis of customs valuation.',
      'The Foreign Trade Policy provides export-promotion schemes such as EPCG and Advance Authorisation; IGST is levied on imports along with Basic Customs Duty.',
    ), xpAvailable: 40,
  },

  // ==========================================================================
  // Paper 20 · SPMBV — Strategic Performance Management & Business Valuation
  // ==========================================================================
  {
    id: 215, paperId: 20, level: FN, section: 'Performance Management',
    title: 'Strategic Performance Management Frameworks', duration: '~28 min',
    keyPoints: kp(
      'Strategic performance management links strategy to operations through integrated financial and non-financial measures.',
      'The Balanced Scorecard measures performance across four perspectives — financial, customer, internal business process and learning & growth.',
      'Key Performance Indicators (KPIs) and Critical Success Factors (CSFs) translate strategy into measurable targets.',
      'The performance pyramid and the performance prism are alternative multi-dimensional measurement frameworks.',
      'Benchmarking compares performance against best-in-class internal, competitive or functional standards to drive improvement.',
      'Economic Value Added (EVA) = NOPAT − (Capital × WACC) measures the value created above the cost of capital.',
      'Value Based Management focuses management decisions on maximising shareholder value using drivers such as growth, margin and capital efficiency.',
    ), xpAvailable: 40,
  },
  {
    id: 216, paperId: 20, level: FN, section: 'Business Valuation',
    title: 'Business & Intangible Asset Valuation', duration: '~30 min',
    keyPoints: kp(
      'Value can mean book value, market value, intrinsic value, fair value or liquidation value depending on the purpose of valuation.',
      'The three broad approaches are the income approach (DCF, capitalisation of earnings), the market approach (comparable companies / transactions) and the asset (cost) approach.',
      'In DCF, enterprise value = present value of free cash flows to the firm discounted at WACC, plus the discounted terminal value.',
      'Relative valuation uses multiples such as P/E, EV/EBITDA, price-to-book and EV/Sales drawn from comparable listed companies.',
      'Valuation of intangibles (brands, patents, goodwill) uses methods such as relief-from-royalty, excess earnings and cost of recreation.',
      'The equity value = enterprise value − net debt; per-share value divides equity value by the number of shares.',
      'Valuation for mergers determines the swap ratio; control premiums and minority/marketability discounts adjust the base value.',
    ), xpAvailable: 40,
  },
]
