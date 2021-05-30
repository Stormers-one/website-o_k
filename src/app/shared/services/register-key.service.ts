import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegisterKeyService {
  document: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.document = db.collection('Service Keys');
  }

  async checkKeyValidity(key: string) {
    const doc = await this.document.doc(key).get().toPromise()
    return doc.exists
  }
}
