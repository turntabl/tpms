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
    this.appservice.currentMessage.subscribe(name => {
      this.userName = name
    });

    this.cookieAvailable = this.cookie.check("ttemail");
    if (this.cookieAvailable == true) {
      this.appservice
        .getEmployeeRole(this.cookie.get("ttemail"))
        .subscribe(response => {
          if(response.code == "00"){
            var existtingUserData = response.data;
            if(Object.keys(response.data).length === 0) {
              var employee_email = this.cookie.get("ttemail");
              var employee_firstname = this.cookie.get("userFirstName");
              var employee_lastname = this.cookie.get("userlastName");
              let requestData = {
                "employee_address": "",
                "employee_dev_level": "",
                "employee_email": employee_email,
                "employee_firstname": employee_firstname,
                "employee_gender": "",
                "employee_lastname": employee_lastname,
                "employee_phonenumber": "",
                "employee_role": "developer",
                "employee_status": ""
              }

              this.appservice
                .addEmployee(requestData)
                .subscribe(response => {
                  console.log("Adding new user | ", response);
                  if(response.code === "00"){
                    var emp_id = response.data;
                    this.appservice
                    .getEmployeepProjects(emp_id)
                    .subscribe(response => {
                      console.log("Getting  new user details after employee creation | ", response);
                      if(response.code === "00"){
                        var employee_fullname = employee_firstname + " " + employee_lastname;
                        
                        localStorage.setItem("username", employee_fullname);
                        localStorage.setItem("userProjects", JSON.stringify(response.data));
                        localStorage.setItem("empId", emp_id.toString());
                        this.isLoading = false;
                        this.router.navigate(["developer/projects"]);

                      }else{
                        console.log(response)
                      }
                    })
                  }else{
                    console.log(response);
                  }
                })
          } else {
            console.log("Printing existtingUserData | ", existtingUserData);
          
            var employee_id = existtingUserData.employee_id;
            this.appservice
              .getEmployeepProjects(employee_id)
              .subscribe(response => {
                console.log("Getting employee projects | ", response);
                if(response.code === "00"){
                  var employee_fullname = existtingUserData.employee_firstname + " " + existtingUserData.employee_lastname;
                  switch (existtingUserData.employee_role) {
                    case "ADMINISTRATOR":      
                      localStorage.setItem("username", employee_fullname);
                      localStorage.setItem("userProjects", JSON.stringify(response.data));
                      localStorage.setItem("empId", employee_id.toString());
                      this.isLoading = false;
                      this.router.navigate(["admin/projects"]);
                      break;
                    case "DEVELOPER":
                      localStorage.setItem("username", employee_fullname);
                      localStorage.setItem("userProjects", JSON.stringify(response.data));
                      localStorage.setItem("empId", employee_id.toString());
                      this.isLoading = false;
                      this.router.navigate(["developer/projects"]);
                      break;
                    default:
                      break;
                  }
                }else{
                  console.log(response)
                }
              })         
          } 
          }          
        });
    } else {
      this.isLoading = false;
    }
  }
  reauth() { this.router.navigate(["/logout"]);}
}
