import { baseUrl } from "./baseUrl";
import { onSuccess } from "./baseApi";

export function getEvents() {
  return get("events.json");
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess);
}
