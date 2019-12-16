import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  title: string;
  date: string;
  hours: number;
  project_id: number;
  emp_id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { title: 'Bug fix', date: '12.01.18', hours: 2, project_id:1,emp_id:1},
  { title: 'Chorkor Basic School', date: '21.04.19', hours: 3, project_id:2,emp_id:2},
  { title: 'Integration', date: '13.1.17', hours: 6, project_id:2,emp_id:1},
  { title: 'Achimota SHS', date: '3.09.17', hours:6, project_id:1,emp_id:2},
  { title: 'Database', date: '12.01.18', hours: 4, project_id:2,emp_id:1},
  { title: 'Testing', date: '13.1.17', hours: 4, project_id:1,emp_id:3},
  { title: 'API', date: '3.09.17', hours: 5, project_id:1,emp_id:2},
  { title: 'Global Code', date: '13.1.17', hours: 7, project_id:3,emp_id:1},
  { title: 'Meeting', date: '3.09.17', hours:2, project_id:2,emp_id:2},
  { title: 'Finance', date: '12.01.18', hours: 4, project_id:1,emp_id:3}
];

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  displayedColumns: string[] = ['project_id','emp_id','title','date','hours'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor() { }

  ngOnInit() {
  }

}
