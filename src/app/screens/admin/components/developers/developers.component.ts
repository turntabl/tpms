import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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
  currentDevsId: number
  developers: Array<any> = [
    // {value: 'Dennis Bill'},
    // {value: 'Francis Billa'},
    // {value: 'Francis Billa'}
  ];

  
selectedDeveloper_id

selectedProject_id
assignedNewProject =[]

  selectable = true;
  removable = true;
  projects = [
    // {value: 'TPMS'},
    // {value: 'TCMS'},
    // {value: 'DBMS'}
  ];




  assignedprojects = [{ project_id: 1, title: "Devs projects appear here" }]





  myControl = new FormControl();
  options: Array<any> = [];
  filteredOptions: Observable<any>;

  projectmyControl = new FormControl();
  projectoptions: Array<any> = [];
  projectfilteredOptions: Observable<any>;
  assignedProjects: Array<any> 
  // assignedProjects: Array<ProjectInterface> = []


  constructor(private ProjectService: ProjectService, private devService: AppService) { }

  developerObservable: Observable<Employee[]>;
  devs = [];

  projectsObservable: Observable<ProjectInterface[]>;
  project = [];

  assignedObservable: Observable<any>;
  assign = [];

  ngOnInit() {
    this.devService.getDevelopers().subscribe(response => {
      console.log("Response from server | ",response)
      if(response.code === "00"){
        this.options = response.data;
        
      }else{
        console.log(response);
      }
      // this.developers = response;
      // this.options = response
      //this.developers.forEach(e => console.log("Response from server | ",response))
    });
    this.ProjectService.getProject().subscribe(response => {
      console.log("Response from server | ",response)
      if(response.code === "00"){
        this.projectoptions = response.data;
      }else{
        console.log(response);
      }
    
    });
    this.filterOptions()

    this.projectfilterOptions()


  }
  remove(dev: ProjectInterface): void {
    const index = this.assignedProjects.indexOf(dev);

    if (index >= 0) {
      this.assignedProjects.splice(index, 1);
    }
    
  }

  remove_one(dev: ProjectInterface): void {
    const index = this.assignedNewProject.indexOf(dev);

    if (index >= 0) {
      this.assignedNewProject.splice(index, 1);
    }
    
  }
    
  displayFn(user?: any): any | undefined {
    if (user !== null) {
      this.selectedDeveloper_id = user.employee.employee_id
      this.assignedProjects = user.projects;
          // console.log(user);
    }
    return user ? user.employee.employee_firstname : undefined;
  }


  projectdisplayFn(project?: any): any | undefined {

    if (project !== null) {
      this.selectedProject_id =project.project.project_id
      this.assignedNewProject.push(project.project)
      // console.log("Printing project | ",project);
    }   
    return project ? project.project.project_name : undefined;
  }




  private _filter(value: string): Employee[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.employee.employee_firstname.toLowerCase().indexOf(filterValue) === 0)
    
    // return this.options.filter(option => option.emp_name.toLowerCase().includes(filterValue));
    //return this.options.filter(option => option.employee_firstname.toLowerCase().indexOf(filterValue) === 0)
  }
  private _projectfilter(value: string): ProjectInterface[] {
    const filterValue = value.toLowerCase();
    // console.log("Filtering ",filterValue);
    
    // return this.options.filter(option => option.emp_name.toLowerCase().includes(filterValue));
    return this.projectoptions.filter(option => option.project.project_name.toLowerCase().indexOf(filterValue) === 0)
  }
  filterOptions() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.employee.employee_firstname),
        map(employee_firstname => employee_firstname ? this._filter(employee_firstname) : this.options.slice())
      );
  }

  projectfilterOptions() {
    this.projectfilteredOptions = this.projectmyControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.project.project_name),
        map(project_name => project_name ? this._projectfilter(project_name) : this.projectoptions.slice())
      );
  }



  curremp: string;
  currproj: string;

  devMethod(emp) {
    // this.curremp = emp.emp_name
    // this.currentDevsId = emp.emp_id
    // // console.log(emp)

    this.ProjectService
      .getAssignedProject(emp.employee_id)
      .subscribe(response => {
        // this.incomingProject.project_id = response.project_id;
        // localStorage.setItem("pid", response.project_id.toString());
        // this.assignedprojects.length=0
        this.assignedprojects[0].project_id = response.project_id;
        this.assignedprojects[0].title = response.title;

        //     console.log(response);

      });
    console.log(emp);


  }

  projMethod(proj) {
    // this.currproj=proj.title
    // console.log(proj)
    this.ProjectService.assignProjecttoDev(proj.project_id, this.currentDevsId).subscribe(response => {
      // this.projects = response;
      console.log(response)
    });


  }

}