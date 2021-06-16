import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import BusStop from '../models/busStop';

@Injectable({
  providedIn: 'root'
})
export class BusStopsService {
  document: AngularFirestoreCollection<BusStop>;
  constructor(private db: AngularFirestore) {
    this.document = db.collection('Bus Stops');
  }
  getStops() {
    return this.document;
  }
}
