import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{

  constructor(
    public id : number,
    public description: string,
    public isDone: Boolean,
    public targetDate: Date
  ){

  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: string
 

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
   this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('pompy').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete Todo ${id}`); 
    this.todoService.deleteTodo('pompy', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful`; 
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`); 
    this.router.navigate(['todos', id]); 
  }
}
