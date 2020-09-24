const User = require('../models/user');
const Pet = require('../models/pet');

module.exports = {
	index,
	showProfile,
	update,
	delete: deleteUser,
	followPet,
	getOne,
};

function index(req, res) {
	console.log('user', req.user);
	User.find({}).then((users) => res.json(users));
}

function showProfile(req, res) {
	console.log('user\n' + req.user);
	User.findById(req.params.id).then((userInfo) => {
		res.json(userInfo);
	});
}

function update(req, res) {
	User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
		(user) => {
			res.status(200).json(user);
		}
	);
}

function followPet(req, res) {
	User.findById(req.user._id).then((user) => {
		user.following.push(req.body._id);
		user.save();
	});
	Pet.findById(req.body._id).then((pet) => {
		pet.followers.push(req.user._id);
		pet.save();
	});
	res.status(200);
}

function deleteUser(req, res) {
	User.findOneAndDelete(req.params.id).then((pet) => {
		res.status(200).json(pet);
	});
}

function getOne(req, res) {
	User.findById(req.params.id, (err, user) => {
		res.status(200).json(user.name);
	});
}
