import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username ='himanshi'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  
  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor( private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if (this.username==="himanshi" && this.password === 'dummy'){
      //Redirect to the welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else{
      this.invalidLogin = true
    }
  }

}
