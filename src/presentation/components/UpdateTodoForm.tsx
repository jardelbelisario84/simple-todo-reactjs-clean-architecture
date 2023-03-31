import { useEffect, useState } from "react";
import { UpdateTodo } from "../../core/useCases/UpdateTodo";
import { TodoRepository } from "../../data/repositories/TodoRepository";


interface UpdateTodoFormProps {
  id: string;
  title: string;
  setUpdate: any;
}

export const UpdateTodoForm: React.FC<UpdateTodoFormProps> = ({id, title, setUpdate }) => {

  const [titleState, setTitleState] = useState("");
  const todoRepository = TodoRepository();
  const updateTodo = new UpdateTodo(todoRepository);

  useEffect(() => {
    setTitleState(title)
  },[])

  
  const handleSubmit = (event: React.FormEvent) => {

    event.preventDefault();

    if(titleState === undefined || titleState === "") {
      setTitleState(title);
    }

    if (!titleState.trim()) return;
    setUpdate(false)
    updateTodo.execute(id, titleState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={titleState}
        onChange={(e) => setTitleState(e.target.value) }
        placeholder="Update task"
      />
      <button type="submit">Update</button>
    </form>
    );
};
    
    