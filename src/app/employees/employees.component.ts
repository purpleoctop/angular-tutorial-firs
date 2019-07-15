import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { map } from 'rxjs/operators';
import {
  animate,
  trigger,
  state,
  style,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [
    trigger('load', [
      state('start', style({
        background: 'black'
      })),
      state('end', style({
        background: 'white'
      })),
      transition('* => *', animate('2s'))
    ])
  ]
})
export class EmployeesComponent implements OnInit {
  employees$;
  itemsPerPage = 15;
  pages;
  size;
  tempArray = [];
  myChunk;
  page = [];
  currPage = 1;
  data = true;
  constructor(
    private employeesService: EmployeesService

  ) {

  }

  ngOnInit() {

    this.employeesService.getEmployees().subscribe(result => {
      this.size = result.length;
      this.pages = Math.ceil(this.size / this.itemsPerPage);
      for (let i = 1; i <= (this.pages - 1); i++) {
        this.page.push(i);
      }
      for (let i = 0; i <= (this.size); i += this.itemsPerPage) {
        this.myChunk = this.employeesService.getEmployees()
          .pipe(map(res => res.slice(i, i + this.itemsPerPage)));
        this.tempArray.push(this.myChunk);
      }
    });
  }

  getPage(x) {
    this.currPage = x;
    return this.currPage;
  }



}


