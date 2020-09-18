import tokenService from '../services/tokenService';
const BASE_URL = '/api/pets/';

export function create(pet) {
	return fetch(
		BASE_URL,
		{
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: 'Bearer ' + tokenService.getToken(),
			},
			body: JSON.stringify(pet),
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}

export function getPets(pets) {
	return fetch(
		`${BASE_URL}${pets}`,
		{
			headers: { Authorization: 'Bearer ' + tokenService.getToken() },
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}
