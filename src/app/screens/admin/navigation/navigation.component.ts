import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  userName: string = "";
  constructor(private appservice: AppService) {}

  ngOnInit() {
    this.userName = localStorage.getItem("username");
  }
}
