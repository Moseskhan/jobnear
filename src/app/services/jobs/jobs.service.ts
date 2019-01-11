import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }
  getJobByID(jobID){
    return this.http.get(environment.httpUrl+"/employer/getjobs/"+jobID,{headers: environment.headers})
  }
  getEmployerJobPostsByID(){
    return this.http.get(environment.httpUrl+"/employer/myposts/"+localStorage.getItem("uid"),{headers: environment.headers})
  }
  postJobApplicationFiles(applicationDetails){
    return this.http.post(environment.httpUrl+"/jobseeker/applyjob/files", applicationDetails)
  }
  postJobApplication(applicationDetails){
    return this.http.post(environment.httpUrl+"/jobseeker/applyjob", applicationDetails, {headers: environment.headers})
  }
  checkPreviousApplication(userAndJobID){
    return this.http.post(environment.httpUrl+"/jobseeker/checkApplications", userAndJobID, {headers: environment.headers})
  }
  deleteJobApplication(userAndJobID){
    return this.http.post(environment.httpUrl+"/jobs/applications/delete", userAndJobID, {headers: environment.headers})
  }
  
  
}
