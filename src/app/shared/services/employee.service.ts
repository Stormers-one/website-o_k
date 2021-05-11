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
    return this.document;
  }
  registerEmployee(employee: Employee) {
    return this.document.add({ ...employee });
  }
  updateEmployee(id: string, employee: Employee): Promise<void> {
    return this.document.doc(id).update(employee);
  }
  removeEmployee(id: string): Promise<void> {
    return this.document.doc(id).delete();
  }
}
