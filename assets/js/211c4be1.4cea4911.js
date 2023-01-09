"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[9739],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return t?o.createElement(f,a(a({ref:n},u),{},{components:t})):o.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(7462),i=(t(7294),t(3905));const r={slug:"/cloud-administration/intro-to-cloud-init",description:"Introduction to cloud-init for Linux cloud instance initialization."},a="Intro to cloud-init",l={unversionedId:"engineers-notes/intro-to-cloud-init",id:"engineers-notes/intro-to-cloud-init",title:"Intro to cloud-init",description:"Introduction to cloud-init for Linux cloud instance initialization.",source:"@site/docs/engineers-notes/intro-to-cloud-init.md",sourceDirName:"engineers-notes",slug:"/cloud-administration/intro-to-cloud-init",permalink:"/docs/manuals/cloud-administration/intro-to-cloud-init",draft:!1,editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/engineers-notes/intro-to-cloud-init.md",tags:[],version:"current",frontMatter:{slug:"/cloud-administration/intro-to-cloud-init",description:"Introduction to cloud-init for Linux cloud instance initialization."},sidebar:"tutorialSidebar",previous:{title:"Cloud Physical Resource Usage - Custom Datadog Dashboard",permalink:"/docs/manuals/openstack-admin/cloud-resource-usage-dashboard"},next:{title:"Kubernetes - Failed to detach Persistent Volume",permalink:"/docs/manuals/engineers-notes/kubernetes-failed-to-detach-persistent-volume"}},s={},c=[{value:"Using a cloud-config script",id:"using-a-cloud-config-script",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro-to-cloud-init"},"Intro to cloud-init"),(0,i.kt)("p",null,"Cloud-init is an industry standard method for Linux cloud instance initialization.\nCloud-init has support across all major Linux distributions, FreeBSD, NetBSD and\nOpenBSD. It is also supported across all major public cloud providers,\nprovisioning systems for private cloud infrastructure, and bare-metal installations."),(0,i.kt)("p",null,"Cloud-init will identify the cloud it is running on, using the provided metadata\nfrom the cloud, and configure the system accordingly. Tasks can include things\nlike networking configurations, drive setup, SSH access, and other server\ntasks before you even log into the server."),(0,i.kt)("h2",{id:"using-a-cloud-config-script"},"Using a cloud-config script"),(0,i.kt)("p",null,"More than likely you will pass a cloud-config script to the server on provision.\nThis will get picked up by cloud-init and actions in the file are carried out.\nThe cloud-config script is a YAML formatted file. YAML is a human-readable data\nserialization standard that is generally used for configuration files, but can\nhave various other uses as well."),(0,i.kt)("p",null,"When creating a cloud-config file you will want to place a special identifier of\n",(0,i.kt)("inlineCode",{parentName:"p"},"#cloud-config")," so that cloud-init can be aware of the set of instructions it's\nabout to receive."),(0,i.kt)("p",null,"Below we will go over some examples of cloud-configs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#cloud-config\n\nusers:\n  - default\n  - name: omi-admin\n    groups: sudo\n    shell: /bin/bash\n    sudo: ['ALL=(ALL) NOPASSWD:ALL']\n    SSH-authorized-keys:\n      - SSH-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDE0PUM9qcLkttJp330AHwp7M5kNQ5YQCU0iE0NhZkK8nTxJ3NelTST739nlaQxCYIdPhMegJQgNqsVkcZ2daaRYlc8fWGnzRYfL+f9AgM5fGAAmveBFYajZe/5Kp+81IYcfLQhfoWTvytoBq9gmn0PwwFsLlwe138r6M2aaWJl80V/mDp2BiAwDh0xJYR2+Ei7AD4O66lAeZJhjqaue/Ctpez4MpXp2XRufErsmCBHX9bN0wVPWNNJgrfTIBhrDqr1JbMHZo73d5iQntxJAmc1+y8qTueUGpiitC5Fl/jKyLycIjOM4OPpKgsvc1DtT+UWudfzG2kpAYJWaA3t6r8IxMS6a/9leavL7TKUcoAdqQahB75iJ38CZKxVB0sF0xxxyBS2JtMokHfex6bHtWS0D0eBwpQZPSKT18egmal4sFEcQwxEHeqK16U+9N01hv7KatImG2pHUQJxmtPmdRMOhltFOQCmIfm21mHxsXgaYY8In5xbZD1Lg05FYmOmwgE= omi-admin@example.io\n")),(0,i.kt)("p",null,"In this example we are creating a new user, ",(0,i.kt)("inlineCode",{parentName:"p"},"omi-admin"),", giving that user sudo\naccess, and specifying a public SSH key to simplify SSH access."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#cloud-config\npackage_upgrade: true\npackages:\n  - python3-pip\n  - python3-dev\n  - build-essential\n  - libssl-dev\n  - libffi-dev\n")),(0,i.kt)("p",null,"In the example above we ensure that all packages are up-to-date, and ensure\nspecific packages are installed on the server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"#cloud-config\nmanage-resolv-conf: true\nresolv_conf:\n  nameservers:\n    - '9.9.9.9' #quad9\n    - '8.8.8.8' #google\n")),(0,i.kt)("p",null,"Our last example sets the server to use the specified resolvers."))}d.isMDXComponent=!0}}]);