import { Todo } from "../../core/entities/Todo";
import { useTodoContext } from "../../presentation/context/TodoContext";

export interface ITodoRepository {
  getAll(): Todo[];
  add(todo: Todo): void;
  remove(id: string): void;
  toggle(id: string): void;
  update(id: string, title: string): void;
}

export const TodoRepository = () => {
  const { todos, setTodos } = useTodoContext();

  const getAll = () => todos;

  const add = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const remove = (id: string) => {
    setTodos(todos.filter((todo: any) => todo.id !== id));
  };

  const toggle = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const update = (id: string, title: string) => {
    // const toDo = todos.filter((todo: any) => todo.id !== id)
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, title: title } : todo))
    );
  };

  return {
    getAll,
    add,
    remove,
    toggle,
    update,
  };
  ("");
};
