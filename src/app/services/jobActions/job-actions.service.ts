import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class JobActionsService {
userID=localStorage.getItem("uid");
  constructor(private http: HttpClient, private snackbar: SnackbarService) { 
    console.log(this.userID)
  }

  flagInaappropriate(jobID){
    return this.http.post(environment.httpUrl+"/jobs/actions/flag",{jobID: jobID,userID: this.userID},{headers: environment.headers}).subscribe(
      response=>{
            this.snackbar.alertSuccess("Flagged as inappropriate");
      },
      error=>{
        this.snackbar.alertError("There was an error.Please try again later");
      }
    )

  }
  saveJob(jobID){
    return this.http.post(environment.httpUrl+"/jobs/actions/save",{jobID: jobID,userID: this.userID},{headers: environment.headers}).subscribe(
      response=>{
            this.snackbar.alertSuccess("Job Saved");
      },
      error=>{
        this.snackbar.alertError("There was an error.Please try again later");
      }
    )
  }
  markFavourite(jobID){
    return this.http.post(environment.httpUrl+"/jobs/actions/markfavourite",{jobID: jobID,userID: this.userID},{headers: environment.headers}).subscribe(
      response=>{
            this.snackbar.alertSuccess("Job marked as Favourite");
      },
      error=>{
        this.snackbar.alertError("There was an error.Please try again later");
      }
    )
  }
  checkFavourite(jobID){
    this.http.post(environment.httpUrl+"/jobs/actions/markfavourite/check",{jobID: jobID,userID: this.userID},{headers: environment.headers}).subscribe(
      (response: any)=>{
            if(response.data.length>0){
              return true
            }else{
              return false;
            }
      },
      error=>{
        this.snackbar.alertError("There was an error.Please try again later");
        return false;
      }
    )
  }
  checkSaved(jobID){
    this.http.post(environment.httpUrl+"/jobs/actions/save/check",{jobID: jobID,userID: this.userID},{headers: environment.headers}).subscribe(
      (response: any)=>{
            if(response.data.length>0){
              return true
            }else{
              return false;
            }
      },
      error=>{
        this.snackbar.alertError("There was an error.Please try again later");
        return false;
      }
    )
  }
  checkFlag(jobID){
    this.http.post(environment.httpUrl+"/jobs/actions/flag/check",{jobID: jobID,userID: this.userID},{headers: environment.headers}).subscribe(
      (response: any)=>{
            if(response.data.length>0){
              return true
            }else{
              return false;
            }
      },
      error=>{
        this.snackbar.alertError("There was an error.Please try again later");
        return false;
      }
    )
  }


  
  checkJob(id){


  }
  
}
