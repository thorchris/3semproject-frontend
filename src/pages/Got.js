import gotFacade from "../api/gotFacade";
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import GetVotesByChar from "../components/Vote";
import Dachma from "../images/dachma6.svg";

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
      <img className="logo" src={Dachma} alt=""></img>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="text-center mt-5 mb-2">Game of thrones</h2>
          <p>
            Game of Thrones is an American fantasy drama television series
            created by David Benioff and D. B. Weiss for HBO. It is an
            adaptation of A Song of Ice and Fire, a series of fantasy novels by
            George R. R. Martin, the first of which is A Game of Thrones. The
            show was shot in the United Kingdom, Canada, Croatia, Iceland,
            Malta, Morocco, and Spain. It premiered on HBO in the United States
            on April 17, 2011, and concluding on May 19, 2019, with 73 episodes
            broadcast over eight seasons.
          </p>
          <p className="text-muted">
            In the table below you can vote for your favorite charactar!
          </p>
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
