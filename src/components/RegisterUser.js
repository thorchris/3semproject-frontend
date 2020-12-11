import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import facade from "../api/userFacade";
import { MDBBtn } from "mdbreact";
import "./registerstyles.css";

function CreateModal() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const init = { username: "", password: "" };
  const [newCredentials, setNewCredentials] = useState(init);

  const createUser = (evt) => {
    evt.preventDefault();
    facade.addUser(newCredentials.username, newCredentials.password);
    handleClose();
  };
  const onChange = (evt) => {
    setNewCredentials({
      ...newCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <>
      <div>
        <p className="mt-2">Not a member yet? Register here:</p>
        <MDBBtn
          outline
          color="primary"
          rounded
          size="m"
          className="mr-auto"
          onClick={handleShow}
        >
          Register
        </MDBBtn>
      </div>
      <Modal className="full_modal" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton={true} className="modal_header">
          <Modal.Title>Register your account here</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_header">
          <div>
            <form onChange={onChange}>
              <input className="input" placeholder="User name" id="username" />
              <input
                className="input"
                placeholder="Password"
                id="password"
                name="password"
                type="password"
              />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal_footer">
          <MDBBtn
            outline
            color="primary"
            rounded
            size="m"
            className="modal_button"
            onClick={handleClose}
          >
            Close
          </MDBBtn>
          <MDBBtn
            outline
            color="primary"
            rounded
            size="m"
            className="mr-auto"
            onClick={createUser}
          >
            Save Changes and register
          </MDBBtn>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;
