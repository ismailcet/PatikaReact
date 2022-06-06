import React, { useState } from "react";
import User from "./Components/User";
function App() {
  let userName = "Ismail";
  let surName = "Cetin";
  let age = 15;
  const [isLoggedIn, setLogged] = useState(false);
  const [friendList, setFriendList] = useState([
    "ayse",
    "ahmet",
    "osman",
    "ismail",
  ]);
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
    <>
      <User
        name={userName}
        surname={surName}
        age={age}
        isLoggedIn={isLoggedIn}
        friends={friends}
      />
      <button onClick={() => setLogged(!isLoggedIn)}>Click Me</button>

      <hr />
      {friendList.map((friend) => {
        return <h4>{friend}</h4>;
      })}
      <h3>Arkadaş Ekle</h3>
      <br />
      <button onClick={() => setFriendList([...friendList, "deneme"])}>
        Click Friends
      </button>
    </>
  );
}

export default App;
