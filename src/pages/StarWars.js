import starwarsFacade from "../api/starwarsFacade";
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import GetVotesByChar from "../components/Vote";

function GetCharById(props) {
  const [characterById, setCharacterById] = useState("");

  if (characterById === "") {
    starwarsFacade.getCharById(props.id).then((data) => setCharacterById(data));
  }
  if (characterById !== undefined) {
    return (
      <>
        <td>{characterById.eye_color}</td>
        <td>{characterById.height}</td>
        <td>{characterById.mass}</td>
      </>
    );
  } else {
    return (
      <>
        <td>No data </td>
        <td>No data</td>
        <td>No data</td>
      </>
    );
  }
}

export default function StarWars(props) {
  const [dataFromServer, setDataFromServer] = useState([]);
  const loggedIn = props.loggedIn;

  useEffect(() => {
    starwarsFacade.getChars().then((data) => setDataFromServer(data.results));
  }, []);

  return (
    <div className="container-fluid padding">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="text-center mt-5 mb-2">Star Wars characters</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">UID</th>
                <th scope="col">Eye color </th>
                <th scope="col">Height </th>
                <th scope="col">Mass </th>
                <th scope="col">Points </th>
              </tr>
            </thead>
            <tbody>
              {dataFromServer && dataFromServer.length > 0 ? (
                dataFromServer.map((m) => (
                  <tr key={m.name}>
                    <td>{m.name}</td>
                    <td>{m.uid}</td>
                    <GetCharById id={m.uid} />
                    <GetVotesByChar
                      loggedIn={loggedIn}
                      characterName={m.name}
                    />
                  </tr>
                ))
              ) : (
                <Spinner animation="border" />
              )}
            </tbody>
          </table>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
