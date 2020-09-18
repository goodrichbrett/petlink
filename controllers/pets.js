const Pet = require('../models/pet');
const User = require('../models/user');

module.exports = {
	create,
	index,
};

// function create(req, res) {
// 	req.body.ownerId = req.user._id;
// 	Pet.create(req.body).then((pet) => {
// 		res.status(201).json(pet);
// 	});
// }

function create(req, res) {
	req.body.ownerId = req.user._id;
	Pet.create(req.body).then((pet) => {
		User.findById(req.user._id).then((user) => {
			user.pets.push(pet._id);
			user.save();
			console.log(user.pets);
		});
		res.status(200).json(pet);
	});
}

function index(req, res) {
	Pet.find({ ownerId: req.user._id }, (err, pets) => {
		console.log('req', req.user);
		res.status(200).json(pets);
	});
}
