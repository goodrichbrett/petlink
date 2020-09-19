const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	commenter: String,
	content: String,
});

const postSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	postType: String, //behavior or symptom
	content: {
		type: String,
		required: true,
	},
	tags: Array,
	date: Date,
	comments: [commentSchema],
	archived: Boolean,
	private: Boolean,
});

const petSchema = new Schema({
	alias: { type: String },
	type: { type: String },
	name: { type: String },
	avatar: { type: String },
	breed: { type: String },
	gender: { type: String },
	age: { type: Number },
	illnesses: [{ type: Schema.Types.ObjectId, ref: 'Illness' }],
	posts: [postSchema],
	ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
	followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Pet', petSchema);
