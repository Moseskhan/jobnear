import { SnackbarService } from './../snackbar/snackbar.service';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, empty } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';
import { MatSnackBar, throwToolbarMixedModesError } from '@angular/material';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from './../../../environments/environment';


interface User{
 
  uid:string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
  firstName: string;
  lastName: string;
  role: string;
  phoneNumber: string;
  
}
@Injectable({
  providedIn: 'root'
})
export class SignupService {
user: Observable<User>;
constructor(private afAuth: AngularFireAuth,
  private afs: AngularFirestore,
  private router: Router, 
  private snackbar: MatSnackBar,
  private http: HttpClient,
  private snack: SnackbarService
  ) {

//// Get auth data, then get firestore user document || null
this.user = this.afAuth.authState.pipe(
switchMap(user => {
if (user) {
  localStorage.setItem("anonymous", "0");
return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
} else {
  localStorage.setItem("anonymous", "1");
return empty();

}
}))
}
signUpWithEmail(data) {
   return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
    .then((user) => {
      
     // this.updateUserData(user);
      
      this.afAuth.auth.currentUser.updateProfile({ 
      displayName: data.firstName+" "+data.lastName,
      photoURL: "http://lathafoods.com/assets/avatar.jpg"
    });
     this.afs.collection('users').doc(this.afAuth.auth.currentUser.uid).set({
         displayName: data.firstName+" "+data.lastName,
         uid: this.afAuth.auth.currentUser.uid,
         email: data.email,
         photoURL: "http://lathafoods.com/assets/avatar.jpg",
         role: data.role,
         industry: data.role,
         firstName: data.firstName,
         lastName: data.lastName,
         phoneNumber: data.phoneNumber

     });
     this.afs.collection('jobSeekers').doc(this.afAuth.auth.currentUser.uid).set({
 
      uid: this.afAuth.auth.currentUser.uid
     

  });
  this.afAuth.auth.currentUser.sendEmailVerification().then(function() {
    
  }).catch(function(error) {
    this.snackbar.open("an error occured while sending an Email verification message",'okey',{duration: 7000,verticalPosition: 'top',horizontalPosition: 'start', panelClass: ['red-snackbar']})
  });
    return true;
     
      
    })
    .catch(error => {
      console.log(error);
     this.snackbar.open(error.message,'okey',{duration: 7000,verticalPosition: 'top',horizontalPosition: 'start', panelClass: ['red-snackbar']})
     return false;
    });
   
}

loginWithEmail(data) {
  return this.afAuth.auth.signInWithEmailAndPassword(data.username, data.password)
    .then((user: any) => {
    let userInfo=this.afAuth.auth.currentUser;
    this.user.subscribe(response=>{
      localStorage.setItem("uid", response.uid);
      if(response.role=="JS"){
        this.router.navigate(['/jobseeker/dashboard'])

      }else if(response.role=="EM"){
        this.router.navigate(['/employer/dashboard']);
      }else if(response.role=="admin"){
        this.router.navigate(['/admin/dashboard']);
      }
    })
     
     
     
      
    })
    .catch(error => {
      console.log(error)
      this.snackbar.open(error.message,'okey',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center', panelClass: ['red-snackbar']})
    });
}
signUpEmployer(data) {
  return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
   .then((user) => {
     
    // this.updateUserData(user);
     
     this.afAuth.auth.currentUser.updateProfile({ 
     displayName: data.companyName,
     photoURL: "http://lathafoods.com/assets/avatar.jpg"
   });
    this.afs.collection('users').doc(this.afAuth.auth.currentUser.uid).set({
        displayName: data.fullName,
        uid: this.afAuth.auth.currentUser.uid,
        email: data.email,
        photoURL: "http://lathafoods.com/assets/avatar.jpg",
        role: data.role,
        industry: data.role,
        fullName: data.fullName,
        companyName: data.companyName,
        phoneNumber: data.phoneNumber

    });
    this.http.post(environment.httpUrl+"/employer/profile", {
      employerName: data.fullName,
      companyName: data.companyName,
      companyOverview: data.overview,
      phone: data.phoneNumber,
      state: "",
      city: "",
      zipCode: "",
      address: "",
      userID: this.afAuth.auth.currentUser.uid
    
    },{headers: environment.headers}).subscribe(
      response=>{
        console.log(response)

      },
      error=>{
        console.log(error)
      }
    );
    
    this.afAuth.auth.signOut().then(() => {
      localStorage.setItem("uid", null);
        this.router.navigate(['/accounts/login']);
    });
   return true;
    
     
   })
   .catch(error => {
     console.log(error);
    this.snackbar.open(error.message,'okey',{duration: 7000,verticalPosition: 'top',horizontalPosition: 'start', panelClass: ['red-snackbar']})
    return false;
   });
  
}
signOut() {
  this.afAuth.auth.signOut().then(() => {
    localStorage.setItem("uid", null);
   
      this.router.navigate(['/accounts/login']);
  });
 
  
}
getUserDetails(){
  return this.afs.collection('')
}

 
}
