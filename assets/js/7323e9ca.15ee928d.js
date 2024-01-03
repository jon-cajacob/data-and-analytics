"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[7823],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>w});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=i,w=u["".concat(l,".").concat(p)]||u[p]||f[p]||r;return a?n.createElement(w,o(o({ref:t},d),{},{components:a})):n.createElement(w,o({ref:t},d))}));function w(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},568:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:110,title:"Loading data via Gen2 Dataflow to Lakehouse table",slug:"/wiki/msfabric/dataload2",tags:["Data"]},o="Loading data via Gen2 Dataflow to Lakehouse table",s={unversionedId:"wiki/msfabric/Loading data via Gen2 Dataflow to Lakehouse table",id:"wiki/msfabric/Loading data via Gen2 Dataflow to Lakehouse table",title:"Loading data via Gen2 Dataflow to Lakehouse table",description:"1. Create new Gen2 Dataflow and create query",source:"@site/docs/03-wiki/03-msfabric/110-Loading data via Gen2 Dataflow to Lakehouse table.md",sourceDirName:"03-wiki/03-msfabric",slug:"/wiki/msfabric/dataload2",permalink:"/wiki/msfabric/dataload2",draft:!1,tags:[{label:"Data",permalink:"/tags/data"}],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110,title:"Loading data via Gen2 Dataflow to Lakehouse table",slug:"/wiki/msfabric/dataload2",tags:["Data"]},sidebar:"tutorialSidebar",previous:{title:"MS Fabric Overview",permalink:"/wiki/msfabric/overview"},next:{title:"Loading files from ADLS to Lakehouse via Pipeline",permalink:"/wiki/msfabric/dataload1"}},l={},c=[{value:"1. Create new Gen2 Dataflow and create query",id:"1-create-new-gen2-dataflow-and-create-query",level:4},{value:"2. Select destination Lakehouse for newly created query",id:"2-select-destination-lakehouse-for-newly-created-query",level:4},{value:"3. Create new Pipeline and add Dataflow action that references just created Gen2 Dataflow",id:"3-create-new-pipeline-and-add-dataflow-action-that-references-just-created-gen2-dataflow",level:4},{value:"4. Trigger Pipeline",id:"4-trigger-pipeline",level:4},{value:"5. Check for data in Lakehouse",id:"5-check-for-data-in-lakehouse",level:4},{value:"Bonus: Add a MS Outlook activity in Pipeline that sends an e-mail in case the Pipeline was executed successfully",id:"bonus-add-a-ms-outlook-activity-in-pipeline-that-sends-an-e-mail-in-case-the-pipeline-was-executed-successfully",level:4}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"loading-data-via-gen2-dataflow-to-lakehouse-table"},"Loading data via Gen2 Dataflow to Lakehouse table"),(0,i.kt)("h4",{id:"1-create-new-gen2-dataflow-and-create-query"},"1. Create new Gen2 Dataflow and create query"),(0,i.kt)("h4",{id:"2-select-destination-lakehouse-for-newly-created-query"},"2. Select destination Lakehouse for newly created query"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot",src:a(3336).Z,width:"1604",height:"887"})),(0,i.kt)("p",null,"Make sure to use Datetime instead of just Date formats:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot",src:a(5257).Z,width:"1606",height:"891"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot",src:a(5228).Z,width:"1601",height:"887"})),(0,i.kt)("p",null,"Alternative menu to select data destination:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot",src:a(2773).Z,width:"1601",height:"887"})),(0,i.kt)("h4",{id:"3-create-new-pipeline-and-add-dataflow-action-that-references-just-created-gen2-dataflow"},"3. Create new Pipeline and add Dataflow action that references just created Gen2 Dataflow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot",src:a(2963).Z,width:"1589",height:"692"})),(0,i.kt)("h4",{id:"4-trigger-pipeline"},"4. Trigger Pipeline"),(0,i.kt)("h4",{id:"5-check-for-data-in-lakehouse"},"5. Check for data in Lakehouse"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"screenshot",src:a(6952).Z,width:"1598",height:"884"})),(0,i.kt)("h4",{id:"bonus-add-a-ms-outlook-activity-in-pipeline-that-sends-an-e-mail-in-case-the-pipeline-was-executed-successfully"},"Bonus: Add a MS Outlook activity in Pipeline that sends an e-mail in case the Pipeline was executed successfully"))}u.isMDXComponent=!0},3336:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wiki-msfabric-04-7ac88e99b212228b56e5a98800bdb8ff.png"},5257:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wiki-msfabric-05-78290c85dcca7aeed1644d4187f0802a.png"},5228:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wiki-msfabric-06-8f0cc47e2c4f1eb0447d25d472b659cc.png"},2963:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wiki-msfabric-07-a09d198e9ef046531cedf624dfe3c604.png"},6952:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wiki-msfabric-08-dd59cccdf450e3953071856e25f77aad.png"},2773:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wiki-msfabric-09-337452bbfe2de090a59779720b3d4fa7.png"}}]);