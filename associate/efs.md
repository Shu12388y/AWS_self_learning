# efs stands for elastic file system
### In this we can share a file between servers
#### for this
#### we need atleat two ec2 server
step 1: Make two EC2 instances
step 2: Both the EC2 have a same security group
step 3: Now create a new security group for EFS
step 4: In efs security group choose NFS and add the EC2 instance security group
step 5: now run yum install -y amazon-efs-utils
step 6: now make a folder or if you have a existing older you can use it
step 7: now go to your efs click on mount
step 8: run the command in the last of the command remove efs add your folder name
step 9: create a file in that folder
step 10: Repeat steps 5 to 8 in your next ec2 instance

##### After that you can see and access your file in each instances
