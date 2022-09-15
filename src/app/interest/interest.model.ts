/** Interest Model */
export class Interest {
    public id: number;
    public fullname: string;
    public email: string;
    public gender: string;
    public interest: string;
    constructor(
      id: number,
      fullname: string,
      email: string,
      gender: string,
      interest: string
    ) {
      this.id = id;
      this.fullname = fullname;
      this.email = email;
      this.gender = gender;
      this.interest = interest
    }
  }
  
  /** Interest Form Model */
  export class InterestForm {
    public fullname: string;
    public email: string;
    public gender: string;
    public interest: string;
    constructor(
      fullname: string,
      email: string,
      gender: string,
      interest: string
    ) {
      this.fullname = fullname;
      this.email = email;
      this.gender = gender;
      this.interest = interest
    }
  }
  
  /** Interest Edit Details Model */
  export class InterestEditDetails {
    public interestForm: InterestForm;
    public id: number;
    constructor(
      interestForm: InterestForm,
      id: number
    ) {
      this.interestForm = interestForm;
      this.id = id;
    }
  }