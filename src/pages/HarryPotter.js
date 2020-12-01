import hpFacade from "../api/hpFacade";
import React, { useState, useEffect } from "react";
import GetVotesByChar from "../components/Vote";

export default function HarryPotter() {
  const [dataFromServer, setDataFromServer] = useState([]);
  console.log(dataFromServer);

  useEffect(() => {
    hpFacade.getChars().then((data) => setDataFromServer(data.hpDTOList));
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
                  <td>{m.house}</td>
                  <td>{m.dateOfBirth}</td>
                  <td>{m.ancestry}</td>
                  <GetVotesByChar characterName={m.name} />
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
