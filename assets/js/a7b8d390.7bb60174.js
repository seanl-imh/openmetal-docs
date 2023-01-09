"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=s,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||l;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,r=new Array(l);r[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:s,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const l={slug:"/openstack-admin/use-aws-client-to-access-swift-s3-api",description:"Learn how to access your OpenMetal clouds' Object store using awscli and the Swift S3 API.",sidebar_position:8},r="How to Configure and Use AWS Client for Swift S3 API Access on OpenMetal",i={unversionedId:"tutorials/swift-s3-aws-cli",id:"tutorials/swift-s3-aws-cli",title:"How to Configure and Use AWS Client for Swift S3 API Access on OpenMetal",description:"Learn how to access your OpenMetal clouds' Object store using awscli and the Swift S3 API.",source:"@site/docs/tutorials/swift-s3-aws-cli.md",sourceDirName:"tutorials",slug:"/openstack-admin/use-aws-client-to-access-swift-s3-api",permalink:"/docs/manuals/openstack-admin/use-aws-client-to-access-swift-s3-api",draft:!1,editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/tutorials/swift-s3-aws-cli.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{slug:"/openstack-admin/use-aws-client-to-access-swift-s3-api",description:"Learn how to access your OpenMetal clouds' Object store using awscli and the Swift S3 API.",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Create EC2 Credentials for Swift S3 API Access",permalink:"/docs/manuals/openstack-admin/access-swift-s3-api"},next:{title:"How to Configure and Use s3cmd for Swift S3 API Access on OpenMetal",permalink:"/docs/manuals/openstack-admin/swift-s3-api-access-with-s3cmd"}},o={},c=[{value:"Objective",id:"objective",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Configure AWS client",id:"configure-aws-client",level:2},{value:"Basic AWS client usage",id:"basic-aws-client-usage",level:2},{value:"Reference",id:"reference",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"how-to-configure-and-use-aws-client-for-swift-s3-api-access-on-openmetal"},"How to Configure and Use AWS Client for Swift S3 API Access on OpenMetal"),(0,s.kt)("h2",{id:"objective"},"Objective"),(0,s.kt)("p",null,"The Swift s3api middleware provides an S3 API compatibility layer on your\nOpenMetal cloud. In this guide we will show you how access objects in your Ceph\nbacked object storage using a software designed to interact with S3-compatible\nendpoints."),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/manuals/openstack-admin/access-swift-s3-api"},"EC2 Credentials")," generated for your cloud.")),(0,s.kt)("h2",{id:"configure-aws-client"},"Configure AWS client"),(0,s.kt)("p",null,"Install the AWS client:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# Activate your virtual environment (optional but recommended)\nsource .venv/bin/activate\n\n# Install the client packages with pip\npip install awscli awscli-plugin-endpoint\n")),(0,s.kt)("p",null,"Configuring the installed client requires two files ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials")," and\n",(0,s.kt)("inlineCode",{parentName:"p"},"~/.aws/config"),". These are defined as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat ~/.aws/credentials\n\n[default]\naws_access_key_id = <access_key>\naws_secret_access_key = <secret_key>\n\n$ cat ~/.aws/config \n\n[plugins]\nendpoint = awscli_plugin_endpoint\n\n[profile default]\nregion = iad3\ns3 =\n  endpoint_url = <cloud_ip_or_url>:8080/\n  signature_version = s3v4\ns3api =\n  endpoint_url = <cloud_ip_or_url>:8080/\n")),(0,s.kt)("h2",{id:"basic-aws-client-usage"},"Basic AWS client usage"),(0,s.kt)("p",null,"List existing containers (buckets):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"aws --profile default s3 ls\n")),(0,s.kt)("p",null,"Create a new bucket:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"aws s3api create-bucket --bucket test-bucket\n")),(0,s.kt)("p",null,"Upload a local file to your cloud:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ aws --profile default s3 cp test-file-up.txt s3://test-bucket/\nupload: ./test-file-up.txt to s3://test-bucket/test-file-up.txt \n")),(0,s.kt)("p",null,"Download an object from your cloud:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ aws --profile default s3 cp s3://test-bucket/test-file-down.txt test-file-down.txt \ndownload: s3://test-bucket/test-file-down.txt to ./test-file-down.txt\n")),(0,s.kt)("p",null,"Delete an object:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ aws --profile default s3 rm s3://test-bucket/test-file-down.txt \ndelete: s3://test-bucket/test-file-down.txt\n")),(0,s.kt)("p",null,"Delete an empty bucket:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ aws --profile default s3 rb s3://test-bucket\nremove_bucket: test-bucket\n")),(0,s.kt)("h3",{id:"reference"},"Reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"S3 client command ",(0,s.kt)("a",{parentName:"li",href:"https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/index.html"},"reference"))))}p.isMDXComponent=!0}}]);