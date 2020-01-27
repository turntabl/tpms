import { Component, OnInit } from "@angular/core";
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})

export class NavigationComponent implements OnInit {
  userName: string = "";
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.userName = localStorage.getItem("username");
  }
}
