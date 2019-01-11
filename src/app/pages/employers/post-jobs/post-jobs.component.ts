import { EmployerProfileService } from "./../../../services/employer/employer-profile.service";
import { SnackbarService } from "./../../../services/snackbar/snackbar.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Router } from "@angular/router";
export interface DialogData {
  shifts: [];
  weekDays: [];
}

@Component({
  selector: "app-post-jobs",
  templateUrl: "./post-jobs.component.html",
  styleUrls: ["./post-jobs.component.css"]
})
export class PostJobsComponent implements OnInit {
  tinymce: any;
  address: any;
  phone: any;
  formattedAddress: any;
  weekDays = [
    "monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sartuday",
    "Sunday"
  ];
  shifts: any = [];
  skills: any = [];
  licenses: any = [];
  description: any;
  filesToUpload: Array<File> = [];
  currentUrl: any;
  rate: any;
  rateBasis: any;
  jobTitle: any;
  jobType: any;
  industry: any;
  jobCategory: any;
  errorJobTitle: any;
  errorAddress: any;
  errorJobType: any;
  errorJobCategory: any;
  errorSkills: any;
  errorLicenses: any;
  errorDescription: any;
  errorRate: any;
  errorRateBasis: any;
  constructor(
    private dialog: MatDialog,
    private SnackbarService: SnackbarService,
    private jobService: EmployerProfileService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  getAddress(place: object) {
    this.address = place["formatted_address"];
    this.phone = this.getPhone(place);
    this.formattedAddress = place["formatted_address"];
  }
  getPhone(place) {
    const COMPONENT_TEMPLATE = {
        formatted_phone_number: "formatted_phone_number"
      },
      phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return phone;
  }
  getAddrComponent(place, componentTemplate) {
    let result;

    for (let i = 0; i < place.address_components.length; i++) {
      const addressType = place.address_components[i].types[0];
      if (componentTemplate[addressType]) {
        result = place.address_components[i][componentTemplate[addressType]];
        return result;
      }
    }
    return;
  }
  selectJobType(jobType) {
    if (jobType.value == 1) {
      console.log(jobType.value);
      const dialogRef = this.dialog.open(addShiftDialog, {
        width: "80%",
        data: { shifts: this.shifts, weekDays: this.weekDays }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log("The dialog was closed");
        this.shifts = result;
        console.log(this.shifts);
      });
    }
  }
  addShift() {
    const dialogRef = this.dialog.open(addShiftDialog, {
      width: "80%",
      data: { shifts: this.shifts, weekDays: this.weekDays }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.shifts = result;
      console.log(this.shifts);
    });
  }
  addLicense(license) {
    this.licenses.push(license.value);
    license.value = "";
  }
  removeLicense(license) {
    let index = this.skills.indexOf(license);
    this.licenses.splice(index, 1);
  }
  addSkill(skill) {
    this.skills.push(skill.value);
    skill.value = "";
  }
  removeSkill(skill) {
    let index = this.skills.indexOf(skill);
    this.skills.splice(index, 1);
  }
  removeShift(shift) {
    let index = this.shifts.indexOf(shift);
    this.shifts.splice(index, 1);
  }
  addFile(event) {
    this.filesToUpload.push(event.target.files[0]);
  }
  removeFile(file) {
    let index = this.filesToUpload.indexOf(file);
    this.filesToUpload.splice(index, 1);
  }
  onFileClick(file) {
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.currentUrl = e.target.result;
      console.log(this.currentUrl);
    };
    reader.readAsDataURL(file);
  }

  postJob() {
    if (this.jobTitle == "" || this.jobTitle == undefined) {
      this.errorJobTitle = true;
    } else {
      this.errorJobTitle = false;
    }
    if (this.address == "" || this.address == undefined) {
      this.errorAddress = true;
    } else {
      this.errorAddress = false;
    }
    if (this.jobType == "" || this.jobType == undefined) {
      this.errorJobType = true;
    } else {
      this.errorJobType = false;
    }
    if (this.skills.length < 1) {
      this.errorSkills = true;
    } else {
      this.errorSkills = false;
    }
    if (this.licenses.length < 1) {
      this.errorLicenses = true;
    } else {
      this.errorLicenses = false;
    }

    if (this.description == "" || this.description == undefined) {
      this.errorDescription = true;
    } else {
      this.errorDescription = false;
    }
    if (this.jobCategory == "" || this.jobCategory == undefined) {
      this.errorJobCategory = true;
    } else {
      this.errorJobCategory = false;
    }
    if (this.rate == "" || this.rate == undefined) {
      this.errorRate = true;
    } else {
      this.errorRate = false;
    }
    if (this.rateBasis == "" || this.rateBasis == undefined) {
      this.errorRateBasis = true;
    } else {
      this.errorRateBasis = false;
    }

    if (this.jobType == 1) {
      if (
        this.jobTitle == "" ||
        this.jobTitle == undefined ||
        this.address == "" ||
        this.address == undefined ||
        this.jobCategory == "" ||
        this.jobCategory == undefined ||
        this.description == "" ||
        this.description == undefined ||
        this.skills < 1 ||
        this.shifts.length < 1
      ) {
        this.SnackbarService.alertError(
          "Please fill all the fields to Continue posting the job"
        );
      } else {
        let data = {
          jobTitle: this.jobTitle,
          jobType: this.jobType,
          jobCategory: this.jobCategory,
          description: this.description,
          skills: this.skills,
          shifts: this.shifts,
          files: this.filesToUpload,
          licenses: this.licenses,
          address: this.address,
          userID: localStorage.getItem("uid")
        };
        this.jobService.postJobs(data).subscribe(
          (response: any) => {
            let jobID = response.data.id;

            for (let file of this.filesToUpload) {
              console.log(file);
              let fileData = new FormData();
              fileData.append("jobID", jobID);
              fileData.append("file", file);

              this.jobService.postJobFiles(fileData).subscribe(
                response => {
                  //this.SnackbarService.alertSuccess(file.name + " was added successfully")
                 },
                 (error: any) => {
                   //this.SnackbarService.alertError("An error occurred while adding the file: "+ file.name+ ". Please try again Later")
                 }
              );
            }
            this.SnackbarService.alertSuccess(this.jobTitle + " was posted successfully.");
            this.router.navigate(["/employer/job",jobID])
          },
          error => {
            this.SnackbarService.alertError(" There was an error posting  "+this.jobTitle + " . Please try again later.")
          }
        );
      }
    } else {
      if (
        this.jobType == "" ||
        this.jobType == undefined ||
        this.jobTitle == "" ||
        this.jobTitle == undefined ||
        this.address == "" ||
        this.address == undefined ||
        this.jobCategory == "" ||
        this.jobCategory == undefined ||
        this.description == "" ||
        this.description == undefined ||
        this.skills < 1 ||
        this.rate == "" ||
        this.rateBasis == undefined ||
        this.rate == undefined ||
        this.rateBasis == ""
      ) {
        this.SnackbarService.alertError(
          "Please fill all the fields to Continue posting the job"
        );
      } else {
        let data = {
          jobTitle: this.jobTitle,
          jobType: this.jobType,
          jobCategory: this.jobCategory,
          description: this.description,
          skills: this.skills,
          shifts: this.shifts,
          files: this.filesToUpload,
          licenses: this.licenses,
          address: this.address,
          rate: this.rate,
          rateBasis: this.rateBasis,
          userID: localStorage.getItem("uid")
        };
        this.jobService.postJobs(data).subscribe(
          (response: any) => {
            //console.log(response)
            let jobID = response.data.id;

            for (let file of this.filesToUpload) {
              console.log(file);
              let fileData = new FormData();
              fileData.append("jobID", jobID);
              fileData.append("file", file);

              this.jobService.postJobFiles(fileData).subscribe(
                response => {
                  //this.SnackbarService.alertSuccess(file.name + " was added successfully")
                 },
                 (error: any) => {
                   //this.SnackbarService.alertError("An error occurred while adding the file: "+ file.name+ ". Please try again Later")
                 }
              );
            }
            this.SnackbarService.alertSuccess(this.jobTitle + " was posted successfully.")
            this.router.navigate(["/employer/job",jobID])
          },
          error => {
            this.SnackbarService.alertError(" There was an error posting  "+this.jobTitle + " . Please try again later.")
          }
        );
      }
    }
  }
}
@Component({
  selector: "addShiftDialog",
  templateUrl: "addshift.html",
  styleUrls: ["./post-jobs.component.css"]
})
export class addShiftDialog {
  shifts: any = [];
  constructor(
    public dialogRef: MatDialogRef<addShiftDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private SnackbarService: SnackbarService
  ) {
    this.shifts = data.shifts;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  shiftForm = new FormGroup({
    dayOfWeek: new FormControl("", [Validators.required]),
    timeFrom: new FormControl("", [Validators.required]),
    timeTo: new FormControl("", [Validators.required]),
    startDate: new FormControl("", [Validators.required]),
    numberOfTimes: new FormControl("", [Validators.required]),
    ratePerHour: new FormControl("", [Validators.required])
  });
  addShift() {
    if (this.shiftForm.invalid) {
      this.SnackbarService.alertError("Please fill all the fields to continue");
    } else {
      let formData = this.shiftForm.value;
      this.shifts.push(formData);
      this.SnackbarService.alertSuccess("Shift was added successfully");
    }
  }
  removeShift(shift) {
    let index = this.shifts.indexOf(shift);
    this.shifts.splice(index, 1);
  }
}
