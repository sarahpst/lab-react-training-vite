import React from "react";

function Random({ min, max }) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div>
      Random value between {min} and {max} {"=>"} {randomNumber}
    </div>
  );
}

export default Random;
