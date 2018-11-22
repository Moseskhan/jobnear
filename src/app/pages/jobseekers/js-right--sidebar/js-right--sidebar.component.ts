import { Component, OnInit } from '@angular/core';
import { EmployeeProfileService } from '../../../services/profile-employee/employee-profile.service';

@Component({
  selector: 'app-js-right--sidebar',
  templateUrl: './js-right--sidebar.component.html',
  styleUrls: ['./js-right--sidebar.component.css']
})
export class JsRightSidebarComponent implements OnInit {

  constructor(private profile: EmployeeProfileService) { }

  ngOnInit() {
  }

}
