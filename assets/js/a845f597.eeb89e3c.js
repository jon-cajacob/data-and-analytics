"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[6831],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),h=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=h(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=h(a),u=n,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return a?i.createElement(f,r(r({ref:t},p),{},{components:a})):i.createElement(f,r({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,r[1]=l;for(var h=2;h<o;h++)r[h]=a[h];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var i=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2,title:"5.2 | Creating the first visualization",slug:"/5.2",tags:["tag1"]},r="5.2 | Creating the first visualization",l={unversionedId:"book/chapter5/05-02-first-visualization",id:"book/chapter5/05-02-first-visualization",title:"5.2 | Creating the first visualization",description:"In this chapter, we will create a first simple visualization and explore different formatting options and ways to interact with a chart in Power BI.",source:"@site/docs/01-book/01-chapter5/05-02-first-visualization.md",sourceDirName:"01-book/01-chapter5",slug:"/5.2",permalink:"/5.2",draft:!1,tags:[{label:"tag1",permalink:"/tags/tag-1"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"5.2 | Creating the first visualization",slug:"/5.2",tags:["tag1"]},sidebar:"tutorialSidebar",previous:{title:"5.1 | Chapter overview",permalink:"/5.1"},next:{title:"5.3 | Working with and applying filters",permalink:"/5.3"}},s={},h=[{value:"1. Place a new empty visual of the type <em>Clustered bar chart</em> on the report page",id:"1-place-a-new-empty-visual-of-the-type-clustered-bar-chart-on-the-report-page",level:4},{value:"2. Populate the chart with the fields <em>Sales in USD</em> from <em>factSales</em> and <em>Subcategory</em> from <em>dimProduct</em>",id:"2-populate-the-chart-with-the-fields-sales-in-usd-from-factsales-and-subcategory-from-dimproduct",level:4},{value:"3. Change the size and position of the chart on the report page",id:"3-change-the-size-and-position-of-the-chart-on-the-report-page",level:4},{value:"4. Navigate to the formatting options and enable the data labels",id:"4-navigate-to-the-formatting-options-and-enable-the-data-labels",level:4},{value:"5. Change the color of the bars",id:"5-change-the-color-of-the-bars",level:4},{value:"6. Remove the X-axis and its title and the title of the Y-axis",id:"6-remove-the-x-axis-and-its-title-and-the-title-of-the-y-axis",level:4},{value:"7. Change the title of the chart",id:"7-change-the-title-of-the-chart",level:4},{value:"8. Explore the different possibilities and options by yourself",id:"8-explore-the-different-possibilities-and-options-by-yourself",level:4}],p={toc:h};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"52--creating-the-first-visualization"},"5.2 | Creating the first visualization"),(0,n.kt)("p",null,"In this chapter, we will create a first simple visualization and explore different formatting options and ways to interact with a chart in Power BI."),(0,n.kt)("h4",{id:"1-place-a-new-empty-visual-of-the-type-clustered-bar-chart-on-the-report-page"},"1. Place a new empty visual of the type ",(0,n.kt)("em",{parentName:"h4"},"Clustered bar chart")," on the report page"),(0,n.kt)("p",null,"On an empty report page, simply click on the symbol for the Clustered bar chart to create a new empty visual of this type."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-70",src:a(1579).Z,width:"1322",height:"865"})),(0,n.kt)("h4",{id:"2-populate-the-chart-with-the-fields-sales-in-usd-from-factsales-and-subcategory-from-dimproduct"},"2. Populate the chart with the fields ",(0,n.kt)("em",{parentName:"h4"},"Sales in USD")," from ",(0,n.kt)("em",{parentName:"h4"},"factSales")," and ",(0,n.kt)("em",{parentName:"h4"},"Subcategory")," from ",(0,n.kt)("em",{parentName:"h4"},"dimProduct")),(0,n.kt)("p",null,"Make sure you have selected the newly created visual (indicated by a thin grey bar around it). Then, place the field ",(0,n.kt)("em",{parentName:"p"},"Sales in USD")," into ",(0,n.kt)("em",{parentName:"p"},"X-axis")," and the field ",(0,n.kt)("em",{parentName:"p"},"Subcategory")," into ",(0,n.kt)("em",{parentName:"p"},"Y-axis"),"."),(0,n.kt)("p",null,"You can do this by either just simply enable the checkmark left to the field label in the navigation pane or draging-and-droping the fields into the respective places."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-71",src:a(8307).Z,width:"1322",height:"869"})),(0,n.kt)("h4",{id:"3-change-the-size-and-position-of-the-chart-on-the-report-page"},"3. Change the size and position of the chart on the report page"),(0,n.kt)("p",null,"We can change the size and position of a visual element the same way as when working with Power Point. Use the markers on the thin grey border around the visual (when having it selected) to change its size. Use drag-and-drop with the left mouse-button to move the visual around and change its position."),(0,n.kt)("h4",{id:"4-navigate-to-the-formatting-options-and-enable-the-data-labels"},"4. Navigate to the formatting options and enable the data labels"),(0,n.kt)("p",null,"Now we would like to change some of the formatting options. Make sure you have selected the chart and then in the formatting options, enable ",(0,n.kt)("em",{parentName:"p"},"Data labels"),"."),(0,n.kt)("p",null,"Note that I also changed the font sizes so you can actually see something on the screenshot here."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-72",src:a(1880).Z,width:"1325",height:"871"})),(0,n.kt)("h4",{id:"5-change-the-color-of-the-bars"},"5. Change the color of the bars"),(0,n.kt)("p",null,"To change the color of the data bars, expand the options under Bars and select another color."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-73",src:a(7923).Z,width:"1323",height:"864"})),(0,n.kt)("h4",{id:"6-remove-the-x-axis-and-its-title-and-the-title-of-the-y-axis"},"6. Remove the X-axis and its title and the title of the Y-axis"),(0,n.kt)("p",null,"Having the data labels enabled, we do not need the X-axis anymore. Also, we want to remove the title from the Y-axis."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-74",src:a(863).Z,width:"1322",height:"864"})),(0,n.kt)("p",null,"Note how the axis title setting is a separate option for each axis. Disabling the entire axis will not disable the title automatically."),(0,n.kt)("h4",{id:"7-change-the-title-of-the-chart"},"7. Change the title of the chart"),(0,n.kt)("p",null,"To change and adjust the title of a visual element, navigate to ",(0,n.kt)("em",{parentName:"p"},"General")," under the formatting options."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-75",src:a(7927).Z,width:"1322",height:"869"})),(0,n.kt)("p",null,"We have now created our first visualization and also adjusted it so that is adheres to good practice of visual design. In the next chapter, we will continue with this report page and introduce the usage of slicers."),(0,n.kt)("h4",{id:"8-explore-the-different-possibilities-and-options-by-yourself"},"8. Explore the different possibilities and options by yourself"),(0,n.kt)("p",null,"Describring all variations of formatting options and different chart types would not fit into a textbook so I encourage you to explore them by yourself. Here are some ideas to try:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Try placing multiple fields on the Y-axis. With that, you can build a drill hierarchy"),(0,n.kt)("li",{parentName:"ul"},"Change the chart type while having the chart selected"),(0,n.kt)("li",{parentName:"ul"},"Try placing a field on Legend or Small multiples"),(0,n.kt)("li",{parentName:"ul"},"Click through and play around with the different formatting options available")))}c.isMDXComponent=!0},1579:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/img_book_03-70-a4c6569d7dd9d0a8907a157fe326586d.png"},8307:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/img_book_03-71-f9abb74d37dac61b6df8549714fbaaba.png"},1880:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/img_book_03-72-256b0cabc4f7765f705a5081f2fbb3b1.png"},7923:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/img_book_03-73-914d80286b59ac1927feceac991e85bf.png"},863:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/img_book_03-74-9c1d5272710298c556d315ac03ae0815.png"},7927:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/img_book_03-75-284fed8591a0b3d6ce9ff3dfd04f5ff0.png"}}]);