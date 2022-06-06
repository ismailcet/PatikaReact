import React, { useState, useEffect } from "react";
// import User from "./Components/User";
function App() {
  // let userName = "Ismail";
  // let surName = "Cetin";
  // let age = 15;
  // const [form, setForm] = useState({ name: "", surname: "" });
  // const [isLoggedIn, setLogged] = useState(false);
  // const [friends, setFriends] = useState([
  //   {
  //     id: 1,
  //     name: "ahmet",
  //   },
  //   {
  //     id: 2,
  //     name: "ahmet2",
  //   },
  //   {
  //     id: 3,
  //     name: "ahmet3",
  //   },
  //   {
  //     id: 4,
  //     name: "ahmet4",
  //   },
  // ]);
  // const onChangeInput = (e) => {
  //   setForm({ ...form, [e.target.name]: [e.target.value] });
  // };
  // return (
  //   <>
  //     <User
  //       name={userName}
  //       surname={surName}
  //       age={age}
  //       isLoggedIn={isLoggedIn}
  //       friends={friends}
  //     />
  //     <h1>Input Form</h1>
  //     <br />
  //     Name
  //     <br />
  //     <br />
  //     <input name="name" value={form.name} onChange={onChangeInput} />
  //     <br />
  //     <br />
  //     Surname <br />
  //     <br />
  //     <input name="surname" value={form.surname} onChange={onChangeInput} />
  //     <h2>
  //       {form.name} {form.surname}
  //     </h2>
  //   </>
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("ismail");
  useEffect(() => {
    console.log("component Did Mound");
  }, []);

  useEffect(() => {
    console.log("Number is Change");
  }, [number]);

  useEffect(() => {
    console.log("name is change");
  }, [name]);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        İncrease
      </button>

      <br />
      <br />
      <hr />
      <h1>{name}</h1>
      <button
        onClick={() => {
          setName("eda");
        }}
      >
        Change
      </button>
    </>
  );
}

export default App;
