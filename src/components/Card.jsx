import React from "react";

const Card = ({firstName, lastName, email, password}) => {
  return (
    <>
      <div  className="container">
        <p>First Name:{firstName}</p>
        <p>Last Name:{lastName}</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>
      </div>
    </>
  );
};

export default Card;
