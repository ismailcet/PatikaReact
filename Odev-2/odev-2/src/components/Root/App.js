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
  const checkItem = (index) => {
    index.status == "active"
      ? (index.status = "completed")
      : (index.status = "active");
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <main className="main">
      todos
      <div className="content">
        <Form addTodos={setTodos} todos={todos} />
        <List
          todos={todos}
          filter={filter}
          deleteItem={deleteItem}
          checkItem={checkItem}
        />
        <Footer counter={todos.length} filtered={setFilter} />
      </div>
    </main>
  );
}

export default App;
