const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: { type: String },
	email: { type: String },
	feedback: { type: String },
});

module.exports = mongoose.model("users", UserSchema);
