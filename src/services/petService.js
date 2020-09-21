import tokenService from '../services/tokenService';
import axios from 'axios'
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

export function getPets() {
	return fetch(
		`${BASE_URL}`,
		{
			headers: { Authorization: 'Bearer ' + tokenService.getToken() },
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}

export function getOne(pet) {
	return fetch(
		`${BASE_URL}${pet._id}`,
		{
			headers: { Authorization: 'Bearer ' + tokenService.getToken() },
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}

export function update(pet) {
	return fetch(
		`${BASE_URL}${pet._id}`,
		{
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
				Authorization: 'Bearer ' + tokenService.getToken(),
			},
			body: JSON.stringify(pet),
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}

export function getFollowedPets() {
	return fetch(
		`/api/users/`,
		{
			headers: { Authorization: 'Bearer ' + tokenService.getToken() },
		},
		{ mode: 'cors' }
	).then((res) => res.json());
}

export function getApplicable(formData) {
	
	return axios.get(`${BASE_URL}search`, {
		headers: { Authorization: 'Bearer ' + tokenService.getToken() },
		params: {
			type: formData.type,
			distance: formData.distance,
			condition: formData.condition,
		},
	});
	
}
