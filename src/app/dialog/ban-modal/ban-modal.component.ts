import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { banUserData } from '../../models/ban-user-data/ban-user-data.module';

@Component({
  selector: 'app-ban-modal',
  templateUrl: './ban-modal.component.html',
  styleUrls: ['./ban-modal.component.css']
})
export class BanModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BanModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: banUserData) {

      $(".chat-list").perfectScrollbar();
    }
  

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
