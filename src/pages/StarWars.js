import starwarsFacade from "../api/starwarsFacade";
import React, { useState, useEffect } from "react";

export default function StarWars() {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [characterById, setCharacterById] = useState("");
  let [characterById2] = "";

  useEffect(() => {
    starwarsFacade.getChars().then((data) => setDataFromServer(data.results));
  }, []);

  function GetCharById(props) {
    starwarsFacade.getCharById(props.id).then((data) => setCharacterById(data));
    characterById2 = characterById;
    if (characterById2 !== undefined) {
      return (
        <div>
          <td>{characterById2.eye_color}</td>
          <td>{characterById2.height}</td>
          <td>{characterById2.mass}</td>
        </div>
      );
    } else {
      return "info is missing";
    }
  }

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
                <th scope="col">Eye color, height, mass </th>
                <th scope="col">Points </th>
              </tr>
            </thead>
            <tbody>
              {dataFromServer.map((m) => (
                <tr key={m.name}>
                  <td>{m.name}</td>
                  <td>{m.uid}</td>
                  <GetCharById id={m.uid} />
                  <td>69</td>
                  <button className="btn btn-primary">Upvote</button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
