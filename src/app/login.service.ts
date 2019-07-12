import { Injectable } from '@angular/core';
import { Users } from './users'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  allowed
  constructor() { }

accessUsers(){
  this.allowed=true;
}

blockUsers(){
  this.allowed=false;
  alert("Please provide valid email or password")
}

isUser(){
  return this.allowed
}

}
