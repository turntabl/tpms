import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";

import { MatTableDataSource } from "@angular/material/table";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { ProjectInterface } from "src/app/screens/project-interface";

export interface PeriodicElement {
  title: string;
  description: string;
  startdate: string;
  enddate: string;
  duration: number;
  devno: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: "Bug fix",
    description: "Lorem ipsium",
    startdate: "12.01.18",
    enddate: "12.01.18",
    duration: 3,
    devno: 2
  },
  {
    title: "Data",
    description: "Lorem ipsium",
    startdate: "21.04.19",
    enddate: "12.01.18",
    duration: 1,
    devno: 7
  },
  {
    title: "Integration",
    description: "Lorem ipsium",
    startdate: "13.1.17",
    enddate: "12.01.18",
    duration: 5,
    devno: 4
  },
  {
    title: "Web Services",
    description: "Lorem ipsium",
    startdate: "3.09.17",
    enddate: "12.01.18",
    duration: 2,
    devno: 1
  },
  {
    title: "Database",
    description: "Lorem ipsium",
    startdate: "12.01.18",
    enddate: "12.01.18",
    duration: 4,
    devno: 2
  },
  {
    title: "Testing",
    description: "Lorem ipsium",
    startdate: "13.1.17",
    enddate: "12.01.18",
    duration: 8,
    devno: 6
  },
  {
    title: "API",
    description: "Lorem ipsium",
    startdate: "3.09.17",
    enddate: "12.01.18",
    duration: 6,
    devno: 2
  },
  {
    title: "Code",
    description: "Lorem ipsium",
    startdate: "13.1.17",
    enddate: "12.01.18",
    duration: 1,
    devno: 3
  },
  {
    title: "Meeting",
    description: "Lorem ipsium",
    startdate: "3.09.17",
    enddate: "12.01.18",
    duration: 1,
    devno: 9
  },
  {
    title: "Finance",
    description: "Lorem ipsium",
    startdate: "12.01.18",
    enddate: "12.01.18",
    duration: 9,
    devno: 8
  }
];

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  projectForm = new FormGroup({
    description: new FormControl(""),
    project_id: new FormControl(""),
    title: new FormControl(""),
    startdate: new FormControl(""),
    enddate: new FormControl(""),
    devno: new FormControl("")
  });

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

  displayedColumns: string[] = [
    "title",
    "description",
    "startdate",
    "enddate",
    "duration",
    "devno"
  ];

  clone = new MatTableDataSource(ELEMENT_DATA)
  dataSource = this.clone;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.data.push({
      title: "Christy project",
      description: "HAhah",
      startdate: "12.01.18",
      enddate: "12.01.18",
      duration: 31,
      devno: 29
    });
  }

  onSubmit() {
    // this.ProjectService
    //   .addNewProject(this.projectForm.value)
    //   .subscribe(client=>console.log(client));
    alert(JSON.stringify(this.projectForm.value));
  }
  addme() {
    this.dataSource.data.push({
      title: "Christy project",
      description: "HAhah",
      startdate: "12.01.18",
      enddate: "12.01.18",
      duration: 31,
      devno: 29
    });
  }

  // devs = [
  //   { id: 1, name: "Christy", desk: "Desk 1" },
  //   { id: 2, name: "Bill", desk: "Desk 1" },
  //   { id: 3, name: "Francis", desk: "Desk 1" }
  // ];
}
