//http server
const http=require('http')
const url=require('url')
const port = 5000
http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.write("Welcome");
        res.end();
    }
    else{
        res.end('<h1>Invalid URL</h1>');
    }
}).listen(port,()=>{console.log("Server running")});

//express Server
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Welcome")
})

app.listen(3000,()=>console.log("Server running at port 3000"))