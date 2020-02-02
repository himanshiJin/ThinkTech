import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor( private router: Router, 
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    //if (this.username==="himanshi" && this.password === 'dummy'){
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password) ){
    //Redirect to the welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else{
      this.invalidLogin = true
    }
  }



}
