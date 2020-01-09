import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
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
  Project = [];  
  Volunteer=[];
  Sick=[];
  Vacation=[];
  Linechart = [];  
  constructor(private httpClient: HttpClient) { }  
  ngOnInit() {  
    this.httpClient.get(this.url).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.Dates.push(x.logged_date);  
        this.Project.push(x.project_hours);
        this.Volunteer.push(x.volunteering_hours);
        this.Sick.push(x.sick);
        this.Vacation.push(x.vacation);  
      });  
      // this.Linechart= new Chart('canvas', {  
      //   type: 'line',  
      //   data: {  
      //     labels: this.Dates,  
      //     datasets: [  
      //       {  
      //         data: this.Hours,  
      //         // borderColor: '#3cb371',  
      //         // backgroundColor: "#0000FF",  
      //       }  
      //     ]  
      //   },
    
        // options: {  
        //   legend: {  
        //     display: false  
        //   },  
        //   scales: {  
        //     xAxes: [{  
        //       display: true  
        //     }],  
        //     yAxes: [{  
        //       display: true  
        //     }],  
        //   }  
        // }  
      // });  
      this.Linechart= new Chart('canvas', {  
        type: 'line',
        data: {
          labels: this.Dates,
          datasets: [
            {
              label: 'Project',
              fill:false,
              borderColor: 'rgb(255, 99, 132)',
              data: this.Project,
              // yAxisID:'y1'
          },
          {
            label: 'Volunteer',
            fill:false,
            borderColor: 'rgb(71, 203, 142)',
            data: this.Volunteer,
            // yAxisID:'y2'

        },
        {
          label: 'Vacation',
          fill:false,
          borderColor: 'rgb(42, 99, 132)',
          data: this.Vacation,

      },
      {
        label: 'Sick',
        fill:false,
        borderColor: 'rgb(203, 102, 71)',
        data: this.Sick,

    }
        ]
      },
        options: {
            
        }
    
        // options: {  
        //   legend: {  
        //     display: false  
        //   },  
        //   scales: {  
        //     xAxes: [{  
        //       display: true  
        //     }],  
        //     yAxes: [{  
        //       display: true  
        //     }],  
        //   }  
        // }  
      });  
    });  
  }  
}
