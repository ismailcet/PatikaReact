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
    <ul className="todo-list">
      {filtered.map((item, index) => {
        return (
          <li className="" key={index}>
            <div className="view">
              <button
                className="toggle"
                onClick={(e) => checkItem(e, item)}
                type="checkbox"
              ></button>
              <label className="title">{item.text}</label>
              <button
                className="destroy"
                onClick={() => deleteItem(index)}
              ></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
