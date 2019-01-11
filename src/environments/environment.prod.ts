import { HttpHeaders } from '@angular/common/http';
export const environment = {
  production: true,
  httpUrl: "http://localhost:100/jobsnearapi/public",
  firebase:{
    apiKey: "AIzaSyCzKQKkzkvMf9oQyLCnRwmdnn9Kwbmw_Ek",
    authDomain: "jobznear.firebaseapp.com",
    databaseURL: "https://jobznear.firebaseio.com",
    projectId: "jobznear",
    storageBucket: "jobznear.appspot.com",
    messagingSenderId: "897938329779"
  },
  
  stripeKey: "pk_live_aEhCpV0DvZ6b08V0RbShBEoJ",

  headers: new HttpHeaders({
    
    "Content-Type": "application/json",
    "Authorization": "Basic " + btoa("careers@mednoc.com:vcP*#S9uKy&")
   
  }),
  rawFormHeader: new HttpHeaders({
    "Authorization": "Basic " + btoa("careers@mednoc.com:vcP*#S9uKy&")
  }),
};
