import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getEvents() {
  return get('Events');
}
export function deletePayment(id) {
  return del(`Events/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE',
  });

  return fetch(request).then(onSuccess, onError);
}
