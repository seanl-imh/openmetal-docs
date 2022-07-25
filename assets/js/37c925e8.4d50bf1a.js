"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[7717],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return k}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return n?t.createElement(m,l(l({ref:a},p),{},{components:n})):t.createElement(m,l({ref:a},p))}));function k(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4264:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s="How to Copy and Restore OpenStack Service Databases and Configuration",c={unversionedId:"operators-manual/day-3/create-openstack-service-backups",id:"operators-manual/day-3/create-openstack-service-backups",title:"How to Copy and Restore OpenStack Service Databases and Configuration",description:"Introduction",source:"@site/docs/operators-manual/day-3/create-openstack-service-backups.md",sourceDirName:"operators-manual/day-3",slug:"/operators-manual/day-3/create-openstack-service-backups",permalink:"/docs/manuals/operators-manual/day-3/create-openstack-service-backups",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-3/create-openstack-service-backups.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Add or Remove OpenStack Hardware Nodes",permalink:"/docs/manuals/operators-manual/day-3/add-remove-hardware-nodes"},next:{title:"Create and Restore Volume Backups",permalink:"/docs/manuals/operators-manual/day-3/create-volume-backups"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Before Proceeding with this Guide",id:"before-proceeding-with-this-guide",children:[],level:2},{value:"Kolla Ansible and Ceph Ansible",id:"kolla-ansible-and-ceph-ansible",children:[{value:"Prepare Kolla Ansible and Ceph Ansible Environment",id:"prepare-kolla-ansible-and-ceph-ansible-environment",children:[],level:3},{value:"Where are my Private Cloud&#39;s Configuration Files?",id:"where-are-my-private-clouds-configuration-files",children:[{value:"Kolla Ansible Configuration Files",id:"kolla-ansible-configuration-files",children:[],level:4},{value:"Ceph Ansible Configuration Files",id:"ceph-ansible-configuration-files",children:[],level:4},{value:"FM-Deploy Configuration File",id:"fm-deploy-configuration-file",children:[],level:4},{value:"Network Ansible Configuration File",id:"network-ansible-configuration-file",children:[],level:4}],level:3},{value:"Keep a Backup Copy a Private Cloud&#39;s Configuration Files",id:"keep-a-backup-copy-a-private-clouds-configuration-files",children:[],level:3}],level:2},{value:"How to Restore a Private Cloud&#39;s Configuration Files",id:"how-to-restore-a-private-clouds-configuration-files",children:[{value:"Example: Recover Neutron&#39;s Configuration File using Kolla Ansible",id:"example-recover-neutrons-configuration-file-using-kolla-ansible",children:[{value:"Prerequisite: Prepare a Kolla Ansible Environment",id:"prerequisite-prepare-a-kolla-ansible-environment",children:[],level:4},{value:"Regenerate an OpenStack Service&#39;s Configuration File using Kolla Ansible",id:"regenerate-an-openstack-services-configuration-file-using-kolla-ansible",children:[],level:4}],level:3}],level:2},{value:"Create Full and Incremental Copies of a Private Cloud&#39;s OpenStack Service Databases",id:"create-full-and-incremental-copies-of-a-private-clouds-openstack-service-databases",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"How to Create OpenStack Service Database Backups",id:"how-to-create-openstack-service-database-backups",children:[{value:"Command Syntax for Full Database Backups",id:"command-syntax-for-full-database-backups",children:[],level:4},{value:"Command Syntax for Incremental Database Backups",id:"command-syntax-for-incremental-database-backups",children:[],level:4},{value:"Path to the Kolla Ansible Inventory File",id:"path-to-the-kolla-ansible-inventory-file",children:[],level:4},{value:"Command Usage Example for a Full Database Backup",id:"command-usage-example-for-a-full-database-backup",children:[],level:4},{value:"Command Usage Example for an Incremental Database Backup",id:"command-usage-example-for-an-incremental-database-backup",children:[],level:4}],level:3}],level:2},{value:"How to Restore a Private Cloud&#39;s OpenStack Service Databases",id:"how-to-restore-a-private-clouds-openstack-service-databases",children:[{value:"Full Database Restoration Steps",id:"full-database-restoration-steps",children:[{value:"Full Restoration: Create Temporary Docker Container",id:"full-restoration-create-temporary-docker-container",children:[],level:4},{value:"Full Restoration: Prepare Backup Directory",id:"full-restoration-prepare-backup-directory",children:[],level:4}],level:3},{value:"Incremental Database Restoration Steps",id:"incremental-database-restoration-steps",children:[{value:"Incremental Restoration: Create Temporary Docker Container",id:"incremental-restoration-create-temporary-docker-container",children:[],level:4},{value:"Incremental Restoration: Prepare Backup Directory",id:"incremental-restoration-prepare-backup-directory",children:[],level:4}],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],u={toc:p};function d(e){var a=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-copy-and-restore-openstack-service-databases-and-configuration"},"How to Copy and Restore OpenStack Service Databases and Configuration"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Your OpenMetal private cloud is comprised of OpenStack services, which\nlike the applications and services you might deploy inside of it, should\nbe backed up on a regular interval so you can recover from catastrophic\nevents. In this guide, we explain how to copy your cloud's configuration\nfiles and OpenStack service databases as well as how to restore these\nitems."),(0,o.kt)("h2",{id:"before-proceeding-with-this-guide"},"Before Proceeding with this Guide"),(0,o.kt)("p",null,"This guide introduces potentially harmful commands and actions that\ncould cause the cloud to become inoperable or be in an unexpected state.\nRead commands carefully before executing them."),(0,o.kt)("h2",{id:"kolla-ansible-and-ceph-ansible"},"Kolla Ansible and Ceph Ansible"),(0,o.kt)("p",null,"Kolla Ansible is responsible for deploying a Private Cloud's OpenStack\nservices. Ceph Ansible then handles deployment of the cloud's Ceph\ncluster. These two systems deploy all OpenStack and Ceph services\nrequired for a Private Cloud, including their configurations."),(0,o.kt)("h3",{id:"prepare-kolla-ansible-and-ceph-ansible-environment"},"Prepare Kolla Ansible and Ceph Ansible Environment"),(0,o.kt)("p",null,"Before working with either Kolla Ansible or Ceph Ansible, you must\nprepare an environment in your shell:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../day-4/kolla-ansible/"},"How to Prepare and Use Kolla\nAnsible")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../day-4/ceph-ansible/"},"How to Prepare and Use Ceph\nAnsible"))),(0,o.kt)("h3",{id:"where-are-my-private-clouds-configuration-files"},"Where are my Private Cloud's Configuration Files?"),(0,o.kt)("p",null,"When a cloud finishes deploying, the Ansible configurations used to\ndeploy the cloud are exported into each of the control plane nodes\nwithin the folders ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/fm-deploy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/kolla"),". This section\nexplains where configuration files are located and their purpose."),(0,o.kt)("h4",{id:"kolla-ansible-configuration-files"},"Kolla Ansible Configuration Files"),(0,o.kt)("p",null,"The information in these files was used to deploy your Private Cloud's\ncore OpenStack services into Docker containers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kolla Ansible Inventory: ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/fm-deploy/kolla-ansible-inventory")),(0,o.kt)("li",{parentName:"ul"},"Kolla Ansible Main Configuration: ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/kolla/globals.yml"))),(0,o.kt)("h4",{id:"ceph-ansible-configuration-files"},"Ceph Ansible Configuration Files"),(0,o.kt)("p",null,"The information in these files was used to deploy your Private Cloud's\nCeph cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ceph Ansible Inventory: ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/fm-deploy/ceph-inventory.yml")),(0,o.kt)("li",{parentName:"ul"},"Ceph Ansible Main Configuration: ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/fm-deploy/ceph-vars.yml"))),(0,o.kt)("h4",{id:"fm-deploy-configuration-file"},"FM-Deploy Configuration File"),(0,o.kt)("p",null,"FM-Deploy is a part of the system used to deploy your Private Cloud.\nInformation about this deployment system is provided for the sake of\ncompletely explaining the configuration files found within\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/fm-deploy"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"FM-Deploy Main Configuration: ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/fm-deploy/config.yml"))),(0,o.kt)("h4",{id:"network-ansible-configuration-file"},"Network Ansible Configuration File"),(0,o.kt)("p",null,"The following defines the initial networking configuration for your\nPrivate Cloud. This file was used upon initial cloud deployment."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inventory: ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/fm-deploy/network-inventory.yml"))),(0,o.kt)("h3",{id:"keep-a-backup-copy-a-private-clouds-configuration-files"},"Keep a Backup Copy a Private Cloud's Configuration Files"),(0,o.kt)("p",null,"In case something unexpected happens to these files, you should keep\ncopies of them off site. To preserve the configuration of OpenStack\nservices and Ceph, copy the directories ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/fm-deploy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/kolla"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/ceph")," somewhere outside of the cloud, in a secure, private\nlocation. These folders contain sensitive information about your cloud\nso the information within should only be accessible to those you trust\nor yourself."),(0,o.kt)("h2",{id:"how-to-restore-a-private-clouds-configuration-files"},"How to Restore a Private Cloud's Configuration Files"),(0,o.kt)("p",null,"There are two primary ways a Private Cloud's configuration file can be\nrestored: Copy a known good configuration file from an off site location\nor use Ansible. This section explains how you can use Kolla Ansible and\nCeph Ansible to recover a Private Cloud's configuration files."),(0,o.kt)("h3",{id:"example-recover-neutrons-configuration-file-using-kolla-ansible"},"Example: Recover Neutron's Configuration File using Kolla Ansible"),(0,o.kt)("p",null,"For example, consider an event where one of your control plane nodes\nloses its Neutron server configuration file. This section explains how\nto recover this configuration by using Kolla Ansible."),(0,o.kt)("h4",{id:"prerequisite-prepare-a-kolla-ansible-environment"},"Prerequisite: Prepare a Kolla Ansible Environment"),(0,o.kt)("p",null,"Before proceeding, a Kolla Ansible environment needs to be prepared. For\ninformation about preparing a Kolla Ansible environment, see ",(0,o.kt)("a",{parentName:"p",href:"../day-4/kolla-ansible/"},"How to\nPrepare and Use Kolla\nAnsible"),". Once\nthe environment is prepared, navigate back to this section."),(0,o.kt)("h4",{id:"regenerate-an-openstack-services-configuration-file-using-kolla-ansible"},"Regenerate an OpenStack Service's Configuration File using Kolla Ansible"),(0,o.kt)("p",null,"In this example, we outline restoring the Neutron server configuration\nfile for the control plane node ",(0,o.kt)("inlineCode",{parentName:"p"},"relaxed-flamingo"),"."),(0,o.kt)("p",null,"In the Kolla Ansible inventory file,\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/fm-deploy/kolla-ansible-inventory"),", the following hosts are\ndefined as control plane nodes under the heading ",(0,o.kt)("inlineCode",{parentName:"p"},"[control]"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[control]\nrelaxed-flamingo ansible_host=10.204.28.7\nfocused-capybara ansible_host=10.204.30.158\nlovely-ladybug ansible_host=10.204.25.253\n")),(0,o.kt)("p",null,"To restore the Neutron server configuration file for ",(0,o.kt)("inlineCode",{parentName:"p"},"relaxed-flamingo"),",\nfirst ensure you have ",(0,o.kt)("a",{parentName:"p",href:"../day-4/kolla-ansible/"},"prepared a Kolla Ansible\nenvironment"),"."),(0,o.kt)("p",null,"Next, use Kolla Ansible's ",(0,o.kt)("inlineCode",{parentName:"p"},"reconfigure")," function, targeting only the\nNeutron service by using the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--tags neutron")," and limit the run to\nthe host ",(0,o.kt)("inlineCode",{parentName:"p"},"relaxed-flamingo")," by specifying the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--limit control[0]"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kolla-ansible \\\n    -i /etc/fm-deploy/kolla-ansible-inventory \\\n    reconfigure \\\n    --tags neutron \\\n    --limit control[0]\n")),(0,o.kt)("h2",{id:"create-full-and-incremental-copies-of-a-private-clouds-openstack-service-databases"},"Create Full and Incremental Copies of a Private Cloud's OpenStack Service Databases"),(0,o.kt)("p",null,"Kolla Ansible provides a utility to create copies of all OpenStack\nservice databases, called ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup"),". In this section, we explain\nhow to use Kolla Ansible's builtin function to create database backups\nof a Private Cloud's OpenStack services."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before proceeding with this guide, a Kolla Ansible environment needs to\nbe prepared. For information about preparing a Kolla Ansible\nenvironment, see ",(0,o.kt)("a",{parentName:"p",href:"../day-4/kolla-ansible/"},"How to Prepare and Use Kolla\nAnsible"),". Once\nthe environment is prepared, come back to this guide to learn how to\ncreate database backups of OpenStack services."),(0,o.kt)("h3",{id:"how-to-create-openstack-service-database-backups"},"How to Create OpenStack Service Database Backups"),(0,o.kt)("p",null,"The following instruction must be performed from the folder in which you\nhave prepared Kolla Ansible. This section first provides the command\nsyntax, then follows up with an example of the command's execution and\noutput. Note that Kolla Ansible has no way to schedule backups."),(0,o.kt)("h4",{id:"command-syntax-for-full-database-backups"},"Command Syntax for Full Database Backups"),(0,o.kt)("p",null,"The command to perform a full backup of all databases using Kolla\nAnsible is...:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kolla-ansible -i <inventory> mariadb_backup\n")),(0,o.kt)("p",null,"...where ",(0,o.kt)("inlineCode",{parentName:"p"},"<inventory>")," is the path to the Kolla Ansible inventory file."),(0,o.kt)("h4",{id:"command-syntax-for-incremental-database-backups"},"Command Syntax for Incremental Database Backups"),(0,o.kt)("p",null,"The command to perform an incremental backup of all databases using\nKolla Ansible is...:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kolla-ansible -i <inventory> mariadb_backup --incremental\n")),(0,o.kt)("p",null,"...where ",(0,o.kt)("inlineCode",{parentName:"p"},"<inventory>")," is the path to the Kolla Ansible inventory file."),(0,o.kt)("h4",{id:"path-to-the-kolla-ansible-inventory-file"},"Path to the Kolla Ansible Inventory File"),(0,o.kt)("p",null,"The Kolla Ansible inventory file is located across all control plane\nnodes as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/etc/fm-deploy/kolla-ansible-inventory\n")),(0,o.kt)("h4",{id:"command-usage-example-for-a-full-database-backup"},"Command Usage Example for a Full Database Backup"),(0,o.kt)("p",null,"From the host that has Kolla Ansible prepared, the following command is\nexecuted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kolla-ansible -i /etc/fm-deploy/kolla-ansible-inventory mariadb_backup\n")),(0,o.kt)("p",null,"Truncated output of the above command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kolla-ansible -i /etc/fm-deploy/kolla-ansible-inventory mariadb_backup\nBackup MariaDB databases : ansible-playbook -i /etc/fm-deploy/kolla-ansible-inventory -e @/etc/kolla/globals.yml  -e @/etc/kolla/passwords.yml -e CONFIG_DIR=/etc/kolla  -e kolla_action=backup -e mariadb_backup_type=full /opt/kolla-ansible/.venv/share/kolla-ansible/ansible/mariadb_backup.yml\n\n[...previous output truncated...]\n\nTASK [mariadb : Taking full database backup via Mariabackup] **************************************************************************************************\nskipping: [focused-capybara]\nskipping: [lovely-ladybug]\n[WARNING]: The value False (type bool) in a string field was converted to 'False' (type string). If this does not look like what you expect, quote the entire\nvalue to ensure it does not change.\nchanged: [relaxed-flamingo]\n\nPLAY RECAP ****************************************************************************************************************************************************\nfocused-capybara           : ok=2    changed=0    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\nlovely-ladybug             : ok=2    changed=0    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\nrelaxed-flamingo           : ok=3    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0\n")),(0,o.kt)("p",null,"The task ",(0,o.kt)("inlineCode",{parentName:"p"},"[mariadb : Taking full database backup via Mariabackup]")," is\nwhere a backup of all OpenStack service databases is created. Kolla\nAnsible creates a Docker volume called ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," to store the\ndatabase copies. Previous backups made using this method are not\noverwritten. The host under this task that reports a change (example:\n",(0,o.kt)("inlineCode",{parentName:"p"},"changed=1"),") is where the Docker volume storing the databases is\ncreated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note","!")," -- For this example, since the Docker volume was created on\nanother host, the remaining instruction in this guide must be performed\nfrom that host. If Kolla Ansible creates ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," on another\nhost, you must SSH into that host as root to continue this process."),(0,o.kt)("h4",{id:"command-usage-example-for-an-incremental-database-backup"},"Command Usage Example for an Incremental Database Backup"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note","!")," -- Incremental backups can only be made if a full backup has\nbeen made prior, otherwise the following command will result in an\nerror."),(0,o.kt)("p",null,"From the host that has Kolla Ansible prepared, the following command is\nexecuted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kolla-ansible -i /etc/fm-deploy/kolla-ansible-inventory mariadb_backup \\\n    --incremental\n")),(0,o.kt)("p",null,"Truncated output of the above command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kolla-ansible -i /etc/fm-deploy/kolla-ansible-inventory mariadb_backup --incremental\nBackup MariaDB databases : ansible-playbook -i /etc/fm-deploy/kolla-ansible-inventory -e @/etc/kolla/globals.yml  -e @/etc/kolla/passwords.yml -e CONFIG_DIR=/etc/kolla  -e kolla_action=backup -e mariadb_backup_type=incremental /opt/kolla-ansible/.venv/share/kolla-ansible/ansible/mariadb_backup.yml\n\n[...previous output truncated...]\n\nTASK [mariadb : include_tasks] ****************************************************************************************************************************************************************\nincluded: /opt/kolla-ansible/.venv/share/kolla-ansible/ansible/roles/mariadb/tasks/backup.yml for relaxed-flamingo, focused-capybara, lovely-ladybug\n\nTASK [mariadb : Taking incremental database backup via Mariabackup] ***************************************************************************************************************************\nskipping: [focused-capybara]\nskipping: [lovely-ladybug]\n[WARNING]: The value False (type bool) in a string field was converted to 'False' (type string). If this does not look like what you expect, quote the entire value to ensure it does not\nchange.\nchanged: [relaxed-flamingo]\n\nPLAY RECAP ************************************************************************************************************************************************************************************\nfocused-capybara           : ok=2    changed=0    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\nlovely-ladybug             : ok=2    changed=0    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\nrelaxed-flamingo           : ok=3    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0\n")),(0,o.kt)("p",null,"The task ",(0,o.kt)("inlineCode",{parentName:"p"},"[mariadb : Taking incremental database backup via\nMariabackup]")," is where an incremental backup of all OpenStack service\ndatabases is created. Kolla Ansible creates a Docker volume called\n",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," to store the database copies. Previous backups made\nusing this method are not overwritten. The host under this task that\nreports a change (example: ",(0,o.kt)("inlineCode",{parentName:"p"},"changed=1"),") is where the Docker volume\nstoring the databases is created."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note","!")," -- For this example, since the Docker volume was created on\nanother host, the remaining instruction in this guide must be performed\nfrom that host. If Kolla Ansible creates ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," on another\nhost, you must SSH into that host as root to continue this process."),(0,o.kt)("h2",{id:"how-to-restore-a-private-clouds-openstack-service-databases"},"How to Restore a Private Cloud's OpenStack Service Databases"),(0,o.kt)("p",null,"This section explains how to restore both ",(0,o.kt)("strong",{parentName:"p"},"full")," and ",(0,o.kt)("strong",{parentName:"p"},"incremental"),"\ndatabase backups created using Kolla Ansible's ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup"),"\nfunction."),(0,o.kt)("h3",{id:"full-database-restoration-steps"},"Full Database Restoration Steps"),(0,o.kt)("p",null,"Follow these steps to learn how to restore full OpenStack service\ndatabases created using Kolla Ansible's ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," function."),(0,o.kt)("h4",{id:"full-restoration-create-temporary-docker-container"},"Full Restoration: Create Temporary Docker Container"),(0,o.kt)("p",null,"In this section, we create a temporary Docker container called\n",(0,o.kt)("inlineCode",{parentName:"p"},"dbrestore"),". This container is created with the same volumes as the\n",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb")," Docker container. The ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," Docker volume is\nmounted as ",(0,o.kt)("inlineCode",{parentName:"p"},"/backup")," in this container. Finally, the container is\ncreated using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kolla/centos-binary-mariadb:victoria")," Docker image\navailable from Docker Hub with a Bash shell."),(0,o.kt)("p",null,"Create the temporary Docker container called ",(0,o.kt)("inlineCode",{parentName:"p"},"dbrestore")," using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --rm -it --volumes-from mariadb --name dbrestore \\\n    --volume mariadb_backup:/backup \\\n    kolla/centos-binary-mariadb:victoria \\\n    /bin/bash\n")),(0,o.kt)("p",null,"Once you run the above Docker command, your terminal should appear this\nway:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"()[mysql@06ab93fb83a3 /]$\n")),(0,o.kt)("h4",{id:"full-restoration-prepare-backup-directory"},"Full Restoration: Prepare Backup Directory"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Caution","!")," -- Be careful when using commands. The following commands\nmake use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"rm")," command which deletes files."),(0,o.kt)("p",null,"Next, the backup data must be prepared before it can be copied into\nplace."),(0,o.kt)("p",null,"This example uses a full MariaDB backup called\n",(0,o.kt)("inlineCode",{parentName:"p"},"mysqlbackup-08-12-2021-1638999340.qp.xbc.xbs.gz"),"."),(0,o.kt)("p",null,"To prepare the backup data, in the Docker container, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /backup\nrm -rf /backup/restore\nmkdir -p /backup/restore/full\ngunzip mysqlbackup-08-12-2021-1638999340.qp.xbc.xbs.gz\nmbstream -x -C /backup/restore/full/ < mysqlbackup-08-12-2021-1638999340.qp.xbc.xbs\nmariabackup --prepare --target-dir /backup/restore/full\n")),(0,o.kt)("p",null,"Load another shell session for the node in which you are working and\nstop the MariaDB Docker container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker stop mariadb\n")),(0,o.kt)("p",null,"Navigate back to the Docker container and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm -rf /var/lib/mysql/*\nrm -rf /var/lib/mysql/\\.[^\\.]*\nmariabackup --copy-back --target-dir /backup/restore/full\n")),(0,o.kt)("p",null,"Next, navigate back to the other shell and start the MariaDB Docker\ncontainer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker start mariadb\n")),(0,o.kt)("p",null,"Examine MariaDB's logs to confirm the Galera cluster has synchronized:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# tail -1 /var/log/kolla/mariadb/mariadb.log\n2021-12-08 22:27:39 2 [Note] WSREP: Synchronized with group, ready for\nconnections\n")),(0,o.kt)("h3",{id:"incremental-database-restoration-steps"},"Incremental Database Restoration Steps"),(0,o.kt)("p",null,"Follow these steps to learn how to restore an incremental OpenStack\nservice database backup created using Kolla Ansible's ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup"),"\nfunction."),(0,o.kt)("h4",{id:"incremental-restoration-create-temporary-docker-container"},"Incremental Restoration: Create Temporary Docker Container"),(0,o.kt)("p",null,"In this section, we create a temporary Docker container called\n",(0,o.kt)("inlineCode",{parentName:"p"},"dbrestore"),". This container is created with the same volumes as the\n",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb")," Docker container. The ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," Docker volume is\nmounted as ",(0,o.kt)("inlineCode",{parentName:"p"},"/backup")," in this container. Finally, the container is\ncreated using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kolla/centos-binary-mariadb:victoria")," Docker image\navailable from Docker Hub with a Bash shell."),(0,o.kt)("p",null,"Create the temporary Docker container called ",(0,o.kt)("inlineCode",{parentName:"p"},"dbrestore")," using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --rm -it \\\n    --volumes-from mariadb \\\n    --name dbrestore \\\n    --volume mariadb_backup:/backup \\\n    kolla/centos-binary-mariadb:victoria \\\n    /bin/bash\n")),(0,o.kt)("p",null,"Once you run the above Docker command, your terminal should appear this\nway:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"()[mysql@06ab93fb83a3 /]$\n")),(0,o.kt)("h4",{id:"incremental-restoration-prepare-backup-directory"},"Incremental Restoration: Prepare Backup Directory"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Caution","!")," -- Be careful when using commands. The following commands\nmake use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"rm")," command which deletes files."),(0,o.kt)("p",null,"This section assumes a full and incremental backup have been created.\nNote that your full and incremental backup file names will differ from\nthis example."),(0,o.kt)("p",null,"Next, we must prepare the backup data before it can be copied into\nplace."),(0,o.kt)("p",null,"In the Docker container, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /backup/\nrm -rf /backup/restore\nmkdir -p /backup/restore/full\nmkdir -p /backup/restore/incremental\ngunzip mysqlbackup-10-12-2021-1639166052.qp.xbc.xbs.gz\ngunzip incremental-20-mysqlbackup-10-12-2021-1639169695.qp.xbc.xbs.gz\nmbstream -x -C /backup/restore/full/ < mysqlbackup-10-12-2021-1639166052.qp.xbc.xbs\nmbstream -x -C /backup/restore/incremental/ < incremental-20-mysqlbackup-10-12-2021-1639169695.qp.xbc.xbs\nmariabackup --prepare --target-dir=/backup/restore/full/\nmariabackup --prepare --target-dir=/backup/restore/full/ --incremental-dir=/backup/restore/incremental/\n")),(0,o.kt)("p",null,"Load another shell session for the node in which you are working and\nstop the MariaDB Docker container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker stop mariadb\n")),(0,o.kt)("p",null,"Navigate back to the Docker container and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm -rf /var/lib/mysql/*\nrm -rf /var/lib/mysql/\\.[^/.]*\nmariabackup --copy-back --target-dir /backup/restore/full/\n")),(0,o.kt)("p",null,"Next, navigate back to the other shell and start the MariaDB Docker\ncontainer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker start mariadb\n")),(0,o.kt)("p",null,"Examine MariaDB's logs to confirm the Galera cluster has synchronized:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# tail -1 /var/log/kolla/mariadb/mariadb.log\n2021-12-08 22:27:39 2 [Note] WSREP: Synchronized with group, ready for\nconnections\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kolla Ansible's ",(0,o.kt)("a",{parentName:"li",href:"https://docs.openstack.org/kolla-ansible/victoria/admin/mariadb-backup-and-restore.html"},"MariaDB database backup and\nrestore")),(0,o.kt)("li",{parentName:"ul"},"MariaDB's ",(0,o.kt)("a",{parentName:"li",href:"https://mariadb.com/kb/en/full-backup-and-restore-with-mariabackup/"},"Full Backup and Restore with\nMariabackup")),(0,o.kt)("li",{parentName:"ul"},"MariaDB's ",(0,o.kt)("a",{parentName:"li",href:"https://mariadb.com/kb/en/incremental-backup-and-restore-with-mariabackup/"},"Incremental Backup and Restore with\nMariabackup"))))}d.isMDXComponent=!0}}]);