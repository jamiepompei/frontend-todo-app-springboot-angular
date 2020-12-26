import { Component, OnInit } from '@angular/core';

export class Todo{

  constructor(
    public id : number,
    public description: string,
    public isDone: boolean,
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

  todos = [
    new Todo(1,'Learn to Dance', false, new Date()),
    new Todo(2,'Become an expert at Angular', false, new Date()),
    new Todo(3,'Visit Spain', false, new Date()),
  ]
  // todo = {
  //     id : 1,
  //     description: 'Learn to Dance'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
