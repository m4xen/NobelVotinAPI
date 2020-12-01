const express = require('express');
const router = express()
const bodyParser = require('body-parser');
var fs = require('fs');

const dataPathVotes = "../../data/votes.json";


router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    console.log(req);
    res.send('Hello, VoteAPI!');
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
router.get('/vote/:id', function(req,res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var nobleList;
    var id = parseInt(req.params.id);
    fs.readFile(dataPathVotes, (err, data) => {
        if (err) {
            throw err;
        }

        var date = new Date();

        const lastMonthTooVote = 11;
        const lastDayTooVote = 10;
        const lastHourTooVote = 10;
        const lastMinTooVote = 10;

        if (date.getMonth() + 1 >= lastMonthTooVote){
          if (date.getDate() >= lastDayTooVote){
            if (date.getHours() >= lastHourTooVote){
              if (date.getMinutes() > lastMinTooVote){
                console.log("Voteing time have expired");
                getVoteResult();
				}else{
                canVote();
              }
            }else{
              canVote();
            }
          }else{
            canVote();
          }
        }
        else{
          canVote();
        }

        function canVote(){
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
        }

        function getVoteResult(){
            const sort_by = (field, reverse, primer) => {

              const key = primer ?
                function(x) {
                  return primer(x[field])
                } :
                function(x) {
                  return x[field]
                };

              reverse = !reverse ? 1 : -1;

              return function(a, b) {
                return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
              }
            }
            Nominated.sort(sort_by('votes', true, parseInt));
            console.log(Nominated[0].name + " " + Nominated[0].votes);
            Nominated.sort(sort_by('id', false, parseInt));
          }
    });
});

router.listen(process.env.PORT || 3000, function(){
	console.log("Server Listening on port 3000");
});

module.exports = router;