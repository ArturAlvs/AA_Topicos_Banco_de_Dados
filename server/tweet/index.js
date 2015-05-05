var express = require('express');
var router = express.Router();


var Tweet = require('./tweet.model.js')

router.route('/')
	.get(function(req, res) {

		// var Twitter = require('twitter')

		// client = new Twitter({
		// 	consumer_key : "Jk2tFCvj66SdxeiyHBWXMRigN",
		//     consumer_secret : "LcVCnjD8ygCaiyyCsti0pxH3Og5OfE4J85uaz0kBzSkCwbPDSM",

		//     access_token : "400717653-QfPL2vDOwkEXGpRQ38IufT0d3UizRsoVvuzLi54y",
		//     access_token_secret : "lhSsOmOxxxkPz79qj6ArfShEAXEHt5KQn20MYNqze07JU"
		// });

		// client.get('search/tweets',{q:'geladeira'},function(error,tweets,response){
		// 	console.log(tweets)
		// });
		
		Tweet.find(function(err, tweets) {
			if (err)
				res.send(err);


			res.json({tweets:tweets});
		});

	})
	.post(function(req, res) {
		

		var tweet = new Tweet(); 		// create a new instance of the Bear model

		tweet.text = req.body.text;

		// save the bear and check for errors
		tweet.save(function(err) {
			if (err)
				res.send(err);

			res.json(tweet);
		});

	});

	router.route('/:text')
		.post(function(req,res){

			Tweet.findOne({text: req.params.text}, function(err, tweet) {
				if (err)
					res.send(err);

				console.log(tweet.text+' obaoba');

				tweet.save(function(err) {
					if (err)
						res.send(err);

					res.json(tweet);
				});
			});


			
			// console.log(music);
			// tweet.save(function(err){
			// 	if (err) { res.send(err)};

			// 	res.json(tweet);
			// });
		});

module.exports = router;
