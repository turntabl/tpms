import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Data } from 'src/app/data';
import { HttpClient } from '@angular/common/http';  



@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  // styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  url = 'https://developerservice03.herokuapp.com/report';  
  data: Data[];  
  Dates = [];  
  Project = [];  
  Volunteer=[];
  Sick=[];
  Vacation=[];
  // Linechart = [];  

  chartOptions: {};
  // @Input() series: any = [];

  Highcharts = Highcharts;


  

  constructor(private httpClient: HttpClient) { }  

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.Dates.push(x.logged_date);  
        this.Project.push(x.total_project_hours);
        this.Volunteer.push(x.total_volunteering_hours);
        this.Sick.push(x.sick);
        this.Vacation.push(x.vacation);  
      });  
     this. chartOptions = {   
         chart: {
            type: "area"
         },
         title: {
           text: 'Daily Reports'
         },
         subtitle : {
           text: 'Total logged hours per day'
         },
         xAxis:{
          //  categories: ['2020-01-08', '2020-01-09', '2020-01-10', '2020-01-11', '2020-01-12', '2020-01-13', '2020-01-14'],
         categories:this.Dates,
          tickmarkPlacement: 'on',
           title: {
              enabled: false
           }
         },
         yAxis : {
           title: {
              text: 'Hours'
           },
           labels: {
              formatter: function () {
                 return this.value;
              }
           }
         },
         tooltip : {
           shared: true,
           valueSuffix: ' Hours'
         },
         plotOptions : {
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
         credits:{
           enabled: false
         },
         series: [
            {
               name: 'Projects',
              //  data: [502, 635, 809, 947, 1402, 3634, 5268]
              data: this.Project,
            }, 
            {
               name: 'Volunteering',
              //  data: [106, 107, 111, 133, 221, 767, 1766]
              data: this.Volunteer,
            }, 
            {
               name: 'Vacation',
              //  data: [163, 203, 276, 408, 547, 729, 628]
              data: this.Vacation,
            }, 
            {
               name: 'Sick',
              //  data: [18, 31, 54, 156, 339, 818, 1201]
              data: this.Sick,
            }
         ]
      };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }); 
  }

}
