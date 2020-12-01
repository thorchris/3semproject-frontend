import voteFacade from "../api/voteFacade";
import React, { useState } from "react";

export default function GetVotesByChar(props) {
  const [voteByCharacter, setVoteByCharacter] = useState("");
  const loggedIn = props.loggedIn;
  const user = props.user;
  let userName = user.username;
  const whoVotedList = props.whoVotedList;

  function getData() {
    voteFacade
      .getCharactersVotes(props.characterName)
      .then((data) => setVoteByCharacter(data));
  }

  if (voteByCharacter === "") {
    getData();
  }

  function UpvoteCharacter(props) {
    let characterName = props.characterName;

    function upvote() {
      let isInTheList = whoVotedList.some(
        (whoVoted) =>
          whoVoted["userName"] === `${userName}` &&
          whoVoted["characterName"] === `${characterName}`
      );

      if (!isInTheList) {
        voteFacade.upvoteCharacter(characterName);
        whoVotedList.push({
          userName,
          characterName,
        });
        getData();
      } else {
        console.log("Du har stemt");
        getData();
      }
      console.log(whoVotedList);
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
