import type { Chapter } from './curriculum'

// Chapter IDs are stable and globally unique. Foundation = 1-40, Intermediate = 41+.
// Existing authored content (quizzes/flashcards) is keyed to IDs 1-28 and is reused
// under Foundation FFCA (Paper 2) and the Intermediate accounting/tax papers.

const F = 'foundation' as const
const I = 'intermediate' as const
const PL = 'PLACEHOLDER_VIDEO_ID'

function kp(...points: string[]): string[] {
  return points
}

export const CURRICULUM_CHAPTERS: Chapter[] = [
  // ==========================================================================
  // FOUNDATION · Paper 2 (FFCA) — Fundamentals of Financial & Cost Accounting
  // Reuses the original 9 foundation chapters (IDs 1-9) which are pure basics.
  // ==========================================================================
  {
    id: 1, paperId: 2, level: F, section: 'Financial Accounting Fundamentals',
    title: 'What is Accounting & Why It Matters', duration: '~18 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'Accounting is the systematic recording, classifying, summarising and interpreting of financial transactions of a business.',
      'The primary users of accounting information are owners, managers, investors, lenders, regulators and tax authorities.',
      'Financial accounting reports on the past (historical cost), while cost/management accounting looks forward to support decisions.',
      'Bookkeeping is the mechanical recording of transactions; accounting adds classification, analysis and reporting on top of it.',
      'The three core financial statements are the Income Statement, the Balance Sheet and the Cash Flow Statement.',
      'Accounting follows the Going Concern assumption — that the business will continue operating for the foreseeable future.',
      'The objective of accounting is to provide useful financial information for economic decision-making (usefulness = relevance + faithful representation).',
    ), xpAvailable: 35,
  },
  {
    id: 2, paperId: 2, level: F, section: 'Financial Accounting Fundamentals',
    title: 'The Accounting Equation', duration: '~20 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'The accounting equation is Assets = Liabilities + Owner’s Equity (also written A = L + C).',
      'Assets are resources owned by the business (cash, debtors, stock, furniture, building). Liabilities are amounts owed to outsiders.',
      'Owner’s equity (capital) is the residual claim: what owners have left after paying all liabilities.',
      'Every transaction keeps the equation in balance because it affects at least two accounts (double-entry).',
      'Drawing (withdrawal of cash/goods by the owner) reduces owner’s equity.',
      'Revenue increases equity; expenses decrease equity — this is the link to the income statement.',
      'Expanded form: Assets = Liabilities + Capital + Revenues − Expenses − Drawings.',
    ), xpAvailable: 35,
  },
  {
    id: 3, paperId: 2, level: F, section: 'Financial Accounting Fundamentals',
    title: 'Debits & Credits', duration: '~22 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'Debit (Dr) means left side of an account; Credit (Cr) means right side. They are not "good" or "bad".',
      'Rule for personal accounts: Debit the receiver, Credit the giver.',
      'Rule for real accounts: Debit what comes in, Credit what goes out.',
      'Rule for nominal accounts: Debit all expenses & losses, Credit all incomes & gains.',
      'Assets, expenses and drawings normally have debit balances; liabilities, income and capital have credit balances.',
      'The total of all debits must equal the total of all credits in every journal entry.',
      'A contra entry is one that affects only the cash and bank accounts (e.g. cash deposited into bank).',
    ), xpAvailable: 35,
  },
  {
    id: 4, paperId: 2, level: F, section: 'Financial Accounting Fundamentals',
    title: 'Journal Entries', duration: '~25 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'A journal is the book of original entry — transactions are first recorded here in chronological order.',
      'A compound journal entry affects more than two accounts but total Dr must equal total Cr.',
      'Format: Date | Particulars (account to be debited first, then credited indented) | L.F. | Dr amount | Cr amount.',
      'Example: Purchased goods for cash → Dr Purchases A/c, Cr Cash A/c.',
      'Example: Credit sale → Dr Debtors A/c, Cr Sales A/c.',
      'Narration (a short note in brackets) explains the reason for the entry.',
      'Capital introduced → Dr Cash/Bank, Cr Capital A/c.',
    ), xpAvailable: 35,
  },
  {
    id: 5, paperId: 2, level: F, section: 'Financial Accounting Fundamentals',
    title: 'Ledger & T-Accounts', duration: '~24 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'A ledger is the book of final entry; it groups all transactions of one account in one place (an account = a T-shape).',
      'Posting is copying amounts from the journal to the respective ledger accounts.',
      'Each ledger account has a Debit side and a Credit side; the difference is the account balance.',
      'Debit balance = total Dr − total Cr (typical for assets, expenses).',
      'Credit balance = total Cr − total Dr (typical for liabilities, income, capital).',
      'The ledger is organised by account headings: assets, liabilities, capital, incomes, expenses.',
      'A folio (L.F.) number links each journal entry to its ledger page for traceability.',
    ), xpAvailable: 35,
  },
  {
    id: 6, paperId: 2, level: F, section: 'Financial Accounting Fundamentals',
    title: 'Trial Balance', duration: '~20 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'A trial balance lists all ledger balances (debit and credit) at a point in time to check arithmetical accuracy.',
      'If total debits equal total credits, the books are mathematically balanced — but errors may still exist.',
      'Errors not detected by a trial balance: omission, commission, principle, compensating, and complete reversal errors.',
      'Suspense account is used to force the TB to agree while the error is located.',
      'The trial balance is the link between the ledger and the final accounts.',
      'Debit balances (assets, expenses, drawings) normally appear on the Dr side; credit balances on the Cr side.',
      'If totals disagree, the difference may be half of a wrong posting (a "one-sided" error).',
    ), xpAvailable: 35,
  },
  {
    id: 7, paperId: 2, level: F, section: 'Preparation of Financial Statements',
    title: 'Income Statement (P&L)', duration: '~26 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'The Income Statement (Profit & Loss Account) shows revenues and expenses for a period and arrives at net profit/loss.',
      'Trading Account computes Gross Profit = Sales − Cost of Goods Sold (Opening Stock + Purchases − Closing Stock + Direct Expenses).',
      'Profit & Loss Account computes Net Profit = Gross Profit + Other Incomes − Indirect Expenses.',
      'Direct expenses (wages, carriage inwards, factory rent) go to Trading A/c; indirect expenses (salary, rent, advertising) go to P&L A/c.',
      'Matching principle: recognise expenses in the same period as the revenues they helped earn.',
      'Net profit increases owner’s equity and is closed to capital at year end.',
      'Format under ICMAI: Trading A/c → P&L A/c → transferred to Balance Sheet.',
    ), xpAvailable: 35,
  },
  {
    id: 8, paperId: 2, level: F, section: 'Preparation of Financial Statements',
    title: 'Balance Sheet', duration: '~24 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'A Balance Sheet is a statement of assets, liabilities and equity at a specific date — a financial snapshot.',
      'It follows the accounting equation: Assets = Liabilities + Equity (Liabilities side = Assets side).',
      'Assets are grouped: Non-current (fixed) assets and Current assets (stock, debtors, cash, prepaid).',
      'Liabilities: Non-current (long-term loans) and Current liabilities (creditors, outstanding expenses, short-term borrowings).',
      'Capital appears on the liabilities side, increased by net profit and decreased by drawings.',
      'The order of liquidity (current assets) and permanence (liabilities) are two common presentation styles.',
      'A balance sheet "balances" only after the net profit/loss from the P&L is added to capital.',
    ), xpAvailable: 35,
  },
  {
    id: 9, paperId: 2, level: F, section: 'Fundamentals of Cost Accounting',
    title: 'Bank Reconciliation & Cost Basics', duration: '~24 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'A BRS explains the difference between the bank balance in the Cash Book and the balance per the Bank Pass Book.',
      'Common causes: cheques deposited but not yet cleared, cheques issued but not yet presented, bank charges, interest, direct debits.',
      'Cost accounting classifies costs by element (material, labour, expenses) and by behaviour (fixed, variable).',
      'Prime Cost = Direct Material + Direct Labour + Direct Expenses.',
      'Works/Factory Cost = Prime Cost + Factory Overheads.',
      'Cost of Production = Works Cost + Administration Overheads; Cost of Sales adds Selling & Distribution overheads.',
      'A Cost Sheet presents the total and per-unit cost of a product in a structured build-up.',
    ), xpAvailable: 35,
  },

  // ==========================================================================
  // INTERMEDIATE · Paper 6 (FA) — Financial Accounting
  // ==========================================================================
  {
    id: 41, paperId: 6, level: I, section: 'Preparation of Financial Statements',
    title: 'Cash Flow Statement (AS 3)', duration: '~28 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'A Cash Flow Statement reports cash inflows and outflows during a period under Operating, Investing and Financing activities (AS 3).',
      'Operating activities: day-to-day business (cash from customers, cash paid to suppliers/employees).',
      'Investing activities: purchase/sale of non-current assets and investments.',
      'Financing activities: raising/repaying capital and borrowings, payment of dividends.',
      'Indirect method starts with Net Profit and adjusts for non-cash items (depreciation) and changes in working capital.',
      'Increase in current liabilities or decrease in current assets is added; the reverse is subtracted, under the indirect method.',
      'The net change in cash + opening cash = closing cash (must tie to the Balance Sheet).',
    ), xpAvailable: 35,
  },
  {
    id: 42, paperId: 6, level: I, section: 'Accounting for Special Transactions',
    title: 'Accounts Payable & Receivable', duration: '~22 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'Accounts Receivable (sundry debtors) are amounts owed by customers for credit sales — a current asset.',
      'Accounts Payable (sundry creditors) are amounts owed to suppliers for credit purchases — a current liability.',
      'Trade discount is deducted before recording; cash discount is allowed for early payment and is an expense/income.',
      'The allowance for doubtful debts (provision) estimates uncollectible receivables and reduces their carrying value.',
      'Bad debts written off are an expense; a subsequent recovery is income.',
      'Debtors turnover ratio = Net Credit Sales / Average Debtors (measures collection efficiency).',
      'Ageing of debtors classifies balances by how long they are overdue to prioritise follow-up.',
    ), xpAvailable: 35,
  },
  {
    id: 43, paperId: 6, level: I, section: 'Accounting Standards',
    title: 'Depreciation Methods (AS 10)', duration: '~26 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'Depreciation is the systematic allocation of a tangible asset’s cost (less salvage) over its useful life (AS 10).',
      'Straight Line Method (SLM): equal charge each year = (Cost − Salvage) ÷ Life.',
      'Written Down Value (WDV) / Reducing Balance: charge = Rate × Opening WDV; charge falls each year.',
      'Units of Production: charge based on actual usage (units produced ÷ total expected units × (Cost − Salvage)).',
      'SLM gives higher profit early; WDV gives higher depreciation early (tax-friendly).',
      'Depreciation is an expense (Dr) and reduces the asset (Cr Accumulated Depreciation) — a contra asset.',
      'Change in method is a change in accounting policy and needs justification and disclosure.',
    ), xpAvailable: 35,
  },
  {
    id: 44, paperId: 6, level: I, section: 'Accounting Standards',
    title: 'Inventory Accounting (AS 2)', duration: '~24 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'Inventory valuation affects both the Balance Sheet (closing stock) and the Income Statement (COGS).',
      'FIFO: first units bought are first issued; ending inventory reflects most recent prices.',
      'Weighted Average Cost: issue price = total cost ÷ total units available, recomputed after each purchase.',
      'LIFO: last units bought are first issued (not permitted under AS 2 / Ind AS).',
      'AS 2 valuations use the lower of cost or net realisable value (NRV = estimated selling price − costs to sell).',
      'COGS = Opening Stock + Purchases − Closing Stock (under periodic system).',
      'Perpetual inventory keeps a continuous running balance of stock after every receipt and issue.',
    ), xpAvailable: 35,
  },
  {
    id: 45, paperId: 6, level: I, section: 'Preparation of Financial Statements',
    title: 'Financial Ratios & Analysis', duration: '~28 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'Liquidity ratios: Current Ratio = Current Assets ÷ Current Liabilities; Ideal ≈ 2:1. Quick Ratio (Acid Test) excludes stock; ideal ≈ 1:1.',
      'Solvency/Leverage: Debt-Equity Ratio = Total Debt ÷ Shareholders’ Equity; higher means more risk.',
      'Profitability: Gross Profit Ratio = GP ÷ Net Sales; Net Profit Ratio = NP ÷ Net Sales; ROCE = EBIT ÷ Capital Employed.',
      'Activity/Turnover: Inventory Turnover = COGS ÷ Average Inventory; Debtors Turnover = Credit Sales ÷ Average Debtors.',
      'EPS = (Net Profit − Preference Dividend) ÷ Weighted Average Number of Equity Shares.',
      'Ratio analysis compares with industry benchmarks and prior years to spot trends and weaknesses.',
      'A single ratio is meaningless — interpret them together (e.g., high turnover but low margin).',
    ), xpAvailable: 35,
  },
  {
    id: 46, paperId: 6, level: I, section: 'Partnership Accounts',
    title: 'Partnership Accounts', duration: '~28 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'A partnership is an association of two or more persons carrying on business to share profits (Partnership Act, 1932).',
      'Profit-sharing ratio (PSR) governs division of profit; default is equal sharing if the deed is silent.',
      'Fixed vs fluctuating capital: fixed capital keeps capital intact; fluctuating capital shows all adjustments in one account.',
      'Interest on capital (allowed on opening balances), salary/commission to partners are appropriations of profit.',
      'Guarantee of profit: a partner is assured a minimum; partners share the deficiency in their PSR.',
      'Admission: new partner brings goodwill/capital; revaluation of assets/liabilities and a new PSR.',
      'Retirement/death: adjusted capital, goodwill compensation, and profit to date are paid to the outgoing partner.',
    ), xpAvailable: 35,
  },
  {
    id: 47, paperId: 6, level: I, section: 'Lease, Branch and Departmental Accounts',
    title: 'Branch & Departmental Accounts', duration: '~24 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'Branch accounts record the results of a branch separately from the head office.',
      'Under the Debtors System, the head office maintains a single Branch Account to find branch profit.',
      'Under the Stock & Debtors System, separate accounts (Branch Stock, Branch Debtors, Branch Expenses) are kept.',
      'Goods sent to branch may be invoiced at cost or at cost plus a loading (invoice price).',
      'Departmental accounts split trading results by department to judge each department’s profitability.',
      'Common expenses are apportioned to departments on a suitable basis (area, sales, number of employees).',
      'Inter-departmental transfers are recorded at cost or at an agreed transfer price.',
    ), xpAvailable: 35,
  },
  {
    id: 48, paperId: 6, level: I, section: 'Accounting Standards',
    title: 'Introduction to Accounting Standards', duration: '~22 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'Accounting Standards (AS) are written policy documents issued by ICAI/NFRA that standardise accounting treatment.',
      'They improve comparability, reliability and transparency of financial statements.',
      'AS 1 requires disclosure of significant accounting policies (going concern, consistency, accrual).',
      'AS 9 Revenue Recognition: revenue recognised when performance is complete and collection is reasonably certain.',
      'Ind AS are India’s IFRS-converged standards applicable to larger/listed companies.',
      'AS 2 (Inventories), AS 3 (Cash Flow), AS 10 (PPE) are core to financial accounting.',
      'Compliance with AS is mandatory for statutory financial statements in India.',
    ), xpAvailable: 35,
  },

  // ==========================================================================
  // INTERMEDIATE · Paper 7 (DITX) — Direct & Indirect Taxation
  // ==========================================================================
  {
    id: 49, paperId: 7, level: I, section: 'Direct Taxation',
    title: 'Income Tax Basics (India)', duration: '~26 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'Income tax in India is levied by the Central Government under the Income-tax Act, 1961; the FY runs Apr 1–Mar 31.',
      'Five heads of income: Salaries, House Property, Profits & Gains of Business/Profession, Capital Gains, Other Sources.',
      'Gross Total Income = sum of all heads; deductions under Chapter VI-A (80C–80U, e.g., 80C up to ₹1.5 lakh) reduce it.',
      'Tax is computed on Total Income after deductions; rebate u/s 87A applies for lower incomes.',
      'Residential status (Resident/Non-Resident) decides the scope of taxable income.',
      'Tax is increased by Health & Education Cess @ 4% on the tax amount.',
      'Advance tax is payable in instalments when total tax liability exceeds ₹10,000 in a year.',
    ), xpAvailable: 35,
  },
  {
    id: 50, paperId: 7, level: I, section: 'Direct Taxation',
    title: 'TDS & TCS (India)', duration: '~24 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'TDS (Tax Deducted at Source) deducts tax when payment is made; TCS (Tax Collected at Source) collects tax on receipt/sale.',
      'Common TDS sections: 194C (works contracts, 1%/2%), 194J (professional/technical fees, 10%), 192 (salary, slab rates).',
      'The deductor deposits TDS with the government and files TDS returns (24Q, 26Q) quarterly.',
      'TAN (Tax Deduction Account Number) is mandatory for any person deducting tax at source.',
      'TCS applies to sale of goods (206C(1H), 0.1% on receipts above ₹50 lakh in a year for specified goods).',
      'The deductee claims credit via Form 26AS / AIS matching the TDS deposited against their PAN.',
      'Late deposit of TDS attracts interest u/s 201(1A) and disallowance of the expense.',
    ), xpAvailable: 35,
  },
  {
    id: 51, paperId: 7, level: I, section: 'Direct Taxation',
    title: 'Income from Salary & House Property', duration: '~26 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'Salary income includes basic pay, allowances, perquisites and profits in lieu of salary.',
      'Standard deduction of ₹50,000 is available from salary income.',
      'HRA exemption u/s 10(13A) is the least of: actual HRA, rent paid − 10% salary, 40%/50% of salary.',
      'Income from House Property = Net Annual Value − Standard Deduction (30%) − Interest on borrowed capital.',
      'Interest on a self-occupied house loan is deductible up to ₹2,00,000 per year.',
      'Municipal taxes actually paid by the owner are deductible from Gross Annual Value.',
      'A self-occupied property has NAV taken as nil (subject to conditions).',
    ), xpAvailable: 35,
  },
  {
    id: 52, paperId: 7, level: I, section: 'Indirect Taxation',
    title: 'GST Fundamentals', duration: '~26 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'GST is a destination-based, multi-stage indirect tax on value addition; implemented in India on 1 July 2017.',
      'Three levies: CGST (Centre) + SGST (State) for intra-state supply; IGST (Centre) for inter-state supply.',
      'GST is charged on the supply of goods or services, not on manufacture or sale alone.',
      'Tax rates (common slabs): 0%, 5%, 12%, 18%, 28% (plus cess on some goods).',
      'Input Tax Credit (ITC) lets a registered person offset GST paid on inputs against GST collected on outward supply.',
      'Composition scheme (for small taxpayers up to ₹1.5 crore turnover) pays a fixed lower rate without full ITC.',
      'Every registered person gets a 15-digit GSTIN based on PAN + state code + entity number.',
    ), xpAvailable: 35,
  },
  {
    id: 53, paperId: 7, level: I, section: 'Indirect Taxation',
    title: 'GST Returns — GSTR-1 & GSTR-3B', duration: '~24 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'GSTR-1 reports outward supplies (sales) with invoice-level detail; due by the 11th of the following month.',
      'GSTR-3B is a monthly self-declared summary of outward sales, ITC claimed and net tax payable; filed by the 20th.',
      'GSTR-2A/2B are auto-drafted ITC statements from suppliers’ GSTR-1 — ITC is claimed based on these.',
      'Net tax payable = Output GST − Eligible ITC; the balance is paid in cash via the common portal.',
      'Late filing of GSTR-3B attracts a late fee plus interest @ 18% on tax due.',
      'GSTR-9 is the annual return consolidating the year’s supplies and ITC.',
      'Mismatch between GSTR-1 and books means ITC may be denied to the recipient until corrected.',
    ), xpAvailable: 35,
  },
  {
    id: 54, paperId: 7, level: I, section: 'Indirect Taxation',
    title: 'E-Invoicing & E-Way Bill', duration: '~22 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'E-invoicing (IRN) requires generating a unique Invoice Reference Number on the GSTN portal for B2B invoices above the threshold.',
      'An IRN is a hash of supplier GSTIN, document type, document number and financial year; it returns a signed JSON + QR code.',
      'E-way bill is an electronic document required to move goods worth over ₹50,000, generated on the e-way bill portal.',
      'E-way bill contains Part A (invoice/supply details) and Part B (vehicle/transporter details).',
      'E-invoice data auto-populates GSTR-1, reducing manual return filing errors.',
      'Valid IRN + QR code must be printed on the invoice; without it the invoice is not a valid e-invoice.',
      'E-way bill is valid for 1 day per 200 km of distance; can be extended/merged for multi-leg transit.',
    ), xpAvailable: 35,
  },

  // ==========================================================================
  // INTERMEDIATE · Paper 10 (CAA) — Corporate Accounting & Auditing
  // ==========================================================================
  {
    id: 55, paperId: 10, level: I, section: 'Corporate Accounting',
    title: 'Company Accounts & Share Capital', duration: '~30 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'A company has separate legal identity; share capital is divided into equity and preference shares.',
      'Types of share capital: Authorised (maximum permitted), Issued, Subscribed, Called-up, Paid-up.',
      'Issue at par (face value), at premium (above face — goes to Securities Premium), at discount (restricted by law).',
      'Calls in arrears (unpaid called money) is deducted from called-up capital; Calls in advance is a liability.',
      'Forfeiture of shares: the shareholder’s shares are cancelled for non-payment; amount already received is forfeited.',
      'Reissue of forfeited shares can be at a discount not exceeding the amount forfeited on those shares.',
      'Securities Premium Reserve can be used only for permitted purposes (buyback, bonus issue, etc.).',
    ), xpAvailable: 35,
  },
  {
    id: 56, paperId: 10, level: I, section: 'Corporate Accounting',
    title: 'Consolidation & Group Accounts', duration: '~30 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'Consolidated financial statements present a parent and its subsidiaries as a single economic entity (Ind AS 110).',
      'Control (power over the investee, exposure to variable returns, ability to use power) requires consolidation.',
      'Goodwill on consolidation = Consideration paid + NCI − Fair value of net assets acquired.',
      'Eliminate intra-group balances, intra-group sales, and unrealised profit in ending inventory.',
      'Non-controlling interest (NCI) is the portion of equity not owned by the parent, shown separately.',
      'Minority interest (old term) = NCI; it shares in post-acquisition profit per its percentage.',
      'A subsidiary is not consolidated if it is acquired and held exclusively with a view to resale.',
    ), xpAvailable: 35,
  },
  {
    id: 57, paperId: 10, level: I, section: 'Corporate Accounting',
    title: 'Financial Instruments & Reporting', duration: '~28 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'Financial instruments are contracts giving rise to a financial asset for one party and a liability/equity for another (Ind AS 109).',
      'Three classifications for financial assets: Amortised Cost, FVTOCI, FVTPL.',
      'Amortised cost test: business model = hold to collect, and cash flows are solely payments of principal + interest (SPPI).',
      'Revenue recognition follows a 5-step model (Ind AS 115): identify contract, obligations, price, allocate, recognise.',
      'Provisions are recognised when there is a present obligation, probable outflow, and a reliable estimate (Ind AS 37).',
      'Contingent liabilities are possible obligations not recognised but disclosed in notes.',
      'Expected Credit Loss (ECL) model requires recognising impairment based on forward-looking information.',
    ), xpAvailable: 35,
  },
  {
    id: 58, paperId: 10, level: I, section: 'Auditing',
    title: 'Auditing — Basic Concepts', duration: '~26 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'Auditing is the independent examination of financial statements to express an opinion on their true and fair view.',
      'Objectives: primary (opinion on true & fair view) and secondary (detection/prevention of errors and fraud).',
      'Audit evidence must be sufficient (quantity) and appropriate (relevance + reliability).',
      'Internal control is the process to ensure reliability of reporting, compliance and operational efficiency.',
      'Vouching verifies transactions with documentary evidence; verification confirms existence/valuation of assets.',
      'Audit risk = Inherent Risk × Control Risk × Detection Risk.',
      'Standards on Auditing (SAs) issued by ICAI govern how audits must be conducted.',
    ), xpAvailable: 35,
  },
  {
    id: 59, paperId: 10, level: I, section: 'Auditing',
    title: 'Audit Report & Company Audit', duration: '~24 min', videoId: PL, videoPlaylistId: PL,
    keyPoints: kp(
      'The audit report communicates the auditor’s opinion to shareholders.',
      'Opinion types: Unmodified (clean), Qualified, Adverse, and Disclaimer of opinion.',
      'A company auditor is appointed u/s 139 of the Companies Act 2013, normally for 5 years.',
      'The auditor must report on matters specified in Section 143 and CARO where applicable.',
      'Removal of an auditor before term requires special resolution and Central Government approval.',
      'Auditor independence is fundamental; certain non-audit services are prohibited.',
      'True and fair view means statements are free from material misstatement and follow the applicable framework.',
    ), xpAvailable: 35,
  },
]

