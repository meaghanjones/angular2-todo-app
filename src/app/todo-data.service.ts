import { Injectable } from '@angular/core';

@Injectable()
export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = [];
  constructor() {
}

 // Simulate POST /todos
addTodo(todo: Todo): TodoDataService {
  if (!todo.id) {
    todo.id = ++this.lastId;
  }
  this.todos.push(todo);
  return this;
}

//Simulate DELETE /todos/:id
deleteTodobyId(id: number): TodoDataService {
  this.todos = this.todos
    filter(todo => todo.id !== id);
  return this;
}

//Simulate PUT /todos/:id
updateTodoByID(id: number, values: Object ={}): Todo{
  let todo = this.getToDoById(id);
  if!todo{
    return null;
  }
  Object.assign(todo, values);
  return todo;
}

//Simular Get /tudos
getAllTodos(): Todo[]{
  return this.todos;
}

//Simulate GET /todos/:id
getTodoById(id: number) Todo {
  return this.todos
  .filter(todo => todo.id === id)
  .pop();
}

// Toggle todo complete
 toggleTodoComplete(todo: Todo){
   let updatedTodo = this.updateTodoById(todo.id, {
     complete: !todo.complete
   });
   return updatedTodo;
 }

}
