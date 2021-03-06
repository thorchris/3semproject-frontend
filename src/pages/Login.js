import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import facade from "../api/userFacade";
import CreateModal from "../components/RegisterUser";
import { MDBBtn } from "mdbreact";
import Dachma from "../images/dachma6.svg";
import "../components/registerstyles.css";

export function LogIn({ login, errorMsg }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };
  

  return (
    <div className="container-fluid padding">
      <img className="logo" src={Dachma} alt=""></img>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="text-center mb-2 mt-5">Login</h2>
          <form onChange={onChange}>
            <input
              className="mb-2"
              placeholder="User name"
              id="username"
              className="login_input"
            />
            <br />
            <input
              className="mb-2"
              className="login_input"
              placeholder="Password"
              id="password"
              name="password"
              type="password"
            />
            <br />
            <p className="errorBox text-center">
              {errorMsg}
            </p>
            <MDBBtn
              outline
              color="primary"
              rounded
              size="m"
              type="submit"
              className="mr-auto"
              onClick={performLogin}
            >
              Login
            </MDBBtn>
            <CreateModal />
          </form>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}

export function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Waiting...");

  useEffect(() => {
    facade.fetchData().then((data) => setDataFromServer(data.msg));
  }, []);

  return (
    <div className="container-fluid padding">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 text-center">
          <h2 className="text-center mt-5 mb-2">Welcome to Dachma Fandom</h2>
          <h3 className="text-center">{dataFromServer}</h3>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}
