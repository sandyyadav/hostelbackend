console.log("hi this is sandeep yadav")
const http=require('http')
http.createServer((req,res)=>{
    res.write("<h1>this is my project backend</h1>")
    res.end();
}).listen(4500)
