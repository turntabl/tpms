import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { AppService } from "src/app/services/app.service";

export interface PeriodicElement {
  title: string;
  date: string;
  hours: number;
  name: string;
  activity: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: "UG JHS",
    date: "12.01.18",
    hours: 2,
    name: "Bill Francis",
    activity: "Volunteering"
  },
  {
    title: "Research",
    date: "21.04.19",
    hours: 3,
    name: "Dennis Borga",
    activity: "Project"
  },
  {
    title: "ST Johns",
    date: "13.1.17",
    hours: 6,
    name: "Effa Lamar",
    activity: "Volunteering"
  },
  {
    title: "UI",
    date: "3.09.17",
    hours: 6,
    name: "John Kendrick",
    activity: "Volunteering"
  },
  {
    title: "Database",
    date: "12.01.18",
    hours: 4,
    name: "Jennifer Francis",
    activity: "Project"
  },
  {
    title: "Testing",
    date: "13.1.17",
    hours: 4,
    name: "Bill Martin",
    activity: "Volunteering"
  },
  {
    title: "API",
    date: "3.09.17",
    hours: 5,
    name: "Habiba Francis",
    activity: "Project"
  },
  {
    title: "Research",
    date: "13.1.17",
    hours: 7,
    name: "Bill Francis",
    activity: "Volunteering"
  },
  {
    title: "Meeting",
    date: "3.09.17",
    hours: 2,
    name: "Bill Moses",
    activity: "Project"
  },
  {
    title: "Nima SHS",
    date: "12.01.18",
    hours: 4,
    name: "Stephanie Francis",
    activity: "Volunteering"
  }
];

@Component({
  selector: "app-hour",
  templateUrl: "./hour.component.html",
  styleUrls: ["./hour.component.css"]
})
export class HourComponent implements OnInit {
  displayedColumns: string[] = ["name", "activity", "title", "date", "hours"];
  dataSource = [];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  constructor(private appservice: AppService) {}

  ngOnInit() {
    this.appservice.getLoggedHours().subscribe(response => {
      console.log(response);
      // this.dataSource = response;
    });
  }
}
