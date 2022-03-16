import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/constants';
import { IStudentAddress } from 'src/app/models/student.model';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss'],
})
export class AddressInfoComponent implements OnInit {
  readonly ERROR_MSGS = Constants.ERROR_MESSAGES;
  addressInfoForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.addressInfoForm = new FormGroup({
      addr_line: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      additional_addr_line: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      pincode: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      city: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      state: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
    });
  }

  /**
   * Returns form value only if no error
   */
  get formValue(): IStudentAddress {
    if (this.isFormValid) {
      return this.addressInfoForm.value;
    }
  }

  /**
   * Checks whether form is valid or not
   */
  get isFormValid(): boolean {
    return this.addressInfoForm.valid;
  }
}
