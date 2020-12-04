import "bootstrap/dist/css/bootstrap.css";
import "mdbreact/dist/css/mdb.css";
import Dachma from "../images/dachma6.svg";
import { Form } from "react-bootstrap";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn } from "mdbreact";
import Card from "../components/Card";
import gotImg from "../images/GOT.jpg";
import hpImg from "../images/HarryPotter.jpg";
import swImg from "../images/starwars.jpg";
import Search from "../components/Search";
import React, { useState, useEffect } from "react";

export default function Home() {

  const [value, setValue] = useState(),
  onInput = ({target:{value}}) => setValue(value),
  onFormSubmit = e => {
    e.preventDefault()
    console.log(value)
    setValue()
  }

  return (
    <div className="container-fluid padding">
      <img className="logo" src={Dachma} alt=""></img>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h4 className="mt-5">Search for your favorite character</h4>
          <Form onSubmit={onFormSubmit}>
            <Form.Control onChange={onInput} placeholder="Search here.." />
            <Form.Text className="text-muted">
              Type character name, movie, tv show etc.
            </Form.Text>
            <MDBBtn
              outline
              color="primary"
              rounded
              size="m"
              type="submit"
              className="mr-auto"
            >
              Search
            </MDBBtn>
            <Search lol={value}/>
          </Form>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h4 className="mt-5 text-center">Current shows in the site:</h4>
          <p className="mt-2 text-muted text-center">
            Click to get info about a movie/tv show.
          </p>
          <div className="flexDirection: row justifyContent: space-between">
            <Card imgToDisplay={gotImg} />
            <Card imgToDisplay={hpImg} />
            <Card imgToDisplay={swImg} />
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
