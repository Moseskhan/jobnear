import { JobsService } from "./../../services/jobs/jobs.service";
import { SnackbarService } from "./../../services/snackbar/snackbar.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { EmployeeProfileService } from "./../../services/profile-employee/employee-profile.service";
import { SignupService } from "./../..//services/signup/signup.service";
import { environment } from "./../../../environments/environment";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
@Component({
  selector: "app-application-form",
  templateUrl: "./application-form.component.html",
  styleUrls: ["./application-form.component.css"]
})
export class ApplicationFormComponent implements OnInit {
  jobID: any;
  jobDetails: any;
  postedByID: any;
  employerDisplayName: any;
  employerImage: any;
  httpUrl: any;
  filesToUpload: Array<File> = [];
  coverLetter:any;
  statusApplied:boolean=false;
  applicationDetails:any;
  payRate:any;
  payRateBasis:any;
  errorPayRate:boolean=false;
  errorPayBasis:boolean=false;
  errorCoverLetter:boolean=false;
  statusEdit:boolean=false;
  uploadedFiles:any=[];
  server=environment.httpUrl;
  loading:boolean=true;

  constructor(
    private activeRouter: ActivatedRoute,
    private snackbar: SnackbarService,
    private JobsService: JobsService,
    private profile: EmployeeProfileService,
    private auth: SignupService
  ) {}

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(
      (response: any) => {

        this.jobID = response.get("jobID");
        this.getJob(this.jobID);
       this.checkPreviousApplication(this.jobID)
      },
      (error: any) => {
        this.snackbar.alertError("There was an error updating the app");
      }
    );

    this.httpUrl = environment.httpUrl;
  }
  checkPreviousApplication(jobID){
    let userAndJobID={
      userID: localStorage.getItem("uid"),
      jobID: jobID
    }
    
    this.JobsService.checkPreviousApplication(userAndJobID).subscribe(
      (response:any)=>{
        console.log(response);
        this.loading=false;
       
        for(let details of response.data.details){
          this.applicationDetails=details;
          this.statusApplied=true;
        }
        for(let files of response.data.files){
          this.uploadedFiles.push(files);
        }
        
      },
      error=>{
        this.loading=false;
        console.log(error)
      }
    )
  }
  getJob(jobID) {
    this.loading=true;
    this.jobDetails = this.JobsService.getJobByID(jobID);
    this.JobsService.getJobByID(jobID).subscribe(
      (response: any) => {
        this.loading=false;

      this.postedByID = response.data.basicDetails.posted_by;
      console.log(this.postedByID);
      this.getUserDisplayName();
    },
    (error:any)=>{
      this.snackbar.alertError("There was an error. Please try again later")
    });
  }
  getUserDisplayName() {
    this.loading=true;
    console.log(this.postedByID);
    this.profile.getUserDisplayName(this.postedByID).subscribe(
      (response: any) => {
        this.loading=false;
        this.employerDisplayName = response.displayName;
        this.employerImage = response.photoURL;
        console.log(response);
        this.loading=false;
      },
      error => {
        console.log(error);
      }
    );
  }
  addFile(event) {
    this.filesToUpload.push(event.target.files[0]);
  }
  removeFile(file) {
    let index = this.filesToUpload.indexOf(file);
    this.filesToUpload.splice(index, 1);
  }
  submitApplication(){
    if(!this.coverLetter){
      this.errorCoverLetter=true;
    }
    if(!this.payRate){
      this.errorPayRate=true;
    }
    if(!this.payRateBasis){
      this.errorPayBasis=true;
    }
    if(this.coverLetter && this.payRate && this.payRateBasis){
      
      
        for (let file of this.filesToUpload) {
          let formData=new FormData();
          console.log(file)
          formData.append("userID", localStorage.getItem("uid"))
          formData.append("jobID", this.jobID) ;
          formData.append("file", file);
          this.loading=true;
          this.JobsService.postJobApplicationFiles(formData).subscribe(
            (response)=>{
              this.loading=true;
   this.snackbar.alertSuccess("Documents Were uploaded Successfully")
            },
            (error)=>{
              console.log(error);
              this.snackbar.alertSuccess("There was an error uploading the documents. Please try again Later.")
            });
        }
     
        
       let applyData={
         userID: localStorage.getItem("uid"),
         jobID: this.jobID,
         coverLetter: this.coverLetter,
         payRate: this.payRate,
         payRateBasis: this.payRateBasis,
         statusEdit: this.statusEdit
       }
     
      
      this.JobsService.postJobApplication(applyData).subscribe(
        (response:any)=>{
          this.loading=false;
          this.snackbar.alertSuccess("You Applied for the Job Successfully");
          this.checkPreviousApplication(this.jobID);
        },
        (error:any)=>
        {
          console.log(error)
          this.snackbar.alertError("There was an error applying for this job. Please try again later");
        }
      );

    }else{
      this.snackbar.alertError("Please fill all the fields to continue.")
    }
  }
  changeTerms(){
this.statusEdit=true;
this.statusApplied=false;
this.coverLetter=this.applicationDetails.cover_letter;
this.payRate=this.applicationDetails.payRate;
this.payRateBasis=this.applicationDetails.payRateBasis;



  }
  deleteApplication(){
    this.loading=true;
    let userAndJobID={
      userID: localStorage.getItem("uid"),
      jobID: this.jobID
    }
    this.JobsService.deleteJobApplication(userAndJobID).subscribe(
      (response:any)=>{
        this.loading=false;
        this.snackbar.alertSuccess("Job application was deleted successfully.")
        this.router
      },
      error=>{
        console.log(error)
        this.snackbar.alertError("There was an error during operation.Please try again later.")
      }
    )
  }
  

}