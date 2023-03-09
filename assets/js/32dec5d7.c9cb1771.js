"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[4494],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(a),u=i,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5636:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:999,title:"5.3 | Working with and applying filters",slug:"/5.3",tags:["tag1"]},l="5.3 | Working with and applying filters",o={unversionedId:"book/chapter5/05-03-filtering",id:"book/chapter5/05-03-filtering",title:"5.3 | Working with and applying filters",description:"After creating our first visualization, let's continue with different ways of filtering this chart on the report page.",source:"@site/docs/01-book/01-chapter5/05-03-filtering.md",sourceDirName:"01-book/01-chapter5",slug:"/5.3",permalink:"/5.3",draft:!1,tags:[{label:"tag1",permalink:"/tags/tag-1"}],version:"current",sidebarPosition:999,frontMatter:{sidebar_position:999,title:"5.3 | Working with and applying filters",slug:"/5.3",tags:["tag1"]},sidebar:"tutorialSidebar",previous:{title:"5.2 | Creating the first visualization",permalink:"/5.2"},next:{title:"5.4 | Creating and configuring the first Measures",permalink:"/5.4"}},s={},p=[{value:"1. Place an empty slicer on the report page next to the bar chart visualization",id:"1-place-an-empty-slicer-on-the-report-page-next-to-the-bar-chart-visualization",level:4},{value:"2. Place the field <em>Date</em> from <em>dimDate</em> into the slicer",id:"2-place-the-field-date-from-dimdate-into-the-slicer",level:4},{value:"3. Place another empty slicer on the page and populate it with the field <em>Channel Group</em> from <em>dimSalesChannel</em>",id:"3-place-another-empty-slicer-on-the-page-and-populate-it-with-the-field-channel-group-from-dimsaleschannel",level:4},{value:"4. Place the field <em>Channel Desc</em> from <em>dimSalesChannel</em> in the same slicer right under <em>Channel Group</em>",id:"4-place-the-field-channel-desc-from-dimsaleschannel-in-the-same-slicer-right-under-channel-group",level:4},{value:"5. On the filter pane, place <em>ProductType</em> from <em>dimProduct</em> under <em>Filters on this page </em>and only select &quot;Manufactured Product&quot;",id:"5-on-the-filter-pane-place-producttype-from-dimproduct-under-filters-on-this-page-and-only-select-manufactured-product",level:4},{value:"6. Configure the slicer settings",id:"6-configure-the-slicer-settings",level:4}],c={toc:p};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"53--working-with-and-applying-filters"},"5.3 | Working with and applying filters"),(0,i.kt)("p",null,"After creating our first visualization, let's continue with different ways of filtering this chart on the report page."),(0,i.kt)("p",null,"As described in chapter VERWEIS, there are different ways of establishing a filter context that influences a visualization:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Slicer:")," A slicer is directly placed on a report page for the purpose of allowing the report users to filter the visualizations themselves by the different dimension, like for example by date"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Filter pane:")," There is also a filter pane available in the report builder where we can place filters that either impact a specific visualization, a report page entirely or all report pages in the Power BI file. This method of filtering is best suited for pre-filtering data and visualizations, which should be manipulated by end-users"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Measures (DAX)"),": We can also set and manipulate the filter context inside a Measure with the functional language DAX. We will look at this method in the next chapter")),(0,i.kt)("p",null,"Let's explore the first two options."),(0,i.kt)("h4",{id:"1-place-an-empty-slicer-on-the-report-page-next-to-the-bar-chart-visualization"},"1. Place an empty slicer on the report page next to the bar chart visualization"),(0,i.kt)("p",null,"Placing a new slicer element on the report page is similar to placing a new visual:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"03-76",src:a(5318).Z,width:"1323",height:"870"})),(0,i.kt)("h4",{id:"2-place-the-field-date-from-dimdate-into-the-slicer"},"2. Place the field ",(0,i.kt)("em",{parentName:"h4"},"Date")," from ",(0,i.kt)("em",{parentName:"h4"},"dimDate")," into the slicer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"03-77",src:a(2493).Z,width:"1322",height:"872"})),(0,i.kt)("p",null,"Feel free to play around with the slicer and observe how the visual is filtered respectively."),(0,i.kt)("h4",{id:"3-place-another-empty-slicer-on-the-page-and-populate-it-with-the-field-channel-group-from-dimsaleschannel"},"3. Place another empty slicer on the page and populate it with the field ",(0,i.kt)("em",{parentName:"h4"},"Channel Group")," from ",(0,i.kt)("em",{parentName:"h4"},"dimSalesChannel")),(0,i.kt)("h4",{id:"4-place-the-field-channel-desc-from-dimsaleschannel-in-the-same-slicer-right-under-channel-group"},"4. Place the field ",(0,i.kt)("em",{parentName:"h4"},"Channel Desc")," from ",(0,i.kt)("em",{parentName:"h4"},"dimSalesChannel")," in the same slicer right under ",(0,i.kt)("em",{parentName:"h4"},"Channel Group")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"03-78",src:a(3326).Z,width:"1319",height:"867"})),(0,i.kt)("p",null,"As you can see, we have now a second slicer with a small logical hierarchy. Note how both slicers, based on date and the sales channel simultaneously influence the chart visual."),(0,i.kt)("h4",{id:"5-on-the-filter-pane-place-producttype-from-dimproduct-under-filters-on-this-page-and-only-select-manufactured-product"},"5. On the filter pane, place ",(0,i.kt)("em",{parentName:"h4"},"ProductType")," from ",(0,i.kt)("em",{parentName:"h4"},"dimProduct")," under ",(0,i.kt)("em",{parentName:"h4"},"Filters on this page "),'and only select "Manufactured Product"'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"03-79",src:a(2030).Z,width:"1322",height:"869"})),(0,i.kt)("p",null,"We have now established a filter context that simultaneously filters by date, by the sales channel dimension and by the product type."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'Multiple filters used simultaneously are always logically connected with an "and". In this example, the date is between A and B ',(0,i.kt)("ins",null,"and")," ",(0,i.kt)("em",{parentName:"p"},"Channel Group")," is equal to ","[...]"," ",(0,i.kt)("ins",null,"and")," ",(0,i.kt)("em",{parentName:"p"},"Channel Desc")," is equal to ","[...]"," etc.")),(0,i.kt)("h4",{id:"6-configure-the-slicer-settings"},"6. Configure the slicer settings"),(0,i.kt)("p",null,"For the slicer that filters ",(0,i.kt)("em",{parentName:"p"},"Channel Group")," and ",(0,i.kt)("em",{parentName:"p"},"Channel Desc"),", let's change some settings."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Activate the search bar via the three small dots appearing when hovering over the slicer"),(0,i.kt)("li",{parentName:"ul"},"In the formatting options, deactivate ",(0,i.kt)("em",{parentName:"li"},"Multi-select with CTRL")," (so a user can multi-select with holding the CTRL-key) and activate ",(0,i.kt)("em",{parentName:"li"},'Show "Select all" option'))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"03-85",src:a(882).Z,width:"1302",height:"749"})))}h.isMDXComponent=!0},5318:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-76-ad0c78c1d17cb119833602aeee597930.png"},2493:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-77-b8686f998ebfa7f250589c8dc6b38fd4.png"},3326:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-78-ce0f3f9c61213eb885906ce1c2922c97.png"},2030:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-79-5a66a5fd4a7ee07d7d491d50cc54e6ab.png"},882:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-85-c19041a27da174ceb88f79a352f2c25e.png"}}]);