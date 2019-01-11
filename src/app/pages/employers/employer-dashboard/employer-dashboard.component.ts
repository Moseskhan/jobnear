import { Router } from '@angular/router';
import { JobsService } from './../../../services/jobs/jobs.service';
import { Component, OnInit } from '@angular/core';
import { SignupService } from './../../../services/signup/signup.service';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.css']
})
export class EmployerDashboardComponent implements OnInit {
  myjobPosts:any;
  profilePercentage:any;
  constructor(private JobsService: JobsService, private router: Router, private auth: SignupService) { }

  ngOnInit() {
    this.getJobPosts();
  }
  getJobPosts(){
    this.myjobPosts=this.JobsService.getEmployerJobPostsByID()
  }
  goToJobPosts(){
    this.router.navigate(["/employer/myposts"])
  }
  calculatePercentageProfile(){
  this.profilePercentage=50;
  }

}
