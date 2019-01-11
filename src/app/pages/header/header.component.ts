import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup/signup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: SignupService, private router: Router) { }
userID:any;
  ngOnInit() {
    if(this.auth.user){
      this.auth.user.subscribe(user=>{
        if (user){
          this.userID=user.uid
        }
        if (this.userID){

        }else{
     this.router.navigate(["account/login"])
        }
      })
    }

    
  }

  signOut(){
    this.auth.signOut();
  }

}
