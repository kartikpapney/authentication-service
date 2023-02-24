const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true, index: true },
		firstName: { type: String, default: "Human"},
		lastName: { type: String, default: ""},
		mobileNumber: { type: String, default: ""},
        passwordCipher: {type: String, required: true}
	},
	{ collection: 'users' }
)

const User = mongoose.model('User', UserSchema)

module.exports = {User} 