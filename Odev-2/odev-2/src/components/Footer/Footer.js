import React from "react";

function Footer({ counter, filtered }) {
  const submitFilter = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    filtered(e.target.name);
  };
  return (
    <footer className="footer">
      <p className="todo-count">
        <strong>{counter}</strong> items left
      </p>
      <ul className="filters">
        <li>
          <button className="selected" name="all" onClick={submitFilter}>
            All
          </button>
        </li>
        <li>
          <button name="active" className="" onClick={submitFilter}>
            Active
          </button>
        </li>
        <li>
          <button name="completed" className="" onClick={submitFilter}>
            Completed
          </button>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
