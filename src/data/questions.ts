import { FOUND_QUESTIONS } from './questions_found'
import { INTER_A_QUESTIONS } from './questions_inter_a'
import { INTER_B_QUESTIONS } from './questions_inter_b'
import { FINAL_QUESTIONS } from './questions_final'

export interface Question {
  id: string
  chapterId: number
  question: string
  options: string[]
  correctIndex: number
}

export const questions: Question[] = [
  // ===== Chapter 1 =====
  { id: 'q1-1', chapterId: 1, question: 'Accounting is best described as the process of:', options: ['Only recording cash transactions', 'Recording, classifying, summarising and interpreting financial transactions', 'Filing income-tax returns', 'Printing invoices for customers'], correctIndex: 1 },
  { id: 'q1-2', chapterId: 1, question: 'Which of the following is NOT one of the three core financial statements?', options: ['Income Statement', 'Balance Sheet', 'Cash Flow Statement', 'Purchase Order'], correctIndex: 3 },
  { id: 'q1-3', chapterId: 1, question: 'Financial accounting primarily reports on:', options: ['Future estimates only', 'Past transactions (historical)', 'Tax planning only', 'Marketing performance'], correctIndex: 1 },
  { id: 'q1-4', chapterId: 1, question: 'Who among these is a primary user of accounting information?', options: ['Competitors only', 'Investors and lenders', 'Only the government', 'News channels'], correctIndex: 1 },
  { id: 'q1-5', chapterId: 1, question: 'The "Going Concern" assumption means:', options: ['The business will close next month', 'The business will continue for the foreseeable future', 'Only cash matters', 'Profits are guaranteed'], correctIndex: 1 },
  { id: 'q1-6', chapterId: 1, question: 'Bookkeeping differs from accounting in that bookkeeping is:', options: ['More analytical', 'The mechanical recording of transactions', 'Only done yearly', 'A substitute for auditing'], correctIndex: 1 },
  { id: 'q1-7', chapterId: 1, question: 'Usefulness of financial information requires:', options: ['Relevance and faithful representation', 'Colourful charts only', 'High share price', 'Frequent audits only'], correctIndex: 0 },
  { id: 'q1-8', chapterId: 1, question: 'Management accounting mainly supports:', options: ['External regulators', 'Internal decision-making', 'Bank loan approval only', 'Court cases'], correctIndex: 1 },
  { id: 'q1-9', chapterId: 1, question: 'Which phrase completes the accounting objective: "provide useful financial information for..."?', options: ['Entertainment', 'Economic decision-making', 'Tax evasion', 'Political campaigns'], correctIndex: 1 },
  { id: 'q1-10', chapterId: 1, question: 'A business transaction recorded in accounting must have:', options: ['A monetary value', 'A customer signature', 'A tax invoice always', 'Board approval'], correctIndex: 0 },

  // ===== Chapter 2 =====
  { id: 'q2-1', chapterId: 2, question: 'The basic accounting equation is:', options: ['Assets = Liabilities + Equity', 'Assets + Liabilities = Equity', 'Assets = Equity − Liabilities', 'Liabilities = Assets + Equity'], correctIndex: 0 },
  { id: 'q2-2', chapterId: 2, question: 'Owner’s equity is best described as:', options: ['Money owed to the bank', 'The residual claim after liabilities', 'A fixed asset', 'A revenue account'], correctIndex: 1 },
  { id: 'q2-3', chapterId: 2, question: 'If Assets = ₹5,00,000 and Liabilities = ₹2,00,000, Equity is:', options: ['₹7,00,000', '₹3,00,000', '₹2,50,000', '₹5,00,000'], correctIndex: 1 },
  { id: 'q2-4', chapterId: 2, question: 'A drawing by the owner:', options: ['Increases equity', 'Decreases equity', 'Has no effect on equity', 'Increases liabilities'], correctIndex: 1 },
  { id: 'q2-5', chapterId: 2, question: 'Which normally carries a credit balance?', options: ['Cash', 'Furniture', 'Creditors', 'Purchases'], correctIndex: 2 },
  { id: 'q2-6', chapterId: 2, question: 'Revenue earned by a business will:', options: ['Decrease equity', 'Increase equity', 'Increase liabilities', 'Have no effect'], correctIndex: 1 },
  { id: 'q2-7', chapterId: 2, question: 'The expanded accounting equation adds which elements?', options: ['Revenue, Expenses, Drawings', 'Only Dividends', 'Only Loans', 'Only Stock'], correctIndex: 0 },
  { id: 'q2-8', chapterId: 2, question: 'If a business buys furniture for cash, the equation:', options: ['Stays balanced (asset shifts)', 'Breaks', 'Increases liabilities', 'Reduces equity'], correctIndex: 0 },
  { id: 'q2-9', chapterId: 2, question: 'Which of these is a liability?', options: ['Debtors', 'Building', 'Creditors', 'Cash'], correctIndex: 2 },
  { id: 'q2-10', chapterId: 2, question: 'Capital introduced by the owner increases:', options: ['Only cash, never equity', 'Both an asset and equity', 'Only liabilities', 'Neither'], correctIndex: 1 },

  // ===== Chapter 3 =====
  { id: 'q3-1', chapterId: 3, question: 'In account terms, "Debit" means:', options: ['Right side', 'Left side', 'A loss only', 'A credit note'], correctIndex: 1 },
  { id: 'q3-2', chapterId: 3, question: 'For nominal accounts, the rule is:', options: ['Debit the giver', 'Debit expenses & losses, credit incomes & gains', 'Debit what comes in', 'Debit the receiver'], correctIndex: 1 },
  { id: 'q3-3', chapterId: 3, question: 'For personal accounts, the rule is:', options: ['Debit the receiver, credit the giver', 'Debit the giver', 'Debit all incomes', 'Credit what comes in'], correctIndex: 0 },
  { id: 'q3-4', chapterId: 3, question: 'Which normally has a debit balance?', options: ['Capital', 'Sales', 'Cash', 'Creditors'], correctIndex: 2 },
  { id: 'q3-5', chapterId: 3, question: 'Rent paid is recorded as:', options: ['Dr Rent A/c, Cr Cash A/c', 'Dr Cash A/c, Cr Rent A/c', 'Dr Capital A/c', 'Cr Rent A/c'], correctIndex: 0 },
  { id: 'q3-6', chapterId: 3, question: 'The total of all debits in a journal entry must equal:', options: ['Total of all credits', 'Total assets', 'Net profit', 'Total liabilities'], correctIndex: 0 },
  { id: 'q3-7', chapterId: 3, question: 'For real accounts, the rule is:', options: ['Debit the receiver', 'Debit what comes in, credit what goes out', 'Credit all expenses', 'Debit all incomes'], correctIndex: 1 },
  { id: 'q3-8', chapterId: 3, question: 'A contra entry affects:', options: ['Only nominal accounts', 'Cash and bank accounts', 'Only capital', 'Only debtors'], correctIndex: 1 },
  { id: 'q3-9', chapterId: 3, question: 'Commission received would be:', options: ['Debited (expense)', 'Credited (income)', 'Ignored', 'A liability'], correctIndex: 1 },
  { id: 'q3-10', chapterId: 3, question: 'Which of these is NOT a golden rule base?', options: ['Personal', 'Real', 'Nominal', 'Seasonal'], correctIndex: 3 },

  // ===== Chapter 4 =====
  { id: 'q4-1', chapterId: 4, question: 'A journal is known as the:', options: ['Book of final entry', 'Book of original entry', 'Ledger', 'Trial balance'], correctIndex: 1 },
  { id: 'q4-2', chapterId: 4, question: 'In a journal entry, the account to be credited is written:', options: ['First, flush left', 'Second, indented', 'In the narration', 'Never written'], correctIndex: 1 },
  { id: 'q4-3', chapterId: 4, question: 'Purchased goods for cash ₹10,000 is recorded as:', options: ['Dr Cash, Cr Purchases', 'Dr Purchases, Cr Cash', 'Dr Capital, Cr Cash', 'Dr Sales, Cr Cash'], correctIndex: 1 },
  { id: 'q4-4', chapterId: 4, question: 'A compound journal entry:', options: ['Has only one account', 'Affects more than two accounts but Dr = Cr', 'Has no narration', 'Cannot exist'], correctIndex: 1 },
  { id: 'q4-5', chapterId: 4, question: 'Credit sale of goods is recorded as:', options: ['Dr Cash, Cr Sales', 'Dr Debtors, Cr Sales', 'Dr Sales, Cr Debtors', 'Dr Purchases, Cr Cash'], correctIndex: 1 },
  { id: 'q4-6', chapterId: 4, question: 'The L.F. column in a journal refers to:', options: ['Ledger folio (page) number', 'Local tax', 'Legal format', 'Loan factor'], correctIndex: 0 },
  { id: 'q4-7', chapterId: 4, question: 'Capital introduced ₹50,000 by cheque is:', options: ['Dr Capital, Cr Bank', 'Dr Bank, Cr Capital', 'Dr Cash, Cr Capital', 'Dr Bank, Cr Sales'], correctIndex: 1 },
  { id: 'q4-8', chapterId: 4, question: 'A narration in a journal entry:', options: ['Is optional and wrong', 'Explains the reason for the entry', 'Replaces the amounts', 'Is written in red'], correctIndex: 1 },
  { id: 'q4-9', chapterId: 4, question: 'Salaries paid ₹20,000 is:', options: ['Dr Salaries, Cr Cash', 'Dr Cash, Cr Salaries', 'Dr Capital, Cr Salaries', 'Cr Salaries only'], correctIndex: 0 },
  { id: 'q4-10', chapterId: 4, question: 'Journal entries are recorded in:', options: ['Alphabetical order', 'Chronological order', 'By size', 'Random order'], correctIndex: 1 },

  // ===== Chapter 5 =====
  { id: 'q5-1', chapterId: 5, question: 'A ledger is the:', options: ['Book of original entry', 'Book of final entry grouping accounts', 'Trial balance', 'Invoice'], correctIndex: 1 },
  { id: 'q5-2', chapterId: 5, question: 'Posting means:', options: ['Printing the ledger', 'Copying journal amounts to ledger accounts', 'Filing returns', 'Auditing'], correctIndex: 1 },
  { id: 'q5-3', chapterId: 5, question: 'A T-account has:', options: ['Top and bottom', 'Debit (left) and Credit (right) sides', 'Only one side', 'Four sides'], correctIndex: 1 },
  { id: 'q5-4', chapterId: 5, question: 'If total debits exceed total credits in an account, the balance is:', options: ['Credit balance', 'Debit balance', 'Zero', 'Contra'], correctIndex: 1 },
  { id: 'q5-5', chapterId: 5, question: 'Expenses normally have:', options: ['Credit balances', 'Debit balances', 'No balance', 'Contra balances'], correctIndex: 1 },
  { id: 'q5-6', chapterId: 5, question: 'The ledger is organised by:', options: ['Only assets', 'Account headings (assets, liabilities, capital, incomes, expenses)', 'Only dates', 'Only names'], correctIndex: 1 },
  { id: 'q5-7', chapterId: 5, question: 'Which is a real (asset) account?', options: ['Sales', 'Building', 'Capital', 'Commission'], correctIndex: 1 },
  { id: 'q5-8', chapterId: 5, question: 'A folio number links:', options: ['Journal to ledger for traceability', 'One invoice to another', 'Bank to tax', 'Name to address'], correctIndex: 0 },
  { id: 'q5-9', chapterId: 5, question: 'Capital normally shows a:', options: ['Debit balance', 'Credit balance', 'Nil balance', 'Contra balance'], correctIndex: 1 },
  { id: 'q5-10', chapterId: 5, question: 'If Cash A/c has Dr ₹1,00,000 and Cr ₹40,000, its balance is:', options: ['Dr ₹60,000', 'Cr ₹60,000', '₹1,40,000', '₹40,000'], correctIndex: 0 },

  // ===== Chapter 6 =====
  { id: 'q6-1', chapterId: 6, question: 'A trial balance is prepared to:', options: ['Compute tax', 'Check arithmetical accuracy of ledger balances', 'File GST', 'Pay salaries'], correctIndex: 1 },
  { id: 'q6-2', chapterId: 6, question: 'If the trial balance agrees, it confirms:', options: ['No errors at all', 'Mathematical equality of Dr and Cr', 'Correct valuation', 'No fraud'], correctIndex: 1 },
  { id: 'q6-3', chapterId: 6, question: 'Which error is NOT detected by a trial balance?', options: ['Wrong amount posted', 'Complete omission of a transaction', 'Posting to wrong side with same amount', 'Arithmetic error'], correctIndex: 1 },
  { id: 'q6-4', chapterId: 6, question: 'A suspense account is used to:', options: ['Hide profits', 'Force the TB to agree while locating an error', 'Pay tax', 'Record sales'], correctIndex: 1 },
  { id: 'q6-5', chapterId: 6, question: 'Debit balances normally appear on the:', options: ['Credit side only', 'Debit side (assets, expenses, drawings)', 'Never in a TB', 'Liabilities side'], correctIndex: 1 },
  { id: 'q6-6', chapterId: 6, question: 'A compensating error is:', options: ['Two errors that cancel each other out', 'One big error', 'A tax error', 'A bank error'], correctIndex: 0 },
  { id: 'q6-7', chapterId: 6, question: 'If totals disagree by ₹400 and the error is one-sided, the wrong posting could be:', options: ['₹400', '₹200', '₹800', '₹0'], correctIndex: 1 },
  { id: 'q6-8', chapterId: 6, question: 'The trial balance is the link between:', options: ['Journal and ledger', 'Ledger and final accounts', 'Cash and bank', 'Sales and purchase'], correctIndex: 1 },
  { id: 'q6-9', chapterId: 6, question: 'Capital appears in the trial balance as a:', options: ['Debit balance', 'Credit balance', 'Nil', 'Contra'], correctIndex: 1 },
  { id: 'q6-10', chapterId: 6, question: 'An error of principle example is:', options: ['Treating capital expenditure as revenue', 'Wrong total', 'Omission', 'Transposition'], correctIndex: 0 },

  // ===== Chapter 7 =====
  { id: 'q7-1', chapterId: 7, question: 'Gross Profit equals:', options: ['Sales − COGS', 'Sales + COGS', 'COGS − Sales', 'Net profit'], correctIndex: 0 },
  { id: 'q7-2', chapterId: 7, question: 'COGS under periodic system =', options: ['Opening Stock + Purchases + Closing Stock', 'Opening Stock + Purchases − Closing Stock + Direct Exp', 'Sales − Opening Stock', 'Purchases only'], correctIndex: 1 },
  { id: 'q7-3', chapterId: 7, question: 'Which is a direct expense (Trading A/c)?', options: ['Advertising', 'Wages (factory)', 'Office rent', 'Discount allowed'], correctIndex: 1 },
  { id: 'q7-4', chapterId: 7, question: 'Net Profit =', options: ['Gross Profit − Indirect Expenses + Other Income', 'Gross Profit + Indirect Expenses', 'Sales − Purchases', 'COGS only'], correctIndex: 0 },
  { id: 'q7-5', chapterId: 7, question: 'The matching principle requires recognising expenses:', options: ['When cash is paid only', 'In the same period as related revenues', 'At year end only', 'Never'], correctIndex: 1 },
  { id: 'q7-6', chapterId: 7, question: 'Net profit is finally transferred to:', options: ['Cash A/c', 'Capital A/c', 'Sales A/c', 'Debtors A/c'], correctIndex: 1 },
  { id: 'q7-7', chapterId: 7, question: 'Indirect expense example:', options: ['Carriage inwards', 'Office salary', 'Factory wages', 'Raw material'], correctIndex: 1 },
  { id: 'q7-8', chapterId: 7, question: 'If Sales ₹5,00,000, COGS ₹3,00,000, the GP ratio is:', options: ['40%', '60%', '20%', '80%'], correctIndex: 0 },
  { id: 'q7-9', chapterId: 7, question: 'The Trading Account computes:', options: ['Net profit', 'Gross profit', 'Capital', 'Cash'], correctIndex: 1 },
  { id: 'q7-10', chapterId: 7, question: 'Closing stock appears in:', options: ['Only the P&L A/c', 'Both Trading A/c (credit) and Balance Sheet (asset)', 'Only the bank', 'Nowhere'], correctIndex: 1 },

  // ===== Chapter 8 =====
  { id: 'q8-1', chapterId: 8, question: 'A Balance Sheet shows:', options: ['Profit for the year', 'Assets, liabilities and equity at a date', 'Cash flows', 'Sales only'], correctIndex: 1 },
  { id: 'q8-2', chapterId: 8, question: 'The Balance Sheet equation is:', options: ['Assets = Liabilities + Equity', 'Assets + Equity = Liabilities', 'Sales = Assets', 'COGS = Liabilities'], correctIndex: 0 },
  { id: 'q8-3', chapterId: 8, question: 'Non-current assets include:', options: ['Debtors', 'Building/Plant', 'Stock', 'Prepaid expenses'], correctIndex: 1 },
  { id: 'q8-4', chapterId: 8, question: 'Current liabilities include:', options: ['Furniture', 'Creditors', 'Land', 'Goodwill'], correctIndex: 1 },
  { id: 'q8-5', chapterId: 8, question: 'Where does capital appear on the Balance Sheet?', options: ['Assets side', 'Liabilities side', 'Nowhere', 'Header'], correctIndex: 1 },
  { id: 'q8-6', chapterId: 8, question: 'An overdraft balance is shown as:', options: ['A positive asset', 'A negative (unfavourable) liability', 'Income', 'Equity'], correctIndex: 1 },
  { id: 'q8-7', chapterId: 8, question: 'The BS "balances" after adding:', options: ['Only sales', 'Net profit/loss to capital', 'Only drawings', 'Only tax'], correctIndex: 1 },
  { id: 'q8-8', chapterId: 8, question: 'Which is a current asset?', options: ['Machinery', 'Closing stock', 'Building', 'Goodwill'], correctIndex: 1 },
  { id: 'q8-9', chapterId: 8, question: 'Order of liquidity is a way to present:', options: ['Only incomes', 'Current assets by how quickly they become cash', 'Capital', 'Tax'], correctIndex: 1 },
  { id: 'q8-10', chapterId: 8, question: 'If Assets ₹8L and Liabilities ₹3L, Equity =', options: ['₹11L', '₹5L', '₹3L', '₹8L'], correctIndex: 1 },

  // ===== Chapter 9 =====
  { id: 'q9-1', chapterId: 9, question: 'A Bank Reconciliation Statement explains the difference between:', options: ['Two ledgers', 'Cash Book and Pass Book balances', 'Sales and purchase', 'Tax and profit'], correctIndex: 1 },
  { id: 'q9-2', chapterId: 9, question: 'Cheques deposited but not yet cleared cause the Pass Book to be:', options: ['Higher than Cash Book', 'Lower than Cash Book', 'Equal', 'Closed'], correctIndex: 1 },
  { id: 'q9-3', chapterId: 9, question: 'Cheques issued but not presented cause the Pass Book to be:', options: ['Lower than Cash Book', 'Higher than Cash Book', 'Equal', 'Nil'], correctIndex: 0 },
  { id: 'q9-4', chapterId: 9, question: 'Bank charges debited by the bank but not yet in the Cash Book:', options: ['Increase Cash Book', 'Reduce Cash Book balance', 'No effect', 'Increase profit'], correctIndex: 1 },
  { id: 'q9-5', chapterId: 9, question: 'Timing differences in a BRS are:', options: ['Always errors', 'Normal and reverse next period', 'Fraud', 'Taxable'], correctIndex: 1 },
  { id: 'q9-6', chapterId: 9, question: 'An actual error found must be:', options: ['Ignored', 'Corrected in the books', 'Added to BRS only', 'Reported to IT dept'], correctIndex: 1 },
  { id: 'q9-7', chapterId: 9, question: 'Direct deposit by a customer into the bank appears in the:', options: ['Cash Book first', 'Pass Book but not yet Cash Book', 'Neither', 'Both equally'], correctIndex: 1 },
  { id: 'q9-8', chapterId: 9, question: 'The goal of a BRS is that adjusted:', options: ['Cash Book < Pass Book', 'Cash Book = Pass Book', 'Cash Book > Pass Book', 'Both zero'], correctIndex: 1 },
  { id: 'q9-9', chapterId: 9, question: 'Interest credited by bank is:', options: ['A debit in Cash Book', 'A credit increasing Cash Book balance', 'An expense', 'A liability'], correctIndex: 1 },
  { id: 'q9-10', chapterId: 9, question: 'If starting from the Cash Book balance, a cheque deposited but uncleared is:', options: ['Added', 'Subtracted', 'Ignored', 'Doubled'], correctIndex: 1 },

  // ===== Chapter 10 =====
  { id: 'q10-1', chapterId: 10, question: 'A Cash Flow Statement classifies flows into:', options: ['Only operating', 'Operating, Investing, Financing', 'Only sales', 'Only tax'], correctIndex: 1 },
  { id: 'q10-2', chapterId: 10, question: 'Which is an investing activity?', options: ['Sale of goods', 'Purchase of machinery', 'Payment of salary', 'Issue of shares'], correctIndex: 1 },
  { id: 'q10-3', chapterId: 10, question: 'Which is a financing activity?', options: ['Cash from customers', 'Repayment of bank loan', 'Payment to suppliers', 'Depreciation'], correctIndex: 1 },
  { id: 'q10-4', chapterId: 10, question: 'Under the indirect method, we start with:', options: ['Cash sales', 'Net profit', 'Total assets', 'Capital'], correctIndex: 1 },
  { id: 'q10-5', chapterId: 10, question: 'Depreciation is added back because it is:', options: ['A cash outflow', 'A non-cash expense', 'A liability', 'Revenue'], correctIndex: 1 },
  { id: 'q10-6', chapterId: 10, question: 'An increase in debtors is:', options: ['Added', 'Subtracted (indirect method)', 'Ignored', 'A financing flow'], correctIndex: 1 },
  { id: 'q10-7', chapterId: 10, question: 'An increase in creditors is:', options: ['Subtracted', 'Added (indirect method)', 'Ignored', 'An investing flow'], correctIndex: 1 },
  { id: 'q10-8', chapterId: 10, question: 'The standard governing CFS in India is:', options: ['AS 2', 'AS 3', 'AS 10', 'AS 20'], correctIndex: 1 },
  { id: 'q10-9', chapterId: 10, question: 'Closing cash must equal:', options: ['Net profit', 'Cash in the Balance Sheet', 'Sales', 'Capital'], correctIndex: 1 },
  { id: 'q10-10', chapterId: 10, question: 'Payment of dividend is a:', options: ['Operating activity (AS 3 old)', 'Financing activity', 'Investing activity', 'Non-cash'], correctIndex: 1 },

  // ===== Chapter 11 =====
  { id: 'q11-1', chapterId: 11, question: 'Accounts Receivable are:', options: ['Amounts owed to suppliers', 'Amounts owed by customers (asset)', 'A liability', 'Cash'], correctIndex: 1 },
  { id: 'q11-2', chapterId: 11, question: 'Accounts Payable are:', options: ['A current asset', 'Amounts owed to suppliers (liability)', 'Capital', 'Revenue'], correctIndex: 1 },
  { id: 'q11-3', chapterId: 11, question: 'Trade discount is:', options: ['Recorded as an expense', 'Deducted before recording the transaction', 'Always allowed for late pay', 'A liability'], correctIndex: 1 },
  { id: 'q11-4', chapterId: 11, question: 'Cash discount is:', options: ['An income only', 'An expense to the receiver / income to the giver', 'Never recorded', 'A tax'], correctIndex: 1 },
  { id: 'q11-5', chapterId: 11, question: 'Allowance for doubtful debts:', options: ['Increases receivables', 'Reduces receivables carrying value', 'Is a revenue', 'Is capital'], correctIndex: 1 },
  { id: 'q11-6', chapterId: 11, question: 'A bad debt written off is:', options: ['Income', 'An expense', 'Capital', 'A liability'], correctIndex: 1 },
  { id: 'q11-7', chapterId: 11, question: 'Debtors turnover =', options: ['Credit Sales ÷ Average Debtors', 'Sales ÷ Fixed Assets', 'Profit ÷ Sales', 'Stock ÷ COGS'], correctIndex: 0 },
  { id: 'q11-8', chapterId: 11, question: 'Ageing of debtors is used to:', options: ['Value stock', 'Prioritise collection by overdue period', 'Compute tax', 'Pay creditors'], correctIndex: 1 },
  { id: 'q11-9', chapterId: 11, question: 'Recovery of a previously written-off debt is:', options: ['An expense', 'Income', 'Capital', 'A liability'], correctIndex: 1 },
  { id: 'q11-10', chapterId: 11, question: 'Higher debtors turnover generally means:', options: ['Slower collection', 'Faster collection', 'More bad debts always', 'Lower sales'], correctIndex: 1 },

  // ===== Chapter 12 =====
  { id: 'q12-1', chapterId: 12, question: 'Depreciation allocates an asset’s cost over its:', options: ['Day of purchase', 'Useful life', 'Resale date', 'Audit date'], correctIndex: 1 },
  { id: 'q12-2', chapterId: 12, question: 'Straight Line Method charges:', options: ['More each year', 'An equal amount each year', 'Zero', 'Random amounts'], correctIndex: 1 },
  { id: 'q12-3', chapterId: 12, question: 'For an asset costing ₹1,00,000, salvage ₹10,000, life 9 yrs (SLM), annual depreciation =', options: ['₹10,000', '₹11,111', '₹9,000', '₹1,00,000'], correctIndex: 0 },
  { id: 'q12-4', chapterId: 12, question: 'Written Down Value method charges:', options: ['Equal amounts', 'A rate on opening WDV (falling charge)', 'Nothing', 'On sales'], correctIndex: 1 },
  { id: 'q12-5', chapterId: 12, question: 'Depreciation accounting entry is:', options: ['Dr Depreciation, Cr Asset', 'Dr Depreciation, Cr Accumulated Depreciation', 'Dr Cash, Cr Depreciation', 'Dr Asset, Cr Depreciation'], correctIndex: 1 },
  { id: 'q12-6', chapterId: 12, question: 'Accumulated depreciation is a:', options: ['Revenue', 'Contra asset', 'Liability', 'Capital'], correctIndex: 1 },
  { id: 'q12-7', chapterId: 12, question: 'Units of Production method bases charge on:', options: ['Time only', 'Actual usage/units', 'Sales', 'Profit'], correctIndex: 1 },
  { id: 'q12-8', chapterId: 12, question: 'Which method gives higher profit early?', options: ['WDV', 'SLM', 'Both equal', 'Neither'], correctIndex: 1 },
  { id: 'q12-9', chapterId: 12, question: 'Changing depreciation method is a:', options: ['Routine entry', 'Change in accounting policy needing disclosure', 'Tax crime', 'Not allowed ever'], correctIndex: 1 },
  { id: 'q12-10', chapterId: 12, question: 'SLM rate for asset life 10 yrs (no salvage) ≈', options: ['10%', '20%', '5%', '100%'], correctIndex: 0 },

  // ===== Chapter 13 =====
  { id: 'q13-1', chapterId: 13, question: 'Inventory valuation affects:', options: ['Only the BS', 'Both BS (stock) and IS (COGS)', 'Only tax', 'Only cash'], correctIndex: 1 },
  { id: 'q13-2', chapterId: 13, question: 'Under FIFO, ending inventory reflects:', options: ['Oldest prices', 'Most recent prices', 'Average only', 'Lowest only'], correctIndex: 1 },
  { id: 'q13-3', chapterId: 13, question: 'Weighted Average cost is recomputed:', options: ['Yearly', 'After each purchase', 'Never', 'At sale only'], correctIndex: 1 },
  { id: 'q13-4', chapterId: 13, question: 'AS 2 values inventory at the lower of:', options: ['Cost or NRV', 'Cost or sales price', 'NRV or profit', 'Market or tax'], correctIndex: 0 },
  { id: 'q13-5', chapterId: 13, question: 'NRV =', options: ['Selling price + costs to sell', 'Estimated selling price − costs to sell', 'Cost + profit', 'Cost only'], correctIndex: 1 },
  { id: 'q13-6', chapterId: 13, question: 'In a rising-price environment, FIFO gives:', options: ['Higher COGS, lower profit', 'Lower COGS, higher profit', 'No difference', 'Zero COGS'], correctIndex: 1 },
  { id: 'q13-7', chapterId: 13, question: 'Perpetual inventory keeps a:', options: ['Year-end count only', 'Continuous running balance', 'Tax record', 'Bank record'], correctIndex: 1 },
  { id: 'q13-8', chapterId: 13, question: 'LIFO is:', options: ['Preferred under AS 2', 'Not permitted under AS 2 / Ind AS', 'Mandatory', 'A tax method only'], correctIndex: 1 },
  { id: 'q13-9', chapterId: 13, question: 'COGS (periodic) =', options: ['Opening + Purchases − Closing', 'Opening − Purchases + Closing', 'Sales − Opening', 'Purchases only'], correctIndex: 0 },
  { id: 'q13-10', chapterId: 13, question: 'If Opening ₹20k, Purchases ₹80k, Closing ₹30k, COGS =', options: ['₹70k', '₹130k', '₹50k', '₹30k'], correctIndex: 0 },

  // ===== Chapter 14 =====
  { id: 'q14-1', chapterId: 14, question: 'Current Ratio =', options: ['Current Assets ÷ Current Liabilities', 'Sales ÷ Assets', 'Profit ÷ Sales', 'Debt ÷ Equity'], correctIndex: 0 },
  { id: 'q14-2', chapterId: 14, question: 'Ideal Current Ratio is approximately:', options: ['1:1', '2:1', '0.5:1', '5:1'], correctIndex: 1 },
  { id: 'q14-3', chapterId: 14, question: 'Quick Ratio excludes:', options: ['Debtors', 'Stock (inventory)', 'Cash', 'Bank'], correctIndex: 1 },
  { id: 'q14-4', chapterId: 14, question: 'Debt-Equity Ratio =', options: ['Total Debt ÷ Equity', 'Equity ÷ Debt', 'Sales ÷ Debt', 'Profit ÷ Equity'], correctIndex: 0 },
  { id: 'q14-5', chapterId: 14, question: 'Net Profit Ratio =', options: ['NP ÷ Net Sales', 'Sales ÷ NP', 'Assets ÷ NP', 'Debt ÷ NP'], correctIndex: 0 },
  { id: 'q14-6', chapterId: 14, question: 'Inventory Turnover =', options: ['COGS ÷ Average Inventory', 'Sales ÷ Debtors', 'Profit ÷ Sales', 'Assets ÷ Sales'], correctIndex: 0 },
  { id: 'q14-7', chapterId: 14, question: 'EPS =', options: ['(NP − Pref Dividend) ÷ Avg Equity Shares', 'NP ÷ Debt', 'Sales ÷ Shares', 'Assets ÷ Shares'], correctIndex: 0 },
  { id: 'q14-8', chapterId: 14, question: 'ROCE =', options: ['EBIT ÷ Capital Employed', 'Sales ÷ EBIT', 'Profit ÷ Stock', 'Debt ÷ Assets'], correctIndex: 0 },
  { id: 'q14-9', chapterId: 14, question: 'A high debt-equity ratio indicates:', options: ['Low risk', 'Higher financial risk', 'No borrowings', 'High liquidity'], correctIndex: 1 },
  { id: 'q14-10', chapterId: 14, question: 'Ratios are meaningful when:', options: ['Read alone', 'Compared with benchmarks and trends', 'Ignored', 'Always equal'], correctIndex: 1 },

  // ===== Chapter 15 =====
  { id: 'q15-1', chapterId: 15, question: 'A budget is a:', options: ['Past record', 'Quantitative plan for the future', 'Tax return', 'Audit report'], correctIndex: 1 },
  { id: 'q15-2', chapterId: 15, question: 'The master budget culminates in:', options: ['Only a cash budget', 'Budgeted P&L and Balance Sheet', 'A tax form', 'A ledger'], correctIndex: 1 },
  { id: 'q15-3', chapterId: 15, question: 'A flexible budget:', options: ['Never changes', 'Adjusts for actual activity levels', 'Is illegal', 'Has no variance'], correctIndex: 1 },
  { id: 'q15-4', chapterId: 15, question: 'Zero-based budgeting builds each item:', options: ['From last year’s base', 'From zero each period', 'From sales only', 'From tax'], correctIndex: 1 },
  { id: 'q15-5', chapterId: 15, question: 'Variance =', options: ['Actual − Budget', 'Budget − Actual always', 'Sales − Cost', 'Profit only'], correctIndex: 0 },
  { id: 'q15-6', chapterId: 15, question: 'If actual profit > budgeted profit, the variance is:', options: ['Adverse', 'Favourable', 'Zero', 'Unknown'], correctIndex: 1 },
  { id: 'q15-7', chapterId: 15, question: 'A cash budget forecasts:', options: ['Only sales', 'Cash receipts and payments', 'Only tax', 'Only profit'], correctIndex: 1 },
  { id: 'q15-8', chapterId: 15, question: 'Budgetary control uses variances to:', options: ['Ignore performance', 'Correct performance during the period', 'File returns', 'Pay dividends'], correctIndex: 1 },
  { id: 'q15-9', chapterId: 15, question: 'A fixed budget is best when:', options: ['Activity varies a lot', 'Activity is stable', 'Never', 'Only for tax'], correctIndex: 1 },
  { id: 'q15-10', chapterId: 15, question: 'A favourable material price variance occurs when:', options: ['Price paid > standard', 'Price paid < standard', 'Output falls', 'Sales rise'], correctIndex: 1 },

  // ===== Chapter 16 =====
  { id: 'q16-1', chapterId: 16, question: 'Gross salary includes:', options: ['Only basic', 'Basic + allowances', 'Only PF', 'Only tax'], correctIndex: 1 },
  { id: 'q16-2', chapterId: 16, question: 'Net pay =', options: ['Gross + deductions', 'Gross − deductions', 'Basic only', 'Tax only'], correctIndex: 1 },
  { id: 'q16-3', chapterId: 16, question: 'Employees’ Provident Fund is:', options: ['A revenue', 'A statutory deduction split employee/employer', 'Capital', 'A liability only'], correctIndex: 1 },
  { id: 'q16-4', chapterId: 16, question: 'Payroll entry debits:', options: ['Cash', 'Salary Expense', 'Capital', 'Sales'], correctIndex: 1 },
  { id: 'q16-5', chapterId: 16, question: 'Employer PF contribution is:', options: ['An employee benefit cost', 'A revenue', 'Capital', 'Tax'], correctIndex: 0 },
  { id: 'q16-6', chapterId: 16, question: 'Accrued but unpaid salary at year end is a:', options: ['Asset', 'Current liability (outstanding expense)', 'Revenue', 'Capital'], correctIndex: 1 },
  { id: 'q16-7', chapterId: 16, question: 'TDS on salary is deducted by the:', options: ['Employee', 'Employer (deductor)', 'Bank', 'Government directly'], correctIndex: 1 },
  { id: 'q16-8', chapterId: 16, question: 'Gratuity is:', options: ['A one-time penalty', 'A statutory retirement benefit accrued as expense', 'Sales', 'Tax'], correctIndex: 1 },
  { id: 'q16-9', chapterId: 16, question: 'Salary is classified as a:', options: ['Direct expense', 'Indirect expense', 'Revenue', 'Asset'], correctIndex: 1 },
  { id: 'q16-10', chapterId: 16, question: 'If Gross ₹60,000 and deductions ₹10,000, Net pay =', options: ['₹70,000', '₹50,000', '₹10,000', '₹60,000'], correctIndex: 1 },

  // ===== Chapter 17 =====
  { id: 'q17-1', chapterId: 17, question: 'A company has:', options: ['No legal identity', 'Separate legal identity', 'No capital', 'No shareholders'], correctIndex: 1 },
  { id: 'q17-2', chapterId: 17, question: 'Which is the maximum capital a company may issue?', options: ['Called-up', 'Authorised', 'Paid-up', 'Reserved'], correctIndex: 1 },
  { id: 'q17-3', chapterId: 17, question: 'Shares issued above face value create:', options: ['A loss', 'Securities Premium', 'A liability', 'Revenue'], correctIndex: 1 },
  { id: 'q17-4', chapterId: 17, question: 'Calls in arrears is:', options: ['A liability', 'Deducted from called-up capital', 'Revenue', 'An asset at cost'], correctIndex: 1 },
  { id: 'q17-5', chapterId: 17, question: 'Forfeiture of shares happens when a shareholder:', options: ['Pays early', 'Fails to pay called money', 'Dies', 'Sells shares'], correctIndex: 1 },
  { id: 'q17-6', chapterId: 17, question: 'Reissue of forfeited shares can be at a discount not exceeding:', options: ['Face value', 'Forfeited amount on those shares', '₹0 always', 'Market price'], correctIndex: 1 },
  { id: 'q17-7', chapterId: 17, question: 'Securities Premium Reserve may be used for:', options: ['Paying dividends', 'Buyback / bonus issue (permitted purposes)', 'Salary', 'Tax'], correctIndex: 1 },
  { id: 'q17-8', chapterId: 17, question: 'Equity shares carry:', options: ['Fixed dividend', 'Voting rights and residual claim', 'No risk', 'Priority'], correctIndex: 1 },
  { id: 'q17-9', chapterId: 17, question: 'Calls in advance is:', options: ['An asset', 'A liability to the company', 'Capital', 'Revenue'], correctIndex: 1 },
  { id: 'q17-10', chapterId: 17, question: 'Issue at discount is:', options: ['Always allowed', 'Restricted by law', 'Mandatory', 'A revenue'], correctIndex: 1 },

  // ===== Chapter 18 =====
  { id: 'q18-1', chapterId: 18, question: 'A partnership is governed by the Partnership Act of:', options: ['1932', '1961', '2013', '1956'], correctIndex: 0 },
  { id: 'q18-2', chapterId: 18, question: 'If the deed is silent, profits are shared:', options: ['By capital ratio', 'Equally', 'By salary', 'By age'], correctIndex: 1 },
  { id: 'q18-3', chapterId: 18, question: 'In a fluctuating capital account, all adjustments are:', options: ['Kept separate', 'Shown in the one capital account', 'Ignored', 'In a loan'], correctIndex: 1 },
  { id: 'q18-4', chapterId: 18, question: 'Interest on capital is:', options: ['A revenue', 'An appropriation of profit', 'A liability', 'An asset'], correctIndex: 1 },
  { id: 'q18-5', chapterId: 18, question: 'A guarantee of profit assures a partner a:', options: ['Maximum loss', 'Minimum profit', 'Zero', 'Fixed salary'], correctIndex: 1 },
  { id: 'q18-6', chapterId: 18, question: 'On admission of a partner, there is usually:', options: ['No change', 'Revaluation of assets/liabilities + new PSR', 'Only tax', 'Closure'], correctIndex: 1 },
  { id: 'q18-7', chapterId: 18, question: 'Goodwill on admission is compensated by the:', options: ['Government', 'Incoming/new partner', 'Bank', 'Customers'], correctIndex: 1 },
  { id: 'q18-8', chapterId: 18, question: 'On retirement, the outgoing partner is paid:', options: ['Nothing', 'Adjusted capital + goodwill + profit to date', 'Only salary', 'Tax'], correctIndex: 1 },
  { id: 'q18-9', chapterId: 18, question: 'A fixed capital account keeps capital:', options: ['Fluctuating', 'Intact separately from adjustments', 'At zero', 'In cash only'], correctIndex: 1 },
  { id: 'q18-10', chapterId: 18, question: 'Deficiency under a profit guarantee is borne by:', options: ['The guaranteed partner', 'Other partners in PSR', 'The bank', 'Customers'], correctIndex: 1 },

  // ===== Chapter 19 =====
  { id: 'q19-1', chapterId: 19, question: 'Consolidated financial statements present:', options: ['One subsidiary only', 'Parent + subsidiaries as one entity', 'Only the parent', 'Tax only'], correctIndex: 1 },
  { id: 'q19-2', chapterId: 19, question: 'Consolidation is required when the parent has:', options: ['No control', 'Control over the investee', 'Only a loan', 'No shares'], correctIndex: 1 },
  { id: 'q19-3', chapterId: 19, question: 'Goodwill on consolidation =', options: ['Consideration + NCI − FV net assets', 'Assets − Liabilities', 'Sales − COGS', 'Capital only'], correctIndex: 0 },
  { id: 'q19-4', chapterId: 19, question: 'Intra-group sales are:', options: ['Ignored', 'Eliminated on consolidation', 'Doubled', 'Taxed twice'], correctIndex: 1 },
  { id: 'q19-5', chapterId: 19, question: 'Non-controlling interest (NCI) is:', options: ['The parent’s full equity', 'The portion not owned by the parent', 'A liability', 'Revenue'], correctIndex: 1 },
  { id: 'q19-6', chapterId: 19, question: 'Unrealised profit in ending inventory is:', options: ['Ignored', 'Eliminated', 'Taxed', 'Capitalised'], correctIndex: 1 },
  { id: 'q19-7', chapterId: 19, question: 'The relevant standard is:', options: ['Ind AS 110', 'Ind AS 2', 'Ind AS 16', 'Ind AS 7'], correctIndex: 0 },
  { id: 'q19-8', chapterId: 19, question: 'NCI shares in:', options: ['Only the parent’s profit', 'Post-acquisition profit per its %', 'Tax', 'Dividends only'], correctIndex: 1 },
  { id: 'q19-9', chapterId: 19, question: 'A subsidiary held only for resale is:', options: ['Always consolidated', 'Not consolidated', 'Taxed', 'Ignored'], correctIndex: 1 },
  { id: 'q19-10', chapterId: 19, question: 'Intra-group balances are:', options: ['Left as is', 'Eliminated', 'Doubled', 'Capitalised'], correctIndex: 1 },

  // ===== Chapter 20 =====
  { id: 'q20-1', chapterId: 20, question: 'Under Ind AS 116, most leases recognise a:', options: ['Nothing', 'Right-of-Use asset + lease liability', 'Only rent', 'Only tax'], correctIndex: 1 },
  { id: 'q20-2', chapterId: 20, question: 'A finance lease transfers substantially all:', options: ['Taxes', 'Risks and rewards of ownership', 'Employees', 'Dividends'], correctIndex: 1 },
  { id: 'q20-3', chapterId: 20, question: 'Lease liability =', options: ['Asset cost', 'PV of future lease payments', 'Rent per month', 'Deposit'], correctIndex: 1 },
  { id: 'q20-4', chapterId: 20, question: 'ROU asset =', options: ['Lease liability + direct costs + prepaid − incentives', 'Asset cost only', 'Rent only', 'Tax'], correctIndex: 0 },
  { id: 'q20-5', chapterId: 20, question: 'Each period the lessee recognises:', options: ['Only rent', 'Interest on liability + depreciation of ROU', 'Only tax', 'Dividend'], correctIndex: 1 },
  { id: 'q20-6', chapterId: 20, question: 'Short-term leases (<12 months) may use:', options: ['No accounting', 'Simplified expense-as-incurred model', 'Full consolidation', 'Tax only'], correctIndex: 1 },
  { id: 'q20-7', chapterId: 20, question: 'The discount rate is the:', options: ['Implicit rate or incremental borrowing rate', 'Fixed 10%', 'Tax rate', 'Wage rate'], correctIndex: 0 },
  { id: 'q20-8', chapterId: 20, question: 'A low-value lease may use the:', options: ['Full model only', 'Simplified model', 'Consolidation', 'Tax model'], correctIndex: 1 },
  { id: 'q20-9', chapterId: 20, question: 'Lessor accounting recognises:', options: ['Nothing', 'Finance/operating lease income', 'Only tax', 'Dividends'], correctIndex: 1 },
  { id: 'q20-10', chapterId: 20, question: 'Prepaid lease payments are:', options: ['Added to ROU asset', 'A liability', 'Revenue', 'Tax'], correctIndex: 0 },

  // ===== Chapter 21 =====
  { id: 'q21-1', chapterId: 21, question: 'Financial instruments are governed by:', options: ['Ind AS 109', 'Ind AS 2', 'Ind AS 7', 'Ind AS 1'], correctIndex: 0 },
  { id: 'q21-2', chapterId: 21, question: 'Three classifications for financial assets include:', options: ['Amortised Cost, FVTOCI, FVTPL', 'Only Cash', 'Only Sales', 'Only Tax'], correctIndex: 0 },
  { id: 'q21-3', chapterId: 21, question: 'Amortised cost test requires business model =', options: ['Trade', 'Hold to collect + SPPI cash flows', 'Sell fast', 'Hedge'], correctIndex: 1 },
  { id: 'q21-4', chapterId: 21, question: 'SPPI stands for:', options: ['Special Principal Profit Interest', 'Solely Payments of Principal and Interest', 'Shared Profit Investment', 'Standard Premium Interest'], correctIndex: 1 },
  { id: 'q21-5', chapterId: 21, question: 'Equity investments are normally:', options: ['Amortised cost', 'FVTPL unless designated FVTOCI', 'Never measured', 'Tax'], correctIndex: 1 },
  { id: 'q21-6', chapterId: 21, question: 'Expected Credit Loss model requires:', options: ['Ignoring risk', 'Forward-looking impairment', 'Only past data', 'No estimate'], correctIndex: 1 },
  { id: 'q21-7', chapterId: 21, question: 'FVTPL means:', options: ['Fair Value Through Profit or Loss', 'Fixed Value Tax Paid', 'Final Value Total Profit', 'First Value Tax Paid'], correctIndex: 0 },
  { id: 'q21-8', chapterId: 21, question: 'Held-for-trading instruments are always:', options: ['Amortised cost', 'FVTPL', 'FVTOCI', 'Ignored'], correctIndex: 1 },
  { id: 'q21-9', chapterId: 21, question: 'Financial liabilities are usually at:', options: ['Market value', 'Amortised cost', 'Zero', 'Tax'], correctIndex: 1 },
  { id: 'q21-10', chapterId: 21, question: 'A derivative is measured at:', options: ['Cost', 'FVTPL', 'Amortised', 'Tax'], correctIndex: 1 },

  // ===== Chapter 22 =====
  { id: 'q22-1', chapterId: 22, question: 'Revenue recognition follows a:', options: ['3-step', '5-step model', '1-step', 'No model'], correctIndex: 1 },
  { id: 'q22-2', chapterId: 22, question: 'Revenue is recognised when:', options: ['Cash is received', 'Control transfers to the customer', 'Order is placed', 'Year end'], correctIndex: 1 },
  { id: 'q22-3', chapterId: 22, question: 'A provision is recognised when there is a:', options: ['Possible obligation only', 'Present obligation, probable outflow, reliable estimate', 'No obligation', 'Past event only'], correctIndex: 1 },
  { id: 'q22-4', chapterId: 22, question: 'A contingent liability is:', options: ['Recognised in books', 'Disclosed in notes only', 'Capital', 'Revenue'], correctIndex: 1 },
  { id: 'q22-5', chapterId: 22, question: 'Adjusting events after reporting period are:', options: ['Disclosed only', 'Provided for', 'Ignored', 'Taxed'], correctIndex: 1 },
  { id: 'q22-6', chapterId: 22, question: 'Prior-period errors are:', options: ['Charged to current profit', 'Restated', 'Ignored', 'Taxed'], correctIndex: 1 },
  { id: 'q22-7', chapterId: 22, question: 'Segment reporting standard is:', options: ['Ind AS 108', 'Ind AS 1', 'Ind AS 2', 'Ind AS 7'], correctIndex: 0 },
  { id: 'q22-8', chapterId: 22, question: 'Non-adjusting events after the period are:', options: ['Provided for', 'Disclosed only', 'Restated', 'Capitalised'], correctIndex: 1 },
  { id: 'q22-9', chapterId: 22, question: 'A performance obligation is satisfied by:', options: ['Signing', 'Transferring control of good/service', 'Quoting', 'Advertising'], correctIndex: 1 },
  { id: 'q22-10', chapterId: 22, question: 'The relevant standard for revenue is:', options: ['Ind AS 115', 'Ind AS 16', 'Ind AS 32', 'Ind AS 1'], correctIndex: 0 },

  // ===== Chapter 23 =====
  { id: 'q23-1', chapterId: 23, question: 'Income tax in India is levied under the:', options: ['Companies Act', 'Income-tax Act, 1961', 'GST Act', 'Partnership Act'], correctIndex: 1 },
  { id: 'q23-2', chapterId: 23, question: 'The financial year in India runs:', options: ['Jan–Dec', 'Apr 1 – Mar 31', 'Mar–Feb', 'Jul–Jun'], correctIndex: 1 },
  { id: 'q23-3', chapterId: 23, question: 'Which is NOT a head of income?', options: ['Salaries', 'House Property', 'Capital Gains', 'Inventory Gains'], correctIndex: 3 },
  { id: 'q23-4', chapterId: 23, question: 'Deduction u/s 80C is available up to:', options: ['₹50,000', '₹1,50,000', '₹2,50,000', '₹5,00,000'], correctIndex: 1 },
  { id: 'q23-5', chapterId: 23, question: 'Basic exemption for an individual below 60 (old regime) is:', options: ['₹1,50,000', '₹2,50,000', '₹5,00,000', '₹0'], correctIndex: 1 },
  { id: 'q23-6', chapterId: 23, question: 'Health & Education Cess is charged at:', options: ['1%', '4%', '10%', '18%'], correctIndex: 1 },
  { id: 'q23-7', chapterId: 23, question: 'Rebate u/s 87A (old regime) applies to income up to:', options: ['₹2,50,000', '₹5,00,000', '₹10,00,000', '₹1,50,000'], correctIndex: 1 },
  { id: 'q23-8', chapterId: 23, question: 'Advance tax is payable when annual tax liability exceeds:', options: ['₹1,000', '₹10,000', '₹1,00,000', '₹0'], correctIndex: 1 },
  { id: 'q23-9', chapterId: 23, question: 'Gross Total Income is the sum of:', options: ['All five heads', 'Only salaries', 'Only capital gains', 'Sales'], correctIndex: 0 },
  { id: 'q23-10', chapterId: 23, question: 'Total Income =', options: ['GTI + deductions', 'GTI − Chapter VI-A deductions', 'Sales − GTI', 'GTI only'], correctIndex: 1 },

  // ===== Chapter 24 =====
  { id: 'q24-1', chapterId: 24, question: 'TDS stands for:', options: ['Tax on Direct Sales', 'Tax Deducted at Source', 'Total Deduction System', 'Tax Due Soon'], correctIndex: 1 },
  { id: 'q24-2', chapterId: 24, question: 'TCS stands for:', options: ['Tax Collected at Source', 'Total Cash Sales', 'Tax Credit System', 'Tax on Capital'], correctIndex: 0 },
  { id: 'q24-3', chapterId: 24, question: 'TDS on professional/technical fees (194J) is:', options: ['1%', '2%', '10%', '18%'], correctIndex: 2 },
  { id: 'q24-4', chapterId: 24, question: 'A person deducting tax must have a:', options: ['PAN only', 'TAN', 'GSTIN', 'Aadhaar'], correctIndex: 1 },
  { id: 'q24-5', chapterId: 24, question: 'TDS returns are filed:', options: ['Yearly', 'Quarterly', 'Never', 'Weekly'], correctIndex: 1 },
  { id: 'q24-6', chapterId: 24, question: 'TCS on sale of goods (206C(1H)) applies above receipts of:', options: ['₹5 lakh', '₹50 lakh', '₹1 crore', '₹10 lakh'], correctIndex: 1 },
  { id: 'q24-7', chapterId: 24, question: 'The deductee claims credit via:', options: ['Cash', 'Form 26AS / AIS against PAN', 'Cheque', 'Invoice'], correctIndex: 1 },
  { id: 'q24-8', chapterId: 24, question: 'Late deposit of TDS attracts interest u/s:', options: ['201(1A)', '80C', '44AB', '194C'], correctIndex: 0 },
  { id: 'q24-9', chapterId: 24, question: 'TDS on works contracts (194C) is:', options: ['10%', '1%/2%', '18%', '5%'], correctIndex: 1 },
  { id: 'q24-10', chapterId: 24, question: 'If TDS is not deposited, the expense is:', options: ['Always allowed', 'Disallowed', 'Doubled', 'Ignored'], correctIndex: 1 },

  // ===== Chapter 25 =====
  { id: 'q25-1', chapterId: 25, question: 'GST was implemented in India on:', options: ['1 Apr 2017', '1 Jul 2017', '1 Jan 2018', '1 Jul 2016'], correctIndex: 1 },
  { id: 'q25-2', chapterId: 25, question: 'For intra-state supply, GST is levied as:', options: ['Only IGST', 'CGST + SGST', 'Only cess', 'Only TDS'], correctIndex: 1 },
  { id: 'q25-3', chapterId: 25, question: 'For inter-state supply, GST is levied as:', options: ['CGST + SGST', 'IGST', 'Only SGST', 'Only TDS'], correctIndex: 1 },
  { id: 'q25-4', chapterId: 25, question: 'GST is charged on the:', options: ['Manufacture only', 'Supply of goods or services', 'Incorporation', 'Dividend'], correctIndex: 1 },
  { id: 'q25-5', chapterId: 25, question: 'Input Tax Credit lets a registered person:', options: ['Avoid all tax', 'Offset GST paid on inputs against GST collected', 'Ignore returns', 'Skip registration'], correctIndex: 1 },
  { id: 'q25-6', chapterId: 25, question: 'A GSTIN has how many digits?', options: ['10', '12', '15', '9'], correctIndex: 2 },
  { id: 'q25-7', chapterId: 25, question: 'The composition scheme is for:', options: ['Large exporters', 'Small taxpayers (lower fixed rate, no full ITC)', 'Banks', 'Foreign firms'], correctIndex: 1 },
  { id: 'q25-8', chapterId: 25, question: 'Common GST slabs include:', options: ['0%, 5%, 12%, 18%, 28%', 'Only 18%', 'Only 5%', '50%'], correctIndex: 0 },
  { id: 'q25-9', chapterId: 25, question: 'GST is a:', options: ['Direct tax', 'Destination-based indirect tax', 'Wealth tax', 'Customs only'], correctIndex: 1 },
  { id: 'q25-10', chapterId: 25, question: 'IGST revenue goes to the:', options: ['State only', 'Centre', 'Local body', 'Company'], correctIndex: 1 },

  // ===== Chapter 26 =====
  { id: 'q26-1', chapterId: 26, question: 'GSTR-1 reports:', options: ['Tax paid', 'Outward supplies (sales)', 'Bank balance', 'Capital'], correctIndex: 1 },
  { id: 'q26-2', chapterId: 26, question: 'GSTR-1 is due by the:', options: ['5th', '11th', '20th', '28th'], correctIndex: 1 },
  { id: 'q26-3', chapterId: 26, question: 'GSTR-3B is a:', options: ['Annual return', 'Monthly summary of sales, ITC and tax payable', 'Audit report', 'Invoice'], correctIndex: 1 },
  { id: 'q26-4', chapterId: 26, question: 'Auto-drafted ITC statements are:', options: ['GSTR-9', 'GSTR-2A/2B', 'GSTR-1', 'GSTR-3B'], correctIndex: 1 },
  { id: 'q26-5', chapterId: 26, question: 'Net tax payable =', options: ['Output GST + ITC', 'Output GST − Eligible ITC', 'Only ITC', 'Sales − ITC'], correctIndex: 1 },
  { id: 'q26-6', chapterId: 26, question: 'Late fee for GSTR-3B is about:', options: ['₹100/day fixed', '₹50/day (₹25+₹25)', '₹500/day', 'Nil'], correctIndex: 1 },
  { id: 'q26-7', chapterId: 26, question: 'GSTR-9 is the:', options: ['Monthly return', 'Annual return', 'Audit', 'Invoice'], correctIndex: 1 },
  { id: 'q26-8', chapterId: 26, question: 'Interest on late tax is charged at:', options: ['12%', '18%', '6%', '24%'], correctIndex: 1 },
  { id: 'q26-9', chapterId: 26, question: 'A mismatch between GSTR-1 and books may:', options: ['Help the recipient', 'Deny ITC to recipient until corrected', 'No effect', 'Be ignored'], correctIndex: 1 },
  { id: 'q26-10', chapterId: 26, question: 'GSTR-3B is due by the:', options: ['10th', '20th', '28th', '5th'], correctIndex: 1 },

  // ===== Chapter 27 =====
  { id: 'q27-1', chapterId: 27, question: 'E-invoicing requires generating an IRN on the:', options: ['Bank portal', 'GSTN portal', 'MCA portal', 'RBI portal'], correctIndex: 1 },
  { id: 'q27-2', chapterId: 27, question: 'IRN stands for:', options: ['Invoice Reference Number', 'Indian Return Number', 'Input Ratio Net', 'Immediate Receipt Note'], correctIndex: 0 },
  { id: 'q27-3', chapterId: 27, question: 'An IRN is a hash of:', options: ['Only invoice value', 'GSTIN + doc type + number + FY', 'Only date', 'Only PAN'], correctIndex: 1 },
  { id: 'q27-4', chapterId: 27, question: 'E-way bill is required to move goods above:', options: ['₹5,000', '₹50,000', '₹5,00,000', '₹5 lakh'], correctIndex: 1 },
  { id: 'q27-5', chapterId: 27, question: 'E-way bill Part A contains:', options: ['Vehicle number', 'Invoice/supply details', 'Driver name', 'Bank details'], correctIndex: 1 },
  { id: 'q27-6', chapterId: 27, question: 'E-invoice data auto-populates:', options: ['GSTR-1', 'IT returns', 'Balance Sheet', 'Bank'], correctIndex: 0 },
  { id: 'q27-7', chapterId: 27, question: 'A valid e-invoice must show:', options: ['No number', 'IRN + QR code', 'Only date', 'Only value'], correctIndex: 1 },
  { id: 'q27-8', chapterId: 27, question: 'E-way bill is generally valid for:', options: ['1 day per 200 km', '1 week fixed', '1 month', '1 year'], correctIndex: 0 },
  { id: 'q27-9', chapterId: 27, question: 'Part B of the e-way bill contains:', options: ['Invoice details', 'Vehicle/transporter details', 'GSTIN', 'IRN'], correctIndex: 1 },
  { id: 'q27-10', chapterId: 27, question: 'E-invoicing applies mainly to:', options: ['All B2C only', 'B2B invoices above threshold', 'Only exports', 'Only nil-rated'], correctIndex: 1 },

  // ===== Chapter 28 =====
  { id: 'q28-1', chapterId: 28, question: 'Tax audit is mandated under section:', options: ['44AD', '44AB', '80C', '194C'], correctIndex: 1 },
  { id: 'q28-2', chapterId: 28, question: 'Tax audit is mandatory if business turnover exceeds:', options: ['₹10 lakh', '₹1 crore (with relaxations)', '₹50 lakh', '₹5 crore'], correctIndex: 1 },
  { id: 'q28-3', chapterId: 28, question: 'The prescribed audit report form is:', options: ['3CD (+3CA/3CB)', 'GSTR-3B', '26AS', 'ITR-1'], correctIndex: 0 },
  { id: 'q28-4', chapterId: 28, question: 'The audit report must be furnished by:', options: ['31 Mar', '30 Sep of assessment year', '31 Dec', '28 Feb'], correctIndex: 1 },
  { id: 'q28-5', chapterId: 28, question: 'Section 44AD (presumptive taxation) declares income as:', options: ['Actual only', '8% of turnover (6% digital)', '50%', 'Zero'], correctIndex: 1 },
  { id: 'q28-6', chapterId: 28, question: 'A tax auditor must be a:', options: ['Company secretary', 'Chartered accountant', 'Cost accountant only', 'Lawyer'], correctIndex: 1 },
  { id: 'q28-7', chapterId: 28, question: 'Form 3CD is the:', options: ['Audit report', 'Statement of particulars', 'Return', 'Invoice'], correctIndex: 1 },
  { id: 'q28-8', chapterId: 28, question: 'Tax audit findings include reconciliation of:', options: ['Books with income tax', 'Only sales', 'Only bank', 'Only capital'], correctIndex: 0 },
  { id: 'q28-9', chapterId: 28, question: 'For a profession, audit threshold is turnover above:', options: ['₹50 lakh', '₹25 lakh', '₹1 crore', '₹10 lakh'], correctIndex: 0 },
  { id: 'q28-10', chapterId: 28, question: 'The audit report is filed:', options: ['On paper only', 'Electronically with the return', 'By post', 'Never'], correctIndex: 1 },
  ...FOUND_QUESTIONS,
  ...INTER_A_QUESTIONS,
  ...INTER_B_QUESTIONS,
  ...FINAL_QUESTIONS,
]
