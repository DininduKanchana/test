var express = require('express');
var app = express();

app.get('/index.htm',function(req,res){
	res.sendFile(__dirname + "/"+"index.htm");

})

app.get('/process_get',function(req,res){
	responce =  {
		first_name : req.query.first_name,
		last_name : req.query.last_name
	};
	console.log(responce);
	res.end(JSON.stringify(responce));
})

var server = app.listen(8081,function(){
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listining at http://%s:%s",host,port)
})