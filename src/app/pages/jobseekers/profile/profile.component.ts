import { SignupService } from './../../../services/signup/signup.service';
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
export interface socialLinks{
  facebook: string;
  twitter: string;
  linkedIn: string;
  google: string

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
selectedFile:any;
contactInfo=new FormGroup({

})
  constructor(private profile: EmployeeProfileService, private auth: SignupService) { 
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
  saveContactInfo(phone, secondaryPhoneNumber,state,zip,address, city){
    let userContacts: contactInfo={
        phoneNumber: phone.value,
        secondaryPhoneNumber: secondaryPhoneNumber.value,
        state: state.value,
        zip: zip.value,
        address: address.value,
        city: city.value
    };
    this.profile.saveContactInfo(userContacts)
    
  }
  updateSocialInfo(fb,twit,linkedIn,google){
    let socialLinks: socialLinks={
      facebook: fb.value,
      twitter: twit.value,
      linkedIn: linkedIn.value,
      google: google.value,

    }
    this.profile.saveContactInfo(socialLinks);
  }
  
  

}
