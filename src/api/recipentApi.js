import { baseUrl } from "./baseUrl";
import { onSuccess } from "./baseApi";
// import md5 from 'js-md5';

export async function getRecepient() {
  return get(`recepients.json`);
}

export async function deletRecepient(id) {
  if (id === null || id === "") {
    return;
  }
  return del(`recepients/${id}.json`);
}

export async function addRecepient(data) {
  return post("recepients.json", data);
}

export async function updateRecepient(key, data) {
  return patch(`recepients/${key}.json`, data);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess);
}

function del(url) {
  return fetch(baseUrl + url, {
    method: "DELETE",
  }).then(onSuccess);
}

function post(url, data) {
  // Post the wrapped data to server
  return fetch(baseUrl + url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(onSuccess)
    .then((json) => console.log("Recepient API: Add successful: ", json));
}

function patch(url, data) {
  return fetch(baseUrl + url, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(onSuccess)
    .then((json) => console.log("Recepient API: Patched successful: ", json));
}
