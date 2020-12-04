import searchFacade from "../api/searchFacade";
import React, { useState, useEffect } from "react";

export default function Search({ searchingForChar }) {
  const init = [{ name: "", fullName: "" }];
  const [allCharacters, setAllCharacters] = useState(init);

  const fetchData = () => {
    searchFacade
      .searchForAllChars()
      .then((data) =>
        setAllCharacters([
          ...data.swList.results,
          ...data.hpList.hpDTOList,
          ...data.gotList.results,
        ])
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchFor = () => {
    {
      allCharacters
        .filter((char) => char.name === searchingForChar)
        .map((filtered) => <h1>Navn på char: {filtered.name}</h1>);
    }
  };

  console.log(allCharacters);
  console.log(searchingForChar);

  return (
    <>
      {allCharacters
        .filter((char) => char.name == searchingForChar)
        .map((filtered) => (
          <h1>Navn på char: {filtered.name}</h1>
        ))}
    </>
  );
}
