import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AppService } from "src/app/services/app.service";
import { CookieService } from "ngx-cookie-service";
@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.css"]
})
export class VerifyComponent implements OnInit {
  isLoading: boolean = true;
  userName: string;
  cookieValue: string;
  cookieAvailable: boolean;
  constructor(
    private router: Router,
    private appservice: AppService,
    private activatedRoute: ActivatedRoute,
    private cookie: CookieService
  ) {}
  role: any;
  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params.name);
    this.appservice.currentMessage.subscribe(name => {
       console.log("Printing verified name | ",name)
      this.userName = name
    });
  
    // this.cookie.set("ttemail", "");
    this.cookieAvailable = this.cookie.check("ttemail");
    if (this.cookieAvailable == true) {
      this.appservice
        .getEmployeeRole(this.cookie.get("ttemail"))
        .subscribe(response => {
          console.log("Response from server | ", response);
          if(response.code == "00"){
            var employee_fullname = response.data.employee.employee_firstname + " " + response.data.employee.employee_lastname;
            var employee_id = response.data.employee.employee_id;
            switch (response.data.employee.employee_role) {
              case "ADMINISTRATOR":
                // this.appservice.changeMessage(response[0].emp_name);

                localStorage.setItem("username", employee_fullname);
                localStorage.setItem("userData", JSON.stringify(response.data));
                localStorage.setItem("empId", employee_id.toString());
                this.isLoading = false;
                this.router.navigate(["admin/projects"]);
                break;
              case "DEVELOPER":
                // this.appservice.changeMessage(response[0].emp_name);
                localStorage.setItem("username", employee_fullname);
                localStorage.setItem("userData", JSON.stringify(response.data));
                localStorage.setItem("empId", employee_id.toString());
                this.isLoading = false;
                this.router.navigate(["developer/projects"]);
                break;
              default:
                break;
            }
          }else{

          }
          
        });
    } else {
      // Tell the person to reauthenticate
      this.isLoading = false;
    }
    // this.appservice
    //   .getEmployeeRole(this.activatedRoute.snapshot.params.name)
    //   .subscribe(response => {
    //     // console.log("Response", response[0].emp_role);
    //     switch (response[0].emp_role) {
    //       case "Administrator":
    //         // this.appservice.changeMessage(response[0].emp_name);
    //         localStorage.setItem("username", response[0].emp_name);
    //         localStorage.setItem("empId", response[0].emp_id.toString());
    //         this.isLoading = false;
    //         this.router.navigate(["admin/projects"]);
    //         break;
    //       case "Developer":
    //         // this.appservice.changeMessage(response[0].emp_name);
    //         localStorage.setItem("username", response[0].emp_name);
    //         localStorage.setItem("empId", response[0].emp_id.toString());
    //         this.isLoading = false;
    //         this.router.navigate(["developer/projects"]);
    //         break;
    //       default:
    //         break;
    //     }
    //   });
  }
  reauth() {
    this.router.navigate(["/logout"]);
  }
}
