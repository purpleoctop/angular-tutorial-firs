import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
users=[1,2,3];
  constructor() { }

  addUser(user){
    this.users.push(user)
    return this.users
  }
}
