import { Component } from "@angular/core";
import { EmployeeService } from './services/employee.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "tpms";
  userName: String;
  constructor(private employeeService: EmployeeService) {
    this.employeeService.developerName.subscribe(
    name => (this.userName = name)
    );
  }
}
