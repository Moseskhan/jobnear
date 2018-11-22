import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-messages',
  templateUrl: './employer-messages.component.html',
  styleUrls: ['./employer-messages.component.css']
})
export class EmployerMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function ($) {


      $(".chat-list").perfectScrollbar();
  
    });
  
  }

}
