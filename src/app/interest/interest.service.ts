import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interest, InterestForm } from './interest.model';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * api to get list of users
   * @returns user list as observable
   * * @param pageNo page number
   */
   getUsers(pageNo: number): Observable<Interest[]> {
    let url = `http://localhost:3000/users?_page=${pageNo}`;
    return this.http.get<Interest[]>(url);
  }

  /**
   * api to delete user
   * @param id user id
   */
   deleteUser(id: number) {
    let url = `http://localhost:3000/users/${id}`;
    return this.http.delete(url);
  }

  /**
   * api to add user
   * @param postObj object to post on server
   */
   addUser(postObj: InterestForm): Observable<any> {
    let url = 'http://localhost:3000/users';
    return this.http.post<any>(url, postObj);
  }

  /**
   * api to edit user
   * @param postObj object to post on server
   * @param id user id
   */
   editUser(postObj: InterestForm, id: number): Observable<any> {
    let url = `http://localhost:3000/users/${id}`;
    return this.http.put<any>(url, postObj);
  }

  /**
   * api to search user
   * @param key search key
   */
   searchUser(key: string, pageNo: number): Observable<Interest[]> {
    let url = `http://localhost:3000/users?q=${key}&_page=${pageNo}`;
    return this.http.get<Interest[]>(url);
  }
}
