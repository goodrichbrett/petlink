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
	user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Post', postSchema);
