import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Busdata from '../models/busdata';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  document: AngularFirestoreCollection<Busdata>;

  constructor(private db: AngularFirestore) {
    this.document = db.collection('/Bus Static Locations');
  }

  getBusdata() {
    return this.document;
  }
  
}
