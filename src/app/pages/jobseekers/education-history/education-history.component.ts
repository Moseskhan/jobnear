import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmployeeProfileService } from '../../../services/profile-employee/employee-profile.service';

@Component({
  selector: 'app-education-history',
  templateUrl: './education-history.component.html',
  styleUrls: ['./education-history.component.css']
})
export class EducationHistoryComponent implements OnInit {
educationForm=new FormGroup({
  schoolName: new FormControl("", [Validators.required]),
  degree: new FormControl("",[Validators.required]),
  startDate: new FormControl("",[Validators.required]),
  endDate: new FormControl("",[Validators.required]),
  studyArea: new FormControl(""),
  description: new FormControl("")


});
educationHistoryList:any;
educationHistory:any;
  constructor(private profile: EmployeeProfileService) { }

  ngOnInit() {
    this.educationHistory=this.profile.getEducationHistory();
    this.getEducationHistory();
  }
  get schoolName(){
    return this.educationForm.get("schoolName")
  }
  get degree(){
    return this,this.educationForm.get("degree")
  }
  get startDate(){
    return this,this.educationForm.get("startDate")
  }
  get endDate(){
    return this,this.educationForm.get("endDate")
  }
  addEducation(){
    if(this.educationForm.invalid){
      this.educationForm.setErrors({
        invalidForm: true
      })
      }else{
        this.educationHistoryList.push(this.educationForm.value);
      
        this.profile.addEducationHistory(this.educationHistoryList);
        this.getEducationHistory();
        this.educationForm.reset();
      }
  }
  getEducationHistory(){
    this.profile.getEducationHistory().subscribe((response:any)=>{
     if(response==undefined){
       this.educationHistoryList=[];
     }else{
        this.educationHistoryList=response.educationHistory;
     }
    })
  }
  removeHistory(educationHistory){
    let index=this.educationHistoryList.indexOf(educationHistory);
    this.educationHistoryList.splice(index,1);
    this.profile.addEducationHistory(this.educationHistoryList);
    
    this.getEducationHistory();
   
  }

}
