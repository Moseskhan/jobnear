import { language } from './../js-right--sidebar/js-right--sidebar.component';
import { DocumentsUploadService } from "./../../../services/uploadfiles/documents-upload.service";
import { EmployeeProfileService } from "./../../../services/profile-employee/employee-profile.service";
import { SnackbarService } from "./../../../services/snackbar/snackbar.service";
import { AngularFireAuth } from "angularfire2/auth";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { auth } from "firebase";
import { SignupService } from "./../../../services/signup/signup.service";
export interface DialogData {
  shifts: [];
  weekDays: [];
}
@Component({
  selector: "app-checklist",
  templateUrl: "./checklist.component.html",
  styleUrls: ["./checklist.component.css"]
})
export class ChecklistComponent implements OnInit {
  emailVerified: boolean = false;
  statusProfilepic: boolean = false;
  statusWorkHistory: boolean = false;
  statusEducationHistory: boolean = false;
  statusGovernmentID: Boolean = false;
  statusSSN: boolean = false;
  statusCertificates: boolean = false;
  proffessionalSummary: boolean = false;
  proffessionalTitle: boolean = false;
  statusAvailability: boolean = false;
  statusTitle: boolean = false;
  statusSummary: boolean = false;
  statusLanguage:boolean=false;
  statusSkills:boolean=false;
  statusSocial:boolean=false;
  statusLocation:boolean=false;

  constructor(
    private afAuth: AngularFireAuth,
    private dialog: MatDialog,
    private auth: SignupService,
    private profile: EmployeeProfileService,
    private snack: SnackbarService,
    private docs: DocumentsUploadService
    
  ) {}

  ngOnInit() {
    this.verifyEmail();
    this.checkProfilePic();
    this.checkWorkHistory();
    this.checkCertificates();
    this.checkEducationHistory();
    this.checkDocuments();
    this.checkTitleAndSummary();
  }
  verifyEmail() {
    this.emailVerified = this.afAuth.auth.currentUser.emailVerified;
    console.log(this.emailVerified);
  }
  verifyUserEmail() {
    const dialogRef = this.dialog.open(verifyEmailDialog, {
      width: "20%",
      data: { shifts: [], weekDays: "ee" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  checkProfilePic() {
    this.auth.user.subscribe((response: any) => {
      if (response) {
        if (response.photoURL == "http://lathafoods.com/assets/avatar.jpg") {
          this.statusProfilepic = false;
        } else {
          this.statusProfilepic = true;
        }
      }
    });
  }
  checkWorkHistory() {
    this.profile.getWorkHistory().subscribe(
      (response: any) => {
        console.log(response);
        if (response) {
          if (response.length == 0) {
            this.statusWorkHistory = false;
          } else {
            this.statusWorkHistory = true;
          }
        }
      },
      (error: any) => {
        this.snack.alertError(
          "Could not load work work History. Please try again later"
        );
      }
    );
  }
  checkEducationHistory() {
    this.profile.getEducationHistory().subscribe(
      (response: any) => {
        console.log(response);
        if (response) {
          if (response.length == 0) {
            this.statusEducationHistory = false;
          } else {
            this.statusEducationHistory = true;
          }
        }
      },
      (error: any) => {
        this.snack.alertError(
          "Could not load work work History. Please try again later"
        );
      }
    );
  }
  checkDocuments() {
    this.docs.getUploadedFiles().subscribe(
      (response: any) => {
        //console.log(response);
        for (let document of response.data) {
          if (document.document_type == "governmentID") {
            this.statusGovernmentID = true;
          }
          if (document.document_type == "SSN") {
            this.statusSSN = true;
          }
        }
        // console.log(this.statusGovernmentID)
      },
      (error: any) => {
        this.snack.alertError(
          "There was a problem loading the documents. Please try again later."
        );
      }
    );
  }
  checkCertificates() {
    this.profile.getCertificates().subscribe(
      (response: any) => {
        console.log(response)
        if (response) {
          if (response.data.length == 0) {
            this.statusCertificates = false;
          } else {
            this.statusCertificates = true;
          }
        }
      },
      error => {
        this.snack.alertError(
          "There was a problem loading Certificates. Please try again later."
        );
      }
    );
  }
  checkTitleAndSummary() {
    this.profile.getUserInfo().subscribe(
      (response: any) => {
        if (response) {
          if (response.availability) {
            this.statusAvailability = true;
          }
          if (response.title) {
            this.statusTitle = true;
          }
          if (response.summary) {
            this.statusSummary = true;
          }
          if (response.language) {
            this.statusLanguage = true;
          }
          if (response.skills.length>0) {
            this.statusSkills = true;
          }
          if (response.facebook || response.google || response.twitter || response.linkedIn ) {
            this.statusSocial = true;
          }
          if (response.state || response.zip || response.city || response.address ) {
            this.statusLocation = true;
          }
        }
      },
      error => {
        this.snack.alertError(
          "There was a problem loading Certificates. Please try again later."
        );
      }
    );
  }

 
}

@Component({
  selector: "addShiftDialog",
  templateUrl: "verifyEmail.html"
})
export class verifyEmailDialog {
  emailSent: any = false;
  constructor(
    private snack: SnackbarService,
    public dialogRef: MatDialogRef<verifyEmailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {},
    private afAuth: AngularFireAuth
  ) {
    this.snack.alertError("error here");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  verifyEmail() {
    this.afAuth.auth.currentUser
      .sendEmailVerification()
      .then(function() {
        console.log("Email was sent successfully");
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
