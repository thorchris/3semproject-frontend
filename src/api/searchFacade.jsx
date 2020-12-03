import SERVER_URL from "../util/Settings";

function searchForAllChars() {
  return fetch(SERVER_URL + "/api/search")
    .then(handleHttpErrors)
    .catch((err) => {
      if (err.status) {
        err.fullError.then((e) => console.log(e.message));
      } else {
        console.log("Network error");
      }
    });
}

const searchFacade = {
    searchForAllChars,
  };

  function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }

export default searchFacade;