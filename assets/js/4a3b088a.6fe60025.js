"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[1597],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,k=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1309:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={slug:"/kubernetes-guides/installing-the-kubernetes-openstack-cloud-controller-manager"},c="Installing the Kubernetes OpenStack Cloud Controller Manager",s={unversionedId:"engineers-notes/openstack-cloud-controller-manager",id:"engineers-notes/openstack-cloud-controller-manager",title:"Installing the Kubernetes OpenStack Cloud Controller Manager",description:"Objective",source:"@site/docs/engineers-notes/openstack-cloud-controller-manager.md",sourceDirName:"engineers-notes",slug:"/kubernetes-guides/installing-the-kubernetes-openstack-cloud-controller-manager",permalink:"/docs/manuals/kubernetes-guides/installing-the-kubernetes-openstack-cloud-controller-manager",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/engineers-notes/openstack-cloud-controller-manager.md",tags:[],version:"current",frontMatter:{slug:"/kubernetes-guides/installing-the-kubernetes-openstack-cloud-controller-manager"},sidebar:"tutorialSidebar",previous:{title:"Installing an OpenShift cluster on OpenStack",permalink:"/docs/manuals/kubernetes-guides/installing-an-openshift-cluster-on-openstack"},next:{title:"Installing a Rancher managed cluster on OpenStack",permalink:"/docs/manuals/kubernetes-guides/installing-a-rancher-cluster-on-openstack"}},u=[{value:"Objective",id:"objective",children:[],level:2},{value:"Background",id:"background",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Generate application credentials",id:"generate-application-credentials",children:[],level:2},{value:"Create configuration file",id:"create-configuration-file",children:[],level:2},{value:"Create a secret",id:"create-a-secret",children:[],level:2},{value:"Deploy provider",id:"deploy-provider",children:[{value:"Deploy the OpenStack Cloud Controller Manager",id:"deploy-the-openstack-cloud-controller-manager",children:[],level:3},{value:"Wait for pods to be ready",id:"wait-for-pods-to-be-ready",children:[{value:"Troubleshooting",id:"troubleshooting",children:[],level:4}],level:3}],level:2},{value:"Verify",id:"verify",children:[{value:"Deploy a simply application",id:"deploy-a-simply-application",children:[],level:3},{value:"Create a load balancer service",id:"create-a-load-balancer-service",children:[],level:3},{value:"Watch for the service to be ready",id:"watch-for-the-service-to-be-ready",children:[],level:3},{value:"Verify the load balancer",id:"verify-the-load-balancer",children:[],level:3}],level:2},{value:"What&#39;s Next",id:"whats-next",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-the-kubernetes-openstack-cloud-controller-manager"},"Installing the Kubernetes OpenStack Cloud Controller Manager"),(0,o.kt)("h2",{id:"objective"},"Objective"),(0,o.kt)("p",null,"After following this guide you will be able to create publicly\navailable endpoints from your Kubernetes cluster."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"The OpenStack cloud provider allows the Kubernetes cluster to provision, monitor,\nand remove resources necessary for operation of the cluster. The OpenStack cloud\nprovider implements interfaces defined by the Kubernetes cloud controller manager.\nThe cloud controller manager is a daemon that embeds the cloud-specific control\nloops shipped with Kubernetes in the core. These loops were originally in the\nkube-controller-manager. However, cloud providers move at a different pace and\nschedule compared to the Kubernetes project, and abstracting the provider-specific\ncode to the cloud controller manager allows cloud vendors to evolve independently\nfrom the core Kubernetes code."),(0,o.kt)("p",null,"After you create a Kubernetes cluster on OpenStack, you can use the OpenStack\ncloud provider to create a load balancer for your Kubernetes services. You can\nalso use the cloud provider to create persistent volumes (PVs) backed by Cinder\nblock storage and dynamically provisioned volumes."),(0,o.kt)("p",null,"For more information, please see the cloud provider documentation:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/cloud-provider-openstack/blob/release-1.24/docs/openstack-cloud-controller-manager/using-openstack-cloud-controller-manager.md"},"OpenStack Cloud Controller Manager")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: This documentation was written for Kubernetes version 1.24. If installing\non a different Kubernetes version, please see the cooresponding documentation\nfor that version: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/cloud-provider-openstack"},"Cloud Provider Openstack"))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Kubernetes cluster on OpenStack")),(0,o.kt)("h2",{id:"generate-application-credentials"},"Generate application credentials"),(0,o.kt)("p",null,"First, you'll need to create an application credential for Kubernetes to use. Here's\nhow you can do that with the OpenStack CLI. You can also do this through the Horizon."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'openstack application credential create --description "Kubernetes" kubernetes\n')),(0,o.kt)("h2",{id:"create-configuration-file"},"Create configuration file"),(0,o.kt)("p",null,"On an environment with access to Kubernetes CLI, create the following configuration\nfile. Name the file ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud.conf"),". This file is used by the OpenStack cloud provider\nto authenticate with your OpenStack."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auth-url"),': You can find this under "API Access" within your project. It\'s\nlabeled as "Identity".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"floating-network-id"),": The ID of the network your cluster is on."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subnet-id"),": The ID of the subnet within your network.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"[Global]\nauth-url=http://192.128.1.15:5000\napplication-credential-id=\napplication-credential-secret=\n\n[LoadBalancer]\nuse-octavia=true\nfloating-network-id=\nsubnet-id=\n")),(0,o.kt)("h2",{id:"create-a-secret"},"Create a secret"),(0,o.kt)("p",null,"Create a secret with the configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret -n kube-system generic cloud-config --from-file=cloud.conf\n")),(0,o.kt)("h2",{id:"deploy-provider"},"Deploy provider"),(0,o.kt)("h3",{id:"deploy-the-openstack-cloud-controller-manager"},"Deploy the OpenStack Cloud Controller Manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/cloud-provider-openstack/master/manifests/controller-manager/cloud-controller-manager-roles.yaml\nkubectl apply -f https://raw.githubusercontent.com/kubernetes/cloud-provider-openstack/master/manifests/controller-manager/cloud-controller-manager-role-bindings.yaml\nkubectl apply -f https://raw.githubusercontent.com/kubernetes/cloud-provider-openstack/master/manifests/controller-manager/openstack-cloud-controller-manager-ds.yaml\n")),(0,o.kt)("h3",{id:"wait-for-pods-to-be-ready"},"Wait for pods to be ready"),(0,o.kt)("p",null,"The provider will attempt to create a pod on each of your control plane nodes.\nWe'll watch for them to be ready."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n kube-system -w\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                       READY   STATUS      RESTARTS      AGE\nopenstack-cloud-controller-manager-4qrdb   1/1     Running     0             2d1h\nopenstack-cloud-controller-manager-hjhn8   1/1     Running     0             2d1h\nopenstack-cloud-controller-manager-jqpbk   1/1     Running     0             2d1h\n")),(0,o.kt)("h4",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If pods do not automatically deploy on control plane nodes"),(0,o.kt)("p",{parentName:"li"},"  During our testing with RKE1, we found that the pods did not deploy on the control\nplane nodes. We had to manually update the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeSelector")," in the DaemonSet\nto add\nthe label of our control plane nodes. The default ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeSelector")," is:\n",(0,o.kt)("inlineCode",{parentName:"p"},'node-role.kubernetes.io/control-plane: ""')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'node-role.kubernetes.io/controlplane: "true"\n')),(0,o.kt)("p",{parentName:"li"},"  Edit the DaemonSet with the following command to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeSelector"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit daemonset/openstack-cloud-controller-manager -n kube-system\n")))),(0,o.kt)("h2",{id:"verify"},"Verify"),(0,o.kt)("p",null,"We'll verify the functionality of your cloud provider by creating a Kubernetes\nload balancer service. This will create a load balancer in OpenStack and assign\na floating IP to it."),(0,o.kt)("h3",{id:"deploy-a-simply-application"},"Deploy a simply application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl run hostname-server --image=lingxiankong/alpine-test --port=8080\n")),(0,o.kt)("h3",{id:"create-a-load-balancer-service"},"Create a load balancer service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl expose pod hostname-server --type=LoadBalancer --target-port=8080 --port=80 --name hostname-server\n")),(0,o.kt)("h3",{id:"watch-for-the-service-to-be-ready"},"Watch for the service to be ready"),(0,o.kt)("p",null,"When the service is ready, you'll see the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," field populated with\nthe floating IP of your load balancer. This may take a few minutes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc hostname-server -w\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME              TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)        AGE\nhostname-server   LoadBalancer   10.43.228.192   <pending>          80:31835/TCP   2d1h\n")),(0,o.kt)("p",null,"Troubleshooting:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If your service is stuck in a ",(0,o.kt)("inlineCode",{parentName:"li"},"pending")," state, but your load balancer is\ncreated in OpenStack, you can assign a floating IP to the load balancer\nmanually. The service will be automatically updated with the external IP.")),(0,o.kt)("h3",{id:"verify-the-load-balancer"},"Verify the load balancer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://<floating-ip>\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hostname-server\n")),(0,o.kt)("h2",{id:"whats-next"},"What's Next"),(0,o.kt)("p",null,"Now that you've configured, deployed, and verified your cloud provider, you can\nset up other cloud provider features. Cinder, Barbican, and Octavia are all supported\nby the cloud provider."),(0,o.kt)("p",null,"We'll cover how to configure them in our next Kubernetes guides. For now, please\nsee the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/cloud-provider-openstack"},"Cloud Provider OpenStack"),"."))}d.isMDXComponent=!0}}]);