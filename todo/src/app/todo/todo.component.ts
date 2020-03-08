import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

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
    private todoservice: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.todo = new Todo(this.id,'',false, new Date())

    if(this.id!=-1){
    this.todoservice.retrieveTodo('himanshi', this.id).subscribe(
      data => this.todo = data
    )
  }
}

  saveTodo(){
    if(this.id == -1){
      this.todoservice.createTodo('himanshi',this.todo)
      .subscribe(
        data=>{
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }else{
    this.todoservice.updateTodo('himanshi',this.id,this.todo).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['todos'])
      }
    )
  }
}

}
