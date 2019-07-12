import { Component, OnInit } from '@angular/core';
import { Users } from '../users'
import { UsersService } from "../users.service"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users=[];
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.users=Users;
  }

  log_out(){
    return this.usersService.logout();
  }

}
