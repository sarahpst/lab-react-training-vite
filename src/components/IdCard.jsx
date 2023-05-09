import React from "react";

function IdCard({picture, firstName, lastName, gender, height, birth} ) {
  return (
    <div>
      <div>
        <img src={picture} alt="selfie of a person" />
      </div>
      <div>
        <p> firstname: {firstName}</p> 
        <p> lastname: {lastName}</p> 
        <p> gender: {gender}</p> 
        <p> height: {height}</p> 
        <p> birthDate: {birth.toDateString()}</p> 
      </div>
    </div>
  );
}

export default IdCard;
