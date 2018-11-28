import { EmployeeProfileService } from './../../../services/profile-employee/employee-profile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency-info',
  templateUrl: './emergency-info.component.html',
  styleUrls: ['./emergency-info.component.css']
})
export class EmergencyInfoComponent implements OnInit {
   emergencyForm=new FormGroup({
     name: new FormControl("",[Validators.required]),
     phone: new FormControl("",[Validators.required]),
     email: new FormControl("",[Validators.required]),
     relationShip: new FormControl("",[Validators.required])

   });
   emergencyList:any;
   emergencyInfo:any;
  constructor(private profile: EmployeeProfileService) { }

  ngOnInit() {
    
    this.emergencyInfo=this.profile.getEmergencyInfo();
    this.getEmergencyInfo();
  }
  get name(){
    return this.emergencyForm.get("name");
  }
  get phone (){
    return this.emergencyForm.get("phone");
  }
  get email(){
    return this.emergencyForm.get("email");
  }
  get relationShip(){
    return this.emergencyForm.get("relationShip");
  }
  addEmergencyInfo(){
    if(this.emergencyForm.invalid){
      this.emergencyForm.setErrors({
        invalidForm: true
      })
      }else{
        this.emergencyList.push(this.emergencyForm.value);
      
        this.profile.addEmergencyInfo(this.emergencyList);
        this.getEmergencyInfo();
        this.emergencyForm.reset();
      }
  }
  removeEmergencyInfo(emergency,index){
    
    this.emergencyList.splice(index,1);
    this.profile.addEmergencyInfo(this.emergencyList);
    
    this.getEmergencyInfo();
  }
  getEmergencyInfo(){
  this.profile.getEmergencyInfo().subscribe((response:any)=>{
    if(response==undefined){
this.emergencyList=[];
    }else{
      this.emergencyList=response.emergencyInfo;
    }
    
  })
  }
}
