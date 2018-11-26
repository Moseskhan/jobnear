import { empty } from 'rxjs';
import { UserStateService } from './../../services/user-state.service';
import { SignupService } from '../../services/signup/signup.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { database } from 'firebase';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.css']
})
export class ApplicantDashboardComponent implements OnInit {

  constructor(private state: UserStateService) {
    this.state.detState();

  }

  ngOnInit() {
  
   
    
  }


}
