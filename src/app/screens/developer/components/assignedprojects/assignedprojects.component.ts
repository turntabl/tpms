import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  start: string;
  end: string;
  duration:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'API', weight: 1.0079, start:'12.01.19', end:'12.02.19', duration:5 },
  {position: 2, name: 'SQL', weight: 4.0026, start:'11.01.19', end:'12.02.19', duration:4},
  {position: 3, name: 'MongoDB', weight: 6.941,start:'10.01.19', end:'12.02.19', duration:3},
  {position: 4, name: 'Concurrency', weight: 9.0122, start:'12.01.19', end:'12.02.19', duration:2},
  {position: 5, name: 'Microservices', weight: 10.811, start:'12.01.19', end:'12.02.19', duration:5},
  {position: 6, name: 'Finance', weight: 12.0107, start:'12.01.19', end:'12.02.19', duration:5},
  {position: 7, name: 'Django', weight: 14.0067, start:'12.01.19', end:'12.02.19', duration:5},
  {position: 8, name: 'Spring', weight: 15.9994, start:'12.01.19', end:'12.02.19', duration:5},
  {position: 9, name: 'Java', weight: 18.9984, start:'12.01.19', end:'12.02.19', duration:5},
  {position: 10, name: 'Scala', weight: 20.1797, start:'12.01.19', end:'12.02.19', duration:5}
];


@Component({
  selector: 'app-assignedprojects',
  templateUrl: './assignedprojects.component.html',
  styleUrls: ['./assignedprojects.component.css']
})


export class AssignedprojectsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight','start','end','duration'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
