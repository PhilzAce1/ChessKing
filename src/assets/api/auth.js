import data from '../data';

const { api } = data;
const apiURL = `${api}/auth`;

class AuthAPI {
  login = (user, cb, signingUp) => {
    const path = signingUp ? 'signup' : 'login';
    // const url = `${apiURL}/${path}`;

    const url = 'http://localhost:5000/api/auth/login';
    fetch('http://localhost:5000').then((e) => console.log);
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((results) => {
        cb(results);
        console.log(results);
      })
      .catch((error) => {
        cb({ error });
      });
  };
}

export default AuthAPI;
