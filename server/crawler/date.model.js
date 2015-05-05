var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DateSchema   = new Schema({
	
	date: {type: Date}

});


module.exports = mongoose.model('Date', DateSchema);