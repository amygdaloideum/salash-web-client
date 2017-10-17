import fetch from 'isomorphic-fetch';

export const API_URL = `/api`;

export default function callApi(endpoint, method = 'get', body, token) {
  return fetch(`${API_URL}/${endpoint}`, {
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
      'authorization': token
    },
    method,
    body: JSON.stringify(body),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  })
  .then(
    response => response,
    error => error
  );
}
