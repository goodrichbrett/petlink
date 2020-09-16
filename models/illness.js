const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const illnessSchema = new Schema({
	condition: String,
});

module.exports = mongoose.model('Illness', illnessSchema);
