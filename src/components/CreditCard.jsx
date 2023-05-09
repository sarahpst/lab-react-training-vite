import React from "react";

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div style={{ backgroundColor: bgColor, color }}>
      <div> {type}</div>
      <div>xxxx xxxx xxxx {number.slice(-4)}</div>
      <div>
        {expirationMonth} / {expirationYear.toString().slice(-2)}
      </div>
      <div>{bank}</div>
      <div>{owner}</div>
    </div>
  );
}

export default CreditCard;
