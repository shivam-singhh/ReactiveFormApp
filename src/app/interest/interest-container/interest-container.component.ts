import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Interest, InterestEditDetails, InterestForm } from '../interest.model';
import { InterestService } from '../interest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-interest-container',
  templateUrl: './interest-container.component.html',
  styleUrls: ['./interest-container.component.css']
})
export class InterestContainerComponent implements OnInit {

  /** user list data */
  public userList$: Observable<Interest[]>
  public pageNo: number;

  constructor(
    private interestService: InterestService,
    private toastr: ToastrService
  ) { 
    this.userList$ = new Observable();
    this.pageNo = 1
  }

  ngOnInit(): void {
    this.userList$ = this.interestService.getUsers(this.pageNo);
  }

  public deleteUser(id: number) {
    this.interestService.deleteUser(id).subscribe(
      (res) => {
        this.toastr.success('User Deleted Successfully');
        this.userList$ = this.interestService.getUsers(this.pageNo);
      }
    )
  }

  public addUser(data: InterestForm) {
    this.interestService.addUser(data).subscribe(
      (res) => {
        this.toastr.success('User Added Successfully');
        this.userList$ = this.interestService.getUsers(this.pageNo);
      }
    )
  }

  public editUser(data: InterestEditDetails) {
    this.interestService.editUser(data.interestForm, data.id).subscribe(
      (res) => {
        this.toastr.success('User Edited Successfully');
        this.userList$ = this.interestService.getUsers(this.pageNo);
      }
    )
  }

  public searchUser(key: any) {
    this.userList$ = this.interestService.searchUser(key, this.pageNo);
  }

  public nextPage() {
    this.pageNo++;
    this.userList$ = this.interestService.getUsers(this.pageNo);
  }

  public prevPage() {
    this.pageNo--
    this.userList$ = this.interestService.getUsers(this.pageNo);
  }

}
