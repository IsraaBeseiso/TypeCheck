import React from "react";
import "./wrapper.scss";

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;
