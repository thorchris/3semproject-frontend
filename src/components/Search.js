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
    console.log(allCharacters);
  };

  useEffect(fetchData, [searchingForChar]);

  return (
    <>
      {allCharacters
        /* .filter(
          (char) =>
            char.name.includes(searchingForChar) ||
            char.fullName.includes(searchingForChar)
        ) */
        .map((filteredPerson) => (
          <>
            <h1>Her burde stå et navn: {filteredPerson.name}</h1>
          </>
        ))}
    </>
  );
}
