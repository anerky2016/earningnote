(()=>{var e={};e.id=632,e.ids=[632],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7056:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d}),r(6304),r(66418),r(90996);var s=r(30170),n=r(45002),a=r(83876),i=r.n(a),l=r(66299),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=["",{children:["stock",{children:["[symbol]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6304)),"/Users/moni/git/earningnote/app/stock/[symbol]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,66418)),"/Users/moni/git/earningnote/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,90996,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/moni/git/earningnote/app/stock/[symbol]/page.tsx"],u="/stock/[symbol]/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/stock/[symbol]/page",pathname:"/stock/[symbol]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},97314:(e,t,r)=>{Promise.resolve().then(r.bind(r,92477)),Promise.resolve().then(r.bind(r,36934)),Promise.resolve().then(r.bind(r,41876)),Promise.resolve().then(r.bind(r,81852)),Promise.resolve().then(r.bind(r,94918)),Promise.resolve().then(r.t.bind(r,15889,23))},92477:(e,t,r)=>{"use strict";r.d(t,{EarningsReport:()=>J});var s=r(97247),n=r(28964),a=r(27757),i=r(70319),l=r(20732),o=r(93191),d=r(69008),c=r(27015),u=r(22251),m=r(85090),x=r(28469),f=n.createContext(void 0);function h(e){let t=n.useContext(f);return e||t||"ltr"}var p="rovingFocusGroup.onEntryFocus",b={bubbles:!1,cancelable:!0},g="RovingFocusGroup",[j,v,y]=function(e){let t=e+"CollectionProvider",[r,a]=(0,l.b)(t),[i,c]=r(t,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:t,children:r}=e,a=n.useRef(null),l=n.useRef(new Map).current;return(0,s.jsx)(i,{scope:t,itemMap:l,collectionRef:a,children:r})};u.displayName=t;let m=e+"CollectionSlot",x=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,a=c(m,r),i=(0,o.e)(t,a.collectionRef);return(0,s.jsx)(d.g7,{ref:i,children:n})});x.displayName=m;let f=e+"CollectionItemSlot",h="data-radix-collection-item",p=n.forwardRef((e,t)=>{let{scope:r,children:a,...i}=e,l=n.useRef(null),u=(0,o.e)(t,l),m=c(f,r);return n.useEffect(()=>(m.itemMap.set(l,{ref:l,...i}),()=>void m.itemMap.delete(l))),(0,s.jsx)(d.g7,{[h]:"",ref:u,children:a})});return p.displayName=f,[{Provider:u,Slot:x,ItemSlot:p},function(t){let r=c(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${h}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},a]}(g),[N,w]=(0,l.b)(g,[y]),[R,E]=N(g),P=n.forwardRef((e,t)=>(0,s.jsx)(j.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,s.jsx)(j.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,s.jsx)(S,{...e,ref:t})})}));P.displayName=g;var S=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:a,loop:l=!1,dir:d,currentTabStopId:c,defaultCurrentTabStopId:f,onCurrentTabStopIdChange:g,onEntryFocus:j,preventScrollOnEntryFocus:y=!1,...N}=e,w=n.useRef(null),E=(0,o.e)(t,w),P=h(d),[S=null,M]=(0,x.T)({prop:c,defaultProp:f,onChange:g}),[F,C]=n.useState(!1),T=(0,m.W)(j),O=v(r),A=n.useRef(!1),[D,k]=n.useState(0);return n.useEffect(()=>{let e=w.current;if(e)return e.addEventListener(p,T),()=>e.removeEventListener(p,T)},[T]),(0,s.jsx)(R,{scope:r,orientation:a,dir:P,loop:l,currentTabStopId:S,onItemFocus:n.useCallback(e=>M(e),[M]),onItemShiftTab:n.useCallback(()=>C(!0),[]),onFocusableItemAdd:n.useCallback(()=>k(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>k(e=>e-1),[]),children:(0,s.jsx)(u.WV.div,{tabIndex:F||0===D?-1:0,"data-orientation":a,...N,ref:E,style:{outline:"none",...e.style},onMouseDown:(0,i.M)(e.onMouseDown,()=>{A.current=!0}),onFocus:(0,i.M)(e.onFocus,e=>{let t=!A.current;if(e.target===e.currentTarget&&t&&!F){let t=new CustomEvent(p,b);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=O().filter(e=>e.focusable);_([e.find(e=>e.active),e.find(e=>e.id===S),...e].filter(Boolean).map(e=>e.ref.current),y)}}A.current=!1}),onBlur:(0,i.M)(e.onBlur,()=>C(!1))})})}),M="RovingFocusGroupItem",F=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:a=!0,active:l=!1,tabStopId:o,...d}=e,m=(0,c.M)(),x=o||m,f=E(M,r),h=f.currentTabStopId===x,p=v(r),{onFocusableItemAdd:b,onFocusableItemRemove:g}=f;return n.useEffect(()=>{if(a)return b(),()=>g()},[a,b,g]),(0,s.jsx)(j.ItemSlot,{scope:r,id:x,focusable:a,active:l,children:(0,s.jsx)(u.WV.span,{tabIndex:h?0:-1,"data-orientation":f.orientation,...d,ref:t,onMouseDown:(0,i.M)(e.onMouseDown,e=>{a?f.onItemFocus(x):e.preventDefault()}),onFocus:(0,i.M)(e.onFocus,()=>f.onItemFocus(x)),onKeyDown:(0,i.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){f.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var s;let n=(s=e.key,"rtl"!==r?s:"ArrowLeft"===s?"ArrowRight":"ArrowRight"===s?"ArrowLeft":s);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(n))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(n)))return C[n]}(e,f.orientation,f.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=p().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let s=r.indexOf(e.currentTarget);r=f.loop?function(e,t){return e.map((r,s)=>e[(t+s)%e.length])}(r,s+1):r.slice(s+1)}setTimeout(()=>_(r))}})})})});F.displayName=M;var C={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function _(e,t=!1){let r=document.activeElement;for(let s of e)if(s===r||(s.focus({preventScroll:t}),document.activeElement!==r))return}var T=r(67264),O="Tabs",[A,D]=(0,l.b)(O,[w]),k=w(),[I,$]=A(O),q=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,onValueChange:a,defaultValue:i,orientation:l="horizontal",dir:o,activationMode:d="automatic",...m}=e,f=h(o),[p,b]=(0,x.T)({prop:n,onChange:a,defaultProp:i});return(0,s.jsx)(I,{scope:r,baseId:(0,c.M)(),value:p,onValueChange:b,orientation:l,dir:f,activationMode:d,children:(0,s.jsx)(u.WV.div,{dir:f,"data-orientation":l,...m,ref:t})})});q.displayName=O;var V="TabsList",B=n.forwardRef((e,t)=>{let{__scopeTabs:r,loop:n=!0,...a}=e,i=$(V,r),l=k(r);return(0,s.jsx)(P,{asChild:!0,...l,orientation:i.orientation,dir:i.dir,loop:n,children:(0,s.jsx)(u.WV.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:t})})});B.displayName=V;var L="TabsTrigger",U=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,disabled:a=!1,...l}=e,o=$(L,r),d=k(r),c=Z(o.baseId,n),m=K(o.baseId,n),x=n===o.value;return(0,s.jsx)(F,{asChild:!0,...d,focusable:!a,active:x,children:(0,s.jsx)(u.WV.button,{type:"button",role:"tab","aria-selected":x,"aria-controls":m,"data-state":x?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...l,ref:t,onMouseDown:(0,i.M)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():o.onValueChange(n)}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&o.onValueChange(n)}),onFocus:(0,i.M)(e.onFocus,()=>{let e="manual"!==o.activationMode;x||a||!e||o.onValueChange(n)})})})});U.displayName=L;var G="TabsContent",H=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:a,forceMount:i,children:l,...o}=e,d=$(G,r),c=Z(d.baseId,a),m=K(d.baseId,a),x=a===d.value,f=n.useRef(x);return n.useEffect(()=>{let e=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.jsx)(T.z,{present:i||x,children:({present:r})=>(0,s.jsx)(u.WV.div,{"data-state":x?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":c,hidden:!r,id:m,tabIndex:0,...o,ref:t,style:{...e.style,animationDuration:f.current?"0s":void 0},children:r&&l})})});function Z(e,t){return`${e}-trigger-${t}`}function K(e,t){return`${e}-content-${t}`}H.displayName=G;var Y=r(25008);let z=n.forwardRef(({className:e,...t},r)=>s.jsx(B,{ref:r,className:(0,Y.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));z.displayName=B.displayName;let W=n.forwardRef(({className:e,...t},r)=>s.jsx(U,{ref:r,className:(0,Y.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...t}));W.displayName=U.displayName;let Q=n.forwardRef(({className:e,...t},r)=>s.jsx(H,{ref:r,className:(0,Y.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));Q.displayName=H.displayName;var X=r(94918);function J({conferenceSummary:e,afterHoursChart:t,nextDaysChart:r,symbol:i}){let[l,o]=(0,n.useState)("summary");return(0,s.jsxs)(a.Zb,{className:"w-full max-w-4xl mx-auto mt-8",children:[s.jsx(a.Ol,{children:s.jsx(a.ll,{children:"Earnings Report and Stock Performance"})}),s.jsx(a.aY,{children:(0,s.jsxs)(q,{value:l,onValueChange:o,children:[(0,s.jsxs)(z,{className:"grid w-full grid-cols-3",children:[s.jsx(W,{value:"summary",children:"Summary"}),s.jsx(W,{value:"afterHours",children:"After Hours"}),s.jsx(W,{value:"nextDays",children:"Next 3 Days"})]}),(0,s.jsxs)(Q,{value:"summary",children:[s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Conference Summary"}),s.jsx("p",{className:"text-sm sm:text-base",children:e})]}),s.jsx(Q,{value:"afterHours",children:s.jsx(X.IntradayChart,{data:t,symbol:i,title:"After Hours Trading"})}),s.jsx(Q,{value:"nextDays",children:s.jsx(X.IntradayChart,{data:r,symbol:i,title:"Stock Performance (Next 3 Days)"})})]})})]})}},36934:(e,t,r)=>{"use strict";r.d(t,{EarningsVideos:()=>i});var s=r(97247),n=r(28964),a=r(27757);function i({symbol:e}){let[t,r]=(0,n.useState)([]);return(0,s.jsxs)(a.Zb,{className:"w-full max-w-4xl mx-auto mt-8",children:[s.jsx(a.Ol,{children:s.jsx(a.ll,{children:"Earnings Interpretation Videos"})}),s.jsx(a.aY,{children:s.jsx("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:t.map(e=>(0,s.jsxs)("div",{className:"aspect-video",children:[s.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube.com/embed/${e.id}`,title:e.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),s.jsx("p",{className:"mt-2 text-sm font-medium",children:e.title})]},e.id))})})]})}},81852:(e,t,r)=>{"use strict";r.d(t,{HistoricalEarnings:()=>v});var s=r(97247),n=r(27757),a=r(28964),i=r(25008);let l=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{className:"relative w-full overflow-auto",children:s.jsx("table",{ref:r,className:(0,i.cn)("w-full caption-bottom text-sm",e),...t})}));l.displayName="Table";let o=a.forwardRef(({className:e,...t},r)=>s.jsx("thead",{ref:r,className:(0,i.cn)("[&_tr]:border-b",e),...t}));o.displayName="TableHeader";let d=a.forwardRef(({className:e,...t},r)=>s.jsx("tbody",{ref:r,className:(0,i.cn)("[&_tr:last-child]:border-0",e),...t}));d.displayName="TableBody",a.forwardRef(({className:e,...t},r)=>s.jsx("tfoot",{ref:r,className:(0,i.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t})).displayName="TableFooter";let c=a.forwardRef(({className:e,...t},r)=>s.jsx("tr",{ref:r,className:(0,i.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));c.displayName="TableRow";let u=a.forwardRef(({className:e,...t},r)=>s.jsx("th",{ref:r,className:(0,i.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...t}));u.displayName="TableHead";let m=a.forwardRef(({className:e,...t},r)=>s.jsx("td",{ref:r,className:(0,i.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...t}));m.displayName="TableCell",a.forwardRef(({className:e,...t},r)=>s.jsx("caption",{ref:r,className:(0,i.cn)("mt-4 text-sm text-muted-foreground",e),...t})).displayName="TableCaption";var x=r(26323);let f=(0,x.Z)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),h=(0,x.Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var p=r(76442),b=r(26974),g=r(78812),j=r(58053);function v({data:e}){let[t,r]=(0,a.useState)(null),i=e=>{r(t===e?null:e)};return(0,s.jsxs)(n.Zb,{className:"w-full max-w-4xl mx-auto mt-4 sm:mt-8",children:[s.jsx(n.Ol,{children:s.jsx(n.ll,{children:"Historical Earnings Reports"})}),s.jsx(n.aY,{children:s.jsx("div",{className:"overflow-x-auto",children:(0,s.jsxs)(l,{children:[s.jsx(o,{children:(0,s.jsxs)(c,{children:[s.jsx(u,{children:"Quarter"}),s.jsx(u,{children:"Date"}),s.jsx(u,{children:"EPS"}),s.jsx(u,{children:"Est."}),s.jsx(u,{children:"Rev ($B)"}),s.jsx(u,{children:"Est. ($B)"}),s.jsx(u,{children:"Summary"})]})}),s.jsx(d,{children:e.map((e,r)=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c,{children:[s.jsx(m,{children:e.fiscalQuarter}),s.jsx(m,{children:e.reportDate}),s.jsx(m,{children:(0,s.jsxs)("div",{className:"flex items-center",children:["$",e.eps.toFixed(2),y(e.eps,e.epsEstimate)]})}),(0,s.jsxs)(m,{children:["$",e.epsEstimate.toFixed(2)]}),s.jsx(m,{children:(0,s.jsxs)("div",{className:"flex items-center",children:["$",(e.revenue/1e9).toFixed(2),y(e.revenue,e.revenueEstimate)]})}),(0,s.jsxs)(m,{children:["$",(e.revenueEstimate/1e9).toFixed(2)]}),s.jsx(m,{children:(0,s.jsxs)(j.z,{variant:"ghost",size:"sm",onClick:()=>i(r),className:"flex items-center",children:[t===r?s.jsx(f,{className:"h-4 w-4 mr-2"}):s.jsx(h,{className:"h-4 w-4 mr-2"}),t===r?"Hide":"Show"]})})]},r),t===r&&s.jsx(c,{children:s.jsx(m,{colSpan:7,className:"bg-muted",children:(0,s.jsxs)("div",{className:"p-4",children:[s.jsx("h4",{className:"font-semibold mb-2",children:"Earnings Call Summary:"}),s.jsx("p",{children:e.callSummary})]})})})]}))})]})})})]})}function y(e,t){return e>t?s.jsx(p.Z,{className:"w-4 h-4 text-green-500 ml-1"}):e<t?s.jsx(b.Z,{className:"w-4 h-4 text-red-500 ml-1"}):s.jsx(g.Z,{className:"w-4 h-4 text-yellow-500 ml-1"})}},78812:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(26323).Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]])},6304:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>j});var s=r(72051),n=r(67130),a=r(86006),i=r(6669),l=r(20353),o=r(91289),d=r(31882);function c({data:e}){let t=(e.projectedPrice-e.currentPrice)/e.currentPrice*100;return(0,s.jsxs)(i.Zb,{className:"w-full max-w-4xl mx-auto glassmorphism",children:[s.jsx(i.Ol,{children:(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-4 mb-2 sm:mb-0",children:[s.jsx(o.O,{domain:e.domain,name:e.companyName,size:48}),(0,s.jsxs)("div",{children:[s.jsx(i.ll,{className:"text-2xl sm:text-3xl",children:e.symbol}),s.jsx("p",{className:"text-lg sm:text-xl text-muted-foreground",children:e.companyName})]})]}),s.jsx(l.C,{variant:"outline",children:e.fiscalQuarter})]})}),(0,s.jsxs)(i.aY,{children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8",children:[(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Earnings Per Share (EPS)"}),(0,s.jsxs)("p",{className:"text-2xl sm:text-3xl font-bold",children:["$",e.eps?.toFixed(2)??"N/A"]}),(0,s.jsxs)("p",{className:"text-sm text-muted-foreground",children:["Estimate: $",e.epsEstimate.toFixed(2)]})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Revenue"}),(0,s.jsxs)("p",{className:"text-2xl sm:text-3xl font-bold",children:["$",e.revenue?.toFixed(1)??"N/A","B"]}),(0,s.jsxs)("p",{className:"text-sm text-muted-foreground",children:["Estimate: $",e.revenueEstimate.toFixed(1),"B"]})]})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-8",children:[(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Current Price"}),(0,s.jsxs)("p",{className:"text-2xl sm:text-3xl font-bold",children:["$",e.currentPrice.toFixed(2)]})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Projected Price"}),(0,s.jsxs)("p",{className:"text-2xl sm:text-3xl font-bold",children:["$",e.projectedPrice.toFixed(2)]}),(0,s.jsxs)("p",{className:"text-sm text-muted-foreground",children:[t>=0?"+":"",t.toFixed(2),"%"]})]})]}),(0,s.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 sm:mb-8",children:[(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Market Cap"}),(0,s.jsxs)("p",{className:"text-base sm:text-lg font-bold",children:["$",(e.marketCap/1e9).toFixed(2),"B"]})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"P/E Ratio"}),s.jsx("p",{className:"text-base sm:text-lg font-bold",children:e.peRatio?.toFixed(2)??"N/A"})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Dividend Yield"}),s.jsx("p",{className:"text-base sm:text-lg font-bold",children:e.dividendYield?`${(100*e.dividendYield).toFixed(2)}%`:"N/A"})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Volume"}),s.jsx("p",{className:"text-base sm:text-lg font-bold",children:e.volume.toLocaleString()}),(0,s.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Avg: ",e.avgVolume.toLocaleString()]})]})]}),(0,s.jsxs)("div",{className:"mb-4 sm:mb-8",children:[s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Report Date"}),s.jsx("p",{className:"text-xl",children:e.reportDate})]}),s.jsx(d.t,{data:e.intradayData,symbol:e.symbol})]})]})}function u({data:e}){return(0,s.jsxs)(i.Zb,{className:"w-full max-w-4xl mx-auto mt-4 sm:mt-8",children:[s.jsx(i.Ol,{children:s.jsx(i.ll,{children:"Key Financial Metrics"})}),s.jsx(i.aY,{children:(0,s.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:[(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Revenue Growth"}),(0,s.jsxs)("p",{className:"text-base sm:text-lg font-bold",children:[(100*e.revenueGrowth).toFixed(2),"%"]})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Gross Margin"}),(0,s.jsxs)("p",{className:"text-base sm:text-lg font-bold",children:[(100*e.grossMargin).toFixed(2),"%"]})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Operating Margin"}),(0,s.jsxs)("p",{className:"text-base sm:text-lg font-bold",children:[(100*e.operatingMargin).toFixed(2),"%"]})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Net Margin"}),(0,s.jsxs)("p",{className:"text-base sm:text-lg font-bold",children:[(100*e.netMargin).toFixed(2),"%"]})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Return on Equity"}),(0,s.jsxs)("p",{className:"text-base sm:text-lg font-bold",children:[(100*e.returnOnEquity).toFixed(2),"%"]})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Debt to Equity"}),s.jsx("p",{className:"text-base sm:text-lg font-bold",children:e.debtToEquity.toFixed(2)})]})]})})]})}function m({data:e}){return(0,s.jsxs)(i.Zb,{className:"w-full max-w-4xl mx-auto mt-4 sm:mt-8",children:[s.jsx(i.Ol,{children:s.jsx(i.ll,{children:"Earnings Summary"})}),s.jsx(i.aY,{children:(0,s.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Average EPS Beat"}),(0,s.jsxs)("p",{className:"text-xl sm:text-2xl font-bold",children:[e.averageEpsBeat.toFixed(2),"%"]})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Average Revenue Beat"}),(0,s.jsxs)("p",{className:"text-xl sm:text-2xl font-bold",children:[e.averageRevenueBeat.toFixed(2),"%"]})]}),(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Beats in Last 4 Quarters"}),(0,s.jsxs)("p",{className:"text-xl sm:text-2xl font-bold",children:[e.beatsInLastFourQuarters," / 4"]})]})]})})]})}var x=r(45347);let f=(0,x.createProxy)(String.raw`/Users/moni/git/earningnote/components/earnings-videos.tsx#EarningsVideos`),h=(0,x.createProxy)(String.raw`/Users/moni/git/earningnote/components/earnings-report.tsx#EarningsReport`),p=(0,x.createProxy)(String.raw`/Users/moni/git/earningnote/components/historical-earnings.tsx#HistoricalEarnings`);var b=r(56139),g=r(71083);async function j({params:e}){let t=await (0,b.DT)(e.symbol);return t||(0,g.notFound)(),(0,s.jsxs)("div",{className:"flex flex-col min-h-screen",children:[s.jsx(n.h,{}),s.jsx("main",{className:"flex-grow py-8 px-4",children:(0,s.jsxs)("div",{className:"container mx-auto",children:[s.jsx(c,{data:t}),s.jsx(u,{data:{revenueGrowth:t.revenueGrowth,grossMargin:t.grossMargin,operatingMargin:t.operatingMargin,netMargin:t.netMargin,returnOnEquity:t.returnOnEquity,debtToEquity:t.debtToEquity}}),s.jsx(m,{data:t.earningsSummary}),s.jsx(h,{conferenceSummary:t.conferenceSummary,afterHoursChart:t.afterHoursChart,nextDaysChart:t.nextDaysChart,symbol:t.symbol}),s.jsx(p,{data:t.historicalEarnings}),s.jsx(f,{symbol:e.symbol})]})}),s.jsx(a.$,{})]})}},71083:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return i},RedirectType:function(){return s.RedirectType},notFound:function(){return n.notFound},permanentRedirect:function(){return s.permanentRedirect},redirect:function(){return s.redirect}});let s=r(1192),n=r(76868);class a extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class i extends URLSearchParams{append(){throw new a}delete(){throw new a}set(){throw new a}sort(){throw new a}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},76868:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return n},notFound:function(){return s}});let r="NEXT_NOT_FOUND";function s(){let e=Error(r);throw e.digest=r,e}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},83701:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1192:(e,t,r)=>{"use strict";var s;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return s},getRedirectError:function(){return o},getRedirectStatusCodeFromError:function(){return f},getRedirectTypeFromError:function(){return x},getURLFromRedirectError:function(){return m},isRedirectError:function(){return u},permanentRedirect:function(){return c},redirect:function(){return d}});let n=r(54580),a=r(72934),i=r(83701),l="NEXT_REDIRECT";function o(e,t,r){void 0===r&&(r=i.RedirectStatusCode.TemporaryRedirect);let s=Error(l);s.digest=l+";"+t+";"+e+";"+r+";";let a=n.requestAsyncStorage.getStore();return a&&(s.mutableCookies=a.mutableCookies),s}function d(e,t){void 0===t&&(t="replace");let r=a.actionAsyncStorage.getStore();throw o(e,t,(null==r?void 0:r.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.TemporaryRedirect)}function c(e,t){void 0===t&&(t="replace");let r=a.actionAsyncStorage.getStore();throw o(e,t,(null==r?void 0:r.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.PermanentRedirect)}function u(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,s,n]=e.digest.split(";",4),a=Number(n);return t===l&&("replace"===r||"push"===r)&&"string"==typeof s&&!isNaN(a)&&a in i.RedirectStatusCode}function m(e){return u(e)?e.digest.split(";",3)[2]:null}function x(e){if(!u(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function f(e){if(!u(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(s||(s={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[787,62,598,50,350,100,802],()=>r(7056));module.exports=s})();