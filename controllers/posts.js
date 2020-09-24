const Post = require('../models/post');
const Pet = require('../models/pet');
const mongoose = require('mongoose');

module.exports = {
	create,
	index,
	createComment,
	getApplicablePosts,
	getArchived,
	getApplicablePostsByPetID,
	update,
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
	Post.find({ private: false, archived: false }, (err, posts) => {
		res.status(200).json(posts);
	});
}

function createComment(req, res) {
	Post.findById(req.params.id, (err, post) => {
		post.comments.push(req.body);
		post.save((err) => {
			res.status(200).json(post);
			console.log('error', err)
		});
	});
}

function getApplicablePosts(req, res) {
	// console.log('req', req);
	Post.find({ archived: false, pet: req.user.following })
		.populate({
			path: 'comments',
			// Get friends of friends - populate the 'friends' array for every friend
			populate: { path: 'commenter', select: 'name' }
		  })
		.then(pets => res.status(200).json(pets))
	});
}

function getArchived(req, res) {
	Post.find({ archived: true }, (err, posts) => {
		res.status(200).json(posts);
	});
}

function getApplicablePostsByPetID(req, res) {
	console.log('req', req.params.id);
	Post.find(
		{ pet: req.params.id, private: false, archived: false },
		(err, posts) => {
			res.status(200).json(posts);
		}
	);
}

function update(req, res) {
	Post.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	}).then((post) => {
		res.status(200).json(post);
	});
}
