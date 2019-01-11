import { Component, OnInit } from '@angular/core';
import { SignupService } from './../../../services/signup/signup.service';

@Component({
  selector: 'app-employer-main-sidebar',
  templateUrl: './employer-main-sidebar.component.html',
  styleUrls: ['./employer-main-sidebar.component.css']
})
export class EmployerMainSidebarComponent implements OnInit {

  constructor(private auth: SignupService) { }

  ngOnInit() {
    this.auth.user.subscribe(
      response=>{
        console.log(response);
        if(response.role!=="EM"){
          
        }
      },
      error=>{

      }
    )
  }
  

}
