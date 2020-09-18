const Pet = require('../models/pet');

module.exports = {
	create,
};

function create(req, res) {
	req.body.ownerId = req.user._id;
	Pet.create(req.body).then((pet) => {
		res.status(201).json(pet);
	});
}
