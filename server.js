				var http = require('http');
var server = http.createServer();
function control(petic, resp) {
resp.writeHead(200, {'content-type': 'text/plain'});
resp.write('Hola, Mundo 2!');
resp.end();
}
server.on('request', control);
server.listen(8088);
