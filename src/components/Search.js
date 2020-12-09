import searchFacade from "../api/searchFacade";
import React, { useState, useEffect } from "react";
import Select from "react-select";

export default function Search({ searchingForChar }) {
  const init = [{ name: "" }];
  const [allCharacters, setAllCharacters] = useState(init);
  const [swCharacters, setSwCharacters] = useState(init);
  const [gotCharacters, setGotCharacters] = useState(init);
  const [hpCharacters, setHpCharacters] = useState([{ fullName: "" }]);

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
  console.log("HP: " + hpCharacters);
  console.log("SW: " + swCharacters);
  console.log("GOT: " + gotCharacters);

  useEffect(() => {
    fetchData();
  }, []);

  const filterItems = () => {
    return allCharacters.filter(
      (char) =>
        char["name"].toLowerCase().indexOf(searchingForChar.toLowerCase()) !==
        -1
    );
  };

  //console.log(allCharacters);
  console.log(searchingForChar);

  return (
    <>
      {allCharacters
        .filter((char) => char.name == searchingForChar)
        .map((filtered) => filtered.name)}
    </>
  );
}
