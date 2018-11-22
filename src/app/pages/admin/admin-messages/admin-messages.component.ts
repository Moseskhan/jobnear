import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".chat-list").perfectScrollbar();
  }

}
