import React from "react";

function Container(props) {
  return (
  <div className="container" style={props.style}>{props.children}
    <TypingProvider>
     
    </TypingProvider>
  </div>
  );
}

export default Container;
