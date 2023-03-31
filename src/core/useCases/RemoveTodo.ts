import { ITodoRepository } from "../../data/repositories/TodoRepository";

export class RemoveTodo {
  constructor(private todoRepository: ITodoRepository) {}

  execute(id: string): void {
    this.todoRepository.remove(id);
  }
}
