import http from 'http';

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'localhost';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('response from server end');
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});