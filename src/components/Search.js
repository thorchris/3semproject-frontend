import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import searchFacade from "../api/searchFacade";
import { MDBBtn } from "mdbreact";
import { Form } from "react-bootstrap";
import ShowCharacterInfo from "./ShowCharacterInfo";
import searchCSS from "./searchcss.css";

export default function Search() {
  const choices = ["Star Wars", "Game of Thrones", "Harry Potter"];
  const [choice, setChoice] = useState("Game of Thrones");
  const [characterOfChoice, setCharacterOfChoice] = useState({
    name: "Harry Potter",
  });
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

  useEffect(() => {
    fetchData();
  }, []);

  const getChoice = (choice) => {
    if (choice === "Harry Potter") {
      return hpCharacters;
    }
    if (choice === "Star Wars") {
      return swCharacters;
    }
    if (choice === "Game of Thrones") {
      return gotCharacters;
    }
  };

  const setOptionLabel = (choice) => {
    if (choice === "Harry Potter") {
      return (hpCharacters) => hpCharacters.name;
    }
    if (choice === "Star Wars") {
      return (swCharacters) => swCharacters.name;
    }
    if (choice === "Game of Thrones") {
      return (gotCharacters) => gotCharacters.fullName;
    } else {
      return null;
    }
  };

  const handleCharChange = (choice) => {
    if (choice !== undefined || null) {
      setCharacterOfChoice(choice);
      console.log(choice);
    } else {
      setChoice("John Snow");
    }
  };

  const handleChange = (choice) => {
    if (choice === "Harry Potter" || "Game of Thrones" || "Star Wars") {
      setChoice(choice);
      console.log(choice);
    } else {
      setChoice("Game of Thrones");
    }
  };

  return (
    <Form className="flex-container flex-column pos-rel">
      <Form.Text className="text-muted">
        Search for your favourite character
      </Form.Text>
      <Autocomplete
        className="autocomplete"
        id="combo-box-demo"
        options={choices}
        onChange={(event, value) => handleChange(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={"Where are you searching?"}
            value={choice}
            variant="outlined"
            style={{ backgroundColor: "white" }}
          />
        )}
      />
      <Autocomplete
        className="autocomplete"
        id="combo-box-demo"
        options={getChoice(choice)}
        getOptionLabel={setOptionLabel(choice)}
        onChange={(event, value) => handleCharChange(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          />
        )}
      />
      <ShowCharacterInfo
        fullName={characterOfChoice.fullName}
        name={characterOfChoice.name}
      />
    </Form>
  );
}
