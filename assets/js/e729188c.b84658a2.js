"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[2307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:5,slug:"/tutorials/magnum-and-kubernetes"},s="Magnum and Kubernetes",o={unversionedId:"kubernetes-guides/deployment/magnum-and-kubernetes",id:"kubernetes-guides/deployment/magnum-and-kubernetes",title:"Magnum and Kubernetes",description:"Introduction",source:"@site/docs/kubernetes-guides/deployment/magnum-and-kubernetes.md",sourceDirName:"kubernetes-guides/deployment",slug:"/tutorials/magnum-and-kubernetes",permalink:"/docs/manuals/tutorials/magnum-and-kubernetes",draft:!1,editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/kubernetes-guides/deployment/magnum-and-kubernetes.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/tutorials/magnum-and-kubernetes"},sidebar:"tutorialSidebar",previous:{title:"Installing a kOps cluster on OpenStack",permalink:"/docs/manuals/kubernetes-guides/installing-a-kops-cluster-on-openstack"},next:{title:"Installing the Kubernetes OpenStack Cloud Controller Manager",permalink:"/docs/manuals/kubernetes-guides/installing-the-kubernetes-openstack-cloud-controller-manager"}},i={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Magnum Deployment Details",id:"magnum-deployment-details",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Project Roles",id:"project-roles",level:3},{value:"Project Quotas",id:"project-quotas",level:3},{value:"OpenStackClient",id:"openstackclient",level:3},{value:"Procedure",id:"procedure",level:2},{value:"Create Kubernetes Cluster",id:"create-kubernetes-cluster",level:3},{value:"Check Status of the Kubernetes Cluster",id:"check-status-of-the-kubernetes-cluster",level:2},{value:"Prepare OpenStackClient",id:"prepare-openstackclient",level:3},{value:"Install <code>python-magnumclient</code>",id:"install-python-magnumclient",level:3},{value:"List Heat Stacks",id:"list-heat-stacks",level:3},{value:"Check deployment status",id:"check-deployment-status",level:3},{value:"Test Kubernetes Cluster",id:"test-kubernetes-cluster",level:2},{value:"How to Resize a Kubernetes Cluster&#39;s Node Count",id:"how-to-resize-a-kubernetes-clusters-node-count",level:2},{value:"Resize Prerequisites",id:"resize-prerequisites",level:3},{value:"Resize Procedure",id:"resize-procedure",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],p={toc:u};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"magnum-and-kubernetes"},"Magnum and Kubernetes"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Kubernetes in OpenStack is made possible by\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.openstack.org/magnum/latest/user/"},"Magnum"),", a container\norchestration engine service."),(0,r.kt)("p",null,"In this guide, you will learn how to deploy a Kubernetes cluster using\nHorizon. The process this guide outlines is to first deploy the cluster,\nconfirm the creation of the cluster, and finally demonstrate working\nwith the Kubernetes cluster."),(0,r.kt)("p",null,"Get started by looking over the prerequisites required before the\ncluster can be created."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"magnum-deployment-details"},"Magnum Deployment Details"),(0,r.kt)("p",null,"With Private Cloud Core OpenStack clouds, the deployment of Magnum\nintegrates with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/cloud-provider-openstack"},"Kubernetes OpenStack Cloud Provider"),".\nPresently,\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/cloud-provider-openstack/tree/release-1.18"},"release-1.18"),"\nof this repository is used."),(0,r.kt)("p",null,"The following items have been integrated:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/cloud-provider-openstack/blob/release-1.18/docs/using-openstack-cloud-controller-manager.md"},"OpenStack Cloud Controller Manager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/cloud-provider-openstack/blob/release-1.18/docs/using-octavia-ingress-controller.md#deploy-octavia-ingress-controller-in-the-kubernetes-cluster"},"Octavia Ingress Controller")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/cloud-provider-openstack/blob/release-1.18/docs/using-cinder-csi-plugin.md"},"Cinder CSI Plugin"))),(0,r.kt)("p",null,"For an example of how to set up load balancing, see\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/cloud-provider-openstack/blob/release-1.18/docs/using-octavia-ingress-controller.md#setting-up-http-load-balancing-with-ingress"},"Setting up HTTP Load Balancing with Ingress"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This section explains what is required before creating a Kubernetes\ncluster."),(0,r.kt)("h3",{id:"project-roles"},"Project Roles"),(0,r.kt)("p",null,"To create a Kubernetes cluster, you must either be the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),' user, own\nthe current project, or your user must have the "Load Balancer Admin"\nrole.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),' -- The "Load Balancer Admin" role appears as\n',(0,r.kt)("inlineCode",{parentName:"p"},"load-balancer_admin")," in Horizon."),(0,r.kt)("p",null,"This guide uses the user ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," and is working out of the default\n",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," project."),(0,r.kt)("h3",{id:"project-quotas"},"Project Quotas"),(0,r.kt)("p",null,"The project in which you are working needs to have enough resources\navailable to it."),(0,r.kt)("p",null,"For example, spinning up a cluster with three masters and three workers\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"m1.small")," flavor requires the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"6 Instances"),(0,r.kt)("li",{parentName:"ul"},"6 VCPUs"),(0,r.kt)("li",{parentName:"ul"},"24GB RAM"),(0,r.kt)("li",{parentName:"ul"},"150GB Volume space"),(0,r.kt)("li",{parentName:"ul"},"1 Network"),(0,r.kt)("li",{parentName:"ul"},"1 Router")),(0,r.kt)("p",null,"To see current project quotas, navigate in Horizon to ",(0,r.kt)("strong",{parentName:"p"},"Project -",">","\nCompute -",">"," Overview"),"."),(0,r.kt)("p",null,"To adjust project quotas, as a user with the ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," role, navigate in\nHorizon to ",(0,r.kt)("strong",{parentName:"p"},"Identity -",">"," Projects"),", find the project in the list, and\nfrom the drop down on the right, choose ",(0,r.kt)("strong",{parentName:"p"},"Modify Quotas"),"."),(0,r.kt)("p",null,"You can also set quotas to ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," to allow unlimited of a resource type."),(0,r.kt)("p",null,"In this guide, the project's quotas are set to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instances: -1"),(0,r.kt)("li",{parentName:"ul"},"VCPUs: -1"),(0,r.kt)("li",{parentName:"ul"},"RAM: -1"),(0,r.kt)("li",{parentName:"ul"},"Volumes: -1")),(0,r.kt)("h3",{id:"openstackclient"},"OpenStackClient"),(0,r.kt)("p",null,"This guide assumes OpenStackClient has been installed and pointed to the\nappropriate project. For information on how to install OpenStackClient,\nsee ",(0,r.kt)("a",{parentName:"p",href:"https://central.openmetal.io/documentation/operators-manual/how-to-install-and-use-openstack-s-cli/"},"How to Install and Use OpenStack's CLI"),"."),(0,r.kt)("p",null,"To confirm the cluster status using the command line, OpenStackClient\nrequires the Python package ",(0,r.kt)("inlineCode",{parentName:"p"},"python-magnumclient"),"."),(0,r.kt)("p",null,"Install this package using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip install python-magnumclient\n")),(0,r.kt)("h2",{id:"procedure"},"Procedure"),(0,r.kt)("h3",{id:"create-kubernetes-cluster"},"Create Kubernetes Cluster"),(0,r.kt)("p",null,"To create a Kubernetes cluster, navigate in Horizon to ",(0,r.kt)("strong",{parentName:"p"},"Project -",">","\nContainer Infra -",">"," Clusters"),", and follow the ",(0,r.kt)("strong",{parentName:"p"},"Create Cluster")," link."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(8613).Z,width:"1506",height:"466"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Fill the form sections out as outlined in the following steps."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," -- Details"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(5490).Z,width:"966",height:"723"})),(0,r.kt)("p",null,"Fill out the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cluster Name")," -- ",(0,r.kt)("inlineCode",{parentName:"li"},"kubernetes-demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cluster Template")," -- ",(0,r.kt)("inlineCode",{parentName:"li"},"kubernetes-v1.18.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Keypair")," -- Your SSH key")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," -- Size"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(6423).Z,width:"965",height:"615"})),(0,r.kt)("p",null,"Fill out the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Number of Master Nodes"),": 3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flavor of Master Nodes"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"m1.small")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Number of Worker Nodes"),": 3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flavor of Worker Nodes"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"m1.small"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3")," -- Network"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(153).Z,width:"965",height:"507"})),(0,r.kt)("p",null,"Fill out the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable Load Balancer for Master Nodes"),": Ensure this is checked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create New Network"),": Ensure this is checked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cluster API"),': Ensure "Accessible on private network only" is\nselected')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4")," -- Create Cluster"),(0,r.kt)("p",null,"You can now create the Kubernetes cluster. Allow 10 - 15 minutes for\ncluster creation."),(0,r.kt)("p",null,"Once the form is submitted, you will be taken back to the cluster list\nwhere you will see the cluster being created with ",(0,r.kt)("strong",{parentName:"p"},"Status"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE_IN_PROGRESS"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(1451).Z,width:"1506",height:"126"})),(0,r.kt)("h2",{id:"check-status-of-the-kubernetes-cluster"},"Check Status of the Kubernetes Cluster"),(0,r.kt)("p",null,"This section explains how to check the status the Kubernetes cluster\nusing OpenStackClient."),(0,r.kt)("h3",{id:"prepare-openstackclient"},"Prepare OpenStackClient"),(0,r.kt)("p",null,"Before beginning, ensure OpenStackClient is installed and pointed to the\nappropriate project."),(0,r.kt)("h3",{id:"install-python-magnumclient"},"Install ",(0,r.kt)("inlineCode",{parentName:"h3"},"python-magnumclient")),(0,r.kt)("p",null,"Next install Magnum's CLI, ",(0,r.kt)("inlineCode",{parentName:"p"},"python-magnumclient")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip install python-magnumclient\n")),(0,r.kt)("h3",{id:"list-heat-stacks"},"List Heat Stacks"),(0,r.kt)("p",null,"Next, you will need to list the Heat stacks. This output includes the\nKubernetes stack created previously."),(0,r.kt)("p",null,"List Heat stacks using ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack stack list"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack stack list\n+--------------------------------------+------------------------------+--------------------+----------------------+--------------+\n| ID                                   | Stack Name                   | Stack Status       | Creation Time        | Updated Time |\n+--------------------------------------+------------------------------+--------------------+----------------------+--------------+\n| 545b100b-ba3c-4366-9d68-eca7b1df98b6 | kubernetes-demo-ojlnzq4w252q | CREATE_IN_PROGRESS | 2021-06-14T21:19:35Z | None         |\n+--------------------------------------+------------------------------+--------------------+----------------------+--------------+\n")),(0,r.kt)("p",null,"You should see the stack created previously appended with random\ncharacters. In this example, the stack is named\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes-demo-ojlnzq4w252q"),". Take note of the name as it will be used\nin the next section."),(0,r.kt)("p",null,"OpenStack uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openstack.org/heat/latest/"},"Heat")," for\ntemplate-based orchestration."),(0,r.kt)("h3",{id:"check-deployment-status"},"Check deployment status"),(0,r.kt)("p",null,"To check the status of the deployment, use\n",(0,r.kt)("inlineCode",{parentName:"p"},"openstack stack resourcelist <stack-name>"),",\nwhere ",(0,r.kt)("inlineCode",{parentName:"p"},"<stack-name>")," is the name of the stack."),(0,r.kt)("p",null,"Check status of stack ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes-demo-ojlnzq4w252q"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack stack resource list kubernetes-demo-ojlnzq4w252q\n+-------------------------------+--------------------------------------+--------------------------------------------------------------------------------------+--------------------+----------------------+\n| resource_name                 | physical_resource_id                 | resource_type                                                                        | resource_status    | updated_time         |\n+-------------------------------+--------------------------------------+--------------------------------------------------------------------------------------+--------------------+----------------------+\n| kube_cluster_deploy           |                                      | OS::Heat::SoftwareDeployment                                                         | INIT_COMPLETE      | 2021-06-14T21:19:35Z |\n| kube_cluster_config           |                                      | OS::Heat::SoftwareConfig                                                             | INIT_COMPLETE      | 2021-06-14T21:19:35Z |\n| secgroup_rule_tcp_kube_minion | 4a76ee7a-dde2-4190-9ccf-6a144d7d42a4 | OS::Neutron::SecurityGroupRule                                                       | CREATE_COMPLETE    | 2021-06-14T21:19:35Z |\n| api_address_floating_switch   |                                      | Magnum::FloatingIPAddressSwitcher                                                    | INIT_COMPLETE      | 2021-06-14T21:19:35Z |\n| kube_minions                  |                                      | OS::Heat::ResourceGroup                                                              | INIT_COMPLETE      | 2021-06-14T21:19:35Z |\n| etcd_address_lb_switch        |                                      | Magnum::ApiGatewaySwitcher                                                           | INIT_COMPLETE      | 2021-06-14T21:19:35Z |\n| api_address_lb_switch         |                                      | Magnum::ApiGatewaySwitcher                                                           | INIT_COMPLETE      | 2021-06-14T21:19:35Z |\n| kube_masters                  | 2f5b992c-c15e-4650-95e4-c7348efc7f7e | OS::Heat::ResourceGroup                                                              | CREATE_IN_PROGRESS | 2021-06-14T21:19:35Z |\n| etcd_lb                       | 3a8df57f-2f43-4af1-9248-bd886c392344 | file:///usr/lib/python3.6/site-packages/magnum/drivers/common/templates/lb_etcd.yaml | CREATE_COMPLETE    | 2021-06-14T21:19:35Z |\n| api_lb                        | 2455a996-b772-4664-b99e-c7a67ca9285b | file:///usr/lib/python3.6/site-packages/magnum/drivers/common/templates/lb_api.yaml  | CREATE_COMPLETE    | 2021-06-14T21:19:35Z |\n| network                       | 90947279-ec72-4ed6-9e62-6e5501e0bd1d | file:///usr/lib/python3.6/site-packages/magnum/drivers/common/templates/network.yaml | CREATE_COMPLETE    | 2021-06-14T21:19:35Z |\n| worker_nodes_server_group     | d135f907-5e8e-4a2c-b3fd-397418837d8d | OS::Nova::ServerGroup                                                                | CREATE_COMPLETE    | 2021-06-14T21:19:35Z |\n| secgroup_rule_udp_kube_minion | c0892f17-4d46-403b-9cf9-6e89d95bc0f1 | OS::Neutron::SecurityGroupRule                                                       | CREATE_COMPLETE    | 2021-06-14T21:19:35Z |\n| secgroup_kube_minion          | 8d130ac5-c356-43d9-bdcb-a7b779610638 | OS::Neutron::SecurityGroup                                                           | CREATE_COMPLETE    | 2021-06-14T21:19:35Z |\n| secgroup_kube_master          | 6e52a531-762a-4f29-b85f-c149c5b461f1 | OS::Neutron::SecurityGroup                                                           | CREATE_COMPLETE    | 2021-06-14T21:19:35Z |\n| master_nodes_server_group     | f2235409-575e-4fb8-b3b8-cde0fc1ed9da | OS::Nova::ServerGroup                                                                | CREATE_COMPLETE    | 2021-06-14T21:19:35Z |\n+-------------------------------+--------------------------------------+--------------------------------------------------------------------------------------+--------------------+----------------------+\n")),(0,r.kt)("p",null,"Once the column ",(0,r.kt)("strong",{parentName:"p"},"resource","_","status")," reflects ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE_COMPLETE")," for all\nitems, the Kubernetes deployment is done."),(0,r.kt)("p",null,"It will take around 10 to 15 minutes for everything to finish deploying."),(0,r.kt)("p",null,"Kubernetes deployed by Magnum is handled by a series of Heat stacks."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note!")," You cannot move on with this guide if the deployment is\nnot completely finished.")),(0,r.kt)("h2",{id:"test-kubernetes-cluster"},"Test Kubernetes Cluster"),(0,r.kt)("p",null,"Once the deployment is complete, you can test the Kubernetes cluster.\nThis section briefly explains how to do this."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The following steps are all run in a local development, or testing,\nenvironment and assumes OpenStackClient is installed and pointed to the\nappropriate project."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Obtain a copy of ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," and make it executable:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\nchmod +x kubectl\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create testing directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir k8s-test\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Obtain cluster configuration:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"openstack coe cluster config --dir k8s-test kubernetes-demo\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," environment variable by executing the output of the\nprevious step:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```sh\nexport KUBECONFIG=/home/<user>/k8s-test/config\n```\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Interact with the cluster using ",(0,r.kt)("inlineCode",{parentName:"p"},"./kubectl get svc -A"),"."))),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./kubectl get svc -A\nNAMESPACE     NAME                            TYPE        CLUSTER-IP\nEXTERNAL-IP   PORT(S)                  AGE\ndefault       kubernetes                      ClusterIP   10.254.0.1\n<none>        443/TCP                  115m\nkube-system   csi-cinder-controller-service   ClusterIP   10.254.98.104\n<none>        12345/TCP                114m\nkube-system   kube-dns                        ClusterIP   10.254.0.10\n<none>        53/UDP,53/TCP,9153/TCP   115m\n")),(0,r.kt)("h2",{id:"how-to-resize-a-kubernetes-clusters-node-count"},"How to Resize a Kubernetes Cluster's Node Count"),(0,r.kt)("p",null,"At present, there is an issue with resizing a Kubernetes cluster's node\ncount using Horizon. To perform this task, you must perform the action\nover SSH using OpenStackClient."),(0,r.kt)("h3",{id:"resize-prerequisites"},"Resize Prerequisites"),(0,r.kt)("p",null,"Before preparing OpenStackClient, ensure a user with the admin role is\nassociated with the project under which the Kubernetes cluster exists.\nNext, download the OpenStack RC file for the appropriate project and\nuser. Finally, source this file to prepare your local shell."),(0,r.kt)("p",null,"This guide assumes OpenStackClient has been installed and pointed to the\nappropriate project. For information on how to install OpenStackClient,\nsee ",(0,r.kt)("a",{parentName:"p",href:"https://central.openmetal.io/documentation/operators-manual/how-to-install-and-use-openstack-s-cli/"},"How to Install and Use OpenStack's CLI"),"."),(0,r.kt)("p",null,"In addition, ",(0,r.kt)("inlineCode",{parentName:"p"},"python-magnumclient")," needs to be installed to work with\nthe Kubernetes cluster. This can be installed using ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install\npython-magnumclient"),"."),(0,r.kt)("p",null,"Once the environment is prepared, you can issue the command to resize\nthe cluster."),(0,r.kt)("h3",{id:"resize-procedure"},"Resize Procedure"),(0,r.kt)("p",null,"To resize the cluster, you need to first list all clusters to get the\nUUID."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"openstack coe cluster list\n")),(0,r.kt)("p",null,"From the above output, copy the cluster's UUID."),(0,r.kt)("p",null,"To resize a cluster to 3 nodes for example, use the following command,\nwhere ",(0,r.kt)("inlineCode",{parentName:"p"},"<cluster-uuid>")," should be replaced with the actual UUID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"openstack coe cluster resize <cluster-uuid> 3\n")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"This section will be filled as common failure scenarios and solutions\nare collected. For general troubleshooting see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openstack.org/magnum/latest/admin/troubleshooting-guide.html"},"Magnum Troubleshooting Guide"),"\nfrom OpenStack's documentation."))}c.isMDXComponent=!0},5490:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/umx_kube_cluster_form_1-4e83a5883f3e2b9a2b4528a0a8938148.png"},6423:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/umx_kube_cluster_form_2-c40ec44c5f3edb9a4c1777823610bcc3.png"},153:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/umx_kube_cluster_form_3-ee87af0cf93ff8b73e43122893874890.png"},8613:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/umx_kube_cluster_list-c03642a825fe21d88aafc3934a3c1cbf.png"},1451:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/umx_kube_create_in_progress-14bbc596912a2ef5e69ef81238b7d411.png"}}]);