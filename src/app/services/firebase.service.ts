import { Injectable } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection,  AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  constructor(private afStore: AngularFirestore) { 
   console.log( this.afStore.collection('messages').valueChanges());
  }

}
