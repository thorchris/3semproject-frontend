import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import homestyle from "./homestyle.css";

function Card({ imgToDisplay }) {
  return (
    <div>
      <Flippy
        flipOnHover={true} // default false
        flipDirection="horizontal" // horizontal or vertical
      >
        <FrontSide>
          <img className="imgsize" src={imgToDisplay} />
        </FrontSide>
        <BackSide
          style={{
            backgroundColor: "",
            display: "flex",
            alignItems: "center",
            maxWidth: "100%",
            maxHeight: "100%",
            justifyContent: "center",
            flexDirection: "column",
          }}
        ></BackSide>
      </Flippy>
    </div>
  );
}

export default Card;
