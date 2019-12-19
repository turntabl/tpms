import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProjectService } from 'src/app/project.service';
import { AppComponent } from 'src/app/app.component';
import { Employee } from 'src/app/employee';
import { AppService } from 'src/app/services/app.service';
import { ProjectInterface } from 'src/app/screens/project-interface';


@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {
  developers = [
    // {value: 'Dennis Bill'},
    // {value: 'Francis Billa'},
    // {value: 'Francis Billa'}
  ];
  // devselected = 'option2';

  projects = [
    // {value: 'TPMS'},
    // {value: 'TCMS'},
    // {value: 'DBMS'}
  ];
  // projselected = 'option2';

  myControl = new FormControl({

  });
 


  constructor(private ProjectService: ProjectService , private devService: AppService) { }

  developerObservable:Observable<Employee[]>;
  devs = [];

  projectsObservable:Observable<ProjectInterface[]>;
  project = [];

  ngOnInit() {
      this.devService.getDevelopers().subscribe(response => {
      this.developers = response;
      // console.log(response)
    });
    this.ProjectService.getProject().subscribe(response => {
      this.projects = response;
    });
  
  }
 

//   onSubmit() {
//     this.ProjectService
//       .assignProjecttoDev(this.myControl.value)
//       .subscribe(result=>console.log(result));

// }

curremp:string;
currproj:string;

devMethod(emp){
  this.curremp=emp
  console.log(emp)
  
}

projMethod(proj){
  this.currproj=proj
  console.log(proj)
  
}

}