import { environment } from './../../../../environments/environment';
import { DocumentsUploadService } from './../../../services/uploadfiles/documents-upload.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeProfileService } from '../../../../app/services/profile-employee/employee-profile.service';
import { MatSnackBar } from '@angular/material';
import { SnackbarService } from '../../../../app/services/snackbar/snackbar.service';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor(private profile: EmployeeProfileService,private snackbar: SnackbarService, private uploadService: DocumentsUploadService) { }
documentsList:any=[];
documents:any;
selectedFile:File;
governmentID:File;
SSN:File;
file:File;

  ngOnInit() {

this.getFiles();
  }
 
  isGovernmentID(){
 
    let state:any=false;
    for(let document of this.documentsList){
      if(document.document_type==="governmentID"){
        state=environment.httpUrl+"/files/documents/"+document.document_url;
      }
    }
    return state;
  }
  isSocialSecurity(){
  
    let state:any=false;
    for(let document of this.documentsList){
      if(document.document_type==="SSN"){
        state=environment.httpUrl+"/files/documents/"+document.document_url;
      }
    }
    return state;
  }
  isResume(){
  
    let state:any=false;
    for(let document of this.documentsList){
      if(document.document_type==="RESUME"){
        state=environment.httpUrl+"/files/documents/"+document.document_url;
      }
    }
    return state;
  }
  
  uploadFile(event, name){
   
      if (name==="governmentID"){
       this.governmentID=event.target.files[0]
      }
      if(name==="SSN"){
        this.SSN=event.target.files[0]
      }
      
      this.selectedFile=event.target.files[0];
      this.uploadService.uploadDocument(this.selectedFile, name).subscribe(
        data => {
        this.snackbar.alertSuccess("Document of type "+name +" was uploaded successfully");
        this.getFiles();
        },
        err => {
          
          this.snackbar.alertError("There was an error uploading this document. Please try again later.");
        
        },
      )
   
     
  }
  getFiles(){
    this.uploadService.getUploadedFiles().subscribe(
      (response:any)=>{
      this.documentsList=response.data;
      },
      err=>{

      }
    )

  }

}
