"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[5302],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,g=d["".concat(s,".").concat(k)]||d[k]||p[k]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},684:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},s="How to Create a Load Balancer",c={unversionedId:"operators-manual-extras/lb_with_octavia",id:"operators-manual-extras/lb_with_octavia",title:"How to Create a Load Balancer",description:"Load Balancing in OpenStack is made possible by the",source:"@site/docs/operators-manual-extras/lb_with_octavia.md",sourceDirName:"operators-manual-extras",slug:"/operators-manual-extras/lb_with_octavia",permalink:"/openmetal-docs/docs/operators-manual-extras/lb_with_octavia",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual-extras/lb_with_octavia.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spin up an Instance with Ephemeral Storage",permalink:"/openmetal-docs/docs/operators-manual-extras/ephemeral_storage"},next:{title:"Magnum and Kubernetes",permalink:"/openmetal-docs/docs/operators-manual-extras/magnum-and-kubernetes"}},u=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Project Quota",id:"project-quota",children:[],level:3},{value:"Project Roles",id:"project-roles",children:[],level:3},{value:"SSH Key",id:"ssh-key",children:[],level:3}],level:2},{value:"Procedure",id:"procedure",children:[{value:"Prepare Network, Router, and Security Groups",id:"prepare-network-router-and-security-groups",children:[{value:"Create Network",id:"create-network",children:[],level:4},{value:"Create Router",id:"create-router",children:[],level:4},{value:"Create Security Groups",id:"create-security-groups",children:[],level:4}],level:3},{value:"Create and Prepare Instances",id:"create-and-prepare-instances",children:[{value:"Create Instances",id:"create-instances",children:[],level:4},{value:"Install NGINX",id:"install-nginx",children:[],level:4}],level:3},{value:"Create Load Balancer",id:"create-load-balancer",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],p={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-create-a-load-balancer"},"How to Create a Load Balancer"),(0,l.kt)("p",null,"Load Balancing in OpenStack is made possible by the\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.openstack.org/octavia/latest/"},"Octavia")," service."),(0,l.kt)("p",null,"In this guide, you will learn how to create a load balancer to\ndistribute network traffic between two instances. The example load\nbalancer created will listen on an external, publicly reachable IP\naddress and route packets in a round-robin fashion across two instances\non an internal private network."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Before getting started, the OpenStack project's quotas may need to be\nadjusted and you should have an SSH key added."),(0,l.kt)("h3",{id:"project-quota"},"Project Quota"),(0,l.kt)("p",null,"Before creating a load balancer, ensure your project's quotas are set\nappropriately."),(0,l.kt)("p",null,"To see current project quotas, navigate in Horizon to ",(0,l.kt)("strong",{parentName:"p"},"Project -",">","\nCompute -",">"," Overview"),"."),(0,l.kt)("p",null,"To adjust project quotas, as a user with the ",(0,l.kt)("inlineCode",{parentName:"p"},"admin")," role, navigate in\nHorizon to ",(0,l.kt)("strong",{parentName:"p"},"Identity -",">"," Projects"),", find the project in the list, and\nfrom the drop down on the right, choose ",(0,l.kt)("strong",{parentName:"p"},"Modify Quotas"),"."),(0,l.kt)("p",null,"This guide requires the following resources:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2 instances"),(0,l.kt)("li",{parentName:"ul"},"2 VCPUs"),(0,l.kt)("li",{parentName:"ul"},"2GB RAM"),(0,l.kt)("li",{parentName:"ul"},"50GB Disk space"),(0,l.kt)("li",{parentName:"ul"},"At least one floating IP, ideally 2"),(0,l.kt)("li",{parentName:"ul"},"At least one IP from the External pool"),(0,l.kt)("li",{parentName:"ul"},"1 network"),(0,l.kt)("li",{parentName:"ul"},"1 router")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note","!")," -- Only an OpenStack administrator can modify projects."),(0,l.kt)("h3",{id:"project-roles"},"Project Roles"),(0,l.kt)("p",null,"To create a load balancer, the project user's roles must be set to\neither:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"admin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"load-balancer_admin"))),(0,l.kt)("p",null,"Alternatively, the user that owns a project can create a load balancer."),(0,l.kt)("h3",{id:"ssh-key"},"SSH Key"),(0,l.kt)("p",null,"You will need an SSH public key added to the project used to access the\ninstances over SSH to install NGINX."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"procedure"},"Procedure"),(0,l.kt)("p",null,"This section explains the steps needed to create a round robin load\nbalancer. To create this load balancer, first a network and router are\nrequired. Next, security groups allowing specific network traffic need\nto be created. Finally, two instances will be spun up and NGINX\ninstalled to each. Once those steps are complete, the guide will walk\nthrough creating the load balancer."),(0,l.kt)("p",null,"This guide does not go into full detail on how to create the private\nnetwork, router, security groups, and instances. For assistance with\ncreating these items see the ",(0,l.kt)("a",{parentName:"p",href:"https://central.openmetal.io/documentation/users-manual/home/"},"User's\nManual"),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"prepare-network-router-and-security-groups"},"Prepare Network, Router, and Security Groups"),(0,l.kt)("h4",{id:"create-network"},"Create Network"),(0,l.kt)("p",null,"To get started, you need to create a private network."),(0,l.kt)("p",null,"To create this network, load ",(0,l.kt)("strong",{parentName:"p"},"Project -",">"," Network -",">"," Networks")," in\nHorizon and follow the ",(0,l.kt)("strong",{parentName:"p"},"Create Network")," link."),(0,l.kt)("p",null,"This example uses the private network called ",(0,l.kt)("strong",{parentName:"p"},"test-net")," with subnet\n",(0,l.kt)("inlineCode",{parentName:"p"},"192.168.99.0/24"),":"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(1323).Z})),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"create-router"},"Create Router"),(0,l.kt)("p",null,"After creating the private network, a router needs to be made. The\npurpose of the router is to bridge the ",(0,l.kt)("strong",{parentName:"p"},"External")," network with the\nprivate one."),(0,l.kt)("p",null,"To make the router, navigate to ",(0,l.kt)("strong",{parentName:"p"},"Project -",">"," Network -",">"," Routers")," in\nHorizon and follow the ",(0,l.kt)("strong",{parentName:"p"},"Create Router")," link."),(0,l.kt)("p",null,"This example uses a router called ",(0,l.kt)("strong",{parentName:"p"},"router-1")," which connects the\n",(0,l.kt)("strong",{parentName:"p"},"External")," network and ",(0,l.kt)("strong",{parentName:"p"},"test-net")," networks together."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"create-security-groups"},"Create Security Groups"),(0,l.kt)("p",null,"The instances will require inbound network traffic for HTTP, HTTPS, SSH,\nand ICMP."),(0,l.kt)("p",null,"You will need to create security groups allowing inbound traffic for\neach type."),(0,l.kt)("p",null,"For this example, a single security group has been created allowing\ninbound traffic for HTTP, HTTPS, SSH, and ICMP as can be seen in this\nscreenshot:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(1900).Z})),(0,l.kt)("h3",{id:"create-and-prepare-instances"},"Create and Prepare Instances"),(0,l.kt)("p",null,"This load balancer will balance the load between two instances. Each\nwill run Ubuntu with a basic NGINX installation."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"create-instances"},"Create Instances"),(0,l.kt)("p",null,"Two instances need to be created for this demonstration."),(0,l.kt)("p",null,"Create them using these details:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Operating System"),": Ubuntu 20.04 (focal-amd64)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Flavor"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"gp1.micro")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Network"),": The private network previously created"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Security Group"),": Inbound HTTP, HTTPS, SSH, ICMP"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SSH key"),": A key you can use to access instances over SSH")),(0,l.kt)("p",null,"Note that in the instance creation form you can specify multiple\ninstances be created at once using the ",(0,l.kt)("strong",{parentName:"p"},"Count")," form option."),(0,l.kt)("p",null,"This example makes use of these two instances:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(373).Z})),(0,l.kt)("p",null,"Once the instances are ready, assign a floating IP address to each one\nso you can access them with SSH."),(0,l.kt)("h4",{id:"install-nginx"},"Install NGINX"),(0,l.kt)("p",null,"Using each instance's floating IP, access each one and install NGINX."),(0,l.kt)("p",null,"Here is one way to accomplish this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ssh ubuntu@<floating-ip>\nsudo su -\napt-get update && \\\n    apt-get install -y nginx && \\\n    echo $(hostname) > /var/www/html/index.html\n")),(0,l.kt)("p",null,"The above uses SSH to login to one of the servers, then logs in as root,\ninstalls NGINX using ",(0,l.kt)("inlineCode",{parentName:"p"},"apt-get"),", and creates a basic, unique webpage with\nthe server's hostname as output."),(0,l.kt)("p",null,"This needs to take place on both servers."),(0,l.kt)("h3",{id:"create-load-balancer"},"Create Load Balancer"),(0,l.kt)("p",null,"With the previous steps complete, everything is prepared to create the\nload balancer."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 1")," -- Navigate to Load Balancer Form"),(0,l.kt)("p",null,"To create a load balancer, in Horizon, navigate to ",(0,l.kt)("strong",{parentName:"p"},"Project -",">"," Network\n-",">"," Load Balancers")," and follow the ",(0,l.kt)("strong",{parentName:"p"},"Create Load Balancer")," link."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(8124).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 2")," -- Load Balancer Details"),(0,l.kt)("p",null,"Certain details now need to be filled in."),(0,l.kt)("p",null,"The following are two main items to fill in on the first page:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Name"),": Specify a name for the load balancer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Subnet"),": Choose the ",(0,l.kt)("strong",{parentName:"li"},"External")," network")),(0,l.kt)("p",null,"All other details are not required for this demonstration."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(9219).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 3")," -- Listener Details"),(0,l.kt)("p",null,"On this page, only the ",(0,l.kt)("strong",{parentName:"p"},"Protocol")," needs to be set."),(0,l.kt)("p",null,"Set the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Protocol"),": HTTP")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(986).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 4")," -- Pool Details"),(0,l.kt)("p",null,"This page only needs the ",(0,l.kt)("strong",{parentName:"p"},"Algorithm")," option set."),(0,l.kt)("p",null,"Set the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Algorithm"),": ROUND","_","ROBIN")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(1621).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 5")," -- Pool Members"),(0,l.kt)("p",null,"This page is where you will specify the instances for which to perform\nload balancing."),(0,l.kt)("p",null,"Choose from ",(0,l.kt)("strong",{parentName:"p"},"Available Instances")," the two instances created\npreviously."),(0,l.kt)("p",null,"Next, set each instance's ",(0,l.kt)("strong",{parentName:"p"},"Port")," to port 80."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(7893).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 6")," -- Monitor Details"),(0,l.kt)("p",null,"For the Monitor Details, fill in a ",(0,l.kt)("strong",{parentName:"p"},"Name")," for the monitor and set\n",(0,l.kt)("strong",{parentName:"p"},"Type")," to HTTP."),(0,l.kt)("p",null,"Set the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Name"),": Name of the monitor"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type"),": HTTP")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(5629).Z})),(0,l.kt)("p",null,"This concludes all details required. Click ",(0,l.kt)("strong",{parentName:"p"},"Create Load Balancer")," to\nspawn a new load balancer."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 7")," -- Verify Load Balancer Creation"),(0,l.kt)("p",null,"Next you will see the load balancer in the list and its ",(0,l.kt)("strong",{parentName:"p"},"Provisioning\nStatus"),' will likely state, "Pending Create".'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(5720).Z})),(0,l.kt)("p",null,"Allow the OpenStack services a small amount of time to create the load\nbalancer."),(0,l.kt)("p",null,"You will know the load balancer has been created successfully once\n",(0,l.kt)("strong",{parentName:"p"},"Provisioning Status"),' reports "Active". Once this is the case, it\'s\ntime to test the load balancer.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 8")," -- Test Load Balancer"),(0,l.kt)("p",null,"With all steps complete, find the public IP of the load balancer, which\nis listed as the ",(0,l.kt)("strong",{parentName:"p"},"IP Address")," column in the load balancer listing,\npoint your browser to it, and refresh a few times. You should see the\nhostname of each server oscillate upon each refresh."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(3767).Z})),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(4597).Z})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"This concludes the guide on how to create a load balancer in OpenStack.\nNote this is a rudimentary example, but should be enough to get you\nacquainted with the process. \\<\\<\\<\\<\\<\\<\\< HEAD"),(0,l.kt)("p",null,"\\======= ",">",">",">",">",">",">",">"," add","_","ip","_","blocks"))}d.isMDXComponent=!0},373:function(e,t,n){t.Z=n.p+"assets/images/umx_instance_list-ec4e3687cb78c9010525b27b634d1779.png"},5720:function(e,t,n){t.Z=n.p+"assets/images/umx_lb_create-4606e9c907242de021416610027df5cf.png"},9219:function(e,t,n){t.Z=n.p+"assets/images/umx_lb_form_1-3689d33d5d15166c1f3654bba0fc70db.png"},986:function(e,t,n){t.Z=n.p+"assets/images/umx_lb_form_2-4fd36d3a2d4766c0160ac68d608634a5.png"},1621:function(e,t,n){t.Z=n.p+"assets/images/umx_lb_form_3-71b2cc8d4d193c3cb84d1eecee348617.png"},7893:function(e,t,n){t.Z=n.p+"assets/images/umx_lb_form_4-94ca0cfaf5fca8496bbf3dcf4080c144.png"},5629:function(e,t,n){t.Z=n.p+"assets/images/umx_lb_form_5-931606fdc4b183a1aa4b847cf25bdc87.png"},8124:function(e,t,n){t.Z=n.p+"assets/images/umx_lb_main_page-13fc48c6d151f64bc7a26f7770ed36db.png"},3767:function(e,t){t.Z="data:image/png;base64,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"},4597:function(e,t){t.Z="data:image/png;base64,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"},1323:function(e,t,n){t.Z=n.p+"assets/images/umx_network_list-66cf1b983865a566034b86ef743b35e7.png"},1900:function(e,t,n){t.Z=n.p+"assets/images/umx_sec_groups-d897239dfdbd832e6abbc6bad84aba50.png"}}]);