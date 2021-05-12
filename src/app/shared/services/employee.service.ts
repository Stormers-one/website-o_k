import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import Employee from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private dbPath = '/Employee Details';

  document: AngularFirestoreCollection<Employee>;

  constructor(private db: AngularFirestore) {
    this.document = db.collection('Employee Details');
  }

  getEmployees() {
    return this.document.snapshotChanges();
  }
  registerEmployee(employee: Employee) {
    return this.document.doc(employee.email).set({ ...employee });
  }
  updateEmployee(employee: Employee): Promise<void> {
    return this.document.doc(employee.email).update(employee);
  }
  removeEmployee(employee: Employee): Promise<void> {
    return this.document.doc(employee.email).delete();
  }
}
