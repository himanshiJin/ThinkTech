import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo: Todo

  constructor(
    private route:ActivatedRoute,
    private todoservice: TodoDataService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todoservice.retrieveTodo('himanshi', this.id).subscribe(
      data => this.todo = data
    )
  }

}
