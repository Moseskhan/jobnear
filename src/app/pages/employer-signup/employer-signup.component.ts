import { SignupService } from './../../services/signup/signup.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { SnackbarService } from './../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-employer-signup',
  templateUrl: './employer-signup.component.html',
  styleUrls: ['./employer-signup.component.css']
})
export class EmployerSignupComponent implements OnInit {
  employerSignUpForm=new FormGroup({
  fullName: new FormControl('',[Validators.required]),
    companyName: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.email]),
    shiftType: new FormControl("",[Validators.required]),
    phoneNumber: new FormControl('',[Validators.required]),
    industry: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required]),
    cPassword: new FormControl('',[Validators.required]),
    terms: new FormControl('',[Validators.required]),
    role: new FormControl('EM',[Validators.required])
   });
  constructor(private signup: SignupService,private snackbar: SnackbarService) { }

  ngOnInit() {
  }
  get password(){
    return this.employerSignUpForm.get("password") ;
  }
  get cPassword(){
    return this.employerSignUpForm.get("cPassword")
  }
  get terms(){
    return this.employerSignUpForm.get("terms")
  }
  get fullName(){
    return this.employerSignUpForm.get("fullName")
  }
  get companyName(){
    return this.employerSignUpForm.get("companyName")
  }
  get industry(){
    return this.employerSignUpForm.get("industry")
  }
  get email(){
    return this.employerSignUpForm.get("email")
  }
  get phoneNumber(){
    return this.employerSignUpForm.get("phoneNumber")
  }
  get shiftType(){
    return this.employerSignUpForm.get("shiftType")
  }
  employerSignUp(){
    if(this.employerSignUpForm.invalid){
      //console.log("nfnnfn");
      this.employerSignUpForm.setErrors({
        invalidForm: true
      });
    }else{

      //console.log(this.employerSignUpForm.value)

      let status=this.signup.signUpEmployer(this.employerSignUpForm.value);
      if(status){
        this.snackbar.alertSuccess("You signed up successfully");
      }
      
    }
  }

}
