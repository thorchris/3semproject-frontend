import React, { useState } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import gotImg from "../images/GOT.jpg";

function FlippingCardPage() {
  const [flipped1, setFlipped1] = useState(false);

  return (
    <div maxWidth="100%" maxHeight="100%">
      <Flippy
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
      >
        <FrontSide
          style={{
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={gotImg} style={{ Width: "33%", height: "33%" }} />
        </FrontSide>
        <BackSide
          style={{
            backgroundColor: "#175852",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        ></BackSide>
      </Flippy>
    </div>
  );
}

export default FlippingCardPage;
