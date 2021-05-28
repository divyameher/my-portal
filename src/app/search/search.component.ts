import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { IEmployee } from '../shared/domain/IEmployee';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  employees: IEmployee[];
  isChecked: boolean = false;
  employeesResponse: IEmployee[];
  constructor() {
    this.employeesResponse = [
      {
        profilePic: '../../assets/images/employees/chandler_bing.PNG',
        name: 'Chandler Bing',
        designation: 'Sr.UI Developer',
        ratings: 3.5,
        experience: 5.8,
        dateOfJoining: 2017,
        team: 'OCBC Singapore',
        manager: 'Janice',
        mobileNo: '7406559241',
        email: 'cbing@infrrd.ai',
        location: 'Bangalore'
      },
      {
        profilePic: '../../assets/images/employees/monica_geller.PNG',
        name: 'Monica Geller',
        designation: 'Sr.UI Developer',
        ratings: 4,
        experience: 4,
        dateOfJoining: 2018,
        team: 'IDC',
        manager: 'Janice',
        mobileNo: '7406559241',
        email: 'mgeller@infrrd.ai',
        location: 'Bangalore'
      },
      {
        profilePic: '../../assets/images/employees/phoebe_buffay.PNG',
        name: 'Phoebe Buffay',
        designation: 'Sr.UI Developer',
        ratings: 5,
        experience: 2,
        dateOfJoining: 2019,
        team: 'Radian',
        manager: 'Janice',
        mobileNo: '7406588842',
        email: 'pbuffay@infrrd.ai',
        location: 'Bangalore'
      },
      {
        profilePic: '../../assets/images/employees/rachel_green.PNG',
        name: 'Rachel Green',
        designation: 'Sr.UI Developer',
        ratings: 3,
        experience: 2,
        dateOfJoining: 2019,
        team: 'Rustify',
        manager: 'Janice',
        mobileNo: '7406599941',
        email: 'rgreen@infrrd.ai',
        location: 'Bangalore'
      },
      {
        profilePic: '../../assets/images/employees/ross_geller.PNG',
        name: 'Ross Geller',
        designation: 'Sr.UI Developer',
        ratings: 4,
        experience: 5,
        dateOfJoining: 2019,
        team: 'OCBC Singapore',
        manager: 'Janice',
        mobileNo: '7406449941',
        email: 'rgeller@infrrd.ai',
        location: 'Bangalore'
      },
      {
        profilePic: '../../assets/images/employees/sheldon_cooper.PNG',
        name: 'Sheldon Cooper',
        designation: 'Sr.UI Developer',
        ratings: 5,
        experience: 7,
        dateOfJoining: 2009,
        team: 'OCBC Singapore',
        manager: 'Penny',
        mobileNo: '7555449941',
        email: 'scooper@infrrd.ai',
        location: 'Pune'
      },
      {
        profilePic: '../../assets/images/employees/raj.PNG',
        name: 'Raj',
        designation: 'Sr.UI Developer',
        ratings: 2.5,
        experience: 7,
        dateOfJoining: 2009,
        team: 'OCBC Singapore',
        manager: 'Penny',
        mobileNo: '7555449941',
        email: 'raj@infrrd.ai',
        location: 'Pune'
      }
    ]
    this.employees = this.employeesResponse;
  }

  ngOnInit(): void {
  }

  onClickOfCheckbox(event: boolean) {
    this.employees = this.employeesResponse
    if (event) {
      this.employees = _.filter(this.employeesResponse, { location: 'Bangalore' })
    }

  }

}
