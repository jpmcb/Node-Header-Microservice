  // TO CHANGE - USER RESPONSES
    } else if(req.url === '/user') {
        var lang = req.headers['accept-language'].split(',')[0];
        
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{IP: ${req.headers['x-forwarded-for']}, Language: ${lang}, System: ${req.headers['user-agent']} }`);
    } else if(req.url === '/user/ip') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(`{IP: ${ipv4}}`); //finished   
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
    