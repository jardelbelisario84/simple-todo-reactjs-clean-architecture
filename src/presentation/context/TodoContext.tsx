import { createContext, useContext, useState } from "react";
import { Todo } from "../../core/entities/Todo";

interface TodoContextType {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}
interface TodoContextChildrenType {
  children: any;
}



const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};

export const TodoProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
