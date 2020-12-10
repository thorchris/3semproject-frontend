import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

function Card({ imgToDisplay }) {
  return (
    <div style={{ maxWidth: "350px", maxHeight: "800px" }}>
      <Flippy
        flipOnHover={true} // default false
        flipDirection="horizontal" // horizontal or vertical
      >
        <FrontSide>
          <img
            src={imgToDisplay}
            style={{
              display: "flex",
              maxWidth: "100%",
              maxHeight: "180px",
              justifyContent: "center",
            }}
          />
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
