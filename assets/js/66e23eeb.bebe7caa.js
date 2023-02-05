"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[7403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),u=o,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||n;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6156:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:1,title:"2.1 | Power BI from Microsoft",slug:"/2.1-power-bi",tags:["tag1"]},i="2.1 | Power BI from Microsoft",s={unversionedId:"book/chapter2/02-01-powerbi",id:"book/chapter2/02-01-powerbi",title:"2.1 | Power BI from Microsoft",description:"2.1.1 | Overview",source:"@site/docs/01-book/01-chapter2/02-01-powerbi.md",sourceDirName:"01-book/01-chapter2",slug:"/2.1-power-bi",permalink:"/2.1-power-bi",draft:!1,tags:[{label:"tag1",permalink:"/tags/tag-1"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"2.1 | Power BI from Microsoft",slug:"/2.1-power-bi",tags:["tag1"]},sidebar:"tutorialSidebar",previous:{title:"2 | Overview",permalink:"/category/2--overview"},next:{title:"2.2 | Power Query",permalink:"/2.2-power-query"}},l={},p=[{value:"2.1.1 | Overview",id:"211--overview",level:2},{value:"2.1.2 The Power BI workflow",id:"212-the-power-bi-workflow",level:2},{value:"2.1.3 Overview of the Power BI Desktop user interface",id:"213-overview-of-the-power-bi-desktop-user-interface",level:2}],c={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"21--power-bi-from-microsoft"},"2.1 | Power BI from Microsoft"),(0,o.kt)("h2",{id:"211--overview"},"2.1.1 | Overview"),(0,o.kt)("p",null,"Power BI from Microsoft is worldwide leading on the market for BI & Analytics platforms.",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," The software allows the loading, transformation, modelling, visualization as well as the analysis of data from a large selection of different kinds of data sources. When creating an analytics solution with Power BI, a dataset is created based on which various reports, containing data visualizations, are developed and are finally shared with other people within an organization."),(0,o.kt)("p",null,"It is important to note that Power BI is a ",(0,o.kt)("strong",{parentName:"p"},"low-code tool"),". That means almost all functions (e.g. data transformation step or formatting a visual) are operated with buttons, dropdowns and input fields on the software user interface. This makes the tool very accessible for non-programmers like for example finance professionals who have a good understanding of how to work with data (e.g. also with Excel). However, it is still possible to work with code if wanted or required for very complex operations. The exception is the creation of Measures (see step 4 below) which requires the use of the DAX language."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Power BI Overview",src:r(3945).Z,width:"1478",height:"826"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("font",{size:"3"},"Overview of the Power BI elements and workflow")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Please note, I conciously omitted some of the additional elements and tools available in Power BI in order to reduce complexity and to focus on the essential components."),(0,o.kt)("h2",{id:"212-the-power-bi-workflow"},"2.1.2 The Power BI workflow"),(0,o.kt)("p",null,"The workflow of creating a BI & analytics tool based on ",(0,o.kt)("strong",{parentName:"p"},"Power BI Desktop")," can be generalized as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect to one or several ",(0,o.kt)("strong",{parentName:"p"},"data sources")," and extract the required data. Currently, over 130 different kinds of data sources can be connected. These can be Excel spreadsheets, text files, SQL databases, APIs, entire file folders, ODBC, Power BI dataflows, Python scripts etc. ",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using ",(0,o.kt)("strong",{parentName:"p"},"Power Query"),", which is a data transformation tool built within Power BI (and Excel), raw data is cleansed, prepared and modelled to the desired table structure required for the dimension and fact tables of the final data model. Power Query is explained in more detail in the next chapter")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When the dimension and fact tables are prepared, they are connected with each other to an integrated ",(0,o.kt)("strong",{parentName:"p"},"data model")," in the modeling tool of Power BI")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the report builder custom calculations, so called ",(0,o.kt)("strong",{parentName:"p"},"Measures"),", are created based on the functional language ",(0,o.kt)("strong",{parentName:"p"},"DAX")," ",(0,o.kt)("sup",{parentName:"p",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Further in the report builder, ",(0,o.kt)("strong",{parentName:"p"},"data visualizations")," are created and placed on the report page. Power BI offers a wide selection of different visualization types each with their specific options for formatting etc. What is more, filters can be placed on the report page, giving the end-user the possibility to filter the report as required")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally, the dataset (containing the reports) is published to the ",(0,o.kt)("strong",{parentName:"p"},"Power BI Online Service")," in the Microsoft 365 cloud. For this, a Power BI Pro license is required for the person uploading the dataset as well as for the people consuming the reports. In Power BI Online, various different user roles can be defined and allocated to people. ",(0,o.kt)("br",null),"\nFinally, datasets can be configured to refresh data based on a time schedule (e.g. overnight)"))),(0,o.kt)("p",null,"Many things that are possible in Power BI Desktop can now also be done directly in the Power BI Online Service. Data can be loaded and transformed with ",(0,o.kt)("strong",{parentName:"p"},"Dataflows"),". Datasets can be created with ",(0,o.kt)("strong",{parentName:"p"},"Datamarts"),". And visualizations and reports can be created or adjusted directly in the Online Service."),(0,o.kt)("h2",{id:"213-overview-of-the-power-bi-desktop-user-interface"},"2.1.3 Overview of the Power BI Desktop user interface"),(0,o.kt)("p",null,"In the following, I want to give a quick overview of the Power BI Desktop user interface in order to make navigating the tool for you more easy in the following chapters."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Power BI User Interface",src:r(9857).Z,width:"2039",height:"1159"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("font",{size:"3"},"Overview of the most important elements on the Power BI user interface (right-click and open in new tab for large version)")),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigation between the report builder, table explorer and data model (from top to bottom)"),(0,o.kt)("li",{parentName:"ol"},"Report pages, similar as in Microsoft Excel"),(0,o.kt)("li",{parentName:"ol"},"Tables, fields and measures used to build visuals and populate filters"),(0,o.kt)("li",{parentName:"ol"},"Selection of visualization types (clicking on one creates a new visual on the canvas)"),(0,o.kt)("li",{parentName:"ol"},"Switch between field placement in a visual (left) and formatting options (right). A visual has to be selected on the canvas to see the configuration options for it here"),(0,o.kt)("li",{parentName:"ol"},"Drag-and-drop of fields to set the pre-filtering of visuals, report pages and the entire report"),(0,o.kt)("li",{parentName:"ol"},"Creation of a new measure"),(0,o.kt)("li",{parentName:"ol"},"Open Power Query editor")),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},(0,o.kt)("a",{parentName:"li",href:"https://info.microsoft.com/ww-landing-2022-gartner-mq-report-on-bi-and-analytics-platforms.html?LCID=EN-US"},(0,o.kt)("ins",null,"2022 Gartner Magic Quadrant for Analytics and Business Intelligence Platforms")),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"See here for the full list of currently supported data sources: ",(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/power-bi/connect-data/power-bi-data-sources"},(0,o.kt)("ins",null,"Supported Data Sources")),(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3"},"DAX - Data Analysis Expressions; Documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dax/dax-function-reference"},(0,o.kt)("ins",null,"DAX Reference")),(0,o.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},3945:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/img_book_02-1-c22a2d5fb696c16055067d2ee104568b.png"},9857:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/img_book_02-2-c01bf844aea912a1f2c20e36525edbdb.png"}}]);