import { FormGroup } from '@angular/forms';
import { EmployeeProfileService } from './../../../services/profile-employee/employee-profile.service';
import { Component, OnInit } from '@angular/core';
export interface contactInfo{
  phoneNumber: string;
  secondaryPhoneNumber: string;
  state: string;
  city: string;
  zip: string;
  address: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userInfo:any;
myskills=[];
states:any;
contactInfo=new FormGroup({

})
  constructor(private profile: EmployeeProfileService) { 
  this.states=this.profile.states;

  }
  

  ngOnInit() {
    this.userInfo=this.profile.getUserInfo();
    this.profile.getUserInfo().subscribe((profile:any)=>{
          this.myskills=profile.skills;
    })
  }
  updateTitle(proffessionalTitle){
    this.profile.addTitle(proffessionalTitle.value);
  }
  updateSumamry(summary){
    this.profile.addSummary(summary.value);
  }
  addSkill(skill){
    //console.log(skill.value);

    this.myskills.push(skill.value);
    this.profile.addSkill(this.myskills);

  }
  removeSkill(skill){
    //console.log(skill);
   let index=this.myskills.indexOf(skill);
   this,this.myskills.splice(index,1);
   this.profile.addSkill(this.myskills);
   //console.log(this.myskills);
    
  }
  

}
