<h1>
How to create a NAT gateway and how to acess the private EC2 instance
</h1>
<div>
<h2>Follow the steps below</h2>

<p>
steps 1: create a VPC  IPV4 = 10.0.0.0/16<br>
steps 2: create a two subnet private and public subnets in the public subnet IPV4 = 10.0.0.0/24 and private subnet IPV4 = 10.0.1.0/24 <br>
steps 3: create a the internet gateway and attach it with the VPC <br>
steps 4: create two route table public and private and add the public and private IPV4 in it. <br>
steps 5: Now create a NAT gateway and assicate it will public subnet and you also need to create a elastic IP for it.<br>
steps 6: Now create a public and private EC2 instance and private EC2 instance will not internet facing <br>

<h3>
Now check it is working or not  first login in public instance and in the public instance use the RDP to connect the private instance using <b> ping 8.8.8.8 -t </b>
<br>
If it is working it is ok otherwise check the NAT gateway and subnetting and route table 
</h3>
</p>
</div>
