const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema;

const symptomSchema = new Schema({
	name: { type: String, required: true },
	date: Date,
	tags: Array,
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
	symptoms: [symptomSchema],
	ownerId: { type: String },
	followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Pet', petSchema);
