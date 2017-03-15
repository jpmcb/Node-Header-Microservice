var http = require('http');

var os = require('os');

var ipv4 = os.networkInterfaces().eth0[0].address;
var ipv6 = os.networkInterfaces().eth0[1].address;

var system = os.type();
var release = os.release();
var speed = os.arch();

http.createServer(function(req, res) {
    
    if(req.url === '/') {
        var lang = req.headers['accept-language'].split(',')[0];
        
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{IPv4: ${ipv4}, IPv6: ${ipv6}, Language: ${lang}, System: ${system} ${release} ${speed}}`);
    } else if(req.url === '/ip') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{IPv4: ${ipv4}, IPv6: ${ipv6}}`);   
    } else if (req.url === '/ipv4') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{IPv4: ${ipv4}}`);
    } else if (req.url === '/ipv6') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{IPv6: ${ipv6}}`);
    } else if (req.url === '/lang') {
        var lang = req.headers['accept-language'].split(',')[0];
        
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{Language: ${lang}}`);
    } else if (req.url === '/os') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{System: ${system} ${release} ${speed}}`);
    }
    
    
}).listen(process.env.PORT || 3000);

console.log('Server Running');