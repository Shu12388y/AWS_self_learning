<h1>
Load Balancer
</h1>
<div>
<h2 >
How to create a Load Balancer
</h2>
</div>

<div>
<p>
We have two EC2 instances and we have to connect to load Balancer in them <br>
At first we have to the load Balancer tab and create a load Balancer in different availablity zone after that we have to defiene our protocol like http and https and after we can to create a target group for server 1 and server 2 after that we have define our DNS.
</p>
</div>
<div>
To setup a ELB followw the following steps <br>
step 1: first create ec2 instances <br>
step 2: create a target group and add the ec2 instances <br>
step 3: create a load Balancer and add the target group <br>
step 4: After that to to the DNS address of the ELB and check it is balancing or not 
</div>
<div>
<h3>Note</h3>
When you create the ELB and when you use it's DNS to connect it you will get a timeout error, you will not connect the ELB. <br>
For this you have to go the security group of ELB and add http port in the security group
</div>

