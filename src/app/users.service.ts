import { Injectable } from '@angular/core';
import {LoginService } from './login.service';
import { Users } from './users'


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users=[];
  loggedUser;
  updatedUsers;
  constructor(
    private loginService : LoginService
  ) {     
    this.loggedUser=this.loginService.loggedUser;
    this.users=Users
  }


logout(){
  this.loginService.allowed=false;
}

remove(user){
  this.updatedUsers=this.users.filter(user => user!==this.loggedUser);
}


}
