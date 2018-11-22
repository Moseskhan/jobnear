import { TestserviceService } from './services/testservice.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private itemsService: TestserviceService) { }
  public ngOnInit()
  {


    $(document).ready(function(){
     //alert("haiya")
       
    });
  }
}
