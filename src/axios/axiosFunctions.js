import axios from 'axios';
import {URL} from './URL';

export function axiosPost(text) {
  let postURL = URL(`todo`);
  return axios({
    method: 'post',
    url: postURL,
    data: {text: text},
  })
    .then(responseUser => {
      console.log(responseUser.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

export function axiosPut(id, text) {
  let putURL = URL(`todo/${id}`);
  return axios({
    method: 'put',
    url: putURL,
    data: {text: text},
  })
    .then(responseUser => {
      console.log(responseUser.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

export function axiosDelete(id) {
  let deleteURL = URL(`todo/${id}`);
  return axios({
    method: 'delete',
    url: deleteURL,
  })
    .then(responseUser => {
      console.log(responseUser.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}
