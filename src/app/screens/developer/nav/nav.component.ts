import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  userName: string = "dot";
  constructor(private appservice: AppService) {}

  ngOnInit() {
    this.appservice.currentMessage.subscribe(
      newName => (this.userName = newName)
    );
    this.userName = localStorage.getItem("username");
}
}
