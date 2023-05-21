import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Omnichannel Tech Lead",
          "Omnichannel Business Analyst",
          "Developer",
          "Data Analyst",
          "Digital Marketing",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
