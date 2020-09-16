const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let allergySchema, illnessSchema, postSchema, symptomSchema;

const petSchema = new Schema({
	alias: { type: String },
	type: { type: String },
	name: { type: String },
	avatar: { type: String },
	breed: { type: String },
	gender: { type: String },
	age: { type: Number },
	allergies: [allergySchema],
	illnesses: [illnessSchema],
	posts: [postSchema],
	symptoms: [symptomSchema],
	ownerId: { type: String },
});

module.exports = mongoose.model('Pet', petSchema);
