/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { UpdateTodo } from "./updateTodo";
import { TodoCard } from "./todoCard";
import { deleteTodo, getTodos } from "../apis";

export function ShowTodoList({ todo, setTodo }) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);

  // const SampleTodo = {
  //   _id: 0,
  //   title: "test",
  //   description: "test",
  // };

  useEffect(() => {
    (async () => {
      const todos = await getTodos();
      setTodo(todos);
    })();
  }, []);

  function handleEdit(e) {
    setId(e.target.name);
    setOpen(true);
  }

  function handleUpdate() {
    console.log("update:", update, !update);
    setUpdate((prev) => !prev);
  }

  async function handleDelete(e) {
    await deleteTodo(e.target.name);
    setTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  }

  function handleClose() {
    setId("");
    setOpen(false);
  }

  return (
    <section className="container">
      <section className="contents">
        <h1>TODO</h1>
        <ul className="list-container" data-testid="todo-container">
          {todo &&
            todo.map((data, idx) => {
              return (
                <TodoCard
                  data={data}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  key={idx}
                  testId={idx}
                />
              );
            })}
          {/* <TodoCard
              data={SampleTodo}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            /> */}
        </ul>
      </section>
      {open ? (
        <section className="update-container">
          <div className="update-contents">
            <p onClick={handleClose} className="close">
              &times;
            </p>

            <UpdateTodo
              _id={id}
              handleClose={handleClose}
              handleUpdate={handleUpdate}
            />
          </div>
        </section>
      ) : (
        ""
      )}
    </section>
  );
}
