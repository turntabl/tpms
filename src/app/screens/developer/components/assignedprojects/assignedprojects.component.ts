import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { ProjectInterface } from 'src/app/screens/project-interface';
import { Projectlogging } from 'src/app/projectlogging';

import { ProjectloggingService } from 'src/app/projectlogging.service';
import { ProjectService } from 'src/app/project.service';


export interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  title: string;
  description: string;
  startdate: string;
  enddate: string;
  duration: number;
  devno: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: 'Web Services',
    description: 'Lorem ipsium',
    startdate: '3.09.17',
    enddate: '12.01.18',
    duration: 6,
    devno: 2
  }
];

@Component({
  selector: 'app-assignedprojects',
  templateUrl: './assignedprojects.component.html',
  styleUrls: ['./assignedprojects.component.css']
})


export class AssignedprojectsComponent implements OnInit {
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
    'Web Services',
    'Volunteering',
    'Sick',
    'Vacation',
    'Reset'
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
    // this.projectService
    //   .getAssignedProject(localStorage.getItem('empId'))
    //   .subscribe(response => {
    //     // this.incomingProject.project_id = response.project_id;
    //     localStorage.setItem('pid', response.project_id.toString());
    //     this.incomingProject.title = response.title;
    //   });
    
  }

  sickFieldChecked(event) {
    // tslint:disable-next-line: triple-equals
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
    // tslint:disable-next-line: triple-equals
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

  resetChecked(event) {
    if (event === 'true') {
      this.hourform.controls.vacation.enable();
      this.hourform.controls.sick.enable();
      this.hourform.controls.volunteering_hours.enable();
      this.hourform.controls.project_hours.enable();
    }
  }



  logsuccess() {}
  onSubmit() {
    // console.log(this.hourform.value);
    console.log("Logging proect hours | ",this.hourform.value);

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
      console.log("Printing requestData | ",requestData);

    this.plog.
    logproject(requestData)
    .subscribe(response => {
      console.log("Response from server | ",requestData);
      if(response.code === "00"){
        this.showAlert = true;
      }else{
        this.showAlert = false;
      }
    });
  //  // alert('Successfully submitted');
  //   // this.hourform.reset();
  //   this.plog.logsick(this.hourform.value).subscribe(()=>{
      
  //   });
  //   // this.hourform.reset();
  //   this.plog.logvacation(this.hourform.value).subscribe(()=>{
  //     setTimeout(() => {
  //       this.showAlert = false;
  //     }, 3000);
  //     this.showAlert = true;
  //   });
  //   this.hourform.reset();
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }


}
