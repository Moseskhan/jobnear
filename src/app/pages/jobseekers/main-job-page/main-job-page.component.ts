import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-job-page',
  templateUrl: './main-job-page.component.html',
  styleUrls: ['./main-job-page.component.css']
})
export class MainJobPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('.banner-select').select2()

		$('.sidebar-category-select').select2({
			placeholder: 'e.g. job title'
		});
		$('.sidebar-category-select-2').select2({
			placeholder: 'Choose Category'
		});

  
  }

}
