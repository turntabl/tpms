import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AppService } from "src/app/services/app.service";
@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.css"]
})
export class VerifyComponent implements OnInit {
  isLoading: boolean = true;
  userName: string;
  constructor(
    private router: Router,
    private appservice: AppService,
    private activatedRoute: ActivatedRoute
  ) {}
  role: any;
  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params.name);
    this.appservice.currentMessage.subscribe(name => (this.userName = name));
    this.appservice
      .getEmployeeRole(this.activatedRoute.snapshot.params.name)
      .subscribe(response => {
        // console.log("Response", response[0].emp_role);
        switch (response[0].emp_role) {
          case "Administrator":
            // this.appservice.changeMessage(response[0].emp_name);
            localStorage.setItem("username", response[0].emp_name);
            localStorage.setItem("empId", response[0].emp_id.toString());
            this.isLoading = false;
            this.router.navigate(["admin/projects"]);
            break;
          case "Developer":
            // this.appservice.changeMessage(response[0].emp_name);
            localStorage.setItem("username", response[0].emp_name);
            localStorage.setItem("empId", response[0].emp_id.toString());
            this.isLoading = false;
            this.router.navigate(["developer/projects"]);
            break;
          default:
            break;
        }
      });
  }
}
