import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }


 retrieveAllTodos(username){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
   }

   deleteTodo(username, id){
     return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
   }

   retrieveToDo(username, id){
     return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
   }

   updateToDo(username, id, todo){
    return this.http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`
    , todo);
  }

  createToDo(username, todo){
    return this.http.post<Todo>(`${API_URL}/users/${username}/todos`
    , todo);
  }

}
