"use strict";(self.webpackChunkdata_and_analytics=self.webpackChunkdata_and_analytics||[]).push([[1877],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27161:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const s={sidebar_position:5,title:"6.5 | Data security - How access permissions are implemented",slug:"/6.5",tags:["tag1"]},o="6.5 | Data security - How access permissions are implemented",i={unversionedId:"book/chapter6/06-05-data-security",id:"book/chapter6/06-05-data-security",title:"6.5 | Data security - How access permissions are implemented",description:"6.5.1 | Introduction",source:"@site/docs/01-book/01-chapter6/06-05-data-security.md",sourceDirName:"01-book/01-chapter6",slug:"/6.5",permalink:"/6.5",draft:!1,tags:[{label:"tag1",permalink:"/tags/tag-1"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"6.5 | Data security - How access permissions are implemented",slug:"/6.5",tags:["tag1"]},sidebar:"tutorialSidebar",previous:{title:"6.4 | Working with reports to explore and analyze data",permalink:"/6.4"},next:{title:"6.6 | Row Level Security (RLS) implementation",permalink:"/6.6"}},l={},c=[{value:"6.5.1 | Introduction",id:"651--introduction",level:2},{value:"6.5.2 | Roles and their permissions",id:"652--roles-and-their-permissions",level:2},{value:"6.5.3 | Recommendation for a simple and robust implementation",id:"653--recommendation-for-a-simple-and-robust-implementation",level:2}],p={toc:c};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"65--data-security---how-access-permissions-are-implemented"},"6.5 | Data security - How access permissions are implemented"),(0,r.kt)("h2",{id:"651--introduction"},"6.5.1 | Introduction"),(0,r.kt)("p",null,"When implementing a BI solution, we want to make sure that the data and the dashboards are distributed only to people who should have access to them, given by the specific company policy in place. Power BI allows to control user access in the Power BI Service on various different levels which makes it possible to reflect the different roles users can have."),(0,r.kt)("p",null,"The following illustration summarizes the different levels of user access controls in the Power BI Service. I have already shown in in chapter VERWEIS to introduce the topic in general."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"02-19",src:a(43269).Z,width:"1601",height:"897"})),(0,r.kt)("p",null,"According to that, access permissions are controlled on the following levels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Power BI tenant"),": A user can be a Power BI administrator which allows her for example to change the tenant settings. Please note, this role is given to a user in the Microsoft 365 admin center"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Workspace"),": For each workspace, we can give roles to users which define the permissions on all content that is inside that workspace. With that, certain permissions on datasets and reports are automatically acquired via the workspace roles"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dataset / Report"),": If we want to control access permissions for the individual datasets and reports, we can give roles to users on either. These roles define what a user can do with a specific dataset and report"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Row level security (RLS)"),": With the RLS, we control which user can see which scope of data in a given dataset. This security mechanism is configured in a specific dataset. It can be simple, like for example the head of business unit A can only see sales for business unit A. But it can also be more complex and for example reflect a matrix organization (e.g. of a business and regional structure)")),(0,r.kt)("h2",{id:"652--roles-and-their-permissions"},"6.5.2 | Roles and their permissions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Workspace")),(0,r.kt)("p",null,"The roles we can give a user on workspace level can be summarized as following: A ",(0,r.kt)("strong",{parentName:"p"},"Viewer")," can see and access all content within the workspace. Both a ",(0,r.kt)("strong",{parentName:"p"},"Contributor")," and ",(0,r.kt)("strong",{parentName:"p"},"Member")," can create or edit content, while the ",(0,r.kt)("strong",{parentName:"p"},"Member")," can also manage access permissions. The ",(0,r.kt)("strong",{parentName:"p"},"Admin")," can do everything, including deleting the workspace."),(0,r.kt)("p",null,"For more details, I recommend the official Microsoft documentation: ",(0,r.kt)("ins",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces"},"https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Datasets and Reports")),(0,r.kt)("p",null,"For a report, a user can either have ",(0,r.kt)("strong",{parentName:"p"},"Read")," or ",(0,r.kt)("em",{parentName:"p"},"Reshare")," (self-explaining). On the dataset, roles are more nuanced: ",(0,r.kt)("strong",{parentName:"p"},"Read")," is required to actually view data in an associated report. With ",(0,r.kt)("strong",{parentName:"p"},"Build"),", a user can create a report based on the dataset and also use the Analyze in Excel feature. ",(0,r.kt)("strong",{parentName:"p"},"Write")," allows to overwrite (republish) the dataset."),(0,r.kt)("p",null,"As for the workspaces, there is a good documentation on dataset permissions available as well: ",(0,r.kt)("ins",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-permissions"},"https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-permissions"))),(0,r.kt)("h2",{id:"653--recommendation-for-a-simple-and-robust-implementation"},"6.5.3 | Recommendation for a simple and robust implementation"),(0,r.kt)("p",null,"The multi-level access permission settings in Power BI can be confusing at first as there are possibly endless combinations of which roles can be given to users. I would therefore like to introduce a simple access permission model which I used many times in my projects for customers. The following table summarizes the model:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"03-142",src:a(76214).Z,width:"1314",height:"746"})),(0,r.kt)("p",null,"Essentially, ",(0,r.kt)("strong",{parentName:"p"},"end users"),' do not have a role on the workspace level but permissions are controlled on the individual dataset / report level. This allows for more flexibility in who can access which content inside the workspace. The end user will access reports via the "Shared with me" navigation accordingly. If an end user shall also work with the Analyze in Excel feature, i.e. connecting with Excel directly with a published dataset, that user needs Build permissions on the respective dataset.'),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"power user")," should be able to create new reports and datasets inside a workspace and also use existing datasets to create new content (see composite models in chapter VERWEIS). If a power user from another team needs to use an existing dataset, it is sufficient if that user has Build permissions on that dataset. Please note, a power user can also be an admin on the workspace if that is feasible and makes things simpler."))}d.isMDXComponent=!0},43269:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_02-19-58794cd423a28b112e1d7055da5c38b6.png"},76214:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_book_03-142-9ce8142f4d61a310f7dd8aefde6e8f81.png"}}]);