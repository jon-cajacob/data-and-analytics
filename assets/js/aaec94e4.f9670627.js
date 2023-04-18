"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[8358],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,h=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:7,title:"5.7 | Example of a fully functioning dashboard",slug:"/5.7",tags:["Visualization","Reporting","Example"]},i="5.7 | Example of a fully functioning dashboard",l={unversionedId:"book/chapter5/05-07-dashboard",id:"book/chapter5/05-07-dashboard",title:"5.7 | Example of a fully functioning dashboard",description:"Instead of showing the many available features to build a dashboard in Power BI step-by-step in this book, I believe it is more effective to provide a good example which you can explore for yourself. Therefore, in the solution file for the demo use-case of this book, you can find a fully functioning dashboard which I created using best practice and many different features of Power BI:",source:"@site/docs/01-book/01-chapter5/05-07-dashboard.md",sourceDirName:"01-book/01-chapter5",slug:"/5.7",permalink:"/5.7",draft:!1,tags:[{label:"Visualization",permalink:"/tags/visualization"},{label:"Reporting",permalink:"/tags/reporting"},{label:"Example",permalink:"/tags/example"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"5.7 | Example of a fully functioning dashboard",slug:"/5.7",tags:["Visualization","Reporting","Example"]},sidebar:"tutorialSidebar",previous:{title:"5.6 | Summary and takeaways for working with measures and DAX",permalink:"/5.6"},next:{title:"5.8 | Creating a calculated table with DAX",permalink:"/5.8"}},s={},u=[],c={toc:u};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"57--example-of-a-fully-functioning-dashboard"},"5.7 | Example of a fully functioning dashboard"),(0,n.kt)("p",null,"Instead of showing the many available features to build a dashboard in Power BI step-by-step in this book, I believe it is more effective to provide a good example which you can explore for yourself. Therefore, in the solution file for the demo use-case of this book, you can find a fully functioning dashboard which I created using best practice and many different features of Power BI:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-92",src:a(2930).Z,width:"1324",height:"777"})),(0,n.kt)("p",null,"I want to highlight the following regarding this dashboard:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"date filtering")," is on top of the page with a single-selection of the year and a multi-selection of the months"),(0,n.kt)("li",{parentName:"ul"},"All ",(0,n.kt)("strong",{parentName:"li"},"slicers")," are placed on the left border of the page. Some slicers are dropdowns (which can be configured in the formatting settings)"),(0,n.kt)("li",{parentName:"ul"},"All visualizations use the same ",(0,n.kt)("strong",{parentName:"li"},"color coding")," with blue showing an improvement over the previous year and orange for vice versa"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"card visuals")," with the big numbers always show a comparison value, mostly the previous year equivalent with a year-over-year percentage change. This gives the reader more context"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"bubble chart")," hosts 3 different KPIs in a very efficient form. Note how I used the field ProductType for the legend of the chart"),(0,n.kt)("li",{parentName:"ul"},"I also included a ",(0,n.kt)("strong",{parentName:"li"},"table visual"),". Note the visual enhancements with the data bars (configured under ",(0,n.kt)("em",{parentName:"li"},"Cell elements")," in the formatting options). Because of these enhancements and plus the dynamic drill possibilities, a table visual is very often the superior choice for a report"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"dynamic coloring of a bar chart")," is configured under Columns in the formatting options with a simple rule that uses the year-over-year difference measure"),(0,n.kt)("li",{parentName:"ul"},"Finally, note how the ",(0,n.kt)("strong",{parentName:"li"},"measures")," are defined and how they are used in the different visuals. You will observe many of the techniques previously discussed and also how simple the DAX code used is - and yet how versatile and powerful this set of measures can be for a dashboard")))}p.isMDXComponent=!0},2930:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/img_book_03-92-2cff27e22e39ab9cd09337eed3c89470.png"}}]);