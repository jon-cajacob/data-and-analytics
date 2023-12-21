"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[9261],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=i(a),u=l,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:999,title:"3.7 | Preparing the sales fact table (factSales)",slug:"/3.7",tags:["3 | Preparing the data"]},o="3.7 | Preparing the sales fact table (*factSales*)",s={unversionedId:"book/chapter3/03-07-prepare-5",id:"book/chapter3/03-07-prepare-5",title:"3.7 | Preparing the sales fact table (factSales)",description:"After preparing the dimension tables, we can now continue with the fact tables for the sales transactions and the sales forecast. Remember, a fact table contains transactional data telling us what has happened when. With the associated dimensions we can describe what has happened in the facts by filtering, slicing and aggregating fact data.",source:"@site/docs/01-book/01-chapter3/03-07-prepare-5.md",sourceDirName:"01-book/01-chapter3",slug:"/3.7",permalink:"/3.7",draft:!1,tags:[{label:"3 | Preparing the data",permalink:"/tags/3-preparing-the-data"}],version:"current",sidebarPosition:999,frontMatter:{sidebar_position:999,title:"3.7 | Preparing the sales fact table (factSales)",slug:"/3.7",tags:["3 | Preparing the data"]},sidebar:"tutorialSidebar",previous:{title:"3.6 | Preparing the date dimension (dimDate)",permalink:"/3.6"},next:{title:"3.8 | Preparing the sales forecast fact table (factForecast)",permalink:"/3.8"}},c={},i=[{value:"1. Navigate to the table <em>factSales</em>",id:"1-navigate-to-the-table-factsales",level:4},{value:"2. Delete the automatically generated step <em>Changed Type</em>",id:"2-delete-the-automatically-generated-step-changed-type",level:4},{value:"3.  Select the columns needed",id:"3--select-the-columns-needed",level:4},{value:"4.  Set the data types for each column",id:"4--set-the-data-types-for-each-column",level:4},{value:"5. Filter the table to remove cancelled sales transactions",id:"5-filter-the-table-to-remove-cancelled-sales-transactions",level:4},{value:"6. Construct a date column from the columns <em>Year</em>, <em>Month</em> and <em>Day</em>",id:"6-construct-a-date-column-from-the-columns-year-month-and-day",level:4},{value:"7. Create the calculated columns for <em>Sales in USD</em> and <em>Costs in USD</em>",id:"7-create-the-calculated-columns-for-sales-in-usd-and-costs-in-usd",level:4},{value:"8. Remove columns not needed",id:"8-remove-columns-not-needed",level:4}],m={toc:i};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"37--preparing-the-sales-fact-table-factsales"},"3.7 | Preparing the sales fact table (",(0,l.kt)("em",{parentName:"h1"},"factSales"),")"),(0,l.kt)("p",null,"After preparing the dimension tables, we can now continue with the fact tables for the sales transactions and the sales forecast. Remember, a fact table contains transactional data telling us what has happened when. With the associated dimensions we can describe what has happened in the facts by filtering, slicing and aggregating fact data."),(0,l.kt)("h4",{id:"1-navigate-to-the-table-factsales"},"1. Navigate to the table ",(0,l.kt)("em",{parentName:"h4"},"factSales")),(0,l.kt)("h4",{id:"2-delete-the-automatically-generated-step-changed-type"},"2. Delete the automatically generated step ",(0,l.kt)("em",{parentName:"h4"},"Changed Type")),(0,l.kt)("h4",{id:"3--select-the-columns-needed"},"3.  Select the columns needed"),(0,l.kt)("p",null,"Select only the following columns:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"03-39",src:a(6371).Z,width:"1309",height:"689"})),(0,l.kt)("p",null,"The column ",(0,l.kt)("em",{parentName:"p"},"Document ID")," is not needed for the later analysis and in fact would only use a lot of storage space in our Power BI dataset. Further, all data is in USD so the column ",(0,l.kt)("em",{parentName:"p"},"Currency")," is not needed as well."),(0,l.kt)("h4",{id:"4--set-the-data-types-for-each-column"},"4.  Set the data types for each column"),(0,l.kt)("p",null,"Remember, any columns that are not used to do calculations or contain date information, should be of the data type ",(0,l.kt)("em",{parentName:"p"},"text"),". This also applies to columns containing IDs which are foreign keys to link ",(0,l.kt)("em",{parentName:"p"},"factSales")," with the dimensions we prepared earlier."),(0,l.kt)("p",null,"The columns ",(0,l.kt)("em",{parentName:"p"},"Year"),", ",(0,l.kt)("em",{parentName:"p"},"Month")," and ",(0,l.kt)("em",{parentName:"p"},"Day")," contain the required information to construct a date field (see below). For now, they need to be of the data type ",(0,l.kt)("em",{parentName:"p"},"text"),"."),(0,l.kt)("p",null,"Accordingly, convert all columns to type ",(0,l.kt)("em",{parentName:"p"},"text"),", except the columns ",(0,l.kt)("em",{parentName:"p"},"Sales quantity"),", ",(0,l.kt)("em",{parentName:"p"},"Price per unit")," and ",(0,l.kt)("em",{parentName:"p"},"Costs per unit")," which we can convert to ",(0,l.kt)("em",{parentName:"p"},"Decimal numbers"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"03-40",src:a(124).Z,width:"1325",height:"534"})),(0,l.kt)("h4",{id:"5-filter-the-table-to-remove-cancelled-sales-transactions"},"5. Filter the table to remove cancelled sales transactions"),(0,l.kt)("p",null,"When preparing any fact table, we need to make sure the ",(0,l.kt)("strong",{parentName:"p"},"scope of data")," is correct. In our case, there are certain sales transactions that have been cancelled which is flagged in the column ",(0,l.kt)("em",{parentName:"p"},"DocumentStatus"),"."),(0,l.kt)("p",null,"Simply click on the small dropdown in the column header DocumentStatus to inspect what distinct values are in this column:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"03-41",src:a(8249).Z,width:"1325",height:"720"})),(0,l.kt)("p",null,"Note, Power Query gives a small warning that there might be more distinct values as Power Query first always shows values based on a table preview of the top 1000 rows. You can click on ",(0,l.kt)("em",{parentName:"p"},"Load more")," to make sure all distinct values of a column are shown in the dropdown. Note, this might take a while for very large data tables."),(0,l.kt)("p",null,"In the dropdown, simply de-select the value Cancelled and confirm with OK."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"03-42",src:a(8556).Z,width:"1308",height:"413"})),(0,l.kt)("p",null,"Under ",(0,l.kt)("em",{parentName:"p"},"APPLIED STEPS"),", you should see a new step ",(0,l.kt)("em",{parentName:"p"},"Filtered Rows"),". When you double-click on that step (or click on the small cogwheel to the right) you can see the filter rule that has been applied to this column:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"03-43",src:a(4759).Z,width:"1323",height:"627"})),(0,l.kt)("p",null,"As you can imagine, much more elaborative filter rules can be applied with and / or logic if needed. For now, simply close the window again."),(0,l.kt)("h4",{id:"6-construct-a-date-column-from-the-columns-year-month-and-day"},"6. Construct a date column from the columns ",(0,l.kt)("em",{parentName:"h4"},"Year"),", ",(0,l.kt)("em",{parentName:"h4"},"Month")," and ",(0,l.kt)("em",{parentName:"h4"},"Day")),(0,l.kt)("p",null,"It is a very common issue that the date information in a fact table is either split into multiple columns or in an exotic format that is not easily readable by a BI software. The former is the case for us so we have to construct a date column based on the existing columns ",(0,l.kt)("em",{parentName:"p"},"Year"),", ",(0,l.kt)("em",{parentName:"p"},"Month")," and ",(0,l.kt)("em",{parentName:"p"},"Day"),"."),(0,l.kt)("p",null,"For that, create the following custom calculated column:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="New calculated column: Date"',title:'"New',calculated:!0,"column:":!0,'Date"':!0},'[Year] & "-" & [Month] & "-" & [Day]\n')),(0,l.kt)("p",null,"Then, change the data type of the newly created column to be ",(0,l.kt)("em",{parentName:"p"},"date"),". The column should now contain date values in italic font:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"03-44",src:a(8913).Z,width:"1323",height:"600"})),(0,l.kt)("h4",{id:"7-create-the-calculated-columns-for-sales-in-usd-and-costs-in-usd"},"7. Create the calculated columns for ",(0,l.kt)("em",{parentName:"h4"},"Sales in USD")," and ",(0,l.kt)("em",{parentName:"h4"},"Costs in USD")),(0,l.kt)("p",null,"In the current table we can see there are columns for the sales quantity as well as price and costs per unit sold. Based on these columns we can calculate the total sales and costs per sales transactions. With these additional fields, we can later perform all the analysis required."),(0,l.kt)("p",null,"Create the following two additional columns:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="New calculated column: Sales in USD"',title:'"New',calculated:!0,"column:":!0,Sales:!0,in:!0,'USD"':!0},"[Sales quantity] * [Price per unit]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="New calculated column: Costs in USD"',title:'"New',calculated:!0,"column:":!0,Costs:!0,in:!0,'USD"':!0},"[Sales quantity] * [Costs per unit]\n")),(0,l.kt)("p",null,"Change the data type for both new columns to ",(0,l.kt)("em",{parentName:"p"},"decimal"),"."),(0,l.kt)("h4",{id:"8-remove-columns-not-needed"},"8. Remove columns not needed"),(0,l.kt)("p",null,"Finally, we can remove the columns we do not need in the data model which are ",(0,l.kt)("em",{parentName:"p"},"Year"),", ",(0,l.kt)("em",{parentName:"p"},"Month")," and ",(0,l.kt)("em",{parentName:"p"},"Day"),"."),(0,l.kt)("p",null,"And that concludes our preparations for ",(0,l.kt)("em",{parentName:"p"},"factSales"),"."))}p.isMDXComponent=!0},6371:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-39-d314da77abe8835e98954fae13ef0f34.png"},124:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-40-1048913d4ca83c467ff163c4a2ea1306.png"},8249:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-41-4d1d37312bcc801b89f22abedbc6c858.png"},8556:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-42-27ff60cffd5a375d3ed48698e34f438f.png"},4759:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-43-71ed50db486999727d9c8cb7b9619537.png"},8913:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-44-d70864edb4f8a3d929cc3e3ef3286f1a.png"}}]);