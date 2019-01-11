import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { AngularFireStorage,AngularFireUploadTask } from 'angularfire2/storage';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProfileService {
uid:any;
  constructor(private firestore: AngularFirestore, private snackbar: MatSnackBar, private storage: AngularFireStorage, private http: HttpClient) { 

 this.uid=localStorage.getItem("uid");
  }


  getUserInfo(){
        return this.firestore.collection("jobSeekers").doc(this.uid).valueChanges();
  }
  addTitle(title){
    return this.firestore.collection("jobSeekers").doc(this.uid).update({
      title: title
    }) .then(() => {
      this.snackbar.open("proffessional title was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'});
    })
    .catch((error) => {
  
      this.firestore.doc(`jobSeekers/${this.uid}`)
        .set({
          title: title,
          uid: this.uid
        });
    });;
  }
  addSummary(summary){
    return this.firestore.collection("jobSeekers").doc(this.uid).update({
      summary: summary
    }) .then(() => {
      this.snackbar.open("Proffessional summary was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'});
    })
    .catch((error) => {
  
      this.firestore.doc('jobSeekers/${this.uid}')
        .set({
          summary: summary,
          uid: this.uid
        });
        this.snackbar.open("Proffessional summary was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
    });;
  }
  addSkill(skills){
    return this.firestore.collection("jobSeekers").doc(this.uid).update({
      skills: skills
    }) .then(() => {
      this.snackbar.open("skills were updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
    })
    .catch((error) => {
  
      this.firestore.doc('jobSeekers/${this.uid}')
        .set({
          skills: skills,
          uid: this.uid
        });
        this.snackbar.open("skills were updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})

    });;
  }
  saveContactInfo(info){
    return this.firestore.collection("jobSeekers").doc(this.uid).update(info).then(() => {
      this.snackbar.open("Contact Info was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
    })
    .catch((error) => {
  
      this.firestore.doc('jobSeekers/${this.uid}')
        .set(info);
        this.snackbar.open("Contact info was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
    });;
  }
  saveSocialInfo(info){
    return this.firestore.collection("jobSeekers").doc(this.uid).update(info).then(() => {
      this.snackbar.open("Social Info was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
    })
    .catch((error) => {
  
      this.firestore.doc('jobSeekers/${this.uid}')
        .set(info);
        this.snackbar.open("Social info was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
    });;
  }
  saveAvailability(availability){
    return this.firestore.collection("jobSeekers").doc(this.uid).update({
        availability: availability
    }).then(() => {
        this.snackbar.open("Availability was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
      })
      .catch((error) => {
    
        this.firestore.doc('jobSeekers/${this.uid}')
          .set({
              availability: availability
          });
          this.snackbar.open("Availability was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
      });;
  }
  saveLanguage(language){
    return this.firestore.collection("jobSeekers").doc(this.uid).update(language).then(() => {
        this.snackbar.open("Language was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
      })
      .catch((error) => {
    
        this.firestore.doc('jobSeekers/${this.uid}')
          .set(language);
          this.snackbar.open("Langauage was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
      });;
  }
  uploadProfileImage(image: File){
    const ref = this.storage.ref('');
    const file=image;
    const name = (+new Date()) + '-' + file.name;
    const metadata = {
      contentType: file.type
    };
    const task = ref.child(name).put(file, metadata);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then((url) => {

        this.firestore.collection("users").doc(this.uid).update({
            photoURL: url
        }).then(() => {
            this.snackbar.open("profile Photo was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
          })
          .catch((error) => {
        
            this.firestore.doc('users/${this.uid}')
              .set({
                  photoURL: url
              });
              this.snackbar.open("Profile Photo was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
          });;
       
      })
      .catch(console.error);
  }
  addWorkHistory(workHistory){
    return this.firestore.collection("workHistory").doc(this.uid).update({workHistory}).then(() => {
        this.snackbar.open("Work Experience was updated successfuly",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
      })
      .catch((error) => {
    
        this.firestore.doc(`workHistory/${this.uid}`)
          .set({workHistory});
          this.snackbar.open("Work Experience was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
      });;
  }
  getWorkHistory(){
    return this.firestore.collection("workHistory").doc(this.uid).valueChanges();
  }
  getEducationHistory(){
      return this.firestore.collection("educationHistory").doc(this.uid).valueChanges();
  }
  addEducationHistory(educationHistory){
    return this.firestore.collection("educationHistory").doc(this.uid).update({educationHistory}).then(() => {
        this.snackbar.open("Work Experience was updated successfuly",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
      })
      .catch((error) => {
    
        this.firestore.doc(`educationHistory/${this.uid}`)
          .set({educationHistory});
          this.snackbar.open("Work Experience was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
      });;
  }
  addEmergencyInfo(emergencyInfo){
    return this.firestore.collection("emergencyInfo").doc(this.uid).update({emergencyInfo}).then(() => {
        this.snackbar.open("Emergency Info was updated successfuly",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
      })
      .catch((error) => {
    
        this.firestore.doc(`emergencyInfo/${this.uid}`)
          .set({emergencyInfo});
          this.snackbar.open("Emergency Info was updated successfully",'Ok',{duration: 7000,verticalPosition: 'bottom',horizontalPosition: 'center'})
      });;
  }
  getEmergencyInfo(){
    return this.firestore.collection("emergencyInfo").doc(this.uid).valueChanges();
  }
  addCertification(certificateInfo){
      return this.http.post(environment.httpUrl+"/profile/certifications", certificateInfo)
  }
  getCertificates(){
      return this.http.get(environment.httpUrl+"/profile/certifications/"+this.uid, {headers: environment.headers})
  }
  deleteCertificate(id){
    return this.http.delete(environment.httpUrl+"/profile/certifications/"+id, {headers: environment.headers})
  }
  getUserDisplayName(uid){
    return this.firestore.collection("users").doc(uid).valueChanges();
}
 

  
  
  states=[
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
}];
  
  
}
