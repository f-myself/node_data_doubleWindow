var port = 7777;
var express = require('express');
var bodyParser = require('body-parser');
var server = express();

server.use(bodyParser.json());
server.use('/', express.static('public'));

var data = [];

server.post('/my_data', (req, res) => {
    data.push(req.body.value);
    console.log(data);
    //res.send(data);
});

server.get('/all_data', (req, res) => {
    res.send(data);
});

server.listen(port, () => {
	console.log('Server runned on port ' + port);
});