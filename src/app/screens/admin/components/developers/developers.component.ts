import { Component, OnInit, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProjectService } from 'src/app/services/project.service';
import { Employee } from 'src/app/interfaces/employee';
import { Project } from 'src/app/interfaces/project';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})

export class DevelopersComponent implements OnInit {
  currentDevsId: number
  selectedDeveloper_id
  userDetails
  selectedProject_id
  assignedNewProject =[];
  selectable = true;
  removable = true;
  project = [];
  assignedproject = [];

  developerControl = new FormControl();
  options: Array<any> = [];
  filteredOptions: Observable<any>;

  projectControl = new FormControl();
  projectoptions: Array<any> = [];
  projectfilteredOptions: Observable<any>;

  constructor(private ProjectService: ProjectService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getDevelopers().subscribe(response => {
        this.options = response.data; 
    });
    this.ProjectService.getProject().subscribe(response => {
       this.projectoptions = response.data; 
     });
    this.filterOutDeveloperFirstnName()

    this.projectFilterOptions()
    
  }
  deleteProject(developer: Project) {
    this.ProjectService
    .removeProjectFromEmployee(developer.project_id,this.selectedDeveloper_id)
    .subscribe(response => {
      this.getProjectAssignedToDeveloper();
    });  
  }

  remove_one(dev: Project): void {
    const index = this.assignedNewProject.indexOf(dev);
    if (index >= 0) {
      this.assignedNewProject.splice(index, 1);
    }  
  }
    
  displayDeveloperName(user?: any): any | undefined {
    if (user !== null) {
      this.selectedDeveloper_id = user.employee_id
      this.userDetails = user;
      this.getProjectAssignedToDeveloperById(user.employee_id)
    }
    return user ? user.employee_firstname : undefined;
  }

  projectDisplay(project?: any): any | undefined {
    if (project !== null) {
      this.selectedProject_id =project.project_id
      this.assignProjectToEmployee(this.selectedDeveloper_id,this.selectedProject_id,this.userDetails );
    }   
    return project ? project.project_name : undefined;
  }

  assignProjectToEmployee(employee_id,project_id,userDetails ){
    let requestData = {
        "employee_email": userDetails.employee_email,
        "employee_firstname": userDetails.employee_firstname,
        "employee_id": employee_id,
        "employee_lastname": userDetails.employee_lastname,
        "project_id": project_id
    }
   
    this.ProjectService
    .assignProjectToEmployee(requestData)
    .subscribe(response => {     
        this.getProjectAssignedToDeveloper();
    });
  }

  getProjectAssignedToDeveloper(){
    this.ProjectService
        .getAssignedProjects(this.selectedDeveloper_id)
        .subscribe(response => {
            this.assignedproject = response.data;
        });
      }
  
  getProjectAssignedToDeveloperById(employee_id){
    this.ProjectService
        .getAssignedProjects(employee_id)
        .subscribe(response => {
            this.assignedproject = response.data;
        });
      }
      
  private filterDeveloperName(value: string): Employee[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.employee_firstname.toLowerCase().indexOf(filterValue) === 0)
  }
  private projectFilter(value: string): Project[] {
    const filterValue = value.toLowerCase();
    return this.projectoptions.filter(option => option.project_name.toLowerCase().indexOf(filterValue) === 0)
  }
  filterOutDeveloperFirstnName() {
    this.filteredOptions = this.developerControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.employee_firstname),
        map(employee_firstname => employee_firstname ? this.filterDeveloperName(employee_firstname) : this.options.slice())
      );
  }

  projectFilterOptions() {
    this.projectfilteredOptions = this.projectControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.project_name),
        map(project_name => project_name ? this.projectFilter(project_name) : this.projectoptions.slice())
      );
  }
 

}