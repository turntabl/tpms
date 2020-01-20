import { Component, OnInit,Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

import { MatTableDataSource } from '@angular/material/table';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ProjectService } from 'src/app/project.service';
import { ProjectInterface } from 'src/app/screens/project-interface';
import { Observable } from 'rxjs';



// const ELEMENT_DATA: PeriodicElement[] = [

// ];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})



export class ProjectsComponent implements OnInit {

  
  // hoveredDate: NgbDate;

  // fromDate: NgbDate;
  // toDate: NgbDate;
  // date = new FormControl(new Date());
  // serializedDate = new FormControl((new Date()).toISOString()); 

  constructor(
    // tslint:disable-next-line: no-shadowed-variable
    private ProjectService: ProjectService,
    iconRegistry: MatIconRegistry,
    calendar: NgbCalendar,
    sanitizer: DomSanitizer) {
      // this.fromDate = calendar.getToday();
      // this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }



  projectForm = new FormGroup({
  project_title: new FormControl(''),
  project_description: new FormControl(''),
  project_tech_stack:new FormControl(''),
  project_start_date: new FormControl(new Date().toISOString().slice(0, 10)),
  project_end_date: new FormControl(new Date().toISOString().slice(0, 10))
  
  

  });


  displayedColumns: string[] = [
    'title',
    // 'description',
    // 'status',
    // 'start_date',
    // 'end_date'
  ];
  dataSource = [];

  // clone = new MatTableDataSource(ELEMENT_DATA);
  // dataSource = this.clone;

  // ngOnInit() {
  //      this.dataSource.data.push({
  //        title: 'Christy project' });
  //    }



  // projectObservable: Observable<ProjectInterface[]>;
  // incomingProjects = [];
  // addme() {
  //   this.dataSource.data.push({
  //     title: 'Christy project' });
  // }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  ngOnInit() {
    this.ProjectService.getProject().subscribe(response => {
        this.dataSource = response;
      });
    }
      onSubmit() {
      this.ProjectService
      .addNewProject(this.projectForm.value)
      .subscribe(client => console.log(client));


     alert(JSON.stringify(this.projectForm.value));


       // .subscribe(client => console.log(client));
      // alert(JSON.stringify(this.projectForm.value));
  }

    // onDateSelection(date: NgbDate) {
    //   if (!this.fromDate && !this.toDate) {
    //     this.fromDate = date;
    //   } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
    //     this.toDate = date;
    //   } else {
    //     this.toDate = null;
    //     this.fromDate = date;
    //   }
    // }

  // isHovered(date: NgbDate) {
  //   return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  // }

  // isInside(date: NgbDate) {
  //   return date.after(this.fromDate) && date.before(this.toDate);
  // }

  // isRange(date: NgbDate) {
  //   return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  // }







}
