import gotFacade from "../api/gotFacade";
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import GetVotesByChar from "../components/Vote";

export default function Got(props) {
  const [dataFromServer, setDataFromServer] = useState([]);
  const loggedIn = props.loggedIn;
  const whoVotedList = props.whoVotedList;
  const user = props.user;

  useEffect(() => {
    gotFacade.getCharacters().then((data) => setDataFromServer(data));
  }, []);

  return (
    <div className="container-fluid padding">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="text-center mt-5 mb-2">Game of thrones characters</h2>
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
                    <GetVotesByChar
                      loggedIn={loggedIn}
                      characterName={m.fullName}
                      user={user}
                      whoVotedList={whoVotedList}
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
