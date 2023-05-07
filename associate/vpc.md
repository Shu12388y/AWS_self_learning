<h1>
How to create a VPC in AWS
</h1>
<div>
<h2>

Steps for creating a VPC
</h2>
<p>
Steps 1: Go the VPC tab and create a new vpc <br>
Steps 2: In the vpc add the IPV4 subnet 10.0.0.0/16 <br>
Steps 3: After creating the VPC now make the subnet and in that add subnet 10.0.0.0/24 <br>
Steps 4: After creating the subnet  VPC <br>
Steps 5: Now create a Internet Gateway <br>
Steps 6: And Attach it into your vpc <br>
Steps 7: Now go to the route table and go to the subnet associate tab add the subnet and add 0.0.0.0/0 in it <br>
Steps 8: Now create a EC2 instance and make sure the you have chosen your vpc <br>
Steps 9: After EC2 instance is ready now connect using RDP and in the command line(cmd) ping 8.8.8.8 <br>
<h3>
If, it is working then everything is ok other wise check the vpc configuration
</h3>
<p>
</div>

