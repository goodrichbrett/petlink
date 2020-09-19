const User = require('../models/user');

module.exports = {
	index,
	showProfile,
	update,
	delete: deleteUser
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
	console.log('controller hit')
	console.log('params',req.params.id)
	User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
		(user) => {
			res.status(200).json(user);
		}
	);
}

function deleteUser(req, res) {
	User.findOneAndDelete(req.params.id).then((pet) => {
		res.status(200).json(pet);
	});
}
