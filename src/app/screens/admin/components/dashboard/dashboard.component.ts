import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppService } from "src/app/services/app.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  name: String;
  msg: String;
  constructor(
    private actRoute: ActivatedRoute,
    private appService: AppService
  ) {
    this.name = this.actRoute.snapshot.params.name;
    this.appService.currentMessage.subscribe(msg => (this.msg = msg));
    this.appService.changeMessage(this.actRoute.snapshot.params.name);
  }

  ngOnInit() {
    // console.log(this.name);
  }
}
