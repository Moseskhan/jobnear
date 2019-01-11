import { environment } from './../../../../environments/environment';
import { SignupService } from './../../../services/signup/signup.service';
import { SnackbarService } from './../../../services/snackbar/snackbar.service';
import { JobsService } from './../../../services/jobs/jobs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { EmployeeProfileService } from './../../../services/profile-employee/employee-profile.service';


@Component({
  selector: 'app-single-job-details',
  templateUrl: './single-job-details.component.html',
  styleUrls: ['./single-job-details.component.css']
})
export class SingleJobDetailsComponent implements OnInit {
   jobDetails:any;
   jobID:any;
   postedByID:any;
   employerDisplayName:any;
   employerImage:any;
   httpUrl:any;
   
  constructor(private JobsService: JobsService,
    private profile: EmployeeProfileService, 
    private activatedRoute: ActivatedRoute, 
    private snackbar: SnackbarService, 
    private auth: SignupService  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (param:any)=>{
           this.jobID=param.get("jobID");
           console.log(this.jobID);
      },
      (error:any)=>{
      this.snackbar.alertError("Job details could not be loaded. Please try again later.")
      }
    );
    this.getJob(this.jobID);
    //console.log(this.jobID);
    this.auth.user.subscribe(
      response=>{
        console.log(response)
      },
      error=>{
        console.log(error)
      }
    )
   this.httpUrl=environment.httpUrl;
  }
  getJob(jobID){
this.jobDetails=this.JobsService.getJobByID(jobID)
this.JobsService.getJobByID(jobID).subscribe(
  (response:any)=>{
     this.postedByID=response.data.basicDetails.posted_by;
     console.log(this.postedByID);
     this.getUserDisplayName();
  }
);
  }
  getUserDisplayName(){
   
     this.profile.getUserDisplayName(this.postedByID).subscribe(
       (response:any)=>{
         
         this.employerDisplayName=response.displayName;
         this.employerImage=response.photoURL;
         console.log(response)
       },
       error=>{
         console.log(error)
       }
     )
  }

}
