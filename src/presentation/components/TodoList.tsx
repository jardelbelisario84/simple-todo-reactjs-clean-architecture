import React from "react";

import { Todo } from "../../core/entities/Todo";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo, toggleTodo }) => {
  return (
    
    <table>
      <thead>
        <tr>
          <th>Status</th>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </tbody>
    </table>

    //</ul>
    // <ul>
    //   {todos.map((todo) => (
    //     <TodoItem
    //       key={todo.id}
    //       todo={todo}
    //       removeTodo={removeTodo}
    //       toggleTodo={toggleTodo}
    //     />
    //   ))}
    // </ul>
  );
};
