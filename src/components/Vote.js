import voteFacade from "../api/voteFacade";
import React, { useState } from "react";

export default function GetVotesByChar(props) {
  const [voteByCharacter, setVoteByCharacter] = useState("");

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
        <UpvoteCharacter characterName={props.characterName} />
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
