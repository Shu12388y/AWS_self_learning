<h1>
How to create a S3 Bucket
</h1>
<h2>
What is a S3 bucket ?
</h2>
<h3>
S3 bucket is a storage service provided by AWS. Where we can store files and folders.
</h3>


<h1>
Follow to step to create S3 bucket
</h1>
<div>
<b>
step 1: Go to the ervices search S3 <br>
step 2: Now click on the create bucket button, make sure your bucket name should be unique because S3 bucket is global in region.<br>
step 3: You can also enable versioning in your bucket. For enable it go to the properties and enable it or you can enable it when you are create a bucket. <br>

</b>
<div>
<div>
<b>
How to create a S3 bucket using command line tool like cmd<br>
First, you have to download AWS CLI <br>
Run the command aws configure, enter your secert access key and access key<br>
<h3>
cmd command's</h3>
1. aws s3 ls           <br>
To see the list of buckets <br>
2. aws s3 mb s3://bucket name <br>
To create a bucket <br>
3. aws s3 rb s3://bucket name <br>
To delete the bucket <br>
4. aws s3 sync . s3://bucket name <br>
To sync the local folder with the S3 bucket <br>
5. aws s3 sync s3://bucket name .  <br>
To sync the s3 bucket with the local folder <br>
</b>
</div>



