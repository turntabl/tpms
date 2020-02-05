import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Report } from 'src/app/interfaces/report';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  url = 'https://project.services.turntabl.io/v1/api/getloggedproject';
  data: Report[];
  Dates = [];
  Project = [];
  Volunteer = [];
  Sick = [];
  Vacation = [];


  chartOptions = {};


  Highcharts = Highcharts;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((result: Report[]) => {
      Array.prototype.forEach(element => {
      }); (x => {
        this.Dates.push(x.project_date);
        this.Project.push(x.project_hours);
        // this.Sick.push(x.vacation_hours);
        // this.Vacation.push(x.sick_hours);
      });
      this.chartOptions = {
        chart: {
          type: "area"
        },
        title: {
          text: 'Daily Reports'
        },
        subtitle: {
          text: 'Total logged hours per day'
        },
        xAxis: {
          categories: this.Dates,
          tickmarkPlacement: 'on',
          title: {
            enabled: false
          }
        },
        yAxis: {
          title: {
            text: 'Hours'
          },
          labels: {
            formatter: function () {
              return this.value;
            }
          }
        },
        tooltip: {
          shared: true,
          valueSuffix: ' Hours'
        },
        plotOptions: {
          area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,

            marker: {
              lineWidth: 1,
              lineColor: '#666666'
            }
          }
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: 'Projects',
            data: this.Project,
          },
          {
             name: 'Volunteering',
            data: this.Volunteer,
          },
          {
             name: 'Vacation',
            data: this.Vacation,
          },
          {
             name: 'Sick',
            data: this.Sick,
          }
        ]
      };

      HC_exporting(Highcharts);
      setTimeout(() => {
      }, 3000);

    });
  }
}