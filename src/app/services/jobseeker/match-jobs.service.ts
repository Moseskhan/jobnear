import { environment } from './../../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchJobsService {
uid=localStorage.getItem("uid");
  constructor(private http: HttpClient,private firestore: AngularFirestore) { 

  }
  getUserInfo(){
    return this.firestore.collection("jobSeekers").doc(this.uid).valueChanges();
}
getJobsList(userData){
  
  return this.http.post(environment.httpUrl+"/jobs/jobseeker/home", userData,{headers: environment.headers})
}
topJobSearch(searchData){
  return this.http.post(environment.httpUrl+"/jobseeker/searchjobs/topsearch", searchData,{headers: environment.headers})
}

}
