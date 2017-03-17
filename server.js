var http = require('http');

var os = require('os');

var ipv4 = os.networkInterfaces().eth0[0].address;
var ipv6 = os.networkInterfaces().eth0[1].address;

var system = os.type();
var release = os.release();
var speed = os.arch();

http.createServer(function(req, res) {
    
    console.log(req.headers);
    
    // require s_reponse for server responses
    
        
    // require s_response for user responses
    
    
    // require combo_res for combined responses of both user and server
    
    
}).listen(process.env.PORT || 3000);

console.log('Server Running');