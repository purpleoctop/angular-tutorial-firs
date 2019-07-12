import { Injectable } from '@angular/core';
import { Users } from './users'

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  allowed=false;
  check;
  loggedUser;
  constructor() { }

  checkUser(mail, password){ 
    for(let user of Users) {
     this.check = ((user.mail===mail)&&(user.password===password)) ? true: false;
     if (this.check){
       this.loggedUser=user;
       break;
     }
   }
   return this.check;
}

accessUsers(){
  this.allowed=true;
}

blockUsers(){
  this.allowed=false;
  alert("Please provide valid email or password");
}

isUser(){
  return this.allowed;
}

}
