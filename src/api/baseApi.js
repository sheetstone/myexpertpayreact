/*
 * Process data when get successful response from server
 */
export function onSuccess(response) {
  if (response.ok) {
    return response.json();
  } else {
    const err = new Error(response.statusText);
    throw err;
  }
}
