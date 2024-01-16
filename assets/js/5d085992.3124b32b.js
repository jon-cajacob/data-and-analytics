"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[4107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(a),d=n,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||l;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10631:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={sidebar_position:6,title:"5.6 | Summary and takeaways for working with measures and DAX",slug:"/5.6",tags:["DAX","Measures"]},o="5.6 | Summary and takeaways for working with measures and DAX",i={unversionedId:"book/chapter5/05-06-summary-measures",id:"book/chapter5/05-06-summary-measures",title:"5.6 | Summary and takeaways for working with measures and DAX",description:"Measures are very important for every BI solution and the DAX language to define them is very powerful and capable of implementing even the most complex requirements.",source:"@site/docs/01-book/01-chapter5/05-06-summary-measures.md",sourceDirName:"01-book/01-chapter5",slug:"/5.6",permalink:"/5.6",draft:!1,tags:[{label:"DAX",permalink:"/tags/dax"},{label:"Measures",permalink:"/tags/measures"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"5.6 | Summary and takeaways for working with measures and DAX",slug:"/5.6",tags:["DAX","Measures"]},sidebar:"tutorialSidebar",previous:{title:"5.5 | Commonly used DAX measure patterns using CALCULATE()",permalink:"/5.5"},next:{title:"5.7 | Example of a fully functioning dashboard",permalink:"/5.7"}},s={},m=[{value:"5.6.1 | Helpful DAX references",id:"561--helpful-dax-references",level:2}],u={toc:m};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"56--summary-and-takeaways-for-working-with-measures-and-dax"},"5.6 | Summary and takeaways for working with measures and DAX"),(0,n.kt)("p",null,"Measures are very important for every BI solution and the DAX language to define them is very powerful and capable of implementing even the most complex requirements."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Measures are ",(0,n.kt)("strong",{parentName:"li"},"dynamic calculations")," which means they are immediately re-calculated when a user interacts with a dashboard, for example changes a filter setting"),(0,n.kt)("li",{parentName:"ul"},"Measure names (labels) have to be ",(0,n.kt)("strong",{parentName:"li"},"unique")),(0,n.kt)("li",{parentName:"ul"},"Each measure has a ",(0,n.kt)("strong",{parentName:"li"},"home table"),". It is good practice to store all measures in a separate table"),(0,n.kt)("li",{parentName:"ul"},"Measures can and should always be ",(0,n.kt)("strong",{parentName:"li"},"formatted")," (e.g. whole numbers, decimals numbers, percentages etc.). The formatting of a measure (and multiple measures at once holding the CTRL-key) can be changed in the ",(0,n.kt)("em",{parentName:"li"},"Model view")," as well"),(0,n.kt)("li",{parentName:"ul"},"We can ",(0,n.kt)("strong",{parentName:"li"},"reference")," other measures inside a new measure. This is important to follow the DRY-principle (don't-repeat-yourself)"),(0,n.kt)("li",{parentName:"ul"},"We can work with ",(0,n.kt)("strong",{parentName:"li"},"variables")," inside a measure for more complex calculations and a better readability"),(0,n.kt)("li",{parentName:"ul"},"We can organize measures in ",(0,n.kt)("strong",{parentName:"li"},"display folders")," for a better overview (see in the ",(0,n.kt)("em",{parentName:"li"},"Model view")," the option ",(0,n.kt)("em",{parentName:"li"},"Display folder"),")"),(0,n.kt)("li",{parentName:"ul"},"A measure is always evaluated given a certain ",(0,n.kt)("strong",{parentName:"li"},"filter context")," (e.g. from slicers). We use the DAX function CALCULATE() to manipulate this filter context")),(0,n.kt)("h2",{id:"561--helpful-dax-references"},"5.6.1 | Helpful DAX references"),(0,n.kt)("p",null,"Working with DAX means you will need to look up how a function works and is applied from time to time. The following are highly useful resources that I use myself on a regular basis:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"URL"),(0,n.kt)("th",{parentName:"tr",align:null},"Content"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://learn.microsoft.com/en-us/dax/dax-function-reference"},"https://learn.microsoft.com/en-us/dax/dax-function-reference")),(0,n.kt)("td",{parentName:"tr",align:null},"Official DAX documentation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.daxpatterns.com/"},"https://www.daxpatterns.com/")),(0,n.kt)("td",{parentName:"tr",align:null},"Highly useful collection of DAX measure patterns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://dax.guide/"},"https://dax.guide/")),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation and explanation (with examples) of each DAX   function")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.daxformatter.com/"},"https://www.daxformatter.com/")),(0,n.kt)("td",{parentName:"tr",align:null},"Simple and efficient DAX formatting tool")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.sqlbi.com/articles/"},"https://www.sqlbi.com/articles/")),(0,n.kt)("td",{parentName:"tr",align:null},"Popular and highly useful blog with articles about DAX   functions")))))}p.isMDXComponent=!0}}]);