const APIKEY = '64a2beffb1ed5853c62ace209ff8fe71';
const hostname = 'financialmodelingprep.com';
const version = 'api/v3';

// Stock Fundamentals
// Financial Statements List
// List of symbols that have financial statements.

export const symbols = `https://${hostname}/${version}/financial-statement-symbol-lists?apikey=${APIKEY}`;

// Financial Statements
// Income Statement
// Annual and Quarterly income statements, available in JSON and CSV.
// Request params: limit, period, datatype.

export const statementLimit = `https://${hostname}/${version}/income-statement/AAPL?limit=120&apikey=${APIKEY}`;
export const statementPeriod = `https://${hostname}/${version}/income-statement/AAPL?period=quarter&limit=400&apikey=${APIKEY}`;
export const statementData = `https://${hostname}/${version}/income-statement/AAPL?datatype=csv&apikey=${APIKEY}`;

// Balance Sheet Statement
// Annual and Quarterly balance sheet statements, available in JSON and CSV.
// Request params: limit, period, datatype.

export const balanceLimit = `https://${hostname}/${version}/balance-sheet-statement/AAPL?limit=120&apikey=${APIKEY}`;
export const balancePeriod = `https://${hostname}/${version}/balance-sheet-statement/AAPL?period=quarter&limit=400&apikey=${APIKEY}`;
export const balancedData = `https://${hostname}/${version}/balance-sheet-statement/AAPL?datatype=csv&apikey=${APIKEY}`;

// Cash Flow Statement
// Annual and Quarterly cash flow statements, available in JSON and CSV.
// Request params: limit, period, datatype.

export const cashFlowStatement = `https://${hostname}/${version}/cash-flow-statement/AAPL?limit=120&apikey=${APIKEY}`;
export const cashFlowStatementPeriod = `https://${hostname}/${version}/cash-flow-statement/AAPL?period=quarter&limit=400&apikey=${APIKEY}`;
export const cashFlowStatementData = `https://${hostname}/${version}/cash-flow-statement/AAPL?datatype=csv&apikey=${APIKEY}`;

// Financial Statements As Reported
// Income Statement
// Annual and Quarterly income statements(as reported), available in JSON and CSV.
// Request params: limit, period, datatype.

export const resportedStatement = `https://${hostname}/${version}/income-statement-as-reported/AAPL?limit=120&apikey=${APIKEY}`;
export const resportedStatementPeriod = `https://${hostname}/${version}/income-statement-as-reported/AAPL?period=quarter&limit=400&apikey=${APIKEY}`;
export const resportedStatementData = `https://${hostname}/${version}/income-statement-as-reported/AAPL?datatype=csv&apikey=${APIKEY}`;

// Balance Sheet Statement
// Annual and Quarterly balance sheet statements(as reported), available in JSON and CSV.
// Request params: limit, period, datatype.

export const balanceSheetReport = `https://${hostname}/${version}/balance-sheet-statement-as-reported/AAPL?limit=120&apikey=${APIKEY}`;
export const balanceSheetReportPeriod = `https://${hostname}/${version}/balance-sheet-statement-as-reported/AAPL?period=quarter&limit=400&apikey=${APIKEY}`;
export const balanceSheeReporttData = `https://${hostname}/${version}/balance-sheet-statement-as-reported/AAPL?datatype=csv&apikey=${APIKEY}`;

// Cash Flow Statement
// Annual and Quarterly cash flow statements(as reported), available in JSON and CSV.
// Request params: limit, period, datatype.

export const cashFlowReport = `https://${hostname}/${version}/cash-flow-statement-as-reported/AAPL?limit=120&apikey=${APIKEY}`;
export const cashFlowReportPeriod = `https://${hostname}/${version}/cash-flow-statement-as-reported/AAPL?period=quarter&limit=400&apikey=${APIKEY}`;
export const cashFlowReportData = `https://${hostname}/${version}/cash-flow-statement-as-reported/AAPL?datatype=csv&apikey=${APIKEY}`;

// Full Financial Statement
// Annual and Quarterly full financial statement(as reported), available in JSON.
// Request params: limit, period.

export const fullFinancialStatementReport = `https://${hostname}/${version}/financial-statement-full-as-reported/AAPL?apikey=${APIKEY}`;
export const fullFinancialStatementReportPeriod = `https://${hostname}/${version}/financial-statement-full-as-reported/AAPL?period=quarter&apikey=${APIKEY}`;

// International Filings
// Annual international filings, available in JSON.
// Request params: limit.

// Canadian Stock Exchange TSX(SEDAR) income statements:
export const TSX = `https://${hostname}/${version}/income-statement/RY.TO?limit=100&apikey=${APIKEY}`;

// Euronext income statements:
export const Euronext = `https://${hostname}/${version}/income-statement/EDF.PA?limit=100&apikey=${APIKEY}`;

// XETRA(Bundesanzeiger) Germany income statements:
export const XETRA = `https://${hostname}/${version}/income-statement/SAP.DE?limit=100&apikey=${APIKEY}`;

// National Stock Exchange of India income statements:
export const India = `https://${hostname}/${version}/income-statement/RELIANCE.NS?limit=100&apikey=${APIKEY}`;

// London Stock Exchange(Companies house) income statements:
export const London = `https://${hostname}/${version}/income-statement/GLEN.L?limit=100&apikey=${APIKEY}`;

// Moscow Exchange(MOEX) income statements:
export const MOEX = `https://${hostname}/${version}/income-statement/GAZP.ME?limit=100&apikey=${APIKEY}`;

// Hong Kong Exchange(SEHK) income statements:
export const SEHK = `https://${hostname}/${version}/income-statement/1797.HK?limit=100&apikey=${APIKEY}`;

// Australian Stock Exchange(ASX) income statements:
export const ASX = `https://${hostname}/${version}/income-statement/APT.AX?limit=100&apikey=${APIKEY}`;

// Norway stock exchange(OSE) income statements:
export const OSE = `https://${hostname}/${version}/income-statement/BON.OL?limit=100&apikey=${APIKEY}`;

// Swiss Exchange(SIX) income statements:
export const SIX = `https://${hostname}/${version}/income-statement/FHZN.SW?limit=100&apikey=${APIKEY}`;

// Financials ZIP
// Financial statements in ZIP archive.

export const ZIParchive = `https://${hostname}/${version}/financial-statements/AAPL?datatype=zip&apikey=${APIKEY}`;

// List of dates and links
// Returns dates and links to data.
// Request params: symbol.

export const linksData = `https://${hostname}/api/v4/financial-reports-dates?symbol=AAPL&apikey=${APIKEY}`;

// Annual Reports On Form 10 - K
// Annual Reports on Form 10 - K.
// Request params: symbol, year, period(FY).

export const form10k = `https://${hostname}/api/v4/financial-reports-json?symbol=AAPL&year=2020&period=FY&apikey=${APIKEY}`;

// In XLSX: https://${hostname}/api/v4/financial-reports-xlsx?symbol=AAPL&year=2020&period=FY&apikey=${APIKEY}`;

// Quarterly Earnings Reports
// Quarterly Earnings Reports.
// Request params: symbol, year, period(Q1 / Q2 / Q3 / Q4).

export const quarterlyEarinings = `https://${hostname}/api/v4/financial-reports-json?symbol=AAPL&year=2020&period=Q1&apikey=${APIKEY}`;

// In XLSX: https://${hostname}/api/v4/financial-reports-xlsx?symbol=AAPL&year=2020&period=Q1&apikey=${APIKEY}`;

// Shares Float
// Shares float for symbol in JSON.

export const sharesFloat = `https://${hostname}/api/v4/sharesfloat?symbol=AAPL&apikey=${APIKEY}`;

// SEC RSS Feeds
// Request params: limit, datatype, type, from, to, isDone.

export const RSSFeeds = `https://${hostname}/${version}/rssfeed?limit=100&apikey=${APIKEY}`;

// In CSV: https://${hostname}/${version}/rssfeed?datatype=csv&apikey=${APIKEY}`;

// With latest filed statements: https://${hostname}/api/v4/rssfeed?limit=100&type=10&from=2021-03-10&to=2021-05-04&isDone=true&apikey=${APIKEY}`;

// Earning Call Transcript
// Transcript of specific earning:
export const earningCallTranscript = `https://${hostname}/${version}/earningcalltranscript/AAPL?quarter=3&year=2020&apikey=${APIKEY}`;

// Dates of available transcripts for symbol:
export const symbolTranscript = `https://${hostname}/api/v4/earningcalltranscript?symbol=AAPL&apikey=${APIKEY}`;

// Transcripts for symbol for specific year:
export const yearSymbol = `https://${hostname}/api/v4/batchearningcalltranscript/AAPL?year=2020&apikey=${APIKEY}`;

// SEC Filings
// SEC Filings in JSON.
// Request params: limit, type(10 - K).

export const secFilings = `https://${hostname}/${version}/secfilings/AAPL?type=10-K&limit=100&apikey=${APIKEY}`;

// RSS Feed 8K
// SEC Rss for 8K forms.
// Request params: limit, from, to.

export const rssFeed8k = `https://${hostname}/api/v4/rssfeed8k?from=2021-09-01&to=2021-09-30&limit=10&apikey=${APIKEY}`;

// Stock Fundamentals Analysis
// Company Financial Ratios
// Company TTM ratios in JSON:
export const ratiosTTM = `https://${hostname}/${version}/ratios-ttm/AAPL?apikey=${APIKEY}`;

// Company financial ratios in JSON:
export const ratios = `https://${hostname}/${version}/ratios/AAPL?limit=40&apikey=${APIKEY}`;

// Company quarterly financial ratios:
export const ratiosQuartery = `https://${hostname}/${version}/ratios/AAPL?period=quarter&limit=140&apikey=${APIKEY}`;

// Company Enterprise Value
// Company annual enterprise value in JSON:
export const enterpriseValue = `https://${hostname}/${version}/enterprise-values/AAPL?limit=40&apikey=${APIKEY}`;

// Company quarterly enterprise value in JSON:
export const enterpriseValuePeriod = `https://${hostname}/${version}/enterprise-values/AAPL?period=quarter&limit=130&apikey=${APIKEY}`;

// Financial Statements Growth
// Income statements growth in JSON:
export const growthStatement = `https://${hostname}/${version}/income-statement-growth/AAPL?limit=40&apikey=${APIKEY}`;

// Annual balance sheet growth in JSON:
export const growthStatementBalance = `https://${hostname}/${version}/balance-sheet-statement-growth/AAPL?limit=40&apikey=${APIKEY}`;

// Annual cash flow statements growth in JSON:
export const growthStatementCashFlow = `https://${hostname}/${version}/cash-flow-statement-growth/AAPL?limit=40&apikey=${APIKEY}`;

// Company Key Metrics
// Company TTM key metrics in JSON:
export const keyMetricsTTM = `https://${hostname}/${version}/key-metrics-ttm/AAPL?limit=40&apikey=${APIKEY}`;

// Company annual key metrics in JSON:
export const keymetrics = `https://${hostname}/${version}/key-metrics/AAPL?limit=40&apikey=${APIKEY}`;

// Company quarterly company key metrics in JSON:
export const keymetricsperiod = `https://${hostname}/${version}/key-metrics/AAPL?period=quarter&limit=130&apikey=${APIKEY}`;

// Company Financial Growth
// Company annual financial statement growth in JSON:
export const growthfinancial = `https://${hostname}/${version}/financial-growth/AAPL?limit=20&apikey=${APIKEY}`;

// Company quarterly financial statement growth in JSON:
export const growthfinancialperiod = `https://${hostname}/${version}/financial-growth/AAPL?period=quarter&limit=80&apikey=${APIKEY}`;

// Company Rating
// Company daily raiting in JSON:
export const companyratingdaily = `https://${hostname}/${version}/rating/AAPL?apikey=${APIKEY}`;

// Historical companies rating in JSON:
export const companyratinghistorical = `https://${hostname}/${version}/historical-rating/AAPL?limit=100&apikey=${APIKEY}`;

// Company Discounted Cash Flow Value
// Companies Discounted cash flow value(intrinsic value) in JSON, real - time based:
export const discountedcashflow = `https://${hostname}/${version}/discounted-cash-flow/AAPL?apikey=${APIKEY}`;

// Companies Historical Discounted cash flow value in JSON, annual:
export const discountedcashflowannual = `https://${hostname}/${version}/historical-discounted-cash-flow-statement/AAPL?apikey=${APIKEY}`;

// Companies Historical Discounted cash flow value in JSON, quarter:
export const discountedcashflowquarter = `https://${hostname}/${version}/historical-discounted-cash-flow-statement/AAPL?period=quarter&apikey=${APIKEY}`;

// Companies Historical Discounted cash flow value in JSON, daily:
export const discountedcashflowdaily = `https://${hostname}/${version}/historical-daily-discounted-cash-flow/AAPL?limit=100&apikey=${APIKEY}`;

// Stock Calendar
// Earnings Calendar
// Earnings Calendar in JSON:
export const earningcalendar = `https://${hostname}/${version}/earningcalendar?apikey=${APIKEY}`;

export const earningCalendarPeriod = `https://${hostname}/${version}/earningcalendar?from=2010-03-10&to=2010-05-11&apikey=${APIKEY}`;

// Historical Earnings Calendar in JSON:
export const earningCalendarHistorical = `https://${hostname}/${version}/historical/earningcalendar/AAPL?limit=80&apikey=${APIKEY}`;

// IPO Calendar
export const ipoCalendar = `https://${hostname}/${version}/ipocalendar?from=2020-09-01&to=2020-11-01&apikey=${APIKEY}`;

// Stock Split Calendar
export const stockSplitCalendar = `https://${hostname}/${version}/stocksplitcalendar?from=2020-06-01&to=2020-09-10&apikey=${APIKEY}`;

// Dividend Calendar
export const stockDividendCalendar = `https://${hostname}/${version}/stockdividendcalendar?from=2020-06-01&to=2020-09-10&apikey=${APIKEY}`;

// Economic Calendar
export const economicCalendar = `https://${hostname}/${version}/economiccalendar?from=2020-08-05&to=2020-10-20&apikey=${APIKEY}`;

// Stock Look Up Tool
// Search
// Search via ticker and company name:
export const searchtickercompany = `https://${hostname}/${version}/search?query=AA&limit=10&exchange=NASDAQ&apikey=${APIKEY}`;

// Or search only via ticker:
export const searchticker = `https://${hostname}/${version}/search-ticker?query=AA&limit=10&exchange=NASDAQ&apikey=${APIKEY}`;

// Stock Screener
// Company Stock Screener.
// To list all countries, you may use:
export const countries = `https://${hostname}/${version}/get-all-countries?apikey=${APIKEY}`;

// Company Information
// Company Profile
// Companies profile in JSON:
export const companyprofile = `https://${hostname}/${version}/profile/AAPL?apikey=${APIKEY}`;

// Key Executives
// Company executives in JSON:
export const companyexecutives = `https://${hostname}/${version}/key-executives/AAPL?apikey=${APIKEY}`;

// Market Capitalisation
// Market capitalisation in JSON:
export const marketcapitalization = `https://${hostname}/${version}/market-capitalization/AAPL?apikey=${APIKEY}`;

// Historical market capitalization in JSON, daily:
export const marketcapitalizationhistorical = `https://${hostname}/${version}/historical-market-capitalization/AAPL?limit=100&apikey=${APIKEY}`;

// Company Outlook
// Company Outlook in JSON:
export const companyoutlooks = `https://${hostname}/api/v4/company-outlook?symbol=AAPL&apikey=${APIKEY}`;

// Stock Peers
// Stock peers based on sector, exchange and market cap in JSON:
export const stookpeers = `https://${hostname}/api/v4/stockpeers?symbol=AAPL&apikey=${APIKEY}`;

// NYSE Trading Hours
// NYSE: Holidays and Trading Hours in JSON:
export const tradinghours = `https://${hostname}/${version}/is-the-market-open?apikey=${APIKEY}`;

// Delisted Companies
// Delisted companies in JSON:
export const delistedcompanies = `https://${hostname}/${version}/delisted-companies?limit=100&apikey=${APIKEY}`;

// Stock News Endpoints
// FMP Articles
// FMP articles written by our analysts in JSON:
export const fmparticles = `https://${hostname}/api/v4/articles?page=0&size=5&apikey=${APIKEY}`;

// Stock News
// Multiply stock news in JSON:
export const stocknews = `https://${hostname}/${version}/stocknews?tickers=AAPL,FB,GOOG,AMZN&limit=50&apikey=${APIKEY}`;

// Single stock news in JSON:
export const singlestocknews = `https://${hostname}/${version}/stocknews?tickers=AAPL&limit=50&apikey=${APIKEY}`;

// Latest stock news in JSON:
export const lateststocknews = `https://${hostname}/${version}/stocknews?limit=50&apikey=${APIKEY}`;

// Press Releases
// Stock press releases in JSON:
export const pressreleases = `https://${hostname}/${version}/press-releases/AAPL?limit=100&apikey=${APIKEY}`;

// Market Perfomance
// Sectors PE Ratio
// Average price to earnings ratio for sectors in JSON:
export const sectorperatio = `https://${hostname}/api/v4/sectorpriceearningratio?date=2021-05-07&exchange=NYSE&apikey=${APIKEY}`;

// Industries PE Ratio
// Average price to earnings ratio for industries in JSON:
export const industriesperatio = `https://${hostname}/api/v4/industrypriceearningratio?date=2021-05-07&exchange=NYSE&apikey=${APIKEY}`;

// Sectors Perfomance
// Stock Market Sectors Performance in JSON, daily:
export const sectorperformance = `https://${hostname}/${version}/sectors-performance?apikey=${APIKEY}`;

// Historical sector performance in JSON:
export const sectorperformancehistorical = `https://${hostname}/${version}/historical-sectors-performance?limit=50&apikey=${APIKEY}`;

// Most Gainer Stock Companies
// Most Gainer Stock Companies in JSON, daily:
export const mostgainer = `https://${hostname}/${version}/gainers?apikey=${APIKEY}`;

// Most Loser Stock Companies
// Most Losers Stock Companies in JSON, daily:
export const mostloser = `https://${hostname}/${version}/losers?apikey=${APIKEY}`;

// Most Active Stock Companies
// Most Active Stock Companies in JSON, daily:
export const mostactive = `https://${hostname}/${version}/actives?apikey=${APIKEY}`;

// Advanced Data
// Standart Industrial Classification
// Standard Industrial Classification by CIK in JSON:
export const siccik = `https://${hostname}/api/v4/standardindustrialclassification?cik=0000320193&apikey=${APIKEY}`;

// Standard Industrial Classification by symbol in JSON:
export const sicsymbol = `https://${hostname}/api/v4/standardindustrialclassification?symbol=AAPL&apikey=${APIKEY}`;

// Standard Industrial Classification by SIC Code in JSON:
export const siccode = `https://${hostname}/api/v4/standardindustrialclassification?sicCode=3571&apikey=${APIKEY}`;

// Every Standard Industrial Classification available in JSON:
export const sicvailible = `https://${hostname}/api/v4/standardindustrialclassification/all?apikey=${APIKEY}`;

// Standart Industrial Classification List
// Full Standard Industrial Classification List in JSON:
export const siclist = `https://${hostname}/api/v4/standardindustrialclassificationlist?apikey=${APIKEY}`;

// Standard Industrial Classification List by industry title in JSON:
export const siclistindustry = `https://${hostname}/api/v4/standardindustrialclassificationlist?industryTitle=services&apikey=${APIKEY}`;

// Standard Industrial Classification Details by SIC Code in JSON:
export const siclistcode = `https://${hostname}/api/v4/standardindustrialclassificationlist?sicCode=3571&apikey=${APIKEY}`;

// COT Trading Symbols List
// List of symbols for COT in JSON:
export const cotsymbol = `https://${hostname}/api/v4/commitmentoftradersreport/list?apikey=${APIKEY}`;

// COT Report
// List of reports for period of time in JSON:
export const cotreportperiod = `https://${hostname}/api/v4/commitmentoftradersreport?from=2020-09-12&to=2021-01-01&apikey=${APIKEY}`;

// List of reports for specific symbol in JSON:
export const cotreportsymbol = `https://${hostname}/api/v4/commitmentoftradersreport/ES?apikey=${APIKEY}`;

// COT Analysis
// Analysis of reports for time period in JSON:
export const cotanalysisperiod = `https://${hostname}/api/v4/commitmentoftradersreportanalysis?from=2020-09-12&to=2021-01-01&apikey=${APIKEY}`;

// Analysis of reports for trading symbol in JSON:
export const cotanalysissymbol = `https://${hostname}/api/v4/commitmentoftradersreportanalysis/M6?apikey=${APIKEY}`;

// Stock Statistics
// Social Sentiment
// Social Media sentiment about stocks provided by SentimentInvestor in JSON:
export const socialsentiment = `https://${hostname}/api/v4/social-sentiment?symbol=AAPL&limit=100&apikey=${APIKEY}`;

// Stock Grade
// Stock grade from analysts in JSON:
export const stockgrade = `https://${hostname}/${version}/grade/AAPL?limit=500&apikey=${APIKEY}`;

// Earnings Surprises
// Earnings Surprises in JSON:
export const earningssurprises = `https://${hostname}/${version}/earnings-surprises/AAPL?apikey=${APIKEY}`;

// Analyst Estimates
// Annual analyst estimates of a stock in JSON:
export const analysisestimates = `https://${hostname}/${version}/analyst-estimates/AAPL?limit=30&apikey=${APIKEY}`;

// Quarter analyst estimates of a stock in JSON:
export const analysisestimatesquarter = `https://${hostname}/${version}/analyst-estimates/AAPL?period=quarter&limit=30&apikey=${APIKEY}`;

// Insider Trading
// Stock Insider Trading
// Stock insider trading using ticker in JSON:
export const insidertradingsymbol = `https://${hostname}/api/v4/insider-trading?symbol=AAPL&limit=100&apikey=${APIKEY}`;

// Stock insider trading using reporting CIK in JSON:
export const insidertradingreport = `https://${hostname}/api/v4/insider-trading?reportingCik=0001663020&limit=100&apikey=${APIKEY}`;

// Stock insider trading using company CIK in JSON:
export const insidertradingcompany = `https://${hostname}/api/v4/insider-trading?companyCik=0000320193&limit=100&apikey=${APIKEY}`;

// CIK Mapper
// List with names and their CIK in JSON:
export const mapperciklist = `https://${hostname}/api/v4/mapper-cik-name?apikey=${APIKEY}`;

// CIK mapper using name param in JSON:
export const mappercikname = `https://${hostname}/api/v4/mapper-cik-name?name=zuckerberg%20mark&apikey=${APIKEY}`;

// Company CIK mapper in JSON:
export const mappercikcompany = `https://${hostname}/api/v4/mapper-cik-company/MSFT?apikey=${APIKEY}`;

// Insider Trading RSS Feed
// RSS Feed of form 3, 4 and 5 in JSON:
export const rssfeed = `https://${hostname}/api/v4/insider-trading-rss-feed?limit=50&apikey=${APIKEY}`;

// Fail To Deliver
// Fail to deliver data for symbol in JSON:
export const failtodeliver = `https://${hostname}/api/v4/failtodeliver?symbol=GE&apikey=${APIKEY}`;

// Stock Price Endpoints
// Company Quote
// Companies Quote in JSON, real - time:
export const quote = `https://${hostname}/${version}/quote/AAPL?apikey=${APIKEY}`;

// Stock Price
// Real - time stock price in JSON:
export const quoteshort = `https://${hostname}/${version}/quote-short/AAPL?apikey=${APIKEY}`;

// All Real - time stock price in JSON:
export const quotes = `https://${hostname}/${version}/quotes/nyse?apikey=${APIKEY}`;

// Stock Historical Price
// 1 minute historical stock prices with volume
export const historicalchart1 = `https://${hostname}/${version}/historical-chart/1min/AAPL?apikey=${APIKEY}`;

// 5 minutes historical stock prices with volume
export const historicalchart5 = `https://${hostname}/${version}/historical-chart/5min/AAPL?apikey=${APIKEY}`;

// 15 minutes historical stock prices with volume
export const historicalchart15 = `https://${hostname}/${version}/historical-chart/15min/AAPL?apikey=${APIKEY}`;

// 30 minutes historical stock prices with volume
export const historicalchart30 = `https://${hostname}/${version}/historical-chart/30min/AAPL?apikey=${APIKEY}`;

// Hour historical stock prices with volume
export const historicalcharthour = `https://${hostname}/${version}/historical-chart/1hour/AAPL?apikey=${APIKEY}`;

// 4 Hours historical stock prices with volume
export const historicalchart4hour = `https://${hostname}/${version}/historical-chart/4hour/AAPL?apikey=${APIKEY}`;

// Historical daily prices
export const historicaldailyprices = `https://${hostname}/${version}/historical-price-full/AAPL?serietype=line&apikey=${APIKEY}`;

// Historical daily prices with change and volume
export const historicalDailyPricesChange = `https://${hostname}/${version}/historical-price-full/AAPL?apikey=${APIKEY}`;

// Historical daily prices with change and volume interval
export const historicalDailyInterval = `https://${hostname}/${version}/historical-price-full/AAPL?from=2018-03-12&to=2019-03-12&apikey=${APIKEY}`;

// Historical daily prices with change and volume Time series
export const historicalTimeSeries = `https://${hostname}/${version}/historical-price-full/AAPL?timeseries=5&apikey=${APIKEY}`;

// Batch Request Stock Daily historical price
export const historicalStockDaily = `https://${hostname}/${version}/historical-price-full/AAPL,GOOG,FB?apikey=${APIKEY}`;

export const mutualFunds = `https://${hostname}/${version}/historical-price-full/JBFRX,BPLEX,VEVRX?apikey=${APIKEY}`;

// Stock Historical Dividends
// Stock Daily historical dividend prices in JSON:
export const dividendPrices = `https://${hostname}/${version}/historical-price-full/stockdividend/AAPL?apikey=${APIKEY}`;

// Historical Stock Split
// Stock Daily historical splits in JSON:
export const históricalStockSplit = `https://${hostname}/${version}/historical-price-full/stocksplit/AAPL?apikey=${APIKEY}`;

// Survivorship Bias Free
// Survivorship Bias Free EOD in JSON:
export const survivorship = `https://${hostname}/api/v4/historical-price-full/ABI/2005-01-03?apikey=${APIKEY}`;

// Intraday Indicators
// Daily technical indicators in JSON:

// 1 minute technical indicator
export const technicalIndicator1 = `https://${hostname}/${version}/technicalindicator/1min/AAPL?period=10&type=ema&apikey=${APIKEY}`;

// 5 minutes technical indicator
export const technicalIndicator5 = `https://${hostname}/${version}/technicalindicator/5min/AAPL?period=10&type=ema&apikey=${APIKEY}`;

// 15 minutes technical indicator
export const technicalIndicator15 = `https://${hostname}/${version}/technicalindicator/15min/AAPL?period=10&type=ema&apikey=${APIKEY}`;

// 30 minutes technical indicator
export const technicalIndicator30 = `https://${hostname}/${version}/technicalindicator/30min/AAPL?period=10&type=ema&apikey=${APIKEY}`;

// Hour technical indicator
export const technicalIndicatorHour = `https://${hostname}/${version}/technicalindicator/1hour/AAPL?period=10&type=ema&apikey=${APIKEY}`;

// 4 Hours technical indicator
export const technicalIndicator4hour = `https://${hostname}/${version}/technicalindicator/4hour/AAPL?period=10&type=ema&apikey=${APIKEY}`;

// Fund Holdings
// ETF Holders
// ETF holders in JSON:
export const etfHolder = `https://${hostname}/${version}/etf-holder/SPY?apikey=${APIKEY}`;

// Institutional Holders
// Institutional holders of a company in JSON:
export const institutionalholder = `https://${hostname}/${version}/institutional-holder/AAPL?apikey=${APIKEY}`;

// Mutual Fund Holders
// Mutual Fund Holders of a company in JSON:
export const mutualfoundholder = `https://${hostname}/${version}/mutual-fund-holder/AAPL?apikey=${APIKEY}`;

// ETF Sector Weightings
// ETF Sector Weightings in JSON:
export const etfsectorweightings = `https://${hostname}/${version}/etf-sector-weightings/SPY?apikey=${APIKEY}`;

// ETF Country Weightings
// ETF Country Weightings in JSON:
export const etfcountrweightings = `https://${hostname}/${version}/etf-country-weightings/SPY?apikey=${APIKEY}`;

// Form 13F
// 13F List
// Complete list of all institutional investment managers by cik in JSON:
export const investmentmanagerslist = `https://${hostname}/${version}/ciklist?apikey=${APIKEY}`;

// Search CIK by name
// FORM 13F cik search by name in JSON:
export const cikname = `https://${hostname}/${version}/cik-search/Berkshire?apikey=${APIKEY}`;

// Get company name by cik
// FORM 13F get company name by cik in JSON:
export const form13fcompany = `https://${hostname}/${version}/cik/0001067983?apikey=${APIKEY}`;

// Form 13F
export const form13freport = `https://${hostname}/${version}/form-thirteen/0001067983?date=2020-06-30&apikey=${APIKEY}`;

// Get filing dates by cik
// 13F Filings Dates by cik in JSON:
export const form13ffilings = `https://${hostname}/${version}/form-thirteen-date/0001035674?apikey=${APIKEY}`;

// Cusip Mapper
// Cusip Mapper in JSON:
export const cusipmapper = `https://${hostname}/${version}/cusip/000360206?apikey=${APIKEY}`;

// Stock List
// Symbols List
// All Companies ticker symbols available in Financial Modeling Prep in JSON:
export const companiesticker = `https://${hostname}/${version}/stock/list?apikey=${APIKEY}`;

// Tradable Symbols List
// All tradable Symbols in JSON:
export const tradablesymbols = `https://${hostname}/${version}/available-traded/list?apikey=${APIKEY}`;

// ETF List
// All ETF symbols in JSON:
export const etfsymbols = `https://${hostname}/${version}/etf/list?apikey=${APIKEY}`;

// Bulk And Batch
// Batch Request Stock Companies Price
// Multiple companies Prices in JSON:
export const multiplecompaniesprices = `https://${hostname}/${version}/quote/AAPL,FB,GOOG?apikey=${APIKEY}`;

// Batch request that contains all end of day prices for specific date in CSV:
export const batchrequest = `https://${hostname}/api/v4/batch-request-end-of-day-prices?date=2021-05-18&apikey=${APIKEY}`;

// Bulk Endpoint
// Those endpoints are only available for users with Profesional and Enterprise plan.

// All quarter or annual Income Statements for specific year in CSV:
export const periodincomestatements = `https://${hostname}/api/v4/income-statement-bulk?year=2020&period=annual&apikey=${APIKEY}`;

// All quarter or annual Balance Sheet Statements for specific year in CSV:
export const periodbalancesheetstatement = `https://${hostname}/api/v4/balance-sheet-statement-bulk?year=2020&period=annual&apikey=${APIKEY}`;

// All quarter or annual Cash Flow Statements for specific year in CSV:
export const periodcashflowstatement = `https://${hostname}/api/v4/cash-flow-statement-bulk?year=2020&period=annual&apikey=${APIKEY}`;

// All quarter or annual Ratios for specific year in CSV:
export const periodratios = `https://${hostname}/api/v4/ratios-bulk?year=2020&period=annual&apikey=${APIKEY}`;

// All quarter or annual Key Metrics for specific year in CSV:
export const periodkeymetrics = `https://${hostname}/api/v4/key-metrics-bulk?year=2020&period=annual&apikey=${APIKEY}`;

// All Earning Surprises for specific year in CSV:
export const annualearningssurprices = `https://${hostname}/api/v4/earnings-surprises-bulk?year=2020&apikey=${APIKEY}`;

// It conains all profiles from our API in one CSV file:
export const allprofiles = `https://${hostname}/api/v4/profile/all?apikey=${APIKEY}`;

// Market Indexes
// Major Indexes
// All Majors Indexes(Dow Jones, Nasdaq, S & P 500).Prices Updated by Real - times, in JSON:
export const majorindexes = `https://${hostname}/${version}/quotes/index?apikey=${APIKEY}`;

// Real - time Stock market index(S & P 500) Price, in JSON:
export const stockmarketindexes = `https://${hostname}/${version}/quote/%5EGSPC?apikey=${APIKEY}`;

// List Of SP 500 Companies
// All S & P 500 constituents in JSON:
export const sp500 = `https://${hostname}/${version}/sp500constituent?apikey=${APIKEY}`;

// Downloadable all S & P 500 constituents in CSV:
export const downloadsp500 = `https://${hostname}/${version}/sp500constituent?datatype=csv&apikey=${APIKEY}`;

// Historical SP 500
// Historical S & P 500 constituents List in JSON:
export const historicalsp500 = `https://${hostname}/${version}/historical/sp500constituent?apikey=${APIKEY}`;

// List Of Nasdaq 100 Companies
// All Nasdaq 100 constituents in JSON:
export const nasdaq100 = `https://${hostname}/${version}/nasdaqconstituent?apikey=${APIKEY}`;

// Downloadable all Nasdaq 100 constituents in CSV:
export const downloadnasdaq100 = `https://${hostname}/${version}/nasdaqconstituent?datatype=csv&apikey=${APIKEY}`;

// List Of Dow Jones Companies
// All Dow Jones constituents in JSON:
export const dowjonesconstituent = `https://${hostname}/${version}/dowjonesconstituent?apikey=${APIKEY}`;

// Downloadable all Dow Jones constituents in CSV:
export const downloaddowjones = `https://${hostname}/${version}/dowjonesconstituent?datatype=csv&apikey=${APIKEY}`;

// Historical Dow Jones
// Historical Dow Jones constituents List in JSON:
export const historicaldowjones = `https://${hostname}/${version}/historical/dowjonesconstituent?apikey=${APIKEY}`;

// Historical Stock Prices
// Major Indexes Historical quotes
// Stock Market Indexes(Dow Jones, Nasdaq, S & P 500) available for historical prices query in JSON:
export const availableindexes = `https://${hostname}/${version}/symbol/available-indexes?apikey=${APIKEY}`;

//  1 minute historical stock prices with volume
// Stock one minute historical stock prices in JSON:
export const historicalstockprices1 = `https://${hostname}/${version}/historical-chart/1min/%5EGSPC?apikey=${APIKEY}`;

// 5 minutes historical stock prices with volume
// Stock five minutes historical stock prices in JSON:
export const historicalstockprices5 = `https://${hostname}/${version}/historical-chart/5min/%5EGSPC?apikey=${APIKEY}`;

// 15 minutes historical stock prices with volume
// Stock fifteen minutes historical stock prices in JSON:
export const historicalstockprices15 = `https://${hostname}/${version}/historical-chart/15min/%5EGSPC?apikey=${APIKEY}`;

// 30 minutes historical stock prices with volume
// Stock thirty minutes historical stock prices in JSON:
export const historicalstockprices30 = `https://${hostname}/${version}/historical-chart/30min/%5EGSPC?apikey=${APIKEY}`;

// Hour historical stock prices with volume
// Stock hour historical stock prices in JSON:
export const historicalstockpriceshour = `https://${hostname}/${version}/historical-chart/1hour/%5EGSPC?apikey=${APIKEY}`;

// 4 Hour historical stock prices with volume
// Stock Four hours historical stock prices in JSON:
export const historicalstockprices4hour = `https://${hostname}/${version}/historical-chart/4hour/%5EGSPC?apikey=${APIKEY}`;

// Historical Daily Prices
// Indexes Historical Prices in JSON:
export const historicalpricefull = `https://${hostname}/${version}/historical-price-full/%5EGSPC?apikey=${APIKEY}`;

// EuroNext
// EuroNext Prices
// EuroNext available symbols for quotes and historical prices query in JSON:
export const euronextavailable = `https://${hostname}/${version}/symbol/available-euronext?apikey=${APIKEY}`;

// All Real - time EuroNext Prices in JSON:
export const euronextquotes = `https://${hostname}/${version}/quotes/euronext?apikey=${APIKEY}`;

// Real - time EDF Price in JSON:
export const edfprice = `https://${hostname}/${version}/quote/EDF.PA,KIN.BR,SCB.LS?apikey=${APIKEY}`;

// Historical EuroNext Prices
// 1 minute historical stock prices with volume
// Stock one minute historical stock prices in JSON:
export const euronext1 = `https://${hostname}/${version}/historical-chart/1min/EDF.PA?apikey=${APIKEY}`;

// 5 minutes historical stock prices with volume
// Stock five minutes historical stock prices in JSON:
export const euronext5 = `https://${hostname}/${version}/historical-chart/5min/EDF.PA?apikey=${APIKEY}`;

// 15 minutes historical stock prices with volume
// Stock fifteen minutes historical stock prices in JSON:
export const euronext15 = `https://${hostname}/${version}/historical-chart/15min/EDF.PA?apikey=${APIKEY}`;

// 30 minutes historical stock prices with volume
// Stock thirty minutes historical stock prices in JSON:
export const euronext30 = `https://${hostname}/${version}/historical-chart/30min/EDF.PA?apikey=${APIKEY}`;

// Hour historical stock prices with volume
// Stock hour historical stock prices in JSON:
export const euronexthour = `https://${hostname}/${version}/historical-chart/1hour/EDF.PA?apikey=${APIKEY}`;

// 4 Hour historical stock prices with volume
// Stock four hours historical stock prices in JSON:
export const euronext4hour = `https://${hostname}/${version}/historical-chart/4hour/EDF.PA?apikey=${APIKEY}`;

// Historical daily prices
// EuroNext historical prices for EDF.PA in JSON:
export const euronextdaily = `https://${hostname}/${version}/historical-price-full/EDF.PA?apikey=${APIKEY}`;

// ETF historical dividend prices for EDF.PA.in JSON:
export const etfdividend = `https://${hostname}/${version}/historical-price-full/stockdividend/EDF.PA?apikey=${APIKEY}`;

// ETF historical split prices for EDF.PA in JSON:
export const etfsplitprices = `https://${hostname}/${version}/historical-price-full/stocksplit/EDF.PA?apikey=${APIKEY}`;

// TSX
// Most Of The TSX
// TSX available symbols for quotes and historical prices query in JSON:
export const tsxavailable = `https://${hostname}/${version}/symbol/available-tsx?apikey=${APIKEY}`;

// All Real - time TSX Prices in JSON:
export const tsxallprices = `https://${hostname}/${version}/quotes/tsx?apikey=${APIKEY}`;

// Real - time TSX Price in JSON:
export const tsxprice = `https://${hostname}/${version}/quote/FNV.TO,XAW.TO,DR.TO?apikey=${APIKEY}`;

// Historical TSX prices
// 1 minute historical stock prices with volume
// Stock one minute historical stock prices in JSON:
export const tsx1 = `https://${hostname}/${version}/historical-chart/1min/FNV.TO?apikey=${APIKEY}`;

// 5 minutes historical stock prices with volume
// Stock five minutes historical stock prices in JSON:
export const tsx5 = `https://${hostname}/${version}/historical-chart/5min/FNV.TO?apikey=${APIKEY}`;

// 15 minutes historical stock prices with volume
// Stock fifteen minutes historical stock prices in JSON:
export const tsx15 = `https://${hostname}/${version}/historical-chart/15min/FNV.TO?apikey=${APIKEY}`;

// 30 minutes historical stock prices with volume
// Stock thirty minutes historical stock prices in JSON:
export const tsx30 = `https://${hostname}/${version}/historical-chart/30min/FNV.TO?apikey=${APIKEY}`;

// Hour historical stock prices with volume
// Stock hour historical stock prices in JSON:
export const tsxhour = `https://${hostname}/${version}/historical-chart/1hour/FNV.TO?apikey=${APIKEY}`;

// 4 Hours historical stock prices with volume
// Stock four hours historical stock prices in JSON:
export const tsx4hour = `https://${hostname}/${version}/historical-chart/4hour/FNV.TO?apikey=${APIKEY}`;

// Historical Daily Prices
// TSX historical prices for Gold in JSON:
export const tsxprices = `https://${hostname}/${version}/historical-price-full/FNV.TO?apikey=${APIKEY}`;

// TSX historical dividend prices for FNV.TO in JSON:
export const tsxdividend = `https://${hostname}/${version}/historical-price-full/stockdividend/FNV.TO?apikey=${APIKEY}`;

// TSX historical split prices for FNV.TO in JSON:
export const tsxsplitpricescryptofnv = `https://${hostname}/${version}/historical-price-full/stocksplit/FNV.TO?apikey=${APIKEY}`;

// Crypto And Forex And Commodities
// Cryptocurrency
// Digital and Cryptocurrencies
// Wide range of data feed for digital and Cryptocurrencies in JSON:
export const cryptoQuotes = `https://${hostname}/${version}/quotes/crypto?apikey=${APIKEY}`;

// Single Cryptocurrency such as Bitcoin
export const cryptoQuote = `https://${hostname}/${version}/quote/BTCUSD?apikey=${APIKEY}`;

// Historical Cryptocurrencies Prices
// Crypto Historical quotes
// Cryptocurrencies available pairs for historical prices query in JSON:
export const cryptoAvailableCurrencies = `https://${hostname}/${version}/symbol/available-cryptocurrencies?apikey=${APIKEY}`;

//  1 minute historical stock prices with volume
// Stock one minute historical stock prices in JSON:
export const crypto1 = `https://${hostname}/${version}/historical-chart/1min/BTCUSD?apikey=${APIKEY}`;

// 5 minutes historical stock prices with volume
// Stock five minutes historical stock prices in JSON:
export const crypto5 = `https://${hostname}/${version}/historical-chart/5min/BTCUSD?apikey=${APIKEY}`;

// 15 minutes historical stock prices with volume
// Stock fifteen minutes historical stock prices in JSON:
export const crypto15 = `https://${hostname}/${version}/historical-chart/15min/BTCUSD?apikey=${APIKEY}`;

// 30 minutes historical stock prices with volume
// Stock thirty minutes historical stock prices in JSON:
export const crypto30 = `https://${hostname}/${version}/historical-chart/30min/BTCUSD?apikey=${APIKEY}`;

// Hour historical stock prices with volume
// Stock hour historical stock prices in JSON:
export const cryptoHour = `https://${hostname}/${version}/historical-chart/1hour/BTCUSD?apikey=${APIKEY}`;

// 4 Hours minutes historical stock prices with volume
// Stock four hours historical stock prices in JSON:
export const crypto4hour = `https://${hostname}/${version}/historical-chart/4hour/BTCUSD?apikey=${APIKEY}`;

// Historical Daily Prices
// Crypto historical prices in JSON:
export const cryptoDaily = `https://${hostname}/${version}/historical-price-full/BTCUSD?apikey=${APIKEY}`;

// Forex
// Forex Currency Exchange Rate
// Currency exchange rates(FX) in JSON:
export const forexrates = `https://${hostname}/${version}/fx?apikey=${APIKEY}`;

// All Real - time Forex Prices in JSON:
export const forexprices = `https://${hostname}/${version}/quotes/forex?apikey=${APIKEY}`;

// Single Currency such as Euro - dollars(EUR / USD)
// Currency exchange rate such as Euro - dollars(EUR / USD) in JSON:
export const forexexchangerate = `https://${hostname}/${version}/fx/EURUSD?apikey=${APIKEY}`;

// Real - time Forex Price in JSON:
export const forexprice = `https://${hostname}/${version}/quote/JPYUSD?apikey=${APIKEY}`;

// Historical Forex Prices
// Forex Historical quotes
// Forex available pairs for historical prices query in JSON:
export const forexavailablepairs = `https://${hostname}/${version}/symbol/available-forex-currency-pairs?apikey=${APIKEY}`;

//  1 minute historical stock prices with volume
// Stock one minute historical stock prices in JSON:
export const forex1 = `https://${hostname}/${version}/historical-chart/1min/JPYUSD?apikey=${APIKEY}`;

// 5 minutes historical stock prices with volume
// Stock five minutes historical stock prices in JSON:
export const forex5 = `https://${hostname}/${version}/historical-chart/5min/JPYUSD?apikey=${APIKEY}`;

// 15 minutes historical stock prices with volume
// Stock fifteen minutes historical stock prices in JSON:
export const forex15 = `https://${hostname}/${version}/historical-chart/15min/JPYUSD?apikey=${APIKEY}`;

// 30 minutes historical stock prices with volume
// Stock thirty minutes historical stock prices in JSON:
export const forex30 = `https://${hostname}/${version}/historical-chart/30min/JPYUSD?apikey=${APIKEY}`;

// Hour historical stock prices with volume
// Stock hour historical stock prices in JSON:
export const forexhour = `https://${hostname}/${version}/historical-chart/1hour/JPYUSD?apikey=${APIKEY}`;

// 4 Hours minutes historical stock prices with volume
// Stock four hour historical stock prices in JSON:
export const forex4hour = `https://${hostname}/${version}/historical-chart/4hour/JPYUSD?apikey=${APIKEY}`;

// Historical Daily Prices
// Forex historical prices
export const forexdaily = `https://${hostname}/${version}/historical-price-full/JPYUSD?apikey=${APIKEY}`;

// Commodities
// Commodities symbol List
// Commodities available symbols for quotes and historical prices query in JSON:
export const commoditiessymbol = `https://${hostname}/${version}/symbol/available-commodities?apikey=${APIKEY}`;

// All real - time commodities prices in JSON:
export const commoditiesprices = `https://${hostname}/${version}/quotes/commodity?apikey=${APIKEY}`;

// Real - time Gold Price in JSON:
export const commoditiesprice = `https://${hostname}/${version}/quote/ZGUSD,CLUSD,HGUSD?apikey=${APIKEY}`;

// Historical Commodities Prices
// 1 minute historical stock prices with volume
// Stock one minute historical stock prices in JSON:
export const commodities1 = `https://${hostname}/${version}/historical-chart/1min/ZGUSD?apikey=${APIKEY}`;

// 5 minutes historical stock prices with volume
// Stock five minutes historical stock prices in JSON:
export const commodities5 = `https://${hostname}/${version}/historical-chart/5min/ZGUSD?apikey=${APIKEY}`;

// 15 minutes historical stock prices with volume
// Stock fifteen minutes historical stock prices in JSON:
export const commodities15 = `https://${hostname}/${version}/historical-chart/15min/ZGUSD?apikey=${APIKEY}`;

// 30 minutes historical stock prices with volume
// Stock thirty minutes historical stock prices in JSON:
export const commodities30 = `https://${hostname}/${version}/historical-chart/30min/ZGUSD?apikey=${APIKEY}`;

// Hour historical stock prices with volume
// Stock hour historical stock prices
export const commoditieshour = `https://${hostname}/${version}/historical-chart/1hour/ZGUSD?apikey=${APIKEY}`;

// 4 Hours historical stock prices with volume
// Stock four hours historical stock prices in JSON:
export const commodities4hour = `https://${hostname}/${version}/historical-chart/4hour/ZGUSD?apikey=${APIKEY}`;

// Historical Daily Prices
// Commodities historical prices for Gold in JSON:
export const commoditiesdailyetf = `https://${hostname}/${version}/historical-price-full/ZGUSD?apikey=${APIKEY}`;

// ETF And Mutual Fund
// ETF Prices
// ETF available symbols for quotes and historical prices query in JSON:
export const etfsymbol = `https://${hostname}/${version}/symbol/available-etfs?apikey=${APIKEY}`;

// All Real - time ETF Prices in JSON:
export const etfprices = `https://${hostname}/${version}/quotes/etf?apikey=${APIKEY}`;

// Real - time ETF Price in JSON:
export const etfprice = `https://${hostname}/${version}/quote/PRNT,DFVS,VQT?apikey=${APIKEY}`;

// Historical ETF Prices
// 1 minute historical stock prices with volume
// Stock one minute historical stock prices in JSON:
export const etf1 = `https://${hostname}/${version}/historical-chart/1min/PRNT?apikey=${APIKEY}`;

// 5 minutes historical stock prices with volume
// Stock five minutes historical stock prices in JSON:
export const etf5 = `https://${hostname}/${version}/historical-chart/5min/PRNT?apikey=${APIKEY}`;

// 15 minutes historical stock prices with volume
// Stock fifteen minutes historical stock prices in JSON:
export const etf15 = `https://${hostname}/${version}/historical-chart/15min/PRNT?apikey=${APIKEY}`;

// 30 minutes historical stock prices with volume
// Stock thirty minutes historical stock prices in JSON:
export const etf30 = `https://${hostname}/${version}/historical-chart/30min/PRNT?apikey=${APIKEY}`;

// Hour historical stock prices with volume
// Stock hour historical stock prices in JSON:
export const etfhour = `https://${hostname}/${version}/historical-chart/1hour/PRNT?apikey=${APIKEY}`;

// 4 Hour historical stock prices with volume
// Stock four hours historical stock prices in JSON:
export const etf4hour = `https://${hostname}/${version}/historical-chart/4hour/PRNT?apikey=${APIKEY}`;

// Historical daily prices
// ETF historical prices for PRNT in JSON:
export const etfdaily = `https://${hostname}/${version}/historical-price-full/PRNT?apikey=${APIKEY}`;

// ETF historical dividend prices for PRNT in JSON:
export const etfdividendprnt = `https://${hostname}/${version}/historical-price-full/stockdividend/PRNT?apikey=${APIKEY}`;

// ETF historical split prices for PRNT in JSON:
export const etfsplitpricesprnt = `https://${hostname}/${version}/historical-price-full/stocksplit/PRNT?apikey=${APIKEY}`;

// Mutual Funds Prices
// Mutual Funds available symbols for quotes and historical prices query in JSON:
export const mutualfundssymbol = `https://${hostname}/${version}/symbol/available-mutual-funds?apikey=${APIKEY}`;

// All real - time mutual funds prices in JSON:
export const mutualfundsprices = `https://${hostname}/${version}/quotes/mutualfund?apikey=${APIKEY}`;

// Real - time Mutual Funds Price in JSON:
export const mutualfundsprice = `https://${hostname}/${version}/quote/JMCRX,JSMTX,JUESX?apikey=${APIKEY}`;

// Historical Mutual Funds Prices
// 1 minute historical stock prices with volume
// Stock one minute historical stock prices in JSON:
export const mutualfunds1 = `https://${hostname}/${version}/historical-chart/1min/JMCRX?apikey=${APIKEY}`;

// 5 minutes historical stock prices with volume
// Stock five minutes historical stock prices in JSON:
export const mutualfunds5 = `https://${hostname}/${version}/historical-chart/5min/JMCRX?apikey=${APIKEY}`;

// 15 minutes historical stock prices with volume
// Stock fifteen minutes historical stock prices in JSON:
export const mutualfunds15 = `https://${hostname}/${version}/historical-chart/15min/JMCRX?apikey=${APIKEY}`;

// 30 minutes historical stock prices with volume
// Stock thirty minutes historical stock prices in JSON:
export const mutualfunds30 = `https://${hostname}/${version}/historical-chart/30min/JMCRX?apikey=${APIKEY}`;

// Hour historical stock prices with volume
// Stock hour historical stock prices in JSON:
export const mutualfundshour = `https://${hostname}/${version}/historical-chart/1hour/JMCRX?apikey=${APIKEY}`;

// 4 Hour historical stock prices with volume
// Stock four hours historical stock prices in JSON:
export const mutualfunds4hour = `https://${hostname}/${version}/historical-chart/4hour/JMCRX?apikey=${APIKEY}`;

// Historical daily prices
// Mutual Funds historical prices for JMCRX in JSON:
export const mutualfundsdaily = `https://${hostname}/${version}/historical-price-full/JMCRX?apikey=${APIKEY}`;

// ETF historical dividend prices for JMCRX in JSON:
export const etfdividendjmcrx = `https://${hostname}/${version}/historical-price-full/stockdividend/JMCRX?apikey=${APIKEY}`;

// ETF historical split prices for JMCRX in JSON:
export const etfsplitpricesjmcrx = `https://${hostname}/${version}/historical-price-full/stocksplit/JMCRX?apikey=${APIKEY}`;
