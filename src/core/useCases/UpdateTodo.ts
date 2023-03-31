import { ITodoRepository } from "../../data/repositories/TodoRepository";

export class UpdateTodo {
  
  constructor(private todoRepository: ITodoRepository) {}

  execute(id: string, title: string): void {
    
    this.todoRepository.update(id, title);


  }

  //  execute(id: string, title: string): void {
  //    this.todoRepository.update(id, title);
  // }
}