import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup/signup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: SignupService) { }
userID:any;
  ngOnInit() {
    if(this.auth.user){
      this.auth.user.subscribe(user=>{
        if (user){
          this.userID=user.uid
        }
      })
    }
  }

  signOut(){
    this.auth.signOut();
  }

}
