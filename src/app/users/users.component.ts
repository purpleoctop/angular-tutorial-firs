import { Component, OnInit } from '@angular/core';
import { Users } from '../users'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users=[];
  constructor() { }

  ngOnInit() {
    this.users=Users;
  }

}
