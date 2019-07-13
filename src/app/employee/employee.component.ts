import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee$;
  employee;
  employeeId;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private routerState: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.routerState.paramMap.subscribe((params) => {
    this.employeeId = +params.get('id');
    this.employee$ = this.employeeService.getEmployee(this.employeeId).subscribe(emp => this.employee$ = emp);
  });
  }

  remove() {
    this.employeeService.deleteEmployee(this.employeeId)
    .subscribe(emp => this.router.navigate(['/employees']));
  }

}
