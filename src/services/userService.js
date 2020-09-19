import tokenService from '../services/tokenService';
const BASE_URL = '/api/users/';

export function getAllUsers() {
	return fetch(
		BASE_URL,
		{
			headers: { Authorization: 'Bearer ' + tokenService.getToken() },
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}

export function update(user) {
	console.log('update hit')
	return fetch(
		`${BASE_URL}${user._id}`,
		{
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
				Authorization: 'Bearer ' + tokenService.getToken(),
			},
			body: JSON.stringify(user),
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}
