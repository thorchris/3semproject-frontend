import gotFacade from "../api/gotFacade";
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { MDBBtn } from "mdbreact";

export default function Got() {
  const [dataFromServer, setDataFromServer] = useState([]);

  useEffect(() => {
    gotFacade.getCharacters().then((data) => setDataFromServer(data));
  }, []);

  return (
    <div className="container-fluid padding">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="text-center mt-5 mb-2">Game of thrones</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Title</th>
                <th scope="col">Family </th>
                <th scope="col">Points </th>
              </tr>
            </thead>
            <tbody>
              {dataFromServer && dataFromServer.length > 0 ? (
                dataFromServer.map((m) => (
                  <tr key={m.fullName}>
                    <td>{m.fullName}</td>
                    <td>{m.title}</td>
                    <td>{m.family}</td>
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
