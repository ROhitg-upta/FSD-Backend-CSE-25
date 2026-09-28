//Create a basic HTTP server using http.createserver(), Respond with "Hello World" 
//and return headers + status code 200

import http from"http";
const PORT = 3000;
const HOST =  "localhost";

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write("<h1>Hello World</h1>")
    res.write("<h1>Error 403 page not found </h1>")
    res.end();
});
server.listen(3000,()=>{
    console.log(`Server is running at http://${HOST}:${PORT}`);
})