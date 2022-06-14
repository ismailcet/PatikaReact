import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "../Footer/Footer";
import List from "../List/List";
import Form from "../Form/Form";
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <main className="main">
      todos
      <Form addTodos={setTodos} todos={todos} />
      <List todos={todos} filter={filter} />
      <Footer counter={todos.length} filtered={setFilter} />
    </main>
  );
}

export default App;
