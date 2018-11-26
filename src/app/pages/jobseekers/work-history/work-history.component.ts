import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { EmployeeProfileService } from '../../../../app/services/profile-employee/employee-profile.service';
export interface workHistory{
companyName: string;
jobTitle: string;
startDate: Date;
endDate: Date;
city: string;
state: string;
contactName: string;
contactPhoneNumber: string;
additionalInfo: string;
}
@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  
  workForm=new FormGroup({
    companyName: new FormControl('',[Validators.required]),
    jobTitle: new FormControl('',[Validators.required]),
    startDate: new FormControl('',[Validators.required]),
    endDate: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    contactName: new FormControl('',[Validators.required]),
    contactPhoneNumber: new FormControl('',[Validators.required]),
    addittionalInfo: new FormControl("")
  });
  workHistoryList:any;
  workHistory:any;
  constructor(private profile: EmployeeProfileService) { 

   
  }
  get companyName(){
    return this.workForm.get("companyName");
  }
  get jobTitle(){
    return this.workForm.get("jobTitle");
  }
  get startDate(){
    return this.workForm.get("endDate");
  }
  get state(){
    return this.workForm.get("state");
  }
  get endDate(){
    return this.workForm.get("endDate");
  }
  get city(){
    return this.workForm.get("state");
  }
  get contactName(){
    return this.workForm.get("contactName");
  }
  get contactPhoneNumber(){
    return this.workForm.get("contactPhoneNumber");
  }
  get addittionalInfo(){
    return this.workForm.get("addittionalInfo");
  }

  ngOnInit() {

this.workHistory=this.profile.getWorkHistory();
this.getWorkList();
    $('.datepicker').datepicker({
      format: 'mm-dd-yyyy'
    });
  }
addWorkHistory(){
  
  if(this.workForm.invalid){
  this.workForm.setErrors({
    invalidForm: true
  })
  }else{
    this.workHistoryList.push(this.workForm.value);
  
    this.profile.addWorkHistory(this.workHistoryList);
    this.getWorkList();
    this.workForm.reset();
  }
   
  
}
removeHistory(workHistory){
  let index=this.workHistoryList.indexOf(workHistory);
  this.workHistoryList.splice(index,1);
  this.profile.addWorkHistory(this.workHistoryList);
  
  this.getWorkList();
 
}
getWorkList(){
  this.profile.getWorkHistory().subscribe((response:any)=>{
    if(response==undefined){
      this.workHistoryList=[]
    }else{
      this.workHistoryList=response.workHistory;
    }
});

}

}