import getBaseUrl from './baseUrl';
import resolveBankName from './resolveBankName';

const baseUrl = getBaseUrl();

export async function getBanks() {
  return get('banks');
}
export async function deleteBank(id) {
  return del(`banks/${id}`);
}

export async function addBank(data) {
  let bankData = {};
  bankData['name'] = await resolveBankName(data.rountingNumber);
  bankData['type'] = data.accountType;
  bankData['rountinnum'] = data.rountingNumber;
  bankData['accountnum'] = data.accountNumber;
  bankData['verified'] = false;
  return post('banks', bankData);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function post(url, data) {
  console.log("inbankapi",data)

  // Post the wrapped data to server
  return fetch(baseUrl + url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json));
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); //eslint-disable-line no-console
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}
