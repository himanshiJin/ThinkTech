import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id: 1, description: 'Learn to Dance'},
    {id: 2, description: 'Learn to Swim'},
    {id: 3, description: 'Become an expert at Angular'}
  ]
  todo = {
    id: 1,
    description: 'Learn to Dance'
  }
  
  constructor() { }

  ngOnInit() {
  }

}
