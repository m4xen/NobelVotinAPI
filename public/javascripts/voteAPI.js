const express = require('express');
const router = express()
const bodyParser = require('body-parser');
var fs = require('fs');

const dataPathVotes = "../../data/votes.json";


router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    console.log(req);
    res.send('Hello, world!');
});

router.get('/vote', function(req,res, next) {
	fs.readFile(dataPathVotes, (err, data) => {
		if (err) {
			throw err;
		}
		//var nobleList = JSON.parse(data);
		res.send(JSON.parse(data));
		next();
	});
});

router.post('/vote', function(req,res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	var nobleList;
	var id = parseInt(req.body.id);
	fs.readFile(dataPathVotes, (err, data) => {
		if (err) {
			throw err;
		}
		nobleList = JSON.parse(data);
		nobleList[id].votes++;
		
		fs.writeFile(dataPathVotes, JSON.stringify(nobleList), (err) => {
			if (err) {
				throw err;
			}
			console.log("somebody voted!");
		});
		
		res.send(nobleList);
		next();
	});
});

router.listen(process.env.PORT || 3000, function(){
	console.log("Server Listening on port 3000");
});

module.exports = router;