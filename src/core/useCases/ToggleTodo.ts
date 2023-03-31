import { ITodoRepository } from "../../data/repositories/TodoRepository";

export class ToggleTodo {
  constructor(private todoRepository: ITodoRepository) {}

  execute(id: string): void {
    this.todoRepository.toggle(id);
  }
}
