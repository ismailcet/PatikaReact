import React from "react";

function Footer({ counter, filtered }) {
  const submitFilter = (e) => {
    e.preventDefault();
    filtered(e.target.name);
  };
  return (
    <div className="footer">
      <p className="counter">{counter} items left</p>
      <button className="filter-btn all" name="all" onClick={submitFilter}>
        All
      </button>
      <button
        name="active"
        className="filter-btn active"
        onClick={submitFilter}
      >
        Active
      </button>
      <button
        name="completed"
        className="filter-btn completed"
        onClick={submitFilter}
      >
        Completed
      </button>
    </div>
  );
}

export default Footer;
