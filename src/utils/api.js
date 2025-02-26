export const makeAPICall = url => {
  return fetch(url).then(response => response.json());
};
