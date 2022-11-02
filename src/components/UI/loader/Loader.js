import React from "react";
import blackClover from "../../../assets/gifs/mikasa.gif";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
      }}
    >
      <img src={blackClover} alt="chernyi clever" />
    </div>
  );
}

export default Loader;
