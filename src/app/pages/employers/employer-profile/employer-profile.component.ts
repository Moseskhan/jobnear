import { SnackbarService } from './../../../services/snackbar/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { EmployerProfileService } from './../../../services/employer/employer-profile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {

  constructor(private httpService: EmployerProfileService, private snackbar: SnackbarService) { }
profile:any;
companyProfile=new FormGroup({
  employerName: new FormControl("",[Validators.required]),
  companyName: new  FormControl("", [Validators.required]),
  companyOverview: new FormControl("",[Validators.required]),
  phone: new FormControl("",[Validators.required]),
  state:  new FormControl("",[Validators.required]),
  city:  new FormControl("",[Validators.required]),
  zipCode:  new FormControl("",[Validators.required]),
  address:  new FormControl("",[Validators.required]),
  userID:  new FormControl(localStorage.getItem("uid"),[Validators.required]),
  EIN: new FormControl("",[Validators.required])
})
  ngOnInit() {
 this.getProfile();
  }
  getProfile(){
    this.profile=this.httpService.getProfile().subscribe(
     ( response:any)=>{
       console.log(response)
       for (let prof of  response.data){
           this.companyProfile.patchValue({
             employerName: prof.employer_name,
             companyName: prof.company_name,
             phone: prof.phone,
             zipCode: prof.zip_code,
             city: prof.city,
             address: prof.address,
             companyOverview: prof.company_overview,
             state: prof.state,
             EIN: prof.EIN
           })
       }
      }
    )
  

}
updateProfile(){
  if(this.companyProfile.invalid){
    console.log(this.companyProfile)
    this.companyProfile.setErrors({
      invalidform: true
    });
  }else{
    this.httpService.updateProfile(this.companyProfile.value).subscribe(
      response=>{
    this.snackbar.alertSuccess("You successfully updated your employer profile")
      },
      error=>{
        this.snackbar.alertError("There was a problem updating our profile. Please try again later.")
      }
    )
  }
}
get EIN(){
  return this.companyProfile.get("EIN");

}
get employerName(){
  return this.companyProfile.get("employerName");

}
get companyName(){
  return this.companyProfile.get("companyName");
  
}
get companyOverview(){
  return this.companyProfile.get("companyOverview");
  
}
get phone(){
  return this.companyProfile.get("phone");
  
}
get state(){
  return this.companyProfile.get("state");
  
}
get city(){
  return this.companyProfile.get("city");
  
}
get zipCode(){
  return this.companyProfile.get("zipCode");
  
}
get address(){
  return this.companyProfile.get("address");
  
}

}
