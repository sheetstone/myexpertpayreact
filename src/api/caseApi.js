import { baseUrl } from './baseUrl';
import { onSuccess } from './baseApi';
// import md5 from 'js-md5';

export async function getCases() {
  return get(`cases.json`);
}

export async function deleteCase(id) {
  return del(`cases/${id}.json`);
}

export async function addCase(data) {
  return post('cases.json', data);
}

export async function updateCase(key, data) {
  return patch(`cases/${key}.json`, data);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess);
}

function del(url) {
  return fetch(baseUrl + url, {
    method: 'DELETE'
  }).then(onSuccess);
}

function post(url, data) {
  // Post the wrapped data to server
  return fetch(baseUrl + url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(onSuccess)
  .then(json => console.log("Case API: Add successful: ", json));
}

function patch(url, data) {
  return fetch(baseUrl + url, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(onSuccess)
  .then(json => console.log("Case API: Patched successful: ", json));
}