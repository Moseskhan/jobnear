import { environment } from './../../../environments/environment';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentsUploadService {
uid: any;
  constructor( private snackbar: MatSnackBar, private http: HttpClient) {


    this.uid=localStorage.getItem("uid");
   }
  uploadDocument(image: File,type){
    let uploadData=new FormData();
    uploadData.append("file",image);
    uploadData.append("type",type);
    uploadData.append("userID",this.uid)

   return  this.http.post(environment.httpUrl+"/document/upload",uploadData);
   
}
getUploadedFiles(){
  return this.http.get(environment.httpUrl+"/document/upload/"+this.uid,{headers: environment.headers})

}

}
