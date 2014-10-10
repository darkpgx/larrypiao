var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('main');
});

var port = process.env.PORT || 8888;
app.listen(port);
