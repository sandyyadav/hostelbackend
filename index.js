console.log("hi this is sandeep yadav")
const data = require('./data');
const http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000)
