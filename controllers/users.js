const User = require('../models/user');

module.exports = {
	index,
	showProfile,
};

function index(req, res) {
	console.log('req.user', req.user);
	User.find({}).then((users) => res.json(users));
}

function showProfile(req, res) {
	console.log('user\n' + req.user);
	User.findById(req.params.id).then((userInfo) => {
		res.json(userInfo);
	});
}
