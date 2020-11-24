import starwarsFacade from "../api/starwarsFacade";
import React, { useState, useEffect } from "react";

export default function Jokes() {
  const [dataFromServer, setDataFromServer] = useState([]);

  useEffect(() => {
    starwarsFacade.getChars().then((data) => setDataFromServer(data.results));
  }, []);

  return (
    <div className="container-fluid padding">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="text-center mt-5 mb-2">Harry Potter</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">House</th>
                <th scope="col">Birthdate </th>
                <th scope="col">Actor</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
            <tbody>
              {dataFromServer.map((m) => (
                <tr key={m.name}>
                  <td>{m.name}</td>
                  <td>{m.uid}</td>
                  <td>{m.url}</td>
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
