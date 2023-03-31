import { AddTodo } from "../../core/useCases/AddTodo";
import { RemoveTodo } from "../../core/useCases/RemoveTodo";
import { ToggleTodo } from "../../core/useCases/ToggleTodo";
import { TodoRepository } from "../../data/repositories/TodoRepository";
import { AddTodoForm } from "../components/AddTodoForm";
import { TodoList } from "../components/TodoList";
import { TodoProvider } from "../context/TodoContext";

export const HomePage: React.FC = () => {
  return (

     <TodoProvider>
      <HomePageContent />
     </TodoProvider>
  );
};

const HomePageContent: React.FC = () => {
  
  const todoRepository = TodoRepository();
  const addTodo = new AddTodo(todoRepository); 
  const addTodoUseCase = new AddTodo(todoRepository);
  const removeTodoUseCase = new RemoveTodo(todoRepository);
  const toggleTodoUseCase = new ToggleTodo(todoRepository);
  const todos = todoRepository.getAll();

  const handleAddTodo = (title: string) => {
    addTodoUseCase.execute(title);
  };

  const handleRemoveTodo = (id: string) => {
    removeTodoUseCase.execute(id);
  };

  const handleToggleTodo = (id: string) => {
    toggleTodoUseCase.execute(id);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={handleRemoveTodo}
        toggleTodo={handleToggleTodo}
      />
    </div>
  );
};





