import { baseUrl } from "./baseUrl";
import { onSuccess } from "./baseApi";

export function getPayments() {
  return get("payments.json");
}
export function deletePayment(id) {
  return del(`payments/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: "DELETE",
  });

  return fetch(request).then(onSuccess);
}
