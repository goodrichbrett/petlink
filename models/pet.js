const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
	alias: { type: String },
	type: { type: String },
	name: { type: String },
	avatar: { type: String },
	breed: { type: String },
	gender: { type: String },
	age: { type: Number },
	conditions: [],
	posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
	ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
	followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	location: {
		type: Object,
		default: null,
	},
});

module.exports = mongoose.model('Pet', petSchema);
