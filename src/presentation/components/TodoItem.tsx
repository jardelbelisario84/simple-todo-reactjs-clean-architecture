import React from "react";

import { Todo } from "../../core/entities/Todo";

interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, title: string) => void;
  toggleTodo: (id: string) => void;
  key: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ key, todo, removeTodo, toggleTodo , updateTodo}) => {
  return (
    <>

        <tr key={key}>
          <td>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
          </td>
          <td style={todo.completed ? {textDecoration: "line-through", fontWeight: "bold"}: {textDecoration: "none"}}> 
             {todo.title}
          </td>
          <td>
            <button className="update" onClick={() => updateTodo(todo.id, todo.title)}>Update</button>
            <button className="delete" onClick={() => removeTodo(todo.id)}>Delete</button>
          </td>
        </tr>


    </>
  );
};
