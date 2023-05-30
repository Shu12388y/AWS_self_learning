<h1>
Configure a ubuntu server
</h1>
<h2>
Create a Ubuntu server 
</h2>
<h3>
How to log into the server using windows powershell
</h3>
<p>
<b>
login into your VPC/server<br>
     > ssh root@ip address of server<br>
     > ssh root@43.56.7.8
</b>
</p>

<p>
<b>
create a user in your server<br></b>
  > adduser username  <br>
  example: > adduser shubham<br>
  </p>

<p>
<b>Make a user a root user <br></b>
  > usermod -aG sudo username <br>
  example: > usermod -aG sudo shubham <br>
  </p>
  
<p>
<b>
login a user<br>
</b>
 > ssh username@ip address of server <br>
example:<br>

 > ssh shubham@43.78.90.87

 </p>

<section>
<h1>
For AWS use the following command
</h1>
<p>
<b>
for log into your server <br></b>
    <h3>
    First: download the key pair<br>
    second: for log in to the sever open your powershell<br>
    third: now go to your key pair folder where you save and downloaded your key pair and use > ssh -i "key_pair name" servername@ipaddress<br>
    fourth: for log in as user use sudo su -  username <br>
</h3>
</p>
</section>
<section>
<h1>
Setup a Firewall in your server</h1>
<p>
  > ufw allow OpenSSH
  </p>
  <p>
  <h4>
  To enable it 
  </h4>
  > ufw enable</p>
  </section>

  

