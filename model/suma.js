ar mongoose = require("mongoose");
var Schema = mongoose.Schema;

var users = new Schema({
		name: String,
		email: String
});

module.exports = mongoose.model('Users', users);
