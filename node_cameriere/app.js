// Cameriere

const http = require('http');
const port = 8080;


// prende gli argomenti presenti nel get req
// string -> obj
let urlDecoder = (url) => {
    const argomenti = url.split('?')[1].split('&');
    let argomentiObject = {};
    argomenti.forEach(elem => {
        elem = elem.split('=');
        argomentiObject[elem[0]] = elem[1];
    });
    return argomentiObject;
}


const server = http.createServer((req, res) => {
    const path = req.url;
    
    // risposta
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log('req'); 
/*    let params = urlDecoder(req.url); 
    
    let response = "";

    Object.keys(params).forEach(key => {
        response = response + `{ ${key} : ${params[key]}}`;
    })*/
    res.write('bella pe te');
    res.end();
});

server.listen(port);
