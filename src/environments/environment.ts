import { HttpHeaders } from "@angular/common/http";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
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
