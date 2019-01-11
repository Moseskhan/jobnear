import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnumsService {

  constructor() { }
  getJobType(jobType){
   if(jobType==="1"){
      return "Shift"
   }else if(jobType==="2"){
     return "Full Time"
   }else if(jobType==="3"){
    return "Part Time"
   }else if(jobType==4){

   }
   else{
     return "no job type"
   }
  }
}
