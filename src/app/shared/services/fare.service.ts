import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import Fare from '../models/fare';

@Injectable({
  providedIn: 'root'
})
export class FareService {

  private dbPath = '/Bus Fare';

  document: AngularFirestoreCollection<Fare>;

  constructor(private db: AngularFirestore) {
    this.document = db.collection('/Bus Fare');
  }

  getFare() {
    return this.document;
  }
  updateFare(fare: Fare): Promise<void> {
    return this.document.doc(fare.bus_type).set({ ...fare });;
  }
}  