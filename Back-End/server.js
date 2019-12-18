require('dotenv').config()
const http = require('http');
const app = require('./app');

console.log(process.env.PORT)

const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, _ => {
    console.log('Server (http://localhost:' + port + ') started')
});