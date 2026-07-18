import type { Flashcard } from './flashcards'

export const INTER_A_FLASHCARDS: Flashcard[] = [
  // Ch41 Cash Flow Statement (AS 3)
  { id: 'f41-1', chapterId: 41, front: 'Cash Flow Statement', back: 'A statement showing inflows and outflows of cash during a period, classified into operating, investing and financing activities under AS 3. Example: A company reports ₹5 lakh net cash from operating activities.' },
  { id: 'f41-2', chapterId: 41, front: 'Operating Activities', back: 'Cash flows from the principal revenue-generating activities of the business, such as cash from customers and payments to suppliers. Example: Receipt from sale of goods ₹10 lakh is an operating inflow.' },
  { id: 'f41-3', chapterId: 41, front: 'Investing Activities', back: 'Cash flows from acquisition and disposal of long-term assets and investments not included in cash equivalents. Example: Purchase of machinery for ₹3 lakh is an investing outflow.' },
  { id: 'f41-4', chapterId: 41, front: 'Financing Activities', back: 'Cash flows that change the size and composition of owners capital and borrowings of the entity. Example: Issue of shares for ₹2 lakh is a financing inflow.' },
  { id: 'f41-5', chapterId: 41, front: 'Indirect Method', back: 'A method that starts with net profit and adjusts for non-cash items and changes in working capital to arrive at cash from operations. Example: Add back depreciation ₹50,000 to net profit.' },
  { id: 'f41-6', chapterId: 41, front: 'Add-back of Depreciation', back: 'Depreciation is a non-cash expense deducted in profit, so it is added back while computing operating cash flow. Example: Net profit ₹1 lakh plus depreciation ₹20,000 equals ₹1.2 lakh before working-capital changes.' },

  // Ch42 Accounts Payable & Receivable
  { id: 'f42-1', chapterId: 42, front: 'Trade Receivables (Debtors)', back: 'Amounts due from customers for credit sales of goods or services. Example: Credit sale of ₹50,000 to A creates a debtor of ₹50,000.' },
  { id: 'f42-2', chapterId: 42, front: 'Trade Payables (Creditors)', back: 'Amounts a business owes to suppliers for credit purchases of goods. Example: Credit purchase of ₹30,000 from B creates a creditor of ₹30,000.' },
  { id: 'f42-3', chapterId: 42, front: 'Cash Discount vs Trade Discount', back: 'Trade discount is deducted from list price for bulk buying and is not recorded, while cash discount is allowed for prompt payment and is recorded. Example: 2% cash discount on payment within 15 days.' },
  { id: 'f42-4', chapterId: 42, front: 'Provision for Doubtful Debts', back: 'An estimated reserve created against likely non-recovery of some debtors, shown as a deduction from debtors. Example: 5% provision on ₹1 lakh debtors is ₹5,000.' },
  { id: 'f42-5', chapterId: 42, front: 'Bad Debts', back: 'Amounts confirmed as irrecoverable and written off from debtors. Example: ₹2,000 owed by an insolvent customer is written off as bad debt.' },
  { id: 'f42-6', chapterId: 42, front: 'Debtors Turnover Ratio', back: 'Credit sales divided by average debtors, showing how quickly receivables are collected. Example: Credit sales ₹12 lakh / average debtors ₹2 lakh = 6 times.' },

  // Ch43 Depreciation (AS 10)
  { id: 'f43-1', chapterId: 43, front: 'Depreciation', back: 'The systematic allocation of the depreciable amount of an asset over its useful life. Example: A ₹1 lakh machine with 10-year life depreciates ₹10,000 yearly under SLM.' },
  { id: 'f43-2', chapterId: 43, front: 'Straight Line Method (SLM)', back: 'Depreciation is charged equally each year as (Cost - Salvage) / Useful life. Example: ₹2 lakh asset, salvage ₹20,000, 9 years gives ₹20,000 p.a.' },
  { id: 'f43-3', chapterId: 43, front: 'Written Down Value (WDV) Method', back: 'A reducing-balance method charging a fixed rate on the declining book value each year. Example: 10% on ₹1 lakh gives ₹10,000 first year and ₹9,000 next year.' },
  { id: 'f43-4', chapterId: 43, front: 'Units of Production Method', back: 'Depreciation based on actual usage or output rather than time. Example: ₹5 lakh machine expected to run 5 lakh units charges ₹1 per unit produced.' },
  { id: 'f43-5', chapterId: 43, front: 'Salvage Value', back: 'The estimated residual value of an asset at the end of its useful life. Example: A vehicle costing ₹8 lakh may have salvage value ₹50,000.' },
  { id: 'f43-6', chapterId: 43, front: 'Accumulated Depreciation', back: 'A contra-asset account accumulating total depreciation charged to date, deducted from the asset cost. Example: After 3 years at ₹10,000 p.a., accumulated depreciation is ₹30,000.' },

  // Ch44 Inventory (AS 2)
  { id: 'f44-1', chapterId: 44, front: 'Inventory Valuation (AS 2)', back: 'Inventories are valued at the lower of cost and net realisable value. Example: Cost ₹100, NRV ₹90, so value at ₹90.' },
  { id: 'f44-2', chapterId: 44, front: 'FIFO', back: 'First-In-First-Out assumes earliest purchases are issued first, leaving latest prices in closing stock. Example: With rising prices, FIFO gives higher closing stock and profit.' },
  { id: 'f44-3', chapterId: 44, front: 'Weighted Average Cost', back: 'Cost of issues is the average of all units available, recalculated after each purchase. Example: 100 units @ ₹10 and 100 @ ₹12 gives average ₹11 per unit.' },
  { id: 'f44-4', chapterId: 44, front: 'LIFO not allowed in AS 2', back: 'Last-In-First-Out is not permitted under AS 2 for inventory valuation in India. Example: A company must use FIFO or weighted average instead of LIFO.' },
  { id: 'f44-5', chapterId: 44, front: 'Net Realisable Value (NRV)', back: 'Estimated selling price less estimated completion and selling costs. Example: Expected sale ₹120 less ₹20 costs gives NRV ₹100.' },
  { id: 'f44-6', chapterId: 44, front: 'Perpetual vs Periodic Inventory', back: 'Perpetual updates stock records after each transaction, while periodic counts stock only at period end. Example: A supermarket uses perpetual, a small shop may use periodic.' },

  // Ch45 Financial Ratios
  { id: 'f45-1', chapterId: 45, front: 'Current Ratio', back: 'Current assets divided by current liabilities, measuring short-term liquidity. Example: Current assets ₹4 lakh / current liabilities ₹2 lakh = 2:1.' },
  { id: 'f45-2', chapterId: 45, front: 'Quick Ratio (Acid Test)', back: 'Quick assets (current assets less inventory) divided by current liabilities. Example: (₹4 lakh - ₹1 lakh) / ₹2 lakh = 1.5:1.' },
  { id: 'f45-3', chapterId: 45, front: 'Debt-Equity Ratio', back: 'Total debt divided by shareholders equity, indicating financial leverage. Example: Debt ₹3 lakh / equity ₹6 lakh = 0.5:1.' },
  { id: 'f45-4', chapterId: 45, front: 'Gross Profit Ratio', back: 'Gross profit divided by net sales, expressed as a percentage. Example: Gross profit ₹2 lakh / sales ₹10 lakh = 20%.' },
  { id: 'f45-5', chapterId: 45, front: 'ROCE', back: 'Return on Capital Employed equals PBIT divided by capital employed, measuring profitability. Example: PBIT ₹1.5 lakh / capital employed ₹10 lakh = 15%.' },
  { id: 'f45-6', chapterId: 45, front: 'Earnings Per Share (EPS)', back: 'Profit available to equity shareholders divided by number of equity shares. Example: Profit ₹5 lakh / 50,000 shares = ₹10 per share.' },

  // Ch46 Partnership Accounts
  { id: 'f46-1', chapterId: 46, front: 'Partnership', back: 'An association of two or more persons who agree to share profits of a business carried on by all or any of them. Example: A, B and C share profits in 2:2:1.' },
  { id: 'f46-2', chapterId: 46, front: 'Profit-Sharing Ratio', back: 'The agreed ratio in which partners divide profits and losses. Example: Equal profit-sharing ratio of 1:1:1 among three partners.' },
  { id: 'f46-3', chapterId: 46, front: 'Fixed vs Fluctuating Capital', back: 'Fixed capital keeps capital accounts constant with a separate current account, while fluctuating capital combines all in one account. Example: Under fixed capital, drawings are debited to current account.' },
  { id: 'f46-4', chapterId: 46, front: 'Interest on Capital', back: 'Interest paid to partners on their capital as per the partnership deed, usually 6% or 12% p.a. Example: 12% on ₹1 lakh capital gives ₹12,000 interest.' },
  { id: 'f46-5', chapterId: 46, front: 'Goodwill', back: 'The excess earning capacity of a firm over normal return, an intangible asset. Example: Average profit ₹1 lakh x 3 years purchase = goodwill ₹3 lakh.' },
  { id: 'f46-6', chapterId: 46, front: 'Admission of a Partner', back: 'A new partner is admitted, requiring revaluation of assets and adjustment of goodwill and profit ratio. Example: On A’s admission, old ratio 2:1 changes to 2:1:1.' },

  // Ch47 Branch & Departmental Accounts
  { id: 'f47-1', chapterId: 47, front: 'Branch Account', back: 'An account recording all transactions of a branch to determine its profit or loss. Example: Head office debits branch with goods sent ₹2 lakh.' },
  { id: 'f47-2', chapterId: 47, front: 'Debtors System', back: 'A branch accounting method tracking goods sent, cash, and debtors to compute branch profit. Example: Branch debtors reduced from ₹50,000 to ₹40,000 after collections.' },
  { id: 'f47-3', chapterId: 47, front: 'Stock and Debtors System', back: 'Branch accounts maintained through stock, debtors and branch adjustment accounts. Example: Closing stock ₹30,000 and debtors ₹20,000 reconcile to branch profit.' },
  { id: 'f47-4', chapterId: 47, front: 'Invoice Price Loading', back: 'Head office sends goods to branch at a price above cost, with loading removed at year end. Example: Cost ₹80 loaded 25% gives invoice price ₹100.' },
  { id: 'f47-5', chapterId: 47, front: 'Departmental Apportionment', back: 'Common expenses are distributed among departments on a reasonable basis. Example: Rent apportioned by floor area: 60% to Dept A, 40% to Dept B.' },
  { id: 'f47-6', chapterId: 47, front: 'Inter-departmental Transfer', back: 'Goods transferred from one department to another are priced at a transfer rate. Example: Dept A sells ₹10,000 goods to Dept B at cost plus 10%.' },

  // Ch48 Accounting Standards
  { id: 'f48-1', chapterId: 48, front: 'Accounting Standard (AS)', back: 'Authoritative statements issued by ICAI prescribing accounting policies and disclosures. Example: AS 2 governs inventory valuation.' },
  { id: 'f48-2', chapterId: 48, front: 'AS 1 - Disclosure of Accounting Policies', back: 'Requires disclosure of significant accounting policies followed in preparing financial statements. Example: Stating that depreciation is charged on WDV basis.' },
  { id: 'f48-3', chapterId: 48, front: 'AS 9 - Revenue Recognition', back: 'Lays down criteria for recognising revenue from sales, services and interest/royalties. Example: Revenue recognised when goods are delivered and ownership passes.' },
  { id: 'f48-4', chapterId: 48, front: 'Ind AS', back: 'Indian Accounting Standards converged with IFRS, applicable to specified class of companies. Example: Ind AS 115 governs revenue from contracts with customers.' },
  { id: 'f48-5', chapterId: 48, front: 'Mandatory Compliance', back: 'Companies must follow applicable AS/Ind AS; non-compliance affects true & fair view. Example: A listed company must comply with Ind AS framework.' },
  { id: 'f48-6', chapterId: 48, front: 'True and Fair View', back: 'Financial statements must present a true and fair view of the state of affairs and profit. Example: Compliance with AS helps achieve a true and fair view.' },

  // Ch49 Income Tax Basics
  { id: 'f49-1', chapterId: 49, front: 'Income-tax Act 1961', back: 'The central law governing levy, collection and administration of income tax in India. Example: Section 80C deduction is claimed under this Act.' },
  { id: 'f49-2', chapterId: 49, front: 'Financial Year', back: 'The 12-month period from 1 April to 31 March for which income is computed. Example: FY 2024-25 runs from 1-4-2024 to 31-3-2025.' },
  { id: 'f49-3', chapterId: 49, front: 'Five Heads of Income', back: 'Income is classified into salaries, house property, business/profession, capital gains and other sources. Example: Rent received is taxed under house property.' },
  { id: 'f49-4', chapterId: 49, front: 'Chapter VI-A Deduction', back: 'Deductions under sections 80C to 80U, with 80C capped at ₹1.5 lakh. Example: PPF and ELSS investments qualify for 80C up to ₹1.5 lakh.' },
  { id: 'f49-5', chapterId: 49, front: 'Rebate under Section 87A', back: 'A rebate of up to ₹12,500 for resident individuals with total income up to ₹7 lakh (new regime). Example: Tax of ₹10,000 is fully rebated for eligible taxpayers.' },
  { id: 'f49-6', chapterId: 49, front: 'Health & Education Cess', back: 'A 4% cess levied on income tax plus surcharge to fund education and health. Example: Tax ₹1 lakh attracts ₹4,000 cess.' },

  // Ch50 TDS & TCS
  { id: 'f50-1', chapterId: 50, front: 'Tax Deducted at Source (TDS)', back: 'Tax deducted by the payer at prescribed rates at the time of payment of specified income. Example: 10% TDS on professional fees paid to a consultant.' },
  { id: 'f50-2', chapterId: 50, front: 'Tax Collected at Source (TCS)', back: 'Tax collected by the seller from the buyer at the time of sale of specified goods. Example: 0.1% TCS on sale of goods exceeding ₹50 lakh turnover.' },
  { id: 'f50-3', chapterId: 50, front: 'Section 194C', back: 'TDS on payments to contractors at 1% (individual/HUF) or 2% (others). Example: ₹1 lakh paid to a contractor attracts 2% TDS = ₹2,000.' },
  { id: 'f50-4', chapterId: 50, front: 'Section 194J', back: 'TDS at 10% on technical/professional fees and royalty. Example: ₹50,000 technical fee attracts ₹5,000 TDS under 194J.' },
  { id: 'f50-5', chapterId: 50, front: 'TAN', back: 'Tax Deduction and Collection Account Number required for deducting/collecting tax. Example: A deductor must quote TAN on TDS returns and challans.' },
  { id: 'f50-6', chapterId: 50, front: 'Form 26AS', back: 'A consolidated statement showing TDS/TCS credited to a taxpayer PAN. Example: A salaried person checks Form 26AS to verify TDS by employer.' },

  // Ch51 Salary & House Property
  { id: 'f51-1', chapterId: 51, front: 'Standard Deduction (Salary)', back: 'A flat deduction of ₹50,000 from salary income under both old and new regimes. Example: Salary ₹6 lakh less ₹50,000 standard deduction = ₹5.5 lakh taxable.' },
  { id: 'f51-2', chapterId: 51, front: 'HRA Exemption', back: 'Least of actual HRA, rent paid minus 10% salary, or 50%/40% of salary for metro/non-metro. Example: HRA ₹60,000 with rent ₹80,000 qualifies partially exempt.' },
  { id: 'f51-3', chapterId: 51, front: 'Net Annual Value (NAV)', back: 'Gross annual value less municipal taxes, the base for house property income. Example: GAV ₹2 lakh less municipal tax ₹10,000 = NAV ₹1.9 lakh.' },
  { id: 'f51-4', chapterId: 51, front: '30% Standard Deduction (House Property)', back: 'A flat 30% deduction from NAV for repairs and maintenance, no proof required. Example: NAV ₹1 lakh x 30% = ₹30,000 deduction.' },
  { id: 'f51-5', chapterId: 51, front: 'Interest on Housing Loan', back: 'Deduction up to ₹2 lakh on self-occupied property and without limit for let-out. Example: ₹1.8 lakh interest paid is fully deductible.' },
  { id: 'f51-6', chapterId: 51, front: 'Self-Occupied Property', back: 'A property used by the owner for residence, taxed with NAV as nil and interest deduction allowed. Example: Owner’s own house has GAV nil and deduction of loan interest.' },

  // Ch52 GST Fundamentals
  { id: 'f52-1', chapterId: 52, front: 'Goods and Services Tax (GST)', back: 'A comprehensive indirect tax on supply of goods and services, levied nationally. Example: A shop charges 18% GST on a sold item.' },
  { id: 'f52-2', chapterId: 52, front: 'CGST, SGST, IGST', back: 'CGST and SGST are split for intra-state supplies; IGST for inter-state supplies. Example: Intra-state sale ₹1,000 at 18% = CGST ₹90 + SGST ₹90.' },
  { id: 'f52-3', chapterId: 52, front: 'GST Tax Slabs', back: 'Main rates are 0%, 5%, 12%, 18% and 28% on different goods and services. Example: Essential goods may attract 5% while luxury cars attract 28%.' },
  { id: 'f52-4', chapterId: 52, front: 'Input Tax Credit (ITC)', back: 'A registered person can claim credit of GST paid on business inputs against output tax. Example: GST paid ₹1,000 on purchase is set off against ₹1,500 on sales.' },
  { id: 'f52-5', chapterId: 52, front: 'Composition Scheme', back: 'A simplified scheme for small taxpayers with turnover up to prescribed limits at lower rates. Example: A trader with ₹75 lakh turnover opts for 1% composition rate.' },
  { id: 'f52-6', chapterId: 52, front: 'GSTIN', back: 'A 15-digit Goods and Services Tax Identification Number assigned to each registered person. Example: A Delhi trader’s GSTIN starts with 07 (state code).' },

  // Ch53 GST Returns
  { id: 'f53-1', chapterId: 53, front: 'GSTR-1', back: 'A monthly/quarterly return of outward supplies (sales) by a registered person. Example: A supplier files GSTR-1 by the 11th of next month.' },
  { id: 'f53-2', chapterId: 53, front: 'GSTR-3B', back: 'A monthly self-declared summary return with tax payment. Example: A dealer pays net GST of ₹20,000 through GSTR-3B.' },
  { id: 'f53-3', chapterId: 53, front: 'GSTR-2B', back: 'An auto-generated static ITC statement showing eligible input tax credit. Example: A buyer uses GSTR-2B to claim ₹5,000 ITC.' },
  { id: 'f53-4', chapterId: 53, front: 'Net Tax Payable', back: 'Output tax liability less input tax credit, the amount to be paid. Example: Output ₹18,000 less ITC ₹13,000 = net payable ₹5,000.' },
  { id: 'f53-5', chapterId: 53, front: 'GSTR-9 Annual Return', back: 'A yearly consolidated return of all supplies and taxes for a financial year. Example: A registered person files GSTR-9 by 31 December of next year.' },
  { id: 'f53-6', chapterId: 53, front: 'Late Fee & Interest', back: 'Penalty for delayed filing and interest at 18% on late tax payment. Example: Delayed GSTR-3B attracts ₹50 per day late fee.' },

  // Ch54 E-Invoicing & E-Way Bill
  { id: 'f54-1', chapterId: 54, front: 'IRN (Invoice Reference Number)', back: 'A unique 64-character number generated on the GST portal for each e-invoice. Example: IRN is created by hashing invoice details via the Invoice Registration Portal.' },
  { id: 'f54-2', chapterId: 54, front: 'QR Code on E-Invoice', back: 'A scannable code containing key invoice details for quick verification. Example: The QR code embeds IRN and supplier GSTIN.' },
  { id: 'f54-3', chapterId: 54, front: 'E-Way Bill', back: 'An electronic document for movement of goods worth over ₹50,000. Example: A transporter carries e-way bill for ₹1 lakh of goods.' },
  { id: 'f54-4', chapterId: 54, front: 'E-Way Bill Threshold', back: 'Mandatory e-way bill when consignment value exceeds ₹50,000. Example: Goods of ₹60,000 require an e-way bill.' },
  { id: 'f54-5', chapterId: 54, front: 'Part A and Part B of E-Way Bill', back: 'Part A has invoice and goods details; Part B has transporter and vehicle details. Example: Part A generated by supplier, Part B by transporter.' },
  { id: 'f54-6', chapterId: 54, front: 'E-Way Bill Validity', back: 'One day per 200 km of distance, extendable for longer routes. Example: 400 km journey allows 2 days validity.' },

  // Ch55 Company Share Capital
  { id: 'f55-1', chapterId: 55, front: 'Authorised Capital', back: 'The maximum capital a company can issue as per its MoA. Example: MoA authorises ₹50 lakh share capital.' },
  { id: 'f55-2', chapterId: 55, front: 'Issued and Paid-up Capital', back: 'Issued is offered to public; paid-up is actually received from shareholders. Example: Of ₹10 lakh issued, ₹8 lakh is paid-up.' },
  { id: 'f55-3', chapterId: 55, front: 'Securities Premium Reserve', back: 'The reserve created when shares are issued at a premium, a free reserve. Example: Share of ₹10 issued at ₹12 adds ₹2 to premium reserve.' },
  { id: 'f55-4', chapterId: 55, front: 'Calls in Arrears', back: 'Amount not paid by shareholders on call money due. Example: ₹5,000 unpaid on final call is calls in arrears.' },
  { id: 'f55-5', chapterId: 55, front: 'Forfeiture of Shares', back: 'Cancellation of shares for non-payment of calls, with amount forfeited credited. Example: 100 shares forfeited for non-payment of ₹3 final call.' },
  { id: 'f55-6', chapterId: 55, front: 'Reissue of Forfeited Shares', back: 'Forfeited shares may be reissued at a discount not exceeding the forfeited amount. Example: Shares forfeited at ₹8 reissued at ₹7, discount ₹1.' },

  // Ch56 Consolidation
  { id: 'f56-1', chapterId: 56, front: 'Consolidated Financial Statements', back: 'Combined statements of parent and subsidiaries as a single economic entity under Ind AS 110. Example: Parent and its 80%-owned subsidiary are consolidated.' },
  { id: 'f56-2', chapterId: 56, front: 'Control (Ind AS 110)', back: 'Power over investee, exposure to variable returns, and ability to affect those returns. Example: Holding 60% voting rights usually indicates control.' },
  { id: 'f56-3', chapterId: 56, front: 'Goodwill on Consolidation', back: 'The excess of acquisition cost over the parent’s share of subsidiary’s net assets. Example: ₹10 lakh paid for net assets ₹8 lakh gives ₹2 lakh goodwill.' },
  { id: 'f56-4', chapterId: 56, front: 'Non-Controlling Interest (NCI)', back: 'The portion of equity in a subsidiary not attributable to the parent. Example: 20% NCI in an 80%-owned subsidiary.' },
  { id: 'f56-5', chapterId: 56, front: 'Intra-group Elimination', back: 'Cancellation of inter-company balances and unrealised profits on consolidation. Example: Subsidiary’s ₹1 lakh payable to parent is eliminated.' },
  { id: 'f56-6', chapterId: 56, front: 'Uniform Accounting Policies', back: 'Subsidiaries must use policies consistent with the parent for consolidation. Example: If parent uses Ind AS 116, subsidiary aligns to it.' },

  // Ch57 Financial Instruments
  { id: 'f57-1', chapterId: 57, front: 'Ind AS 109 Classification', back: 'Financial assets are classified as amortised cost, FVTOCI or FVTPL. Example: Held-to-maturity debt is at amortised cost.' },
  { id: 'f57-2', chapterId: 57, front: 'Amortised Cost', back: 'Measured by effective interest method, for assets held to collect contractual cash flows. Example: A fixed-rate bond held to maturity at amortised cost.' },
  { id: 'f57-3', chapterId: 57, front: 'SPPI Test', back: 'Solely Payments of Principal and Interest test for amortised cost classification. Example: A normal loan passes SPPI; an equity-linked note may not.' },
  { id: 'f57-4', chapterId: 57, front: 'Ind AS 115 Revenue', back: 'Revenue from contracts with customers recognised on satisfaction of performance obligations. Example: A builder recognises revenue as milestones complete.' },
  { id: 'f57-5', chapterId: 57, front: 'Provisions vs Contingent Liabilities (Ind AS 37)', back: 'A provision is a present obligation with reliable estimate; a contingent liability is possible but uncertain. Example: Pending lawsuit with uncertain outcome is a contingent liability.' },
  { id: 'f57-6', chapterId: 57, front: 'Expected Credit Loss (ECL)', back: 'An impairment model recognising credit losses based on expected (not incurred) events. Example: A bank provides for ECL on its loan book.' },

  // Ch58 Auditing Basics
  { id: 'f58-1', chapterId: 58, front: 'Auditing', back: 'An independent examination of financial statements to express an opinion. Example: A statutory auditor examines annual accounts.' },
  { id: 'f58-2', chapterId: 58, front: 'True and Fair View', back: 'The objective of an audit is to confirm statements show a true and fair view. Example: Auditor opines that balance sheet is true and fair.' },
  { id: 'f58-3', chapterId: 58, front: 'Audit Evidence', back: 'Information that is sufficient and appropriate to support the audit opinion. Example: Invoices and bank statements are audit evidence.' },
  { id: 'f58-4', chapterId: 58, front: 'Internal Control', back: 'Policies and procedures to ensure reliability, compliance and efficiency. Example: Segregation of duties is a key internal control.' },
  { id: 'f58-5', chapterId: 58, front: 'Vouching vs Verification', back: 'Vouching checks authenticity of transactions; verification confirms existence of assets. Example: Checking a purchase bill (vouching) and physically counting stock (verification).' },
  { id: 'f58-6', chapterId: 58, front: 'Audit Risk', back: 'The risk that the auditor expresses an inappropriate opinion on materially misstated statements. Example: High inherent risk increases overall audit risk.' },

  // Ch59 Audit Report
  { id: 'f59-1', chapterId: 59, front: 'Unmodified Opinion', back: 'A clean opinion that statements give a true and fair view. Example: Standard auditor’s report with no qualifications.' },
  { id: 'f59-2', chapterId: 59, front: 'Qualified Opinion', back: 'Expressed when misstatement is material but not pervasive. Example: Disagreement on one accounting policy leads to qualification.' },
  { id: 'f59-3', chapterId: 59, front: 'Adverse Opinion', back: 'Given when misstatement is both material and pervasive. Example: Major inflation of sales leads to adverse opinion.' },
  { id: 'f59-4', chapterId: 59, front: 'Disclaimer of Opinion', back: 'Auditor unable to obtain sufficient evidence, expresses no opinion. Example: Books unavailable prevents forming an opinion.' },
  { id: 'f59-5', chapterId: 59, front: 'Section 139 Appointment', back: 'Provisions for appointment of auditors of companies under the Companies Act 2013. Example: First auditor appointed by Board within 30 days of incorporation.' },
  { id: 'f59-6', chapterId: 59, front: 'CARO', back: 'Companies (Auditor’s Report) Order requiring additional reporting on matters. Example: CARO report covers related-party transactions and statutory dues.' },

  // Ch60 Indian Contract Act 1872
  { id: 'f60-1', chapterId: 60, front: 'Contract', back: 'An agreement enforceable by law, creating legal obligations. Example: A signed sale agreement is a valid contract.' },
  { id: 'f60-2', chapterId: 60, front: 'Essentials of a Valid Contract (Sec 10)', back: 'Offer, acceptance, consideration, capacity, free consent, lawful object and intention to create legal relation. Example: A contract lacking consideration is void.' },
  { id: 'f60-3', chapterId: 60, front: 'Void vs Voidable Contract', back: 'Void has no legal effect from the start; voidable is valid until avoided by the aggrieved party. Example: A contract with a minor is void; one by coercion is voidable.' },
  { id: 'f60-4', chapterId: 60, front: 'Consideration', back: 'Something of value promised in exchange, the price of a promise. Example: ₹1,000 paid for goods is valid consideration.' },
  { id: 'f60-5', chapterId: 60, front: 'Remedies for Breach', back: 'Damages, specific performance, injunction or rescission available to the aggrieved party. Example: Court awards ₹50,000 damages for non-delivery.' },
  { id: 'f60-6', chapterId: 60, front: 'Quasi-Contract', back: 'Obligations imposed by law to prevent unjust enrichment, not from agreement. Example: Money paid by mistake must be returned (Section 72).' },

  // Ch61 Sale of Goods Act 1930
  { id: 'f61-1', chapterId: 61, front: 'Sale vs Agreement to Sell', back: 'Sale transfers ownership immediately; agreement to sell transfers it at a future time. Example: Goods handed over = sale; goods to be made = agreement to sell.' },
  { id: 'f61-2', chapterId: 61, front: 'Condition vs Warranty', back: 'A condition is essential to the contract; a warranty is collateral. Example: Breach of condition allows rejection; breach of warranty allows damages only.' },
  { id: 'f61-3', chapterId: 61, front: 'Implied Conditions', back: 'Conditions implied by law such as merchantable quality and fitness for purpose. Example: Goods must be of merchantable quality under Section 16.' },
  { id: 'f61-4', chapterId: 61, front: 'Caveat Emptor', back: 'The principle that the buyer must beware and examine goods before purchase. Example: A buyer generally cannot return goods merely for being unsuitable.' },
  { id: 'f61-5', chapterId: 61, front: 'Unpaid Seller', back: 'A seller who has not been paid for goods sold, with special rights. Example: A seller unpaid after delivery is an unpaid seller.' },
  { id: 'f61-6', chapterId: 61, front: 'Unpaid Seller Rights', back: 'Lien, stoppage in transit and resale against the buyer. Example: Seller stops goods in transit on buyer’s insolvency.' },

  // Ch62 Negotiable Instruments Act 1881
  { id: 'f62-1', chapterId: 62, front: 'Negotiable Instrument', back: 'A document transferable by endorsement/delivery entitling holder to payment. Example: A cheque and a promissory note are negotiable instruments.' },
  { id: 'f62-2', chapterId: 62, front: 'Promissory Note', back: 'An unconditional promise in writing to pay a sum to a person. Example: "I promise to pay X ₹10,000" is a promissory note.' },
  { id: 'f62-3', chapterId: 62, front: 'Bill of Exchange', back: 'An unconditional order in writing directing someone to pay a sum. Example: A drawee is ordered by drawer to pay the payee.' },
  { id: 'f62-4', chapterId: 62, front: 'Cheque', back: 'A bill of exchange drawn on a banker payable on demand. Example: A signed withdrawal slip is a cheque.' },
  { id: 'f62-5', chapterId: 62, front: 'Holder in Due Course', back: 'A holder who takes an instrument for value, in good faith and without notice of defect. Example: A bona fide holder can claim despite prior defects.' },
  { id: 'f62-6', chapterId: 62, front: 'Section 138 Cheque Bounce', back: 'Dishonour of a cheque for insufficiency of funds is a criminal offence. Example: Non-payment after notice under Sec 138 invites penalty.' },

  // Ch63 Partnership & LLP
  { id: 'f63-1', chapterId: 63, front: 'Partnership (Section 4)', back: 'A relation between persons who agree to share profits of a business carried on by all or any of them acting for all. Example: A and B carry on business sharing profits 50:50.' },
  { id: 'f63-2', chapterId: 63, front: 'Mutual Agency', back: 'Every partner is an agent of the firm and of other partners in business. Example: A partner’s act binds the firm within ordinary course.' },
  { id: 'f63-3', chapterId: 63, front: 'Minor in Partnership', back: 'A minor can be admitted only to the benefits of partnership, not liabilities. Example: A minor gets share of profit but not personal liability.' },
  { id: 'f63-4', chapterId: 63, front: 'Dissolution of Partnership', back: 'The change in relation among partners, or end of the firm. Example: Retirement of a partner dissolves the old firm.' },
  { id: 'f63-5', chapterId: 63, front: 'LLP', back: 'Limited Liability Partnership, a body corporate with separate legal entity. Example: An LLP continues despite change of partners.' },
  { id: 'f63-6', chapterId: 63, front: 'Limited Liability', back: 'Partners’ liability in an LLP is limited to their contribution. Example: A partner is not personally liable for firm debts beyond capital.' },

  // Ch64 Factories Act & Payment of Wages
  { id: 'f64-1', chapterId: 64, front: 'Factory Definition', back: 'A premises with 10+ workers (power) or 20+ workers (no power) engaged in manufacturing. Example: A unit with 15 powered workers is a factory.' },
  { id: 'f64-2', chapterId: 64, front: 'Working Hours', back: 'Maximum 48 hours per week with spread-over limits under the Factories Act. Example: A worker may do 8 hours a day over 6 days.' },
  { id: 'f64-3', chapterId: 64, front: 'Overtime Wages', back: 'Work beyond prescribed hours is paid at double the ordinary rate. Example: Overtime at ₹200/hr is paid ₹400/hr.' },
  { id: 'f64-4', chapterId: 64, front: 'Annual Leave with Wages', back: 'Earned leave accruing at one day per 20 days worked (or 15 per year). Example: A worker gets leave with wages after a year of service.' },
  { id: 'f64-5', chapterId: 64, front: 'Wage Payment Date', back: 'Wages must be paid within 7 days (or 10 for 1000+ workers) of the wage period. Example: Monthly wages paid by the 7th of next month.' },
  { id: 'f64-6', chapterId: 64, front: 'Fine Limit', back: 'Fines on workers cannot exceed 3% of wages and require written explanation. Example: On ₹10,000 wages, max fine is ₹300.' },

  // Ch65 EPF, ESI & Gratuity
  { id: 'f65-1', chapterId: 65, front: 'EPF Contribution', back: 'Employee and employer each contribute 12% of basic wages to the Provident Fund. Example: On ₹20,000 basic, ₹2,400 is deducted as EPF.' },
  { id: 'f65-2', chapterId: 65, front: 'ESIC Coverage', back: 'Applies to employees with wages up to ₹21,000, at 3.25% (employer) and 0.75% (employee). Example: ₹15,000 wage attracts ESIC at 4% total.' },
  { id: 'f65-3', chapterId: 65, front: 'Gratuity Eligibility', back: 'Payable after continuous service of 5 years on retirement/resignation. Example: An employee leaving after 6 years gets gratuity.' },
  { id: 'f65-4', chapterId: 65, front: 'Gratuity Formula', back: '(15/26) x last drawn wages x completed years of service. Example: ₹20,000 wages x 10 years x 15/26 = ₹1,15,385.' },
  { id: 'f65-5', chapterId: 65, front: 'Employees Provident Fund', back: 'A retirement benefit scheme where accumulated balance is paid at exit. Example: On retirement, employee receives PF corpus with interest.' },
  { id: 'f65-6', chapterId: 65, front: 'ESI Benefits', back: 'Medical, sickness, maternity and disablement benefits for covered employees. Example: An insured worker gets free medical treatment under ESI.' },

  // Ch66 Companies Act 2013
  { id: 'f66-1', chapterId: 66, front: 'Private vs Public Company', back: 'Private restricts transfer and members (max 200); public can invite public and needs 7 members. Example: A private company needs minimum 2 members.' },
  { id: 'f66-2', chapterId: 66, front: 'One Person Company (OPC)', back: 'A company with only one person as member, introduced by the 2013 Act. Example: A sole entrepreneur forms an OPC with one member.' },
  { id: 'f66-3', chapterId: 66, front: 'Memorandum of Association (MoA)', back: 'The charter defining a company’s scope, objects and powers. Example: MoA states the main and ancillary objects of the company.' },
  { id: 'f66-4', chapterId: 66, front: 'Articles of Association (AoA)', back: 'The internal rules and regulations for management of the company. Example: AoA prescribes how directors are appointed.' },
  { id: 'f66-5', chapterId: 66, front: 'CSR (Section 135)', back: 'Companies above threshold must spend 2% of average net profit on CSR. Example: A company with ₹10 crore avg profit spends ₹20 lakh on CSR.' },
  { id: 'f66-6', chapterId: 66, front: 'Cost Audit (Section 148)', back: 'Maintains cost records and audit for specified classes of companies. Example: A large manufacturing company conducts a cost audit.' },

  // Ch67 Business Ethics & Governance
  { id: 'f67-1', chapterId: 67, front: 'Business Ethics', back: 'Moral principles guiding conduct in commerce and corporate behaviour. Example: Refusing a bribe is ethical business conduct.' },
  { id: 'f67-2', chapterId: 67, front: 'Corporate Governance', back: 'Systems by which companies are directed and controlled for stakeholder interest. Example: A board oversees management on behalf of shareholders.' },
  { id: 'f67-3', chapterId: 67, front: 'Stakeholders', back: 'Parties affected by corporate actions: shareholders, employees, customers, society. Example: Community impacted by pollution is a stakeholder.' },
  { id: 'f67-4', chapterId: 67, front: 'Accountability & Transparency', back: 'Being answerable for decisions and disclosing information openly. Example: Publishing audited financials reflects transparency.' },
  { id: 'f67-5', chapterId: 67, front: 'Independent Director', back: 'A non-executive director free from material relationship with the company. Example: An external expert sits as independent director on the board.' },
  { id: 'f67-6', chapterId: 67, front: 'Whistle-blower Mechanism', back: 'A system letting employees report unethical or illegal conduct safely. Example: A vigil mechanism protects a reporting employee.' },

  // Ch68 Intro to Cost Accounting
  { id: 'f68-1', chapterId: 68, front: 'Cost Unit', back: 'A unit of product or service for which cost is ascertained. Example: Cost per tonne of steel is a cost unit.' },
  { id: 'f68-2', chapterId: 68, front: 'Cost Centre', back: 'A location or person for which costs are collected and ascertained. Example: A welding section is a cost centre.' },
  { id: 'f68-3', chapterId: 68, front: 'Elements of Cost', back: 'Material, labour and expenses are the three elements of cost. Example: Raw material, wages and power are cost elements.' },
  { id: 'f68-4', chapterId: 68, front: 'Direct vs Indirect Cost', back: 'Direct costs trace to a unit; indirect costs cannot and are overheads. Example: Direct material vs factory rent.' },
  { id: 'f68-5', chapterId: 68, front: 'Prime Cost', back: 'Sum of direct materials, direct labour and direct expenses. Example: ₹1,000 + ₹500 + ₹200 = prime cost ₹1,700.' },
  { id: 'f68-6', chapterId: 68, front: 'Costing Methods', back: 'Job, batch, process, contract and operating costing suit different industries. Example: A factory uses process costing for continuous output.' },

  // Ch69 Material Cost
  { id: 'f69-1', chapterId: 69, front: 'EOQ (Economic Order Quantity)', back: 'The order size minimising total carrying and ordering costs. Example: EOQ = sqrt(2 x annual demand x ordering cost / carrying cost).' },
  { id: 'f69-2', chapterId: 69, front: 'Re-order Level', back: 'The stock level at which a new order should be placed. Example: Re-order level = max consumption x max lead time.' },
  { id: 'f69-3', chapterId: 69, front: 'Minimum Level', back: 'The lowest stock that should be maintained to avoid shortages. Example: Min level = re-order level - (normal use x normal lead time).' },
  { id: 'f69-4', chapterId: 69, front: 'ABC Analysis', back: 'Classifying inventory by value: A (high value, few), B (medium), C (low value, many). Example: A items get tight control, C items loose control.' },
  { id: 'f69-5', chapterId: 69, front: 'Bin Card', back: 'A quantitative record of receipts, issues and balance of each store item. Example: The storekeeper updates the bin card on each issue.' },
  { id: 'f69-6', chapterId: 69, front: 'Carrying vs Ordering Cost', back: 'Carrying is holding cost; ordering is cost of placing an order; EOQ balances them. Example: Higher ordering cost favours larger, less frequent orders.' },

  // Ch70 Labour Cost
  { id: 'f70-1', chapterId: 70, front: 'Direct vs Indirect Labour', back: 'Direct labour works on the product; indirect labour supports production. Example: Machine operator is direct; storekeeper is indirect.' },
  { id: 'f70-2', chapterId: 70, front: 'Time Rate', back: 'Wages paid based on time worked irrespective of output. Example: ₹200 per day for 8 hours.' },
  { id: 'f70-3', chapterId: 70, front: 'Piece Rate', back: 'Wages paid per unit produced, linking pay to output. Example: ₹10 per unit for 100 units = ₹1,000.' },
  { id: 'f70-4', chapterId: 70, front: 'Halsey Premium Plan', back: 'Worker gets time wages plus 50% of time saved on standard time. Example: Saved 4 hours at ₹10 gives ₹20 bonus (50% of ₹40).' },
  { id: 'f70-5', chapterId: 70, front: 'Rowan Premium Plan', back: 'Bonus is proportion of time saved to standard time, times actual wages. Example: Saved 4 of 10 std hours at ₹40 pay = ₹16 bonus.' },
  { id: 'f70-6', chapterId: 70, front: 'Labour Turnover', back: 'The rate at which workers leave and are replaced. Example: 20 left and 200 average staff gives 10% turnover.' },

  // Ch71 Overheads
  { id: 'f71-1', chapterId: 71, front: 'Overhead', back: 'Indirect costs of production, administration and selling not directly traceable. Example: Factory rent and supervision are overheads.' },
  { id: 'f71-2', chapterId: 71, front: 'Allocation vs Apportionment', back: 'Allocation assigns whole cost to one cost centre; apportionment shares common cost by basis. Example: Rent apportioned by area across departments.' },
  { id: 'f71-3', chapterId: 71, front: 'Absorption of Overheads', back: 'Charging overheads to cost units using an absorption rate. Example: Overhead absorbed at ₹5 per labour hour.' },
  { id: 'f71-4', chapterId: 71, front: 'Predetermined Overhead Rate', back: 'Budgeted overhead divided by budgeted base, set before the period. Example: ₹1,00,000 / 10,000 hours = ₹10 per hour.' },
  { id: 'f71-5', chapterId: 71, front: 'Under/Over Absorption', back: 'Difference between absorbed and actual overhead; under = too little, over = too much. Example: Actual ₹1.2 lakh vs absorbed ₹1 lakh is under-absorbed ₹20,000.' },
  { id: 'f71-6', chapterId: 71, front: 'Machine Hour Rate', back: 'Overhead absorption rate based on machine hours. Example: ₹50,000 overhead / 5,000 machine hours = ₹10 per hour.' },

  // Ch72 Cost Sheet
  { id: 'f72-1', chapterId: 72, front: 'Prime Cost', back: 'Direct material plus direct labour plus direct expenses. Example: ₹4,000 + ₹2,000 + ₹500 = ₹6,500 prime cost.' },
  { id: 'f72-2', chapterId: 72, front: 'Works Cost', back: 'Prime cost plus factory overheads. Example: Prime cost ₹6,500 + factory OH ₹1,500 = works cost ₹8,000.' },
  { id: 'f72-3', chapterId: 72, front: 'Cost of Production', back: 'Works cost plus office and administration overheads. Example: ₹8,000 + ₹1,000 adm OH = ₹9,000 cost of production.' },
  { id: 'f72-4', chapterId: 72, front: 'Cost of Sales', back: 'Cost of production plus selling/distribution overheads, less opening stock. Example: ₹9,000 + ₹500 = ₹9,500 cost of sales.' },
  { id: 'f72-5', chapterId: 72, front: 'Profit in Cost Sheet', back: 'The difference between sales and total cost of sales. Example: Sales ₹12,000 less cost ₹9,500 = profit ₹2,500.' },
  { id: 'f72-6', chapterId: 72, front: 'Reconciliation', back: 'Matching financial and cost records to explain profit differences. Example: Over/under absorbed overhead explains variance.' },

  // Ch73 Job & Batch Costing
  { id: 'f73-1', chapterId: 73, front: 'Job Costing', back: 'Costing where costs are collected for each distinct job or order. Example: A printer costs each printing order separately.' },
  { id: 'f73-2', chapterId: 73, front: 'Job Cost Sheet', back: 'A document recording material, labour and overhead for a job. Example: Job #101 sheet shows ₹2,000 material and ₹1,000 labour.' },
  { id: 'f73-3', chapterId: 73, front: 'Batch Costing', back: 'A form of job costing for a batch of identical units. Example: 500 bottles produced as one batch.' },
  { id: 'f73-4', chapterId: 73, front: 'Economic Batch Quantity', back: 'The batch size minimising setup and carrying costs. Example: EBQ = sqrt(2 x demand x setup cost / carrying cost).' },
  { id: 'f73-5', chapterId: 73, front: 'Quotation Price', back: 'The selling price quoted to customer based on total job cost plus margin. Example: Cost ₹8,000 plus 25% margin = quote ₹10,000.' },
  { id: 'f73-6', chapterId: 73, front: 'Job Profitability', back: 'Comparing job revenue with its full cost to assess margin. Example: Job revenue ₹15,000 less cost ₹12,000 = ₹3,000 profit.' },

  // Ch74 Process Costing
  { id: 'f74-1', chapterId: 74, front: 'Process Costing', back: 'Costing for continuous, homogeneous production through sequential processes. Example: A sugar mill uses process costing.' },
  { id: 'f74-2', chapterId: 74, front: 'Equivalent Production', back: 'Converting incomplete units to equivalent complete units. Example: 100 units half-done = 50 equivalent units.' },
  { id: 'f74-3', chapterId: 74, front: 'Normal Loss', back: 'Expected loss inherent to the process, borne by good output. Example: 2% evaporation in a chemical process is normal loss.' },
  { id: 'f74-4', chapterId: 74, front: 'Abnormal Loss', back: 'Loss beyond normal, valued and charged to P&L separately. Example: Fire damaging 50 units is abnormal loss.' },
  { id: 'f74-5', chapterId: 74, front: 'Abnormal Gain', back: 'Output exceeding expectation, credited and shown as gain. Example: Producing 10 units more than normal is abnormal gain.' },
  { id: 'f74-6', chapterId: 74, front: 'Joint Products & By-products', back: 'Joint products are main outputs of one process; by-products are incidental. Example: Crude oil yields petrol and diesel as joint products.' },

  // Ch75 Contract Costing
  { id: 'f75-1', chapterId: 75, front: 'Contract Costing', back: 'Costing for long-term contracts like construction, accounted by contract. Example: A builder accounts for a bridge contract separately.' },
  { id: 'f75-2', chapterId: 75, front: 'Work Certified', back: 'The portion of work approved by the engineer/client for payment. Example: ₹40 lakh of ₹50 lakh work is certified.' },
  { id: 'f75-3', chapterId: 75, front: 'Notional Profit', back: 'The profit on a contract before deducting unrealised profit on uncertified work. Example: Cost ₹30 lakh, certified ₹40 lakh, notional profit ₹10 lakh.' },
  { id: 'f75-4', chapterId: 75, front: 'Work-in-Progress (WIP)', back: 'The value of incomplete contract work shown as an asset. Example: Uncertified ₹10 lakh work is WIP.' },
  { id: 'f75-5', chapterId: 75, front: 'AS 7 Percentage of Completion', back: 'Revenue recognised in line with stage of completion of the contract. Example: 60% complete contract recognises 60% of revenue.' },
  { id: 'f75-6', chapterId: 75, front: 'Retention Money', back: 'A portion withheld until contract completion as security. Example: 10% retained from each certificate until final handover.' },

  // Ch76 Service/Operating Costing
  { id: 'f76-1', chapterId: 76, front: 'Operating Costing', back: 'Costing used by service industries to ascertain cost per unit of service. Example: A bus operator computes cost per passenger-km.' },
  { id: 'f76-2', chapterId: 76, front: 'Cost Unit (Service)', back: 'Service units like passenger-km, ton-km, bed-day, patient-day. Example: A hospital uses cost per bed-day.' },
  { id: 'f76-3', chapterId: 76, front: 'Composite Cost Unit', back: 'A unit combining two measures like passenger-kilometre. Example: Ton-km combines weight carried and distance.' },
  { id: 'f76-4', chapterId: 76, front: 'Standing Charges', back: 'Fixed costs that do not vary with level of service, like licences. Example: Garage rent is a standing charge for a fleet.' },
  { id: 'f76-5', chapterId: 76, front: 'Running Charges', back: 'Variable costs that change with level of activity, like fuel. Example: Diesel consumed per trip is a running charge.' },
  { id: 'f76-6', chapterId: 76, front: 'Cost per Unit of Service', back: 'Total service cost divided by number of service units. Example: ₹2 lakh / 10,000 passenger-km = ₹20 per passenger-km.' },

  // Ch77 Marginal Costing & Break-even
  { id: 'f77-1', chapterId: 77, front: 'Marginal Cost', back: 'The variable cost of producing one additional unit. Example: Making one more unit costs ₹50 in materials and labour.' },
  { id: 'f77-2', chapterId: 77, front: 'Contribution', back: 'Sales minus variable cost, available to cover fixed cost and profit. Example: Sales ₹1,00,000 less VC ₹60,000 = contribution ₹40,000.' },
  { id: 'f77-3', chapterId: 77, front: 'Break-Even Point (BEP)', back: 'The sales level where contribution equals fixed cost, profit is zero. Example: Fixed ₹40,000 / contribution per unit ₹20 = 2,000 units BEP.' },
  { id: 'f77-4', chapterId: 77, front: 'P/V Ratio', back: 'Contribution divided by sales, showing profitability per rupee of sales. Example: Contribution ₹40,000 / sales ₹1,00,000 = 40% P/V ratio.' },
  { id: 'f77-5', chapterId: 77, front: 'Margin of Safety', back: 'The excess of actual sales over break-even sales. Example: Sales ₹1,00,000 less BEP ₹60,000 = MOS ₹40,000.' },
  { id: 'f77-6', chapterId: 77, front: 'Make-or-Buy Decision', back: 'Comparing marginal cost of making in-house with buying from outside. Example: Make at ₹80 vs buy at ₹95; choose to make.' },
]
