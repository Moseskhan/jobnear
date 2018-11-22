import { Router } from '@angular/router';
import { SignupService } from './signup/signup.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
userRole:any;
  constructor(private auth: SignupService, private router: Router) { 

   
  }
   getUser(){
  return   this.auth.user;
   } 
   detState(){
    let state= localStorage.getItem("anonymous")
    if(state=="1"){

      //alert('not logged in');
        this.router.navigate(['/accounts/login']);
    }else{
      this.auth.user.subscribe(userData=>{
        if(userData.role!="JS"){

        }
      })
    }
   } 
}
