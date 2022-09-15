import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Interest, InterestForm } from '../../interest.model';
import { InterestFormPresenterService } from '../interest-form-presenter/interest-form-presenter.service';

import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-interest-form-presentation',
  templateUrl: './interest-form-presentation.component.html',
  styleUrls: ['./interest-form-presentation.component.css'],
  viewProviders: [InterestFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InterestFormPresentationComponent implements OnInit {

  /** setter for user data */
  @Input() public set userData(value: Interest) {
    if (value) {
      this.formTitle = 'Edit User';
      this._userData = value;
      this.userForm.patchValue(value);
    }
  }
  public get userData(): Interest {
    return this._userData;
  }

  /** emitter to emit cancel event */
  @Output() public cancel: EventEmitter<Date>;
  /** emitter to emit add user data */
  @Output() public addUser: EventEmitter<InterestForm>;
  /** emitter to emit edit user data */
  @Output() public editUser: EventEmitter<InterestForm>;
  
  /** ttile of form */
  public formTitle: string;
  /** user form */
  public userForm: FormGroup;
  /** boolean to check if form has been submitted */
  public isFormSubmitted: boolean;

  public interest: any = [
    {
      id: 1,
      interestType: 'Angular',
      interestValue: 'Angular'
    }, {
      id: 2,
      interestType: 'React',
      interestValue: 'React'
    }, {
      id: 3,
      interestType: 'Vue',
      interestValue: 'Vue'
    }, {
      id: 4,
      interestType: 'Flutter',
      interestValue: 'Flutter'
    }, {
      id: 5,
      interestType: 'Node.js',
      interestValue: 'Node.js'
    }, {
      id: 6,
      interestType: '.Net',
      interestValue: '.Net'
    }
  ];

  /** user data */
  private _userData!: Interest;

  constructor(
    private interestFormPresenterService: InterestFormPresenterService
    ) { 
      this.cancel = new EventEmitter();
      this.addUser = new EventEmitter();
      this.editUser = new EventEmitter();
      this.formTitle = 'Add User';
      this.userForm = this.interestFormPresenterService.buildForm();
      this.isFormSubmitted = false;
    }

  ngOnInit(): void {
    this.interestFormPresenterService.userFormData$.subscribe((res: InterestForm)=> {
      if (this.formTitle === 'Add User') {
        this.addUser.emit(res);
      } else {
        this.editUser.emit(res);
      }
    })
  }

  /** on submit button click */
  public onSubmit() {
    this.isFormSubmitted = true;
    this.userForm.value.fullname = this.userForm.value.fullname.trim();
    this.interestFormPresenterService.onFormSubmit(this.userForm);
  }

  /** on cancel button click */
  public onCancel() {
    this.cancel.emit(new Date());
  }

  get userFormControl(){
    return this.userForm.controls;
  }
}
