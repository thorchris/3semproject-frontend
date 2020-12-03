import searchFacade from "../api/searchFacade";
import React, { useState, useEffect } from "react";

export default function Search(searchingForThisChar) {
  const [allCharacters, setAllCharacters] = useState([]);

  searchFacade
    .searchForAllChars()
    .then((data) =>
      setAllCharacters([
        ...data.swList.results,
        ...data.hpList.hpDTOList,
        ...data.gotList.results,
      ])
    );

  return (
    <>
      {allCharacters
        .filter((char) => char.name === searchingForThisChar)
        .map((filteredPerson) => (
          <>
            <h1>Her burde stå et navn: {filteredPerson.name}</h1>
          </>
        ))}
    </>
  );
}
