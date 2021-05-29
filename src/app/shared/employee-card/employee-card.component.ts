import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from '../domain/IEmployee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employee: IEmployee;
}
