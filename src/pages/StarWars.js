import starwarsFacade from "../api/starwarsFacade";
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import GetVotesByChar from "../components/Vote";
import Dachma from "../images/dachma6.svg";

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
  const user = props.user;
  const whoVotedList = props.whoVotedList;

  useEffect(() => {
    starwarsFacade.getChars().then((data) => setDataFromServer(data.results));
  }, []);

  return (
    <div className="container-fluid padding">
      <img className="logo" src={Dachma} alt=""></img>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="text-center mt-5 mb-2">Star Wars</h2>
          <p>
            Star Wars is an American epic space opera media franchise created by
            George Lucas, which began with the eponymous 1977 film and quickly
            became a worldwide pop-culture phenomenon. The franchise has been
            expanded into various films and other media, including television
            series, video games, novels, comic books, theme park attractions,
            and themed areas, comprising an all-encompassing fictional universe.
            The franchise holds a Guinness World Records title for the "Most
            successful film merchandising franchise." In 2020, the Star Wars
            franchise's total value was estimated at US$70 billion, and it is
            currently the fifth-highest-grossing media franchise of all time.
          </p>
          <p className="text-muted">
            In the table below you can vote for your favorite charactar!
          </p>
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
                      user={user}
                      characterName={m.name}
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
