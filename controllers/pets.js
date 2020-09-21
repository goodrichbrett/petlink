const Pet = require('../models/pet');
const User = require('../models/user');

module.exports = {
	create,
	index,
	delete: deletePet,
	update,
	search,
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
		console.log('Pet created:\n', pet);
		User.findById(req.user._id).then((user) => {
			user.pets.push(pet._id);
			user.save();
		});
		res.status(200).json(pet);
	});
}

function index(req, res) {
	Pet.find({ ownerId: req.user._id }, (err, pets) => {
		res.status(200).json(pets);
	});
}

function deletePet(req, res) {
	Pet.findOneAndDelete(req.params.id).then((pet) => {
		res.status(200).json(pet);
	});
}

function update(req, res) {
	Pet.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
		(pet) => {
			res.status(200).json(pet);
		}
	);
}

function search(req, res) {
	console.log('req', req.body);
	Pet.find({ type: req.query.type }, (err, pets) => {
		res.status(200).json(pets);
	});
}
