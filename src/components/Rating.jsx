import React from "react";

function Rating({ children }) {
  const score = Math.round(children);
  let rating = [0, 0, 0, 0, 0];
  return (
    <div>
      {rating.map((star, index) => {
        if (index < score) {
          return "★";
        } else {
          return "☆";
        }
      })}
    </div>
  );
}

export default Rating;
