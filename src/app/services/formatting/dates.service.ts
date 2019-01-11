import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  constructor() { }

  GetDateFormat(date) {
    var month = (date.getMonth() + 1).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '/' + day + '/' + date.getFullYear();
}
}
