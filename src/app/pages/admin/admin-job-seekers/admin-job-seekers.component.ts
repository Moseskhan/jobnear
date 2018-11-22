import { BanModalComponent } from './../../../dialog/ban-modal/ban-modal.component';
import { messageDialog } from '../../../models/dialogMessage';
import { MessagesModalComponent } from '../../../dialog/messages-modal/messages-modal.component';
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-job-seekers',
  templateUrl: './admin-job-seekers.component.html',
  styleUrls: ['./admin-job-seekers.component.css']
})
export class AdminJobSeekersComponent implements OnInit {
currentCompanyID:any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(companyName,companyID): void {
    const dialogRef = this.dialog.open(BanModalComponent, {
      width: '500px',
      data: {name: companyName, userID:companyID }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.currentCompanyID = result;
    });
  }
  openSendMessage(sendToName,senderID, sendtoID): void {
    const dialogRef = this.dialog.open(MessagesModalComponent, {
      width: '500px',
      data: {name: sendToName, senderID:senderID, sendToID: sendtoID,role: "admin" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.currentCompanyID = result;
    });

}}



