import axios from 'axios';
import tokenService from '../services/tokenService';
const BASE_URL = '/api/pets/';

export function uploadUserPhoto(fileData) {
  return axios.post(`${BASE_URL}upload`, fileData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + tokenService.getToken(),
    }
  }).then((data) => {
   return data
  })
}