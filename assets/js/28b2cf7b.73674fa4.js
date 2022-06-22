"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[862],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6593:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},p="Create a User and Project in OpenStack Horizon",c={unversionedId:"operators-manual/day-1/horizon/create-user-project",id:"operators-manual/day-1/horizon/create-user-project",title:"Create a User and Project in OpenStack Horizon",description:"Introduction",source:"@site/docs/operators-manual/day-1/horizon/create-user-project.md",sourceDirName:"operators-manual/day-1/horizon",slug:"/operators-manual/day-1/horizon/create-user-project",permalink:"/openmetal-docs/docs/operators-manual/day-1/horizon/create-user-project",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-1/horizon/create-user-project.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Create an Instance in OpenStack Horizon",permalink:"/openmetal-docs/docs/operators-manual/day-1/horizon/create-first-instance"},next:{title:"Getting Started with OpenStack Horizon",permalink:"/openmetal-docs/docs/operators-manual/day-1/horizon/getting-started-with-horizon"}},l=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Quick Overview: Project, Admin, and Identity Tabs",id:"quick-overview-project-admin-and-identity-tabs",children:[],level:2},{value:"How to Create a Project",id:"how-to-create-a-project",children:[{value:"Create your First Project",id:"create-your-first-project",children:[],level:3},{value:"Project Quotas",id:"project-quotas",children:[],level:3}],level:2},{value:"How to Create a User and Associate with Project",id:"how-to-create-a-user-and-associate-with-project",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],u={toc:l};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-user-and-project-in-openstack-horizon"},"Create a User and Project in OpenStack Horizon"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In OpenStack, the cloud is divided through the use of projects. Projects\nhave associated with them users, who have differing levels of access,\ndefined by roles. An administrator defines resource limits per project\nby modifying quotas. In this guide, we explain how to create a project\nand associate a user with it. Additionally, we explain how project\nquotas can be adjusted."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"create-user-project#quick-overview-project-admin-and-identity-tabs"},"Quick Overview: Project, Admin, and Identity\nTabs"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"create-user-project#how-to-create-a-project"},"How to Create a\nProject")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"create-user-project#create-your-first-project"},"Create your First\nProject")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"create-user-project#project-quotas"},"Project\nQuotas")))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"create-user-project#how-to-create-a-user-and-associate-with-project"},"How to Create a User and Associate with\nProject"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"create-user-project#reference"},"Reference")))),(0,o.kt)("h2",{id:"quick-overview-project-admin-and-identity-tabs"},"Quick Overview: Project, Admin, and Identity Tabs"),(0,o.kt)("p",null,"Upon initially logging in to Horizon as ",(0,o.kt)("strong",{parentName:"p"},"admin"),", you see on the left\ntabs that group areas together. The three primary tabs seen are\n",(0,o.kt)("strong",{parentName:"p"},"Project"),", ",(0,o.kt)("strong",{parentName:"p"},"Admin"),", and ",(0,o.kt)("strong",{parentName:"p"},"Identity"),". Only a user with the ",(0,o.kt)("strong",{parentName:"p"},"admin"),"\nrole sees the ",(0,o.kt)("strong",{parentName:"p"},"Admin")," tab. Administrative functions, such as live\nmigrating an instance, occurs through the ",(0,o.kt)("strong",{parentName:"p"},"Admin")," section. Project\nusers with the ",(0,o.kt)("strong",{parentName:"p"},"member")," role see only the ",(0,o.kt)("strong",{parentName:"p"},"Project")," and ",(0,o.kt)("strong",{parentName:"p"},"Identity"),"\ntabs and can only perform actions within their specific project."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(6760).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 1:")," Project, Admin, Identity tabs"),(0,o.kt)("h2",{id:"how-to-create-a-project"},"How to Create a Project"),(0,o.kt)("p",null,"When you first log in to Horizon as the administrator account, you find\nyourself in the project called ",(0,o.kt)("strong",{parentName:"p"},"admin"),". You can see this by looking at\nthe very top and near the left of the screen."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(6738).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 2:")," Admin Project Overview"),(0,o.kt)("p",null,"The left most column contains links to different areas in which\ndifferent tasks can be performed. There are three primary groupings:\n",(0,o.kt)("strong",{parentName:"p"},"Project"),", ",(0,o.kt)("strong",{parentName:"p"},"Admin"),", and ",(0,o.kt)("strong",{parentName:"p"},"Identity"),". Only an account with the\nadministrator role can see the ",(0,o.kt)("strong",{parentName:"p"},"Admin")," tab. The ",(0,o.kt)("strong",{parentName:"p"},"Identity")," tab is\nused to create a project."),(0,o.kt)("h3",{id:"create-your-first-project"},"Create your First Project"),(0,o.kt)("p",null,"To create your first project, navigate to ",(0,o.kt)("strong",{parentName:"p"},"Identity -",">"," Projects"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(4578).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 3:")," Project Listing"),(0,o.kt)("p",null,"Several projects already exist, including the ",(0,o.kt)("strong",{parentName:"p"},"admin")," project. These\nprojects are deployed by default and generally should not be modified."),(0,o.kt)("p",null,"Pull up the form to create a project by navigating to the ",(0,o.kt)("strong",{parentName:"p"},"Create\nProject")," button near the top right."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(1063).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 4:")," Create Project Form"),(0,o.kt)("p",null,"Under the ",(0,o.kt)("strong",{parentName:"p"},"Name")," field, specify a name for the project. This example\nproject is called ",(0,o.kt)("strong",{parentName:"p"},"Development"),". There are tabs for adding Project\nMembers and Project Groups, but these are not covered for this\ndemonstration. This guide later explains how to create a user and attach\nit to this project. Click ",(0,o.kt)("strong",{parentName:"p"},"Create Project")," to finish creating the\nfirst project."),(0,o.kt)("p",null,"Once created, the project appears in the Project Listing page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(9452).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 5:")," Development Project Listed"),(0,o.kt)("h3",{id:"project-quotas"},"Project Quotas"),(0,o.kt)("p",null,"While in the project listing page, you can view and adjust quotas for\nthis project as the ",(0,o.kt)("strong",{parentName:"p"},"admin")," user. Quotas are limits on resources, like\nthe number of instances for example."),(0,o.kt)("p",null,"To view the quotas for this project while in ",(0,o.kt)("strong",{parentName:"p"},"Identity -",">"," Projects"),"\ntab, find the drop down to the right with the first option being\n",(0,o.kt)("strong",{parentName:"p"},"Manage Members"),". From this drop down, click ",(0,o.kt)("strong",{parentName:"p"},"Modify Quotas")," to view\nthe default quota values."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(1311).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 6:")," Modify Quotas"),(0,o.kt)("p",null,"A form appears with several tabs and you are presented with the quotas\nfor the Compute service. Quotas exist for the Volume and Network\nservices as well."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(5883).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 7:")," Edit Quotas"),(0,o.kt)("p",null,"You may want to adjust the parameters in this form depending on your\nworkload."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note","!")," -- We have seen issues appears where an item, like an\ninstance, cannot be created. This is often related to a hard limit set\nfor a specific quota. Typically the error message received indicates the\nquota has been reached."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note","!")," -- Setting a value to ",(0,o.kt)("inlineCode",{parentName:"p"},"-1")," means that quota is unlimited."),(0,o.kt)("h2",{id:"how-to-create-a-user-and-associate-with-project"},"How to Create a User and Associate with Project"),(0,o.kt)("p",null,"With your first project created, you can now create and associate a user\nwith it. The intention of this guide is to have you create a user,\nassociate it with the project created earlier, and then log out of\nHorizon as ",(0,o.kt)("strong",{parentName:"p"},"admin"),", and log back in with the new user."),(0,o.kt)("p",null,"To create a user, first navigate as ",(0,o.kt)("strong",{parentName:"p"},"admin")," to ",(0,o.kt)("strong",{parentName:"p"},"Identity -",">"," Users"),".\nBy default, there are several users already listed, and this is\nexpected. These are created during cloud deployment and should generally\nnot be modified."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(357).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 8:")," User Listing"),(0,o.kt)("p",null,"Next, load the form to create a user by navigating to ",(0,o.kt)("strong",{parentName:"p"},"Create User")," in\nthe upper right of the screen."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(9936).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 9:")," Create User Form"),(0,o.kt)("p",null,"For this example, we set values for ",(0,o.kt)("strong",{parentName:"p"},"User Name"),", ",(0,o.kt)("strong",{parentName:"p"},"Password"),",\n",(0,o.kt)("strong",{parentName:"p"},"Primary Project"),", and ",(0,o.kt)("strong",{parentName:"p"},"Role"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User Name"),": Specify your user here"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password"),": Set a unique, randomly generated password"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Email"),": Optional, but is useful for password resets"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Primary Project"),": Choose the project created earlier"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Role"),": This example selects the ",(0,o.kt)("inlineCode",{parentName:"li"},"member")," role")),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"Role"),", there are several options, depending on the level of\naccess required. The default OpenStack roles are ",(0,o.kt)("strong",{parentName:"p"},"reader"),", ",(0,o.kt)("strong",{parentName:"p"},"member"),",\nand ",(0,o.kt)("strong",{parentName:"p"},"admin"),". Additional roles exist in the drop down, which is\nexpected. This example sets the role ",(0,o.kt)("strong",{parentName:"p"},"member")," for this user. For more\nabout roles in OpenStack, see the latest ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/keystone/latest/admin/service-api-protection.html"},"Keystone Default Roles\ndocumentation"),"."),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},"Create User")," to create the user."),(0,o.kt)("p",null,"Next, log out of Horizon as ",(0,o.kt)("strong",{parentName:"p"},"admin"),", and log back in with your new\nuser. Upon logging back in you are by default in the newly created\nproject. You can see the project you are currently in at the top left\nand your user can be seen at the top right of Horizon."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(2747).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 10:")," New User Login"),(0,o.kt)("p",null,"For the rest of this guide, we assume you are working out of the newly\ncreated project and using the user associated with it."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/horizon/victoria/admin/index.html"},"OpenStack Victoria Horizon Administrator\nGuide")))}d.isMDXComponent=!0},6738:function(e,t,r){t.Z=r.p+"assets/images/admin-project-5229c147fddf83406eb1fa8056785814.png"},9936:function(e,t,r){t.Z=r.p+"assets/images/create-user-form-dbd24bc11b073d473d15a4d31589ff71.png"},9452:function(e,t,r){t.Z=r.p+"assets/images/dev-project-listing-3f9799ccfcbd037da784becf92fbaf86.png"},5883:function(e,t,r){t.Z=r.p+"assets/images/edit-quotas-66063b724e4d2b4c5288d5ab1f791661.png"},2747:function(e,t,r){t.Z=r.p+"assets/images/login-as-user-horizon-453b95345207b34dc22d43cfd765cfa3.png"},1311:function(e,t,r){t.Z=r.p+"assets/images/modify-quotas-e532440384858102f628f7651e87cc72.png"},6760:function(e,t,r){t.Z=r.p+"assets/images/project-admin-identity-26b4c5f307f7c87b9f7505dcde7fbcb6.png"},1063:function(e,t,r){t.Z=r.p+"assets/images/project-form-eee3059b0637389b3e90fc7c7d13d2f5.png"},4578:function(e,t,r){t.Z=r.p+"assets/images/projects-27f8c46ae2fa8807442806284d10bbf7.png"},357:function(e,t,r){t.Z=r.p+"assets/images/users-a95237e074c3c91ae9a07b82b68badc2.png"}}]);