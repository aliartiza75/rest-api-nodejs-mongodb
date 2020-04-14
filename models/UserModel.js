var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	userId: {type: String, required: true},
	email: {type: String, required: true},
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	city: {type: String, required: true},
	country: {type: String, required: true},
	phone: {type: String, required: true},
	password: {type: String, required: true},
	lastLogin: {type: String, required: true},
	lastName: {type: String, required: true},
	lastSeenIp: {type: String, required: true},
}, {timestamps: true});

// Virtual for user's full name
UserSchema
	.virtual("fullName")
	.get(function () {
		return this.firstName + " " + this.lastName;
	});

module.exports = mongoose.model("User", UserSchema);