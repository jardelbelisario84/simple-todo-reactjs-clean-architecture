import { ITodoRepository } from "../../data/repositories/TodoRepository";
import { Todo } from "../entities/Todo";

export class AddTodo {
  
  constructor(private todoRepository: ITodoRepository) {}

   execute(title: string): void {
    
    const todo = new Todo(title);
    this.todoRepository.add(todo);


  }
}