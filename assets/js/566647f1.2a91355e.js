"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[6488],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={slug:"04-01-applying-the-dry-principle-to-effectively-manage-and-organize-measures-in-power-bi",title:"04.01 | Applying the DRY-Principle to Effectively Manage and Organize Measures in Power BI",authors:"jon",tags:["Data Model","DAX","Measures"]},l=void 0,o={permalink:"/data-and-analytics/blog/04-01-applying-the-dry-principle-to-effectively-manage-and-organize-measures-in-power-bi",source:"@site/blog/2022-11-28-modelling-dry-principle.md",title:"04.01 | Applying the DRY-Principle to Effectively Manage and Organize Measures in Power BI",description:"/// Key performance indicators (KPIs) are at the very core of each analytics solution. It is very common to have a high number of variations of KPIs required to be implemented in such a tool, e.g. variations based on time (current year, previous year, YTD etc.). Further, KPIs are often interlinked and build on each other in KPI trees. The DRY-principle (don\u2019t-repeat-yourself) is a method to make sure this big number of defined KPIs in a solution is properly managed and organized. Specifically, calculation logics are only ever defined in one place. Variations of KPIs and dependable KPIs always reference back to this original definition and nothing is ever repeated.",date:"2022-11-28T00:00:00.000Z",formattedDate:"November 28, 2022",tags:[{label:"Data Model",permalink:"/data-and-analytics/blog/tags/data-model"},{label:"DAX",permalink:"/data-and-analytics/blog/tags/dax"},{label:"Measures",permalink:"/data-and-analytics/blog/tags/measures"}],readingTime:5.39,hasTruncateMarker:!0,authors:[{name:"Jon Cajacob, CFA, FRM",title:"Senior Analytics Project Leader at DataVision AG, Zurich",url:"https://www.linkedin.com/in/jon-cajacob-cfa-frm-4876857b/",imageURL:"https://github.com/jon-cajacob.png",key:"jon"}],frontMatter:{slug:"04-01-applying-the-dry-principle-to-effectively-manage-and-organize-measures-in-power-bi",title:"04.01 | Applying the DRY-Principle to Effectively Manage and Organize Measures in Power BI",authors:"jon",tags:["Data Model","DAX","Measures"]},nextItem:{title:"05.01 | Your BI-Tool Cannot Fix Data Quality Issues. But It Can and Will Make them Transparent.",permalink:"/data-and-analytics/blog/05-01-make-data-quality-transparent-with-bi"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:3},{value:"What is the DRY-Principle?",id:"what-is-the-dry-principle",level:3},{value:"Applying the DRY-Principle for Measures in Power BI",id:"applying-the-dry-principle-for-measures-in-power-bi",level:3},{value:"Conclusions",id:"conclusions",level:3}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"/// Key performance indicators (KPIs) are at the very core of each analytics solution. It is very common to have a high number of variations of KPIs required to be implemented in such a tool, e.g. variations based on time (current year, previous year, YTD etc.). Further, KPIs are often interlinked and build on each other in KPI trees. The DRY-principle (don\u2019t-repeat-yourself) is a method to make sure this big number of defined KPIs in a solution is properly managed and organized. Specifically, calculation logics are only ever defined in one place. Variations of KPIs and dependable KPIs always reference back to this original definition and nothing is ever repeated."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bild",src:a(6935).Z,width:"1479",height:"829"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In every BI & analytics project, KPIs are a crucial element of the solution. They have to be defined and then implemented in the tool accordingly, applying specific logic and most of the time mathematical calculations."),(0,r.kt)("p",null,"It is not uncommon for the sheer number of different KPIs as part of an analytics solution to be quite high. This is mostly driven by numerous ",(0,r.kt)("strong",{parentName:"p"},"variations")," a certain KPI has in the BI tool based on customer requirements. Taking the example of ","[Sales]",", variations can be ","[Sales Previous Year]",", ","[Sales YTD]",", ","[Sales Previous Year YTD]",", ","[Sales Forecast]"," etc. Further, KPIs often build on each other in so called ",(0,r.kt)("strong",{parentName:"p"},"KPI trees")," (visualized in the picture above)."),(0,r.kt)("p",null,"Given a high number of KPIs which are also often interlinked due to their calculation logic, it is important to organize and manage them in a good way. In this article, I want to introduce a very effective and important method for doing that: The DRY-principle."),(0,r.kt)("h3",{id:"what-is-the-dry-principle"},"What is the DRY-Principle?"),(0,r.kt)("p",null,"DRY stands for ",(0,r.kt)("strong",{parentName:"p"},"Don\u2019t-Repeat-Yourself")," and is a pattern originating from the software development world. Explained in plain language, it means that each element of a (software) solution should only be defined once in order to reduce repetitions and redundancy."),(0,r.kt)("p",null,"This principle is important and effective because it means that when a certain definition or pattern has to be changed, it has to be done in only one place and all depending objects (should) change predictably."),(0,r.kt)("p",null,"Let\u2019s apply this principle to the definition and management of KPIs or custom calculations in a BI & analytics solution. In the following, I will demonstrate this with ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Power BI")," with which KPIs are defined via so called ",(0,r.kt)("strong",{parentName:"p"},"Measures"),"."),(0,r.kt)("p",null,"Measures in Power BI are created applying ",(0,r.kt)("strong",{parentName:"p"},"DAX"),", which is a very powerful functional programming language to implement even the most complicated calculations if required. Measures are ",(0,r.kt)("strong",{parentName:"p"},"dynamic")," and calculated \u201cat runtime\u201d while the user interacts with a report, e.g. changes a filter or drills down a hierarchy."),(0,r.kt)("h3",{id:"applying-the-dry-principle-for-measures-in-power-bi"},"Applying the DRY-Principle for Measures in Power BI"),(0,r.kt)("p",null,"I will demonstrate the application of the DRY-principle using again the example for ","[Sales]"," in a hypothetical analytics solution for sales performance measurement. Please note, the DAX language is used here but it is not essential for you to understand it fully to follow the examples."),(0,r.kt)("p",null,"First, I will show a very common set of Measures which are all based on the same base KPI ","[Sales]"," but vary on the date dimension:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Measure"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Sales]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"SUM( factSales","[Value in CHF]"," )")),(0,r.kt)("td",{parentName:"tr",align:null},"This is the base measure which simply takes the sum of the column containing the relevant values for sales volume")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Sales PY]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"CALCULATE( ","[Sales]",", DATEADD(dimDate","[Date]",", -12, MONTH))")),(0,r.kt)("td",{parentName:"tr",align:null},"In order to make direct year-over-year comparisons, a previous year (PY) variation of ","[Sales]"," is created which simply references ","[Sales]"," and goes back 12 months on the date dimension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[\u0394 Sales CY vs PY]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"[Sales]"," \u2013 ","[Sales PY]")),(0,r.kt)("td",{parentName:"tr",align:null},"The absolute difference between current and previous year sales")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[\u0394% Sales CY vs PY]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"DIVIDE( ","[Sales]"," \u2013 ","[Sales PY]",", ","[Sales PY]"," )")),(0,r.kt)("td",{parentName:"tr",align:null},"The percentage difference between current and previous year sales")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Sales YTD]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"TOTALYTD( ","[Sales]",", dimDate","[Date]"," )")),(0,r.kt)("td",{parentName:"tr",align:null},"Year-to-date sales")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Sales PY YTD]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"TOTALYTD( ","[Sales PY]",", dimDate","[Date]"," )")),(0,r.kt)("td",{parentName:"tr",align:null},"Year-to-date sales of the previous year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(\u2026)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"etc.")))),(0,r.kt)("p",null,"As you can see, each measure builds on a previously defined measure. If for example the original table column containing the ","[Values in CHF]"," is changed in the data transformation process, this has to be changed in only one measure. All other measures are immediately changed as well in a predictable way."),(0,r.kt)("p",null,"Taking this further, there are often requirements for special variations of a certain base KPI based on a set of ",(0,r.kt)("strong",{parentName:"p"},"filters"),". Also here we also apply the DRY-principle with no problem:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Measure"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Sales DACH]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"CALCULATE( ","[Sales]",", dimRegion","[Region]"," = \u201cDACH\u201d )")),(0,r.kt)("td",{parentName:"tr",align:null},"We reference again the base measure ","[Sales]"," but filter it within the measure for only the region \u201cDACH\u201d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Sales PY DACH]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"CALCULATE( ","[Sales PY]",", dimRegion","[Region]"," = \u201cDACH\u201d )")),(0,r.kt)("td",{parentName:"tr",align:null},"Same as above, but with reference to ","[Sales PY]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(\u2026)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"etc.")))),(0,r.kt)("p",null,"Going even further, it is often required to reference multiple base measures to build a KPI:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Measure"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Material Costs]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"SUM( factMatCosts","[Value in CHF]"," )")),(0,r.kt)("td",{parentName:"tr",align:null},"Base measure for the material costs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Contribution Margin I]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"[Sales]"," \u2013 ","[Material Costs]")),(0,r.kt)("td",{parentName:"tr",align:null},"The KPI contribution margin in this example is defined as the difference between sales and material costs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[% Contribution Margin I]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"DIVIDE( ","[Contribution Margin I]",", ","[Sales]"," )")),(0,r.kt)("td",{parentName:"tr",align:null},"Simple margin calculation which references other measures")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(\u2026)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Contribution Margin I PY]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"[Sales PY]"," \u2013 ","[Material Costs PY]")),(0,r.kt)("td",{parentName:"tr",align:null},"Previous year variation which references two PY base measures")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(\u2026)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"etc.")))),(0,r.kt)("p",null,"Here again, if the definition of e.g. the Contribution Margin I changes, it has to be adjusted in only one place."),(0,r.kt)("h3",{id:"conclusions"},"Conclusions"),(0,r.kt)("p",null,"Applied rigorously, the DRY-principle allows changes to KPIs in a BI solution to be implemented fast and with high certainty for proper functionality (after the change). It is thus an important factor for long-term operations and further development of a BI tool."),(0,r.kt)("p",null,"The examples presented here are based on Microsoft Power BI but can certainly applied to any other BI tool (if it allows for cross-referencing in custom calculations)."),(0,r.kt)("p",null,"DRY is simple and highly effective and it should be applied by anyone striving for a clean solution design and best practice."))}u.isMDXComponent=!0},6935:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_04.01-1-d23831a81603ce67cef45f70c6b8c6d0.png"}}]);