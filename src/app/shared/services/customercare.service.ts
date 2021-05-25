import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import Customercare from '../models/customercare';

@Injectable({
  providedIn: 'root'
})
export class CustomercareService {

  private dbPath = '/Route Feedback';

  document: AngularFirestoreCollection<Customercare>;

  constructor(private db: AngularFirestore) {
    this.document = db.collection('/Route Feedback');
  }
  getRoutes() {
    return this.document.snapshotChanges().forEach((a) => { a.map(data => { const dat=data.payload.doc.id; return{ dat }}) });
  }
  getFeedbackPassenger(route: string) {
    return this.document.doc(route).collection("/Passenger Complaints");
  }
  getFeedbackDriverConductor(route: string) {
    return this.document.doc(route).collection("/DriverConductor Complaints");
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
