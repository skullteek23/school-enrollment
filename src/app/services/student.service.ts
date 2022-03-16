import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudentAddress, IStudentBasic } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  saveInfoToServer(basicInfo: IStudentBasic, address: IStudentAddress): void {
    // Backend API call here
    // Show Message of success/failure.
  }

  fetchAllStudentInfo(): any {
    // Backend API call here
    // Show Message of success/failure.
  }
}
