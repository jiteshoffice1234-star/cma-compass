import type { Question } from './questions'

// Intermediate B chapters (IDs 80-104): OMSM, CAA, FMDA, MA
export const INTER_B_QUESTIONS: Question[] = [
  // ===== Chapter 80: Introduction to Operations Management =====
  { id: 'q80-1', chapterId: 80, question: 'Operations management transforms inputs into:', options: ['Finished goods and services', 'Only raw materials', 'Waste products', 'Financial statements'], correctIndex: 0 },
  { id: 'q80-2', chapterId: 80, question: 'Productivity is defined as:', options: ['Output plus input', 'Output divided by input', 'Input minus output', 'Input divided by output'], correctIndex: 1 },
  { id: 'q80-3', chapterId: 80, question: 'Which is a key decision area in operations management?', options: ['Dividend policy', 'Process design', 'Tax planning', 'Audit scheduling'], correctIndex: 1 },
  { id: 'q80-4', chapterId: 80, question: 'Service operations are characterised by:', options: ['Tangible output', 'Intangibility and inseparability', 'Storable products', 'No customer contact'], correctIndex: 1 },
  { id: 'q80-5', chapterId: 80, question: 'Operations strategy should align with:', options: ['Only competitors', 'Business strategy', 'Government policy', 'Industry norms'], correctIndex: 1 },
  { id: 'q80-6', chapterId: 80, question: 'The role of an operations manager includes:', options: ['Only hiring staff', 'Planning and controlling production systems', 'Conducting audits', 'Filing tax returns'], correctIndex: 1 },

  // ===== Chapter 81: Production Planning & Control =====
  { id: 'q81-1', chapterId: 81, question: 'The path of production is fixed by:', options: ['Routing', 'Scheduling', 'Dispatching', 'Follow-up'], correctIndex: 0 },
  { id: 'q81-2', chapterId: 81, question: 'Master Production Schedule (MPS) drives:', options: ['External auditing', 'Shop-floor control', 'Tax computation', 'Dividend declaration'], correctIndex: 1 },
  { id: 'q81-3', chapterId: 81, question: 'JIT manufacturing aims at:', options: ['Zero inventory and zero defects', 'Maximum stock levels', 'Longer lead times', 'Batch production only'], correctIndex: 0 },
  { id: 'q81-4', chapterId: 81, question: 'A Gantt chart is used for:', options: ['Tax calculation', 'Scheduling production activities', 'Preparing financial statements', 'Conducting audits'], correctIndex: 1 },
  { id: 'q81-5', chapterId: 81, question: 'Dispatching in PPC refers to:', options: ['Setting the production path', 'Releasing work orders to the shop floor', 'Determining the time of production', 'Reviewing past performance'], correctIndex: 1 },
  { id: 'q81-6', chapterId: 81, question: 'MRP in production planning stands for:', options: ['Material Requirements Planning', 'Machine Replacement Policy', 'Manufacturing Resource Audit', 'Monthly Review Process'], correctIndex: 0 },

  // ===== Chapter 82: Productivity, Capacity & Facility Layout =====
  { id: 'q82-1', chapterId: 82, question: 'Capacity utilisation is calculated as:', options: ['Design capacity times actual output', '(Actual output / Effective capacity) x 100', 'Effective capacity minus actual output', 'Actual output plus design capacity'], correctIndex: 1 },
  { id: 'q82-2', chapterId: 82, question: 'In a product layout, machines are arranged:', options: ['By function', 'Along the production line', 'In random order', 'By department'], correctIndex: 1 },
  { id: 'q82-3', chapterId: 82, question: 'Line balancing aims to:', options: ['Maximise idle time', 'Minimise idle time', 'Increase work in process', 'Reduce product quality'], correctIndex: 1 },
  { id: 'q82-4', chapterId: 82, question: 'Which is a plant location factor?', options: ['Colour of the building', 'Proximity to raw materials', 'Employee birthdays', 'Office furniture design'], correctIndex: 1 },
  { id: 'q82-5', chapterId: 82, question: 'Break-even analysis aids decisions on:', options: ['Audit scheduling', 'Make-or-buy and capacity expansion', 'Share valuation', 'Dividend payment'], correctIndex: 1 },
  { id: 'q82-6', chapterId: 82, question: 'A cellular layout groups machines by:', options: ['Machine age', 'Product families or process needs', 'Employee preference', 'Alphabetical order'], correctIndex: 1 },

  // ===== Chapter 83: Inventory & Supply Chain Management =====
  { id: 'q83-1', chapterId: 83, question: 'EOQ is the order quantity that minimises:', options: ['Total inventory cost', 'Selling price', 'Tax liability', 'Labour cost'], correctIndex: 0 },
  { id: 'q83-2', chapterId: 83, question: 'Reorder level equals:', options: ['EOQ divided by 2', 'Max consumption x Max lead time', 'Annual demand minus safety stock', 'Average inventory times holding cost'], correctIndex: 1 },
  { id: 'q83-3', chapterId: 83, question: 'ABC analysis classifies items by:', options: ['Weight and size', 'Annual consumption value', 'Colour and shape', 'Supplier reputation'], correctIndex: 1 },
  { id: 'q83-4', chapterId: 83, question: 'Holding cost includes:', options: ['Purchase price of goods', 'Storage, insurance and obsolescence cost', 'Transportation cost only', 'Sales commission'], correctIndex: 1 },
  { id: 'q83-5', chapterId: 83, question: 'Supply chain management integrates:', options: ['Only the warehouse', 'Suppliers, manufacturers, warehouses and customers', 'Only the finance department', 'Only the sales team'], correctIndex: 1 },
  { id: 'q83-6', chapterId: 83, question: 'VED analysis is used for inventory control based on:', options: ['Value of items', 'Criticality of items', 'Demand variability', 'Supplier location'], correctIndex: 1 },

  // ===== Chapter 84: Quality Management & TQM =====
  { id: 'q84-1', chapterId: 84, question: 'Cost of quality includes all EXCEPT:', options: ['Prevention costs', 'Appraisal costs', 'Advertising costs', 'External failure costs'], correctIndex: 2 },
  { id: 'q84-2', chapterId: 84, question: 'Six Sigma targets an error rate of:', options: ['3.4 errors per million opportunities', '1 error per thousand', 'Zero errors always', '10 errors per hundred'], correctIndex: 0 },
  { id: 'q84-3', chapterId: 84, question: 'Statistical Process Control uses:', options: ['Standard cost variances', 'Control limits at mean plus or minus 3 sigma', 'Break-even charts', 'Balance sheet analysis'], correctIndex: 1 },
  { id: 'q84-4', chapterId: 84, question: 'TQM stands for:', options: ['Total Quality Measurement', 'Total Quality Management', 'Technical Quality Manual', 'Time and Quantity Management'], correctIndex: 1 },
  { id: 'q84-5', chapterId: 84, question: 'DMAIC is a framework used in:', options: ['Financial accounting', 'Six Sigma projects', 'Contract costing', 'Partnership accounting'], correctIndex: 1 },
  { id: 'q84-6', chapterId: 84, question: 'Which is a quality dimension?', options: ['Colour', 'Reliability', 'Weight', 'Price'], correctIndex: 1 },

  // ===== Chapter 85: Introduction to Strategic Management =====
  { id: 'q85-1', chapterId: 85, question: 'Strategy is the long-term direction and scope of an organisation to achieve:', options: ['Daily targets', 'Competitive advantage', 'Short-term profits', 'Tax savings'], correctIndex: 1 },
  { id: 'q85-2', chapterId: 85, question: 'Which is a level of strategy?', options: ['Operational planning only', 'Corporate strategy', 'Transaction strategy', 'Audit strategy'], correctIndex: 1 },
  { id: 'q85-3', chapterId: 85, question: 'The strategic management process involves:', options: ['Recording only', 'Formulation, implementation and evaluation', 'Tax compliance only', 'Daily reporting'], correctIndex: 1 },
  { id: 'q85-4', chapterId: 85, question: 'Mission of an organisation describes its:', options: ['Profit target', 'Purpose and reason for existence', 'Share price goal', 'Employee count'], correctIndex: 1 },
  { id: 'q85-5', chapterId: 85, question: 'Porter generic strategies include:', options: ['Cost leadership, differentiation and focus', 'Expansion and retrenchment only', 'Marketing and sales only', 'Import and export'], correctIndex: 0 },
  { id: 'q85-6', chapterId: 85, question: 'Stakeholder analysis involves balancing interests of:', options: ['Only shareholders', 'Shareholders, employees, customers and society', 'Only the government', 'Only competitors'], correctIndex: 1 },

  // ===== Chapter 86: Strategic Analysis (SWOT, PESTEL, Porter) =====
  { id: 'q86-1', chapterId: 86, question: 'SWOT analysis examines:', options: ['Only external factors', 'Internal strengths/weaknesses and external opportunities/threats', 'Only financial data', 'Only competitors'], correctIndex: 1 },
  { id: 'q86-2', chapterId: 86, question: 'PESTEL stands for:', options: ['Political, Economic, Social, Technological, Environmental, Legal', 'Profit, Equity, Sales, Tax, Expenses, Loss', 'Planning, Execution, Strategy, Tactics, Evaluation, Leadership', 'Product, Employee, Service, Training, Export, Logistics'], correctIndex: 0 },
  { id: 'q86-3', chapterId: 86, question: 'Porter Five Forces include all EXCEPT:', options: ['Threat of new entrants', 'Bargaining power of buyers', 'Interest rate risk', 'Rivalry among existing competitors'], correctIndex: 2 },
  { id: 'q86-4', chapterId: 86, question: 'Value chain analysis identifies:', options: ['Only primary activities', 'Primary and support activities that create margin', 'Only cost drivers', 'Only revenue streams'], correctIndex: 1 },
  { id: 'q86-5', chapterId: 86, question: 'Gap analysis compares:', options: ['Tax paid with tax due', 'Current position with desired strategic position', 'Sales with profit', 'Assets with liabilities'], correctIndex: 1 },
  { id: 'q86-6', chapterId: 86, question: 'Bargaining power of suppliers is high when:', options: ['There are many suppliers', 'Suppliers are few and concentrated', 'Products are undifferentiated', 'Switching costs are low'], correctIndex: 1 },

  // ===== Chapter 87: Strategy Formulation & Implementation =====
  { id: 'q87-1', chapterId: 87, question: 'Porter generic strategies are:', options: ['Offensive, defensive and neutral', 'Cost leadership, differentiation and focus', 'Domestic, international and global', 'Short-term, medium-term and long-term'], correctIndex: 1 },
  { id: 'q87-2', chapterId: 87, question: 'The Ansoff matrix includes:', options: ['Market penetration, product development, market development, diversification', 'Only market penetration and growth', 'Only cost reduction and efficiency', 'Only acquisition and merger'], correctIndex: 0 },
  { id: 'q87-3', chapterId: 87, question: 'In the BCG matrix, a Star has:', options: ['Low growth and low share', 'High growth and high share', 'Low growth and high share', 'High growth and low share'], correctIndex: 1 },
  { id: 'q87-4', chapterId: 87, question: 'Grand strategies include:', options: ['Only market penetration', 'Stability, expansion, retrenchment and combination', 'Only diversification', 'Only cost cutting'], correctIndex: 1 },
  { id: 'q87-5', chapterId: 87, question: 'The Balanced Scorecard tracks perspectives of:', options: ['Only financial data', 'Financial, customer, internal-process and learning', 'Only customer satisfaction', 'Only employee happiness'], correctIndex: 1 },
  { id: 'q87-6', chapterId: 87, question: 'Strategy implementation levers include:', options: ['Only budgeting', 'Structure, culture, leadership and resource allocation', 'Only marketing', 'Only tax planning'], correctIndex: 1 },

  // ===== Chapter 88: Introduction to Financial Management =====
  { id: 'q88-1', chapterId: 88, question: 'The primary goal of financial management is to:', options: ['Maximise sales', 'Maximise shareholder wealth', 'Minimise costs at any cost', 'Maximise employee count'], correctIndex: 1 },
  { id: 'q88-2', chapterId: 88, question: 'The three finance functions are:', options: ['Production, marketing and sales', 'Investment, financing and dividend decisions', 'Audit, tax and compliance', 'Hiring, training and payroll'], correctIndex: 1 },
  { id: 'q88-3', chapterId: 88, question: 'Wealth maximisation considers:', options: ['Only profit', 'Time, risk and liquidity', 'Only liquidity', 'Only growth'], correctIndex: 1 },
  { id: 'q88-4', chapterId: 88, question: 'The agency problem arises from:', options: ['Low profitability', 'Separation of ownership and management', 'High taxation', 'Excessive regulation'], correctIndex: 1 },
  { id: 'q88-5', chapterId: 88, question: 'Time value of money is the concept that:', options: ['Money loses value over time', 'A rupee today is worth more than a rupee tomorrow', 'All currencies are equal', 'Interest does not matter'], correctIndex: 1 },
  { id: 'q88-6', chapterId: 88, question: 'The role of a CFO includes:', options: ['Only accounting', 'Treasury, capital budgeting, risk management and reporting', 'Only auditing', 'Only payroll'], correctIndex: 1 },

  // ===== Chapter 89: Time Value of Money =====
  { id: 'q89-1', chapterId: 89, question: 'Future value of a single sum is computed as:', options: ['FV = PV x (1 + r)^n', 'FV = PV / (1 + r)^n', 'FV = PV + r x n', 'FV = PV - r x n'], correctIndex: 0 },
  { id: 'q89-2', chapterId: 89, question: 'Effective Annual Rate (EAR) formula is:', options: ['(1 + i/m)^m - 1', 'i x m', 'i / m', '(1 + i)^m'], correctIndex: 0 },
  { id: 'q89-3', chapterId: 89, question: 'Perpetuity present value is calculated as:', options: ['A x (1 + r)^n', 'A / r', 'A x r', 'A / (1 + r)^n'], correctIndex: 1 },
  { id: 'q89-4', chapterId: 89, question: 'The Rule of 72 estimates:', options: ['Tax liability', 'Doubling time of an investment', 'Break-even sales', 'Depreciation amount'], correctIndex: 1 },
  { id: 'q89-5', chapterId: 89, question: 'Present value of an annuity formula is:', options: ['A x [((1 + r)^n - 1) / r]', 'A x [1 - (1 + r)^(-n)] / r', 'A x (1 + r)^n', 'A / (1 + r)^n'], correctIndex: 1 },
  { id: 'q89-6', chapterId: 89, question: 'If nominal rate is 12% compounded monthly, EAR is:', options: ['12%', '12.68%', '14%', '10%'], correctIndex: 1 },

  // ===== Chapter 90: Cost of Capital =====
  { id: 'q90-1', chapterId: 90, question: 'Cost of equity using CAPM is:', options: ['Rf + Beta x (Rm - Rf)', 'Rf - Beta x Rm', 'Beta x Rm', 'Rm + Rf'], correctIndex: 0 },
  { id: 'q90-2', chapterId: 90, question: 'After-tax cost of debt is:', options: ['Kd x t', 'Kd x (1 - t)', 'Kd + t', 'Kd / (1 - t)'], correctIndex: 1 },
  { id: 'q90-3', chapterId: 90, question: 'WACC weights should ideally be based on:', options: ['Book value', 'Market value', 'Par value', 'Scrap value'], correctIndex: 1 },
  { id: 'q90-4', chapterId: 90, question: 'Cost of preference shares is computed as:', options: ['Dp / (Pp x (1 - t))', 'Dp / Pp', 'Dp x Pp', '(Dp + Pp) / 2'], correctIndex: 1 },
  { id: 'q90-5', chapterId: 90, question: 'Dividend Growth Model for cost of equity is:', options: ['Ke = D1 / P0 + g', 'Ke = P0 / D1 + g', 'Ke = D1 x g', 'Ke = (P0 - D1) / g'], correctIndex: 0 },
  { id: 'q90-6', chapterId: 90, question: 'Marginal cost of capital rises when:', options: ['Firm uses only equity', 'Additional financing exceeds optimal capital mix', 'Interest rates fall', 'Tax rates increase'], correctIndex: 1 },

  // ===== Chapter 91: Capital Structure & Leverage =====
  { id: 'q91-1', chapterId: 91, question: 'Degree of Operating Leverage (DOL) is:', options: ['Contribution / EBIT', 'EBIT / EBT', 'Sales / EBIT', 'EBIT / Sales'], correctIndex: 0 },
  { id: 'q91-2', chapterId: 91, question: 'Degree of Financial Leverage (DFL) is:', options: ['EBIT / EBT', 'Contribution / EBIT', 'Sales / EBT', 'EBT / Sales'], correctIndex: 0 },
  { id: 'q91-3', chapterId: 91, question: 'Degree of Combined Leverage equals:', options: ['DOL + DFL', 'DOL x DFL', 'DOL - DFL', 'DOL / DFL'], correctIndex: 1 },
  { id: 'q91-4', chapterId: 91, question: 'EBIT-EPS indifference point is where:', options: ['EPS is maximised', 'EPS is equal under two financing plans', 'EBIT is maximised', 'Tax is minimised'], correctIndex: 1 },
  { id: 'q91-5', chapterId: 91, question: 'Trade-off theory balances:', options: ['Profit and loss', 'Tax shield of debt vs financial distress cost', 'Revenue and expense', 'Asset and liability'], correctIndex: 1 },
  { id: 'q91-6', chapterId: 91, question: 'Pecking order theory suggests financing preference as:', options: ['Equity then debt then internal funds', 'Internal funds then debt then equity', 'Debt then equity then internal funds', 'Equity only'], correctIndex: 1 },

  // ===== Chapter 92: Capital Budgeting =====
  { id: 'q92-1', chapterId: 92, question: 'Net Present Value (NPV) rule accepts a project when:', options: ['NPV is less than zero', 'NPV is greater than zero', 'NPV equals zero', 'NPV is negative'], correctIndex: 1 },
  { id: 'q92-2', chapterId: 92, question: 'Internal Rate of Return (IRR) is the discount rate where:', options: ['NPV is maximised', 'NPV equals zero', 'Payback is achieved', 'Profit is zero'], correctIndex: 1 },
  { id: 'q92-3', chapterId: 92, question: 'Payback period measures:', options: ['Profitability of the project', 'Time to recover initial investment', 'Net present value', 'Internal rate of return'], correctIndex: 1 },
  { id: 'q92-4', chapterId: 92, question: 'Profitability Index is:', options: ['PV of outflows / PV of inflows', 'PV of inflows / Initial outlay', 'NPV / Initial outlay', 'IRR / Cost of capital'], correctIndex: 1 },
  { id: 'q92-5', chapterId: 92, question: 'NPV and IRR may give conflicting results for:', options: ['Independent projects', 'Mutually exclusive projects of differing scale', 'Conventional cash flows', 'Single-period projects'], correctIndex: 1 },
  { id: 'q92-6', chapterId: 92, question: 'Discounted payback differs from payback by:', options: ['Ignoring time value of money', 'Using present values of cash inflows', 'Using future values only', 'Ignoring cash flows after payback'], correctIndex: 1 },

  // ===== Chapter 93: Working Capital Management =====
  { id: 'q93-1', chapterId: 93, question: 'Net working capital equals:', options: ['Current assets minus current liabilities', 'Total assets minus total liabilities', 'Fixed assets minus current assets', 'Current liabilities minus current assets'], correctIndex: 0 },
  { id: 'q93-2', chapterId: 93, question: 'The operating cycle consists of:', options: ['Inventory period plus receivables period minus payables period', 'Inventory period minus receivables period', 'Cash period only', 'Payables period only'], correctIndex: 0 },
  { id: 'q93-3', chapterId: 93, question: 'Cash Conversion Cycle (CCC) measures:', options: ['Profitability of the firm', 'Time between cash outflow and cash inflow', 'Liquidity risk', 'Return on investment'], correctIndex: 1 },
  { id: 'q93-4', chapterId: 93, question: 'Inventory turnover is calculated as:', options: ['Average inventory x 365', 'COGS / Average inventory', 'Sales / Closing inventory', 'Opening stock / Purchases'], correctIndex: 1 },
  { id: 'q93-5', chapterId: 93, question: 'A cash budget is used to:', options: ['Record past cash transactions', 'Forecast short-term surplus or deficit', 'Compute depreciation', 'Value closing stock'], correctIndex: 1 },
  { id: 'q93-6', chapterId: 93, question: 'Too little working capital leads to:', options: ['High profitability', 'Liquidity risk', 'Excessive inventory', 'High return on capital'], correctIndex: 1 },

  // ===== Chapter 94: Sources of Finance =====
  { id: 'q94-1', chapterId: 94, question: 'Which is an equity source of finance?', options: ['Debentures', 'Retained earnings', 'Term loans', 'Public deposits'], correctIndex: 1 },
  { id: 'q94-2', chapterId: 94, question: 'Debt is cheaper than equity because:', options: ['Debt carries no risk', 'Interest on debt is tax-deductible', 'Debt never needs repayment', 'Equity has lower cost'], correctIndex: 1 },
  { id: 'q94-3', chapterId: 94, question: 'A convertible debenture is a:', options: ['Pure equity instrument', 'Hybrid security combining debt and conversion option', 'Short-term loan', 'Government bond'], correctIndex: 1 },
  { id: 'q94-4', chapterId: 94, question: 'Leasing is a form of:', options: ['Equity finance', 'Asset-based off-balance-sheet finance', 'Tax payment', 'Government grant'], correctIndex: 1 },
  { id: 'q94-5', chapterId: 94, question: 'Maturity matching principle suggests:', options: ['Short-term needs from long-term sources', 'Long-term assets from long-term sources; short-term needs from short-term sources', 'All sources should be equity', 'All sources should be debt'], correctIndex: 1 },
  { id: 'q94-6', chapterId: 94, question: 'Hire-purchase differs from leasing in that:', options: ['Ownership transfers to the hirer after final payment', 'Ownership never transfers', 'Only individuals can use it', 'No interest is charged'], correctIndex: 0 },

  // ===== Chapter 95: Introduction to Business Data Analytics =====
  { id: 'q95-1', chapterId: 95, question: 'Descriptive analytics answers the question:', options: ['Why did it happen?', 'What has happened?', 'What will happen?', 'What should we do?'], correctIndex: 1 },
  { id: 'q95-2', chapterId: 95, question: 'The first step in the data lifecycle is:', options: ['Analysis', 'Collection', 'Visualisation', 'Decision'], correctIndex: 1 },
  { id: 'q95-3', chapterId: 95, question: 'Big Data is characterised by the 5V which include:', options: ['Volume, velocity, variety, veracity and value', 'Vision, value, volume, vision and value', 'Only volume and velocity', 'Value, vision, volume and verification'], correctIndex: 0 },
  { id: 'q95-4', chapterId: 95, question: 'Predictive analytics is used for:', options: ['Describing past events', 'Forecasting future outcomes', 'Reporting current status', 'Optimising decisions in real time'], correctIndex: 1 },
  { id: 'q95-5', chapterId: 95, question: 'A data quality dimension is:', options: ['Colour', 'Accuracy', 'Shape', 'Weight'], correctIndex: 1 },
  { id: 'q95-6', chapterId: 95, question: 'Which tool is commonly used for data analytics?', options: ['MS Word', 'Power BI', 'PowerPoint', 'Notepad'], correctIndex: 1 },

  // ===== Chapter 96: Data Visualisation & Analytics Tools =====
  { id: 'q96-1', chapterId: 96, question: 'Which chart type is best for showing proportions?', options: ['Line chart', 'Pie chart', 'Scatter plot', 'Bar chart'], correctIndex: 1 },
  { id: 'q96-2', chapterId: 96, question: 'Correlation coefficient r ranges between:', options: ['0 and 1', '-1 and +1', '-infinity and +infinity', '0 and 100'], correctIndex: 1 },
  { id: 'q96-3', chapterId: 96, question: 'Linear regression equation Y = a + bX is used for:', options: ['Classifying data', 'Forecasting from a predictor variable', 'Creating pie charts', 'Measuring central tendency'], correctIndex: 1 },
  { id: 'q96-4', chapterId: 96, question: 'PivotTable in Excel is used for:', options: ['Creating fonts', 'Summarising and analysing data', 'Formatting cells', 'Printing documents'], correctIndex: 1 },
  { id: 'q96-5', chapterId: 96, question: 'A KPI dashboard displays:', options: ['Raw transaction data only', 'Key performance indicators visually', 'Journal entries', 'Tax returns'], correctIndex: 1 },
  { id: 'q96-6', chapterId: 96, question: 'Moving averages help to:', options: ['Increase data variability', 'Smooth time-series for trend analysis', 'Compute tax liability', 'Value inventory'], correctIndex: 1 },

  // ===== Chapter 97: Introduction to Management Accounting =====
  { id: 'q97-1', chapterId: 97, question: 'Management accounting primarily serves:', options: ['External investors', 'Internal management for decision-making', 'Tax authorities', 'Competitors'], correctIndex: 1 },
  { id: 'q97-2', chapterId: 97, question: 'Management accounting differs from financial accounting by being:', options: ['Historical and mandatory', 'Forward-looking with no fixed format', 'Only for external users', 'Based on double-entry only'], correctIndex: 1 },
  { id: 'q97-3', chapterId: 97, question: 'A responsibility centre where only costs are controlled is a:', options: ['Profit centre', 'Cost centre', 'Revenue centre', 'Investment centre'], correctIndex: 1 },
  { id: 'q97-4', chapterId: 97, question: 'Variable costs vary:', options: ['With time only', 'In total with output volume', 'With fixed assets only', 'With inflation only'], correctIndex: 1 },
  { id: 'q97-5', chapterId: 97, question: 'Which is a function of management accounting?', options: ['Statutory audit', 'Budgeting and performance appraisal', 'Income tax filing', 'Share registration'], correctIndex: 1 },
  { id: 'q97-6', chapterId: 97, question: 'Controllable costs are those that:', options: ['Are fixed in nature', 'Can be influenced by a manager', 'Never change', 'Are always indirect'], correctIndex: 1 },

  // ===== Chapter 98: Activity Based Costing (ABC) =====
  { id: 'q98-1', chapterId: 98, question: 'In ABC, overhead costs are traced via:', options: ['Direct labour hours only', 'Cost pools and cost drivers', 'Machine hours only', 'Sales value'], correctIndex: 1 },
  { id: 'q98-2', chapterId: 98, question: 'Cost driver rate is calculated as:', options: ['Cost driver volume / Pool cost', 'Pool cost / Cost driver volume', 'Pool cost x Cost driver volume', 'Pool cost - Cost driver volume'], correctIndex: 1 },
  { id: 'q98-3', chapterId: 98, question: 'ABC improves costing accuracy for:', options: ['High-volume simple products', 'Low-volume complex products', 'Only direct materials', 'Only services'], correctIndex: 1 },
  { id: 'q98-4', chapterId: 98, question: 'Value-added activities are those that:', options: ['Waste resources', 'Increase customer value', 'Increase cost without benefit', 'Are unavoidable'], correctIndex: 1 },
  { id: 'q98-5', chapterId: 98, question: 'A limitation of ABC is:', options: ['Simple to implement', 'Costly and subjective driver choice', 'Not useful for product costing', 'Ignores overheads'], correctIndex: 1 },
  { id: 'q98-6', chapterId: 98, question: 'Two-stage ABC allocation involves:', options: ['Direct then indirect allocation', 'Resource to activity then activity to cost object', 'Activity to resource then object to activity', 'Single stage allocation'], correctIndex: 1 },

  // ===== Chapter 99: Marginal Costing & Decision Making =====
  { id: 'q99-1', chapterId: 99, question: 'Contribution equals:', options: ['Sales minus variable cost', 'Sales minus fixed cost', 'Variable cost minus fixed cost', 'Sales minus total cost'], correctIndex: 0 },
  { id: 'q99-2', chapterId: 99, question: 'P/V ratio is:', options: ['Profit / Variable cost', 'Contribution / Sales', 'Fixed cost / Sales', 'Variable cost / Sales'], correctIndex: 1 },
  { id: 'q99-3', chapterId: 99, question: 'Break-even point (units) =:', options: ['Fixed cost / Contribution per unit', 'Fixed cost x Contribution per unit', 'Sales / Variable cost per unit', 'Contribution / Sales'], correctIndex: 0 },
  { id: 'q99-4', chapterId: 99, question: 'Margin of safety is:', options: ['Fixed cost minus variable cost', 'Actual sales minus break-even sales', 'Sales minus variable cost', 'Profit minus contribution'], correctIndex: 1 },
  { id: 'q99-5', chapterId: 99, question: 'A make-or-buy decision uses:', options: ['Full cost only', 'Relevant cost (incremental) comparison', 'Historical cost only', 'Sunk cost only'], correctIndex: 1 },
  { id: 'q99-6', chapterId: 99, question: 'If selling price is ₹100, variable cost ₹60, fixed cost ₹40,000, BEP units are:', options: ['400 units', '1,000 units', '2,000 units', '500 units'], correctIndex: 1 },

  // ===== Chapter 100: Standard Costing & Variance Analysis =====
  { id: 'q100-1', chapterId: 100, question: 'A variance is computed as:', options: ['Standard minus budgeted', 'Actual minus standard', 'Budgeted minus actual', 'Standard plus actual'], correctIndex: 1 },
  { id: 'q100-2', chapterId: 100, question: 'Material cost variance is split into:', options: ['Price and usage variances', 'Rate and efficiency variances', 'Budget and volume variances', 'Fixed and variable variances'], correctIndex: 0 },
  { id: 'q100-3', chapterId: 100, question: 'Labour efficiency variance compares:', options: ['Actual rate with standard rate', 'Actual hours with standard hours for actual output', 'Actual cost with budgeted cost', 'Standard hours with budgeted hours'], correctIndex: 1 },
  { id: 'q100-4', chapterId: 100, question: 'A favourable variance:', options: ['Reduces profit', 'Increases profit (cost lower than standard)', 'Always indicates good performance', 'Should be ignored'], correctIndex: 1 },
  { id: 'q100-5', chapterId: 100, question: 'Fixed overhead volume variance arises due to:', options: ['Difference in spending', 'Difference in actual vs budgeted production volume', 'Difference in variable costs', 'Price changes only'], correctIndex: 1 },
  { id: 'q100-6', chapterId: 100, question: 'Sales volume variance is:', options: ['(Actual qty - Budgeted qty) x Standard profit per unit', '(Actual price - Standard price) x Actual qty', 'Actual cost - Standard cost', 'Standard cost - Actual cost'], correctIndex: 0 },

  // ===== Chapter 101: Budgeting & Budgetary Control =====
  { id: 'q101-1', chapterId: 101, question: 'A budget is a:', options: ['Historical record', 'Quantitative plan for a future period', 'Statutory report', 'Tax filing document'], correctIndex: 1 },
  { id: 'q101-2', chapterId: 101, question: 'A flexible budget adjusts for:', options: ['Inflation only', 'Changes in activity level', 'Only fixed costs', 'Only variable costs'], correctIndex: 1 },
  { id: 'q101-3', chapterId: 101, question: 'Zero-based budgeting requires:', options: ['Adjusting last year budget by inflation', 'Justifying every item from zero each period', 'Using last year figures unchanged', 'Only revenue budgeting'], correctIndex: 1 },
  { id: 'q101-4', chapterId: 101, question: 'A cash budget forecasts:', options: ['Profit for the period', 'Cash receipts and payments', 'Balance sheet items', 'Depreciation charges'], correctIndex: 1 },
  { id: 'q101-5', chapterId: 101, question: 'Budgetary control involves:', options: ['Setting budgets and comparing actual with budget', 'Only setting budgets', 'Only preparing financial statements', 'Only variance analysis'], correctIndex: 0 },
  { id: 'q101-6', chapterId: 101, question: 'A rolling budget is:', options: ['Updated continuously by adding a new period', 'Fixed for the whole year only', 'Prepared once and never revised', 'Based on zero base only'], correctIndex: 0 },

  // ===== Chapter 102: Divisional Performance Measurement =====
  { id: 'q102-1', chapterId: 102, question: 'Return on Investment (ROI) is:', options: ['Divisional profit / Sales', 'Controllable profit / Divisional investment', 'Sales / Capital employed', 'Profit / Total assets'], correctIndex: 1 },
  { id: 'q102-2', chapterId: 102, question: 'Residual Income (RI) equals:', options: ['Profit minus (Capital x Imputed interest rate)', 'ROI x Capital employed', 'Profit / Capital employed', 'Sales minus expenses'], correctIndex: 0 },
  { id: 'q102-3', chapterId: 102, question: 'EVA stands for:', options: ['Economic Value Added', 'Enterprise Value Analysis', 'Equity Value Assessment', 'Estimated Value Addition'], correctIndex: 0 },
  { id: 'q102-4', chapterId: 102, question: 'EVA is calculated as:', options: ['NOPAT - (Capital x WACC)', 'Profit - (Capital x ROI)', 'Sales - Operating cost', 'EBIT - Interest'], correctIndex: 0 },
  { id: 'q102-5', chapterId: 102, question: 'Transfer pricing methods include:', options: ['Only full cost method', 'Market, cost-based, negotiated and dual', 'Only market price method', 'Only negotiated price'], correctIndex: 1 },
  { id: 'q102-6', chapterId: 102, question: 'RI overcomes a limitation of ROI by:', options: ['Accepting value-adding projects that ROI would reject', 'Ignoring the cost of capital', 'Using book value only', 'Focusing only on profit'], correctIndex: 0 },

  // ===== Chapter 103: Responsibility Accounting =====
  { id: 'q103-1', chapterId: 103, question: 'Responsibility accounting assigns:', options: ['Revenue only to top management', 'Costs and revenues to accountable managers', 'All costs to the head office', 'Only direct costs to departments'], correctIndex: 1 },
  { id: 'q103-2', chapterId: 103, question: 'An investment centre is responsible for:', options: ['Only costs', 'Costs, revenues and capital employed', 'Only revenues', 'Only profits'], correctIndex: 1 },
  { id: 'q103-3', chapterId: 103, question: 'Controllable costs are those that:', options: ['A manager can influence', 'Are always fixed', 'Never change', 'Cannot be controlled by any manager'], correctIndex: 0 },
  { id: 'q103-4', chapterId: 103, question: 'Responsibility accounting supports:', options: ['Centralisation of all decisions', 'Decentralisation with accountability', 'Only cost reduction', 'Only revenue growth'], correctIndex: 1 },
  { id: 'q103-5', chapterId: 103, question: 'A revenue centre manager is evaluated on:', options: ['Cost control only', 'Sales revenue generation', 'Return on investment', 'Profitability'], correctIndex: 1 },
  { id: 'q103-6', chapterId: 103, question: 'Performance appraisal in responsibility accounting uses:', options: ['Only historical costs', 'Controllable variances', 'Only non-financial measures', 'Industry averages'], correctIndex: 1 },

  // ===== Chapter 104: Decision Theory & Relevant Costing =====
  { id: 'q104-1', chapterId: 104, question: 'Relevant costs are those that are:', options: ['Past and unavoidable', 'Future, incremental and differ between alternatives', 'Sunk and committed', 'Always fixed in nature'], correctIndex: 1 },
  { id: 'q104-2', chapterId: 104, question: 'A sunk cost is:', options: ['Relevant for decision-making', 'Not relevant for decision-making', 'Always a variable cost', 'Always a future cost'], correctIndex: 1 },
  { id: 'q104-3', chapterId: 104, question: 'Opportunity cost represents:', options: ['Actual expenditure incurred', 'Benefit forgone by choosing the next-best alternative', 'Total cost of production', 'Fixed cost allocation'], correctIndex: 1 },
  { id: 'q104-4', chapterId: 104, question: 'The key or limiting factor approach maximises:', options: ['Sales value per unit', 'Contribution per unit of scarce resource', 'Profit margin per unit', 'Revenue per unit'], correctIndex: 1 },
  { id: 'q104-5', chapterId: 104, question: 'Expected value under risk is:', options: ['Sum of all outcomes', 'Sum of (probability x outcome)', 'Average of best and worst outcomes', 'Maximum possible outcome'], correctIndex: 1 },
  { id: 'q104-6', chapterId: 104, question: 'A decision tree maps:', options: ['Only the best decision path', 'Sequential choices with probabilities and payoffs', 'Only fixed costs', 'Only revenues'], correctIndex: 1 },
]
