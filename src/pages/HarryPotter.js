import hpFacade from "../api/hpFacade"
import React, { useState, useEffect } from "react";
import { MDBBtn } from "mdbreact";

export default function Jokes() {
  const [dataFromServer, setDataFromServer] = useState([]);

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
                <th scope="col">Ancestry</th>
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
                  <td>69</td>
                  <MDBBtn
                      outline
                      color="primary"
                      rounded
                      size="m"
                      type="submit"
                      className="mr-auto"
                    >
                      Upvote
                    </MDBBtn>
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
