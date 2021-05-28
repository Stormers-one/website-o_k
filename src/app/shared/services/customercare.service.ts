import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import Customercare from '../models/customercare';

@Injectable({
  providedIn: 'root'
})
export class CustomercareService {

  document: AngularFirestoreCollection<Customercare>;
  constructor(private db: AngularFirestore) {
    this.document = db.collection('Route Feedback');
  }
  getRoutes() {
    return this.document;
  }
  getFeedbackPassenger(route: string) {
    let ref = this.db.collection("Route Feedback").doc("101").collection("Passenger Complaints");
    let res;
    ref.snapshotChanges().subscribe(data => {
      data.map((a) => {
        res = a.payload.doc.data();
        return res;
      });
    });
    console.log(`Route ${res}`);
    return this.document.doc(route).collection("Passenger Complaints");
  }
  getFeedbackDriverConductor(route: string) {
    return this.document.doc(route).collection("DriverConductor Complaints");
  }

  // registerCustomercare(customercare : Customercare ) {
  //   return this.document.doc(customercare.user_id).set({ ...customercare });
  // }
  // updateEmployee(customercare : Customercare): Promise<void> {
  //   return this.document.doc(customercare.complain).update(customercare);
  // }
  // removeEmployee(customercare : Customercare): Promise<void> {
  //   return this.document.doc(employee.email).delete();
  // }
}
