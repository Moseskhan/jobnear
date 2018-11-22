import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.component.html',
  styleUrls: ['./post-jobs.component.css']
})
export class PostJobsComponent implements OnInit {
tinymce:any;
  constructor() { }

  ngOnInit() {
    $(document).ready(function ($) {


     this.tinymce.init({
        selector: 'textarea',
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor textcolor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table contextmenu paste code help wordcount'
        ],
        toolbar: 'bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
        content_css: [
          '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
          '//www.tinymce.com/css/codepen.min.css']
      });
  
    });
  
  
  }

}
