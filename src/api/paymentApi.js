import { baseUrl } from './baseUrl';


export function getPayments() {
  return get('payments.json');
}
export function deletePayment(id) {
  return del(`payments/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess)
}

function onSuccess(response) {  
  if (response.ok){
    return response.json();
  } else{
    const err =  new Error(response.statusText);
    throw err
  }
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE',
  });

  return fetch(request).then(onSuccess);
}
