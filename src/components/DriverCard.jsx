import React from "react";

function DriverCard({ name, rating, img, car }) {
  let evaluation = [0, 0, 0, 0, 0];
  return (
    <div>
      <div>{name}</div>
      <div>
        {" "}
        {evaluation.map((star, index) => {
          if (index < Math.round(rating)) {
            return "★";
          } else {
            return "☆";
          }
        })}
      </div>
      <div >
        <img style={{width: 100}} src={img} alt="profilePic" />
      </div>
      <div>
        {car.model} - {car.licensePlate}
      </div>
    </div>
  );
}

export default DriverCard;
