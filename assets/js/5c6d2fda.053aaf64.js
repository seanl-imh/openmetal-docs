"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[8204],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=i(n),k=o,d=m["".concat(u,".").concat(k)]||m[k]||p[k]||r;return n?a.createElement(d,s(s({ref:t},l),{},{components:n})):a.createElement(d,s({ref:t},l))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<r;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],c={slug:"how-to-make-backups-in-openstack",sidebar_position:5},u="How to Make Backups in OpenStack",i={unversionedId:"users-manual/backups",id:"users-manual/backups",title:"How to Make Backups in OpenStack",description:"Having a solid backup strategy is important in the event where data is",source:"@site/docs/users-manual/backups.md",sourceDirName:"users-manual",slug:"/users-manual/how-to-make-backups-in-openstack",permalink:"/docs/manuals/users-manual/how-to-make-backups-in-openstack",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/users-manual/backups.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"how-to-make-backups-in-openstack",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to Create an Instance",permalink:"/docs/manuals/users-manual/how-to-create-an-instance"},next:{title:"Get Started with OpenStackClient",permalink:"/docs/manuals/users-manual/openstackclient"}},l=[{value:"Testing Considerations",id:"testing-considerations",children:[{value:"Instance Backups",id:"instance-backups",children:[],level:3},{value:"How to Recover an Instance Backup",id:"how-to-recover-an-instance-backup",children:[],level:3}],level:2},{value:"Volume Backups",id:"volume-backups",children:[{value:"How to Create a Volume Backup",id:"how-to-create-a-volume-backup",children:[],level:3},{value:"How to Recover a Volume Backup",id:"how-to-recover-a-volume-backup",children:[],level:3}],level:2}],p={toc:l};function m(e){var t=e.components,c=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-make-backups-in-openstack"},"How to Make Backups in OpenStack"),(0,r.kt)("p",null,"Having a solid backup strategy is important in the event where data is\nlost and you need to recover it. In this guide, you will learn how to\nmake backups of instance data, volumes, and how to store backups outside\nof the OpenStack cloud."),(0,r.kt)("h2",{id:"testing-considerations"},"Testing Considerations"),(0,r.kt)("p",null,"Backups should not only be created, but should be confirmed they contain\nall data as well as be restored and tested as part of a polished backup\nstrategy. Consider a disaster recovery scenario where you have known\nbackups, however they were never tested, and are not usable due to some\ncircumstance."),(0,r.kt)("h3",{id:"instance-backups"},"Instance Backups"),(0,r.kt)("p",null,"This section demonstrates how to create an instance backup using Horizon\nby creating a snapshot."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," -- Create Instance Backup"),(0,r.kt)("p",null,"To create a backup of an instance, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Project -",">"," Compute -",">","\nInstances"),"."),(0,r.kt)("p",null,"From there, find the instance in question and click the ",(0,r.kt)("strong",{parentName:"p"},"Create\nSnapshot")," button. This starts the process of backing up the instance\ndata and may take some time to complete."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(8676).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," -- Confirm Backup Completion"),(0,r.kt)("p",null,"To confirm the snapshot was created successfully, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Project\n-",">"," Compute -",">"," Images"),", then find the snapshot in the list."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(3425).Z})),(0,r.kt)("h3",{id:"how-to-recover-an-instance-backup"},"How to Recover an Instance Backup"),(0,r.kt)("p",null,"This section explains how to recover an instance backup using Horizon."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," -- Recover snapshot"),(0,r.kt)("p",null,"To recover the instance snapshot, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Project -",">"," Compute -",">","\nInstances")," and launch a new instance. When filling out the form, ensure\nyou select as the boot source ",(0,r.kt)("strong",{parentName:"p"},"Instance Snapshot")," and choose the\nsnapshot to restore."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(4720).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," -- Confirm restoration"),(0,r.kt)("p",null,"To confirm the snapshot has restored list the instances in Horizon and\ncheck the status column. Check to ensure everything still works as\nexpected within that instance."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(1561).Z})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"volume-backups"},"Volume Backups"),(0,r.kt)("h3",{id:"how-to-create-a-volume-backup"},"How to Create a Volume Backup"),(0,r.kt)("p",null,"In addition to creating instance snapshots, you can also create backups\nof volumes in Horizon. This is important when a persistent volume is\nused and you want to create backup copies of it."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," -- Create volume backup"),(0,r.kt)("p",null,"To back up a volume, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Project -",">"," Volumes -",">"," Volumes"),",\nthen to the volume in you are working with, select from the drop down on\nthe right, ",(0,r.kt)("strong",{parentName:"p"},"Create Backup"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(1518).Z})),(0,r.kt)("p",null,"Fill out the following form with at least the name of the backup and any\nother fields needed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(4668).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," -- Confirm volume backup creation"),(0,r.kt)("p",null,"To confirm the backup created successfully, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Project -",">","\nVolumes -",">"," Backups"),", then locate the backup in the list, and take note\nof the ",(0,r.kt)("strong",{parentName:"p"},"Status")," column. You should see ",(0,r.kt)("strong",{parentName:"p"},"Available")," indicating the\nbackup is complete and ready to use."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(7408).Z})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"how-to-recover-a-volume-backup"},"How to Recover a Volume Backup"),(0,r.kt)("p",null,"This section will explain the steps needed to recover a volume backup\nusing Horizon."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," -- Find the volume backup"),(0,r.kt)("p",null,"To find the volume backups, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Project -",">"," Volumes -",">","\nBackups")," and confirm the backup is in the list."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(4273).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," -- Restore volume backup"),(0,r.kt)("p",null,"To restore this backup, choose from the listing drop down on the right,\nthe ",(0,r.kt)("strong",{parentName:"p"},"Restore Backup")," option."),(0,r.kt)("p",null,"Choose the ",(0,r.kt)("strong",{parentName:"p"},"Create a New Volume")," option to recover this backup into a\nnew volume, that can be later attached to an instance as needed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(1731).Z})))}m.isMDXComponent=!0},4273:function(e,t,n){t.Z=n.p+"assets/images/um_confirm_volume_backup_list-1f68fcb6b261490d307a49d15d3e8065.png"},8676:function(e,t,n){t.Z=n.p+"assets/images/um_create_instance_snapshot-2ed8e7ec21c7b12fb3fc8d8c81680458.png"},1518:function(e,t,n){t.Z=n.p+"assets/images/um_create_volume_backup-a6833723a431f76225a03fc1c935ff98.png"},4668:function(e,t,n){t.Z=n.p+"assets/images/um_create_volume_backup_form-b84c4903ae117b84ca98df1ad3911ced.png"},4720:function(e,t,n){t.Z=n.p+"assets/images/um_launch_instance_from_snapshot-1f547d343507096b0a82130420587add.png"},3425:function(e,t,n){t.Z=n.p+"assets/images/um_list_snapshot-ebf7cac4565f821e14cd168f9fea17ab.png"},1731:function(e,t,n){t.Z=n.p+"assets/images/um_restore_volume_backup-017af57055b7e91b15c74b503e3c89fc.png"},1561:function(e,t,n){t.Z=n.p+"assets/images/um_successful_instance_restore-97740dfcdd006c78b58102e69068fcc3.png"},7408:function(e,t,n){t.Z=n.p+"assets/images/um_volume_backup_list-d7f71c79b718229947c46c25e66b573d.png"}}]);