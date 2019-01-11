import { DatesService } from './../../../services/formatting/dates.service';
import { SnackbarService } from './../../../services/snackbar/snackbar.service';
import { EmployeeProfileService } from './../../../services/profile-employee/employee-profile.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  constructor(private profileService: EmployeeProfileService, private snackbar: SnackbarService, private formatDate: DatesService) { }
   certificateForm=new FormGroup({
     license: new FormControl("", [Validators.required]),
     issuedOn:new FormControl("",[Validators.required]),
     expiresOn: new FormControl("",[Validators.required]),
     file: new FormControl("",[Validators.required]),
     description: new FormControl("")
   })
   selectedFile:File;
   certificates:any;
   httpUrl=environment.httpUrl;
  ngOnInit() {
    this.getCertificates();
  }
  get issuedOn(){
    return this.certificateForm.get("issuedOn")
  }
  get expiresOn(){
    return this.certificateForm.get("expiresOn")
  }
  get license(){
    return this.certificateForm.get("license")
  }
  get description(){
    return this.certificateForm.get("description")
  }
  get file (){
    return this.certificateForm.get("file")
  }
  addCertification(){
  if (this.certificateForm.invalid){
    this.certificateForm.setErrors({
      invalidForm: true
    })
  }else{
    let formData=new FormData();
    formData.append("issuedOn", this.formatDate.GetDateFormat(this.issuedOn.value));
    formData.append("expiresOn",this.formatDate.GetDateFormat(this.expiresOn.value));
    formData.append("license", this.license.value);
    formData.append("file", this.selectedFile);
    formData.append("description", this.description.value);
    formData.append("userID",localStorage.getItem("uid"));
    console.log(this.issuedOn.value)
    this.profileService.addCertification(formData).subscribe(
      (response:any)=>{
       
       this.snackbar.alertSuccess(this.license.value +" was added successfully");
       this.certificateForm.reset();
       this.getCertificates();

      },
      (error)=>{
        this.snackbar.alertError("There was an error adding the license, Please try again later.")
      }
    )

  }
  }
  uploadFile(event){
  this.selectedFile=event.target.files[0];

  }
  getCertificates(){
    this.certificates=this.profileService.getCertificates();
  }
  removeCertificate(id){
    this.profileService.deleteCertificate(id).subscribe(
      response=>{
        this.snackbar.alertSuccess("Crtificate was removed successfully");
        this.getCertificates();
      },
      error=>{
        this.snackbar.alertError("There was an error deleting the Certificate, Please try again later.")
      }
    );
    
  }
}
