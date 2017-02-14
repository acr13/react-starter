export const getUser = () =>
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(resp => resp.json());

export const getUsers = () =>
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json());