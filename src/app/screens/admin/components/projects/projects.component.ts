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





@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})



export class ProjectsComponent implements OnInit {

  
  constructor(

    private ProjectService: ProjectService,
    iconRegistry: MatIconRegistry,
    calendar: NgbCalendar,
    sanitizer: DomSanitizer) {
   
    }

    toppings = new FormControl();
    toppingList: any[] = [
      {
        "tech_id":1,
        "tech_name":"Java",
        "tech_status":"ACTIVE"
      },
      {
        "tech_id":2,
        "tech_name":"Python",
        "tech_status":"ACTIVE"
      },
      {
        "tech_id":3,
        "tech_name":"Scala",
        "tech_status":"ACTIVE"
      }
    
    ];

  projectForm = new FormGroup({
  project_name: new FormControl(''),
  project_description: new FormControl(''),
  project_tech_stack:new FormControl(''),
  project_start_date: new FormControl(new Date().toISOString().slice(0, 10)),
  project_end_date: new FormControl(new Date().toISOString().slice(0, 10))
  
  

  });

  myFilter : any

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
       
        
        var formValues = this.projectForm.value;
        let requestData = {
          project_description: formValues.project_description,
          project_end_date: formValues.project_end_date,
          project_name: formValues.project_name,
          project_start_date: formValues.project_start_date,
          project_status: "ACTIVE",
          project_tech_stack: formValues.project_tech_stack
        }
        console.log("Printing request data | ",requestData)
      this.ProjectService
      .addNewProject(requestData)
      .subscribe(response => {
        console.log("Response from server | ",response)
        alert("Successfully added project")
        });


      

     

      //  .subscribe(client => console.log(client));
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
