const Pet = require('../models/pet');
const User = require('../models/user');

module.exports = {
	create,
	index,
	delete: deletePet,
	update,
	search,
	getFollowedPets,
	getAllPets,
	getOne
};

// function create(req, res) {
// 	req.body.ownerId = req.user._id;
// 	Pet.create(req.body).then((pet) => {
// 		res.status(201).json(pet);
// 	});
// }

function create(req, res) {
	req.body.type = req.body.type.toLowerCase();
	req.body.ownerId = req.user._id;
	Pet.create(req.body).then((pet) => {
		console.log('Pet created:\n', pet);
		User.findById(req.user._id).then((user) => {
			console.log('USER LOCATION', user.location);
			pet.location = user.location;
			pet.save();
			user.pets.push(pet._id);
			user.save();
		});
		res.status(200).json(pet);
	});
}

function index(req, res) {
	Pet.find({
		ownerId: req.user._id
	}, (err, pets) => {
		res.status(200).json(pets);
	});
}

function deletePet(req, res) {
	Pet.findOneAndDelete(req.params.id).then((pet) => {
		res.status(200).json(pet);
	});
}

function update(req, res) {
	Pet.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	}).then(
		(pet) => {
			res.status(200).json(pet);
		}
	);
}

function search(req, res) {
	const {
		type,
		distance,
		condition
	} = req.query;
	let query = {
		type
	};
	if (condition) {
		query = {
			...query,
			conditions: condition
		};
	}

	const filteredPets = [];

	Pet.find(query, (err, pets) => {
		pets.forEach((pet) => {
			if (pet.location) {
				const distanceBetween = haversineDistance(
					req.user.location.lat,
					req.user.location.long,
					pet.location.lat,
					pet.location.long,
					true
				);
				if (distanceBetween <= distance) {
					filteredPets.push(pet);
				}
			}
		});
		res.status(200).json(filteredPets);
		console.log('------filtered pets ------', filteredPets)
	});
}

function getFollowedPets(req, res) {
	Pet.find({
		followers: req.user._id
	}, (err, pets) => {
		res.status(200).json(pets);
	});
}

const haversineDistance = (lat1, lon1, lat2, lon2, isMiles = false) => {
	const toRadian = (angle) => (Math.PI / 180) * angle;
	const distance = (a, b) => (Math.PI / 180) * (a - b);
	const RADIUS_OF_EARTH_IN_KM = 6371;

	const dLat = distance(lat2, lat1);
	const dLon = distance(lon2, lon1);

	lat1 = toRadian(lat1);
	lat2 = toRadian(lat2);

	// Haversine Formula
	const a =
		Math.pow(Math.sin(dLat / 2), 2) +
		Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
	const c = 2 * Math.asin(Math.sqrt(a));

	let finalDistance = RADIUS_OF_EARTH_IN_KM * c;

	if (isMiles) {
		finalDistance /= 1.60934;
	}

	console.log(finalDistance);
	return finalDistance;
};

function getAllPets(req, res) {
	Pet.find({}, (err, pets) => {
		res.status(200).json(pets);
	});
}

function getOne(req, res) {
	Pet.findById(req.params.id, (err, pet) => {
		res.status(200).json(pet);
	})
}