export interface Formula {
  id: string
  category: string
  name: string
  formula: string
  note: string
}

export const formulas: Formula[] = [
  { id: 'fo1', category: 'Core', name: 'Accounting Equation', formula: 'Assets = Liabilities + Equity', note: 'The fundamental identity that must always balance.' },
  { id: 'fo2', category: 'Core', name: 'Expanded Equation', formula: 'A = L + C + Revenues − Expenses − Drawings', note: 'Adds incomes, expenses and drawings to the basic equation.' },
  { id: 'fo3', category: 'Core', name: 'Owner’s Equity', formula: 'Equity = Assets − Liabilities', note: 'The residual claim after all liabilities.' },

  { id: 'fo4', category: 'Income Statement', name: 'Gross Profit', formula: 'GP = Sales − COGS', note: 'Profit before indirect expenses.' },
  { id: 'fo5', category: 'Income Statement', name: 'Cost of Goods Sold (Periodic)', formula: 'COGS = Opening Stock + Purchases − Closing Stock + Direct Expenses', note: 'Cost of inventory sold during the period.' },
  { id: 'fo6', category: 'Income Statement', name: 'Net Profit', formula: 'NP = GP + Other Income − Indirect Expenses', note: 'Final profit transferred to capital.' },
  { id: 'fo7', category: 'Income Statement', name: 'Gross Profit Ratio', formula: 'GP Ratio = (GP ÷ Net Sales) × 100', note: 'Shows margin on trading.' },
  { id: 'fo8', category: 'Income Statement', name: 'Net Profit Ratio', formula: 'NP Ratio = (NP ÷ Net Sales) × 100', note: 'Overall profitability of sales.' },

  { id: 'fo9', category: 'Balance Sheet', name: 'Working Capital', formula: 'Working Capital = Current Assets − Current Liabilities', note: 'Liquidity buffer for day-to-day ops.' },
  { id: 'fo10', category: 'Balance Sheet', name: 'Capital Employed', formula: 'Capital Employed = Fixed Assets + Working Capital (or Equity + Long-term Debt)', note: 'Total capital used in the business.' },

  { id: 'fo11', category: 'Depreciation', name: 'SLM Annual Depreciation', formula: 'Dep = (Cost − Salvage) ÷ Useful Life', note: 'Straight Line: equal charge each year.' },
  { id: 'fo12', category: 'Depreciation', name: 'SLM Rate', formula: 'Rate% = (1 ÷ Life) × 100', note: 'Used when salvage is negligible.' },
  { id: 'fo13', category: 'Depreciation', name: 'WDV Depreciation', formula: 'Dep = Rate% × Opening WDV', note: 'Written Down Value: charge falls each year.' },
  { id: 'fo14', category: 'Depreciation', name: 'Units of Production', formula: 'Dep = (Cost − Salvage) × (Units This Year ÷ Total Estimated Units)', note: 'Charge based on actual usage.' },
  { id: 'fo15', category: 'Depreciation', name: 'Book Value', formula: 'Book Value = Cost − Accumulated Depreciation', note: 'Carrying amount of the asset.' },

  { id: 'fo16', category: 'Inventory', name: 'FIFO Issue (rising prices)', formula: 'COGS uses oldest costs; Closing Stock at newest costs', note: 'First-in-first-out.' },
  { id: 'fo17', category: 'Inventory', name: 'Weighted Average Cost', formula: 'Avg Cost = Total Cost of Units Available ÷ Total Units Available', note: 'Recomputed after each purchase.' },
  { id: 'fo18', category: 'Inventory', name: 'Lower of Cost or NRV', formula: 'Value = min(Cost, NRV); NRV = Est. Selling Price − Costs to Sell', note: 'AS 2 prudence rule.' },

  { id: 'fo19', category: 'Ratios', name: 'Current Ratio', formula: 'Current Ratio = Current Assets ÷ Current Liabilities', note: 'Ideal ≈ 2:1.' },
  { id: 'fo20', category: 'Ratios', name: 'Quick Ratio', formula: 'Quick Ratio = (Current Assets − Inventory) ÷ Current Liabilities', note: 'Acid test; ideal ≈ 1:1.' },
  { id: 'fo21', category: 'Ratios', name: 'Debt-Equity Ratio', formula: 'D/E = Total Debt ÷ Shareholders’ Equity', note: 'Higher means more leverage risk.' },
  { id: 'fo22', category: 'Ratios', name: 'Debtors Turnover', formula: 'Debtors Turnover = Net Credit Sales ÷ Average Debtors', note: 'Higher = faster collection.' },
  { id: 'fo23', category: 'Ratios', name: 'Creditors Turnover', formula: 'Creditors Turnover = Net Credit Purchases ÷ Average Creditors', note: 'Measures payment speed.' },
  { id: 'fo24', category: 'Ratios', name: 'Inventory Turnover', formula: 'Inventory Turnover = COGS ÷ Average Inventory', note: 'Higher = more efficient.' },
  { id: 'fo25', category: 'Ratios', name: 'Operating Ratio', formula: 'Operating Ratio = (COGS + Operating Expenses) ÷ Net Sales × 100', note: 'Lower is better.' },
  { id: 'fo26', category: 'Ratios', name: 'Return on Capital Employed', formula: 'ROCE = EBIT ÷ Capital Employed × 100', note: 'Return earned on total capital.' },
  { id: 'fo27', category: 'Ratios', name: 'EPS', formula: 'EPS = (Net Profit − Preference Dividend) ÷ Weighted Avg Equity Shares', note: 'Earnings per share.' },
  { id: 'fo28', category: 'Ratios', name: 'Debt Service Coverage', formula: 'DSCR = (NP + Depreciation + Interest) ÷ Interest + Principal', note: 'Ability to service debt.' },

  { id: 'fo29', category: 'Cash Flow', name: 'Net Change in Cash', formula: 'ΔCash = Operating CF + Investing CF + Financing CF', note: 'Must tie to the Balance Sheet cash.' },
  { id: 'fo30', category: 'Cash Flow', name: 'Operating CF (Indirect)', formula: 'OCF = Net Profit + Non-cash Expenses ± Working Capital Changes', note: 'Depreciation added back; increase in debtors subtracted.' },

  { id: 'fo31', category: 'Costing', name: 'Contribution', formula: 'Contribution = Sales − Variable Costs', note: 'Contributes to fixed costs and profit.' },
  { id: 'fo32', category: 'Costing', name: 'Break-even Point (units)', formula: 'BEP = Fixed Costs ÷ Contribution per Unit', note: 'Sales level with zero profit.' },
  { id: 'fo33', category: 'Costing', name: 'Break-even Point (sales)', formula: 'BEP (₹) = Fixed Costs ÷ P/V Ratio', note: 'P/V Ratio = Contribution ÷ Sales.' },
  { id: 'fo34', category: 'Costing', name: 'Margin of Safety', formula: 'MoS = Actual Sales − Break-even Sales', note: 'How far sales can fall before loss.' },
  { id: 'fo35', category: 'Costing', name: 'P/V Ratio', formula: 'P/V Ratio = (Contribution ÷ Sales) × 100', note: 'Profit-volume ratio.' },

  { id: 'fo36', category: 'Company', name: 'Calls in Arrears', formula: 'Called-up Capital − Calls Received = Calls in Arrears', note: 'Deducted from called-up capital.' },
  { id: 'fo37', category: 'Company', name: 'Book Value per Share', formula: 'BVPS = (Equity ÷ Number of Equity Shares)', note: 'Net asset value per share.' },
  { id: 'fo38', category: 'Company', name: 'Dividend Payout', formula: 'Payout % = (Dividend ÷ Net Profit) × 100', note: 'Share of profit distributed.' },

  { id: 'fo39', category: 'Partnership', name: 'Interest on Capital', formula: 'Interest = Opening Capital × Rate% × Period/12', note: 'An appropriation of profit.' },
  { id: 'fo40', category: 'Partnership', name: 'Guarantee Shortfall', formula: 'Shortfall = Guaranteed Profit − Actual Share; borne by others in PSR', note: 'Other partners make up the deficit.' },

  { id: 'fo41', category: 'Consolidation', name: 'Goodwill on Consolidation', formula: 'GW = Consideration Paid + NCI − FV of Net Assets Acquired', note: 'Group goodwill.' },
  { id: 'fo42', category: 'Leases', name: 'Lease Liability', formula: 'Lease Liability = PV of Future Lease Payments (discounted)', note: 'At implicit or incremental borrowing rate.' },
  { id: 'fo43', category: 'Leases', name: 'Right-of-Use Asset', formula: 'ROU = Lease Liability + Initial Direct Costs + Prepaid − Incentives', note: 'Lessee’s asset.' },

  { id: 'fo44', category: 'Tax (India)', name: 'Total Income', formula: 'Total Income = Gross Total Income − Chapter VI-A Deductions', note: 'Base for computing tax.' },
  { id: 'fo45', category: 'Tax (India)', name: 'Tax plus Cess', formula: 'Payable = Tax on Total Income + 4% Health & Education Cess on Tax', note: 'Cess is on the tax amount.' },
  { id: 'fo46', category: 'Tax (India)', name: 'Section 44AD Presumptive', formula: 'Income = 8% of Turnover (6% if digital receipts)', note: 'No detailed books/audit up to ₹2 crore.' },
  { id: 'fo47', category: 'Tax (India)', name: 'TDS (194J)', formula: 'TDS = 10% of Professional/Technical Fees', note: 'Deducted by the payer.' },
  { id: 'fo48', category: 'Tax (India)', name: 'TDS (194C)', formula: 'TDS = 1% (company) / 2% (others) of Works Contract', note: 'Individual/HUF at 2%.' },

  { id: 'fo49', category: 'GST (India)', name: 'Intra-state GST', formula: 'Total = CGST + SGST (e.g., 9% + 9% = 18%)', note: 'Levied on intra-state supply.' },
  { id: 'fo50', category: 'GST (India)', name: 'Inter-state GST', formula: 'Total = IGST (e.g., 18%)', note: 'Levied on inter-state supply; accrues to Centre.' },
  { id: 'fo51', category: 'GST (India)', name: 'Net GST Payable', formula: 'Net Tax = Output GST − Eligible ITC', note: 'Balance paid in cash.' },
  { id: 'fo52', category: 'GST (India)', name: 'TCS on Sale of Goods', formula: 'TCS = 0.1% of Receipts above ₹50 lakh (u/s 206C(1H))', note: 'Collected by the seller.' },

  { id: 'fo53', category: 'Ratios', name: 'Return on Equity', formula: 'ROE = Net Profit ÷ Average Equity × 100', note: 'Return to shareholders.' },
  { id: 'fo54', category: 'Ratios', name: 'Asset Turnover', formula: 'Asset Turnover = Net Sales ÷ Average Total Assets', note: 'Sales generated per rupee of assets.' },
  { id: 'fo55', category: 'Cash Flow', name: 'Free Cash Flow', formula: 'FCF = Operating CF − Capital Expenditure', note: 'Cash available after investing.' },
]
