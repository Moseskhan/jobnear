import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-users',
  templateUrl: './approve-users.component.html',
  styleUrls: ['./approve-users.component.css']
})
export class ApproveUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.datepicker').datepicker({
      format: 'mm-dd-yyyy'
    });
  }

}
