import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import "./registerstyles.css";
import voteFacade from "../api/voteFacade";

function ShowCharacterInfo({ name, fullName }) {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [voteScore, setVoteScore] = useState();

  if (name != null || undefined) {
    voteFacade
      .getCharactersVotes(name)
      .then((data) => setVoteScore(data.voteScore));
  }
  if (fullName != null || undefined) {
    voteFacade
      .getCharactersVotes(fullName)
      .then((data) => setVoteScore(data.voteScore));
  }

  return (
    <>
      <div>
        <p className="mt-2">See more info here</p>
        <MDBBtn
          outline
          color="primary"
          rounded
          size="m"
          className="mr-auto"
          onClick={handleShow}
        >
          Character info
        </MDBBtn>
      </div>
      <Modal className="full_modal" show={showModal} onHide={handleClose}>
        <Modal.Header className="modal_header" closeButton>
          <Modal.Title>See information here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3 className="input" className="mb-2" placeholder="Name" id="name">
              Name: {name}
            </h3>
            <h3
              className="input"
              className="mb-2"
              placeholder="Points"
              id="info1"
            >
              Points: {voteScore}
            </h3>

            <h3 className="input" className="mb-2" id="info2">
              Info: "Stat"
            </h3>
            <h3 className="input" className="mb-2" id="info3">
              Info: "Stat"
            </h3>
            <h3 className="input" className="mb-2" id="info4">
              Info: "Stat"
            </h3>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal_footer">
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowCharacterInfo;
