import { v4 as uuid } from "uuid";

export class Todo {
  
  id: string;
  title: string;
  completed: boolean;

  constructor(title: string, completed = false) {
    this.id = uuid();
    this.title = title;
    this.completed = completed;
  }
}
