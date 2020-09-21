const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conditionSchema = new Schema({
	condition: String,
});

module.exports = mongoose.model('Condition', conditionSchema);
