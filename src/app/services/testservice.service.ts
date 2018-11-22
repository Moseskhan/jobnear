
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';

import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
items:Observable<any[]>;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
   
  }
  addItems(){
    return this.firestore.collection('items').add({name: "steve muirui", addresss: "wildflower lane"})
  }
  getItems(){
    return this.firestore.collection('items').valueChanges();
  }
  getSpecificItem(name){
 return this.firestore.collection('items',ref => ref.where('name', '==', name)).valueChanges();
  }
  getitemwithID(){
    
return this.firestore.collection('items', ref=>ref.where("name","==","kanja")).snapshotChanges().pipe(

map(actions => {       
  return actions.map(a => {
    const data = a.payload.doc.data();
    const id = a.payload.doc.id;
    return { id, data};
  });
}));
  }
  
}
