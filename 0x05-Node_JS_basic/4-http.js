const http = require('http');

const PORT = 1245;
const HOSTNAME = 'localhost';

const app = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n');
});

app.listen(PORT, HOSTNAME, () => {});

module.exports = app;
