import starwarsFacade from "../api/starwarsFacade";
import React, { useState, useEffect } from "react";

export default function StarWars() {
  const [dataFromServer, setDataFromServer] = useState([]);

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
                <th scope="col">URL </th>
                <th scope="col">Points </th>
              </tr>
            </thead>
            <tbody>
              {dataFromServer.map((m) => (
                <tr key={m.name}>
                  <td>{m.name}</td>
                  <td>{m.uid}</td>
                  <td>{m.url}</td>
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
