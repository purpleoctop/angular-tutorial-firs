import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  animate,
  trigger,
  state,
  style,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  animations: [
    trigger('load', [
      state('start', style({
        background: 'black'
      })),
      state('end', style({
        background: 'white'
      })),
      transition('* => *', animate('2s', keyframes([
        style({backgroundColor : 'blue'}),
        style({backgroundColor : 'navy'}),
        style({backgroundColor : 'purple'}),
        style({backgroundColor : 'green'}),
        style({backgroundColor : 'yellow'}),
        style({backgroundColor : 'orange'}),
        style({backgroundColor : 'red'})
      ])))
    ])
  ]
})
export class EmployeeComponent implements OnInit {
  employee$;
  employee;
  employeeId;
  visible = false;
  show = true;
  data = true;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private routerState: ActivatedRoute,

  ) {

  }

  ngOnInit() {
    this.routerState.paramMap.subscribe((params) => {
      this.employeeId = +params.get('id');
      this.employee$ = this.employeeService.getEmployee(this.employeeId).subscribe(emp => {
        if (!emp) {
          this.router.navigate(['/Error']);
        }
        this.employee$ = emp;
        this.show = false;
      });
    });
  }

  remove() {
    this.employeeService.deleteEmployee(this.employeeId)
      .subscribe(emp => this.router.navigate(['/employees']));
  }


}
