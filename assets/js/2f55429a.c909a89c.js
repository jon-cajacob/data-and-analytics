"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[5572],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=d(a),c=i,h=p["".concat(l,".").concat(c)]||p[c]||m[c]||r;return a?n.createElement(h,o(o({ref:e},u),{},{components:a})):n.createElement(h,o({ref:e},u))}));function h(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1187:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={slug:"05-01-make-data-quality-transparent-with-bi",title:"05.01 | Your BI-Tool Cannot Fix Data Quality Issues. But It Can and Will Make them Transparent.",authors:"jon",tags:["Data Visualization & Reporting","Data Quality"]},o=void 0,s={permalink:"/data-and-analytics/blog/05-01-make-data-quality-transparent-with-bi",source:"@site/blog/2022-11-05-reporting-dataquality-1.md",title:"05.01 | Your BI-Tool Cannot Fix Data Quality Issues. But It Can and Will Make them Transparent.",description:"/// Managing and optimizing data quality is a process of continuous improvement and in many cases strongly driven by an organization's culture. Adequate quality of relevant data is crucial for data-driven decision making processes. A business intelligence (BI) solution can make quality issues transparent and help to monitor and track the improvement over time. A BI-tool should however not be used to fix problems for various reasons. This article gives an overview and advice on dealing with data quality.",date:"2022-11-05T00:00:00.000Z",formattedDate:"November 5, 2022",tags:[{label:"Data Visualization & Reporting",permalink:"/data-and-analytics/blog/tags/data-visualization-reporting"},{label:"Data Quality",permalink:"/data-and-analytics/blog/tags/data-quality"}],readingTime:7.505,hasTruncateMarker:!0,authors:[{name:"Jon Cajacob, CFA, FRM",title:"Senior Analytics Projektleiter bei DataVision AG",url:"https://www.linkedin.com/in/jon-cajacob-cfa-frm-4876857b/",imageURL:"https://github.com/jon-cajacob.png",key:"jon"}],frontMatter:{slug:"05-01-make-data-quality-transparent-with-bi",title:"05.01 | Your BI-Tool Cannot Fix Data Quality Issues. But It Can and Will Make them Transparent.",authors:"jon",tags:["Data Visualization & Reporting","Data Quality"]},prevItem:{title:"04.01 | Applying the DRY-Principle to Effectively Manage and Organize Measures in Power BI",permalink:"/data-and-analytics/blog/04-01-applying-the-dry-principle-to-effectively-manage-and-organize-measures-in-power-bi"},nextItem:{title:"01.03 | Getting Started - How to Plan and Execute the First Sprint in Your BI & Analytics Project",permalink:"/data-and-analytics/blog/01-03-first-sprint-bi-project"}},l={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:3},{value:"Please Don\u2019t Try to Fix Data Quality Issues with Your BI-Tool",id:"please-dont-try-to-fix-data-quality-issues-with-your-bi-tool",level:3},{value:"Types of Data Quality Issues",id:"types-of-data-quality-issues",level:3},{value:"Ways to Improve Data Quality Over Time",id:"ways-to-improve-data-quality-over-time",level:3},{value:"Monitoring Data Quality with a BI-Tool",id:"monitoring-data-quality-with-a-bi-tool",level:3},{value:"Conclusions",id:"conclusions",level:3}],u={toc:d};function p(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"/// Managing and optimizing data quality is a process of continuous improvement and in many cases strongly driven by an organization's culture. Adequate quality of relevant data is crucial for data-driven decision making processes. A business intelligence (BI) solution can make quality issues transparent and help to monitor and track the improvement over time. A BI-tool should however not be used to fix problems for various reasons. This article gives an overview and advice on dealing with data quality."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bild",src:a(4325).Z,width:"1473",height:"821"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In every data & analytics project I was part of so far in my professional life, data quality was an issue. It is an ",(0,i.kt)("strong",{parentName:"p"},"evergreen")," in the data management space that will likely never go away. As long as humans interact with IT systems, there will be inaccuracies, inconsistencies, incompleteness and many more issues with data in such systems."),(0,i.kt)("p",null,"There are many ways and tools to identify, categorize and fix quality issues out there. With this short article, I want to share what in my experience works, in particular how to leverage the possibilities a BI & analytics tool gives us with dealing with that problem."),(0,i.kt)("h3",{id:"please-dont-try-to-fix-data-quality-issues-with-your-bi-tool"},"Please Don\u2019t Try to Fix Data Quality Issues with Your BI-Tool"),(0,i.kt)("p",null,"When ",(0,i.kt)("strong",{parentName:"p"},"implementing a BI-tool"),", data quality problems become apparent quickly. Whether it be incomplete fields, duplicate entries or lacking referential integrity, these issues are very visible once data is transformed and aggregated in reports and dashboards for analysis."),(0,i.kt)("p",null,"Modern BI & analytics tools like ",(0,i.kt)("strong",{parentName:"p"},"Power BI from Microsoft")," are incredibly flexible and powerful in dealing with low quality data. It often requires only a few clicks to \u201cquick-fix\u201d issues. Let\u2019s just find-and-replace this wrong value. Or how about we use a manual input mapping table to replace an incomplete categorization of products?"),(0,i.kt)("p",null,"Because so many \u201cquick-fixes\u201d are at hand, it is very tempting to actually implement them directly in the BI-tool. There are however several ",(0,i.kt)("strong",{parentName:"p"},"problems")," attached to such an approach:"),(0,i.kt)("p",null,"Quality issues are only fixed at the moment of fixing them. Organizations change over time and so does their data\nWhen fixing problems in the BI-tool, they are still wrong at the source and other applications have to deal with them again\nWith each fix being implemented within the BI-tool (and with that I also mean as part of the data cleansing and transformation process), the solution becomes more burdened with an increasing number of additional necessary steps, exceptions and special rules in the data process. This increases the complexity of the solution and the data process and hence decreases operational reliability going forward\nGiven that, it is obvious that one should always strive to ",(0,i.kt)("strong",{parentName:"p"},"improve the data quality directly at the source")," and not as part of the data value chain from data source to visualization."),(0,i.kt)("p",null,"The BI solution however can be the perfect tool to ",(0,i.kt)("strong",{parentName:"p"},"visualize and monitor")," the status and improvements of data quality. More on that further below."),(0,i.kt)("h3",{id:"types-of-data-quality-issues"},"Types of Data Quality Issues"),(0,i.kt)("p",null,"Please note, categorizing data quality issues into types is not very important by itself. But it can help to better identify problems and structure the strategy to fix them."),(0,i.kt)("p",null,"There are different ways to categorize data quality issues. The following is my view and certainly not the only truth (or even complete)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data Quality Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description / Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Duplicate data"),(0,i.kt)("td",{parentName:"tr",align:null},"Usually this is the case for duplicate entries in master data tables. For example, a customer is recorded twice with a slightly different name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Incomplete data"),(0,i.kt)("td",{parentName:"tr",align:null},"Some fields are always or mostly empty. Or, when some data is just simply not collected at all. For example, customers which are not categorized into an industry bucket (which would be important for analytics)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Inconsistent data (across systems)"),(0,i.kt)("td",{parentName:"tr",align:null},"Usually a dominant problem in organizations with many systems in place. For example, when products are simultaneously recorded in a sales system as well as an ERP-system used for production")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lack of referential integrity and erroneous relationship cardinality"),(0,i.kt)("td",{parentName:"tr",align:null},"When transactional data is recorded (e.g. a sales transaction), this transactional data should have a defined relationship with dimensional data (master data). For example, a sales transaction usually refers to one or many products and one customer via unique keys")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lack of standardization of master data"),(0,i.kt)("td",{parentName:"tr",align:null},"For example, the naming of countries is not standardized across systems (e.g. \u201cUnited States\u201d, \u201cUnited States of America\u201d, \u201cUSA\u201d, \u201cUS\u201d etc.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Inaccurate and erroneous data"),(0,i.kt)("td",{parentName:"tr",align:null},"E.g. simple misspellings on data entry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lack of currency"),(0,i.kt)("td",{parentName:"tr",align:null},"When data becomes outdated over time (e.g. change of customer address)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lack of data validation"),(0,i.kt)("td",{parentName:"tr",align:null},"When there is no validation if a data entry conforms to the required format. A classical example is the e-mail address format")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"and more \u2026"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"ways-to-improve-data-quality-over-time"},"Ways to Improve Data Quality Over Time"),(0,i.kt)("p",null,"If someone would ask me: \u201cHow would you fix our data quality issues?\u201d, this would be my answer:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make data quality issues ",(0,i.kt)("strong",{parentName:"li"},"transparent")," and clearly ",(0,i.kt)("strong",{parentName:"li"},"identify")," which ones are ",(0,i.kt)("strong",{parentName:"li"},"important and need to be improved and monitored")," going forward. This means there are some issues, which are probably ",(0,i.kt)("strong",{parentName:"li"},"less important")," and can be fixed later or even be ignored. Don\u2019t try to fix everything at the same time"),(0,i.kt)("li",{parentName:"ol"},"Make sure you understand the ",(0,i.kt)("strong",{parentName:"li"},"causes")," of the identified issues and based on that define and operationalize a strategy to improve the identified issues going forward. Clearly define ",(0,i.kt)("strong",{parentName:"li"},"responsibilities")," in your organization to \u201cown\u201d certain data domains and their quality metrics (e.g. \u201cHR data\u201d). Please note, strategies to fix issues are usually specific to the data domain and systems involved"),(0,i.kt)("li",{parentName:"ol"},"Consider thinking about data quality as a ",(0,i.kt)("strong",{parentName:"li"},"cultural topic")," in your organization. In the end, it is important that all people interacting with data in the systems are aware and know the importance of good quality data. ",(0,i.kt)("strong",{parentName:"li"},"Educate and sensitize")," your people accordingly"),(0,i.kt)("li",{parentName:"ol"},"Consider using a ",(0,i.kt)("strong",{parentName:"li"},"data cataloging")," system in order to have a dictionary of the data available in your organization, describing its content, quality, lineage and more"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Continuously monitor")," data quality, ideally with a BI-tool. Define and visualize ",(0,i.kt)("strong",{parentName:"li"},"metrics")," to track the improvement of quality over time")),(0,i.kt)("p",null,"Further, there are dedicated ",(0,i.kt)("strong",{parentName:"p"},"software tools")," available on the market to deal with data quality problems and the use of AI (machine learning) in that scope is on the rise. Maybe such dedicated tools are helpful in some way. However, I believe once the issues are ",(0,i.kt)("strong",{parentName:"p"},"transparent"),", a ",(0,i.kt)("strong",{parentName:"p"},"strategy")," with clear ",(0,i.kt)("strong",{parentName:"p"},"responsibilities")," is implemented and ",(0,i.kt)("strong",{parentName:"p"},"people")," are aware of how important good quality data is, a continuous improvement will be visible soon even without an additional software."),(0,i.kt)("h3",{id:"monitoring-data-quality-with-a-bi-tool"},"Monitoring Data Quality with a BI-Tool"),(0,i.kt)("p",null,"The primary purpose of a BI & analytics solution is to extract, prepare and visualize data relevant for decision making processes. Once source systems are connected, data models are built and KPIs are visualized, data quality issues become apparent quickly. At this point, the BI solution is actually the perfect tool at hand to visualize, monitor and track data quality."),(0,i.kt)("p",null,"Here are some ",(0,i.kt)("strong",{parentName:"p"},"examples")," of how to visualize data quality issues with a BI-tool:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Listing all products appearing in transactional data for which there is no matching master data (i.e. lack of referential integrity)"),(0,i.kt)("li",{parentName:"ul"},"Measuring the incompleteness of a field (i.e. the percentage of nulls of a field)"),(0,i.kt)("li",{parentName:"ul"},"Listing and measuring duplicate master data entries (different ways to do that)"),(0,i.kt)("li",{parentName:"ul"},"Listing of unique attributes of a master data table and detection of depreciated or redundant entries. For example, the segmentation of customers into industries based on which sales performance is measured over time \u2013 some segments are maybe not relevant anymore or some are redundant with slightly different labels across systems")),(0,i.kt)("p",null,"As mentioned, always focus on the ",(0,i.kt)("strong",{parentName:"p"},"relevant")," quality issues and visualize those (not all quality issues are relevant to data-driven processes). And make sure the people being responsible for data and its quality have access to this monitoring dashboard(s)."),(0,i.kt)("h3",{id:"conclusions"},"Conclusions"),(0,i.kt)("p",null,"As long as there is data there will be quality issues with it. We saw there are different ",(0,i.kt)("strong",{parentName:"p"},"types")," of such issues, which can help to better structure the detection and improvement of problems. Improving quality of data is a ",(0,i.kt)("strong",{parentName:"p"},"continuous improvement process"),". Even more, it is a ",(0,i.kt)("strong",{parentName:"p"},"cultural topic")," within the organization. It is crucial to educate and sensitize ",(0,i.kt)("strong",{parentName:"p"},"people")," of its importance."),(0,i.kt)("p",null,"Talking about hands-on advice, I can recommend to use your BI-tool to ",(0,i.kt)("strong",{parentName:"p"},"visualize")," and with that make data quality issues transparent. Don\u2019t try to fix these issues within the tool though, it will result in bad solution design and low operational reliability in the long term."),(0,i.kt)("p",null,"If issues are transparent and being monitored, the success of quality improvement strategies can be measured. ",(0,i.kt)("strong",{parentName:"p"},"Strategies")," to improve data quality are specific to the data domain and systems. Make sure there are clear ",(0,i.kt)("strong",{parentName:"p"},"responsibilities")," for data in your organization. Given that, improvements in data quality should be visible soon."))}p.isMDXComponent=!0},4325:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/img_05.01-1-8dbc75f5bc228ce0155d2bd2fab43fde.png"}}]);