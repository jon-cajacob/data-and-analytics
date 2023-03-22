"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[1437],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=i,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4517:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:5,title:"5.5 | Commonly used DAX measure patterns using CALCULATE()",slug:"/5.5",tags:["tag1"]},s="5.5 | Commonly used DAX measure patterns using CALCULATE()",o={unversionedId:"book/chapter5/05-05-common-DAX",id:"book/chapter5/05-05-common-DAX",title:"5.5 | Commonly used DAX measure patterns using CALCULATE()",description:"Learning, understanding and applying the DAX language to create complex calculations is not easy. Although some functions seem familiar to the formulas used in Excel, the language is much more abstract, especially in the context of a data model with many table relations and of course a given filter context based on which a measure is evaluated.",source:"@site/docs/01-book/01-chapter5/05-05-common-DAX.md",sourceDirName:"01-book/01-chapter5",slug:"/5.5",permalink:"/5.5",draft:!1,tags:[{label:"tag1",permalink:"/tags/tag-1"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"5.5 | Commonly used DAX measure patterns using CALCULATE()",slug:"/5.5",tags:["tag1"]},sidebar:"tutorialSidebar",previous:{title:"5.4 | Creating and configuring the first measures",permalink:"/5.4"},next:{title:"5.6 | Summary and takeaways for working with measures and DAX",permalink:"/5.6"}},l={},u=[{value:"5.5.1 | Using CALCULATE()",id:"551--using-calculate",level:2},{value:"1. Overriding the filter context",id:"1-overriding-the-filter-context",level:4},{value:"2. Combining the filter contexts",id:"2-combining-the-filter-contexts",level:4},{value:"3. Using FILTER() with multiple filter statements",id:"3-using-filter-with-multiple-filter-statements",level:4},{value:"4. Using variables inside a DAX statement",id:"4-using-variables-inside-a-dax-statement",level:4},{value:"5. Removing a specified filter context",id:"5-removing-a-specified-filter-context",level:4},{value:"5.5.2 | Chapter conclusion",id:"552--chapter-conclusion",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"55--commonly-used-dax-measure-patterns-using-calculate"},"5.5 | Commonly used DAX measure patterns using CALCULATE()"),(0,i.kt)("p",null,"Learning, understanding and applying the DAX language to create complex calculations is not easy. Although some functions seem familiar to the formulas used in Excel, the language is much more abstract, especially in the context of a data model with many table relations and of course a given filter context based on which a measure is evaluated."),(0,i.kt)("p",null,"The good news is that for the majority of use-cases we can cover or fullfil the majority of requirements with a limited set of ",(0,i.kt)("strong",{parentName:"p"},"DAX measure patterns"),". These patterns mostly revolve around the previously introduced function ",(0,i.kt)("strong",{parentName:"p"},"CALCULATE()"),". Accordingly, I want to introduce this function in this chapter and give you a toolbox consisting of DAX patterns which you can apply in many situations."),(0,i.kt)("p",null,"The goal of this chapter is to explain CALCULATE() in the most intuitive way with showing a variety of examples. I believe this is easier for you than trying to read through theoretical explanations of the underlying mechanics of this function using technical terms. Though if this is something you are interested in, just search for CALCULATE() on Google and you will find many articles about this function that go into the details accordingly."),(0,i.kt)("h2",{id:"551--using-calculate"},"5.5.1 | Using CALCULATE()"),(0,i.kt)("p",null,"There are many ways with which we can manipulate the filter context with CALCULATE(). Let's go through the most widely used techniques in practice."),(0,i.kt)("h4",{id:"1-overriding-the-filter-context"},"1. Overriding the filter context"),(0,i.kt)("p",null,"We can ",(0,i.kt)("strong",{parentName:"p"},"fixate")," and ",(0,i.kt)("strong",{parentName:"p"},"override")," the filter context for a specific dimension using CALCULATE() with a simple logical statement as following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="New measure: Sales ProductType Fixed"',title:'"New',"measure:":!0,Sales:!0,ProductType:!0,'Fixed"':!0},'Sales ProductType Fixed =\nCALCULATE ( [Sales in USD], dimProduct[ProductType] = "Trade Product" )\n')),(0,i.kt)("p",null,"Placing this measure in a matrix visual with the field ",(0,i.kt)("em",{parentName:"p"},"ProductType")," as rows returns the following picture:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"03-89",src:a(706).Z,width:"1319",height:"756"})),(0,i.kt)("p",null,'Note how the measure ignores the filter context given by the rows in the matrix and always returns the sum of sales for "Trade Products" in all cells (including the total row).'),(0,i.kt)("h4",{id:"2-combining-the-filter-contexts"},"2. Combining the filter contexts"),(0,i.kt)("p",null,"We can also ",(0,i.kt)("strong",{parentName:"p"},"combine")," the filter context from the visualization (or slicers etc.) with the one defined inside the measure with simply wrapping the logical filter statement with ",(0,i.kt)("strong",{parentName:"p"},"KEEPFILTERS()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="New measure: Sales ProductType KEEPFILTERS()"',title:'"New',"measure:":!0,Sales:!0,ProductType:!0,'KEEPFILTERS()"':!0},'Sales ProductType KEEPFILTERS() =\nCALCULATE (\n    [Sales in USD],\n    KEEPFILTERS ( dimProduct[ProductType] = "Trade Product" )\n)\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"03-90",src:a(3569).Z,width:"1322",height:"783"})),(0,i.kt)("p",null,'This already makes more sense because nothing is returned for "Manufactured Product". Therefore, it is in general advisable and good practice to use KEEPFILTERS() inside CALCULATE().'),(0,i.kt)("h4",{id:"3-using-filter-with-multiple-filter-statements"},"3. Using FILTER() with multiple filter statements"),(0,i.kt)("p",null,"We can combine multiple filter statements with the function FILTER(). FILTER() returns a filtered table based on which the calculation is performed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="New measure: Sales FILTER()"',title:'"New',"measure:":!0,Sales:!0,'FILTER()"':!0},'Sales FILTER() =\nCALCULATE (\n    [Sales in USD],\n    FILTER (\n        dimProduct,\n        dimProduct[ProductType] = "Trade Product" && \n        dimProduct[Subcategory] = "Subcategory 1"\n    )\n)\n')),(0,i.kt)("p",null,"The screenshot showing the result in Power BI is further below to save some space here."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'Multiple filter statements are chained with "&&" for ',(0,i.kt)("em",{parentName:"p"},"AND"),' and "||" for ',(0,i.kt)("em",{parentName:"p"},"OR"),".")),(0,i.kt)("h4",{id:"4-using-variables-inside-a-dax-statement"},"4. Using variables inside a DAX statement"),(0,i.kt)("p",null,"As with many programming languages, we can use ",(0,i.kt)("strong",{parentName:"p"},"variables")," inside a DAX measure statement."),(0,i.kt)("p",null,"Let's re-write the previous measure using variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="New measure: Sales FILTER() Variables"',title:'"New',"measure:":!0,Sales:!0,"FILTER()":!0,'Variables"':!0},'Sales FILTER() Variables =\nVAR vTableFilter =\n    FILTER (\n        dimProduct,\n        dimProduct[ProductType] = "Trade Product" && \n        dimProduct[Subcategory] = "Subcategory 1"\n    )\nVAR vResult =\n    CALCULATE ( [Sales in USD], KEEPFILTERS ( vTableFilter ) )\nRETURN\n    vResult\n')),(0,i.kt)("p",null,"When working with variables, we use ",(0,i.kt)("em",{parentName:"p"},"VAR")," to define them. Finally, we use ",(0,i.kt)("em",{parentName:"p"},"RESULT")," to specify what the measure shall finally return as a calculation result. In this example, the calculation returns the variable ",(0,i.kt)("em",{parentName:"p"},"vResult"),"."),(0,i.kt)("h4",{id:"5-removing-a-specified-filter-context"},"5. Removing a specified filter context"),(0,i.kt)("p",null,"We can use REMOVEFILTERS() or ALL() to remove (ignore) a specified filter from the context."),(0,i.kt)("p",null,"Let's ignore the field ",(0,i.kt)("em",{parentName:"p"},"Subcategory")," from ",(0,i.kt)("em",{parentName:"p"},"dimProduct")," in the next measure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="New Measure: Sales REMOVEFILTERS()"',title:'"New',"Measure:":!0,Sales:!0,'REMOVEFILTERS()"':!0},"Sales REMOVEFILTERS() =\nCALCULATE ( [Sales in USD], REMOVEFILTERS ( dimProduct[Subcategory] ) )\n")),(0,i.kt)("p",null,'As you can see, the sum for "Trade Product" is correct, however it is not filtered anymore by ',(0,i.kt)("em",{parentName:"p"},"Subcategory"),"."),(0,i.kt)("p",null,"Let's have a look at the results in Power BI for the measures created in steps 3 to 5:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"03-91",src:a(3369).Z,width:"1322",height:"861"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("em",{parentName:"li"},"Sales FILTER()"),"]",' only returns a value for "Subcategory 1" and "Trade Product"'),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("em",{parentName:"li"},"Sales FILTER() Variables"),"]"," does the exact same thing as ","[",(0,i.kt)("em",{parentName:"li"},"Sales FILTER()"),"]"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("em",{parentName:"li"},"Sales REMOVEFILTERS()"),"]"," specifically ignores the ",(0,i.kt)("em",{parentName:"li"},"Subcategory")," filter context ")),(0,i.kt)("h2",{id:"552--chapter-conclusion"},"5.5.2 | Chapter conclusion"),(0,i.kt)("p",null,"The function CALCULATE() is widely regarded as the most important function of the language DAX. It is very versatile and the basis for most filter manipulations in measures. Many real-world BI requirements involve applying a specific filter context to be used for custom calculations. Often time it is a straightforward filter on one or multiple columns of a table to make sure the right scope of data is used in the calculation. Sometimes we need to combine the filter context coming from slicers or dimensions with the filtering inside the measure (using KEEPFILTERS), and at times, it may be necessary to ignore certain filters altogether (using ALL or REMOVEFILTERS)."))}m.isMDXComponent=!0},706:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-89-50cfe5ce8730ce52f16f30f6009caf68.png"},3569:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-90-43fffcbe895eac64d2175c2b4740d739.png"},3369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-91-968bb6c8dbb03ab9a4ebe78c07fe100a.png"}}]);