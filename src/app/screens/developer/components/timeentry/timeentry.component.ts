import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectloggingService } from 'src/app/services/projectlogging.service';
import { MatTableDataSource } from '@angular/material/table';


export interface Project {
  title: string;
 
}
const project: Project[] = [
  {
    title: 'Projects',
  }
];

@Component({
  selector: 'app-timeentry',
  templateUrl: './timeentry.component.html',
  styleUrls: ['./timeentry.component.css']
})



export class TimeentryComponent implements OnInit {
  dateSort=''
  successMessage: boolean = false;
  employeeProjects: any

    time_entry = new FormGroup({
    project_hours: new FormControl(''),
    volunteering_hours: new FormControl(''),
    vacation: new FormControl(''),
    sick: new FormControl(''),
    employee_id: new FormControl(),
    project_id: new FormControl(),
    logged_date: new FormControl(new Date().toISOString().slice(0, 10)),
  });
  constructor(private projectLog: ProjectloggingService ) {}

  displayedColumns: string[] = [
    'Projects',
    'Volunteering',
    'Sick',
    'Vacation'
  ];

  projects = new MatTableDataSource(project);
  applyFilter(filterValue: string) {
    this.projects.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() {
    
    var employeeResults = JSON.parse(localStorage.getItem("userProjects"))
    
    if(employeeResults === null){
      this.employeeProjects = [];
    }else{
      this.employeeProjects = employeeResults;
    }
   }

  onSickFieldChecked(event) {
    if (event == 'sick') {
      this.time_entry.controls.vacation.disable();
      this.time_entry.controls.volunteering_hours.disable();
      this.time_entry.controls.project_hours.disable();
    }
    else {
      this.time_entry.controls.vacation.enable();
      this.time_entry.controls.volunteering_hours.enable();
      this.time_entry.controls.project_hours.enable();
    }
  }

  onVacationFieldChecked(event) {
    if (event == 'vacation') {
      this.time_entry.controls.sick.disable();
      this.time_entry.controls.volunteering_hours.disable();
      this.time_entry.controls.project_hours.disable();
    }
    else {
      this.time_entry.controls.sick.enable();
      this.time_entry.controls.volunteering_hours.enable();
      this.time_entry.controls.project_hours.enable();
    }
  }

  onSubmitChecked(event: string) {
    if (event === 'triggered') {
      this.time_entry.controls.vacation.enable();
      this.time_entry.controls.sick.enable();
      this.time_entry.controls.volunteering_hours.enable();
      this.time_entry.controls.project_hours.enable();
    }
  }

logsuccess() {}
  onSubmit() {
      var employee_firstname = this.employeeProjects[0].employee_firstname;
      var employee_lastname = this.employeeProjects[0].employee_lastname;
      var employee_email = this.employeeProjects[0].employee_email;
      var employee_id = this.employeeProjects[0].employee_id;
      var project_hours = this.time_entry.value.project_hours;
      var project_id = this.time_entry.value.project_id.project_id;
      var project_date = this.time_entry.value.logged_date;

      let requestData = {
        employee_firstname:employee_firstname,
        employee_lastname:employee_lastname,
        employee_email:employee_email,
        employee_id:employee_id,
        project_hours:project_hours,
        project_id:project_id,
        project_date:project_date
      }

    this.projectLog.logproject(requestData) .subscribe(response => {
      if(response.code === "00"){
        this.successMessage = true;
      }else{
        this.successMessage = false;
      }
    });
  }

}


