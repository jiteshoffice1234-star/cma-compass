import type { Question } from './questions'

export const INTER_A_QUESTIONS: Question[] = [
  // ===== Chapter 41 =====
  { id: 'q41-1', chapterId: 41, question: 'Under AS 3, which of the following is classified as a financing activity in a cash flow statement?', options: ['Payment to suppliers for inventory', 'Interest paid on term loan redemption', 'Cash received from sale of goods', 'Payment of wages to staff'], correctIndex: 1 },
  { id: 'q41-2', chapterId: 41, question: 'In the indirect method of preparing the cash flow statement, the starting point is:', options: ['Cash collected from customers', 'Net profit before tax', 'Net profit as per statement of profit and loss', 'Gross operating revenue'], correctIndex: 2 },
  { id: 'q41-3', chapterId: 41, question: 'Purchase of machinery by a manufacturing company is disclosed under which activity as per AS 3?', options: ['Operating activity', 'Investing activity', 'Financing activity', 'Non-cash activity'], correctIndex: 1 },
  { id: 'q41-4', chapterId: 41, question: 'The net change in cash and cash equivalents during a period must tie to:', options: ['The movement shown in the balance sheet', 'The net profit of the year', 'The depreciation charged', 'The opening capital'], correctIndex: 0 },
  { id: 'q41-5', chapterId: 41, question: 'Which item is added back to net profit while computing cash flow from operating activities under the indirect method?', options: ['Proposed dividend', 'Dividend received', 'Depreciation on tangible assets', 'Income tax paid'], correctIndex: 2 },
  { id: 'q41-6', chapterId: 41, question: 'Proceeds from issue of equity shares are classified under which cash flow activity?', options: ['Operating', 'Investing', 'Financing', 'Exceptional'], correctIndex: 2 },

  // ===== Chapter 42 =====
  { id: 'q42-1', chapterId: 42, question: 'Sundry debtors appear in the balance sheet as a:', options: ['Current liability', 'Non-current asset', 'Current asset', 'Contingent asset'], correctIndex: 2 },
  { id: 'q42-2', chapterId: 42, question: 'A trade discount received on purchase is:', options: ['Recorded as income', 'Deducted from the invoice value before recording purchase', 'Shown as a separate expense', 'Added to creditors'], correctIndex: 1 },
  { id: 'q42-3', chapterId: 42, question: 'Provision for doubtful debts is created to follow which accounting principle?', options: ['Consistency', 'Prudence', 'Materiality', 'Money measurement'], correctIndex: 1 },
  { id: 'q42-4', chapterId: 42, question: 'When a specific debtor is confirmed as irrecoverable, the entry debits:', options: ['Bad debts account', 'Sales account', 'Cash account', 'Creditors account'], correctIndex: 0 },
  { id: 'q42-5', chapterId: 42, question: 'Debtors turnover ratio is computed as:', options: ['Credit sales / Average debtors', 'Average debtors / Credit sales', 'Cash sales / Debtors', 'Total sales / Creditors'], correctIndex: 0 },
  { id: 'q42-6', chapterId: 42, question: 'Sundry creditors represent amounts payable to:', options: ['Customers for goods sold', 'Suppliers for credit purchases', 'Employees for wages', 'The government for tax'], correctIndex: 1 },

  // ===== Chapter 43 =====
  { id: 'q43-1', chapterId: 43, question: 'Under the straight line method, annual depreciation is:', options: ['Cost x WDV rate', '(Cost - Salvage value) / Useful life', 'Cost / 2', '(Cost + Salvage) / Life'], correctIndex: 1 },
  { id: 'q43-2', chapterId: 43, question: 'The written down value (WDV) method is also known as:', options: ['Units of production method', 'Reducing balance method', 'Sum of years digits method', 'Straight line method'], correctIndex: 1 },
  { id: 'q43-3', chapterId: 43, question: 'Depreciation is recorded by debiting depreciation and crediting:', options: ['The asset account directly', 'A provision for depreciation (contra asset)', 'Cash', 'Capital account'], correctIndex: 1 },
  { id: 'q43-4', chapterId: 43, question: 'Under the units of production method, depreciation depends on:', options: ['The number of years', 'Actual usage or output', 'The market value', 'The tax rate'], correctIndex: 1 },
  { id: 'q43-5', chapterId: 43, question: 'As per AS 10, depreciation is charged on:', options: ['Only land', 'All depreciable assets except land', 'Goodwill', 'Preliminary expenses'], correctIndex: 1 },
  { id: 'q43-6', chapterId: 43, question: 'In the WDV method, depreciation expense each year:', options: ['Remains constant', 'Increases over time', 'Decreases over time', 'Becomes zero in year one'], correctIndex: 2 },

  // ===== Chapter 44 =====
  { id: 'q44-1', chapterId: 44, question: 'As per AS 2, which method is NOT permitted for inventory valuation?', options: ['FIFO', 'Weighted average', 'LIFO', 'Adjusted selling price (retail)'], correctIndex: 2 },
  { id: 'q44-2', chapterId: 44, question: 'Inventory should be valued at the lower of:', options: ['Cost or market price', 'Cost or net realisable value', 'Cost or sales value', 'Cost or replacement cost only'], correctIndex: 1 },
  { id: 'q44-3', chapterId: 44, question: 'Cost of goods sold is computed as:', options: ['Opening + Purchases + Closing', 'Opening + Purchases - Closing', 'Purchases - Opening + Closing', 'Sales - Opening'], correctIndex: 1 },
  { id: 'q44-4', chapterId: 44, question: 'In a period of rising prices, FIFO results in:', options: ['Higher COGS and lower closing stock', 'Lower COGS and higher closing stock', 'Same COGS as weighted average always', 'Zero closing stock'], correctIndex: 1 },
  { id: 'q44-5', chapterId: 44, question: 'Net realisable value is:', options: ['Selling price plus costs to complete', 'Estimated selling price less costs to sell', 'Cost plus normal profit', 'Market price'], correctIndex: 1 },
  { id: 'q44-6', chapterId: 44, question: 'The perpetual inventory system updates records:', options: ['Only at year end', 'Continuously after each receipt and issue', 'Monthly only', 'When stock is lost'], correctIndex: 1 },

  // ===== Chapter 45 =====
  { id: 'q45-1', chapterId: 45, question: 'A current ratio of 2:1 means current assets are twice:', options: ['Total assets', 'Current liabilities', 'Fixed assets', 'Share capital'], correctIndex: 1 },
  { id: 'q45-2', chapterId: 45, question: 'The quick ratio excludes from current assets:', options: ['Cash', 'Debtors', 'Inventory', 'Bank balance'], correctIndex: 2 },
  { id: 'q45-3', chapterId: 45, question: 'Return on capital employed (ROCE) is:', options: ['Net profit / Sales', 'PBIT / Capital employed', 'Sales / Fixed assets', 'EPS / Market price'], correctIndex: 1 },
  { id: 'q45-4', chapterId: 45, question: 'Earnings per share (EPS) is computed as:', options: ['Net profit / Total equity', 'Profit available to equity / Number of equity shares', 'Dividend / Share', 'Sales / Shares'], correctIndex: 1 },
  { id: 'q45-5', chapterId: 45, question: 'Debt-equity ratio measures:', options: ['Liquidity', 'Long-term solvency / leverage', 'Profitability', 'Activity'], correctIndex: 1 },
  { id: 'q45-6', chapterId: 45, question: 'Gross profit ratio is gross profit expressed as a percentage of:', options: ['Net worth', 'Net sales', 'Fixed assets', 'Capital employed'], correctIndex: 1 },

  // ===== Chapter 46 =====
  { id: 'q46-1', chapterId: 46, question: 'The Indian Partnership Act was enacted in:', options: ['1932', '1956', '1872', '2013'], correctIndex: 0 },
  { id: 'q46-2', chapterId: 46, question: 'If the partnership deed is silent, profits are shared:', options: ['In capital ratio', 'Equally', 'By the managing partner', 'Based on seniority'], correctIndex: 1 },
  { id: 'q46-3', chapterId: 46, question: 'Under the fluctuating capital method, the capital account is adjusted for:', options: ['Only the initial contribution', 'All transactions including profit, drawings and current accounts combined', 'Only interest on capital', 'Only salary'], correctIndex: 1 },
  { id: 'q46-4', chapterId: 46, question: 'Interest on capital is allowed only when:', options: ['The deed provides for it', 'Always by law', 'The firm is profitable', 'A partner demands it'], correctIndex: 0 },
  { id: 'q46-5', chapterId: 46, question: 'Goodwill on admission of a partner is compensated by the:', options: ['New partner to old partners', 'Old partners to new partner', 'Firm to government', 'Bank'], correctIndex: 0 },
  { id: 'q46-6', chapterId: 46, question: 'A guarantee of profit to a partner ensures the partner receives at least the:', options: ['Firm\'s total profit', 'Guaranteed amount even if share is less', 'Interest on capital', 'Salary only'], correctIndex: 1 },

  // ===== Chapter 47 =====
  { id: 'q47-1', chapterId: 47, question: 'In the debtors system of branch accounting, the head office credits the branch with:', options: ['Cash sales only', 'All remittances and expenses', 'Only goods sent', 'Only bad debts'], correctIndex: 1 },
  { id: 'q47-2', chapterId: 47, question: 'When goods are invoiced to a branch at cost-plus, the loading is:', options: ['A liability', 'Written back on closing stock', 'Added to sales', 'Ignored'], correctIndex: 1 },
  { id: 'q47-3', chapterId: 47, question: 'The stock and debtors system records branch transactions through:', options: ['Only a cash book', 'Branch stock and branch debtors accounts', 'A single bank account', 'The head office capital account'], correctIndex: 1 },
  { id: 'q47-4', chapterId: 47, question: 'Inter-departmental transfers are recorded at:', options: ['Cost only', 'Selling price or transfer price', 'Market value only', 'Zero'], correctIndex: 1 },
  { id: 'q47-5', chapterId: 47, question: 'Common expenses of departments are allocated using:', options: ['A single lump sum', 'A suitable apportionment basis', 'Random allocation', 'The chairman\'s choice'], correctIndex: 1 },
  { id: 'q47-6', chapterId: 47, question: 'A branch maintained entirely on the stock and debtors basis is suitable when:', options: ['The branch is independent', 'The branch does not keep full books', 'The branch is a foreign subsidiary', 'There is no inventory'], correctIndex: 1 },

  // ===== Chapter 48 =====
  { id: 'q48-1', chapterId: 48, question: 'Accounting Standards in India are issued by the:', options: ['SEBI', 'ICAI (through ASB), now under NFRA oversight', 'RBI', 'Ministry of Finance'], correctIndex: 1 },
  { id: 'q48-2', chapterId: 48, question: 'AS 1 deals with:', options: ['Revenue recognition', 'Disclosure of accounting policies', 'Depreciation', 'Inventories'], correctIndex: 1 },
  { id: 'q48-3', chapterId: 48, question: 'Revenue is recognised under AS 9 when it is:', options: ['Earned and realised or realisable', 'Only received in cash', 'Booked as order', 'Invoiced at any time'], correctIndex: 0 },
  { id: 'q48-4', chapterId: 48, question: 'Ind AS are converged with:', options: ['US GAAP', 'IFRS', 'UK GAAP', 'Japanese GAAP'], correctIndex: 1 },
  { id: 'q48-5', chapterId: 48, question: 'Compliance with Accounting Standards is:', options: ['Optional for all', 'Mandatory for specified enterprises', 'Only for listed companies abroad', 'Never required'], correctIndex: 1 },
  { id: 'q48-6', chapterId: 48, question: 'A business entity following a wrong but disclosed accounting policy is covered by:', options: ['AS 1', 'AS 2', 'AS 26', 'AS 22'], correctIndex: 0 },

  // ===== Chapter 49 =====
  { id: 'q49-1', chapterId: 49, question: 'The Income-tax Act in India was enacted in:', options: ['1961', '1947', '1936', '1956'], correctIndex: 0 },
  { id: 'q49-2', chapterId: 49, question: 'The financial year for income tax runs from:', options: ['Jan 1 to Dec 31', 'Apr 1 to Mar 31', 'Jul 1 to Jun 30', 'Oct 1 to Sep 30'], correctIndex: 1 },
  { id: 'q49-3', chapterId: 49, question: 'Deduction under Section 80C is available up to:', options: ['₹50,000', '₹1,00,000', '₹1,50,000', '₹2,50,000'], correctIndex: 2 },
  { id: 'q49-4', chapterId: 49, question: 'Rebate under Section 87A is available to:', options: ['All taxpayers', 'Resident individuals with income up to prescribed limit', 'Only companies', 'Non-residents'], correctIndex: 1 },
  { id: 'q49-5', chapterId: 49, question: 'Health and education cess is levied at:', options: ['1%', '2%', '4%', '10%'], correctIndex: 2 },
  { id: 'q49-6', chapterId: 49, question: 'Advance tax is generally payable when the estimated tax liability exceeds:', options: ['₹1,000', '₹5,000', '₹10,000', '₹25,000'], correctIndex: 2 },

  // ===== Chapter 50 =====
  { id: 'q50-1', chapterId: 50, question: 'TDS means tax deducted at source and is deducted by the:', options: ['Taxpayer only', 'Deductor on making payment', 'Bank on deposit', 'Auditor'], correctIndex: 1 },
  { id: 'q50-2', chapterId: 50, question: 'TCS means tax collected at source and is collected by the:', options: ['Buyer', 'Seller on receipt of consideration', 'Government directly', 'Employer'], correctIndex: 1 },
  { id: 'q50-3', chapterId: 50, question: 'A person deducting TDS must have a:', options: ['PAN', 'TAN', 'GSTIN', 'Aadhaar only'], correctIndex: 1 },
  { id: 'q50-4', chapterId: 50, question: 'TDS on payment to a contractor is covered under Section:', options: ['192', '194C', '194J', '195'], correctIndex: 1 },
  { id: 'q50-5', chapterId: 50, question: 'Credit for TDS is reflected in:', options: ['Form 16 only', 'Form 26AS', 'Balance sheet', 'GST return'], correctIndex: 1 },
  { id: 'q50-6', chapterId: 50, question: 'Delay in depositing TDS attracts:', options: ['No penalty', 'Interest for each month of delay', 'A fixed fine only', 'Imprisonment without interest'], correctIndex: 1 },

  // ===== Chapter 51 =====
  { id: 'q51-1', chapterId: 51, question: 'Standard deduction available from salary income is:', options: ['₹40,000', '₹50,000', '₹1,50,000', '₹2,00,000'], correctIndex: 1 },
  { id: 'q51-2', chapterId: 51, question: 'HRA exemption is the least of three amounts, one of which is:', options: ['Actual rent paid minus 10% of salary', 'Gross salary', 'Leave travel allowance', 'Gratuity'], correctIndex: 0 },
  { id: 'q51-3', chapterId: 51, question: 'For a let-out house property, income is computed as annual value less:', options: ['Municipal taxes and 30% standard deduction and interest', 'Only municipal taxes', 'Only 30%', 'Full rent received'], correctIndex: 0 },
  { id: 'q51-4', chapterId: 51, question: 'Interest on housing loan for a self-occupied property is deductible up to:', options: ['₹1,50,000', '₹2,00,000', '₹50,000', '₹5,00,000'], correctIndex: 1 },
  { id: 'q51-5', chapterId: 51, question: 'Municipal taxes on a let-out property are deductible:', options: ['Never', 'From annual value if borne by owner', 'From salary', 'As a capital expense'], correctIndex: 1 },
  { id: 'q51-6', chapterId: 51, question: 'A self-occupied house property is deemed to have annual value of:', options: ['Full market rent', 'Nil', 'Standard rent', 'Circle rate value'], correctIndex: 1 },

  // ===== Chapter 52 =====
  { id: 'q52-1', chapterId: 52, question: 'GST was introduced in India with effect from:', options: ['1 April 2017', '1 July 2017', '1 January 2018', '1 April 2018'], correctIndex: 1 },
  { id: 'q52-2', chapterId: 52, question: 'For an intra-state supply, the tax levied is:', options: ['IGST only', 'CGST plus SGST', 'Cess only', 'No tax'], correctIndex: 1 },
  { id: 'q52-3', chapterId: 52, question: 'For an inter-state supply, the tax levied is:', options: ['CGST plus SGST', 'IGST', 'UTGST', 'VAT'], correctIndex: 1 },
  { id: 'q52-4', chapterId: 52, question: 'The standard GST slab rates include all except:', options: ['5%', '12%', '18%', '22%'], correctIndex: 3 },
  { id: 'q52-5', chapterId: 52, question: 'A registered person can claim Input Tax Credit of tax paid on:', options: ['Only personal goods', 'Business inputs used in taxable supplies', 'Fines and penalties', 'Goods used for charity'], correctIndex: 1 },
  { id: 'q52-6', chapterId: 52, question: 'The composition scheme is available to businesses with turnover up to:', options: ['₹20 lakh', '₹1.5 crore', '₹5 crore', '₹10 crore'], correctIndex: 1 },

  // ===== Chapter 53 =====
  { id: 'q53-1', chapterId: 53, question: 'GSTR-1 is the return for:', options: ['Summary of tax paid', 'Outward supplies (sales)', 'Inward supplies', 'Annual accounts'], correctIndex: 1 },
  { id: 'q53-2', chapterId: 53, question: 'GSTR-1 is generally due on the:', options: ['5th', '11th', '20th', '28th'], correctIndex: 1 },
  { id: 'q53-3', chapterId: 53, question: 'GSTR-3B is a summary return generally due on the:', options: ['10th', '15th', '20th', '25th'], correctIndex: 2 },
  { id: 'q53-4', chapterId: 53, question: 'GSTR-2B is an:', options: ['Editable return', 'Auto-drafted static statement of ITC', 'Bank statement', 'Annual return'], correctIndex: 1 },
  { id: 'q53-5', chapterId: 53, question: 'Net GST payable is computed as:', options: ['Output tax plus ITC', 'Output tax minus admissible ITC', 'Input tax only', 'Cess only'], correctIndex: 1 },
  { id: 'q53-6', chapterId: 53, question: 'The annual GST return is:', options: ['GSTR-1', 'GSTR-3B', 'GSTR-9', 'GSTR-2A'], correctIndex: 2 },

  // ===== Chapter 54 =====
  { id: 'q54-1', chapterId: 54, question: 'An Invoice Reference Number (IRN) is generated for:', options: ['All B2C invoices only', 'B2B invoices above the e-invoicing threshold', 'Nil-rated supplies only', 'Exports of services only'], correctIndex: 1 },
  { id: 'q54-2', chapterId: 54, question: 'An e-invoice is a:', options: ['Paper invoice stamped', 'Standard signed JSON with QR code', 'Handwritten bill', 'Bank advice'], correctIndex: 1 },
  { id: 'q54-3', chapterId: 54, question: 'An e-way bill is required for movement of goods exceeding value of:', options: ['₹10,000', '₹50,000', '₹1,00,000', '₹5,00,000'], correctIndex: 1 },
  { id: 'q54-4', chapterId: 54, question: 'Part A of an e-way bill contains:', options: ['Vehicle number', 'Details of goods, consignor and consignee', 'Driver licence', 'Only the PIN'], correctIndex: 1 },
  { id: 'q54-5', chapterId: 54, question: 'Part B of an e-way bill contains:', options: ['Invoice value', 'Vehicle / transporter details', 'Tax rates', 'Buyer address'], correctIndex: 1 },
  { id: 'q54-6', chapterId: 54, question: 'The validity of an e-way bill is generally 1 day per:', options: ['100 km', '200 km', '500 km', '1000 km'], correctIndex: 1 },

  // ===== Chapter 55 =====
  { id: 'q55-1', chapterId: 55, question: 'Authorised capital is the:', options: ['Capital actually paid', 'Maximum capital a company may issue', 'Called-up capital', 'Reserve capital'], correctIndex: 1 },
  { id: 'q55-2', chapterId: 55, question: 'When shares are issued at a price above face value, it is an issue at:', options: ['Par', 'Premium', 'Discount', 'Surrender'], correctIndex: 1 },
  { id: 'q55-3', chapterId: 55, question: 'Securities premium received on share issue is credited to:', options: ['Revenue reserve', 'Securities premium account', 'Cash directly', 'Dividend account'], correctIndex: 1 },
  { id: 'q55-4', chapterId: 55, question: 'Calls in arrears arise when a shareholder:', options: ['Pays in advance', 'Fails to pay a call money due', 'Forfeits shares', 'Sells shares'], correctIndex: 1 },
  { id: 'q55-5', chapterId: 55, question: 'On forfeiture of shares, the share capital account is debited with the:', options: ['Called-up amount', 'Paid-up amount only', 'Entire authorised capital', 'Securities premium'], correctIndex: 0 },
  { id: 'q55-6', chapterId: 55, question: 'Reissue of forfeited shares cannot be made at a price below the amount that was:', options: ['Forfeited', 'Called-up but not paid, less discount allowed', 'Paid-up fully', 'Authorised'], correctIndex: 1 },

  // ===== Chapter 56 =====
  { id: 'q56-1', chapterId: 56, question: 'Under Ind AS 110, control requires power over the investee, exposure to variable returns and the:', options: ['Ability to influence friends', 'Ability to use power to affect returns', 'Right to vote once', 'Ownership of land'], correctIndex: 1 },
  { id: 'q56-2', chapterId: 56, question: 'Goodwill on consolidation arises when the purchase consideration exceeds the:', options: ['Book value of net assets', 'Fair value of identifiable net assets acquired', 'Authorised capital', 'Revenue'], correctIndex: 1 },
  { id: 'q56-3', chapterId: 56, question: 'Intra-group balances are:', options: ['Added to revenue', 'Eliminated on consolidation', 'Shown as contingent', 'Ignored'], correctIndex: 1 },
  { id: 'q56-4', chapterId: 56, question: 'Unrealised profit on intra-group sales is:', options: ['Always recognised', 'Eliminated to the extent of the group\'s interest', 'Added to opening stock', 'Booked as income'], correctIndex: 1 },
  { id: 'q56-5', chapterId: 56, question: 'Non-controlling interest (NCI) represents the portion of equity owned by:', options: ['The parent only', 'Minority shareholders', 'The government', 'Creditors'], correctIndex: 1 },
  { id: 'q56-6', chapterId: 56, question: 'Consolidated financial statements combine the parent and its:', options: ['Associates only', 'Subsidiaries', 'Competitors', 'Customers'], correctIndex: 1 },

  // ===== Chapter 57 =====
  { id: 'q57-1', chapterId: 57, question: 'Under Ind AS 109, a financial asset held to collect contractual cash flows that are SPPI is measured at:', options: ['FVTPL', 'Amortised cost', 'FVTOCI', 'Cost'], correctIndex: 1 },
  { id: 'q57-2', chapterId: 57, question: 'The SPPI test stands for:', options: ['Specified, Periodic, Interest', 'Solely Payments of Principal and Interest', 'Stable Principal and Interest', 'Single Premium and Interest'], correctIndex: 1 },
  { id: 'q57-3', chapterId: 57, question: 'Ind AS 115 revenue recognition follows a:', options: ['One-step model', 'Five-step model', 'Three-step model', 'No model'], correctIndex: 1 },
  { id: 'q57-4', chapterId: 57, question: 'A provision under Ind AS 37 is a:', options: ['Contingent asset', 'Liability of uncertain timing or amount', 'Equity item', 'Revenue'], correctIndex: 1 },
  { id: 'q57-5', chapterId: 57, question: 'A contingent liability is disclosed but not recognised unless it is:', options: ['Possible and measurable reliably', 'Probable and reliably estimable', 'Remote', 'Always recognised'], correctIndex: 1 },
  { id: 'q57-6', chapterId: 57, question: 'Expected credit loss (ECL) is the basis for measuring impairment under:', options: ['Ind AS 109', 'Ind AS 2', 'AS 10', 'Ind AS 110'], correctIndex: 0 },

  // ===== Chapter 58 =====
  { id: 'q58-1', chapterId: 58, question: 'The primary objective of an audit is to express an opinion on the:', options: ['Market value of shares', 'True and fair view of financial statements', 'Tax payable', 'Employee salary'], correctIndex: 1 },
  { id: 'q58-2', chapterId: 58, question: 'Auditors must obtain evidence that is:', options: ['Few and selective', 'Sufficient and appropriate', 'Only oral', 'Internal only'], correctIndex: 1 },
  { id: 'q58-3', chapterId: 58, question: 'Vouching is concerned with verification of:', options: ['Physical assets', 'Transactions and documentary evidence', 'Valuation', 'Ratios'], correctIndex: 1 },
  { id: 'q58-4', chapterId: 58, question: 'Verification is concerned with confirming the existence and ownership of:', options: ['Sales invoices', 'Assets and liabilities', 'Provisions only', 'Dividends'], correctIndex: 1 },
  { id: 'q58-5', chapterId: 58, question: 'Audit risk is generally expressed as:', options: ['Inherent x Control x Detection risk', 'Materiality x Risk', 'Sampling x Error', 'Fraud x Error'], correctIndex: 0 },
  { id: 'q58-6', chapterId: 58, question: 'Standards on Auditing (SAs) in India are issued by the:', options: ['SEBI', 'ICAI', 'RBI', 'MCA only'], correctIndex: 1 },

  // ===== Chapter 59 =====
  { id: 'q59-1', chapterId: 59, question: 'An unmodified audit opinion means the financial statements are:', options: ['Wrong', 'True and fair in all material respects', 'Prepared by law', 'Always profit-making'], correctIndex: 1 },
  { id: 'q59-2', chapterId: 59, question: 'A qualified opinion is expressed when there is a material but not pervasive:', options: ['Agreement', 'Misstatement or scope limitation', 'Profit', 'Dividend'], correctIndex: 1 },
  { id: 'q59-3', chapterId: 59, question: 'An adverse opinion is given when misstatements are:', options: ['Immaterial', 'Material and pervasive', 'Only suspected', 'Remote'], correctIndex: 1 },
  { id: 'q59-4', chapterId: 59, question: 'A disclaimer of opinion is issued when the auditor cannot obtain:', options: ['A signature', 'Sufficient appropriate evidence (scope limitation)', 'A profit', 'A dividend'], correctIndex: 1 },
  { id: 'q59-5', chapterId: 59, question: 'A company auditor is appointed under Section:', options: ['139', '143', '148', '149'], correctIndex: 0 },
  { id: 'q59-6', chapterId: 59, question: 'CARO reporting is required under Section:', options: ['139', '143', '148', '135'], correctIndex: 1 },

  // ===== Chapter 60 =====
  { id: 'q60-1', chapterId: 60, question: 'As per Section 2(h) of the Indian Contract Act, a contract is an agreement:', options: ['Between friends', 'Enforceable by law', 'Written only', 'For free'], correctIndex: 1 },
  { id: 'q60-2', chapterId: 60, question: 'Section 10 states the essentials of a valid contract, which include:', options: ['Free consent, lawful consideration and lawful object', 'Only writing', 'Only stamps', 'Only witnesses'], correctIndex: 0 },
  { id: 'q60-3', chapterId: 60, question: 'A contract which is enforceable at the option of one party is:', options: ['Void', 'Voidable', 'Valid for both', 'Illegal'], correctIndex: 1 },
  { id: 'q60-4', chapterId: 60, question: 'A contract with unlawful object is:', options: ['Valid', 'Void', 'Voidable', 'Quasi'], correctIndex: 1 },
  { id: 'q60-5', chapterId: 60, question: 'Damages for breach of contract are governed by Section:', options: ['73', '10', '2(h)', '25'], correctIndex: 0 },
  { id: 'q60-6', chapterId: 60, question: 'Quasi-contracts are obligations imposed by:', options: ['Free will', 'Law to prevent unjust enrichment', 'Agreement', 'Custom'], correctIndex: 1 },

  // ===== Chapter 61 =====
  { id: 'q61-1', chapterId: 61, question: 'Under Section 4 of the Sale of Goods Act, a sale is the transfer of property in goods for a:', options: ['Gift', 'Price', 'Loan', 'Lease'], correctIndex: 1 },
  { id: 'q61-2', chapterId: 61, question: 'A condition is a stipulation that is:', options: ['Minor only', 'Essential to the main purpose', 'Optional', 'Written only'], correctIndex: 1 },
  { id: 'q61-3', chapterId: 61, question: 'A breach of warranty entitles the buyer to:', options: ['Rescind the contract', 'Claim damages only', 'Nothing', 'Imprison the seller'], correctIndex: 1 },
  { id: 'q61-4', chapterId: 61, question: 'An implied condition as to title means the seller has the right to:', options: ['Delay delivery', 'Sell and transfer ownership', 'Refuse payment', 'Change price'], correctIndex: 1 },
  { id: 'q61-5', chapterId: 61, question: 'An unpaid seller has the right of lien, which means:', options: ['Reselling freely', 'Retaining possession until payment', 'Suing the bank', 'Cancelling the licence'], correctIndex: 1 },
  { id: 'q61-6', chapterId: 61, question: 'Stoppage in transit allows the unpaid seller to recover goods while they are with the:', options: ['Buyer', 'Carrier in transit', 'Bank', 'Government'], correctIndex: 1 },

  // ===== Chapter 62 =====
  { id: 'q62-1', chapterId: 62, question: 'A promissory note is an instrument containing an unconditional promise to:', options: ['Order payment', 'Pay a certain sum of money', 'Deliver goods', 'Lend shares'], correctIndex: 1 },
  { id: 'q62-2', chapterId: 62, question: 'A cheque is defined under Section:', options: ['6', '9', '138', '2'], correctIndex: 0 },
  { id: 'q62-3', chapterId: 62, question: 'A holder in due course is defined under Section:', options: ['6', '9', '10', '138'], correctIndex: 1 },
  { id: 'q62-4', chapterId: 62, question: 'Dishonour of a cheque for insufficiency of funds is an offence under Section:', options: ['10', '138', '6', '9'], correctIndex: 1 },
  { id: 'q62-5', chapterId: 62, question: 'Endorsement means signing on the instrument for the purpose of:', options: ['Cancelling it', 'Transferring the right', 'Destroying it', 'Tax payment'], correctIndex: 1 },
  { id: 'q62-6', chapterId: 62, question: 'A bill of exchange is drawn by the:', options: ['Debtor', 'Creditor (drawer)', 'Bank only', 'Government'], correctIndex: 1 },

  // ===== Chapter 63 =====
  { id: 'q63-1', chapterId: 63, question: 'Under Section 4 of the Partnership Act, a partnership is the relation between persons who agree to share the profits of a business carried on by:', options: ['All or any of them acting for all', 'Only a manager', 'The government', 'A single owner'], correctIndex: 0 },
  { id: 'q63-2', chapterId: 63, question: 'Mutual agency means each partner is an agent of:', options: ['Only himself', 'The firm and other partners', 'The bank', 'The Registrar'], correctIndex: 1 },
  { id: 'q63-3', chapterId: 63, question: 'A minor may be admitted to the benefits of a partnership under Section:', options: ['4', '30', '10', '25'], correctIndex: 1 },
  { id: 'q63-4', chapterId: 63, question: 'Under the LLP Act 2008, a Limited Liability Partnership is a:', options: ['Unincorporated body', 'Separate legal entity with limited liability', 'Sole proprietorship', 'Hindu undivided family'], correctIndex: 1 },
  { id: 'q63-5', chapterId: 63, question: 'Dissolution of a partnership ends the:', options: ['Firm\'s legal entity forever', 'Relationship between partners', 'Bank account', 'Registration'], correctIndex: 1 },
  { id: 'q63-6', chapterId: 63, question: 'In an LLP, the liability of partners is generally:', options: ['Unlimited personally', 'Limited to their contribution', 'Joint with the government', 'Shared with customers'], correctIndex: 1 },

  // ===== Chapter 64 =====
  { id: 'q64-1', chapterId: 64, question: 'The Factories Act 1948 applies to factories using power with at least:', options: ['5 workers', '10 workers', '20 workers', '50 workers'], correctIndex: 1 },
  { id: 'q64-2', chapterId: 64, question: 'The maximum working hours under the Factories Act are:', options: ['8 hours/day, 40/week', '9 hours/day, 48/week', '12 hours/day, 60/week', '6 hours/day, 30/week'], correctIndex: 1 },
  { id: 'q64-3', chapterId: 64, question: 'Overtime wages are payable at:', options: ['Normal rate', 'Double the normal rate', 'Half rate', 'Triple rate'], correctIndex: 1 },
  { id: 'q64-4', chapterId: 64, question: 'Earned/annual leave is generally accrued at the rate of one day for every:', options: ['10 days worked', '20 days worked', '30 days worked', '5 days worked'], correctIndex: 1 },
  { id: 'q64-5', chapterId: 64, question: 'The Payment of Wages Act 1936 requires wages to be paid within:', options: ['1st of month', '7th or 10th of following month', 'Last day of month', 'End of quarter'], correctIndex: 1 },
  { id: 'q64-6', chapterId: 64, question: 'Fines imposed on workers under the Act are limited to:', options: ['1% of wages', '3% of wages', '10% of wages', 'No limit'], correctIndex: 1 },

  // ===== Chapter 65 =====
  { id: 'q65-1', chapterId: 65, question: 'Under the EPF scheme, the employee\'s contribution is:', options: ['8%', '10%', '12%', '15%'], correctIndex: 2 },
  { id: 'q65-2', chapterId: 65, question: 'ESIC coverage applies to employees with wages up to:', options: ['₹15,000', '₹18,000', '₹21,000', '₹25,000'], correctIndex: 2 },
  { id: 'q65-3', chapterId: 65, question: 'The employer\'s ESIC contribution rate is approximately:', options: ['0.75%', '1.75%', '3.25%', '12%'], correctIndex: 2 },
  { id: 'q65-4', chapterId: 65, question: 'Gratuity under the Payment of Gratuity Act becomes payable after continuous service of:', options: ['1 year', '3 years', '5 years', '10 years'], correctIndex: 2 },
  { id: 'q65-5', chapterId: 65, question: 'Gratuity for each completed year is computed as 15/26 of the last drawn wages for:', options: ['15 days', '26 days', '30 days', '7 days'], correctIndex: 0 },
  { id: 'q65-6', chapterId: 65, question: 'The formula for gratuity includes the factor 15/26 multiplied by:', options: ['Daily wages only', 'Last drawn wages x years of service', 'Basic only', 'Bonus'], correctIndex: 1 },

  // ===== Chapter 66 =====
  { id: 'q66-1', chapterId: 66, question: 'A private company can have a maximum of:', options: ['50 members', '200 members', '7 members', 'Unlimited members'], correctIndex: 1 },
  { id: 'q66-2', chapterId: 66, question: 'The minimum number of members to form a public company is:', options: ['2', '3', '7', '12'], correctIndex: 2 },
  { id: 'q66-3', chapterId: 66, question: 'The memorandum of association defines the:', options: ['Internal rules', 'Objects and scope of the company', 'Dividend policy', 'Auditor\'s duties'], correctIndex: 1 },
  { id: 'q66-4', chapterId: 66, question: 'The articles of association contain the:', options: ['Capital clause', 'Internal management regulations', 'Registered office', 'Object clause'], correctIndex: 1 },
  { id: 'q66-5', chapterId: 66, question: 'Corporate Social Responsibility (CSR) under Section 135 applies to companies exceeding prescribed net worth/profit and requires spending of:', options: ['1% of net profit', '2% of average net profit', '5% of turnover', '10% of capital'], correctIndex: 1 },
  { id: 'q66-6', chapterId: 66, question: 'Cost audit is mandated under Section:', options: ['139', '143', '148', '149'], correctIndex: 2 },

  // ===== Chapter 67 =====
  { id: 'q67-1', chapterId: 67, question: 'Business ethics refers to the:', options: ['Legal loopholes', 'Moral principles guiding conduct', 'Tax planning only', 'Marketing tricks'], correctIndex: 1 },
  { id: 'q67-2', chapterId: 67, question: 'Corporate governance is the system of:', options: ['Direction and control', 'Only profit making', 'Tax evasion', 'Advertising'], correctIndex: 0 },
  { id: 'q67-3', chapterId: 67, question: 'Stakeholders of a company include all except:', options: ['Shareholders', 'Employees', 'Competitors', 'Customers'], correctIndex: 2 },
  { id: 'q67-4', chapterId: 67, question: 'Key principles of corporate governance include transparency, accountability and:', options: ['Secrecy', 'Fairness', 'Nepotism', 'Favouritism'], correctIndex: 1 },
  { id: 'q67-5', chapterId: 67, question: 'An audit committee typically includes:', options: ['Only executives', 'Independent directors', 'Only shareholders', 'Only workers'], correctIndex: 1 },
  { id: 'q67-6', chapterId: 67, question: 'A whistle-blower is a person who reports:', options: ['Rumours', 'Unethical or illegal practices', 'Profits', 'Dividends'], correctIndex: 1 },

  // ===== Chapter 68 =====
  { id: 'q68-1', chapterId: 68, question: 'A cost centre is a:', options: ['Unit of product', 'Location or person for which cost is ascertained', 'Profit centre only', 'Sales outlet'], correctIndex: 1 },
  { id: 'q68-2', chapterId: 68, question: 'The elements of cost are material, labour and:', options: ['Profit', 'Expenses', 'Revenue', 'Capital'], correctIndex: 1 },
  { id: 'q68-3', chapterId: 68, question: 'Prime cost is the sum of direct material, direct labour and:', options: ['Direct expenses', 'Factory overhead', 'Administration overhead', 'Selling overhead'], correctIndex: 0 },
  { id: 'q68-4', chapterId: 68, question: 'Direct costs are those that can be:', options: ['Shared easily', 'Identified with a specific cost object', 'Ignored', 'Capitalised only'], correctIndex: 1 },
  { id: 'q68-5', chapterId: 68, question: 'Job costing, batch costing and process costing are examples of costing:', options: ['Techniques', 'Methods', 'Standards', 'Budgets'], correctIndex: 1 },
  { id: 'q68-6', chapterId: 68, question: 'Standard costing and activity-based costing are examples of costing:', options: ['Methods', 'Techniques', 'Systems of books', 'Elements'], correctIndex: 1 },

  // ===== Chapter 69 =====
  { id: 'q69-1', chapterId: 69, question: 'The Economic Order Quantity (EOQ) formula is sqrt(2DO/C), where D stands for:', options: ['Discount', 'Annual demand', 'Duty', 'Duration'], correctIndex: 1 },
  { id: 'q69-2', chapterId: 69, question: 'In the EOQ formula, C represents the:', options: ['Carrying cost per unit', 'Ordering cost', 'Cost of material', 'Capital'], correctIndex: 0 },
  { id: 'q69-3', chapterId: 69, question: 'Re-order level is generally computed as maximum consumption multiplied by:', options: ['Maximum re-order period', 'Minimum period', 'Average sales', 'Lead time of supplier'], correctIndex: 0 },
  { id: 'q69-4', chapterId: 69, question: 'ABC analysis classifies inventory into categories based on:', options: ['Colour', 'Value and importance', 'Weight', 'Supplier'], correctIndex: 1 },
  { id: 'q69-5', chapterId: 69, question: 'A bin card records the:', options: ['Only value', 'Quantity received, issued and balance of each bin', 'Profit', 'Sales price'], correctIndex: 1 },
  { id: 'q69-6', chapterId: 69, question: 'Carrying cost and ordering cost move in relation to order quantity as:', options: ['Both rise together', 'Carrying rises, ordering falls with larger orders', 'Both fall together', 'No relation'], correctIndex: 1 },

  // ===== Chapter 70 =====
  { id: 'q70-1', chapterId: 70, question: 'Direct labour cost is attributable to a specific:', options: ['Overhead', 'Job or cost unit', 'Advertisement', 'Rent'], correctIndex: 1 },
  { id: 'q70-2', chapterId: 70, question: 'Under the time rate system, wages depend on:', options: ['Output only', 'Time spent at fixed rate', 'Piece count only', 'Profit'], correctIndex: 1 },
  { id: 'q70-3', chapterId: 70, question: 'Under Halsey premium plan, the bonus is:', options: ['100% of time saved x rate', '50% of time saved x rate', '25% of wages', 'Nil'], correctIndex: 1 },
  { id: 'q70-4', chapterId: 70, question: 'The Rowan plan gives a bonus proportionate to the:', options: ['Time saved to time allowed', 'Piece rate only', 'Overtime', 'Profit'], correctIndex: 0 },
  { id: 'q70-5', chapterId: 70, question: 'Labour turnover rate can be measured by separation, replacement and:', options: ['Flux method', 'Profit method', 'Sales method', 'Cost method'], correctIndex: 0 },
  { id: 'q70-6', chapterId: 70, question: 'Idle time is classified as normal when it arises from:', options: ['Accident only', 'Expected unavoidable causes', 'Theft', 'Fraud'], correctIndex: 1 },

  // ===== Chapter 71 =====
  { id: 'q71-1', chapterId: 71, question: 'Allocation of overhead means charging it to a:', options: ['Shared cost', 'Single cost centre wholly', 'Revenue', 'Profit'], correctIndex: 1 },
  { id: 'q71-2', chapterId: 71, question: 'Apportionment of overhead means distributing it among several cost centres on a:', options: ['Random basis', 'Fair and equitable basis', 'Single basis', 'Profit basis'], correctIndex: 1 },
  { id: 'q71-3', chapterId: 71, question: 'Rent is commonly apportioned to departments based on:', options: ['Machine hours', 'Floor area', 'Labour hours', 'Sales'], correctIndex: 1 },
  { id: 'q71-4', chapterId: 71, question: 'A predetermined overhead rate equals budgeted overhead divided by:', options: ['Actual output', 'Budgeted base (hours/amount)', 'Profit', 'Capital'], correctIndex: 1 },
  { id: 'q71-5', chapterId: 71, question: 'When actual overhead exceeds absorbed overhead, there is:', options: ['Over-absorption', 'Under-absorption', 'No difference', 'A profit only'], correctIndex: 1 },
  { id: 'q71-6', chapterId: 71, question: 'The machine hour rate is a suitable basis for absorbing overhead in:', options: ['Manual offices', 'Machine-intensive departments', 'Sales teams', 'Administration'], correctIndex: 1 },

  // ===== Chapter 72 =====
  { id: 'q72-1', chapterId: 72, question: 'Prime cost equals direct material plus direct labour plus:', options: ['Factory overhead', 'Direct expenses', 'Admin overhead', 'Selling overhead'], correctIndex: 1 },
  { id: 'q72-2', chapterId: 72, question: 'Works cost is prime cost plus:', options: ['Administration overhead', 'Factory overhead', 'Selling overhead', 'Distribution overhead'], correctIndex: 1 },
  { id: 'q72-3', chapterId: 72, question: 'Cost of production equals works cost plus:', options: ['Factory overhead', 'Administration overhead', 'Selling overhead', 'Profit'], correctIndex: 1 },
  { id: 'q72-4', chapterId: 72, question: 'Total cost equals cost of production plus:', options: ['Selling and distribution overhead', 'Prime cost', 'Materials', 'Capital'], correctIndex: 0 },
  { id: 'q72-5', chapterId: 72, question: 'Profit is computed as sales minus:', options: ['Revenue', 'Total cost', 'Variable cost only', 'Materials'], correctIndex: 1 },
  { id: 'q72-6', chapterId: 72, question: 'Reconciliation of cost and financial accounts explains the differences between the two sets of:', options: ['Profits', 'Stocks only', 'Sales only', 'Capital'], correctIndex: 0 },

  // ===== Chapter 73 =====
  { id: 'q73-1', chapterId: 73, question: 'Job costing is suitable where work is done according to:', options: ['Mass production', 'Specific customer orders', 'Continuous process', 'Standard items'], correctIndex: 1 },
  { id: 'q73-2', chapterId: 73, question: 'In job costing, each job has a separate:', options: ['Bank account', 'Job cost sheet', 'Sales invoice only', 'Share certificate'], correctIndex: 1 },
  { id: 'q73-3', chapterId: 73, question: 'Batch costing is used where a batch consists of:', options: ['One unit', 'A group of identical units', 'Services only', 'No units'], correctIndex: 1 },
  { id: 'q73-4', chapterId: 73, question: 'Cost per unit in batch costing equals batch cost divided by:', options: ['Number of batches', 'Number of units in the batch', 'Labour hours', 'Machine hours'], correctIndex: 1 },
  { id: 'q73-5', chapterId: 73, question: 'Economic batch quantity balances set-up cost against:', options: ['Selling cost', 'Carrying cost', 'Profit', 'Tax'], correctIndex: 1 },
  { id: 'q73-6', chapterId: 73, question: 'A quotation to a customer is usually cost plus:', options: ['A markup for profit', 'A penalty', 'A tax only', 'Interest'], correctIndex: 0 },

  // ===== Chapter 74 =====
  { id: 'q74-1', chapterId: 74, question: 'Process costing is used for:', options: ['Custom jobs', 'Continuous homogeneous production', 'Services only', 'One-off contracts'], correctIndex: 1 },
  { id: 'q74-2', chapterId: 74, question: 'Cost per unit in process costing is total cost divided by completed units plus:', options: ['Opening stock', 'Equivalent units', 'Sales units', 'Scrap only'], correctIndex: 1 },
  { id: 'q74-3', chapterId: 74, question: 'Normal loss in a process is:', options: ['Charged to costing P&L', 'Spread over good units (no separate cost)', 'Capitalised', 'Ignored entirely'], correctIndex: 1 },
  { id: 'q74-4', chapterId: 74, question: 'Abnormal loss is transferred to the:', options: ['Cost of good units', 'Profit and loss account', 'Capital', 'Reserve'], correctIndex: 1 },
  { id: 'q74-5', chapterId: 74, question: 'Abnormal gain arises when actual loss is:', options: ['Equal to normal loss', 'Less than normal loss', 'More than normal loss', 'Zero always'], correctIndex: 1 },
  { id: 'q74-6', chapterId: 74, question: 'Joint products arise from a common process and are:', options: ['All worthless', 'Two or more products of similar value', 'Only by-products', 'Services'], correctIndex: 1 },

  // ===== Chapter 75 =====
  { id: 'q75-1', chapterId: 75, question: 'Contract costing is used for:', options: ['Retail sales', 'Long-term construction contracts', 'Process manufacturing', 'Services only'], correctIndex: 1 },
  { id: 'q75-2', chapterId: 75, question: 'Work certified represents work done and:', options: ['Rejected', 'Approved by the contractee', 'Unsold', 'Destroyed'], correctIndex: 1 },
  { id: 'q75-3', chapterId: 75, question: 'Notional profit is the difference between work certified value and:', options: ['Cash received', 'Cost of work certified', 'Total contract price', 'Retention'], correctIndex: 1 },
  { id: 'q75-4', chapterId: 75, question: 'AS 7 recognises revenue on construction contracts using the:', options: ['Completed contract only', 'Percentage of completion method', 'Cash basis', 'No method'], correctIndex: 1 },
  { id: 'q75-5', chapterId: 75, question: 'Retention money is held back by the contractee to:', options: ['Pay tax', 'Ensure performance / defect liability', 'Pay labour', 'Buy material'], correctIndex: 1 },
  { id: 'q75-6', chapterId: 75, question: 'A cost-plus contract prices the work at cost plus an agreed:', options: ['Penalty', 'Margin or fee', 'Discount', 'Refund'], correctIndex: 1 },

  // ===== Chapter 76 =====
  { id: 'q76-1', chapterId: 76, question: 'Operating costing is used by service organisations such as transport and:', options: ['Manufacturing', 'Hospitals and hotels', 'Mining', 'Trading'], correctIndex: 1 },
  { id: 'q76-2', chapterId: 76, question: 'For a transport undertaking, a common cost unit is:', options: ['Room-night', 'Passenger-kilometre or tonne-kilometre', 'Bed-day', 'Labour hour'], correctIndex: 1 },
  { id: 'q76-3', chapterId: 76, question: 'For a hospital, a common cost unit is:', options: ['Tonne-km', 'Bed-day or patient-day', 'Passenger-km', 'Machine hour'], correctIndex: 1 },
  { id: 'q76-4', chapterId: 76, question: 'Composite cost units combine two measures such as passenger and:', options: ['Kilometre', 'Share', 'Invoice', 'Loan'], correctIndex: 0 },
  { id: 'q76-5', chapterId: 76, question: 'Operating cost components typically include standing, running and:', options: ['Traffic charges', 'Factory overhead', 'Prime cost', 'Capital'], correctIndex: 0 },
  { id: 'q76-6', chapterId: 76, question: 'Cost per unit in operating costing is total cost divided by the relevant:', options: ['Number of units of service', 'Sales value', 'Profit', 'Capital'], correctIndex: 0 },

  // ===== Chapter 77 =====
  { id: 'q77-1', chapterId: 77, question: 'Marginal cost is the aggregate of:', options: ['Fixed cost', 'Variable cost per unit', 'Total cost', 'Sunk cost'], correctIndex: 1 },
  { id: 'q77-2', chapterId: 77, question: 'Contribution equals sales minus:', options: ['Fixed cost', 'Variable cost', 'Total cost', 'Capital'], correctIndex: 1 },
  { id: 'q77-3', chapterId: 77, question: 'Break-even point in units is fixed cost divided by:', options: ['Selling price', 'Contribution per unit', 'Variable cost', 'Profit'], correctIndex: 1 },
  { id: 'q77-4', chapterId: 77, question: 'The P/V ratio is contribution divided by sales, expressed as a:', options: ['Ratio only', 'Percentage', 'Currency', 'Fraction of fixed cost'], correctIndex: 1 },
  { id: 'q77-5', chapterId: 77, question: 'Margin of safety is the excess of actual sales over:', options: ['Budgeted sales', 'Break-even sales', 'Total cost', 'Variable cost'], correctIndex: 1 },
  { id: 'q77-6', chapterId: 77, question: 'A make-or-buy decision compares the cost of making internally with the:', options: ['Cost of buying from outside', 'Selling price', 'Profit', 'Tax'], correctIndex: 0 }
]
