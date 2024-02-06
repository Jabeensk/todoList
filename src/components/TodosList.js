import { useState } from "react";
import TodoItem from "./TodoItem";

function TodosList({ todos, dispatch}) {
    const [title, setTitle] =
    useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_TODO", payload: { title}});
        setTitle("");
    };

return (
    <div>
        <h1>Todos List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      

        {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
);

}


export default TodosList;