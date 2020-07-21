import { baseUrl } from './baseUrl';
import { onSuccess } from './baseApi';
// import md5 from 'js-md5';
import resolveBankName from './resolveBankName';

export async function getBanks() {
  return get(`banks.json`);
}

export async function deleteBank(id) {
  return del(`banks/${id}.json`);
}

export async function addBank(data) {
  let bankData = {};
  bankData['name'] = await resolveBankName(data.rountingNumber);
  bankData['type'] = data.accountType;
  bankData['rountinnum'] = data.rountingNumber;  //TODO: encypet rountinnum with MD5 method
  bankData['accountnum'] = data.accountNumber;  //TODO: encypet rountinnum with MD5 method
  bankData['verified'] = false;
  return post('banks.json', bankData);
}

export async function updateBank(key, data) {
  return patch(`banks/${key}.json`, data);
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
  .then(json => console.log("Bank API Post", json));
}

function patch(url, data) {
  return fetch(baseUrl + url, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(onSuccess)
  .then(json => console.log("Bank API Patch",json));
}