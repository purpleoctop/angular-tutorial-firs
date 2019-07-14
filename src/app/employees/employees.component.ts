import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
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
  constructor(
    private employeesService: EmployeesService

  ) {

  }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(result => {
      this.size = result.length;
      this.pages = Math.ceil(this.size / this.itemsPerPage);
      for (let i = 1; i <= this.pages - 2; i++) {
        this.page.push(i);
      }
      for (let i = 0; i < this.size - this.itemsPerPage; i += this.itemsPerPage) {
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


