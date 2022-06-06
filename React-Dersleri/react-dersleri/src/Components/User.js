import React from "react";

const User = ({ name, surname, age, isLoggedIn }) => {
  return (
    <>
      <button
        onClick={() => {
          isLoggedIn = false;
          console.log(isLoggedIn);
        }}
      >
        Click Me
      </button>
      <h1>
        {isLoggedIn
          ? `${name} ${surname} ${age} Welcome ! `
          : "You did not log in this site!"}
      </h1>
    </>
  );
};

export default User;
