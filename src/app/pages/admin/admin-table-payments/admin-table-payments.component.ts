import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-table-payments',
  templateUrl: './admin-table-payments.component.html',
  styleUrls: ['./admin-table-payments.component.css']
})
export class AdminTablePaymentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.datepicker').datepicker({
      format: 'mm-dd-yyyy'
    });
  }


}
