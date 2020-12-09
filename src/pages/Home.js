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
import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const Auto = () => {
  const [display, setDisplay] = useState(false);
  // const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  const [swCharacters, setSwCharacters] = useState([]);
  const [gotCharacters, setGotCharacters] = useState([]);
  const [hpCharacters, setHpCharacters] = useState([]);

  const fetchData = () => {
    searchFacade
      .searchForAllChars()
      .then((data) => setSwCharacters([...data.swList.results]));
    searchFacade
      .searchForAllChars()
      .then((data) => setGotCharacters([...data.gotList.results]));
    searchFacade
      .searchForAllChars()
      .then((data) => setHpCharacters([...data.hpList.hpDTOList]));
  };

  console.log(hpCharacters);
  console.log(swCharacters);
  console.log(gotCharacters);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Form className="flex-container flex-column pos-rel">
      <Autocomplete
        id="combo-box-demo"
        options={gotCharacters}
        getOptionLabel={(gotCharacters) => gotCharacters.fullName}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for"
            variant="outlined"
            style={{ backgroundColor: "grey" }}
          />
        )}
      />
      <Autocomplete
        id="combo-box-demo"
        options={gotCharacters}
        getOptionLabel={(gotCharacters) => gotCharacters.fullName}
        style={{ width: 100 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for"
            variant="outlined"
            style={{ backgroundColor: "grey" }}
          />
        )}
      />
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
