import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done: boolean,
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

  /*todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an expert at Angular', false, new Date()),
    new Todo(3, 'Learn to Swim', false, new Date())
  ]*/

  constructor(
    private todoService:TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('himanshi').subscribe(
      response =>{
        this.todos = response;
      }
    )
  }

  deleteTodo(id: any){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('himanshi', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: any){
    console.log(`updated todo ${id}`)
    this.router.navigate(['todos',id])
  }

}
