import React from "react";

const User = ({ name, surname, age, isLoggedIn, friends }) => {
  let controlLoggedIn = isLoggedIn;
  return (
    <>
      <h1>
        {controlLoggedIn
          ? `${name} ${surname} ${age} Welcome ! `
          : "You did not log in this site!"}
      </h1>

      {friends.map((friend) => {
        return <h4 key={friend.id}>{friend.name}</h4>;
      })}
    </>
  );
};

export default User;
