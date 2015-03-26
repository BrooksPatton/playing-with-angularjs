var webRoutes = function(app){
	app.get('*', function(req, res){
		var options = {
			root: __dirname + '/../../client',
			dotfiles: 'deny'
		};

		res.sendFile('index.html', options, function(err){
			if(err){
				console.log('**** Error sending index.html file ****');
				console.log(err);
				res.status(err.status).end();
			}
			else{
				console.log('Sent: index.html')
			}
		});
	});
};

module.exports = webRoutes;