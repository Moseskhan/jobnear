import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { map, filter, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class IndustryCategoriesService {

  constructor(private firestore: AngularFirestore) { }

  getMajorCategories(){
    return this.firestore.collection('industries').snapshotChanges().pipe(

      map(actions => {       
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data};
        });
      }));
  }
}
