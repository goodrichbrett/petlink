import tokenService from '../services/tokenService';
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
