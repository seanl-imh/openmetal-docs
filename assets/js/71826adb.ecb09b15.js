"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[5807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={slug:"/openmetal-central/how-to-add-ssh-keys-in-openmetal-central",description:"Learn how to add SSH keys to your private cloud in OpenMetal Central.",sidebar_position:4},l="Adding SSH Keys to your Private Cloud in OpenMetal Central",s={unversionedId:"openmetal-central/add-ssh-key-central",id:"openmetal-central/add-ssh-key-central",title:"Adding SSH Keys to your Private Cloud in OpenMetal Central",description:"Learn how to add SSH keys to your private cloud in OpenMetal Central.",source:"@site/docs/openmetal-central/add-ssh-key-central.md",sourceDirName:"openmetal-central",slug:"/openmetal-central/how-to-add-ssh-keys-in-openmetal-central",permalink:"/docs/manuals/openmetal-central/how-to-add-ssh-keys-in-openmetal-central",draft:!1,editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/openmetal-central/add-ssh-key-central.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/openmetal-central/how-to-add-ssh-keys-in-openmetal-central",description:"Learn how to add SSH keys to your private cloud in OpenMetal Central.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Creating a Support Request in OpenMetal Central",permalink:"/docs/manuals/openmetal-central/creating-a-support-request"},next:{title:"Enable Two-Factor Authentication for OpenMetal Central",permalink:"/docs/manuals/openmetal-central/enable-two-factor-authentication"}},c={},i=[{value:"Access your OpenMetal Central account",id:"access-your-openmetal-central-account",level:2},{value:"Adding your SSH key",id:"adding-your-ssh-key",level:2},{value:"Access your hardware nodes",id:"access-your-hardware-nodes",level:2}],p={toc:i};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-ssh-keys-to-your-private-cloud-in-openmetal-central"},"Adding SSH Keys to your Private Cloud in OpenMetal Central"),(0,r.kt)("p",null,"In this article you will learn how to add new SSH keys to your private cloud\nfrom your OpenMetal Central portal."),(0,r.kt)("h2",{id:"access-your-openmetal-central-account"},"Access your OpenMetal Central account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Login to your account at ",(0,r.kt)("a",{parentName:"li",href:"https://central.openmetal.io"},"OpenMetal Central"))),(0,r.kt)("h2",{id:"adding-your-ssh-key"},"Adding your SSH key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access your cloud settings."),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{alt:"Cloud Settings",src:n(1227).Z,width:"1278",height:"779"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Paste the text contents of your SSH public key into the ",(0,r.kt)("strong",{parentName:"p"},"Add SSH Key")," field and\nclick ",(0,r.kt)("strong",{parentName:"p"},"Add Key"),"."),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{alt:"Add SSH Key",src:n(2232).Z,width:"1269",height:"762"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You will see a pop-up at the bottom of the page indicating success."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": The ",(0,r.kt)("strong",{parentName:"p"},"Add SSH Key")," field does not clear upon task completion.")))),(0,r.kt)("h2",{id:"access-your-hardware-nodes"},"Access your hardware nodes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access your servers with the new key:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ssh -i ~/.ssh/your_key_name root@<server-ip>\n")))))}u.isMDXComponent=!0},2232:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-ssh-key-central-90c2161109f0f9b62eb1c31a4235afe8.png"},1227:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud-settings-ssh-1af33411db8e0487aaa3a7b4bc3f9ce3.png"}}]);