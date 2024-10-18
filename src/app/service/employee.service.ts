import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesCollection = collection(this.firestore, 'employees');

  constructor(private firestore: Firestore) {}

  getEmployees(): Observable<Employee[]> {
    return collectionData(this.employeesCollection, { idField: 'id' }) as Observable<Employee[]>;
  }

  addEmployee(employee: Employee): Promise<void> {
    return addDoc(this.employeesCollection, { 
      ...employee,
      dateOfBirth: employee.dateOfBirth.toISOString() 
    }).then(() => {
      console.log('Employee added successfully');
    }).catch((error) => {
      console.error('Error adding employee: ', error);
    });
  }
}
