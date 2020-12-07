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
import searchFacade from "../api/searchFacade";
import React, { useState, useEffect, useRef } from "react";

const Auto = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  // virker kun med 1 API/List af gangen.
  // skal finde på en måde at tage alle
  useEffect(() => {
    searchFacade
      .searchForAllChars()
      .then((data) => setOptions([...data.gotList.results]));
  }, []);

  const setCharFind = (char) => {
    setSearch(char);
    setDisplay(false);
  };

  console.log(options);

  return (
    <Form className="flex-container flex-column pos-rel">
      <input
        type="text"
        id="auto"
        onClick={() => setDisplay(!display)}
        placeholder="Search here.."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {display && (
        <div className="autoContainer">
          {options
            .filter(({ fullName }) => {
              if (search == "") {
                return fullName;
              } else if (
                fullName.toLowerCase().includes(search.toLowerCase())
              ) {
                return fullName;
              }
            })
            .map((data, i) => {
              return (
                <div
                  className="option"
                  key={i}
                  onClick={() => setCharFind(data.fullName)}
                >
                  <span>
                    {data.name}
                    {data.fullName}
                  </span>
                </div>
              );
            })}
        </div>
      )}
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
    </Form>
  );
};

export default function Home() {
  return (
    <div className="container-fluid padding">
      <img className="logo" src={Dachma} alt=""></img>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h4 className="mt-5">Search for your favorite character</h4>
          <Auto />
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
