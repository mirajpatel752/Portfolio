import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Front End Web Developer", "Engineer", "Quick Learner"],
        autoStart: true,
        loop: false,
        deleteSpeed: 50
      }}
    />
  );
}

export default Type;
