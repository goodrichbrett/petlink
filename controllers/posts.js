const Post = require('../models/post');

module.exports = {
	create,
	index,
	createComment,
	getApplicablePosts,
};

function create(req, res) {
	req.body.user = req.user._id;
	Post.create(req.body).then((post) => {
		console.log('Post created:\n', post);
		res.status(200).json(post);
	});
}

function index(req, res) {
	Post.find({ private: false }, (err, posts) => {
		res.status(200).json(posts);
	});
}

function createComment(req, res) {
	Post.findById(req.params.id, (err, post) => {
		post.comments.push(req.body);
		console.log(post);
		post.save((err) => {
			res.status(200).json(post);
		});
	});
}

function getApplicablePosts(req, res) {
	Post.find({ pet: req.params.id }, (err, post) => {
		res.status(200).json(post);
	});
}
