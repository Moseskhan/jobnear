import { SignupService } from './../../../services/signup/signup.service';
import { SnackbarService } from './../../../services/snackbar/snackbar.service';
import { EmployerProfileService } from "./../../../services/employer/employer-profile.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employer-checklist",
  templateUrl: "./employer-checklist.component.html",
  styleUrls: ["./employer-checklist.component.css"]
})
export class EmployerChecklistComponent implements OnInit {
  profile: any;
  overview_status = false;
  phoneAndEmailStatus = false;
  EINStatus = false;
  paymentMethodStatus = false;
  profilePictureStatus = false;
  constructor(private employerProfile: EmployerProfileService, private alert: SnackbarService, private auth: SignupService) {}

  ngOnInit() {
    this.getProfile();
  }
  getProfile() {
    this.employerProfile.getProfile().subscribe(
      (response: any) => {
        console.log(response.data);
        for(let profile of response.data){

        
        if (profile.company_overview) {
          this.overview_status = true;
        }
        if (profile.phone) {
          this.phoneAndEmailStatus = true;
        }
        if (profile.EIN) {
          this.EINStatus = true;
        }
        if (profile.payment_method==true) {
          this.paymentMethodStatus = true;
        }
        
      }
      },
      (error: any) => {
      this.alert.alertError("There was a problem loading your checklist.Please try again later.")

      }
    );
    this.auth.user.subscribe(
      (response:any)=>{
        if(response.photoURL=="http://lathafoods.com/assets/avatar.jpg"){
          this.profilePictureStatus=false;
        }else{
          this.profilePictureStatus=true;
        }
      }
    )

    
  }
}
