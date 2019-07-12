import { Injectable } from '@angular/core';
import {LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private loginService : LoginService
  ) { }

logout(){
  this.loginService.allowed=false;
}


}
