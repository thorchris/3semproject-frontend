import SERVER_URL from "../util/Settings";

const localhost = "http://localhost:8080/jpareststarter" ; 

function upvoteCharacter(charactername) {
    //CHANGE TO SERVER_URL 
    const options = makeOptions("POST",charactername)
    return fetch(localhost + "/api/vote/upvote/" + charactername, options)
    .then(handleHttpErrors)
    .catch((err) => {
      if (err.status) {
        err.fullError.then((e) => console.log(e.message));
      } else {
        console.log("Network error");
      }
    });
}

function getCharactersVotes(charactername) {
    //CHANGE TO SERVER_URL 
  return fetch(localhost + "/api/vote/" + charactername)
    .then(handleHttpErrors)
    .catch((err) => {
      if (err.status) {
        err.fullError.then((e) => console.log(e.message));
      } else {
        console.log("Network error");
      }
    });
}


const voteFacade = {
    upvoteCharacter,
    getCharactersVotes, 
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

export default voteFacade;
