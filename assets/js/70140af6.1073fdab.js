"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[5916],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3665:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"/engineers-notes/vpc-in-the-context-of-openstack",description:"A comparison of the private cloud VPC concept in the context of an OpenStack private cloud."},p="VPC in the Context of OpenStack",c={unversionedId:"engineers-notes/vpc-and-openstack",id:"engineers-notes/vpc-and-openstack",title:"VPC in the Context of OpenStack",description:"A comparison of the private cloud VPC concept in the context of an OpenStack private cloud.",source:"@site/docs/engineers-notes/vpc-and-openstack.md",sourceDirName:"engineers-notes",slug:"/engineers-notes/vpc-in-the-context-of-openstack",permalink:"/docs/manuals/engineers-notes/vpc-in-the-context-of-openstack",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/engineers-notes/vpc-and-openstack.md",tags:[],version:"current",frontMatter:{slug:"/engineers-notes/vpc-in-the-context-of-openstack",description:"A comparison of the private cloud VPC concept in the context of an OpenStack private cloud."},sidebar:"tutorialSidebar",previous:{title:"Kubernetes - Failed to detach Persistent Volume",permalink:"/docs/manuals/engineers-notes/kubernetes-failed-to-detach-persistent-volume"},next:{title:"OpenMetal Central",permalink:"/docs/manuals/openmetal-central/"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"VPC using OpenStack",id:"vpc-using-openstack",children:[{value:"Projects",id:"projects",children:[],level:3},{value:"Users",id:"users",children:[],level:3},{value:"Quotas",id:"quotas",children:[],level:3}],level:2},{value:"Recap",id:"recap",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vpc-in-the-context-of-openstack"},"VPC in the Context of OpenStack"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Many public cloud providers allow you to utilize Virtual Private Clouds (VPC).\nIn this context a VPC is a logically isolated virtual network dedicated to a\nprivate cloud account."),(0,o.kt)("p",null,"While there is currently no 1:1 comparison in OpenStack a simplified version\nwould be as follows."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"VPC Features"),(0,o.kt)("th",{parentName:"tr",align:"center"},"OpenStack Features"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"VPC"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Subnets"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Networks")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"DHCP options"),(0,o.kt)("td",{parentName:"tr",align:"center"},"IPAM")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Elastic IP"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Floating IP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Network ACLs"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Network ACLs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Security groups"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Security groups")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Route Table"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Route Table")))),(0,o.kt)("p",null,"The OpenStack community has a blueprint in place with the goal of creating\nadditional parity with the VPC concept which can be reviewed on the\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.openstack.org/wiki/Blueprint-VPC"},"OpenStack Wiki")),(0,o.kt)("p",null,"There is also an ongoing efforts to expand the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.openstack.org/wiki/Blueprint-aws-vpc-support"},"OpenStack EC2 API"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.openstack.org/wiki/Heat/VPC_Resources_Support"},"Heat project"),"\nto that same end."),(0,o.kt)("p",null,"In future articles we will be delving deeper into OpenStack private cloud\nresource isolation, and it's relation to public cloud VPCs."),(0,o.kt)("h2",{id:"vpc-using-openstack"},"VPC using OpenStack"),(0,o.kt)("h3",{id:"projects"},"Projects"),(0,o.kt)("p",null,"Projects in OpenStack separate your cloud infrastructure from other workloads.\nIf you have multiple DevOps teams with varying workloads and use cases each team\ncan be provided a project tailored to their resource requirements."),(0,o.kt)("h3",{id:"users"},"Users"),(0,o.kt)("p",null,"In this context users are any entity requiring access to resources. This may be\nadministrators, regular users or automated tasks and actions requiring varying\nlevels of access to cloud infrastructure. In combination with projects and\nquotas you are provided with fine-grained control of who and what can access\nresources while maintaining accountability with comprehensive logging."),(0,o.kt)("p",null,"Refer to the OpenStack documentation for additional information regarding\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/operations-guide/ops-projects-users.html"},"Managing Projects and Users"),"."),(0,o.kt)("h3",{id:"quotas"},"Quotas"),(0,o.kt)("p",null,"Quotas are operational limits you can use to prevent system capacity exhaustion\nwithout notification. Quotas are currently enforced at the project, rather than\nuser, level and are broken down to Image, Compute, and Storage (Object and Block)."),(0,o.kt)("p",null,"The table below (extracted from the OpenStack documentation) summarizes available\noptions for the most commonly implemented limits, Compute Service quotas."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Quota"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Property name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Fixed IPs"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of fixed IP addresses allowed per project. This number must be equal to or greater than the number of allowed instances."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"fixed-ips"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Floating IPs"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of floating IP addresses allowed per project."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"floating-ips"),"{.docutils .literal}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Injected file content bytes"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of content bytes allowed per injected file."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"injected-file-conten t-bytes"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Injected file path bytes"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of bytes allowed per injected file path."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"injected-file-path-bytes"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Injected files"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of injected files allowed per project."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"injected-files"),"{.docutils .literal}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Instances"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of instances allowed per project."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"instances"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Key pairs"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of key pairs allowed per user."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"key-pairs"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Metadata items"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of metadata items allowed per instance."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"metadata-items"),"{.docutils .literal}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RAM"),(0,o.kt)("td",{parentName:"tr",align:null},"Megabytes of instance RAM allowed per project."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ram"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Security group rules"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of security group rules per project."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"security-group-rules"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Security groups"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of security groups per project."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"security-groups"),"{.docutils .literal}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VCPUs"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of instance cores allowed per project."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cores"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Server Groups"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of server groups per project."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server_groups"),"{.docutils .literal}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Server Group Members"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of servers per server group."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"server_group_members"))))),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.openstack.org/wiki/Quotas"},"upstream documentation")," for\nadditional information on quota management."),(0,o.kt)("h2",{id:"recap"},"Recap"),(0,o.kt)("p",null,"In OpenStack a project provides logical isolation of all resources generated\nwithin. Users and roles can be used to provide fine-grained access to specific\nresources within a project for further isolation. As projects can span resources\nacross all accessible availability zones they provide the core isolation\ninherent in the virtual private cloud concept."))}d.isMDXComponent=!0}}]);