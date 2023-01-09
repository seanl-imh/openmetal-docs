"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[4291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},i="Maintaining OpenStack Software Updates",s={unversionedId:"operators-manual/day-2/maintenance",id:"operators-manual/day-2/maintenance",title:"Maintaining OpenStack Software Updates",description:"Introduction",source:"@site/docs/operators-manual/day-2/maintenance.md",sourceDirName:"operators-manual/day-2",slug:"/operators-manual/day-2/maintenance",permalink:"/docs/manuals/operators-manual/day-2/maintenance",draft:!1,editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-2/maintenance.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to Check Ceph's Status and Disk Usage",permalink:"/docs/manuals/operators-manual/day-2/check-ceph-status-disk-usage"},next:{title:"How to Live Migrate Instances Using OpenStack Horizon",permalink:"/docs/manuals/operators-manual/day-2/live-migrate-instances"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Software that can be Updated",id:"software-that-can-be-updated",level:2},{value:"Updating Kolla Ansible Docker Images",id:"updating-kolla-ansible-docker-images",level:2},{value:"Performing Package Manager Updates",id:"performing-package-manager-updates",level:2},{value:"Migrate Workload",id:"migrate-workload",level:3},{value:"Update One Node at a Time",id:"update-one-node-at-a-time",level:3},{value:"Disable Docker",id:"disable-docker",level:3},{value:"Upgrade Host OS Packages",id:"upgrade-host-os-packages",level:3},{value:"Determine Reboot Need",id:"determine-reboot-need",level:3},{value:"Ceph Maintenance",id:"ceph-maintenance",level:3},{value:"Reboot if Required",id:"reboot-if-required",level:3},{value:"Verify Successful Reboot",id:"verify-successful-reboot",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"maintaining-openstack-software-updates"},"Maintaining OpenStack Software Updates"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Software in the OpenStack ecosystem evolves over time, either through\nnew feature additions, bug fixes, or when vulnerabilities are patched.\nPart of operating an OpenStack cloud involves maintaining its software\nthrough updates. In this guide, we point out the sections in an\nOpenMetal cloud where software updates occur and explain best practices\nwhen performing updates."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before getting started, it is beneficial to have experience with Docker."),(0,r.kt)("p",null,"To follow this guide, ensure you have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Root access to your cloud's control plane")),(0,r.kt)("h2",{id:"software-that-can-be-updated"},"Software that can be Updated"),(0,r.kt)("p",null,"The software of an OpenMetal cloud that can be updated include each\nhardware node's package manager and the Kolla Ansible Docker images.\nCeph updates are handled through the node's package manager."),(0,r.kt)("h2",{id:"updating-kolla-ansible-docker-images"},"Updating Kolla Ansible Docker Images"),(0,r.kt)("p",null,"Refer to Kolla Ansible's\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.openstack.org/kolla-ansible/latest/user/operating-kolla.html#upgrade-procedure"},"documentation"),"\nfor more information regarding updating images."),(0,r.kt)("h2",{id:"performing-package-manager-updates"},"Performing Package Manager Updates"),(0,r.kt)("h3",{id:"migrate-workload"},"Migrate Workload"),(0,r.kt)("p",null,"Package manager updates requiring a server reboot to an OpenMetal\ncontrol plane node can be disruptive to any workload running on it.\nPrior to performing disruptive actions, it may be possible to migrate\ninstances another node running the Compute service. For information on\nhow to migrate instances, see OpenStack Nova's\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.openstack.org/nova/latest/admin/live-migration-usage.html"},"documentation"),"."),(0,r.kt)("h3",{id:"update-one-node-at-a-time"},"Update One Node at a Time"),(0,r.kt)("p",null,"While performing package manager updates, ensure updates occur\nsuccessfully for one hardware node before updating another node."),(0,r.kt)("h3",{id:"disable-docker"},"Disable Docker"),(0,r.kt)("p",null,"Before updating the package manager, ensure the Docker socket and\nservice within SystemD are stopped and disabled. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"systemctl disable docker.socket\nsystemctl stop docker.socket\nsystemctl disable docker.service\nsystemctl stop docker.service\n")),(0,r.kt)("h3",{id:"upgrade-host-os-packages"},"Upgrade Host OS Packages"),(0,r.kt)("p",null,"After verifying the Docker socket and service are stopped, perform the\npackage manager updates.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dnf upgrade\n")),(0,r.kt)("h3",{id:"determine-reboot-need"},"Determine Reboot Need"),(0,r.kt)("p",null,"Once package manager completes, check if a reboot is required with\ndnf-utils ",(0,r.kt)("inlineCode",{parentName:"p"},"needs-restarting")," and the reboot hint flag (-r):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ needs-restarting -r\nCore libraries or services have been updated since boot-up:\n  * kernel\n  * systemd\nReboot is required to fully utilize these updates.\nMore information: https://access.redhat.com/solutions/27943\n$\n")),(0,r.kt)("h3",{id:"ceph-maintenance"},"Ceph Maintenance"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning","!")," This step is optional and only required if the node needs\nto be rebooted."),(0,r.kt)("p",null,"Prior to reboot, if the node is part of the Ceph cluster automatic OSD\nremoval and data rebalance should be temporarily suspended. To do so,\nperform:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ceph osd set noout\nceph osd set norebalance\n")),(0,r.kt)("p",null,"This will reduce rebuild time and help ensure the node rejoins the\ncluster automatically."),(0,r.kt)("p",null,"Once the node reboots and a healthy Ceph cluster is confirmed, these\nparameters must be unset. To unset this configuration, perform:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ceph osd unset noout\nceph osd unset norebalance\n")),(0,r.kt)("h3",{id:"reboot-if-required"},"Reboot if Required"),(0,r.kt)("p",null,"Reboot the node if required:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shutdown -r now\n")),(0,r.kt)("h3",{id:"verify-successful-reboot"},"Verify Successful Reboot"),(0,r.kt)("p",null,"When the node comes back online, SSH into it to verify the OpenStack\nDocker containers have started. Additionally, if this node was part of\nthe Ceph cluster, check Ceph's cluster status."),(0,r.kt)("p",null,"To verify the Docker containers have started, use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps"),". You\nshould see a number of Docker containers running. Under the ",(0,r.kt)("strong",{parentName:"p"},"STATUS"),"\ncolumn, each container should reflect the status ",(0,r.kt)("inlineCode",{parentName:"p"},"Up"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[root@smiling-pelican ~]# docker ps\nCONTAINER ID   IMAGE                                                                        COMMAND                  CREATED        STATUS                          PORTS     NAMES\n6f7590bc2191   harbor.imhadmin.net/kolla/centos-binary-telegraf:victoria                    "dumb-init --single-\u2026"   20 hours ago   Restarting (1) 14 seconds ago             telegraf\n67a4d47e8c78   harbor.imhadmin.net/kolla/centos-binary-watcher-api:victoria                 "dumb-init --single-\u2026"   3 days ago     Up 6 minutes                              watcher_api\naf815b1dcb5d   harbor.imhadmin.net/kolla/centos-binary-watcher-engine:victoria              "dumb-init --single-\u2026"   3 days ago     Up 6 minutes                              watcher_engine\na52ab61933ac   harbor.imhadmin.net/kolla/centos-binary-watcher-applier:victoria             "dumb-init --single-\u2026"   3 days ago     Up 6 minutes                              watcher_applier\n[...output truncated...]\n')),(0,r.kt)("p",null,"Next, if this node is part of a Ceph cluster, check Ceph's status using\n",(0,r.kt)("inlineCode",{parentName:"p"},"ceph status"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@smiling-pelican ~]# ceph status\n  cluster:\n    id:     06bf4555-7c0c-4b96-a3b7-502bf8f6f213\n    health: HEALTH_OK\n[...output truncated...]\n")),(0,r.kt)("p",null,"The above output shows the status as ",(0,r.kt)("inlineCode",{parentName:"p"},"HEALTH_OK"),", indicating the Ceph\ncluster is healthy. Ceph is naturally resilient and should recover from\na node being rebooted."))}d.isMDXComponent=!0}}]);