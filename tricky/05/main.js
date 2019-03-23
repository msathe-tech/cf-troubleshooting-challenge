// Set transportation options

const transportNodeIds = {
  "Aeroport": "1267",
  "Port": "8976",
  "Railway": "9096551"	
}
keys = Object.keys(transportNodeIds)

keys.forEach(function(key) {
  process.env[key.toUpperCase()] = transportNodeIds[key]
});

var http = require('http');
var port = parseInt(process.env.PORT,10);

var server = http.createServer(
  function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write("<head><style type='text/css'> body {font-size: 56px;font-weight: bold; background-color: #f49e42; text-align: center;}</style></head>");
    res.end("<body>CONGRATULATIONS<br>you just completed tricky task #05</body>");
  }
);
console.log("Server created")
server.listen(port, '0.0.0.0');
