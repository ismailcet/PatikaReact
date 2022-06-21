import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";
const initValue = { text: "", status: "active" };
function Form({ addTodos, todos }) {
  const [input, setInput] = useState(initValue);

  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitInput = (e) => {
    addTodos([...todos, input]);
    setInput(initValue);
    e.preventDefault();
  };
  const checkAll = () => {
    todos.map((item) => {
      item.status == "active"
        ? (item.status = "completed")
        : (item.status = "active");
    });
    console.log(todos);
  };
  return (
    <div>
      <button className="toggle-all" onClick={() => checkAll()}></button>
      <form onSubmit={submitInput}>
        <input
          type="text"
          name="text"
          value={input.text}
          placeholder="What needs to be done ?"
          onChange={changeInput}
          className="new-todo"
        />
      </form>
    </div>
  );
}
export default Form;
