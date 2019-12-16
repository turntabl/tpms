import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  title: string;
  date: string;
  hours: number;
  project: string;
  activity: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { title: 'Bug fix', date: '12.01.18', hours: 2, project:'API',activity:'Project'},
  { title: 'Chorkor Basic School', date: '21.04.19', hours: 3, project:'n/a',activity:'Volunteering'},
  { title: 'Integration', date: '13.1.17', hours: 6, project:'Concurrency',activity:'Project'},
  { title: 'Achimota SHS', date: '3.09.17', hours:6, project:'n/a',activity:'Volunteering'},
  { title: 'Database', date: '12.01.18', hours: 4, project:'Data',activity:'Project'},
  { title: 'Testing', date: '13.1.17', hours: 4, project:'Web',activity:'Project'},
  { title: 'API', date: '3.09.17', hours: 5, project:'Threads',activity:'Project'},
  { title: 'Global Code', date: '13.1.17', hours: 7, project:'n/a',activity:'Volunteering'},
  { title: 'Meeting', date: '3.09.17', hours:2, project:'Pattern',activity:'Project'},
  { title: 'Finance', date: '12.01.18', hours: 4, project:'Microservices',activity:'Project'}
];

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  displayedColumns: string[] = ['project','activity','title','date','hours'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor() { }

  ngOnInit() {
  }

}
