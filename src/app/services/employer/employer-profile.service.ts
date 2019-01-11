import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployerProfileService {
uid:any;
  constructor(private http: HttpClient ) {
    this.uid=localStorage.getItem("uid");
   }
   getProfile(){
     return this.http.get(environment.httpUrl+"/employer/profile/"+this.uid,{headers: environment.headers})
   }
   postProfile(profile){
     return this.http.post(environment.httpUrl+"/employer/profile",profile,{headers: environment.headers})
   }
   updateProfile(profile){
    return this.http.post(environment.httpUrl+"/employer/profile/update",profile,{headers: environment.headers})
   }
   postJobs(jobProfile){
    return this.http.post(environment.httpUrl+"/employer/postjobs", jobProfile,{headers: environment.headers})
   }
   postJobFiles(fileFormData){
     return this.http.post(environment.httpUrl+"/employer/postjobs/files",fileFormData);
   }
 
   
}
