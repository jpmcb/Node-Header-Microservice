var http = require('http');

var os = require('os');

var ipv4 = os.networkInterfaces().eth0[0].address;
var ipv6 = os.networkInterfaces().eth0[1].address;

var system = os.type();
var release = os.release();
var speed = os.arch();

http.createServer(function(req, res) {
    
    if(req.url === '/server') { // for server responses
        var lang = req.headers['accept-language'].split(',')[0];
        
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{IPv4: ${ipv4}, IPv6: ${ipv6}, Language: ${lang}, System: ${system} ${release} ${speed}}`);
    } else if(req.url === '/server/ip') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{IPv4: ${ipv4}, IPv6: ${ipv6}}`);   
    } else if (req.url === '/server/ipv4') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{IPv4: ${ipv4}}`);
    } else if (req.url === '/server/ipv6') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{IPv6: ${ipv6}}`);
    } else if (req.url === '/server/lang') {
        var lang = req.headers['accept-language'].split(',')[0];
        
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{Language: ${lang}}`);
    } else if (req.url === '/server/os') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{System: ${system} ${release} ${speed}}`);
    } else if(req.url === '/user') { //FOR USER RESPONSE
        var lang = req.headers['accept-language'].split(',')[0];
        
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{IP: ${req.headers['x-forwarded-for']}, Language: ${lang}, System: ${req.headers['user-agent']} }`);
    } else if(req.url === '/user/ip') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{IP: ${req.headers['x-forwarded-for']}}`); //finished   
    } else if (req.url === '/user/lang') {
        var lang = req.headers['accept-language'].split(',')[0];
        
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{Language: ${lang}}`);
    } else if (req.url === '/user/os') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{System: ${req.headers['user-agent']}}`);
    } else if(req.url === '/') { // PROVIDE COMBO RESPONSES FOR SERVER AND USER
        var lang = req.headers['accept-language'].split(',')[0];
        
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{Server: {IPv4: ${ipv4}, IPv6: ${ipv6}, Language: ${lang}, System: ${system} ${release} ${speed}} User: {IP: ${req.headers['x-forwarded-for']}, Language: ${lang}, System: ${req.headers['user-agent']}} }`); 
    } else { //ERROR MESSAGE IF INVALIDE ADDRESS
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end('{Error: Please write a valide address to the API}');
    }
}).listen(process.env.PORT || 3000);

console.log('Server Running');
