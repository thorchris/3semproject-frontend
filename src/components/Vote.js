import voteFacade from "../api/voteFacade";
import React, { useState } from "react";

export default function GetVotesByChar(props) {
  const [voteByCharacter, setVoteByCharacter] = useState("");
  const loggedIn = props.loggedIn;

  function getData() {
    voteFacade
      .getCharactersVotes(props.characterName)
      .then((data) => setVoteByCharacter(data));
  }

  if (voteByCharacter === "") {
    getData();
  }

  function UpvoteCharacter(props) {
    function upvote() {
      voteFacade.upvoteCharacter(props.characterName);
      getData();
    }

    return (
      <>
        <td>
          <button onClick={upvote} className="btn btn-primary">
            Upvote
          </button>
        </td>
      </>
    );
  }

  if (voteByCharacter !== undefined) {
    return (
      <>
        <td>{voteByCharacter.voteScore}</td>
        {loggedIn ? (
          <UpvoteCharacter characterName={props.characterName} />
        ) : (
          <p> Login to upvote</p>
        )}
      </>
    );
  } else {
    return (
      <>
        <td>No data</td>
      </>
    );
  }
}
