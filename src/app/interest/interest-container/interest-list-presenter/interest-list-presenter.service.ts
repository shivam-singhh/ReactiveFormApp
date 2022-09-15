import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterestListPresenterService {

  public userId: Subject<number>;
  public userId$: Observable<number>;

  constructor() { 
    this.userId = new Subject();
    this.userId$ = new Observable();

    this.userId$ = this.userId.asObservable();
  }

  public deleteUser(id: number) {
    this.userId.next(id);
  }

  // /**
  //  * get filtered list based on search term
  //  * @param userList user list
  //  * @param searchItem search term
  //  * @returns filtered list
  //  */
  //  public getFilteredList(userList: Interest[], searchItem: string): Interest[] {
  //   return userList?.filter((user: Interest) => {
  //     if (
  //       user.id?.toString().includes(searchItem) ||
  //       user.fullname?.toLowerCase().includes(searchItem) ||
  //       user.email?.toLowerCase().includes(searchItem) ||
  //       user.gender?.toLowerCase().includes(searchItem)
  //     ) {
  //       return user;
  //     }
  //     return false;
  //   });
  // }
}
