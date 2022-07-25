"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[7027],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},272:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={},l="Container Orchestration with OpenStack Heat",c={unversionedId:"operators-manual/day-4/automation/heat",id:"operators-manual/day-4/automation/heat",title:"Container Orchestration with OpenStack Heat",description:"Introduction",source:"@site/docs/operators-manual/day-4/automation/heat.md",sourceDirName:"operators-manual/day-4/automation",slug:"/operators-manual/day-4/automation/heat",permalink:"/docs/manuals/operators-manual/day-4/automation/heat",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-4/automation/heat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenStack Disaster Planning, Testing, and Recovery",permalink:"/docs/manuals/operators-manual/day-3/disaster-recovery"},next:{title:"Launch an OpenStack Instance Automatically with HashiCorp Terraform",permalink:"/docs/manuals/operators-manual/day-4/automation/terraform"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Overview of Heat Orchestration",id:"overview-of-heat-orchestration",children:[{value:"How to View Heat Stacks in Horizon",id:"how-to-view-heat-stacks-in-horizon",children:[],level:3},{value:"Architecture",id:"architecture",children:[],level:3}],level:2},{value:"Heat Orchestration Template Components",id:"heat-orchestration-template-components",children:[{value:"Template Version",id:"template-version",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Resources",id:"resources",children:[],level:3},{value:"Output",id:"output",children:[],level:3}],level:2},{value:"Sample Heat Orchestration Template",id:"sample-heat-orchestration-template",children:[{value:"Attributes",id:"attributes",children:[],level:3}],level:2},{value:"Deploying a Heat Template in Horizon",id:"deploying-a-heat-template-in-horizon",children:[],level:2},{value:"Viewing Recently Deployed Stacks in Horizon",id:"viewing-recently-deployed-stacks-in-horizon",children:[],level:2},{value:"Additional Resources for OpenStack Heat Service",id:"additional-resources-for-openstack-heat-service",children:[],level:2}],u={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"container-orchestration-with-openstack-heat"},"Container Orchestration with OpenStack Heat"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This guide provides an introduction to Heat Orchestration through\nOpenStack. Outlined within this article are the basics of Orchestration\nand the mechanics of the Heat Orchestration Engine. Then we review a\nsample of a Heat Orchestration Template and provide the appropriate\nsyntax. Lastly, we cover how to deploy a template and check the status\nof a Heat Stack."),(0,o.kt)("h2",{id:"overview-of-heat-orchestration"},"Overview of Heat Orchestration"),(0,o.kt)("p",null,"Orchestration tools utilize automation to deploy, manage, scale, and\nnetwork containers. Within OpenStack, the primary orchestration\ncomponent is Heat. Heat uses an orchestration engine for the automation\nof resources, infrastructure, applications, and services. These created\nresources are referred to as Stacks. Heat Stacks are deployed using Heat\nOrchestration Templates also referred to as HOT templates. HOT templates\nare created in YAML that passes instructions to the Heat Engine\nspecifying the resources to be deployed."),(0,o.kt)("h3",{id:"how-to-view-heat-stacks-in-horizon"},"How to View Heat Stacks in Horizon"),(0,o.kt)("p",null,"To view all current Stacks within your OpenMetal Cloud, navigate to\n",(0,o.kt)("strong",{parentName:"p"},"Project -",">"," Orchestration -",">"," Stacks"),". Within this section, you can\nview all your current stacks as well as launch and preview HOT\ntemplates."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(1805).Z})),(0,o.kt)("h3",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"Heat API receives rest API calls from the following sources: Horizon,\nHOT Templates, and through the Heat Client. The Heat API is then passed\nto RabbitMQ or another message broker which activates the Heat\nOrchestration Engine. The Heat Orchestration Engine then connects to\nresources including Nova, Glance, Neutron, and Cinder and parses\ninstructions from the HOT template for functions and parameters. These\nfunctions and parameters are then used to create resources known as\nstacks."),(0,o.kt)("h2",{id:"heat-orchestration-template-components"},"Heat Orchestration Template Components"),(0,o.kt)("p",null,"Central to the deployment of Heat and the creation of Stacks is the use\nof templates. Heat Templates are written in YAML with the following\nstructure:"),(0,o.kt)("h3",{id:"template-version"},"Template Version"),(0,o.kt)("p",null,"The template version is formatted as date and corresponds to different\nversions of heat. The template version tells Heat how the template will\nbe structured, what features can be validated, and what resources can be\ncreated. Currently, the latest template version that is supported is\n2018-08-31 (rocky)."),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"Although optional, a description is highly recommended as it outlines\nthe intended function of the template. This is particularly useful for\ntemplates that are not frequently used or are intended to be shared\namong various members of a team or project."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"Parameters are optional but allow a user to pass additional values to\nthe template. These values are used to overwrite any default settings\nthat are specified in the resources section."),(0,o.kt)("h3",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Resources are what are ultimately created by the Heat Orchestration\nEngine. These values can be default values or input from the parameters\nabove."),(0,o.kt)("h3",{id:"output"},"Output"),(0,o.kt)("p",null,"Output in a Heat Template is optional. However, you can pass values from\nHeat upon execution of the template. These values are accessed through\nHeat API or client tools."),(0,o.kt)("h2",{id:"sample-heat-orchestration-template"},"Sample Heat Orchestration Template"),(0,o.kt)("p",null,"The following is an example of a Heat Orchestration Template to deploy\nan instance. In this example, all resources receive their values fed\nseparately as parameters. When formatting parameters, each parameter is\ngrouped in a nested block. The first line contains the name of the\nparameter and additional attributes are grouped below each element."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Parameter Name: Name of Parameter"),(0,o.kt)("li",{parentName:"ul"},"Type: Required value that supports the following types: ",(0,o.kt)("strong",{parentName:"li"},"string"),",\n",(0,o.kt)("strong",{parentName:"li"},"comma","_","delimited","_","list"),", ",(0,o.kt)("strong",{parentName:"li"},"json"),", ",(0,o.kt)("strong",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"Label: Optional attribute, creates a name for the parameter for\nadditional readability"),(0,o.kt)("li",{parentName:"ul"},"Description: Optional attribute, creates a description for parameter"),(0,o.kt)("li",{parentName:"ul"},"Default: Optional attribute, default values for parameters if input\nis not specified by the user")),(0,o.kt)("p",null,"Example Heat Orchestration Template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"heat_template_version: 2018-03-02\n\ndescription: Simple template to deploy a single instance\n\nparameters:\n  key_name:\n    type: string\n    label: Key Name\n    description: Name of key-pair to be used for compute instance\n  image_id:\n    type: string\n    label: Image ID\n    description: Image to be used for compute instance\n  instance_type:\n    type: string\n    label: Instance Type\n    description: Type of instance (flavor) to be used\n  network_name:\n    type: string\n    description: The network to be used\n  security_groups:\n    type: comma_delimited_list\n    description: Name of the Security Group\n\nresources:\n  my_instance:\n    type: OS::Nova::Server\n    properties:\n      key_name: { get_param: key_name }\n      image: { get_param: image_id }\n      networks:\n        - network: { get_param: network_name }\n      flavor: { get_param: instance_type }\n      security_groups: { get_param: security_groups }\n")),(0,o.kt)("h2",{id:"deploying-a-heat-template-in-horizon"},"Deploying a Heat Template in Horizon"),(0,o.kt)("p",null,"To deploy a heat template in Horizon, first, check to see that you have\nselected the appropriate project for your deployment and then navigate\nto ",(0,o.kt)("strong",{parentName:"p"},"Project -",">"," Orchestration -",">"," Stacks")," and locate ",(0,o.kt)("strong",{parentName:"p"},"Launch Stack"),"\nnear the top right."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(8240).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 1:")," Launch Stack"),(0,o.kt)("p",null,"For this example, we have uploaded the template example as a file called\n",(0,o.kt)("inlineCode",{parentName:"p"},"hot_example.yml")," using the ",(0,o.kt)("strong",{parentName:"p"},"Choose File")," button. After uploading your\nexample template, click ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(9194).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 2:")," Select Template"),(0,o.kt)("p",null,"For the example template listed above, the following parameters are\nneeded to launch a running instance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stack Name"),(0,o.kt)("li",{parentName:"ul"},"Image"),(0,o.kt)("li",{parentName:"ul"},"Instance Type"),(0,o.kt)("li",{parentName:"ul"},"Key"),(0,o.kt)("li",{parentName:"ul"},"Network"),(0,o.kt)("li",{parentName:"ul"},"Security groups")),(0,o.kt)("p",null,"In the Launch stack window, fill out the following parameters with the\ntype of stack you wish to deploy."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Instance type refers to the flavor of instance you wish to set\nup."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(7524).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 3:")," Launch Stack"),(0,o.kt)("h2",{id:"viewing-recently-deployed-stacks-in-horizon"},"Viewing Recently Deployed Stacks in Horizon"),(0,o.kt)("p",null,"To view recently deployed stacks in Horizon, switch to the appropriate\nproject where the stack was created. Then navigate to ",(0,o.kt)("strong",{parentName:"p"},"Project -",">","\nOrchestration -",">"," Stacks")," to view all created stacks."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(8144).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 4:")," Stacks Created within Admin Project"),(0,o.kt)("p",null,"Figure 4 shows the newly created test stack that was created by the\nexample. You have the option to check the stack as well as view its\ncurrent status."),(0,o.kt)("p",null,"If you need additional information, click the link under ",(0,o.kt)("strong",{parentName:"p"},"Stack Name"),"\nand you can view an overview of the stack information, resources,\nevents, and even a copy of the template used to create the stack."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:a(6694).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 5:")," Overview of Test Stack"),(0,o.kt)("h2",{id:"additional-resources-for-openstack-heat-service"},"Additional Resources for OpenStack Heat Service"),(0,o.kt)("p",null,"For the latest on OpenStack Heat Documentation visit ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/heat/latest/#"},"Welcome to the\nHeat documentation"),". Further\nreading regarding Heat architecture can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/heat/latest/developing_guides/architecture.html"},"Heat\narchitecture"),".\nAdditionally, OpenStack has a guide for creating your first stack\nthrough heat that can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openstack.org/heat/latest/getting_started/create_a_stack.html"},"Creating your first\nstack"),"."))}h.isMDXComponent=!0},8144:function(e,t,a){t.Z=a.p+"assets/images/admin-created-stack-ae64ac1c17a74d479af20515814cc69b.png"},1805:function(e,t,a){t.Z=a.p+"assets/images/heat_dashboard-c0dfb424c04876e80cbfe501c53669a9.png"},7524:function(e,t,a){t.Z=a.p+"assets/images/launch-stack-2-d62b5f9deb1f7cf9c41203dfe7a5409d.png"},8240:function(e,t,a){t.Z=a.p+"assets/images/launch-stack-4232c1edf7bc83ba3610072c863ddf29.png"},9194:function(e,t,a){t.Z=a.p+"assets/images/select-template-6a6a6e77106d22f6ae3a3972db7c238e.png"},6694:function(e,t,a){t.Z=a.p+"assets/images/test-stack-overview-632da1913dfc314578011dd8a5c43e04.png"}}]);