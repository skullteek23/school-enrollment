export interface IStudentBasic {
  name: string;
  email: string;
  mobile: number;
  dob: Date;
  gen: string;
}

export interface IStudentAddress {
  addr_line: string;
  additional_addr_line: string;
  pincode: number;
  city: string;
  state: string;
}
