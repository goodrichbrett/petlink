import tokenService from '../services/tokenService';
import axios from 'axios';
const BASE_URL = '/api/posts/';

export function create(post) {
	return fetch(
		BASE_URL,
		{
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: 'Bearer ' + tokenService.getToken(),
			},
			body: JSON.stringify(post),
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}

export function getPosts() {
	return fetch(
		`${BASE_URL}`,
		{
			headers: { Authorization: 'Bearer ' + tokenService.getToken() },
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}

// export function getPosts() {
// 	return axios.get(`${BASE_URL}`, {
// 		headers: { Authorization: 'Bearer ' + tokenService.getToken() },
// 		params: {
// 			private: false,
// 		},
// 	});
// }

export function getOne(post) {
	return fetch(
		`${BASE_URL}${post._id}`,
		{
			headers: { Authorization: 'Bearer ' + tokenService.getToken() },
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}

export function getApplicablePosts(followedPets) {
	return fetch(
		`${BASE_URL}${followedPets}`,
		{
			headers: { Authorization: 'Bearer ' + tokenService.getToken() },
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}

// may need changing after implementing archive functionality
export function getArchived() {
	return fetch(
		`${BASE_URL}/archive`,
		{
			headers: { Authorization: 'Bearer ' + tokenService.getToken() },
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}
