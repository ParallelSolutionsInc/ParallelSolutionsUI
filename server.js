var express = require("express");
var app = express();
var port = 8080;

app.use(express.static(__dirname + '/public'));
app.set('port', port);
app.get('/',function(req,res) {
    res.sendFile(__dirname + '/public' + "/index.html");
});
console.log('****made it here');
app.listen(port);