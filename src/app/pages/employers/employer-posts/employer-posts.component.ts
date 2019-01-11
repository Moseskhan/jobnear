import { SignupService } from './../../../services/signup/signup.service';
import { JobsService } from './../../../services/jobs/jobs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-posts',
  templateUrl: './employer-posts.component.html',
  styleUrls: ['./employer-posts.component.css']
})
export class EmployerPostsComponent implements OnInit {
myJobPosts:any;
  constructor(private JobsService: JobsService, private auth : SignupService) { }

  ngOnInit() {
    this.getJobPosts();
  }
  getJobPosts(){
    this.myJobPosts=this.JobsService.getEmployerJobPostsByID();
    this.JobsService.getEmployerJobPostsByID().subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}
