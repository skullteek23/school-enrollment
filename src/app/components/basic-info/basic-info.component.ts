import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/constants';
import { IStudentBasic } from 'src/app/models/student.model';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  readonly ERROR_MSGS = Constants.ERROR_MESSAGES;
  basicInfoForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.basicInfoForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      mobile: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      dob: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      gen: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
    });
  }

  /**
   * Returns form value only if no error
   */
  get formValue(): IStudentBasic {
    if (this.isFormValid) {
      return this.basicInfoForm.value;
    }
  }

  /**
   * Checks whether form is valid or not
   */
  get isFormValid(): boolean {
    return this.basicInfoForm.valid;
  }
}
