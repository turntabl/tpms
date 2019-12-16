import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.css"]
})
export class VerifyComponent implements OnInit {
  isLoading: boolean = true;
  constructor(private router: Router) {}
  role: string = "admin";
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      switch (this.role) {
        case "admin":
          this.isLoading = false;
          this.router.navigate(["admin/projects"]);
          break;
        default:
          break;
      }
    }, 4000);
  }
}
