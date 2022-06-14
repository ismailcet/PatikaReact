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
  return (
    <div className="input">
      <form onSubmit={submitInput}>
        <button className="select-btn">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <input
          type="text"
          name="text"
          value={input.text}
          placeholder="What needs to be done ?"
          onChange={changeInput}
        />
      </form>
    </div>
  );
}
export default Form;
