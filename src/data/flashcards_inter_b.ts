import type { Flashcard } from './flashcards'

export const INTER_B_FLASHCARDS: Flashcard[] = [
  // Ch80
  { id: 'f80-1', chapterId: 80, front: 'Operations Management', back: 'Operations Management is the process of designing, planning, and controlling the production of goods and services to convert inputs into outputs efficiently. Example: A cement factory converting limestone and labour into packaged cement bags.' },
  { id: 'f80-2', chapterId: 80, front: 'Inputs to Outputs', back: 'Operations transform inputs (men, machines, materials, money, methods) into outputs (products or services) through a conversion process. Example: A bank takes customer deposits and staff effort to deliver loan services.' },
  { id: 'f80-3', chapterId: 80, front: 'Manufacturing vs Service Operations', back: 'Manufacturing produces tangible goods and allows inventory; service operations are intangible, perishable, and produced/consumed simultaneously. Example: A steel plant (manufacturing) vs a hospital (service).' },
  { id: 'f80-4', chapterId: 80, front: 'Productivity', back: 'Productivity measures efficiency as the ratio of output to input: Productivity = Output / Input. Example: If a unit produces 1000 units using 100 labour hours, productivity is 10 units per hour.' },
  { id: 'f80-5', chapterId: 80, front: 'Operations Strategy', back: 'Operations strategy aligns the operations function with overall business strategy to build competitive advantage through cost, quality, speed, or flexibility. Example: A low-cost airline focusing on quick turnaround of aircraft.' },
  { id: 'f80-6', chapterId: 80, front: 'Role of Operations Manager', back: 'An operations manager plans, organises, and controls resources to produce goods/services meeting quality, cost, and delivery goals. Example: A plant manager scheduling shifts to meet monthly dispatch targets.' },

  // Ch81
  { id: 'f81-1', chapterId: 81, front: 'Routing', back: 'Routing determines the path and sequence of operations a product follows through the production process. Example: Deciding that raw steel goes to cutting, then welding, then painting.' },
  { id: 'f81-2', chapterId: 81, front: 'Scheduling', back: 'Scheduling fixes the time when each operation or job should start and finish to meet delivery dates. Example: Allocating the week of 1-5 Aug for assembling 500 fans.' },
  { id: 'f81-3', chapterId: 81, front: 'Dispatching', back: 'Dispatching is the release of work orders and materials to the shop floor to begin actual production. Example: Issuing a job card and raw material to a machine operator.' },
  { id: 'f81-4', chapterId: 81, front: 'Follow-up', back: 'Follow-up monitors progress of work to ensure it matches the schedule and reports deviations. Example: Checking daily why a batch is behind plan and correcting it.' },
  { id: 'f81-5', chapterId: 81, front: 'Master Production Schedule (MPS)', back: 'MPS is a plan stating what finished items to produce, in what quantities, and by when, balancing demand and capacity. Example: Scheduling 2000 units of Model A in June.' },
  { id: 'f81-6', chapterId: 81, front: 'JIT and Lean Production', back: 'Just-in-Time (JIT) and lean production aim to produce only what is needed, when needed, to eliminate waste. Example: A car plant receiving seats just hours before assembly, not stocking them.' },

  // Ch82
  { id: 'f82-1', chapterId: 82, front: 'Capacity', back: 'Capacity is the maximum output an operating unit can produce in a given period. Example: A bottling line with a capacity of 10,000 bottles per hour.' },
  { id: 'f82-2', chapterId: 82, front: 'Design vs Effective Capacity', back: 'Design capacity is the maximum possible output under ideal conditions; effective capacity is the realistic output after allowances for breakdowns and breaks. Example: Design 1000 units/day but effective 800 units/day due to maintenance.' },
  { id: 'f82-3', chapterId: 82, front: 'Capacity Utilisation', back: 'Capacity utilisation is actual output divided by effective capacity, showing how much capacity is used. Example: Producing 640 of 800 effective capacity gives 80% utilisation.' },
  { id: 'f82-4', chapterId: 82, front: 'Types of Plant Layout', back: 'Common layouts are product (line), process (functional), fixed-position, and cellular layouts chosen by production type. Example: A hospital uses process layout with separate wards for surgery and radiology.' },
  { id: 'f82-5', chapterId: 82, front: 'Line Balancing', back: 'Line balancing assigns tasks to workstations so each has near-equal time, minimising idle time on an assembly line. Example: Distributing 60 seconds of work evenly across 5 stations of 12 seconds each.' },
  { id: 'f82-6', chapterId: 82, front: 'Plant Location Factors', back: 'Plant location considers proximity to raw materials, market, labour, transport, power, and government incentives. Example: A sugar mill located near sugarcane farms to cut transport cost.' },

  // Ch83
  { id: 'f83-1', chapterId: 83, front: 'Economic Order Quantity (EOQ)', back: 'EOQ is the order size that minimises total inventory cost (ordering plus carrying cost). Example: Ordering 500 kg each time when EOQ formula gives 500 kg.' },
  { id: 'f83-2', chapterId: 83, front: 'Reorder Level', back: 'Reorder level is the inventory point at which a new order should be placed to avoid stockout. Example: Placing an order when stock falls to 200 units if lead time use is 200 units.' },
  { id: 'f83-3', chapterId: 83, front: 'Safety Stock', back: 'Safety stock is extra inventory held to protect against demand or lead-time uncertainty. Example: Keeping 50 units extra to cover unexpected rush orders.' },
  { id: 'f83-4', chapterId: 83, front: 'ABC Analysis', back: 'ABC analysis classifies inventory by value: A (high value, few items), B (medium), C (low value, many items) for control priority. Example: 10% of items (A) account for 70% of value and get tight control.' },
  { id: 'f83-5', chapterId: 83, front: 'Supply Chain Management', back: 'Supply chain management coordinates flow of materials, information, and money from supplier to final customer. Example: A mobile brand linking component suppliers, factories, and retailers.' },
  { id: 'f83-6', chapterId: 83, front: 'Carrying Cost', back: 'Carrying cost is the cost of holding inventory including storage, insurance, and capital locked up. Example: Warehousing and spoilage cost of ₹5 per unit per month.' },

  // Ch84
  { id: 'f84-1', chapterId: 84, front: 'Dimensions of Quality', back: 'Quality dimensions include performance, features, reliability, durability, serviceability, and aesthetics. Example: A washing machine judged by wash quality, life, and ease of repair.' },
  { id: 'f84-2', chapterId: 84, front: 'Total Quality Management (TQM)', back: 'TQM is a company-wide continuous effort to improve quality and satisfy customers through all employees. Example: Every worker empowered to stop the line on finding a defect.' },
  { id: 'f84-3', chapterId: 84, front: 'Cost of Quality', back: 'Cost of quality has prevention, appraisal, internal failure, and external failure costs; good quality investment reduces failure costs. Example: Spending on training (prevention) lowers returns (external failure).' },
  { id: 'f84-4', chapterId: 84, front: 'Seven QC Tools', back: 'The seven QC tools are cause-and-effect diagram, check sheet, histogram, Pareto chart, scatter diagram, control chart, and flow chart. Example: A Pareto chart showing 80% complaints from 2 defects.' },
  { id: 'f84-5', chapterId: 84, front: 'Six Sigma', back: 'Six Sigma is a quality method targeting at most 3.4 defects per million opportunities using DMAIC. Example: A factory reducing errors from 5% to near zero via DMAIC projects.' },
  { id: 'f84-6', chapterId: 84, front: 'ISO 9000 and SPC', back: 'ISO 9000 is a quality management standard; Statistical Process Control (SPC) uses control charts to monitor process stability. Example: Using an X-bar chart to keep bottle fill within control limits.' },

  // Ch85
  { id: 'f85-1', chapterId: 85, front: 'Strategy', back: 'Strategy is a long-term plan of action to achieve goals and gain competitive advantage. Example: A firm choosing to expand only in tier-2 Indian cities.' },
  { id: 'f85-2', chapterId: 85, front: 'Three Levels of Strategy', back: 'Strategy operates at corporate (which businesses), business (how to compete), and functional (department) levels. Example: Corporate decides to enter retail; business chooses low price; HR recruits sales staff.' },
  { id: 'f85-3', chapterId: 85, front: 'Mission vs Vision', back: 'Mission states the present purpose and what the firm does; vision describes the desired future state. Example: Mission "provide affordable phones"; vision "be India top phone brand by 2030".' },
  { id: 'f85-4', chapterId: 85, front: 'Competitive Advantage', back: 'Competitive advantage is delivering superior value through lower cost or differentiation versus rivals. Example: A brand known for longer battery life than competitors.' },
  { id: 'f85-5', chapterId: 85, front: 'Stakeholder Analysis', back: 'Stakeholder analysis identifies groups affected by the firm (owners, employees, customers, society) and their interests. Example: Mapping how a plant closure affects workers and local vendors.' },
  { id: 'f85-6', chapterId: 85, front: 'Strategy and Objectives', back: 'Objectives are specific measurable targets that strategy is designed to achieve within a timeframe. Example: "Achieve 15% market share in 3 years" as a strategic objective.' },

  // Ch86
  { id: 'f86-1', chapterId: 86, front: 'SWOT Analysis', back: 'SWOT assesses internal Strengths and Weaknesses and external Opportunities and Threats. Example: Strength skilled staff; threat new competitor entering the market.' },
  { id: 'f86-2', chapterId: 86, front: 'PESTEL Analysis', back: 'PESTEL scans Political, Economic, Social, Technological, Environmental, and Legal external factors. Example: A new GST rule (legal) changing pricing strategy.' },
  { id: 'f86-3', chapterId: 86, front: 'Porter Five Forces', back: 'Porter Five Forces analyses industry rivalry, threat of new entrants, supplier power, buyer power, and substitute threat. Example: High buyer power when few large retailers dominate a supplier.' },
  { id: 'f86-4', chapterId: 86, front: 'Value Chain Analysis', back: 'Value chain splits activities into primary (inbound logistics to service) and support to find where value is added. Example: Strong distribution network creating customer value.' },
  { id: 'f86-5', chapterId: 86, front: 'Gap Analysis', back: 'Gap analysis compares current performance with desired future performance to find what must change. Example: Current sales ₹10 crore vs target ₹15 crore shows a ₹5 crore gap.' },
  { id: 'f86-6', chapterId: 86, front: 'Industry Environment', back: 'Industry environment analysis studies competitive forces and market structure affecting strategy choices. Example: Analysing whether the sector is fragmented or consolidated.' },

  // Ch87
  { id: 'f87-1', chapterId: 87, front: 'Generic Strategies', back: 'Porter generic strategies are cost leadership, differentiation, and focus (niche). Example: A company focusing only on premium organic food (focus-differentiation).' },
  { id: 'f87-2', chapterId: 87, front: 'Ansoff Matrix', back: 'Ansoff matrix maps growth via market penetration, market development, product development, and diversification. Example: Launching an existing soap in a new state is market development.' },
  { id: 'f87-3', chapterId: 87, front: 'BCG Matrix', back: 'BCG matrix classifies business units as star, cash cow, question mark, or dog by market growth and share. Example: A leading detergent with low growth is a cash cow.' },
  { id: 'f87-4', chapterId: 87, front: 'Grand Strategies', back: 'Grand strategies include expansion, stability, and retrenchment at the corporate level. Example: A firm choosing retrenchment by exiting loss-making divisions.' },
  { id: 'f87-5', chapterId: 87, front: 'Balanced Scorecard', back: 'Balanced Scorecard measures performance across financial, customer, internal process, and learning perspectives. Example: Tracking training hours alongside profit to gauge readiness.' },
  { id: 'f87-6', chapterId: 87, front: 'Strategy Implementation', back: 'Implementation converts strategy into action via resources, structure, systems, and people. Example: Setting up a new regional office to execute market expansion.' },

  // Ch88
  { id: 'f88-1', chapterId: 88, front: 'Wealth Maximisation', back: 'Wealth maximisation aims to increase the long-term market value of the firm for shareholders. Example: Taking projects that raise share price over time rather than short profit.' },
  { id: 'f88-2', chapterId: 88, front: 'Three Finance Decisions', back: 'The three finance decisions are investment, financing, and dividend decisions. Example: Choosing a plant (investment), funding via debt (financing), and payout policy (dividend).' },
  { id: 'f88-3', chapterId: 88, front: 'Profit vs Wealth Maximisation', back: 'Profit maximisation is short-term and ignores risk and time; wealth maximisation considers both, so it is preferred. Example: A risky project boosting profit but lowering firm value is rejected.' },
  { id: 'f88-4', chapterId: 88, front: 'Agency Problem', back: 'Agency problem is conflict between owners and managers whose actions may not maximise owner wealth. Example: A manager buying a luxury office against shareholder interest.' },
  { id: 'f88-5', chapterId: 88, front: 'Role of CFO', back: 'The CFO manages treasury, planning, funding, and financial control to support the firm strategy. Example: CFO arranging ₹50 crore loan for expansion at low cost.' },
  { id: 'f88-6', chapterId: 88, front: 'Goal of Financial Management', back: 'The primary goal is to maximise shareholder wealth through optimal resource allocation and risk control. Example: Picking projects with positive NPV to grow owner value.' },

  // Ch89
  { id: 'f89-1', chapterId: 89, front: 'Future Value', back: 'Future value is the worth of a sum after earning interest over time: FV = PV x (1+r)^n. Example: ₹1000 at 10% for 2 years becomes ₹1210.' },
  { id: 'f89-2', chapterId: 89, front: 'Present Value', back: 'Present value is today worth of a future sum discounted at a rate: PV = FV / (1+r)^n. Example: ₹1210 due in 2 years at 10% is worth ₹1000 now.' },
  { id: 'f89-3', chapterId: 89, front: 'Annuity', back: 'An annuity is a series of equal cash flows at regular intervals; PV or FV uses annuity factors. Example: Receiving ₹5000 every year for 5 years is an annuity.' },
  { id: 'f89-4', chapterId: 89, front: 'Effective Annual Rate', back: 'Effective annual rate is the true yearly rate after compounding more than once a year. Example: 12% nominal compounded quarterly gives about 12.55% effective.' },
  { id: 'f89-5', chapterId: 89, front: 'Perpetuity', back: 'A perpetuity is an annuity that continues forever; PV = Cash flow / rate. Example: ₹100 yearly forever at 10% is worth ₹1000 today.' },
  { id: 'f89-6', chapterId: 89, front: 'Rule of 72', back: 'Rule of 72 estimates doubling time as 72 divided by the interest rate in percent. Example: At 9% interest, money doubles in about 8 years (72/9).' },

  // Ch90
  { id: 'f90-1', chapterId: 90, front: 'Cost of Equity (CAPM)', back: 'CAPM cost of equity = Risk-free rate + Beta x (Market return - Risk-free rate). Example: 6% + 1.2 x (12%-6%) = 13.2%.' },
  { id: 'f90-2', chapterId: 90, front: 'Cost of Equity (Dividend Growth)', back: 'Dividend growth model cost of equity = (D1 / P0) + growth rate g. Example: ₹4 expected dividend on ₹100 price with 5% growth gives 9%.' },
  { id: 'f90-3', chapterId: 90, front: 'After-Tax Cost of Debt', back: 'After-tax cost of debt = Interest rate x (1 - tax rate) since interest is tax-deductible. Example: 10% debt at 30% tax costs 7% after tax.' },
  { id: 'f90-4', chapterId: 90, front: 'Cost of Preference Capital', back: 'Cost of preference = Preference dividend / Net proceeds, usually fixed as dividends are not tax-deductible. Example: ₹10 dividend on ₹100 preference share is 10% cost.' },
  { id: 'f90-5', chapterId: 90, front: 'Weighted Average Cost of Capital (WACC)', back: 'WACC is the blended cost of all capital weighted by proportions: WACC = We x Ke + Wd x Kd(1-t) + Wp x Kp. Example: 60% equity at 12% and 40% debt at 7% gives WACC 10%.' },
  { id: 'f90-6', chapterId: 90, front: 'Marginal Cost of Capital', back: 'Marginal cost of capital is the cost of raising one additional rupee of capital, which rises with more funding. Example: First ₹10 crore at 10% but next ₹10 crore at 11%.' },

  // Ch91
  { id: 'f91-1', chapterId: 91, front: 'Capital Structure', back: 'Capital structure is the mix of debt and equity used to finance the firm. Example: A firm funded 40% by debt and 60% by equity.' },
  { id: 'f91-2', chapterId: 91, front: 'Operating Leverage (DOL)', back: 'Degree of operating leverage measures how revenue changes affect operating profit due to fixed costs. Example: High fixed factory rent means small sales rise greatly lifts profit.' },
  { id: 'f91-3', chapterId: 91, front: 'Financial Leverage (DFL)', back: 'Degree of financial leverage shows how operating profit changes affect EPS due to fixed interest. Example: Debt interest fixed means profit rise boosts EPS more.' },
  { id: 'f91-4', chapterId: 91, front: 'Combined Leverage', back: 'Combined leverage (DCL = DOL x DFL) shows total effect of fixed costs on EPS from sales change. Example: DOL 2 and DFL 1.5 give DCL 3, so 10% sales rise lifts EPS 30%.' },
  { id: 'f91-5', chapterId: 91, front: 'Trade-off Theory', back: 'Trade-off theory balances tax benefit of debt against bankruptcy cost to find optimal leverage. Example: Adding debt till tax saving equals rising distress cost.' },
  { id: 'f91-6', chapterId: 91, front: 'Pecking Order Theory', back: 'Pecking order theory says firms prefer internal funds, then debt, then equity, to avoid information costs. Example: A firm uses retained profit first, then borrows, issuing shares last.' },

  // Ch92
  { id: 'f92-1', chapterId: 92, front: 'Net Present Value (NPV)', back: 'NPV is the sum of discounted cash inflows minus initial outlay; accept if NPV is positive. Example: A project with PV inflows ₹110 lakh and cost ₹100 lakh has NPV ₹10 lakh.' },
  { id: 'f92-2', chapterId: 92, front: 'Internal Rate of Return (IRR)', back: 'IRR is the discount rate that makes NPV zero; accept if IRR exceeds required return. Example: A project with IRR 15% vs cost of capital 10% is accepted.' },
  { id: 'f92-3', chapterId: 92, front: 'Payback Period', back: 'Payback period is the time to recover the initial investment from cash inflows. Example: ₹100 lakh cost recovered by ₹25 lakh yearly in 4 years.' },
  { id: 'f92-4', chapterId: 92, front: 'Discounted Payback Period', back: 'Discounted payback uses present value of inflows to find recovery time, better than simple payback. Example: Recovering ₹100 lakh when PV inflows reach ₹100 lakh in year 5.' },
  { id: 'f92-5', chapterId: 92, front: 'Profitability Index', back: 'Profitability index = PV of inflows / initial investment; accept if above 1. Example: PV inflows ₹120 lakh on ₹100 lakh cost gives PI 1.2.' },
  { id: 'f92-6', chapterId: 92, front: 'Capital Budgeting', back: 'Capital budgeting is the process of planning and evaluating long-term investment projects. Example: Deciding whether to build a new ₹50 crore plant.' },

  // Ch93
  { id: 'f93-1', chapterId: 93, front: 'Gross vs Net Working Capital', back: 'Gross working capital is total current assets; net working capital is current assets minus current liabilities. Example: Assets ₹80 lakh less liabilities ₹50 lakh = net ₹30 lakh.' },
  { id: 'f93-2', chapterId: 93, front: 'Operating Cycle', back: 'Operating cycle is the time from buying raw material to collecting cash from sales. Example: 30 days raw to finished plus 45 days receivable = 75 days cycle.' },
  { id: 'f93-3', chapterId: 93, front: 'Cash Conversion Cycle', back: 'Cash conversion cycle = operating cycle minus creditors payment period. Example: 75 days cycle less 25 days credit = 50 days cash gap.' },
  { id: 'f93-4', chapterId: 93, front: 'Inventory Turnover Ratio', back: 'Inventory turnover = Cost of goods sold / Average inventory, showing how fast stock sells. Example: COGS ₹12 lakh on avg stock ₹2 lakh gives 6 times.' },
  { id: 'f93-5', chapterId: 93, front: 'Cash Budget', back: 'A cash budget forecasts cash inflows and outflows to plan surplus or shortage. Example: Estimating ₹5 lakh excess cash in March for short-term investment.' },
  { id: 'f93-6', chapterId: 93, front: 'Working Capital Management', back: 'Working capital management balances liquidity and profitability by controlling current assets and liabilities. Example: Negotiating longer supplier credit to free cash.' },

  // Ch94
  { id: 'f94-1', chapterId: 94, front: 'Equity Shares', back: 'Equity shares represent ownership, carry voting rights, and dividends paid after preference. Example: A shareholder owning 1000 shares gets residual profit share.' },
  { id: 'f94-2', chapterId: 94, front: 'Debentures', back: 'Debentures are long-term debt instruments paying fixed interest, ranking above equity for repayment. Example: A ₹1000 debenture at 9% pays ₹90 yearly interest.' },
  { id: 'f94-3', chapterId: 94, front: 'Retained Earnings', back: 'Retained earnings are reinvested profits not distributed as dividend, a low-cost internal source. Example: Keeping ₹20 lakh profit to fund expansion.' },
  { id: 'f94-4', chapterId: 94, front: 'Hybrid Instruments', back: 'Hybrid instruments combine debt and equity features, like convertible debentures or preference shares. Example: A debenture convertible into equity after 5 years.' },
  { id: 'f94-5', chapterId: 94, front: 'Leasing', back: 'Leasing lets a firm use an asset by paying rent without owning it, preserving capital. Example: A hospital leasing an MRI machine instead of buying it.' },
  { id: 'f94-6', chapterId: 94, front: 'Maturity Matching Principle', back: 'Maturity matching funds long-term assets with long-term finance and short-term with short-term. Example: Funding a building with a 15-year loan, not overdraft.' },

  // Ch95
  { id: 'f95-1', chapterId: 95, front: 'Types of Analytics', back: 'Analytics are descriptive (what happened), diagnostic (why), predictive (what will), and prescriptive (what to do). Example: Predictive model forecasting next quarter sales.' },
  { id: 'f95-2', chapterId: 95, front: 'Data Lifecycle', back: 'Data lifecycle covers collection, cleaning, storage, analysis, and disposal of data. Example: Survey data cleaned, stored, analysed, then archived.' },
  { id: 'f95-3', chapterId: 95, front: 'Structured vs Unstructured Data', back: 'Structured data fits rows/columns like tables; unstructured is text, images, video needing processing. Example: SQL table (structured) vs customer reviews (unstructured).' },
  { id: 'f95-4', chapterId: 95, front: 'Big Data 5V', back: 'Big data 5V are Volume, Velocity, Variety, Veracity, and Value. Example: Social media streams with huge volume and fast velocity.' },
  { id: 'f95-5', chapterId: 95, front: 'Data Quality', back: 'Data quality means accurate, complete, timely, and consistent data fit for decisions. Example: Removing duplicate customer records before analysis.' },
  { id: 'f95-6', chapterId: 95, front: 'Business Data Analytics', back: 'Business data analytics uses data and models to support managerial decision-making and improve performance. Example: Using sales dashboards to set regional targets.' },

  // Ch96
  { id: 'f96-1', chapterId: 96, front: 'Data Visualisation', back: 'Data visualisation presents data graphically (charts, graphs) to communicate insights quickly. Example: A bar chart comparing regional sales.' },
  { id: 'f96-2', chapterId: 96, front: 'KPI Dashboard', back: 'A KPI dashboard is a visual display of key performance indicators for ongoing monitoring. Example: A screen showing daily revenue, attrition, and defect rate.' },
  { id: 'f96-3', chapterId: 96, front: 'Power BI and Tableau', back: 'Power BI and Tableau are tools to build interactive reports and dashboards from data sources. Example: Connecting Excel sales data to a Tableau dashboard.' },
  { id: 'f96-4', chapterId: 96, front: 'Correlation Coefficient', back: 'Correlation coefficient (r) measures linear relationship strength from -1 to +1. Example: r = 0.8 means strong positive link between ads and sales.' },
  { id: 'f96-5', chapterId: 96, front: 'Regression Analysis', back: 'Regression estimates the relationship between a dependent and independent variable for prediction. Example: Predicting sales from advertising spend using a line.' },
  { id: 'f96-6', chapterId: 96, front: 'Moving Average', back: 'Moving average smooths a time series by averaging recent periods to show trend. Example: 3-month average of 90,100,110 gives 100 to smooth spikes.' },

  // Ch97
  { id: 'f97-1', chapterId: 97, front: 'Management Accounting', back: 'Management accounting provides internal financial information to managers for planning and control. Example: A monthly department cost report for the plant head.' },
  { id: 'f97-2', chapterId: 97, front: 'Difference from Financial Accounting', back: 'Financial accounting is external and historical with fixed rules; management accounting is internal, forward-looking, and flexible. Example: Statutory balance sheet vs internal budget variance report.' },
  { id: 'f97-3', chapterId: 97, front: 'Responsibility Centres', back: 'Responsibility centres are units headed by a manager accountable for cost, profit, or investment. Example: A workshop as a cost centre monitored for expenses.' },
  { id: 'f97-4', chapterId: 97, front: 'Cost Concepts', back: 'Cost concepts include fixed, variable, direct, indirect, and sunk costs used for decision-making. Example: Factory rent is fixed; raw material is variable cost.' },
  { id: 'f97-5', chapterId: 97, front: 'Role of Management Accountant', back: 'A management accountant analyses data, prepares budgets, and advises managers on decisions. Example: Recommending product discontinuation from contribution analysis.' },
  { id: 'f97-6', chapterId: 97, front: 'Decision Support', back: 'Management accounting supports decisions by supplying relevant cost and performance information. Example: Reporting per-unit cost to price a new order.' },

  // Ch98
  { id: 'f98-1', chapterId: 98, front: 'Activity Based Costing (ABC)', back: 'ABC assigns overhead to products based on activities consumed rather than a single base. Example: Charging setup cost by number of setups, not machine hours.' },
  { id: 'f98-2', chapterId: 98, front: 'Cost Pool', back: 'A cost pool is a grouping of individual costs with a common cause for allocation. Example: All quality-inspection costs grouped in one inspection pool.' },
  { id: 'f98-3', chapterId: 98, front: 'Cost Driver', back: 'A cost driver is a factor that causes a cost pool to change in amount. Example: Number of machine hours drives power cost.' },
  { id: 'f98-4', chapterId: 98, front: 'Cost Driver Rate', back: 'Cost driver rate = Total pool cost / Total driver units, used to charge activities. Example: ₹2,00,000 inspection pool / 1000 inspections = ₹200 per inspection.' },
  { id: 'f98-5', chapterId: 98, front: 'Value-Added Activities', back: 'Value-added activities increase product worth for customers and should be retained. Example: Painting a car adds customer value.' },
  { id: 'f98-6', chapterId: 98, front: 'Non-Value-Added Activities', back: 'Non-value-added activities consume resources without adding customer value and should be reduced. Example: Waiting time of parts in queue is waste.' },

  // Ch99
  { id: 'f99-1', chapterId: 99, front: 'Marginal Cost', back: 'Marginal cost is the extra cost of producing one more unit. Example: Making the 101st unit costs ₹40 extra.' },
  { id: 'f99-2', chapterId: 99, front: 'Contribution', back: 'Contribution = Sales minus variable cost, available to cover fixed cost and profit. Example: Selling at ₹100 with ₹60 variable cost gives ₹40 contribution.' },
  { id: 'f99-3', chapterId: 99, front: 'P/V Ratio', back: 'Profit-volume ratio = Contribution / Sales, showing margin per rupee of sales. Example: Contribution ₹40 on ₹100 sales gives P/V ratio 40%.' },
  { id: 'f99-4', chapterId: 99, front: 'Break-Even Point', back: 'Break-even point is sales where contribution equals fixed cost, so profit is zero. Example: Fixed cost ₹4,00,000 at P/V 40% needs ₹10,00,000 sales.' },
  { id: 'f99-5', chapterId: 99, front: 'Margin of Safety', back: 'Margin of safety = Actual sales minus break-even sales, showing cushion above loss. Example: Sales ₹12 lakh and BEP ₹10 lakh gives ₹2 lakh margin.' },
  { id: 'f99-6', chapterId: 99, front: 'Make-or-Buy Decision', back: 'Make-or-buy compares internal marginal cost with outside purchase price using relevant costs. Example: Making at ₹80 vs buying at ₹95 means make internally.' },

  // Ch100
  { id: 'f100-1', chapterId: 100, front: 'Standard Cost', back: 'Standard cost is the predetermined expected cost for one unit under efficient conditions. Example: Setting ₹50 standard material cost per unit.' },
  { id: 'f100-2', chapterId: 100, front: 'Variance', back: 'Variance is the difference between actual cost and standard cost. Example: Actual ₹55 vs standard ₹50 gives ₹5 variance.' },
  { id: 'f100-3', chapterId: 100, front: 'Material Variance', back: 'Material variance splits into price variance and usage variance versus standard. Example: Paying more per kg and using more kg than standard.' },
  { id: 'f100-4', chapterId: 100, front: 'Labour Variance', back: 'Labour variance splits into rate variance and efficiency variance versus standard. Example: Higher wage rate and slower work than standard.' },
  { id: 'f100-5', chapterId: 100, front: 'Favourable vs Adverse Variance', back: 'Favourable variance increases profit (cost below standard); adverse increases cost (above standard). Example: Spending ₹45 vs ₹50 standard is favourable ₹5.' },
  { id: 'f100-6', chapterId: 100, front: 'Variance Analysis', back: 'Variance analysis investigates differences to control performance and take corrective action. Example: Studying why labour efficiency fell this month.' },

  // Ch101
  { id: 'f101-1', chapterId: 101, front: 'Budget', back: 'A budget is a quantitative plan for a future period expressed in money or units. Example: A sales budget of ₹20 lakh for the quarter.' },
  { id: 'f101-2', chapterId: 101, front: 'Master Budget', back: 'Master budget is the comprehensive set of operating and financial budgets for the firm. Example: Combining sales, production, and cash budgets into one plan.' },
  { id: 'f101-3', chapterId: 101, front: 'Flexible Budget', back: 'A flexible budget adjusts for actual activity level, aiding fair comparison. Example: Revised cost budget at 80% vs 100% capacity.' },
  { id: 'f101-4', chapterId: 101, front: 'Zero-Based Budgeting', back: 'Zero-based budgeting builds each budget from zero, justifying every item annually. Example: Each department proving need for all expenses, not just prior year plus.' },
  { id: 'f101-5', chapterId: 101, front: 'Cash Budget', back: 'A cash budget estimates future cash receipts and payments to manage liquidity. Example: Showing ₹3 lakh shortfall in May to arrange a loan.' },
  { id: 'f101-6', chapterId: 101, front: 'Budgetary Control', back: 'Budgetary control compares actuals with budget and acts on variances to guide the business. Example: Monthly review of department overspending vs budget.' },

  // Ch102
  { id: 'f102-1', chapterId: 102, front: 'Return on Investment (ROI)', back: 'ROI = Division profit / Division investment, measuring divisional efficiency. Example: ₹10 lakh profit on ₹50 lakh assets gives 20% ROI.' },
  { id: 'f102-2', chapterId: 102, front: 'Residual Income', back: 'Residual income = Division profit minus (investment x required rate), rewarding absolute profit. Example: ₹10 lakh profit less 10% x ₹50 lakh = ₹5 lakh residual income.' },
  { id: 'f102-3', chapterId: 102, front: 'Economic Value Added (EVA)', back: 'EVA = NOPAT minus (Capital x cost of capital), showing true wealth created. Example: Profit ₹20 lakh less capital charge ₹15 lakh = EVA ₹5 lakh.' },
  { id: 'f102-4', chapterId: 102, front: 'Transfer Pricing', back: 'Transfer price is the charge for goods or services between divisions of the same firm. Example: Component division selling to assembly division at ₹200 per part.' },
  { id: 'f102-5', chapterId: 102, front: 'Divisional Performance', back: 'Divisional performance measurement evaluates units separately to aid control and investment choices. Example: Comparing ROI of North and South divisions.' },
  { id: 'f102-6', chapterId: 102, front: 'Conflict in Transfer Pricing', back: 'Transfer pricing conflicts arise when buying division wants low price and selling division wants high price. Example: Selling division prefers ₹200, buying division prefers ₹150.' },

  // Ch103
  { id: 'f103-1', chapterId: 103, front: 'Responsibility Accounting', back: 'Responsibility accounting reports costs and revenues by responsibility centre for accountability. Example: A manager judged only on costs they control.' },
  { id: 'f103-2', chapterId: 103, front: 'Cost Centre', back: 'A cost centre is a unit whose manager is accountable only for costs incurred. Example: A maintenance department measured on expense control.' },
  { id: 'f103-3', chapterId: 103, front: 'Profit Centre', back: 'A profit centre manager is accountable for both revenues and costs, hence profit. Example: A retail outlet judged on its profit.' },
  { id: 'f103-4', chapterId: 103, front: 'Investment Centre', back: 'An investment centre manager is accountable for profit and the capital invested. Example: A division head controlling both earnings and asset base.' },
  { id: 'f103-5', chapterId: 103, front: 'Controllable Cost', back: 'A controllable cost can be influenced by a specific manager within a period. Example: A supervisor controlling overtime pay but not factory rent.' },
  { id: 'f103-6', chapterId: 103, front: 'Responsibility vs Financial Reporting', back: 'Responsibility reporting focuses on manager control, unlike overall entity financial statements. Example: Separate cost reports per plant manager.' },

  // Ch104
  { id: 'f104-1', chapterId: 104, front: 'Relevant Cost', back: 'Relevant cost is a future cost that differs between decision alternatives. Example: Extra material cost of ₹30 to accept a special order.' },
  { id: 'f104-2', chapterId: 104, front: 'Sunk Cost', back: 'A sunk cost is a past cost not recoverable and therefore irrelevant to future decisions. Example: Money already spent on a cancelled machine is sunk.' },
  { id: 'f104-3', chapterId: 104, front: 'Opportunity Cost', back: 'Opportunity cost is the benefit forgone by choosing one alternative over another. Example: Rent lost by using own building for production is opportunity cost.' },
  { id: 'f104-4', chapterId: 104, front: 'Limiting Factor', back: 'A limiting factor is a scarce resource that restricts output or profit. Example: Only 1000 machine hours available becomes the constraint.' },
  { id: 'f104-5', chapterId: 104, front: 'Expected Value', back: 'Expected value is the probability-weighted average of outcomes for decisions under risk. Example: 0.6 x ₹100 + 0.4 x ₹50 = ₹80 expected value.' },
  { id: 'f104-6', chapterId: 104, front: 'Decision Tree', back: 'A decision tree maps choices and chance outcomes branch by branch to evaluate alternatives. Example: Branches showing invest vs wait with payoffs and probabilities.' },
]
