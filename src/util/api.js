import fetch from 'isomorphic-fetch';

export const API_URL = `/api`;

const buildHeaders = () => ({
  'content-type': 'application/json',
  'authorization': localStorage.getItem("token"),
});

export function get(endpoint) {
  return fetch(`${API_URL}/${endpoint}`, {
    headers: buildHeaders(),
    method: 'GET',
  }).then(response => response.json());
}

export default {
  get,
};
