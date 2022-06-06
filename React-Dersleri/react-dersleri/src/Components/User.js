import React from "react";

const User = ({ name, surname, age, isLoggedIn }) => {
  let controlLoggedIn = isLoggedIn;
  return (
    <>
      <h1>
        {controlLoggedIn
          ? `${name} ${surname} ${age} Welcome ! `
          : "You did not log in this site!"}
      </h1>
    </>
  );
};

export default User;
