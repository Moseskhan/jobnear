import { JobActionsService } from './../../services/jobActions/job-actions.service';
import { StriphtmlPipe } from "./../../common/striphtml.pipe";
import { EmployeeProfileService } from "./../../services/profile-employee/employee-profile.service";
import { MatchJobsService } from "./../../services/jobseeker/match-jobs.service";
import { empty } from "rxjs";
import { UserStateService } from "./../../services/user-state.service";
import { SignupService } from "../../services/signup/signup.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { database } from "firebase";
import * as firebase from "firebase/app";
import { userInfo } from "os";
import { OrderPipe } from "ngx-order-pipe";
import { EnumsService } from "../../services/enums.service";

@Component({
  selector: "app-applicant-dashboard",
  templateUrl: "./applicant-dashboard.component.html",
  styleUrls: ["./applicant-dashboard.component.css"]
})
export class ApplicantDashboardComponent implements OnInit {
  skills: any = [];
  jobTitle: any = "";
  certifications: any = [];
  jobList: any;
  userInfo: any;
  city:any="";
  myState:any="";
  zip:any="";
  loading:boolean=true;
  constructor(
    private state: UserStateService,
    private jobMatch: MatchJobsService,
    private profile: EmployeeProfileService,
    private enumService: EnumsService,
    private jobActions: JobActionsService,
    private router: Router
  ) {
    this.state.detState();
    
  }

  ngOnInit() {
    this.getUserInfo();
    console.log(this.jobActions.checkFavourite(3))
  }
  getUserInfo() {
    this.jobMatch.getUserInfo().subscribe(
      (response: any) => {
        if (response.skills) {
          this.skills = response.skills;
        }
        if (response.title) {
          this.jobTitle = response.title;
        }
        if (response.city) {
          this.city = response.city;
        }
        if (response.state) {
          this.myState = response.state;
        }
        if (response.zip) {
          this.zip = response.zip;
        }

        console.log(this.skills);
        this.profile.getCertificates().subscribe(
          (response: any) => {
            console.log(response.data);
            for (let profile of response.data) {
              this.certifications.push(profile.license);
            }
          },
          error => {}
        );
        this.userInfo = {
          title: this.jobTitle,
          skills: this.skills,
          certifications: this.certifications,
          userID: localStorage.getItem("uid")
          
        };
        console.log(this.userInfo);
        this.jobList = this.jobMatch.getJobsList(this.userInfo);
        this.jobMatch.getJobsList(this.userInfo).subscribe(response => {
          console.log(response);
          this.loading=false;
        });
      },
      error => {}
    );
  }
  topSearch(keyword, nearme: HTMLInputElement, shift: HTMLInputElement) {
    this.loading=true;
   if (keyword.value==""){
     keyword="";
   }else{
     keyword=keyword.value;
   }

   let searchData={
     keyword: keyword,
     statusNearMe: nearme.checked,
     statusShift: shift.checked,
     city:this.city,
     state:this.myState,
     zip: this.zip,
     skills: this.skills,
     userID: localStorage.getItem("uid")
     
     
  };
   console.log(JSON.stringify(searchData));
  this.jobList=this.jobMatch.topJobSearch(searchData)
  this.jobMatch.topJobSearch(searchData).subscribe(()=>{
      this.loading=false;
  })
   
   
  }
  applyJob(jobID){
    this.router.navigate(["/applyjob", jobID]);

  }
  goToSavedJobs(){
    this.router.navigate(["/applyjob", 4]);
  }
  goToFavouriteJobs(){
    this.router.navigate(["/applyjob", 5]);
  }

}
