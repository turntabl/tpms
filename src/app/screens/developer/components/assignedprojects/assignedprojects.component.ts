import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { ProjectInterface } from "src/app/screens/project-interface";


export interface PeriodicElement {
  title: string;
  description:string;
  startdate: string;
  enddate: string;
  duration: number;
  devno: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
 
  { title: 'Web Service', description:'Lorem ipsium',startdate: '3.09.17', enddate:'12.01.18', duration:6,devno:2},
  { title: 'Volunteering', description:'Lorem ipsium',startdate: '13.1.17', enddate: '12.01.18', duration:1,devno:3},
  { title: 'Sick', description:'Lorem ipsium',startdate: '3.09.17', enddate:'12.01.18', duration:1,devno:9},
  { title: 'Vacation', description:'Lorem ipsium',startdate: '12.01.18', enddate:'12.01.18', duration:9,devno:8}
];



@Component({
  selector: "app-assignedprojects",
  templateUrl: "./assignedprojects.component.html",
  styleUrls: ["./assignedprojects.component.css"]
})
export class AssignedprojectsComponent implements OnInit {
  assignedProjects: Array<ProjectInterface> = [
    {
      description: "Sample description",
      project_id: 1,
      title: "Tomato API in C#",
      startdate: new Date(),
      enddate: new Date(),
      dev: 1
    },
    {
      description: "Sample description",
      project_id: 10,
      title: "Heroku Pipelining",
      startdate: new Date(),
      enddate: new Date(),
      dev: 1
    }
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {}

  displayedColumns: string[] = ['title','description','startdate','enddate','duration','devno',];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() {
  }

  logsuccess() {}
  
}
