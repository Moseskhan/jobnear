import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }



alertSuccess(message){
  this.snackbar.open(message,null, {
    duration: 2000,
    //verticalPosition: 'bottom',
    //horizontalPosition:"right",
    panelClass: ['blue-snackbar']
  })
}
alertError(message){
  this.snackbar.open(message,null, {
    duration: 2000,
    
    panelClass: ['error-snackbar']
  })
}
}
