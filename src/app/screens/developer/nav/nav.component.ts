import { Component, OnInit } from "@angular/core";
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  userName: string = "";
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.developerName.subscribe(
      employeeName => (this.userName = employeeName)
    );
    this.userName = localStorage.getItem("username");
}
}
