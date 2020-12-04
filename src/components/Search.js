import searchFacade from "../api/searchFacade";
import React, { useState, useEffect } from "react";

export default function Search({lol}) {
  const [allCharacters, setAllCharacters] = useState([]);

  const fetchData = async () => {
   return await searchFacade
    .searchForAllChars()
    .then((data) =>
      setAllCharacters([
        ...data.swList.results,
        ...data.hpList.hpDTOList,
        ...data.gotList.results,
      ])
    );
  }

  console.log(fetchData())

  return (
    <>
      {allCharacters
        .filter((char) => char.name === lol)
        .map((filteredPerson) => (
          <>
            <h1>Her burde stå et navn: {filteredPerson.name}</h1>
          </>
        ))}
    </>
  );
}
