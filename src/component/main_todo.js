import React, { useEffect, useState } from "react";
import { List, arrayMove } from "react-movable";
import "./main.css";

export default function Todo(props) {
  const { todos, deleteTodo } = props;
  const [items, setItems] = useState(todos);

  useEffect(() => {
    setItems(todos);
  }, [todos]);
  return (
    <div className="mb-5">
      <List
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
        }
        renderList={({ children, props }) => <ul {...props}>{children}</ul>}
        renderItem={({ value, props }) => (
          <div key={value.id}>
            <div>
              <li
                className="row d-flex justify-content-between mb-3"
                style={{ wordWrap: "breakWord" }}
                {...props}
              >
                {/* `${value.id + 1}-  */}
                {`${value.task}`}
                <button
                  className="btn btn-danger"
                  style={{
                    backgroundColor: "#D5E6FF",
                    color: "#2560C1",
                    border: "none",
                  }}
                  onClick={() => deleteTodo(value.id)}
                >
                  Delete
                </button>
              </li>
            </div>
            <hr />
          </div>
        )}
      />
    </div>
  );
}

export function TodoList(props) {
  const [todo, setTodo] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();

    if (todo.trim()) props.addTodo(todo);
    setTodo("");
  }

  return (
    <div className="add mb-5">
      <form
        style={{
          width: "90%",
          display: "flex",
          alinItems: "center",
          justifyContent: "center",
        }}
        onSubmit={handleOnSubmit}
      >
        <div className="input-group input-group-lg ml-5">
          <div className="input-group-prepend">
            <span className="input-group-text">Add</span>
          </div>
          <input
            className="form-control"
            type="text"
            value={todo}
            placeholder="Add Todo"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ fontSize: "1.2rem" }}
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
