import "./App.css";
import Todo, { TodoList } from "./component/main_todo";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(task) {
    const taskObj = { id: todos.length, task: task };
    const temp = todos.concat([taskObj]);
    setTodos(temp);
  }

  function deleteTodo(id) {
    const temp = todos.filter((todo) => todo.id !== id);
    setTodos(temp);
  }

  return (
    <div className="app container">
      <div className="row">
        <div className=" col-12 ">
          <div className="col-12 mt-4 ">
            <TodoList addTodo={addTodo} />{" "}
          </div>{" "}
          <div className="col-12">
            <Todo todos={todos} deleteTodo={deleteTodo} />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
