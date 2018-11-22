import { messageDialog } from '../../models/dialogMessage';

import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-messages-modal',
  templateUrl: './messages-modal.component.html',
  styleUrls: ['./messages-modal.component.css']
})
export class MessagesModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MessagesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: messageDialog) {

      $(".chat-list").perfectScrollbar();
    }
  

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
