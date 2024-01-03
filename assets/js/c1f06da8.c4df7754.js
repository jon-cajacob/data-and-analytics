"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[1563],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,b=u["".concat(l,".").concat(m)]||u[m]||f[m]||n;return r?a.createElement(b,o(o({ref:t},p),{},{components:r})):a.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:101,title:"MS Fabric Overview",slug:"/wiki/msfabric/overview",tags:["Data"]},o="MS Fabric Overview",c={unversionedId:"wiki/msfabric/MS Fabric Overview",id:"wiki/msfabric/MS Fabric Overview",title:"MS Fabric Overview",description:"Things we can do with MS Fabric (by no means a complete list)",source:"@site/docs/03-wiki/03-msfabric/101-MS Fabric Overview.md",sourceDirName:"03-wiki/03-msfabric",slug:"/wiki/msfabric/overview",permalink:"/wiki/msfabric/overview",draft:!1,tags:[{label:"Data",permalink:"/tags/data"}],version:"current",sidebarPosition:101,frontMatter:{sidebar_position:101,title:"MS Fabric Overview",slug:"/wiki/msfabric/overview",tags:["Data"]},sidebar:"tutorialSidebar",previous:{title:"Microsoft Fabric",permalink:"/category/microsoft-fabric"},next:{title:"Loading data via Gen2 Dataflow to Lakehouse table",permalink:"/wiki/msfabric/dataload2"}},l={},s=[{value:"Things we can do with MS Fabric (by no means a complete list)",id:"things-we-can-do-with-ms-fabric-by-no-means-a-complete-list",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ms-fabric-overview"},"MS Fabric Overview"),(0,i.kt)("h2",{id:"things-we-can-do-with-ms-fabric-by-no-means-a-complete-list"},"Things we can do with MS Fabric (by no means a complete list)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access a data table in a Lakehouse via a Gen2 Dataflow, manipulating the data and then loading it again to the same Lakehouse (e.g. implementation of Bronze-Silver-Gold architecture)"),(0,i.kt)("li",{parentName:"ul"},"Chain several Dataflows in a Pipeline and execute the whole chain. Send automatically an e-mail in case of success (or failure)")))}u.isMDXComponent=!0}}]);