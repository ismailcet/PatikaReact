import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "../Footer/Footer";
import List from "../List/List";
import Form from "../Form/Form";
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");
  const deleteItem = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  const checkItem = (e, item) => {
    item.status == "active"
      ? (item.status = "completed")
      : (item.status = "active");
    let completedItem = e.target.parentElement.parentElement;
    completedItem.classList.contains("completed")
      ? completedItem.classList.remove("completed")
      : completedItem.classList.add("completed");
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <section className="todoapp">
      <h1>todos</h1>
      <section className="main">
        <Form addTodos={setTodos} todos={todos} />
        <List
          todos={todos}
          filter={filter}
          deleteItem={deleteItem}
          checkItem={checkItem}
        />
        <Footer counter={todos.length} filtered={setFilter} />
      </section>
    </section>
  );
}

export default App;
