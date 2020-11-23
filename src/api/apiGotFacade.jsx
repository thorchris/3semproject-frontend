//import SERVER_URL from "../util/Settings";
// Online:
//const SERVER_URL = "https://dachma.dk/3semProject_backend/api/got/all"

const SERVER_URL = "http://localhost:8080/jpareststarter";

function getCharacters() {
  return fetch(SERVER_URL + "/api/got/all")
    .then(handleHttpErrors)
    .catch((err) => {
      if (err.status) {
        err.fullError.then((e) => console.log(e.message));
      } else {
        console.log("Network error");
      }
    });
}

const apiGotFacade = {
  getCharacters,
};

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

export default apiGotFacade;
