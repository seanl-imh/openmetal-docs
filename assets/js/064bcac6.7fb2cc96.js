"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[6802],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,f=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7903:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:7},s="Create a Network",p={unversionedId:"users-manual/network_ip_traffic_cli",id:"users-manual/network_ip_traffic_cli",title:"Create a Network",description:"This guide explains networking in OpenStack including how to create a",source:"@site/docs/users-manual/network_ip_traffic_cli.md",sourceDirName:"users-manual",slug:"/users-manual/network_ip_traffic_cli",permalink:"/docs/manuals/users-manual/network_ip_traffic_cli",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/users-manual/network_ip_traffic_cli.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Get Started with OpenStackClient",permalink:"/docs/manuals/users-manual/openstackclient"},next:{title:"Manage OpenStack Images",permalink:"/docs/manuals/users-manual/using_creating_images_cli"}},c=[{value:"<strong>Create a Network and Router</strong>",id:"create-a-network-and-router",children:[{value:"<strong>Create a network</strong>",id:"create-a-network-1",children:[],level:3},{value:"<strong>Create a Router</strong>",id:"create-a-router",children:[],level:3}],level:2},{value:"<strong>Floating IPs</strong>",id:"floating-ips",children:[{value:"<strong>Allocate and Assign Floating IPs</strong>",id:"allocate-and-assign-floating-ips",children:[],level:3}],level:2},{value:"<strong>Next Steps</strong>",id:"next-steps",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-network"},"Create a Network"),(0,o.kt)("p",null,"This guide explains networking in OpenStack including how to create a\nprivate network, a router, and allocate and assign floating IPs."),(0,o.kt)("p",null,"You will learn how to create a private network on which instances will\nbe deployed. The network created in this guide will be used later when\ncreating an instance."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/neutron/latest/"},"Neutron"),' is the service\nthat manages networking in OpenStack and allows for networks, routers,\nfloating IPs, and security groups to be created. It provides "network\nconnectivity as a service" between interfaces and uses the OpenStack\nNetworking API.'),(0,o.kt)("h2",{id:"create-a-network-and-router"},(0,o.kt)("strong",{parentName:"h2"},"Create a Network and Router")),(0,o.kt)("p",null,"This section demonstrates creating a private network and router. The\nrouter is important as it will allow you to create a route between\nnetworks, such as from the private network to the Internet."),(0,o.kt)("p",null,"This section explains how to make a network and router using the command\nline with OpenStackClient."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"create-a-network-1"},(0,o.kt)("strong",{parentName:"h3"},"Create a network")),(0,o.kt)("p",null,"Listed are the steps needed to create a private network. Variables are\npresented in all capital and should be replaced accordingly. Note the\noutput of most of the commands has been truncated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note","!")," -- Private networks should be used where possible. Only\nexpose the portions of your cloud to a public network when needed."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," -- Create private network"),(0,o.kt)("p",null,"Use this command to create a network, replacing ",(0,o.kt)("strong",{parentName:"p"},"NETWORK","_","NAME")," with\nthe name of the network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openstack network create NETWORK_NAME\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create a network called ",(0,o.kt)("strong",{parentName:"p"},"network-1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack network create network-1\n+---------------------------+--------------------------------------+\n| Field                     | Value                                |\n+---------------------------+--------------------------------------+\n| admin_state_up            | UP                                   |\n| availability_zone_hints   |                                      |\n| availability_zones        |                                      |\n| created_at                | 2021-05-19T20:13:29Z                 |\n| description               |                                      |\n| dns_domain                | None                                 |\n| id                        | 0a193fa1-2019-4fbc-a862-6f6ced157c1e |\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")," -- Create subnet"),(0,o.kt)("p",null,"Next, a subnet will need to be created."),(0,o.kt)("p",null,"Use this command to create a subnet, replacing ",(0,o.kt)("strong",{parentName:"p"},"NETWORK","_","NAME")," and\n",(0,o.kt)("strong",{parentName:"p"},"SUBNET","_","NAME")," with the respective names of the network and subnet and\nreplace ",(0,o.kt)("strong",{parentName:"p"},"SUBNET","_","RANGE")," with the subnet to use. An example subnet\nrange could be ",(0,o.kt)("strong",{parentName:"p"},"10.0.0.0/24"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack subnet create --subnet-range SUBNET_RANGE --network NETWORK_NAME \\\nSUBNET_NAME\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create a subnet called ",(0,o.kt)("strong",{parentName:"p"},"subnet-1")," with subnet range of\n",(0,o.kt)("strong",{parentName:"p"},"10.0.0.0/24"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack subnet create --subnet-range 10.0.0.0/24 --network network-1 subnet-1\n+----------------------+--------------------------------------+\n| Field                | Value                                |\n+----------------------+--------------------------------------+\n| allocation_pools     | 10.0.0.2-10.0.0.254                  |\n| cidr                 | 10.0.0.0/24                          |\n| created_at           | 2021-05-19T20:22:03Z                 |\n| description          |                                      |\n| dns_nameservers      |                                      |\n| dns_publish_fixed_ip | None                                 |\n| enable_dhcp          | True                                 |\n| gateway_ip           | 10.0.0.1                             |\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3")," -- Show network details"),(0,o.kt)("p",null,"You can list the network and subnet and show more information about\neach."),(0,o.kt)("p",null,"List networks using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack network list\n+--------------------------------------+-----------+--------------------------------------+\n| ID                                   | Name      | Subnets                              |\n+--------------------------------------+-----------+--------------------------------------+\n| 0a193fa1-2019-4fbc-a862-6f6ced157c1e | network-1 | df4d6183-9c3b-4bb9-a686-cf1fc7d60f7f |\n| 5cc755c9-41fc-44c2-87e7-642dfdfb0208 | External  | a52754dd-13d9-4a36-bab6-10058f4887f5 |\n+--------------------------------------+-----------+--------------------------------------+\n")),(0,o.kt)("p",null,"List subnets using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack subnet list\n+--------------------------------------+----------+--------------------------------------+-------------------+\n| ID                                   | Name     | Network                              | Subnet            |\n+--------------------------------------+----------+--------------------------------------+-------------------+\n| a52754dd-13d9-4a36-bab6-10058f4887f5 | Internet | 5cc755c9-41fc-44c2-87e7-642dfdfb0208 | 173.231.217.64/28 |\n| df4d6183-9c3b-4bb9-a686-cf1fc7d60f7f | subnet-1 | 0a193fa1-2019-4fbc-a862-6f6ced157c1e | 10.0.0.0/24       |\n+--------------------------------------+----------+--------------------------------------+-------------------+\n")),(0,o.kt)("p",null,"To get more information about each, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," subcommand and\nspecify the UUID for the network and subnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openstack network show 0a193fa1-2019-4fbc-a862-6f6ced157c1e\nopenstack subnet show df4d6183-9c3b-4bb9-a686-cf1fc7d60f7f\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"create-a-router"},(0,o.kt)("strong",{parentName:"h3"},"Create a Router")),(0,o.kt)("p",null,"With a network created, the next step is to create a router which will\nbridge the connection from the ",(0,o.kt)("strong",{parentName:"p"},"External")," or ",(0,o.kt)("strong",{parentName:"p"},"provider network")," to\nthe private network."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," -- Create router"),(0,o.kt)("p",null,"To make a router, use this base command, replacing ",(0,o.kt)("strong",{parentName:"p"},"ROUTER","_","NAME")," with\nthe name of the router:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openstack router create ROUTER_NAME\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create a router called ",(0,o.kt)("strong",{parentName:"p"},"router-1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack router create router-1\n+-------------------------+--------------------------------------+\n| Field                   | Value                                |\n+-------------------------+--------------------------------------+\n| admin_state_up          | UP                                   |\n| availability_zone_hints |                                      |\n| availability_zones      |                                      |\n| created_at              | 2021-05-19T20:35:14Z                 |\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")," -- Attach interfaces"),(0,o.kt)("p",null,"With the router created, the ",(0,o.kt)("strong",{parentName:"p"},"External")," and ",(0,o.kt)("strong",{parentName:"p"},"subnet-1")," interfaces\nneed to be attached to it."),(0,o.kt)("p",null,"To add a subnet, use this command, replacing ",(0,o.kt)("strong",{parentName:"p"},"ROUTER","_","NAME")," and\n",(0,o.kt)("strong",{parentName:"p"},"SUBNET","_","NAME")," with the names of the respective router and subnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openstack router add subnet ROUTER_NAME SUBNET_NAME\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Attach subnet"),":"),(0,o.kt)("p",null,"Add subnet ",(0,o.kt)("strong",{parentName:"p"},"subnet-1")," to the router called ",(0,o.kt)("strong",{parentName:"p"},"router-1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openstack router add subnet router-1 subnet-1\n")),(0,o.kt)("p",null,"The command to add the subnet to the router returns no output if\nsuccessful."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Attach External network"),":"),(0,o.kt)("p",null,"To finish setting up the router, attach the ",(0,o.kt)("strong",{parentName:"p"},"External")," network to it."),(0,o.kt)("p",null,"Use this command to add the external network, replacing\n",(0,o.kt)("strong",{parentName:"p"},"EXTERNAL","_","NETWORK","_","UUID")," with the UUID of the network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack router set --external-gateway EXTERNAL_NETWORK_UUID \\\nROUTER_NAME\n")),(0,o.kt)("p",null,"Obtain the UUID of the ",(0,o.kt)("strong",{parentName:"p"},"External")," network by running ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack\nnetwork list"),". The UUID will be listed in the first column."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Add the external network to the router called ",(0,o.kt)("strong",{parentName:"p"},"router-1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack router set --external-gateway \\\n5cc755c9-41fc-44c2-87e7-642dfdfb0208 router-1\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4")," -- Confirm router details"),(0,o.kt)("p",null,"With these steps completed, you have a router that connects the external\nnetwork to the private network."),(0,o.kt)("p",null,"You can see the details of the router by running the following,\nreplacing ",(0,o.kt)("strong",{parentName:"p"},"ROUTER","_","NAME")," with the name of the router:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openstack router show ROUTER_NAME\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Show the details for the router called ",(0,o.kt)("strong",{parentName:"p"},"router-1"),", including the\ninterfaces that were previously attached:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ openstack router show router-1 --fit-width\n+-------------------------+-----------------------------------------------------------------------------------------------------+\n| Field                   | Value                                                                                               |\n+-------------------------+-----------------------------------------------------------------------------------------------------+\n| admin_state_up          | UP                                                                                                  |\n| availability_zone_hints |                                                                                                     |\n| availability_zones      | nova                                                                                                |\n| created_at              | 2021-05-19T20:35:14Z                                                                                |\n| description             |                                                                                                     |\n| external_gateway_info   | {"network_id": "5cc755c9-41fc-44c2-87e7-642dfdfb0208", "external_fixed_ips": [{"subnet_id":         |\n|                         | "a52754dd-13d9-4a36-bab6-10058f4887f5", "ip_address": "173.231.217.74"}], "enable_snat": true}      |\n| flavor_id               | None                                                                                                |\n| id                      | d5b0eb30-8b2a-4f2e-a9df-4ad7ee792cec                                                                |\n| interfaces_info         | [{"port_id": "fa1f794f-5101-4df4-b83a-3c260d0a65fa", "ip_address": "10.0.0.1", "subnet_id":         |\n|                         | "df4d6183-9c3b-4bb9-a686-cf1fc7d60f7f"}]                                                            |\n| name                    | router-1                                                                                            |\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"floating-ips"},(0,o.kt)("strong",{parentName:"h2"},"Floating IPs")),(0,o.kt)("p",null,"Floating IPs in OpenStack are publicly routable IP addresses that can be\nattached and detached to instances. For example if there's an instance\nassociated with a private network but needs to be accessed from the\nInternet, a floating IP can be associated with the instance, allowing\ncommunication from the Internet."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"allocate-and-assign-floating-ips"},(0,o.kt)("strong",{parentName:"h3"},"Allocate and Assign Floating IPs")),(0,o.kt)("p",null,"To use Floating IPs they will first need to be allocated from the\nprovider network's pool of IPs. The following is a list of commands used\nto manage floating IPs."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," -- Allocate floating IP"),(0,o.kt)("p",null,"Allocate additional floating IPs where ",(0,o.kt)("inlineCode",{parentName:"p"},"NETWORK")," is the UUID of the\nnetwork to allocate IPs from:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openstack floating ip create NETWORK\n")),(0,o.kt)("p",null,"You will need to first obtain the ",(0,o.kt)("strong",{parentName:"p"},"External")," network's UUID using\n",(0,o.kt)("inlineCode",{parentName:"p"},"openstack network list"),"."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Allocate a floating IP from the ",(0,o.kt)("strong",{parentName:"p"},"External")," network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack floating ip create 5cc755c9-41fc-44c2-87e7-642dfdfb0208\n+---------------------+--------------------------------------+\n| Field               | Value                                |\n+---------------------+--------------------------------------+\n| created_at          | 2021-05-19T20:54:19Z                 |\n| description         |                                      |\n| dns_domain          | None                                 |\n| dns_name            | None                                 |\n| fixed_ip_address    | None                                 |\n| floating_ip_address | 173.231.217.75                       |\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")," -- List floating IPs"),(0,o.kt)("p",null,"Make use of ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack floating ip list")," to view floating IPs. You will\nsee the IP allocated from the previous section."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"List floating IPs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ openstack floating ip list\n+--------------------------------------+---------------------+------------------+------+--------------------------------------+----------------------------------+\n| ID                                   | Floating IP Address | Fixed IP Address | Port | Floating Network                     | Project                          |\n+--------------------------------------+---------------------+------------------+------+--------------------------------------+----------------------------------+\n| 99d58cc0-1b27-4171-aa44-6c15d15718fa | 173.231.217.75      | None             | None | 5cc755c9-41fc-44c2-87e7-642dfdfb0208 | fece7ddb8663497bb99ee0988719143c |\n+--------------------------------------+---------------------+------------------+------+--------------------------------------+----------------------------------+\n")),(0,o.kt)("p",null,"This floating IP will be used later to access an instance over SSH."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"next-steps"},(0,o.kt)("strong",{parentName:"h2"},"Next Steps")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"using_creating_images_cli"},"next\nguide")," goes\nover images in OpenStack, which are bootable operating systems."))}d.isMDXComponent=!0}}]);