import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectloggingService } from 'src/app/services/projectlogging.service';
import { ProjectService } from 'src/app/services/project.service';

export interface Data {
  title: string;
 
}
const ELEMENT_DATA: Data[] = [
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

  incomingProject = { project_id: 2, title: '' };
  showAlert: boolean = false;
  userProjects: any

  hourform = new FormGroup({
    project_hours: new FormControl(''),
    volunteering_hours: new FormControl(''),
    vacation: new FormControl(''),
    sick: new FormControl(''),
    emp_id: new FormControl(),
    project_id: new FormControl(),
    logged_date: new FormControl(new Date().toISOString().slice(0, 10)),
  });
  constructor(
    private plog: ProjectloggingService,
    private projectService: ProjectService
  ) {}
  newProject = '';
  assignedprojects =[{title: "tpms"}]
  displayedColumns: string[] = [
    'Projects',
    'Volunteering',
    'Sick',
    'Vacation'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dummy = [];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    
    var userData = JSON.parse(localStorage.getItem("userProjects"))
    console.log("User Data | ",userData);
    
    if(userData === null){
      this.userProjects = [];
    }else{
      this.userProjects = userData;
    }
   }

  sickFieldChecked(event) {
    if (event == 'sick') {
      this.hourform.controls.vacation.disable();
      this.hourform.controls.volunteering_hours.disable();
      this.hourform.controls.project_hours.disable();
    }
    else {
      this.hourform.controls.vacation.enable();
      this.hourform.controls.volunteering_hours.enable();
      this.hourform.controls.project_hours.enable();
    }
  }

  vacationFieldChecked(event) {
    if (event == 'vacation') {
      this.hourform.controls.sick.disable();
      this.hourform.controls.volunteering_hours.disable();
      this.hourform.controls.project_hours.disable();
    }
    else {
      this.hourform.controls.sick.enable();
      this.hourform.controls.volunteering_hours.enable();
      this.hourform.controls.project_hours.enable();
    }
  }

  submitChecked(event: string) {
    if (event === 'true') {
      this.hourform.controls.vacation.enable();
      this.hourform.controls.sick.enable();
      this.hourform.controls.volunteering_hours.enable();
      this.hourform.controls.project_hours.enable();
    }
  }

logsuccess() {}
  onSubmit() {
      var employee_firstname = this.userProjects[0].employee_firstname;
      var employee_lastname = this.userProjects[0].employee_lastname;
      var employee_email = this.userProjects[0].employee_email;
      var employee_id = this.userProjects[0].employee_id;
      var project_hours = this.hourform.value.project_hours;
      var project_id = this.hourform.value.project_id.project_id;
      var project_date = this.hourform.value.logged_date;

      let requestData = {
        employee_firstname:employee_firstname,
        employee_lastname:employee_lastname,
        employee_email:employee_email,
        employee_id:employee_id,
        project_hours:project_hours,
        project_id:project_id,
        project_date:project_date
      }

    this.plog.logproject(requestData) .subscribe(response => {
      if(response.code === "00"){
        this.showAlert = true;
      }else{
        this.showAlert = false;
      }
    });
  }

}


