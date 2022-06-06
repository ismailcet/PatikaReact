import React from "react";
import User from "./Components/User";
function App() {
  let userName = "Ismail";
  let surName = "Cetin";
  let age = 15;
  let isLoggedIn = true;
  const friends = [
    {
      id: 1,
      name: "ahmet",
    },
    {
      id: 2,
      name: "ahmet2",
    },
    {
      id: 3,
      name: "ahmet3",
    },
    {
      id: 4,
      name: "ahmet4",
    },
  ];
  return (
    <User
      name={userName}
      surname={surName}
      age={age}
      isLoggedIn={isLoggedIn}
      friends={friends}
    />
  );
}

export default App;
