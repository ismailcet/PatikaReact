import React from "react";
import User from "./Components/User";
function App() {
  let userName = "Ismail";
  let surName = "Cetin";
  let age = 15;
  let isLoggedIn = true;
  return (
    <User name={userName} surname={surName} age={age} isLoggedIn={isLoggedIn} />
  );
}

export default App;
