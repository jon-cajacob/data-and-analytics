"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[4306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),h=n,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||o;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:999,title:"3.9 | Organizing Power Query and loading data to the data model",slug:"/3.9",tags:["3 | Preparing the data"]},l="3.9 | Organizing Power Query and loading data to the data model",i={unversionedId:"book/chapter3/03-09-prepare-7",id:"book/chapter3/03-09-prepare-7",title:"3.9 | Organizing Power Query and loading data to the data model",description:"In the previous chapters we prepared all dimension and fact tables. In this final chapter for data preparation, we want to tidy up Power Query and load the data to the data model.",source:"@site/docs/01-book/01-chapter3/03-09-prepare-7.md",sourceDirName:"01-book/01-chapter3",slug:"/3.9",permalink:"/3.9",draft:!1,tags:[{label:"3 | Preparing the data",permalink:"/tags/3-preparing-the-data"}],version:"current",sidebarPosition:999,frontMatter:{sidebar_position:999,title:"3.9 | Organizing Power Query and loading data to the data model",slug:"/3.9",tags:["3 | Preparing the data"]},sidebar:"tutorialSidebar",previous:{title:"3.8 | Preparing the sales forecast fact table (factForecast)",permalink:"/3.8"},next:{title:"4 | Creating the data model",permalink:"/category/4--creating-the-data-model"}},d={},s=[{value:"3.9.1 | Tidy up Power Query",id:"391--tidy-up-power-query",level:2},{value:"3.9.2 | Create an empty dummy table to store Measures",id:"392--create-an-empty-dummy-table-to-store-measures",level:2},{value:"3.9.3 | Apply changes and load data to the data model",id:"393--apply-changes-and-load-data-to-the-data-model",level:2}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"39--organizing-power-query-and-loading-data-to-the-data-model"},"3.9 | Organizing Power Query and loading data to the data model"),(0,n.kt)("p",null,"In the previous chapters we prepared all dimension and fact tables. In this final chapter for data preparation, we want to tidy up Power Query and load the data to the data model."),(0,n.kt)("h2",{id:"391--tidy-up-power-query"},"3.9.1 | Tidy up Power Query"),(0,n.kt)("p",null,"It is best practice to organize the different tables and queries in Power Query in folders. As such, it is easier to understand the ETL process for other people working on the same model or for ourselves when we have to employ a change after a while."),(0,n.kt)("p",null,"To create a folder (group) for tables, simply do a right-click on the table in the navigation to the left and select ",(0,n.kt)("em",{parentName:"p"},"Move To Group")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"New Group"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-53",src:a(5767).Z,width:"1318",height:"625"})),(0,n.kt)("p",null,'In the appearing window, enter "Dimensions" as the name of the new group and confirm with ',(0,n.kt)("em",{parentName:"p"},"OK"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-54",src:a(3962).Z,width:"1299",height:"346"})),(0,n.kt)("p",null,"Then, simply drag-and-drop the other dimension tables (including the helper tables we used) to the same group."),(0,n.kt)("p",null,'Further, create a new group for the fact tables called "Facts" the same way as we did just before and make sure both ',(0,n.kt)("em",{parentName:"p"},"factSales")," and ",(0,n.kt)("em",{parentName:"p"},"factForecast")," are in this group. You can also change the order of the groups by simply draging-and-dropping them."),(0,n.kt)("p",null,"When you are done, your Power Query query navigation pane should look like the following:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-55",src:a(5183).Z,width:"1318",height:"616"})),(0,n.kt)("h2",{id:"392--create-an-empty-dummy-table-to-store-measures"},"3.9.2 | Create an empty dummy table to store Measures"),(0,n.kt)("p",null,"Later, we will create Measures to reflect different KPIs with which we will build visualizations and dashboards. Each of these Measures is stored in one of the tables that are part of the data model. It is good practice in Power BI to store all Measures in a separate table."),(0,n.kt)("p",null,"To do that, let's create a dummy table via ",(0,n.kt)("em",{parentName:"p"},"Home")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Enter Data"),'. In the configuration window for the new table, enter "Measures" as the column header and leave any cells simply empty. Name the table "_Measures" and confirm with ',(0,n.kt)("em",{parentName:"p"},"OK"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-56",src:a(3591).Z,width:"1318",height:"873"})),(0,n.kt)("p",null,"The new table should be listed in the group ",(0,n.kt)("em",{parentName:"p"},"Other Queries"),"."),(0,n.kt)("h2",{id:"393--apply-changes-and-load-data-to-the-data-model"},"3.9.3 | Apply changes and load data to the data model"),(0,n.kt)("p",null,"Now we are done with the automated data preparation process and Power Query is nicely organized. As the final step of this chapter, let's apply all the changes to the Power BI data model and load the data."),(0,n.kt)("p",null,"To do that, simply click on ",(0,n.kt)("em",{parentName:"p"},"Close & Apply")," in the top left corner. After clicking the button, Power Query will load all data to the Power BI data model. In a small appearing window, you can see the progress of the data load. Because the amount of data is comparably small, it should run quite fast."),(0,n.kt)("p",null,"Please note, any changes done to the tables in Power Query have to be applied via this button to the Power BI data model in order for them to take effect."))}c.isMDXComponent=!0},5767:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/img_book_03-53-c5352c1fb9325138dc5b10c3c6c7d5fe.png"},3962:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/img_book_03-54-1d3a56fadd5de36f15d313a6b79c5c91.png"},5183:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/img_book_03-55-0231276f0dfce6b23cd3f89710d7aed2.png"},3591:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/img_book_03-56-cbc4f4cde6b08e87952865e2fa55a574.png"}}]);