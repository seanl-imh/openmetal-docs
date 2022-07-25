"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[7483],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3959:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},p="Launch an OpenStack Instance Automatically with HashiCorp Terraform",c={unversionedId:"operators-manual/day-4/automation/terraform",id:"operators-manual/day-4/automation/terraform",title:"Launch an OpenStack Instance Automatically with HashiCorp Terraform",description:"Introduction",source:"@site/docs/operators-manual/day-4/automation/terraform.md",sourceDirName:"operators-manual/day-4/automation",slug:"/operators-manual/day-4/automation/terraform",permalink:"/docs/manuals/operators-manual/day-4/automation/terraform",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-4/automation/terraform.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Container Orchestration with OpenStack Heat",permalink:"/docs/manuals/operators-manual/day-4/automation/heat"},next:{title:"How to Prepare and Use Ceph Ansible",permalink:"/docs/manuals/operators-manual/day-4/ceph-ansible/"}},s=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"How to Create an Instance Using Terraform",id:"how-to-create-an-instance-using-terraform",children:[{value:"Step 1: Prepare Terraform Directory",id:"step-1-prepare-terraform-directory",children:[],level:3},{value:"Step 2: Specify Terraform Provider",id:"step-2-specify-terraform-provider",children:[],level:3},{value:"Step 3: Initialize Terraform",id:"step-3-initialize-terraform",children:[],level:3},{value:"Step 4: Create OpenStack Application Credentials",id:"step-4-create-openstack-application-credentials",children:[],level:3},{value:"Step 5: Create Main Terraform File",id:"step-5-create-main-terraform-file",children:[{value:"Configure OpenStack Provider",id:"configure-openstack-provider",children:[],level:4},{value:"Configure Compute Resource",id:"configure-compute-resource",children:[],level:4}],level:3},{value:"Step 6: Create Terraform Plan",id:"step-6-create-terraform-plan",children:[],level:3},{value:"Step 7: Deploy Terraform Plan",id:"step-7-deploy-terraform-plan",children:[],level:3}],level:2},{value:"View Instance Created by Terraform",id:"view-instance-created-by-terraform",children:[],level:2}],u={toc:s};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"launch-an-openstack-instance-automatically-with-hashicorp-terraform"},"Launch an OpenStack Instance Automatically with HashiCorp Terraform"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Terraform allows you to write out your cloud's infrastructure as code,\ncommonly referred to as IaC. Using an IaC model allows software\ndevelopment practices to be applied to your cloud's infrastructure. A\ncloud's infrastructure as code can then be shared and iterated over as\nneeded. In this guide, we demonstrate how to use Terraform to spin up an\ninstance within a OpenMetal Private Cloud."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An OpenStack user account. The account does not have to have the\nadministrator role."),(0,o.kt)("li",{parentName:"ul"},"Linux command line experience"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads"},"Terraform installation"))),(0,o.kt)("h2",{id:"how-to-create-an-instance-using-terraform"},"How to Create an Instance Using Terraform"),(0,o.kt)("h3",{id:"step-1-prepare-terraform-directory"},"Step 1: Prepare Terraform Directory"),(0,o.kt)("p",null,"Terraform should be installed to a machine that has Internet access to\nyour Private Cloud. This could be your own machine or one of your\ncloud's hardware nodes, for example."),(0,o.kt)("p",null,"When working with Terraform, we suggest creating a folder to manage your\nTerraform plans and execution files. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir ~/terraform\n")),(0,o.kt)("h3",{id:"step-2-specify-terraform-provider"},"Step 2: Specify Terraform Provider"),(0,o.kt)("p",null,"When working with Terraform, you must specify a provider. There are a\nnumber of providers to choose from located in Terraform's\n",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/browse/providers"},"Providers")," website. For\nour case, we need to use Terraform's ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs"},"OpenStack\nProvider"),"\nbecause our clouds are powered by OpenStack."),(0,o.kt)("p",null,"To specify the OpenStack provider, create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"providers.tf"),"\nin your Terraform directory containing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'terraform {\n  required_providers {\n    openstack = {\n      source = "terraform-provider-openstack/openstack"\n      version = "1.46.0"\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"step-3-initialize-terraform"},"Step 3: Initialize Terraform"),(0,o.kt)("p",null,"With a provider defined, Terraform must be initialized."),(0,o.kt)("p",null,"To initialize Terraform, execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"terraform init\n")),(0,o.kt)("p",null,"When Terraform has been successfully initialized, the following message\nis returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Terraform has been successfully initialized!\nYou may now begin working with Terraform. Try running "terraform plan" to see\nany changes that are required for your infrastructure. All Terraform commands\nshould now work.\n\nIf you ever set or change modules or backend configuration for Terraform,\nrerun this command to reinitialize your working directory. If you forget, other\ncommands will detect it and remind you to do so if necessary.\n')),(0,o.kt)("h3",{id:"step-4-create-openstack-application-credentials"},"Step 4: Create OpenStack Application Credentials"),(0,o.kt)("p",null,"To point Terraform to the appropriate cloud and authenticate, you can\ngenerate a set of OpenStack Application Credentials. To do so, log in to\nyour cloud and navigate to the section ",(0,o.kt)("strong",{parentName:"p"},"Identity -",">"," Application\nCredentials"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(9517).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 1:")," Application Credentials"),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Create Application Credential")," to create a new set of\ncredentials. Fill out the details as needed and submit the form. Another\npop up form appears providing you the relevant details, like the ",(0,o.kt)("strong",{parentName:"p"},"ID"),",\n",(0,o.kt)("strong",{parentName:"p"},"Name"),", and ",(0,o.kt)("strong",{parentName:"p"},"Secret"),".. Additionally, you can download either an\n",(0,o.kt)("inlineCode",{parentName:"p"},"openrc")," file or a ",(0,o.kt)("inlineCode",{parentName:"p"},"clouds.yaml")," with this information pre-defined for\nyou. For this demonstration, we are using ",(0,o.kt)("inlineCode",{parentName:"p"},"clouds.yaml"),". When using\n",(0,o.kt)("inlineCode",{parentName:"p"},"clouds.yaml"),", download this file to the same folder in which you have\ninitialized Terraform."),(0,o.kt)("p",null,"The contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"clouds.yaml")," appears similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'clouds:\n  openstack:\n    auth:\n      auth_url: https://cloud.example.com:5000\n      application_credential_id: "7442c72c56c34d8780e83ca69b4f2a73"\n      application_credential_secret: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"\n    region_name: "iad3"\n    interface: "public"\n    identity_api_version: 3\n    auth_type: "v3applicationcredential"\n')),(0,o.kt)("h3",{id:"step-5-create-main-terraform-file"},"Step 5: Create Main Terraform File"),(0,o.kt)("p",null,"Everything is now in place to launch an instance. To do so, we must\ncreate a template, define the ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack")," provider, and define a compute\nresource."),(0,o.kt)("h4",{id:"configure-openstack-provider"},"Configure OpenStack Provider"),(0,o.kt)("p",null,"Within your Terraform directory, create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"main.tf"),". Then,\nfor the OpenStack provider, configure the cloud to point to, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'provider "openstack" {\n  cloud = "openstack"\n}\n')),(0,o.kt)("p",null,"The value for ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud")," can be variable. For our case the value should be\nset to ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack"),". This is determined by examining the ",(0,o.kt)("inlineCode",{parentName:"p"},"clouds.yaml"),"\ndownloaded in the previous section. The line immediately following\n",(0,o.kt)("inlineCode",{parentName:"p"},"clouds:")," is the name of your cloud. For this example, the start of\n",(0,o.kt)("inlineCode",{parentName:"p"},"clouds.yaml")," appears as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clouds:\n  openstack:\n    auth:\n      auth_url: https://cloud.example.com:5000\n")),(0,o.kt)("p",null,"The line immediately following ",(0,o.kt)("inlineCode",{parentName:"p"},"clouds:")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack:"),", indicating the\nname of this cloud is ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack")," and thus the value for ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud")," is set\nas ",(0,o.kt)("inlineCode",{parentName:"p"},'cloud = "openstack"'),"."),(0,o.kt)("h4",{id:"configure-compute-resource"},"Configure Compute Resource"),(0,o.kt)("p",null,"With the provider section configured, you can now define a compute\nresource. This compute resource is defined in the same ",(0,o.kt)("inlineCode",{parentName:"p"},"main.tf")," file.\nYou will need to collect a number of details from your cloud, such as an\nimage UUID, a list of flavors, a key pair, and any other items needed\nwhen spawning an instance."),(0,o.kt)("p",null,"To define a compute resource, we use the following template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'resource "openstack_compute_instance_v2" "<resource-name>" {\n  name = ""\n  image_id = ""\n  flavor_id = ""\n  key_pair = ""\n  security_groups = []\n\n  network {\n    name = ""\n  }\n}\n')),(0,o.kt)("p",null,"With the OpenStack Terraform provider, ",(0,o.kt)("inlineCode",{parentName:"p"},"openstack_compute_instance_v2"),"\nis a resource we can use to create an instance. For more details about\nthis resource and its configuration options, see Terraform's\n",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/"},"Registry"),' and search for\n"openstack',"_","compute","_","instance","_",'v2".'),(0,o.kt)("p",null,"A description of variables used for the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," block:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),": Defines the instance's name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"image","_","id"),": UUID for an operating system image hosted in your\ncloud"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"flavor","_","id"),": The value for an instance flavor"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"key","_","pair"),": The value for a key pair hosted in your cloud"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"security","_","groups"),": The value in list format for security groups\nto set")),(0,o.kt)("p",null,"Then within the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," block, we also configure a network with which\nthe instance will be associated by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"network")," block."),(0,o.kt)("p",null,"A description of the variable used for the ",(0,o.kt)("inlineCode",{parentName:"p"},"network")," block:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),": This is the name of a network available to your project")),(0,o.kt)("p",null,"As an example, here is the above template filled out using details from\na Private Cloud:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'resource "openstack_compute_instance_v2" "terraform-demo-instance" {\n  name = "demo-instance"\n  image_id = "c786deab-3fc6-4a92-9a1e-54bcab32e2c2"\n  flavor_id = "m1.small"\n  key_pair = "demo-key"\n  security_groups = ["default"]\n\n  network {\n    name = "Private"\n  }\n}\n')),(0,o.kt)("p",null,"The template name can be changed to suit your purposes but must include\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},".tf")," extension."),(0,o.kt)("h3",{id:"step-6-create-terraform-plan"},"Step 6: Create Terraform Plan"),(0,o.kt)("p",null,"Terraform needs to create a plan based on the current configuration.\nThis plan provides the changes Terraform will make to your cloud prior\nto making them, giving an operator a chance for review."),(0,o.kt)("p",null,"The command to create a Terraform plan is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"terraform plan\n")),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform plan")," does not save the plan to disk. To have the\nplan written to disk, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"terraform plan -out <path>\n")),(0,o.kt)("p",null,"Replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"<path>")," with where you want to store the Terraform plan."),(0,o.kt)("p",null,"For this example, we will have Terraform create the plan and write the\nplan to disk using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"terraform plan -out ~/terraform/plan\n")),(0,o.kt)("p",null,"This creates a Terraform plan in the location ",(0,o.kt)("inlineCode",{parentName:"p"},"~/terraform/plan"),"."),(0,o.kt)("h3",{id:"step-7-deploy-terraform-plan"},"Step 7: Deploy Terraform Plan"),(0,o.kt)("p",null,"After reviewing the plan and ensuring the changes to be made meet your\nexpectations, use Terraform to deploy the plan."),(0,o.kt)("p",null,"The command to deploy a Terraform plan is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"terraform apply [PLAN]\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"[PLAN]")," is an optional variable. For this example, since we saved\nthe plan to disk, we will use that plan when applying Terraform."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"terraform apply ~/terraform/plan\n")),(0,o.kt)("p",null,"Results of a successful plan application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ terraform apply ~/terraform/plan\nopenstack_compute_instance_v2.terraform-demo-instance: Creating...\nopenstack_compute_instance_v2.terraform-demo-instance: Still creating... [10s elapsed]\nopenstack_compute_instance_v2.terraform-demo-instance: Still creating... [20s elapsed]\nopenstack_compute_instance_v2.terraform-demo-instance: Creation complete after 24s [id=3a126456-bea5-4bc6-8ef8-d3375d35f7c8]\n\nApply complete! Resources: 1 added, 0 changed, 0 destroyed.\n")),(0,o.kt)("p",null,"This concludes using Terraform to spin up an instance in your Private\nCloud."),(0,o.kt)("h2",{id:"view-instance-created-by-terraform"},"View Instance Created by Terraform"),(0,o.kt)("p",null,"To view your created instance, navigate in Horizon to ",(0,o.kt)("strong",{parentName:"p"},"Project -",">","\nCompute -",">"," Instances"),", where you can view the instance created by\nTerraform."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(5005).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Figure 2:")," Newly Created Terraform Instance"))}d.isMDXComponent=!0},9517:function(e,t,r){t.Z=r.p+"assets/images/application-credentials-93177710cc30c23536eebe7925808d43.png"},5005:function(e,t,r){t.Z=r.p+"assets/images/newly-created-terraform-instance-3be79797a2e5126fd3b723dc18dfd549.png"}}]);