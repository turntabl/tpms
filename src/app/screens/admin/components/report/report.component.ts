import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { HttpClient } from '@angular/common/http';  
import { Data } from 'src/app/data';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {
  url = 'https://developerservice03.herokuapp.com/log';  
  data: Data[];  
  Dates = [];  
  Hours = [];  
  Linechart = [];  
  constructor(private httpClient: HttpClient) { }  
  ngOnInit() {  
    this.httpClient.get(this.url).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.Dates.push(x.logged_date);  
        this.Hours.push(x.project_hours);  
      });  
      this  
      this.Linechart = new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: this.Dates,  
          datasets: [  
            {  
              data: this.Hours,  
              borderColor: '#3cb371',  
              backgroundColor: "#0000FF",  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    });  
  }  
}
