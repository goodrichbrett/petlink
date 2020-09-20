const Post = require('../models/post');

module.exports = {
	create,
	index,
};

function create(req, res) {
	req.body.user = req.user._id;
	Post.create(req.body).then((post) => {
		console.log('Post created:\n', post);
		res.status(200).json(post);
	});
}

function index(req, res) {
	Post.find({}, (err, posts) => {
		res.status(200).json(posts);
	});
}
