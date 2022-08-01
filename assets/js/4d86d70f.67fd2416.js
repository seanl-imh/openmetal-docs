"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[7146],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return k}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return t?n.createElement(m,l(l({ref:a},p),{},{components:t})):n.createElement(m,l({ref:a},p))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5151:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_position:5},s="Backup and Restore OpenStack Service Databases",c={unversionedId:"operators-manual/day-3/backup-restore-openstack-databases",id:"operators-manual/day-3/backup-restore-openstack-databases",title:"Backup and Restore OpenStack Service Databases",description:"Kolla Ansible provides a utility to create copies of all OpenStack",source:"@site/docs/operators-manual/day-3/backup-restore-openstack-databases.md",sourceDirName:"operators-manual/day-3",slug:"/operators-manual/day-3/backup-restore-openstack-databases",permalink:"/docs/manuals/operators-manual/day-3/backup-restore-openstack-databases",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-3/backup-restore-openstack-databases.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to Copy and Restore OpenStack Service Configuration",permalink:"/docs/manuals/operators-manual/day-3/create-openstack-service-backups"},next:{title:"OpenStack Disaster Planning, Testing, and Recovery",permalink:"/docs/manuals/operators-manual/day-3/disaster-recovery"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"How to Create OpenStack Service Database Backups",id:"how-to-create-openstack-service-database-backups",children:[{value:"Command Syntax for Full Database Backups",id:"command-syntax-for-full-database-backups",children:[],level:3},{value:"Command Syntax for Incremental Database Backups",id:"command-syntax-for-incremental-database-backups",children:[],level:3},{value:"Path to the Kolla Ansible Inventory File",id:"path-to-the-kolla-ansible-inventory-file",children:[],level:3},{value:"Command Usage Example for a Full Database Backup",id:"command-usage-example-for-a-full-database-backup",children:[],level:3},{value:"Command Usage Example for an Incremental Database Backup",id:"command-usage-example-for-an-incremental-database-backup",children:[],level:3}],level:2},{value:"How to Restore a Private Cloud&#39;s OpenStack Service Databases",id:"how-to-restore-a-private-clouds-openstack-service-databases",children:[],level:2},{value:"Full Database Restoration Steps",id:"full-database-restoration-steps",children:[{value:"Full Restoration: Create Temporary Docker Container",id:"full-restoration-create-temporary-docker-container",children:[],level:3},{value:"Full Restoration: Prepare Backup Directory",id:"full-restoration-prepare-backup-directory",children:[],level:3}],level:2},{value:"Incremental Database Restoration Steps",id:"incremental-database-restoration-steps",children:[{value:"Incremental Restoration: Create Temporary Docker Container",id:"incremental-restoration-create-temporary-docker-container",children:[],level:3},{value:"Incremental Restoration: Prepare Backup Directory",id:"incremental-restoration-prepare-backup-directory",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],u={toc:p};function d(e){var a=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backup-and-restore-openstack-service-databases"},"Backup and Restore OpenStack Service Databases"),(0,o.kt)("p",null,"Kolla Ansible provides a utility to create copies of all OpenStack\nservice databases, called ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup"),". In this section, we explain\nhow to use Kolla Ansible's builtin function to create database backups\nof a Private Cloud's OpenStack services."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before proceeding with this guide, a Kolla Ansible environment needs to\nbe prepared. For information about preparing a Kolla Ansible\nenvironment, see ",(0,o.kt)("a",{parentName:"p",href:"../day-4/kolla-ansible/prepare-kolla-ansible"},"How to Prepare and Use Kolla Ansible"),".\nOnce the environment is prepared, come back to this guide to learn how to\ncreate database backups of OpenStack services."),(0,o.kt)("h2",{id:"how-to-create-openstack-service-database-backups"},"How to Create OpenStack Service Database Backups"),(0,o.kt)("p",null,"The following instruction must be performed from the folder in which you\nhave prepared Kolla Ansible. This section first provides the command\nsyntax, then follows up with an example of the command's execution and\noutput. Note that Kolla Ansible has no way to schedule backups."),(0,o.kt)("h3",{id:"command-syntax-for-full-database-backups"},"Command Syntax for Full Database Backups"),(0,o.kt)("p",null,"The command to perform a full backup of all databases using Kolla\nAnsible is...:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kolla-ansible -i <inventory> mariadb_backup\n")),(0,o.kt)("p",null,"...where ",(0,o.kt)("inlineCode",{parentName:"p"},"<inventory>")," is the path to the Kolla Ansible inventory file."),(0,o.kt)("h3",{id:"command-syntax-for-incremental-database-backups"},"Command Syntax for Incremental Database Backups"),(0,o.kt)("p",null,"The command to perform an incremental backup of all databases using\nKolla Ansible is...:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kolla-ansible -i <inventory> mariadb_backup --incremental\n")),(0,o.kt)("p",null,"...where ",(0,o.kt)("inlineCode",{parentName:"p"},"<inventory>")," is the path to the Kolla Ansible inventory file."),(0,o.kt)("h3",{id:"path-to-the-kolla-ansible-inventory-file"},"Path to the Kolla Ansible Inventory File"),(0,o.kt)("p",null,"The Kolla Ansible inventory file is located across all control plane\nnodes as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/etc/fm-deploy/kolla-ansible-inventory\n")),(0,o.kt)("h3",{id:"command-usage-example-for-a-full-database-backup"},"Command Usage Example for a Full Database Backup"),(0,o.kt)("p",null,"From the host that has Kolla Ansible prepared, the following command is\nexecuted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kolla-ansible -i /etc/fm-deploy/kolla-ansible-inventory mariadb_backup\n")),(0,o.kt)("p",null,"Truncated output of the above command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kolla-ansible -i /etc/fm-deploy/kolla-ansible-inventory mariadb_backup\nBackup MariaDB databases : ansible-playbook -i /etc/fm-deploy/kolla-ansible-inventory -e @/etc/kolla/globals.yml  -e @/etc/kolla/passwords.yml -e CONFIG_DIR=/etc/kolla  -e kolla_action=backup -e mariadb_backup_type=full /opt/kolla-ansible/.venv/share/kolla-ansible/ansible/mariadb_backup.yml\n\n[...previous output truncated...]\n\nTASK [mariadb : Taking full database backup via Mariabackup] **************************************************************************************************\nskipping: [focused-capybara]\nskipping: [lovely-ladybug]\n[WARNING]: The value False (type bool) in a string field was converted to 'False' (type string). If this does not look like what you expect, quote the entire\nvalue to ensure it does not change.\nchanged: [relaxed-flamingo]\n\nPLAY RECAP ****************************************************************************************************************************************************\nfocused-capybara           : ok=2    changed=0    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\nlovely-ladybug             : ok=2    changed=0    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\nrelaxed-flamingo           : ok=3    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0\n")),(0,o.kt)("p",null,"The task ",(0,o.kt)("inlineCode",{parentName:"p"},"[mariadb : Taking full database backup via Mariabackup]")," is\nwhere a backup of all OpenStack service databases is created. Kolla\nAnsible creates a Docker volume called ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," to store the\ndatabase copies. Previous backups made using this method are not\noverwritten. The host under this task that reports a change (example:\n",(0,o.kt)("inlineCode",{parentName:"p"},"changed=1"),") is where the Docker volume storing the databases is\ncreated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note","!")," -- For this example, since the Docker volume was created on\nanother host, the remaining instruction in this guide must be performed\nfrom that host. If Kolla Ansible creates ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," on another\nhost, you must SSH into that host as root to continue this process."),(0,o.kt)("h3",{id:"command-usage-example-for-an-incremental-database-backup"},"Command Usage Example for an Incremental Database Backup"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note","!")," -- Incremental backups can only be made if a full backup has\nbeen made prior, otherwise the following command will result in an\nerror."),(0,o.kt)("p",null,"From the host that has Kolla Ansible prepared, the following command is\nexecuted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kolla-ansible -i /etc/fm-deploy/kolla-ansible-inventory mariadb_backup \\\n    --incremental\n")),(0,o.kt)("p",null,"Truncated output of the above command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kolla-ansible -i /etc/fm-deploy/kolla-ansible-inventory mariadb_backup --incremental\nBackup MariaDB databases : ansible-playbook -i /etc/fm-deploy/kolla-ansible-inventory -e @/etc/kolla/globals.yml  -e @/etc/kolla/passwords.yml -e CONFIG_DIR=/etc/kolla  -e kolla_action=backup -e mariadb_backup_type=incremental /opt/kolla-ansible/.venv/share/kolla-ansible/ansible/mariadb_backup.yml\n\n[...previous output truncated...]\n\nTASK [mariadb : include_tasks] ****************************************************************************************************************************************************************\nincluded: /opt/kolla-ansible/.venv/share/kolla-ansible/ansible/roles/mariadb/tasks/backup.yml for relaxed-flamingo, focused-capybara, lovely-ladybug\n\nTASK [mariadb : Taking incremental database backup via Mariabackup] ***************************************************************************************************************************\nskipping: [focused-capybara]\nskipping: [lovely-ladybug]\n[WARNING]: The value False (type bool) in a string field was converted to 'False' (type string). If this does not look like what you expect, quote the entire value to ensure it does not\nchange.\nchanged: [relaxed-flamingo]\n\nPLAY RECAP ************************************************************************************************************************************************************************************\nfocused-capybara           : ok=2    changed=0    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\nlovely-ladybug             : ok=2    changed=0    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0\nrelaxed-flamingo           : ok=3    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0\n")),(0,o.kt)("p",null,"The task ",(0,o.kt)("inlineCode",{parentName:"p"},"[mariadb : Taking incremental database backup via Mariabackup]")," is\nwhere an incremental backup of all OpenStack service databases is created. Kolla\nAnsible creates a Docker volume called ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," to store the database\ncopies. Previous backups made using this method are not overwritten. The host\nunder this task that reports a change (example: ",(0,o.kt)("inlineCode",{parentName:"p"},"changed=1"),") is where the Docker\nvolume storing the databases is created."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note","!")," -- For this example, since the Docker volume was created on\nanother host, the remaining instruction in this guide must be performed\nfrom that host. If Kolla Ansible creates ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," on another\nhost, you must SSH into that host as root to continue this process."),(0,o.kt)("h2",{id:"how-to-restore-a-private-clouds-openstack-service-databases"},"How to Restore a Private Cloud's OpenStack Service Databases"),(0,o.kt)("p",null,"This section explains how to restore both ",(0,o.kt)("strong",{parentName:"p"},"full")," and ",(0,o.kt)("strong",{parentName:"p"},"incremental"),"\ndatabase backups created using Kolla Ansible's ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," function."),(0,o.kt)("h2",{id:"full-database-restoration-steps"},"Full Database Restoration Steps"),(0,o.kt)("p",null,"Follow these steps to learn how to restore full OpenStack service\ndatabases created using Kolla Ansible's ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," function."),(0,o.kt)("h3",{id:"full-restoration-create-temporary-docker-container"},"Full Restoration: Create Temporary Docker Container"),(0,o.kt)("p",null,"In this section, we create a temporary Docker container called\n",(0,o.kt)("inlineCode",{parentName:"p"},"dbrestore"),". This container is created with the same volumes as the\n",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb")," Docker container. The ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," Docker volume is\nmounted as ",(0,o.kt)("inlineCode",{parentName:"p"},"/backup")," in this container. Finally, the container is\ncreated using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kolla/centos-binary-mariadb:victoria")," Docker image\navailable from Docker Hub with a Bash shell."),(0,o.kt)("p",null,"Create the temporary Docker container called ",(0,o.kt)("inlineCode",{parentName:"p"},"dbrestore")," using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --rm -it --volumes-from mariadb --name dbrestore \\\n    --volume mariadb_backup:/backup \\\n    kolla/centos-binary-mariadb:victoria \\\n    /bin/bash\n")),(0,o.kt)("p",null,"Once you run the above Docker command, your terminal should appear this\nway:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"()[mysql@06ab93fb83a3 /]$\n")),(0,o.kt)("h3",{id:"full-restoration-prepare-backup-directory"},"Full Restoration: Prepare Backup Directory"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Caution","!")," -- Be careful when using commands. The following commands\nmake use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"rm")," command which deletes files."),(0,o.kt)("p",null,"Next, the backup data must be prepared before it can be copied into\nplace."),(0,o.kt)("p",null,"This example uses a full MariaDB backup called\n",(0,o.kt)("inlineCode",{parentName:"p"},"mysqlbackup-08-12-2021-1638999340.qp.xbc.xbs.gz"),"."),(0,o.kt)("p",null,"To prepare the backup data, in the Docker container, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /backup\nrm -rf /backup/restore\nmkdir -p /backup/restore/full\ngunzip mysqlbackup-08-12-2021-1638999340.qp.xbc.xbs.gz\nmbstream -x -C /backup/restore/full/ < mysqlbackup-08-12-2021-1638999340.qp.xbc.xbs\nmariabackup --prepare --target-dir /backup/restore/full\n")),(0,o.kt)("p",null,"Load another shell session for the node in which you are working and\nstop the MariaDB Docker container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker stop mariadb\n")),(0,o.kt)("p",null,"Navigate back to the Docker container and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm -rf /var/lib/mysql/*\nrm -rf /var/lib/mysql/\\.[^\\.]*\nmariabackup --copy-back --target-dir /backup/restore/full\n")),(0,o.kt)("p",null,"Next, navigate back to the other shell and start the MariaDB Docker\ncontainer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker start mariadb\n")),(0,o.kt)("p",null,"Examine MariaDB's logs to confirm the Galera cluster has synchronized:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# tail -1 /var/log/kolla/mariadb/mariadb.log\n2021-12-08 22:27:39 2 [Note] WSREP: Synchronized with group, ready for\nconnections\n")),(0,o.kt)("h2",{id:"incremental-database-restoration-steps"},"Incremental Database Restoration Steps"),(0,o.kt)("p",null,"Follow these steps to learn how to restore an incremental OpenStack\nservice database backup created using Kolla Ansible's ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup"),"\nfunction."),(0,o.kt)("h3",{id:"incremental-restoration-create-temporary-docker-container"},"Incremental Restoration: Create Temporary Docker Container"),(0,o.kt)("p",null,"In this section, we create a temporary Docker container called\n",(0,o.kt)("inlineCode",{parentName:"p"},"dbrestore"),". This container is created with the same volumes as the\n",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb")," Docker container. The ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb_backup")," Docker volume is\nmounted as ",(0,o.kt)("inlineCode",{parentName:"p"},"/backup")," in this container. Finally, the container is\ncreated using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kolla/centos-binary-mariadb:victoria")," Docker image\navailable from Docker Hub with a Bash shell."),(0,o.kt)("p",null,"Create the temporary Docker container called ",(0,o.kt)("inlineCode",{parentName:"p"},"dbrestore")," using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --rm -it \\\n    --volumes-from mariadb \\\n    --name dbrestore \\\n    --volume mariadb_backup:/backup \\\n    kolla/centos-binary-mariadb:victoria \\\n    /bin/bash\n")),(0,o.kt)("p",null,"Once you run the above Docker command, your terminal should appear this\nway:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"()[mysql@06ab93fb83a3 /]$\n")),(0,o.kt)("h3",{id:"incremental-restoration-prepare-backup-directory"},"Incremental Restoration: Prepare Backup Directory"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Caution","!")," -- Be careful when using commands. The following commands\nmake use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"rm")," command which deletes files."),(0,o.kt)("p",null,"This section assumes a full and incremental backup have been created.\nNote that your full and incremental backup file names will differ from\nthis example."),(0,o.kt)("p",null,"Next, we must prepare the backup data before it can be copied into\nplace."),(0,o.kt)("p",null,"In the Docker container, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /backup/\nrm -rf /backup/restore\nmkdir -p /backup/restore/full\nmkdir -p /backup/restore/incremental\ngunzip mysqlbackup-10-12-2021-1639166052.qp.xbc.xbs.gz\ngunzip incremental-20-mysqlbackup-10-12-2021-1639169695.qp.xbc.xbs.gz\nmbstream -x -C /backup/restore/full/ < mysqlbackup-10-12-2021-1639166052.qp.xbc.xbs\nmbstream -x -C /backup/restore/incremental/ < incremental-20-mysqlbackup-10-12-2021-1639169695.qp.xbc.xbs\nmariabackup --prepare --target-dir=/backup/restore/full/\nmariabackup --prepare --target-dir=/backup/restore/full/ --incremental-dir=/backup/restore/incremental/\n")),(0,o.kt)("p",null,"Load another shell session for the node in which you are working and\nstop the MariaDB Docker container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker stop mariadb\n")),(0,o.kt)("p",null,"Navigate back to the Docker container and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm -rf /var/lib/mysql/*\nrm -rf /var/lib/mysql/\\.[^/.]*\nmariabackup --copy-back --target-dir /backup/restore/full/\n")),(0,o.kt)("p",null,"Next, navigate back to the other shell and start the MariaDB Docker\ncontainer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker start mariadb\n")),(0,o.kt)("p",null,"Examine MariaDB's logs to confirm the Galera cluster has synchronized:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# tail -1 /var/log/kolla/mariadb/mariadb.log\n2021-12-08 22:27:39 2 [Note] WSREP: Synchronized with group, ready for\nconnections\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kolla Ansible's ",(0,o.kt)("a",{parentName:"li",href:"https://docs.openstack.org/kolla-ansible/victoria/admin/mariadb-backup-and-restore.html"},"MariaDB database backup and restore")),(0,o.kt)("li",{parentName:"ul"},"MariaDB's ",(0,o.kt)("a",{parentName:"li",href:"https://mariadb.com/kb/en/full-backup-and-restore-with-mariabackup/"},"Full Backup and Restore with Mariabackup")),(0,o.kt)("li",{parentName:"ul"},"MariaDB's ",(0,o.kt)("a",{parentName:"li",href:"https://mariadb.com/kb/en/incremental-backup-and-restore-with-mariabackup/"},"Incremental Backup and Restore with Mariabackup"))))}d.isMDXComponent=!0}}]);