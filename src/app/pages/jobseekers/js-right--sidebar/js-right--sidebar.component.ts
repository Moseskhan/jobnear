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
  constructor(private profile: EmployeeProfileService) { 

    this.userInfo=this.profile.getUserInfo();
  }

  ngOnInit() {
   
  }
  updateAvailability(availability){
    this.profile.saveAvailability(availability.value);

  }
  updateLanguage(language,fluency){
    let languageObject: language={
      language: language.value,
      fluency: fluency.value
    }
    let myLanguage={
      language: languageObject
    }
    this.profile.saveLanguage(myLanguage)
  }

}
