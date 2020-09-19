const User = require('../models/user');

module.exports = {
	index,
	showProfile,
	update,
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
