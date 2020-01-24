import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Data } from 'src/app/data';
import { HttpClient } from '@angular/common/http';  

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
})
export class AreaComponent implements OnInit {
  url = 'https://project.services.turntabl.io/v1/api/getlogged';  
  data: Data[];  
  Dates = []; 
  Project = [];  
  Volunteer=[];
  Sick=[];
  Vacation= [];


<<<<<<< HEAD
   chartOptions: {};
   Highcharts = Highcharts;
=======
  chartOptions: {};
 

  Highcharts = Highcharts;


>>>>>>> a3b533f395b7209706dde3d243d8c80421f7c50b
  constructor(private httpClient: HttpClient) { }  

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.Dates.push(x.log_date);  
        this.Project.push(x.project_hours);
        this.Sick.push(x.vacation_hours);
        this.Vacation.push(x.sick_hours);  
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
<<<<<<< HEAD
            categories:this.Dates,
            tickmarkPlacement: 'on',
            title: {
=======
         categories:this.Dates,
          tickmarkPlacement: 'on',
           title: {
>>>>>>> a3b533f395b7209706dde3d243d8c80421f7c50b
              enabled: false
           }
         },
         yAxis : {
             title: {
              text: 'Hours'
           },
          labels: {
              formatter: function () {return this.value;
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
<<<<<<< HEAD
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
=======
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
>>>>>>> a3b533f395b7209706dde3d243d8c80421f7c50b
            }
         ]
      };

    HC_exporting(Highcharts);


    setTimeout(() => {
    }, 3000);
   
  }); 
  
  }

}
