import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";
function List({ todos, filter, deleteItem, checkItem }) {
  const filtered =
    filter === "all"
      ? todos
      : todos.filter((item) => {
          return item.status === filter;
        });

  return (
    <div className="inputList">
      <ul className="listItems">
        {filtered.map((item, index) => {
          return (
            <li className="listItem" key={index}>
              <button className="status-btn" onClick={() => checkItem(item)}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <span className="title">{item.text}</span>
              <button className="select-btn" onClick={() => deleteItem(index)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
