var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tweet   = new Schema({
	text: String,
	created_at: String

});

module.exports = mongoose.model('tweet', tweet);