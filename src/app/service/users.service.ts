import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import * as data from '../../assets/mock-data/users2.json';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersData = new BehaviorSubject<User>(data);

  constructor() { }

  get users(): Observable<User> {
    return this.usersData.asObservable();
  }

}
