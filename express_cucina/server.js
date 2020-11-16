
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

var http = require('http');

//The url we want is: 'www.random.orintegers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
    host: 'node_cameriere:8080',
    path: '/'
};

  var str = '';
callback = function(response) {

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

// App
const app = express();
app.get('/', (req, res) => {
  res.send('ciao che fai?');  
});

app.get('/req', async (req, res) => {
    await http.request(options, callback).end();
    console.log('##');
    res.send('ok');
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
