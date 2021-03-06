import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  name = ''
  messageFromService:string    

  //ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) {

     }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      );
    //console.log("get Welcome message");
  }

  getWelcomeMessageWithParameter(){

    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      );
    //console.log("get Welcome message");
  }
  handleSuccessfulResponse(response){
    this.messageFromService = response.message;
  }

  handleErrorResponse(error){
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.messageFromService = error.error.message
  }
}
