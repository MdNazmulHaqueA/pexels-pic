import React from "react";
import * as Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Loader type="Circles" color="#fff" height={100} width={100} /> */}
      <Loader.TailSpin/>
    </div>
  );
};

export default Spinner;

