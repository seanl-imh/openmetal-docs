"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[6191],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||r;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},366:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],s={sidebar_position:3},l="Manage and Upload Images in OpenStack Horizon",c={unversionedId:"operators-manual/day-1/horizon/images",id:"operators-manual/day-1/horizon/images",title:"Manage and Upload Images in OpenStack Horizon",description:"Introduction",source:"@site/docs/operators-manual/day-1/horizon/images.md",sourceDirName:"operators-manual/day-1/horizon",slug:"/operators-manual/day-1/horizon/images",permalink:"/docs/manuals/operators-manual/day-1/horizon/images",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-1/horizon/images.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a User and Project in OpenStack Horizon",permalink:"/docs/manuals/operators-manual/day-1/horizon/create-user-project"},next:{title:"How to Create an Instance in OpenStack Horizon",permalink:"/docs/manuals/operators-manual/day-1/horizon/create-first-instance"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Managing Images",id:"managing-images",children:[],level:2},{value:"Uploading Images",id:"uploading-images",children:[],level:2},{value:"Create Images From Running Instances",id:"create-images-from-running-instances",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],m={toc:p};function u(e){var n=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-and-upload-images-in-openstack-horizon"},"Manage and Upload Images in OpenStack Horizon"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This guide provides instructions for how to upload an image into\nOpenStack as well as create images out of an existing instance. Images\ncontain a bootable operating system that is used to create instances.\nWithin your OpenMetal Cloud, there are several different images that are\nreadily available including CentOS, Debian, Fedora, and Ubuntu. In\naddition to this, you have the option to upload images from other\nsources or create your images. Images can either be built from ISO or\nimages can be created out of snapshots of instances. This guide will\nwalk you through how to upload images to Glance through Horizon and how\nto create an image from an instance snapshot."),(0,r.kt)("h2",{id:"managing-images"},"Managing Images"),(0,r.kt)("p",null,"The primary tool for managing images is OpenStack's Glance service.\nGlance uses Ceph to store images instead of the local file system. You\ncan upload images through Glance and uploaded images cannot be changed.\nFor further information on how to create and modify virtual images\nwithin OpenStack, view the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openstack.org/image-guide/"},"Virtual Machine Image\nGuide"),"."),(0,r.kt)("p",null,"To access images from within your Horizon Dashboard, navigate to the\nProjects tab. Within the projects tab, select Compute and you are\npresented with the option to select Images. This tab contains a list of\nall your images within OpenStack."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(5783).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 1:")," Image List Within Horizon Dashboard"),(0,r.kt)("h2",{id:"uploading-images"},"Uploading Images"),(0,r.kt)("p",null,"Images can be uploaded through your Horizon dashboard. With our\nconfiguration, the recommended format for images is ",(0,r.kt)("strong",{parentName:"p"},"QCOW2 - QEMU\nemulator"),". QCOW2 is the most common format for Linux KVM, expands\ndynamically, and supports ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Copy-on-write"},"copy on\nwrite"),". In this section, we\nexplain how to upload images through Horizon."),(0,r.kt)("p",null,"In order to upload an image on Horizon, you must first have the image\nlocally on your machine. In this example, we demonstrate uploading the\nCirrOS image. To download this image visit ",(0,r.kt)("a",{parentName:"p",href:"https://download.cirros-cloud.net/0.5.2/cirros-0.5.2-x86_64-disk.img"},"CirrOS Latest\nDownload"),"."),(0,r.kt)("p",null,"After downloading the image locally to your machine, navigate in your\nHorizon dashboard to ",(0,r.kt)("strong",{parentName:"p"},"Project -",">"," Compute -",">"," Images"),", where you are\npresented with a list of options for managing images. To begin uploading\nthis image, click the ",(0,r.kt)("strong",{parentName:"p"},"Create Image")," button near the top right."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(772).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 2:")," Creating an Image Within Horizon Dashboard"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(4048).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 3:")," Create Image Form"),(0,r.kt)("p",null,"For this demonstration, we enter in values for the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Image Name"),": Name of the image"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Image Description"),": Optional description of the image"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"File"),": The source file on your machine"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Format"),": - For this example, we are using QCOW2 - QEMU Emulator")),(0,r.kt)("p",null,"Fill out the details as needed and submit the form. It may take some\ntime to complete uploading the image."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(2971).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 3:")," CirrOS Image Listed in Horizon Dashboard"),(0,r.kt)("h2",{id:"create-images-from-running-instances"},"Create Images From Running Instances"),(0,r.kt)("p",null,"To create an image from a running instance, you must first create a\nsnapshot of your instance. Once created, a snapshot is a usable image\nwithin Glance that can create instances."),(0,r.kt)("p",null,"To create a snapshot in Horizon, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Project -",">"," Compute -",">","\nInstances")," and locate the ",(0,r.kt)("strong",{parentName:"p"},"Create Snapshot")," option from the listed\ninstance's drop down menu. In the form that appears, enter a name for\nyour snapshot."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(8482).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 4:")," Create Snapshot Button Within Horizon Dashboard"),(0,r.kt)("p",null,"Once your snapshot has been created, the snapshot name is added to your\nlist of images. You can use this image to launch new instances."),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.openstack.org/glance/victoria/"},"OpenStack Victoria Glance\nDocumentation")))}u.isMDXComponent=!0},2971:function(e,n,t){n.Z=t.p+"assets/images/cirros-uploaded-ba27f7b02f8fd315953ba06791953ed5.png"},4048:function(e,n,t){n.Z=t.p+"assets/images/create-image-form-b45db280e55e87dc72cc388bae5195ff.png"},772:function(e,n,t){n.Z=t.p+"assets/images/create-image-ee642a187158d07a7fb9e293eaf18e2c.png"},8482:function(e,n,t){n.Z=t.p+"assets/images/create-instance-snapshot-287b8c15174568803a2ae5ad27bc76ee.png"},5783:function(e,n,t){n.Z=t.p+"assets/images/image-list-5fc0ab555b4cdf532e67305de7904059.png"}}]);