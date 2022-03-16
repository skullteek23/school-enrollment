import { Component, ViewChild } from '@angular/core';
import { IStudentBasic, IStudentAddress } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';
import { AddressInfoComponent } from '../address-info/address-info.component';
import { BasicInfoComponent } from '../basic-info/basic-info.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent {
  studentBasicInfo: IStudentBasic;
  studentAddressInfo: IStudentAddress;
  studentInfo$: any[] = [];

  @ViewChild(BasicInfoComponent) basicInfoComponent: BasicInfoComponent;
  @ViewChild(AddressInfoComponent) addressInfoComponent: AddressInfoComponent;

  constructor(private studentService: StudentService) {
    // For displaying student info
    this.studentInfo$ = this.studentService.fetchAllStudentInfo();
  }

  get disableButton(): boolean {
    if (!this.addressInfoComponent || !this.basicInfoComponent) {
      return false;
    }
    return (
      !this.addressInfoComponent.isFormValid ||
      !this.basicInfoComponent.isFormValid
    );
  }

  /**
   * Submits the form
   */
  onSubmit(): void {
    if (
      !this.addressInfoComponent.isFormValid ||
      !this.basicInfoComponent.isFormValid
    ) {
      return;
    }
    this.studentBasicInfo = this.basicInfoComponent.formValue;
    this.studentAddressInfo = this.addressInfoComponent.formValue;
    this.studentService.saveInfoToServer(
      this.studentBasicInfo,
      this.studentAddressInfo
    );
    this.basicInfoComponent.basicInfoForm.reset();
    this.addressInfoComponent.addressInfoForm.reset();
  }
}
