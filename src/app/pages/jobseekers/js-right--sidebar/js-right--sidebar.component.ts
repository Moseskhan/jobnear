import { SnackbarService } from './../../../services/snackbar/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeProfileService } from '../../../services/profile-employee/employee-profile.service';
export interface language{

}
@Component({
  selector: 'app-js-right--sidebar',
  templateUrl: './js-right--sidebar.component.html',
  styleUrls: ['./js-right--sidebar.component.css']
})
export class JsRightSidebarComponent implements OnInit {
userInfo:any;
  constructor(private profile: EmployeeProfileService, private snackbar: SnackbarService) { 

   
  }

  ngOnInit() {
   this.getUserInfo()
  }
  getUserInfo(){
    this.profile.getUserInfo().subscribe(
      (response:any)=>{
        console.log(response)
        this.userInfo=response;
      },
      error=>{
this.snackbar.alertError("An error occured while trying to get user profile. Please try again later.")
      }
    );
  }
  updateAvailability(availability){
    this.profile.saveAvailability(availability.value);
    this.getUserInfo()
  }
  updateLanguage(language,fluency){
    let languageObject: language={
      language: language.value,
      fluency: fluency.value
    }
    let myLanguage={
      language: languageObject
    }
    this.profile.saveLanguage(myLanguage);
    this.getUserInfo();
  }

}
