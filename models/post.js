const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	commenter: { type: Schema.Types.ObjectId, ref: 'User' },
	content: String,
});

const postSchema = new Schema({
	title: {
		type: String,
	},
	postType: String,
	content: {
		type: String,
	},
	tags: Array,
	date: Date,
	comments: [commentSchema],
	archived: {
		type: Boolean,
		default: false,
	},
	private: {
		type: Boolean,
		default: false,
	},
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	pet: { type: Schema.Types.ObjectId, ref: 'Pet' },
});

module.exports = mongoose.model('Post', postSchema);
