import { useState } from "react";
import { AddTodo } from "../../core/useCases/AddTodo";
import { RemoveTodo } from "../../core/useCases/RemoveTodo";
import { ToggleTodo } from "../../core/useCases/ToggleTodo";
import { UpdateTodo } from "../../core/useCases/UpdateTodo";
import { TodoRepository } from "../../data/repositories/TodoRepository";
import { AddTodoForm } from "../components/AddTodoForm";
import { TodoList } from "../components/TodoList";
import { UpdateTodoForm } from "../components/UpdateTodoForm";
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
  const updateTodo = new UpdateTodo(todoRepository);
  const addTodoUseCase = new AddTodo(todoRepository);
  const removeTodoUseCase = new RemoveTodo(todoRepository);
  const updateTodoUseCase = new UpdateTodo(todoRepository);
  const toggleTodoUseCase = new ToggleTodo(todoRepository);
  const todos = todoRepository.getAll();

  const [todo, setTodo ] = useState({id: "", title: ""})
  const [update, setUpdate] = useState(false)



  const handleAddTodo = (title: string) => {
    addTodoUseCase.execute(title);
  };

  const handleRemoveTodo = (id: string) => {
    removeTodoUseCase.execute(id);
  };

  const handleUpdateTodo = (id: string, title: string) => {
    setTodo({id, title})
    setUpdate(true)
    updateTodoUseCase.execute(id, title);
  };

  const handleToggleTodo = (id: string) => {
    toggleTodoUseCase.execute(id);
  };

  return (
    <div>
      <h1>Todo List</h1>

      {update ? (
        
        <UpdateTodoForm id={todo?.id} title={todo.title} setUpdate={setUpdate}/>
      ) : (
         <AddTodoForm addTodo={addTodo} />
      )}


      <TodoList
        todos={todos}
        removeTodo={handleRemoveTodo}
        updateTodo={handleUpdateTodo}
        toggleTodo={handleToggleTodo}
      />
    </div>
  );
};





