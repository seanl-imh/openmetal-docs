"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[9198],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3821:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_position:5},s="VPNaaS Configuration and Deployment",p={unversionedId:"tutorials/vpnaas-configure-deploy",id:"tutorials/vpnaas-configure-deploy",title:"VPNaaS Configuration and Deployment",description:"Installation and configuration of Virtual Private Networking as a Service",source:"@site/docs/tutorials/vpnaas-configure-deploy.md",sourceDirName:"tutorials",slug:"/tutorials/vpnaas-configure-deploy",permalink:"/docs/manuals/tutorials/vpnaas-configure-deploy",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/tutorials/vpnaas-configure-deploy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Getting Started with Ceilometer and Gnocchi",permalink:"/docs/manuals/tutorials/getting-started-with-ceilometer-and-gnocchi"},next:{title:"Create a Site-to-Site VPN Connection with Endpoint Groups",permalink:"/docs/manuals/tutorials/create-site-to-site-vpn"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Preparation",id:"preparation",children:[{value:"Downgrade libreswan",id:"downgrade-libreswan",children:[],level:3},{value:"Deploy Changes with Kolla Ansible",id:"deploy-changes-with-kolla-ansible",children:[],level:3},{value:"Install Required Modules for Horizon Management",id:"install-required-modules-for-horizon-management",children:[],level:3}],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vpnaas-configuration-and-deployment"},"VPNaaS Configuration and Deployment"),(0,o.kt)("p",null,"Installation and configuration of Virtual Private Networking as a Service\n(VPNaaS) on your OpenMetal Cloud."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../operators-manual/day-4/kolla-ansible/prepare-kolla-ansible"},"Kolla Ansible")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../operators-manual/day-1/command-line/openstackclient"},"OpenstackCLI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"python-neutronclient")," cli plugin for advanced networking.")),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("p",null,"You will first need to ensure the following values are set in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/kolla/globals.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ grep vpnaas /etc/kolla/globals.yml\nenable_horizon_neutron_vpnaas: "yes"\nenable_neutron_vpnaas: "yes"\n')),(0,o.kt)("h3",{id:"downgrade-libreswan"},"Downgrade libreswan"),(0,o.kt)("p",null,"When using the CentOS 8 binary container images, as in the case in our current\nenvironment. The version of libreswan will need to be downgraded. This can be\ndone by performing the following steps for each ",(0,o.kt)("inlineCode",{parentName:"p"},"neutron-l3-agent")," container."),(0,o.kt)("p",null,"First enter the container as the root user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker exec -u root -it neutron_l3_agent /bin/bash\n(neutron-l3-agent)[root@exhilarated-firefly /]#\n")),(0,o.kt)("p",null,"Ensure the CentOS BaseOS, AppStream and PowerTools repos have a valid ",(0,o.kt)("inlineCode",{parentName:"p"},"baseurl"),"\ndefined. As the current images in use are running CentOS 8 we point to the\nofficial vault repo."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"baseurl=http://vault.centos.org/$contentdir/$releasever/BaseOS/$basearch/os/")),(0,o.kt)("p",null,"Example one-shot command to modify repo files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sed -i.bak 's@mirrorlist=@#mirrorlist=@;s@#baseurl=.*@baseurl=http://vault.centos.org/$contentdir/$releasever/BaseOS/$basearch/os/@' /etc/yum.repos.d/CentOS-Linux-{BaseOS,AppStream,PowerTools}.repo\n")),(0,o.kt)("p",null,"Confirm the changes made to the repo files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"(neutron-l3-agent)[root@exhilarated-firefly /]# grep baseurl /etc/yum.repos.d/CentOS-Linux-{BaseOS,AppStream,PowerTools}.repo | grep -v '#'\n/etc/yum.repos.d/CentOS-Linux-BaseOS.repo:baseurl=http://vault.centos.org/$contentdir/$releasever/BaseOS/$basearch/os/\n/etc/yum.repos.d/CentOS-Linux-AppStream.repo:baseurl=http://vault.centos.org/$contentdir/$releasever/BaseOS/$basearch/os/\n/etc/yum.repos.d/CentOS-Linux-PowerTools.repo:baseurl=http://vault.centos.org/$contentdir/$releasever/BaseOS/$basearch/os/\n")),(0,o.kt)("p",null,"You will need to obtain the RPM for the required version manually, here we use\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl https://koji.mbox.centos.org/pkgs/packages/libreswan/3.32/6.el8/x86_64/libreswan-3.32-6.el8.x86_64.rpm --output libreswan-3.32-6.el8.x86_64.rpm\ncurl (https://koji.mbox.centos.org/pkgs/packages/libreswan/3.32/6.el8/x86_64/libreswan-3.32-6.el8.x86_64.rpm): response: 200, time: 0.150641, size: 1441280\n")),(0,o.kt)("p",null,"Confirm download."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ls -alh libreswan-3.32-6.el8.x86_64.rpm\n-rw-r--r--. 1 root root 1.4M Jun 27 19:13 libreswan-3.32-6.el8.x86_64.rpm\n")),(0,o.kt)("p",null,"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ yum --disablerepo=* --enablerepo=baseos,appstream,powertools downgrade libreswan-3.32-6.el8.x86_64.rpm\nCentOS Linux 8 - AppStream                                                                                                84 kB/s | 3.9 kB     00:00    \nCentOS Linux 8 - BaseOS                                                                                                   20 MB/s | 4.6 MB     00:00    \nCentOS Linux 8 - PowerTools                                                                                               30 MB/s | 4.6 MB     00:00    \nDependencies resolved.\n=========================================================================================================================================================\n Package                             Architecture                     Version                               Repository                              Size\n=========================================================================================================================================================\nDowngrading:\n libreswan                           x86_64                           3.32-6.el8                            @commandline                           1.4 M\n\nTransaction Summary\n=========================================================================================================================================================\nDowngrade  1 Package\n\nTotal size: 1.4 M\nIs this ok [y/N]: y\nDownloading Packages:\nRunning transaction check\nTransaction check succeeded.\nRunning transaction test\nTransaction test succeeded.\nRunning transaction\n  Preparing        :                                                                                                                                 1/1 \n  Running scriptlet: libreswan-3.32-6.el8.x86_64                                                                                                     1/1 \n  Downgrading      : libreswan-3.32-6.el8.x86_64                                                                                                     1/2 \n  Running scriptlet: libreswan-3.32-6.el8.x86_64                                                                                                     1/2 \n  Running scriptlet: libreswan-4.3-3.el8.x86_64                                                                                                      2/2 \n  Cleanup          : libreswan-4.3-3.el8.x86_64                                                                                                      2/2 \n  Running scriptlet: libreswan-4.3-3.el8.x86_64                                                                                                      2/2 \n  Verifying        : libreswan-3.32-6.el8.x86_64                                                                                                     1/2 \n  Verifying        : libreswan-4.3-3.el8.x86_64                                                                                                      2/2 \n\nDowngraded:\n  libreswan-3.32-6.el8.x86_64                                                                                                                            \n\nComplete!\n")),(0,o.kt)("p",null,"Exit the container and issue a restart with docker."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker restart neutron_l3_agent\n")),(0,o.kt)("p",null,"Repeat the above across the remaining nodes."),(0,o.kt)("h3",{id:"deploy-changes-with-kolla-ansible"},"Deploy Changes with Kolla Ansible"),(0,o.kt)("p",null,"With this preparation complete you can now deploy the changes with\n",(0,o.kt)("inlineCode",{parentName:"p"},"kolla-ansible"),". To deploy the changes, use Kolla Ansible's ",(0,o.kt)("inlineCode",{parentName:"p"},"reconfigure"),"\nsubcommand. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kolla-ansible -i /etc/fm-deploy/kolla-ansible-inventory reconfigure\n--- OUTPUT TRUNCATED ---\nPLAY RECAP **********************************************************************************************************************************************\nexhilarated-firefly        : ok=290  changed=22   unreachable=0    failed=0    skipped=187  rescued=0    ignored=0   \ngifted-wildcat             : ok=454  changed=39   unreachable=0    failed=0    skipped=213  rescued=0    ignored=0   \nlocalhost                  : ok=4    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \nupbeat-peacock             : ok=290  changed=22   unreachable=0    failed=0    skipped=187  rescued=0    ignored=0\n")),(0,o.kt)("h3",{id:"install-required-modules-for-horizon-management"},"Install Required Modules for Horizon Management"),(0,o.kt)("p",null,"In our current deployment the VPNaaS modules for Horizon are not included by\ndefault. You can use the steps below to install them manually."),(0,o.kt)("p",null,"First enter the Horizon container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker exec -it horizon /bin/bash\n(horizon)[root@gifted-wildcat /]#\n")),(0,o.kt)("p",null,"Next install the required modules with the ",(0,o.kt)("inlineCode",{parentName:"p"},"pip3")," command with ",(0,o.kt)("inlineCode",{parentName:"p"},"--prefix /usr"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ pip3 install --prefix /usr neutron-vpnaas-dashboard\n--- OUTPUT TRUNCATED ---\nInstalling collected packages: neutron-vpnaas-dashboard, enmerkar\nSuccessfully installed enmerkar-0.7.1 neutron-vpnaas-dashboard-6.0.0\n")),(0,o.kt)("p",null,"Then reconfigure Horizon on the container with the ",(0,o.kt)("inlineCode",{parentName:"p"},"kolla_extend_start")," tool\n(any deprecation errors such as the one below can be safely ignored)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kolla_extend_start\n--- OUTPUT TRUNCATED ---\n2498 static files copied to '/usr/lib/python3.6/site-packages/static'.\n/usr/lib64/python3.6/site-packages/scss/namespace.py:172: DeprecationWarning: inspect.getargspec() is deprecated since Python 3.0, use inspect.signature() or inspect.getfullargspec()\n  argspec = inspect.getargspec(function)\n/usr/lib/python3.6/site-packages/django/contrib/staticfiles/templatetags/staticfiles.py:26: RemovedInDjango30Warning: {% load staticfiles %} is deprecated in favor of {% load static %}.\n  RemovedInDjango30Warning,\nCompressing... done\nCompressed 7 block(s) from 12 template(s) for 0 context(s).\n")),(0,o.kt)("p",null,"Restart the Horizon container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker restart horizon\n")),(0,o.kt)("p",null,"Finally, repeat the above across the remaining nodes."))}d.isMDXComponent=!0}}]);