"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[7025],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),u=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=u(e.components);return r.createElement(o.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(t),h=n,d=c["".concat(o,".").concat(h)]||c[h]||p[h]||s;return t?r.createElement(d,i(i({ref:a},m),{},{components:t})):r.createElement(d,i({ref:a},m))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=h;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1713:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(7462),n=(t(7294),t(3905));const s={sidebar_position:4,title:"5.4 | Creating and configuring the first measures",slug:"/5.4",tags:["tag1"]},i="5.4 | Creating and configuring the first measures",l={unversionedId:"book/chapter5/05-04-first-measures",id:"book/chapter5/05-04-first-measures",title:"5.4 | Creating and configuring the first measures",description:"In this chapter, we will create the first measures using DAX. First, I will explain how the code for a measure is structured. Following that, we will create four basic measures which we can use in many contexts.",source:"@site/docs/01-book/01-chapter5/05-04-first-measures.md",sourceDirName:"01-book/01-chapter5",slug:"/5.4",permalink:"/5.4",draft:!1,tags:[{label:"tag1",permalink:"/tags/tag-1"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"5.4 | Creating and configuring the first measures",slug:"/5.4",tags:["tag1"]},sidebar:"tutorialSidebar",previous:{title:"5.3 | Working with and applying filters",permalink:"/5.3"},next:{title:"5.5 | Commonly used DAX measure patterns",permalink:"/5.5"}},o={},u=[{value:"5.4.x | How a measure is defined with DAX",id:"54x--how-a-measure-is-defined-with-dax",level:2},{value:"5.4.1 | Basic measure for sales in USD",id:"541--basic-measure-for-sales-in-usd",level:2},{value:"5.4.2 | Measure for previous year sales in USD",id:"542--measure-for-previous-year-sales-in-usd",level:2},{value:"5.4.3 | Measure for year-over-year variance in sales in USD",id:"543--measure-for-year-over-year-variance-in-sales-in-usd",level:2},{value:"5.4.4 | Chapter summary: Key takeaways for working with measures",id:"544--chapter-summary-key-takeaways-for-working-with-measures",level:2}],m={toc:u};function c(e){let{components:a,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"54--creating-and-configuring-the-first-measures"},"5.4 | Creating and configuring the first measures"),(0,n.kt)("p",null,"In this chapter, we will create the first measures using DAX. First, I will explain how the code for a measure is structured. Following that, we will create four basic measures which we can use in many contexts."),(0,n.kt)("p",null,"Remember, measures are ",(0,n.kt)("strong",{parentName:"p"},"dynamic")," custom calculations which means they are immediately re-calculated as soon as for example the filter context on a given report changes. This is opposed to static custom calculated columns created in Power Query, which are only updated when the dataset is refreshed."),(0,n.kt)("h2",{id:"54x--how-a-measure-is-defined-with-dax"},"5.4.x | How a measure is defined with DAX"),(0,n.kt)("p",null,"The following illustration shows how a measure is structurally written with DAX. The first example is a very simple measure, though quite important in many real-world use-cases. The second example shows how we can use variables and reference other measures inside a new measure."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-88",src:t(3398).Z,width:"1307",height:"833"})),(0,n.kt)("p",null,"Note how in the second example, first a variable (",(0,n.kt)("em",{parentName:"p"},"vSalesCY"),") is created that simply references another measure without further manipulation. The second variable (",(0,n.kt)("em",{parentName:"p"},"vSalesPY"),") also references the same measure, however its filter context is manipulate with CALCULATE() (see chapter VERWEIS). Finally, the variable ",(0,n.kt)("em",{parentName:"p"},"vResult")," is defined as the variation between the first two variables and it is returned as the result for the measure (after ",(0,n.kt)("em",{parentName:"p"},"RETURN"),")."),(0,n.kt)("p",null,"Don't worry if that seems a little overwhelming at this point. We will now create the measures step-by-step and it should become more clear accordingly."),(0,n.kt)("h2",{id:"541--basic-measure-for-sales-in-usd"},"5.4.1 | Basic measure for sales in USD"),(0,n.kt)("p",null,"To create a new measure, do a right-click on the table ",(0,n.kt)("em",{parentName:"p"},"_Measures")," and select ",(0,n.kt)("em",{parentName:"p"},"New measure"),". Note, each Measure has a home table where it is stored. Like described in chapter VERWEIS, it is good practice to have a separate table in the Power BI data model specifically for storing measures."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-80",src:t(6311).Z,width:"1325",height:"864"})),(0,n.kt)("p",null,"In the appearing formula bar, we enter the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Measure name")," (label) before the equal sign. Note, each measure has to have a unique name"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Formula")," using the DAX language")),(0,n.kt)("p",null,"The measure we want to create is defined as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="New measure: Sales in USD"',title:'"New',"measure:":!0,Sales:!0,in:!0,'USD"':!0},"Sales in USD = SUM( factSales[Sales in USD] )\n")),(0,n.kt)("p",null,"When you start typing after the equal sign, you will notice how Power BI gives you recommendations for functions, tables and fields to be used. This is called ",(0,n.kt)("em",{parentName:"p"},"IntelliSense"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-81",src:t(2617).Z,width:"1324",height:"570"})),(0,n.kt)("p",null,"When finishing typing the formula, confirm via the checkmark symbol. The new measure should appear under the ",(0,n.kt)("em",{parentName:"p"},"_Measure")," table:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-82",src:t(8886).Z,width:"1323",height:"570"})),(0,n.kt)("p",null,"Before we use the measure for visualizations, let's make sure the ",(0,n.kt)("strong",{parentName:"p"},"number format")," is correct. When having selected the measure in the table navigation, you can change the formatting options in the main navigation pane. Let's format the new measure as a \"Whole Number\" with thousand's separators activated:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-83",src:t(3344).Z,width:"1323",height:"570"})),(0,n.kt)("p",null,"Now we can use the measure in a visualization, just like we did it in the previous chapter:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-84",src:t(1986).Z,width:"1323",height:"858"})),(0,n.kt)("h2",{id:"542--measure-for-previous-year-sales-in-usd"},"5.4.2 | Measure for previous year sales in USD"),(0,n.kt)("p",null,"The next measure follows a very commonly used pattern for time / date calculations. What we want to achieve is to manipulate the filter context inside the measure so we always get the previous year value for sales from the perspective of a currently selected year."),(0,n.kt)("p",null,"Let's create another measure as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="New measure: Sales in USD PY"',title:'"New',"measure:":!0,Sales:!0,in:!0,USD:!0,'PY"':!0},"Sales in USD PY =\nCALCULATE ( [Sales in USD], DATEADD ( dimDate[Date], -1, YEAR ) )\n")),(0,n.kt)("p",null,"Note how we reference the previously created measure ",(0,n.kt)("em",{parentName:"p"},"[Sales in USD]")," inside the new measure."),(0,n.kt)("p",null,"Then, create a new report page and place an empty matrix visual on the canvas. Populate the matrix with the measures ",(0,n.kt)("em",{parentName:"p"},"[Sales in USD]")," and ",(0,n.kt)("em",{parentName:"p"},"[Sales in USD PY]")," and with ",(0,n.kt)("em",{parentName:"p"},"Year")," from ",(0,n.kt)("em",{parentName:"p"},"dimDate")," as the rows."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-85",src:t(882).Z,width:"1318",height:"856"})),(0,n.kt)("p",null,"Now let's take a moment to understand what is going on. The filter context, given by the rows in the matrix visual is ",(0,n.kt)("em",{parentName:"p"},"Year")," from ",(0,n.kt)("em",{parentName:"p"},"dimDate"),". The measure ",(0,n.kt)("em",{parentName:"p"},"[Sales in USD]")," shows the sales amount for the respective year. The measure ",(0,n.kt)("em",{parentName:"p"},"[Sales in USD PY]"),' on the other hand always shows exactly the value of the previous year. The filter context is basically manipulated to move the timeline back by one year, hence the "-1" and "YEAR" parameters in the DATEADD() function inside the measure.'),(0,n.kt)("p",null,"We will discuss the function CALCULATE() in more detail later given its relevance in practice."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The DAX function CALCULATE() is maybe the most important function used to create measures. It allows to specifically manipulate the filter context for a calculation. There are a lot of articles, guides and videos available on the Internet focused on this very function.")),(0,n.kt)("h2",{id:"543--measure-for-year-over-year-variance-in-sales-in-usd"},"5.4.3 | Measure for year-over-year variance in sales in USD"),(0,n.kt)("p",null,"Now that we have sales for the current and previous year defined in two measures, we easily create another measure that calculates the difference between the two using a simple substraction:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="New measure: Sales in USD \u0394PY"',title:'"New',"measure:":!0,Sales:!0,in:!0,USD:!0,'\u0394PY"':!0},"Sales in USD \u0394PY =\n[Sales in USD] - [Sales in USD PY]\n")),(0,n.kt)("p",null,"Let's consider that in many real-world use-cases, the year-over-year variance is also needed in percentage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="New measure: Sales in USD \u0394%PY"',title:'"New',"measure:":!0,Sales:!0,in:!0,USD:!0,'\u0394%PY"':!0},"Sales in USD \u0394%PY =\nDIVIDE( [Sales in USD] - [Sales in USD PY], [Sales in USD PY])\n")),(0,n.kt)("p",null,'We use the DIVIDE() function instead of just "/" because the former handles division by zero better.'),(0,n.kt)("p",null,"Make sure the formatting of both new measures is set appropriately and then place them in the matrix visualization we added previously:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"03-87",src:t(3509).Z,width:"1321",height:"751"})),(0,n.kt)("h2",{id:"544--chapter-summary-key-takeaways-for-working-with-measures"},"5.4.4 | Chapter summary: Key takeaways for working with measures"),(0,n.kt)("p",null,"Here are some basic takeaways for working with measures:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Measures are ",(0,n.kt)("strong",{parentName:"li"},"dynamic calculations")," which means they are immediately re-calculated when a user interacts with a dashboard, for example changes a filter setting"),(0,n.kt)("li",{parentName:"ul"},"Measure names (labels) have to be ",(0,n.kt)("strong",{parentName:"li"},"unique")),(0,n.kt)("li",{parentName:"ul"},"Each measure has a ",(0,n.kt)("strong",{parentName:"li"},"home table"),". It is good practice to store all measures in a separate table"),(0,n.kt)("li",{parentName:"ul"},"Measures can and should always be ",(0,n.kt)("strong",{parentName:"li"},"formatted")," (e.g. whole numbers, decimals numbers, percentages etc.). The formatting of a measure (and multiple measures at once) can be changed in the ",(0,n.kt)("em",{parentName:"li"},"Model view")," as well"),(0,n.kt)("li",{parentName:"ul"},"We can ",(0,n.kt)("strong",{parentName:"li"},"reference")," other measures inside a new measure. This is important to follow the DRY-principle (don't-repeat-yourself)"),(0,n.kt)("li",{parentName:"ul"},"We can work with ",(0,n.kt)("strong",{parentName:"li"},"variables")," inside a measure for more complex calculations and a better readability (see next chapter for an example)")))}c.isMDXComponent=!0},6311:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/img_book_03-80-2dba90421d66d3d422d31f8cda8b3952.png"},2617:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/img_book_03-81-e9ee25a44e0c2a8015854c617ac8836e.png"},8886:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/img_book_03-82-223153acce4bdb55781032d2db8226e5.png"},3344:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/img_book_03-83-21eec19191bcf2f12fbbaf2e2bad4e2e.png"},1986:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/img_book_03-84-fb848ad54802290b0b831e8012937c14.png"},882:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/img_book_03-85-47cc681dc8e90636c5e3034a2d21136a.png"},3509:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/img_book_03-87-e956dcb4623555a5d945a2aad73c6206.png"},3398:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/img_book_03-88-9f02cb0f6b5a243ec50f6aa2413a51fd.png"}}]);