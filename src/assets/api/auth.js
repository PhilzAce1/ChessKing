// import data from '../data';
import data from "../data";
const { api } = data;
class AuthAPI {
  login = (user, cb, signingUp) => {
    const path = signingUp ? "signup" : "login";
    // const url = `${apiURL}/${path}`;
    const url = `${api}/auth/${path}`;
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        cb(results);
      })
      .catch((error) => {
        cb({ error });
      });
  };
}

export default AuthAPI;
