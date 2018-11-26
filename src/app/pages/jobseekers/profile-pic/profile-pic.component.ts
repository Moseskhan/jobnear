import { Component, OnInit } from '@angular/core';
import { EmployeeProfileService } from '../../../services/profile-employee/employee-profile.service';
import { SignupService } from '../../../services/signup/signup.service';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent implements OnInit {
selectedFile:any;
  constructor(private profile: EmployeeProfileService,private auth: SignupService) { }

  ngOnInit() {
  }
  uploadFile(event){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.profile.uploadProfileImage(this.selectedFile)
  }

}
