(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{94952:function(e,t,r){Promise.resolve().then(r.bind(r,47667))},47667:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var a=r(57437),n=r(79143);function s(){return(0,a.jsx)("footer",{className:"bg-secondary text-muted-foreground",children:(0,a.jsx)("div",{className:"container mx-auto px-4 py-6 text-center",children:(0,a.jsx)("p",{children:"\xa9 2025 Earnings Note. All rights reserved."})})})}var i=r(22031),o=r(66070);r(2265);var l=r(90535),c=r(94508);let u=(0,l.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function d(e){let{className:t,variant:r,...n}=e;return(0,a.jsx)("div",{className:(0,c.cn)(u({variant:r}),t),...n})}var m=r(48461),g=r.n(m);function p(e){let{domain:t,name:r,size:n=32}=e;return(0,a.jsx)("div",{className:"relative overflow-hidden rounded-full",style:{width:n,height:n},children:(0,a.jsx)(g(),{src:"https://logo.clearbit.com/".concat(t)||"/placeholder.svg",alt:"".concat(r," logo"),width:n,height:n,className:"object-cover"})})}var h=r(27648),v=r(79205);let x=(0,v.Z)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),f=(0,v.Z)("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);var y=r(21047);function b(e){var t,r,n,s;let{data:i}=e,l=(i.projectedPrice-i.currentPrice)/i.currentPrice*100;return(0,a.jsx)(o.Zb,{className:"h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in-up card-hover",children:(0,a.jsxs)(h.default,{href:"/stock/".concat(i.symbol),children:[(0,a.jsxs)(o.Ol,{className:"pb-2",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,a.jsx)(p,{domain:i.domain,name:i.companyName,size:32}),(0,a.jsx)(o.ll,{className:"text-lg sm:text-xl",children:i.symbol})]}),(0,a.jsx)(d,{variant:"secondary",className:"text-xs sm:text-sm",children:i.fiscalQuarter})]}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground mt-1",children:i.companyName})]}),(0,a.jsxs)(o.aY,{className:"p-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium text-muted-foreground",children:"EPS"}),(0,a.jsxs)("p",{className:"text-lg sm:text-xl font-bold",children:["$",null!==(n=null===(t=i.eps)||void 0===t?void 0:t.toFixed(2))&&void 0!==n?n:"N/A"]}),(0,a.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Est: $",i.epsEstimate.toFixed(2)]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium text-muted-foreground",children:"Revenue"}),(0,a.jsxs)("p",{className:"text-lg sm:text-xl font-bold",children:["$",null!==(s=null===(r=i.revenue)||void 0===r?void 0:r.toFixed(1))&&void 0!==s?s:"N/A","B"]}),(0,a.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Est: $",i.revenueEstimate.toFixed(1),"B"]})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium text-muted-foreground",children:"Rating"}),(0,a.jsx)("p",{className:"text-lg sm:text-xl font-bold",children:i.rating||"Hold"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium text-muted-foreground",children:"Price"}),(0,a.jsxs)("p",{className:"text-lg sm:text-xl font-bold",children:["$",i.currentPrice.toFixed(2)]}),(0,a.jsxs)("div",{className:"flex items-center text-sm",children:[l>0?(0,a.jsx)(x,{className:"text-green-500 mr-1 h-4 w-4"}):l<0?(0,a.jsx)(f,{className:"text-red-500 mr-1 h-4 w-4"}):(0,a.jsx)(y.Z,{className:"text-yellow-500 mr-1 h-4 w-4"}),(0,a.jsxs)("span",{className:l>0?"text-green-500":l<0?"text-red-500":"text-yellow-500",children:["$",i.projectedPrice.toFixed(2)," (",Math.abs(l).toFixed(2),"%)"]})]})]})]})]})]})})}let w={AAPL:{symbol:"AAPL",companyName:"Apple Inc.",domain:"apple.com",reportDate:"2025-04-30",fiscalQuarter:"Q2 2025",eps:1.52,epsEstimate:1.48,revenue:94.8,revenueEstimate:93.5,intradayData:E(180.5),currentPrice:180.5,projectedPrice:210,marketCap:28e11,peRatio:30.5,dividendYield:.005,volume:55e6,avgVolume:6e7,revenueGrowth:.08,grossMargin:.43,operatingMargin:.3,netMargin:.25,returnOnEquity:.35,debtToEquity:1.2,historicalEarnings:[{fiscalQuarter:"Q1 2025",reportDate:"2025-01-25",eps:1.46,epsEstimate:1.42,revenue:92.5,revenueEstimate:91.8,callSummary:"Apple reported strong growth in Services and Wearables. iPhone sales slightly exceeded expectations, while Mac and iPad sales were in line with estimates. The company highlighted its continued focus on AI and augmented reality technologies, with new product launches expected in the coming quarters."},{fiscalQuarter:"Q4 2024",reportDate:"2024-10-28",eps:1.39,epsEstimate:1.37,revenue:89.7,revenueEstimate:88.9,callSummary:"The company saw robust holiday sales, particularly in emerging markets. Apple Pay and other financial services showed significant growth. Management discussed supply chain improvements and their impact on gross margins. The company also announced increased investments in renewable energy projects."},{fiscalQuarter:"Q3 2024",reportDate:"2024-07-27",eps:1.35,epsEstimate:1.33,revenue:87.2,revenueEstimate:86.5,callSummary:"Apple's Services segment continued to show strong growth, driven by increased subscriptions across its platforms. The company reported progress in its environmental initiatives, including advancements in recycling technologies. Management also discussed ongoing R&D efforts in health-related technologies."},{fiscalQuarter:"Q2 2024",reportDate:"2024-04-29",eps:1.31,epsEstimate:1.3,revenue:85.1,revenueEstimate:84.8,callSummary:"iPhone sales were slightly below expectations due to supply constraints, but this was offset by strong performance in Services and Wearables. The company announced new initiatives in privacy and security features across its product line. Management also discussed the expansion of its retail presence in key markets."}],earningsSummary:{averageEpsBeat:2.15,averageRevenueBeat:.82,beatsInLastFourQuarters:4},conferenceSummary:"Apple reported strong growth across all product categories. The company highlighted the success of the iPhone 13 lineup and continued growth in Services. CEO Tim Cook emphasized Apple's commitment to innovation and sustainability.",afterHoursChart:E(180.5,24),nextDaysChart:E(182,1170)},GOOGL:{symbol:"GOOGL",companyName:"Alphabet Inc.",domain:"google.com",reportDate:"2025-04-28",fiscalQuarter:"Q1 2025",eps:1.31,epsEstimate:1.28,revenue:68.2,revenueEstimate:67.5,intradayData:E(2750),currentPrice:2750,projectedPrice:3100,marketCap:15e11,peRatio:25,dividendYield:null,volume:15e5,avgVolume:18e5,revenueGrowth:.12,grossMargin:.58,operatingMargin:.28,netMargin:.22,returnOnEquity:.28,debtToEquity:.8,historicalEarnings:[{fiscalQuarter:"Q4 2024",reportDate:"2025-01-30",eps:1.28,epsEstimate:1.25,revenue:66.5,revenueEstimate:65.8,callSummary:"Google Cloud continued its strong growth trajectory, gaining market share in key segments. YouTube ad revenue showed resilience despite increased competition. The company highlighted advancements in its AI and machine learning capabilities, particularly in search and ad targeting."},{fiscalQuarter:"Q3 2024",reportDate:"2024-10-24",eps:1.24,epsEstimate:1.22,revenue:64.8,revenueEstimate:64.2,callSummary:"Alphabet reported solid growth in its core advertising business, driven by improvements in ad formats and targeting. The Other Bets segment showed promising results, particularly in healthcare technology. Management discussed ongoing efforts to enhance user privacy while maintaining ad effectiveness."},{fiscalQuarter:"Q2 2024",reportDate:"2024-07-25",eps:1.2,epsEstimate:1.18,revenue:63.1,revenueEstimate:62.7,callSummary:"The company saw strong performance in mobile search and YouTube, offsetting some weakness in desktop search. Google Cloud Platform continued to gain traction among enterprise customers. Alphabet also announced new initiatives in sustainable computing and green data centers."},{fiscalQuarter:"Q1 2024",reportDate:"2024-04-23",eps:1.15,epsEstimate:1.14,revenue:61.5,revenueEstimate:61.2,callSummary:"Alphabet reported better-than-expected results, driven by a rebound in ad spending and continued growth in cloud services. The company highlighted its progress in quantum computing research and discussed potential applications across various industries. Management also addressed ongoing regulatory challenges in key markets."}],earningsSummary:{averageEpsBeat:1.8,averageRevenueBeat:1.2,beatsInLastFourQuarters:4},conferenceSummary:"Google's Q1 earnings showed strong growth in Cloud and YouTube.  AI initiatives were highlighted as key drivers of future growth.",afterHoursChart:E(2750,24),nextDaysChart:E(2770,1170)},MSFT:{symbol:"MSFT",companyName:"Microsoft Corporation",domain:"microsoft.com",reportDate:"2025-04-25",fiscalQuarter:"Q3 2025",eps:2.35,epsEstimate:2.32,revenue:52.9,revenueEstimate:52.1,intradayData:E(330.2),currentPrice:330.2,projectedPrice:380,marketCap:25e11,peRatio:28.5,dividendYield:.008,volume:2e7,avgVolume:25e6,revenueGrowth:.15,grossMargin:.65,operatingMargin:.4,netMargin:.35,returnOnEquity:.4,debtToEquity:.9,historicalEarnings:[],earningsSummary:{averageEpsBeat:0,averageRevenueBeat:0,beatsInLastFourQuarters:0},conferenceSummary:"Microsoft exceeded expectations in Q3, driven by strong growth in cloud services and enterprise software.",afterHoursChart:E(330.2,24),nextDaysChart:E(333,1170)},AMZN:{symbol:"AMZN",companyName:"Amazon.com Inc.",domain:"amazon.com",reportDate:"2025-04-25",fiscalQuarter:"Q1 2025",eps:.83,epsEstimate:.75,revenue:124.5,revenueEstimate:122.8,intradayData:E(3300.5),currentPrice:3300.5,projectedPrice:3800,marketCap:12e11,peRatio:40,dividendYield:null,volume:3e6,avgVolume:35e5,revenueGrowth:.1,grossMargin:.38,operatingMargin:.15,netMargin:.1,returnOnEquity:.2,debtToEquity:1.5,historicalEarnings:[],earningsSummary:{averageEpsBeat:0,averageRevenueBeat:0,beatsInLastFourQuarters:0},conferenceSummary:"Amazon's Q1 results showed solid growth in e-commerce and cloud services, despite ongoing economic uncertainty.",afterHoursChart:E(3300.5,24),nextDaysChart:E(3330,1170)},NVDA:{symbol:"NVDA",companyName:"NVIDIA Corporation",domain:"nvidia.com",reportDate:"2025-04-25",fiscalQuarter:"Q1 2025",eps:4.12,epsEstimate:3.98,revenue:18.2,revenueEstimate:17.8,intradayData:E(620.8),currentPrice:620.8,projectedPrice:750,marketCap:8e11,peRatio:55,dividendYield:null,volume:8e6,avgVolume:9e6,revenueGrowth:.25,grossMargin:.6,operatingMargin:.45,netMargin:.38,returnOnEquity:.45,debtToEquity:.5,historicalEarnings:[],earningsSummary:{averageEpsBeat:0,averageRevenueBeat:0,beatsInLastFourQuarters:0},conferenceSummary:"NVIDIA's Q1 earnings were exceptionally strong, driven by high demand for its AI chips.",afterHoursChart:E(620.8,24),nextDaysChart:E(630,1170)},META:{symbol:"META",companyName:"Meta Platforms, Inc.",domain:"meta.com",reportDate:"2025-05-01",fiscalQuarter:"Q1 2025",eps:null,epsEstimate:2.85,revenue:null,revenueEstimate:30.5,intradayData:E(305),currentPrice:305,projectedPrice:320,marketCap:6e11,peRatio:null,dividendYield:null,volume:4e6,avgVolume:5e6,revenueGrowth:.05,grossMargin:.48,operatingMargin:.25,netMargin:.2,returnOnEquity:.25,debtToEquity:1,historicalEarnings:[],earningsSummary:{averageEpsBeat:0,averageRevenueBeat:0,beatsInLastFourQuarters:0},conferenceSummary:"Meta's Q1 results showed modest growth, with a focus on the metaverse and Reels.",afterHoursChart:E(305,24),nextDaysChart:E(308,1170)},TSLA:{symbol:"TSLA",companyName:"Tesla, Inc.",domain:"tesla.com",reportDate:"2025-05-02",fiscalQuarter:"Q2 2025",eps:null,epsEstimate:.92,revenue:null,revenueEstimate:22.3,intradayData:E(185),currentPrice:185,projectedPrice:200,marketCap:7e11,peRatio:null,dividendYield:null,volume:6e7,avgVolume:7e7,revenueGrowth:.18,grossMargin:.28,operatingMargin:.12,netMargin:.08,returnOnEquity:.15,debtToEquity:.7,historicalEarnings:[],earningsSummary:{averageEpsBeat:0,averageRevenueBeat:0,beatsInLastFourQuarters:0},conferenceSummary:"Tesla's Q2 earnings are anticipated to show continued growth in vehicle deliveries.",afterHoursChart:E(185,24),nextDaysChart:E(188,1170)},NFLX:{symbol:"NFLX",companyName:"Netflix, Inc.",domain:"netflix.com",reportDate:"2025-05-03",fiscalQuarter:"Q2 2025",eps:null,epsEstimate:3.15,revenue:null,revenueEstimate:8.7,intradayData:E(420),currentPrice:420,projectedPrice:480,marketCap:2e11,peRatio:35,dividendYield:null,volume:2e6,avgVolume:25e5,revenueGrowth:.08,grossMargin:.7,operatingMargin:.3,netMargin:.25,returnOnEquity:.3,debtToEquity:.6,historicalEarnings:[],earningsSummary:{averageEpsBeat:0,averageRevenueBeat:0,beatsInLastFourQuarters:0},conferenceSummary:"Netflix's Q2 earnings are expected to reflect continued subscriber growth and expansion into new markets.",afterHoursChart:E(420,24),nextDaysChart:E(425,1170)}};function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:390,r=[],a=e,n=new Date;n.setHours(9,30,0,0);for(let e=0;e<t;e++){let t=new Date(n.getTime()+6e4*e);a*=1+(Math.random()-.5)*.01,r.push({time:t.toISOString(),price:Number.parseFloat(a.toFixed(2))})}return r}async function j(){return await new Promise(e=>setTimeout(e,500)),function(){let e=new Date("2025-04-27"),t=[];for(let r=0;r<7;r++){let a=new Date(e);if(a.setDate(e.getDate()+r),0===a.getDay()||6===a.getDay())continue;let n=Object.values(w).slice(2*r,2*r+2).map(e=>({...e,reportDate:a.toISOString().split("T")[0]}));t.push(...n)}return t}()}async function N(e){let{searchParams:t}=e;t.date&&t.date;let r=(await j()).reduce((e,t)=>{let r=t.reportDate;return e[r]||(e[r]=[]),e[r].push(t),e},{});return(0,a.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,a.jsx)(n.Header,{}),(0,a.jsxs)("main",{className:"flex-grow",children:[(0,a.jsx)("section",{className:"w-full bg-secondary py-6 sm:py-8 lg:py-12",children:(0,a.jsxs)("div",{className:"container px-4 lg:px-8",children:[(0,a.jsx)("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center",children:"Weekly Earnings Reports"}),(0,a.jsx)(i.WeekCalendar,{onDateSelect:e=>{window.location.href="/weekly-earnings?date=".concat(e.toISOString().split("T")[0])}})]})}),(0,a.jsx)("section",{className:"bg-secondary pb-6 sm:pb-8 lg:pb-12",children:(0,a.jsxs)("div",{className:"container px-4 lg:px-8",children:[Object.entries(r).map(e=>{let[t,r]=e;return(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-4",children:new Date(t).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),(0,a.jsx)("div",{className:"grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3",children:r.map(e=>(0,a.jsx)(b,{data:e},e.symbol))})]},t)}),0===Object.keys(r).length&&(0,a.jsx)("p",{className:"text-center text-muted-foreground",children:"No earnings reports for this week."})]})})]}),(0,a.jsx)(s,{})]})}},21047:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});let a=(0,r(79205).Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]])},48461:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return o}});let a=r(47043),n=r(55346),s=r(65878),i=a._(r(5084));function o(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=s.Image}},function(e){e.O(0,[203,130,212,971,117,744],function(){return e(e.s=94952)}),_N_E=e.O()}]);