import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Machine Learning Engineer",
          "Deep Learning Researcher",
          "Applied / Research Scientist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 'natural',
      }}
    />
  );
}

export default Type;
