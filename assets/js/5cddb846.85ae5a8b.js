"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[8816],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(h,i(i({ref:a},c),{},{components:t})):n.createElement(h,i({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3470:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={},s="OpenStack Operator's Manual - Private Cloud Core",p={unversionedId:"operators-manual/index",id:"operators-manual/index",title:"OpenStack Operator's Manual - Private Cloud Core",description:"image",source:"@site/docs/operators-manual/index.md",sourceDirName:"operators-manual",slug:"/operators-manual/",permalink:"/openmetal-docs/docs/operators-manual/",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenStack CLI for Common Operational Tasks",permalink:"/openmetal-docs/docs/users_manual/use_openstack_cli"},next:{title:"Create SSH Key Pair for an OpenStack Control Plane Node",permalink:"/openmetal-docs/docs/operators-manual/day-1/command-line/create-ssh-key"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Getting Started with the Operator&#39;s Manual",id:"getting-started-with-the-operators-manual",children:[{value:"Why Days?",id:"why-days",children:[],level:3},{value:"Brief Summary of each Day",id:"brief-summary-of-each-day",children:[],level:3},{value:"Operator&#39;s Manual Audience",id:"operators-manual-audience",children:[],level:3}],level:2},{value:"Table of Contents",id:"table-of-contents",children:[{value:"Day 1",id:"day-1",children:[],level:3},{value:"Day 2",id:"day-2",children:[],level:3},{value:"Day 3",id:"day-3",children:[],level:3},{value:"Day 4",id:"day-4",children:[],level:3}],level:2}],d={toc:c};function u(e){var a=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openstack-operators-manual---private-cloud-core"},"OpenStack Operator's Manual - Private Cloud Core"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(8061).Z})),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Welcome to the OpenStack Operator's Manual for your OpenMetal Private\nCloud","!"," There are several phases of creating an OpenStack cloud and most\nof the public documentation focuses on the initial creation of a cloud.\nWith OpenMetal, we provide a full private OpenStack cloud where you\nstart as an ",(0,o.kt)("strong",{parentName:"p"},"Operator"),". This manual, with a few noted exceptions,\napplies to any OpenStack that has been provisioned to OpenStack.org's\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/refstack"},"RefStack")," standard. If you are\nreading this, it assumed you have followed the OpenMetal Central Process\nto provision your cloud already. Visit ",(0,o.kt)("a",{parentName:"p",href:"https://central.openmetal.io/"},"OpenMetal Central to sign up or\nsign in"),". For product details please\nvisit the ",(0,o.kt)("a",{parentName:"p",href:"https://openmetal.io/products/private-cloud/hosted/"},"Private\nCloud")," page."),(0,o.kt)("h2",{id:"getting-started-with-the-operators-manual"},"Getting Started with the Operator's Manual"),(0,o.kt)("p",null,"Guides are grouped into ",(0,o.kt)("strong",{parentName:"p"},"Days"),", of which there are four. A description\nof each day and their associated guides follows in the Table of\nContents."),(0,o.kt)("h3",{id:"why-days"},"Why Days?"),(0,o.kt)("p",null,"Days have been selected to break down the information covered in this\nmanual into categories. Loosely speaking, Day 1 is allocated for initial\nset up and configuration. Day 2 is for operations and maintenance. Day 3\nhas to do with scaling a cloud, ensuring your data is backed up, and how\nto restore it. Day 4 is for more advanced administration topics,\nintroducing how to make general changes to your cloud using Kolla\nAnsible, and other topics."),(0,o.kt)("h3",{id:"brief-summary-of-each-day"},"Brief Summary of each Day"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Day 1: Initial setup of cloud"),(0,o.kt)("li",{parentName:"ul"},"Day 2: Cloud administration and maintenance"),(0,o.kt)("li",{parentName:"ul"},"Day 3: Scaling the cloud and disaster recovery"),(0,o.kt)("li",{parentName:"ul"},"Day 4: Advanced administration, introducing Kolla Ansible")),(0,o.kt)("h3",{id:"operators-manual-audience"},"Operator's Manual Audience"),(0,o.kt)("p",null,"The audience for this manual is experienced Linux System Administrators\nwho are new to OpenStack."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("h3",{id:"day-1"},"Day 1"),(0,o.kt)("p",null,"Day 1 generally refers to initial setup, which in our case is the\nprocess of getting started with a Private Cloud Core OpenStack Cloud. We\nintroduce you to OpenMetal Central, how to view the assets that comprise\nyour cloud, and how to get support from our staff."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-1/intro-to-openmetal-private-cloud"},"Introduction to OpenMetal and your Private Cloud\nCore")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-1/horizon/getting-started-with-horizon"},"Getting Started with OpenStack\nHorizon")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-1/horizon/create-user-project"},"Create an OpenStack User and Project in\nHorizon")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-1/horizon/images"},"Manage and Upload Images in OpenStack\nHorizon")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-1/horizon/create-first-instance"},"How to Create an Instance in OpenStack\nHorizon")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-1/command-line/openstackclient"},"How to Install and Use\nOpenStackClient")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-1/command-line/create-ssh-key"},"Create SSH Key Pair for an OpenStack Control Plane\nNode"))),(0,o.kt)("h3",{id:"day-2"},"Day 2"),(0,o.kt)("p",null,"Day 2 initially explains briefly how your Private Cloud was deployed.\nNext we cover OpenStack administration by explaining how to perform\nmaintenance tasks for your cluster's hardware nodes."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-2/private-cloud-deployment-overview"},"How Private Clouds are\nDeployed")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-2/introduction-to-ceph"},"Introduction to\nCeph")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-2/check-ceph-status-disk-usage"},"How to Check Ceph's Status and Disk\nUsage")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-2/maintenance"},"Maintaining OpenStack Software\nUpdates")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-2/resource-usage/cloud-resource-usage"},"View OpenStack Resource\nUsage")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-2/live-migrate-instances"},"How to Live Migrate\nInstances"))),(0,o.kt)("h3",{id:"day-3"},"Day 3"),(0,o.kt)("p",null,"Day 3 has to do with how you can scale your cloud by adding more\nhardware nodes to it. Next we get into preparing for disaster recovery\nby explaining best practices relating to keeping your data safe. We\nprovide a general outline for how you can recover from a disaster."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-3/add-remove-hardware-nodes"},"How to Add or Remove Hardware\nNodes")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-3/add-provider-ips"},"How to Add Additional Provider IP\nBlocks")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-3/create-volume-backups"},"Create and Restore Volume\nBackups")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-3/create-openstack-service-backups"},"How to Create OpenStack Service Configuration\nBackups")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-3/disaster-recovery"},"OpenStack Disaster Planning, Testing, and\nRecovery"))),(0,o.kt)("h3",{id:"day-4"},"Day 4"),(0,o.kt)("p",null,"In Day 4, we cover advanced OpenStack administration through Kolla\nAnsible, the primary system used to deploy a Private Cloud. Through this\nsystem, we explain how configuration changes to your cloud can be made.\nNext, we detail a few common troubleshooting scenarios and their\nsolutions. Finally we briefly cover automation techniques possible in\nyour cloud through the use of OpenStack's Heat service and through\nHashiCorp's Terraform application."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-4/kolla-ansible/"},"How to Prepare and Use Kolla\nAnsible")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-4/kolla-ansible/enable-tls"},"Enable TLS Using Kolla\nAnsible")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-4/kolla-ansible/enable-elk"},"Enable ElasticSearch and Kibana Logging using Kolla\nAnsible")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-4/security/security-best-practices"},"Security and Your OpenMetal Private\nCloud")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-4/ceph-ansible/"},"How to Prepare and Use Ceph\nAnsible")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-4/watcher/watcher-demo"},"OpenStack Watcher\nDemonstration")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-4/troubleshooting/rabbitmq"},"Troubleshooting\nRabbitMQ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-4/kolla-ansible/redeploy-rabbitmq"},"How to Redeploy RabbitMQ using Kolla\nAnsible")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-4/troubleshooting/ceph"},"Troubleshooting\nCeph")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-4/troubleshooting/log-filtering"},"Guidelines for Searching through\nLogs")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-4/automation/heat"},"OpenStack Automation through\nHeat")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"day-4/automation/terraform"},"Automate Infrastructure using\nTerraform"))))}u.isMDXComponent=!0},8061:function(e,a,t){a.Z=t.p+"assets/images/intro-960cad4cc8a8da32174b605b394e64f6.jpg"}}]);