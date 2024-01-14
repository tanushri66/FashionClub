import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employee: any = [
    {
      id: 1,
      name: 'rekha',
      salary: 60000,
      gender: 'female'
    },
    {
      id: 2,
      name: 'om',
      salary: 80000,
      gender: 'male'
    },
    {
      id: 3,
      name: 'tanmay',
      salary: 90000,
      gender: 'male'
    },

  ]
}
