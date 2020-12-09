import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import searchFacade from "../api/searchFacade";
import { MDBBtn } from "mdbreact";
import { Form } from "react-bootstrap";

export default function Search() {
  const choices = ["Star Wars", "Game of Thrones", "Harry Potter"];
  const [choice, setChoice] = useState("Game of Thrones");
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
      <Autocomplete
        id="combo-box-demo"
        options={getChoice(choice)}
        getOptionLabel={setOptionLabel(choice)}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for"
            variant="outlined"
            style={{ backgroundColor: "white" }}
          />
        )}
      />
      <Autocomplete
        id="combo-box-demo"
        options={choices}
        style={{ width: 300 }}
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
}
