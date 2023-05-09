import React from "react";

function BoxColor({ r, g, b }) {
  const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  return (
    <div style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      <div>{`rgb(${r},${g},${b})`}</div>
      <div>{rgbToHex(r, g, b)}</div>
    </div>
  );
}

export default BoxColor;
