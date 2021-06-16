import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import Schedule from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

   document: AngularFirestoreCollection<Schedule>;

  constructor(private db: AngularFirestore) {
    this.document = db.collection('/Schedule Suggest');
  }

  getSchedule() {
    return this.document;
  }
}
