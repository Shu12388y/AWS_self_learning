const express = require("express");
const app =express();
const port =3000;

app.get("/",(req,res)=>{
  res.send("<h1> Hello server is on</h1>")
})

app.get("/help",(req,res)=>{
  res.send("<h1>Help me please to fuck</h1>")
})
app.listen(port,()=>
  
  {
    console.log("ok");
  });

