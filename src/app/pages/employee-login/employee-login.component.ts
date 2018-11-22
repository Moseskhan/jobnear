import { SignupService } from './../../services/signup/signup.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  formLogin=new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private signin: SignupService) { 

  }

  ngOnInit() {
        
  }
 signIn(){
     this.signin.loginWithEmail(this.formLogin.value)
  
  }


}