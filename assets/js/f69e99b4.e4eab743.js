"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[3786],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},950:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={},l="Backing Up Your Data",u={unversionedId:"tutorials/backing-up-your-data",id:"tutorials/backing-up-your-data",title:"Backing Up Your Data",description:"Overview",source:"@site/docs/tutorials/backing-up-your-data.md",sourceDirName:"tutorials",slug:"/tutorials/backing-up-your-data",permalink:"/docs/manuals/tutorials/backing-up-your-data",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/tutorials/backing-up-your-data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a Site-to-Site VPN Connection with Endpoint Groups",permalink:"/docs/manuals/tutorials/create-site-to-site-vpn"},next:{title:"How to install and configure Barbican on your OpenMetal Cloud",permalink:"/docs/manuals/tutorials/install-configure-barbican-openmetal"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Determining needs",id:"determining-needs",children:[{value:"What to back up",id:"what-to-back-up",children:[],level:3},{value:"When to back up",id:"when-to-back-up",children:[],level:3}],level:2},{value:"Where to store backups",id:"where-to-store-backups",children:[],level:2},{value:"Backup rotation",id:"backup-rotation",children:[],level:2}],p={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backing-up-your-data"},"Backing Up Your Data"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"If you store any customer of personal data on your VMs, it is important to make\nregular backups. As data can be corrupted or become otherwise inaccessible for\na number of reasons (accidental deletion, misconfigurations, hacking, etc).\nHaving a recent backup on hand makes it much easier to recover from the\nunforeseen."),(0,o.kt)("h2",{id:"determining-needs"},"Determining needs"),(0,o.kt)("p",null,"Backups are never one-size-fits-all. Prior to making your first backup, it is\nimportant to consider what needs to be backed up in your environment."),(0,o.kt)("h3",{id:"what-to-back-up"},"What to back up"),(0,o.kt)("p",null,"Consider what data on your VM would be difficult or impossible to replace if\nlost. Here are some common examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CMS websites"),": Websites such as those built on WordPress, Drupal, and\nMagento, store content in a database. Make sure a database dump is included\nin your backup.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Email"),": If you run a mail server on your VM, you should back up the raw\nmail files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Media"),": Images, videos and audio files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Customer Data"),": Data related to customer sales and financial transactions\nare often stored in a database, if this is the case you will want to include\na database dump in your backup.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Custom backend"),": If your VM took a long time to set up or is otherwise\nhighly customized, consider performing a root level backup of the entire\nserver. At minimum your software configuration settings should be stored, in\naddition to your pubic-facing content."))),(0,o.kt)("p",null,"Once you have determined the items that need to be backed up, locate those\nfiles on your server. Make a list of the specific file paths and any related\ndatabases for each item."),(0,o.kt)("p",null,"The type of backup you create is also important as its format affects what can\nbe done with it later. Consider the circumstances under which you will be\nperforming the restoration to determine the best backup method for your\nenvironment. Two basic types of backup are outlined below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"File-system backup"),": This method consists of copying all or part of your\nfile-system, along with its structure and permissions. It is good for HTML\nfiles, software configuration files, email, and media. If you later restore\nthe file system backup to a VM, it should work as it did before. If files\nare backed up without preserving their permissions, you will have the content,\nbut it may increase the time it will take to get a restoration working.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Database dump"),": File-system backups are usually not the best choice when\nbacking up databases. A full-server snapshot will of course also restore your\ndatabases, but raw database files are fairly useless in a partial backup context.\nRunning a SQL dump or something similar is better: you will get a human-readable\nfile of SQL commands, which can then be imported to any other server running\nthe same database type."))),(0,o.kt)("p",null,"Determine the type of backup you need (file-system backup, database dump, or\nboth). If both are needed the database dump should be made first so that the\ndump file can be saved as part of the file-system backup."),(0,o.kt)("h3",{id:"when-to-back-up"},"When to back up"),(0,o.kt)("p",null,"Next you should consider how often your data needs to be backed up. The primary\nconcern should be how often the server content changes, and how critical it is\nthat those changes are captured. Here we outline recommended backup intervals\nfor some common configurations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Online Store"),": At least daily"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Blog or news site"),": As often as it's updated"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Development server"),": As often as you make changes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Game server"),": At least daily"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Static site"),": Every six months, or before and after making significant changes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Email server"),": At least daily")),(0,o.kt)("p",null,"Your requirements should help to determine if a manual backup tool is sufficient\nor an automated process is needed."),(0,o.kt)("h2",{id:"where-to-store-backups"},"Where to store backups"),(0,o.kt)("p",null,"You should now think about where you want to store your backups. Some popular\nstorage locations are outlined here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Same server"),": While this is the easiest place to store your backups, it\nis not recommended for anything other than temporary storage. If your server\nbecomes corrupted, accidentally erased or hacked at the root level, your\nbackups will also be lost.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Different server"),": The most secure option is to create a server dedicated\nto storing backups. When following best practices this server will be isolated\nfrom your production environment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Personal device"),": You can back up to your desktop computer or a portable\nhard drive. However, your home office is probably not as secure as a\nprofessional data center, and your hardware is likely not as resilient."))),(0,o.kt)("p",null,"You should also consider how many backups your storage platform can hold. In\nmost cases you will want to save ",(0,o.kt)("em",{parentName:"p"},"at least")," two backups (an older, reliable\ncopy and a recent one). It is always best to save more backups as the quantity\nis only limited by your available disk space."),(0,o.kt)("h2",{id:"backup-rotation"},"Backup rotation"),(0,o.kt)("p",null,"Lastly, you should decide how long to retain your backups and how many to store\nat once. While one backup is better than none, in most cases you will want\n",(0,o.kt)("em",{parentName:"p"},"at least")," two. For example, if you replace your backup every day, and don\u2019t\nretain any of your old ones, you would be out of luck if you discovered that\nyour website had been hacked a week ago. The safest option is to store backups\nas frequently as possible without overwriting them. Just make sure you don\u2019t\nrun out of space on your backup machine! Backup methods that include compression\nand other efficiencies make storing multiple backups much easier."))}d.isMDXComponent=!0}}]);