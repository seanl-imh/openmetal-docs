"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[8134],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2602:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s="How Private Clouds are Deployed",c={unversionedId:"operators-manual/day-2/private-cloud-deployment-overview",id:"operators-manual/day-2/private-cloud-deployment-overview",title:"How Private Clouds are Deployed",description:"Introduction",source:"@site/docs/operators-manual/day-2/private-cloud-deployment-overview.md",sourceDirName:"operators-manual/day-2",slug:"/operators-manual/day-2/private-cloud-deployment-overview",permalink:"/openmetal-docs/docs/operators-manual/day-2/private-cloud-deployment-overview",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-2/private-cloud-deployment-overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Maintaining OpenStack Software Updates",permalink:"/openmetal-docs/docs/operators-manual/day-2/maintenance"},next:{title:"How to Add Additional Provider IP Blocks",permalink:"/openmetal-docs/docs/operators-manual/day-3/add-provider-ips"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Initial Deployment",id:"initial-deployment",children:[],level:2},{value:"Containerization of OpenStack",id:"containerization-of-openstack",children:[{value:"Advantages of Containerization Through Docker",id:"advantages-of-containerization-through-docker",children:[],level:3}],level:2},{value:"Disk Storage and Ceph",id:"disk-storage-and-ceph",children:[{value:"Object Storage",id:"object-storage",children:[],level:3},{value:"Block Storage",id:"block-storage",children:[],level:3},{value:"Advantages of using Ceph",id:"advantages-of-using-ceph",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-private-clouds-are-deployed"},"How Private Clouds are Deployed"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This section details how your Private Cloud was deployed and provides\nsupplemental information regarding your environment. OpenStack can be\ndeployed in several different ways and this section highlights the\ncharacteristics of your Private Cloud. We also explain some of the\nadvantages for this type of deployment and areas that are unique to\nOpenMetal."),(0,a.kt)("h2",{id:"initial-deployment"},"Initial Deployment"),(0,a.kt)("p",null,"In OpenMetal, OpenStack is containerized through Docker using Kolla\nAnsible. This is done through an initial deployment container called\nFM-Deploy. FM-Deploy provides the initial setup changes during the\nprovisioning process of your Private Cloud. The FM-Deploy Container is a\nnecessary part of the current architecture of your Private Cloud. The\nFM-Deploy Container should remain running in your Private Cloud as it is\nused by our systems in the event you want to add or remove nodes from\nyour cloud."),(0,a.kt)("h2",{id:"containerization-of-openstack"},"Containerization of OpenStack"),(0,a.kt)("p",null,"OpenMetal uses Kolla Ansible to set up Docker containers for all running\nservices. Should you need to make any configuration changes to your\nnodes, Kolla Ansible should be used to push these changes. If Kolla\nAnsible is not used then there is a risk of these changes being reverted\nduring any system updates."),(0,a.kt)("h3",{id:"advantages-of-containerization-through-docker"},"Advantages of Containerization Through Docker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Containers create an isolated environment reducing software\ndependencies"),(0,a.kt)("li",{parentName:"ul"},"Containers can be scaled and allow for services to balance across\nyour cluster"),(0,a.kt)("li",{parentName:"ul"},"Containers provide increased flexibility for test releases, patches,\nand automation"),(0,a.kt)("li",{parentName:"ul"},"Containers have a consistent and repeatable deployment and a shorter\ninitialization time")),(0,a.kt)("h2",{id:"disk-storage-and-ceph"},"Disk Storage and Ceph"),(0,a.kt)("p",null,"In OpenMetal, disk storage is provided through Ceph. Ceph is an object\nstorage interface that can provide interfaces for multiple different\nstorage types on a single cluster. In OpenMetal Ceph is comprised of two\nelements object storage and block storage:"),(0,a.kt)("h3",{id:"object-storage"},"Object Storage"),(0,a.kt)("p",null,"Ceph Object storage utilizes Ceph Object Storage Gateway daemon\n(RADOSGW). With OpenMetal clouds, Ceph's RGW replaces Swift so there is\nno Docker container for Swift. Instead, Swift endpoints are connected\ndirectly to the RGW. Authentication for RGW is handled through Keystone\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/ceph/ceph.conf"),"."),(0,a.kt)("h3",{id:"block-storage"},"Block Storage"),(0,a.kt)("p",null,"Ceph Block storage connects to the Cinder service utilizing Ceph's RADOS\nBlock Device. Within your cloud, those objects are stored in Ceph pools.\nCeph provides a layer of abstraction that allows objects to be\nrecognized as blocks."),(0,a.kt)("h3",{id:"advantages-of-using-ceph"},"Advantages of using Ceph"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data is self-healing and will redistribute data across your cluster\nin the event of power, hardware, or connectivity issues"),(0,a.kt)("li",{parentName:"ul"},"Data is replicated and highly available"),(0,a.kt)("li",{parentName:"ul"},"Ceph has the ability to run on commodity hardware and to mix\nhardware from different vendors")))}p.isMDXComponent=!0}}]);