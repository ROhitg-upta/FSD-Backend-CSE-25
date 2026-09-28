//Create your own server using http module

import http from "http";
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Name: Ritu Rai</h1>")
    res.write("<h1>Welcome to my server</h1>");  
    // res.write("HEllo World");
    res.end();
})
server.listen(3001,()=>{
 console.log("Server is running on port 3001");    
})
