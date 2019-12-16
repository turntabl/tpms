import { Component, OnInit } from "@angular/core";
import { ProjectInterface } from "src/app/screens/project-interface";

@Component({
  selector: "app-assignedprojects",
  templateUrl: "./assignedprojects.component.html",
  styleUrls: ["./assignedprojects.component.css"]
})
export class AssignedprojectsComponent implements OnInit {
  private assignedProjects: Array<ProjectInterface> = [
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

  constructor() {}

  ngOnInit() {}

  logsuccess(){
    
  }
}
