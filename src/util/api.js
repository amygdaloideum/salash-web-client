import fetch from 'isomorphic-fetch';

export const API_URL = `/api`;

const buildHeaders = (multipart) => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  const headers =  { 'authorization': auth ? auth.token : '' }
  if(!multipart) {
    headers['content-type'] = 'application/json';
  }
  return headers;
};

export function get(endpoint) {
  return fetch(`${API_URL}/${endpoint}`, {
    headers: buildHeaders(),
    method: 'GET',
  }).then(response => response.json());
}

export function post(endpoint, body = {}, options = {}) {
  const config = {
    headers: buildHeaders(options.multipart),
    method: 'POST',
    body: options.multipart ? convertBodyToFormData(body) : JSON.stringify(body),
  };
  console.log(config);
  return fetch(`${API_URL}/${endpoint}`, config).then(response => response.json());
}

// Helpers

export function convertBodyToFormData(body) {
  console.log('converting post body to formdata...');
  const formData  = new FormData();

  for(var name in body) {
    formData.append(name, body[name]);
  }

  return formData;
}

export default {
  get, post,
};
