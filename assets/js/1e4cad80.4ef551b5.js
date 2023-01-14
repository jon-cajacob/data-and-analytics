"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[5135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||n;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:2,title:"2.2 | Power Query",slug:"/2.2-power-query",tags:["tag1"]},i="2.2 | Power Query",s={unversionedId:"book/chapter2/02-02-powerquery",id:"book/chapter2/02-02-powerquery",title:"2.2 | Power Query",description:"Power Query is a data transformation tool built into Power BI and Microsoft Excel. With Power Query, we can connect with various different data sources, extract required data and transform it into tables (dimensions and facts) which can be used to build the data model. This is necessary and important because data in its raw form stored in data sources is rarely in the shape required for the business intelligence solution.",source:"@site/docs/01-book/02-chapter2/02-02-powerquery.md",sourceDirName:"01-book/02-chapter2",slug:"/2.2-power-query",permalink:"/data-and-analytics/2.2-power-query",draft:!1,tags:[{label:"tag1",permalink:"/data-and-analytics/tags/tag-1"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"2.2 | Power Query",slug:"/2.2-power-query",tags:["tag1"]},sidebar:"tutorialSidebar",previous:{title:"2.1 | Power BI from Microsoft",permalink:"/data-and-analytics/2.1-power-bi"},next:{title:"2.3 | Building blocks of a business intelligence solution",permalink:"/data-and-analytics/2.3-solution-design"}},l={},c=[{value:"2.2.1 | Overview of the Power Query user interface",id:"221--overview-of-the-power-query-user-interface",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"22--power-query"},"2.2 | Power Query"),(0,a.kt)("p",null,"Power Query is a data transformation tool built into Power BI and Microsoft Excel. With Power Query, we can connect with various different data sources, extract required data and transform it into tables (dimensions and facts) which can be used to build the data model. This is necessary and important because data in its raw form stored in data sources is rarely in the shape required for the business intelligence solution."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Power Query Workflow",src:r(6267).Z,width:"1483",height:"831"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("font",{size:"3"},"Power Query workflow")),(0,a.kt)("br",null),(0,a.kt)("p",null,"In the following chapters, we will go through many of the most important data transformation operations available in Power Query. For now, as for Power BI Desktop, I want to give an overview of the user interface based on the following screenshot."),(0,a.kt)("h2",{id:"221--overview-of-the-power-query-user-interface"},"2.2.1 | Overview of the Power Query user interface"),(0,a.kt)("p",null,"The following screenshot shows an overview of the Power Query interface. Please note, all important elements are covered later when building the model based on the demo data."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Power Query User Interface",src:r(1266).Z,width:"2015",height:"1140"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("font",{size:"3"},"Overview of the most important elements on the Power Query user interface (right-click and open in new tab for large version)")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Changes to the data transformation process in Power Query have to be applied to the data model in order for them to take effect"),(0,a.kt)("li",{parentName:"ol"},"Connect with a new data source"),(0,a.kt)("li",{parentName:"ol"},"Navigation between the different queries (i.e. tables which can be intermediate tables in the transformation process or final tables being loaded to the data model)"),(0,a.kt)("li",{parentName:"ol"},"Data transformation steps of the currently selected query (from top to bottom)"),(0,a.kt)("li",{parentName:"ol"},"Formula bar showing the functional code of the currently selected transformation step"),(0,a.kt)("li",{parentName:"ol"},"Table headers which is the place to apply filters (as in Microsoft Excel), rename headers or apply various transformations via right-click"),(0,a.kt)("li",{parentName:"ol"},"Selection and removal of columns"),(0,a.kt)("li",{parentName:"ol"},"Promote the first row of a table to be the headers"),(0,a.kt)("li",{parentName:"ol"},"Join (merge) and union (append) multiple queries")))}p.isMDXComponent=!0},1266:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/img_book_02-3-f55c54aeafa9693fb36a5f883a639385.png"},6267:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/img_book_02-4-8cb810b09268f78f927cebdb4b319ee8.png"}}]);