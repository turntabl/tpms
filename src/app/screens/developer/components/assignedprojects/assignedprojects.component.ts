import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { ProjectInterface } from "src/app/screens/project-interface";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Projectlogging } from "src/app/projectlogging";
import { ProjectloggingService } from "src/app/projectlogging.service";

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
    title: "Web Services",
    description: "Lorem ipsium",
    startdate: "3.09.17",
    enddate: "12.01.18",
    duration: 6,
    devno: 2
  }
  // { title: 'Volunteering', description:'Lorem ipsium',startdate: '13.1.17', enddate: '12.01.18', duration:1,devno:3},
  // { title: 'Sick', description:'Lorem ipsium',startdate: '3.09.17', enddate:'12.01.18', duration:1,devno:9},
  // { title: 'Vacation', description:'Lorem ipsium',startdate: '12.01.18', enddate:'12.01.18', duration:9,devno:8}
];

@Component({
  selector: "app-assignedprojects",
  templateUrl: "./assignedprojects.component.html",
  styleUrls: ["./assignedprojects.component.css"]
})
export class AssignedprojectsComponent implements OnInit {
  incomingProject = [{ project_id: 1, project_title: "React" }];
  showAlert: boolean = false;
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
  hourform = new FormGroup({
    project_hours: new FormControl(""),
    volunteering_hours: new FormControl(""),
    vacation: new FormControl(""),
    sick: new FormControl(""),
    emp_id: new FormControl(localStorage.getItem("empId")),
    project_id: new FormControl(this.incomingProject[0].project_id),
    date: new FormControl(new Date().toISOString().slice(0, 10))
  });
  constructor(private plog: ProjectloggingService) {}
  newProject = "";
  displayedColumns: string[] = [
    "Web Services",
    "Volunteering",
    "Sick",
    "Vacation"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dummy = [];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getaddhours() {
    this.plog.getaddhours().subscribe(e => console.log(e));
    // this.projectlogging
    // .getaddhours()
    // .subscribe(data=>this.dummy=data);
  }
  ngOnInit() {}

  logsuccess() {}
  onSubmit() {
    this.plog.loghours(this.hourform.value).subscribe(response => {
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
      this.showAlert = true;
    });
    // alert(JSON.stringify(this.hourform.value));
    // this.ProjectService
    // .addNewProject(this.projectForm.value)
    // .subscribe(client=>console.log(client));
  }
}
