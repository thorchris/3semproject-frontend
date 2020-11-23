import apiGotFacade from "../api/apiGotFacade";
import React, { useState, useEffect } from "react";

export default function Got() {
  const [dataFromServer, setDataFromServer] = useState("");

  useEffect(() => {
    apiGotFacade.getCharacters().then((data) => setDataFromServer(data));
  }, []);

  return (
    <div className="container-fluid padding">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2 className="text-center mt-5 mb-2">GOT Characters</h2>
          <div>
            {dataFromServer && dataFromServer.length > 0
              ? dataFromServer.map((dataFromServer) => {
                  return (
                    <div key={dataFromServer.fullName}>
                      {dataFromServer.fullName}
                    </div>
                  );
                })
              : "Loading..."}
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
