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
import { ProjectService } from "src/app/project.service";

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
];

@Component({
  selector: "app-assignedprojects",
  templateUrl: "./assignedprojects.component.html",
  styleUrls: ["./assignedprojects.component.css"]
})
export class AssignedprojectsComponent implements OnInit {
  incomingProject = { project_id: 0, title: "" };
  showAlert: boolean = false;

  hourform = new FormGroup({
    project_hours: new FormControl(""),
    volunteering_hours: new FormControl(""),
    vacation: new FormControl(""),
    sick: new FormControl(""),
    emp_id: new FormControl(localStorage.getItem("empId")),
    project_id: new FormControl(this.incomingProject.project_id),
    date: new FormControl(new Date().toISOString().slice(0, 10))
  });
  constructor(
    private plog: ProjectloggingService,
    private projectService: ProjectService
  ) {}
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

  ngOnInit() {
    this.projectService
      .getAssignedProject(localStorage.getItem("empId"))
      .subscribe(response => {
        this.incomingProject.project_id = response.project_id;
        this.incomingProject.title = response.title;
      });
  }

  logsuccess() {}
  onSubmit() {
    // Object.keys(this.hourform.value).forEach(entry => {
    //   console.log(entry, this.hourform.value[entry]);
    //   if (this.hourform.value[entry] == "") {
    //     console.log("Enter something");
    //   }
    // });
    // if (this.hourform.value.sick == "" || this.hourform.value) {

    // } else {

    // }
    this.plog.loghours(this.hourform.value).subscribe(response => {
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
      this.showAlert = true;
    });
    // alert(this.hourform.value.volunteering_hours);
    // this.ProjectService
    // .addNewProject(this.projectForm.value)
    // .subscribe(client=>console.log(client));
  }
}
