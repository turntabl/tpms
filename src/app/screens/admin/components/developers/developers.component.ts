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
  developers: Array<any> = [];

  
  selectedDeveloper_id

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

  constructor(private ProjectService: ProjectService, private employeeService: EmployeeService,private cdr: ApplicationRef) { }

  ngOnInit() {
    this.employeeService.getDevelopers().subscribe(response => {
        this.options = response.data; 
    });
    this.ProjectService.getProject().subscribe(response => {
       this.projectoptions = response.data; 
     });
    this.filterOptions()

    this.projectFilterOptions()

    this.removeProjectAssignedToDeveloper()
    
  }
  remove(dev: any) {
    this.ProjectService
    .removeProjectFromEmployee(dev.project_id,this.selectedDeveloper_id)
    .subscribe(response => {
        this.removeProjectAssignedToDeveloper();
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
      this.selectedDeveloper_id = user.employee.employee_id
      this.assignedproject = user.projects;
    }
    return user ? user.employee.employee_firstname : undefined;
  }

  projectDisplay(project?: any): any | undefined {
    if (project !== null) {
      this.selectedProject_id =project.project.project_id
      this.assignProjectToEmployee(this.selectedDeveloper_id,this.selectedProject_id);
    }   
    return project ? project.project.project_name : undefined;
  }

  assignProjectToEmployee(employee_id,project_id){

    this.ProjectService
    .assignProjectToEmployee(project_id,employee_id)
    .subscribe(response => {
        this.removeProjectAssignedToDeveloper();
    });
  }

  removeProjectAssignedToDeveloper(){
    this.ProjectService
        .getAssignedProjects(this.selectedDeveloper_id)
        .subscribe(response => {
            this.assignedproject = response.data.projects;
        });
      }
      
  private filterDeveloperName(value: string): Employee[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.employee.employee_firstname.toLowerCase().indexOf(filterValue) === 0)
  }
  private projectFilter(value: string): Project[] {
    const filterValue = value.toLowerCase();
    return this.projectoptions.filter(option => option.project.project_name.toLowerCase().indexOf(filterValue) === 0)
  }
  filterOptions() {
    this.filteredOptions = this.developerControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.employee.employee_firstname),
        map(employee_firstname => employee_firstname ? this.filterDeveloperName(employee_firstname) : this.options.slice())
      );
  }

  projectFilterOptions() {
    this.projectfilteredOptions = this.projectControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.project.project_name),
        map(project_name => project_name ? this.projectFilter(project_name) : this.projectoptions.slice())
      );
  }
  currentEmployee: string;
  assignedProject: string;
  getProjectAssignedToDeveloper(employee) {
    this.ProjectService
      .getAssignedProjects(employee.employee_id)
      .subscribe(response => {
        this.assignedproject[0].project_id = response.project_id;
        this.assignedproject[0].title = response.title;
      });
  }

  assignProjectToDeveloper(project) {
    this.ProjectService.assignProjecttoDev(project.project_id, this.currentDevsId).subscribe(response => {
    });
  }
}