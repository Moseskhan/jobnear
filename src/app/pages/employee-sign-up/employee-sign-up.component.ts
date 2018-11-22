import { IndustryCategoriesService } from './../../services/industry/industry-categories.service';
import { SignupService } from './../../services/signup/signup.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'employee-sign-up',
  templateUrl: './employee-sign-up.component.html',
  styleUrls: ['./employee-sign-up.component.css']
})
export class EmployeeSignUpComponent implements OnInit {
  employeeSignUpForm=new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.email]),
    phoneNumber: new FormControl('',[Validators.required]),
    industry: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
    terms: new FormControl('',[Validators.required]),
    role: new FormControl('JS',[Validators.required])
   });
    
  
  industryCategories: any;
  public barLabel: string = "Password strength:";
  success:boolean=false;
  constructor(private SignupService: SignupService, private categories: IndustryCategoriesService) { }
  password2:any;
  ngOnInit() {
    this.industryCategories=this.categories.getMajorCategories();
  }
  showModal(){
   $("#references").html(" am gone")
   
  }
  signUp(){
    
   if(this.employeeSignUpForm.invalid || this.cpassword.value!=this.password.value){
     this.employeeSignUpForm.setErrors({
       invalidform: false
     })
   }else{
    
   let status= this.SignupService.signUpWithEmail(this.employeeSignUpForm.value)
   .then((user) => {
         this.success=true;
   }).catch((error=>{
    this.employeeSignUpForm.setErrors({
      invalidform: false
    })

   }));
  
   
   }

  }
  get password(){
    return this.employeeSignUpForm.get("password") ;
  }
  get cpassword(){
    return this.employeeSignUpForm.get("confirmPassword")
  }
  get terms(){
    return this.employeeSignUpForm.get("terms")
  }
  get firstName(){
    return this.employeeSignUpForm.get("firstName")
  }
  get lastName(){
    return this.employeeSignUpForm.get("lastName")
  }
  get industry(){
    return this.employeeSignUpForm.get("industry")
  }
  get email(){
    return this.employeeSignUpForm.get("email")
  }
  get phoneNumber(){
    return this.employeeSignUpForm.get("phoneNumber")
  }

  


}
