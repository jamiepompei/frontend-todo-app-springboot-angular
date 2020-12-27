import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }


 retrieveAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
   }

   deleteTodo(username, id){
     return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
   }

   retrieveToDo(username, id){
     return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
   }

   updateToDo(username, id, todo){
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`
    , todo);
  }

  createToDo(username, todo){
    return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos`
    , todo);
  }

}
