import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service"
import {LoginService} from '../login.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users=[];
loggedUser
  constructor(
    private usersService: UsersService,
    private loginService: LoginService
  ) {
   }

  ngOnInit() {
    this.users=this.usersService.users
    this.loggedUser=this.usersService.loggedUser
  }

  log_out(){
    return this.usersService.logout();
  }

  delete(user){
    this.usersService.remove(user);
    this.users=this.usersService.updatedUsers;
  }
 

}
