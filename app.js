const http = require('http')

const fs = require('fs');

console.log(routes.someText)

const routes = require('./routes')

const server = http.createServer(routes.handler)

server.listen(3000)