import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { InterestForm } from '../../interest.model';

@Injectable({
  providedIn: 'root'
})
export class InterestFormPresenterService {

  public userFormData: Subject<InterestForm>;
  public userFormData$: Observable<InterestForm>;

  constructor(
    private fb: FormBuilder
  ) { 
    this.userFormData = new Subject();
    this.userFormData$ = new Observable();

    this.userFormData$ = this.userFormData.asObservable();
  }

  public buildForm() {
    return this.fb.group({
      fullname: [null, [Validators.required]],
      email: [null, [Validators.required]],
      interest: [null, [Validators.required]],
      gender: [null, [Validators.required]]
    })
  }

  public onFormSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }

    this.userFormData.next(form.value);
  }
}
