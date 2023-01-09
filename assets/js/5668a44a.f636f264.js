"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[3157],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),b=r,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},5982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:6},l="How to install and configure Barbican on your OpenMetal Cloud",o={unversionedId:"tutorials/install-configure-barbican-openmetal",id:"tutorials/install-configure-barbican-openmetal",title:"How to install and configure Barbican on your OpenMetal Cloud",description:"What is Barbican?",source:"@site/docs/tutorials/install-configure-barbican-openmetal.md",sourceDirName:"tutorials",slug:"/tutorials/install-configure-barbican-openmetal",permalink:"/docs/manuals/tutorials/install-configure-barbican-openmetal",draft:!1,editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/tutorials/install-configure-barbican-openmetal.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Create a Site-to-Site VPN Connection with Endpoint Groups",permalink:"/docs/manuals/tutorials/create-site-to-site-vpn"},next:{title:"Create EC2 Credentials for Swift S3 API Access",permalink:"/docs/manuals/openstack-admin/access-swift-s3-api"}},s={},c=[{value:"What is Barbican?",id:"what-is-barbican",level:2},{value:"What can I do with a Secret Store?",id:"what-can-i-do-with-a-secret-store",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1 - Modify your kolla-ansible config",id:"step-1---modify-your-kolla-ansible-config",level:2},{value:"Step 2 - Reconfigure kolla-ansible",id:"step-2---reconfigure-kolla-ansible",level:2},{value:"Step 3 - Verify that the Barbican endpoints are there",id:"step-3---verify-that-the-barbican-endpoints-are-there",level:2},{value:"Step 4 - Install the Barbican OpenStack CLI",id:"step-4---install-the-barbican-openstack-cli",level:2},{value:"Step 5 - Create a test secret",id:"step-5---create-a-test-secret",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-install-and-configure-barbican-on-your-openmetal-cloud"},"How to install and configure Barbican on your OpenMetal Cloud"),(0,r.kt)("h2",{id:"what-is-barbican"},"What is Barbican?"),(0,r.kt)("p",null,"Barbican is the OpenStack Key Manager service. It provides secure storage,\nprovisioning and management of secret data. This includes keying material such\nas Symmetric Keys, Asymmetric Keys, Certificates and raw binary data."),(0,r.kt)("h2",{id:"what-can-i-do-with-a-secret-store"},"What can I do with a Secret Store?"),(0,r.kt)("p",null,"With Barbican configured the service can be utilized for a number of use cases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Image signature verification"),(0,r.kt)("li",{parentName:"ul"},"Disk and volume encryption"),(0,r.kt)("li",{parentName:"ul"},"SSL/TLS keypair storage"),(0,r.kt)("li",{parentName:"ul"},"Secure password storage")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openstack.org/security-guide/secrets-management/secrets-management-use-cases.html"},"OpenStack Security Guide"),"\nfor additional information."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SSH Access to your OMI Nodes"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://openmetal.io/docs/manuals/operators-manual/day-4/kolla-ansible/prepare-kolla-ansible"},"python virtual environment for kolla-ansible"))),(0,r.kt)("h2",{id:"step-1---modify-your-kolla-ansible-config"},"Step 1 - Modify your kolla-ansible config"),(0,r.kt)("p",null,"The kolla-ansible config file lives in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/kolla/globals.yml")," you will want to\nmodify that file an add the following in a new line within the config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"enable_barbican: 'yes'\n\n## NOTE: The below options are optional. Remove the '# ' in font to use them.\n# Valid options are [ simple_crypto, p11_crypto ]\n# barbican_crypto_plugin: \"simple_crypto\"\n# barbican_library_path: \"/usr/lib/libCryptoki2_64.so\"\n")),(0,r.kt)("h2",{id:"step-2---reconfigure-kolla-ansible"},"Step 2 - Reconfigure kolla-ansible"),(0,r.kt)("p",null,"Whenever calling ",(0,r.kt)("inlineCode",{parentName:"p"},"kolla-ansible")," you will want to note these 2 important files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kolla Ansible Inventory:\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/fm-deploy/kolla-ansible-inventory")),(0,r.kt)("li",{parentName:"ul"},"Kolla Ansible Main Configuration:\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/kolla/globals.yml"))),(0,r.kt)("p",null,"Once you have ensured that your configuration and inventory are there you will\nwant to run the following command to install and configure Barbican to your cloud."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kolla-ansible -i /etc/fm-deploy/kolla-ansible-inventory reconfigure\n")),(0,r.kt)("h2",{id:"step-3---verify-that-the-barbican-endpoints-are-there"},"Step 3 - Verify that the Barbican endpoints are there"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(.venv) [root@fierce-possum kolla]# openstack endpoint list --service barbican\n+----------------------------------+--------+--------------+--------------+---------+-----------+---------------------------+\n| ID                               | Region | Service Name | Service Type | Enabled | Interface | URL                       |\n+----------------------------------+--------+--------------+--------------+---------+-----------+---------------------------+\n| bbebfdc0f6ce4f9895d536785fa3cfea | iad3   | barbican     | key-manager  | True    | public    | http://200.225.44.4:9311  |\n| c7c9861c34ed44de8a3f65b9d74f80fa | iad3   | barbican     | key-manager  | True    | admin     | http://192.168.2.254:9311 |\n| da1d9afd031f470d80866256884ef242 | iad3   | barbican     | key-manager  | True    | internal  | http://192.168.2.254:9311 |\n+----------------------------------+--------+--------------+--------------+---------+-----------+---------------------------+\n")),(0,r.kt)("h2",{id:"step-4---install-the-barbican-openstack-cli"},"Step 4 - Install the Barbican OpenStack CLI"),(0,r.kt)("p",null,"While in your virtual environment, install the OpenStack CLI library for secret\nstorage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(.venv) [root@fierce-possum kolla]# pip install python-barbicanclient\n")),(0,r.kt)("h2",{id:"step-5---create-a-test-secret"},"Step 5 - Create a test secret"),(0,r.kt)("p",null,"Just to validate that its working, run the following command to create your\nfirst test secret."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(.venv) [root@fierce-possum kolla]# openstack secret store --name my_secret --payload 'This is a secure statement'\n+---------------+--------------------------------------------------------------------------+\n| Field         | Value                                                                    |\n+---------------+--------------------------------------------------------------------------+\n| Secret href   | http://200.225.44.4:9311/v1/secrets/973cffdb-d4b1-418c-befa-9f67d77a982b |\n| Name          | my_secret                                                                |\n| Created       | None                                                                     |\n| Status        | None                                                                     |\n| Content types | None                                                                     |\n| Algorithm     | aes                                                                      |\n| Bit length    | 256                                                                      |\n| Secret type   | opaque                                                                   |\n| Mode          | cbc                                                                      |\n| Expiration    | None                                                                     |\n+---------------+--------------------------------------------------------------------------+ \n")))}u.isMDXComponent=!0}}]);