const Post = require('../models/post');
const Pet = require('../models/pet');

module.exports = {
	create,
	index,
	createComment,
	getApplicablePosts,
	getArchived,
	getApplicablePostsByPetID,
};

function create(req, res) {
	req.body.user = req.user._id;
	Post.create(req.body).then((post) => {
		Pet.findById(req.params.id, (err, pet) => {
			pet.posts.push(post._id);
			console.log('Post created:\n', post);
			pet.save((err) => {
				res.status(200).json(post);
			});
		});
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
	// console.log('req', req);
	Post.find({ pet: req.user.following }, (err, pets) => {
		res.status(200).json(pets);
	});
}

function getArchived(req, res) {
	Post.find({ archived: true }, (err, posts) => {
		res.status(200).json(posts);
	});
}

function getApplicablePostsByPetID(req, res) {
	console.log('req', req.params.id);
	Post.find({ pet: req.params.id }, (err, posts) => {
		res.status(200).json(posts);
	});
}
