module.exports = function(){

	this.mongoose = require('mongoose');
	this.mongoose.connect(this.set('db-uri'));	
};