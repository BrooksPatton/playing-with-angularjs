var express = require('express');

var app = express();

app.use('/lib', express.static(__dirname + '/../bower_components'));
app.use('/css', express.static(__dirname + '/../client/css'));
app.use('/js', express.static(__dirname + '/../client/js'));

require('./routes/web')(app);

app.listen(9800, function(){
	console.log('Server started on port 9800!');
});