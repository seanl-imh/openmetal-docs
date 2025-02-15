---
sidebar_position: 6
---
# How to install and configure Barbican on your OpenMetal Cloud

## What is Barbican?

Barbican is the OpenStack Key Manager service. It provides secure storage,
provisioning and management of secret data. This includes keying material such
as Symmetric Keys, Asymmetric Keys, Certificates and raw binary data.

## What can I do with a Secret Store?

With Barbican configured the service can be utilized for a number of use cases.

- Image signature verification
- Disk and volume encryption
- SSL/TLS keypair storage
- Secure password storage

See the [OpenStack Security Guide](https://docs.openstack.org/security-guide/secrets-management/secrets-management-use-cases.html)
for additional information.

## Prerequisites

- SSH Access to your OMI Nodes
- A [python virtual environment for kolla-ansible](https://openmetal.io/docs/manuals/operators-manual/day-4/kolla-ansible/prepare-kolla-ansible)

## Step 1 - Modify your kolla-ansible config

The kolla-ansible config file lives in `/etc/kolla/globals.yml` you will want to
modify that file an add the following in a new line within the config.

```yaml
enable_barbican: 'yes'

## NOTE: The below options are optional. Remove the '# ' in font to use them.
# Valid options are [ simple_crypto, p11_crypto ]
# barbican_crypto_plugin: "simple_crypto"
# barbican_library_path: "/usr/lib/libCryptoki2_64.so"
```

## Step 2 - Reconfigure kolla-ansible

Whenever calling `kolla-ansible` you will want to note these 2 important files:

- Kolla Ansible Inventory: `/etc/fm-deploy/kolla-ansible-inventory`
- Kolla Ansible Main Configuration: `/etc/kolla/globals.yml`

Once you have ensured that your configuration and inventory are there you will
want to run the following command to install and configure Barbican to your cloud.

```yaml
kolla-ansible -i /etc/fm-deploy/kolla-ansible-inventory reconfigure
```

## Step 3 - Verify that the Barbican endpoints are there

```bash
(.venv) [root@fierce-possum kolla]# openstack endpoint list --service barbican
+----------------------------------+--------+--------------+--------------+---------+-----------+---------------------------+
| ID                               | Region | Service Name | Service Type | Enabled | Interface | URL                       |
+----------------------------------+--------+--------------+--------------+---------+-----------+---------------------------+
| bbebfdc0f6ce4f9895d536785fa3cfea | iad3   | barbican     | key-manager  | True    | public    | http://200.225.44.4:9311  |
| c7c9861c34ed44de8a3f65b9d74f80fa | iad3   | barbican     | key-manager  | True    | admin     | http://192.168.2.254:9311 |
| da1d9afd031f470d80866256884ef242 | iad3   | barbican     | key-manager  | True    | internal  | http://192.168.2.254:9311 |
+----------------------------------+--------+--------------+--------------+---------+-----------+---------------------------+
```

## Step 4 - Install the Barbican OpenStack CLI

While in your virtual environment, install the OpenStack CLI library for secret
storage.

```bash
(.venv) [root@fierce-possum kolla]# pip install python-barbicanclient
```

## Step 5 - Create a test secret

Just to validate that its working, run the following command to create your
first test secret.

```bash
(.venv) [root@fierce-possum kolla]# openstack secret store --name my_secret --payload 'This is a secure statement'
+---------------+--------------------------------------------------------------------------+
| Field         | Value                                                                    |
+---------------+--------------------------------------------------------------------------+
| Secret href   | http://200.225.44.4:9311/v1/secrets/973cffdb-d4b1-418c-befa-9f67d77a982b |
| Name          | my_secret                                                                |
| Created       | None                                                                     |
| Status        | None                                                                     |
| Content types | None                                                                     |
| Algorithm     | aes                                                                      |
| Bit length    | 256                                                                      |
| Secret type   | opaque                                                                   |
| Mode          | cbc                                                                      |
| Expiration    | None                                                                     |
+---------------+--------------------------------------------------------------------------+ 
```
