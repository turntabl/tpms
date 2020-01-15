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
  developers: Array<Employee> = [
    // {value: 'Dennis Bill'},
    // {value: 'Francis Billa'},
    // {value: 'Francis Billa'}
  ];
  // devselected = 'option2';
  selectable = true;
  removable = true;
  projects = [
    // {value: 'TPMS'},
    // {value: 'TCMS'},
    // {value: 'DBMS'}
  ];
  // projselected = 'option2';

  // assignedprojects = [
  //   { project_id: 1, title: "Some" },
  //   { project_id: 2, title: "djsd" },


  // ];
  assignedprojects = [{ project_id: 1, title: "Devs projects appear here" }]

  // incomingProject = { project_id: 2, title: "" };



  myControl = new FormControl();
  options: Array<Employee> = [];
  filteredOptions: Observable<Employee[]>;

  projectmyControl = new FormControl();
  projectoptions: Array<ProjectInterface> = [];
  projectfilteredOptions: Observable<ProjectInterface[]>;
  assignedProjects: Array<ProjectInterface> = []



  



  constructor(private ProjectService: ProjectService, private devService: AppService) { }

  developerObservable: Observable<Employee[]>;
  devs = [];

  projectsObservable: Observable<ProjectInterface[]>;
  project = [];

  assignedObservable: Observable<ProjectInterface[]>;
  assign = [];

  ngOnInit() {
    this.devService.getDevelopers().subscribe(response => {
      this.developers = response;
      this.options = response
      // this.developers.forEach(e => console.log(response.emp_name))
    });
    this.ProjectService.getProject().subscribe(response => {
      this.projects = response;
      this.projectoptions = response
      console.log(response);
      
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
  private _projectfilter(value: string): ProjectInterface[] {
    const filterValue = value.toLowerCase();
    // return this.options.filter(option => option.emp_name.toLowerCase().includes(filterValue));
    return this.projectoptions.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0)
  }
  
 projectfilterOptions() {
  this.projectfilteredOptions = this.projectmyControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.title),
      map(title => title ? this._projectfilter(title) : this.projectoptions.slice())
    );
}
projectdisplayFn(user?: ProjectInterface): string | undefined {
  // if (user !== null) {
  //   // fetch assigned projects
  //   this.ProjectService
  //     .getAssignedProject(user.project_id.toString())
  //     .subscribe(response => {
  //       // this.incomingProject.project_id = response.project_id;
  //       // localStorage.setItem("pid", response.project_id.toString());
  //       // // this.assignedprojects.length=0
  //       // this.assignedprojects[0].project_id = response.project_id;
  //       // this.assignedprojects[0].title = response.title;
  //       this.assignedProjects.push(response);
  //       // console.log(response);

  //     });
  // }
  if (user) {
    console.log(user);
    this.assignedProjects.push(user)
  } else {
    console.log("non");
    
  }
  
  
  return user ? user.title : undefined;
}

  private _filter(value: string): Employee[] {
    const filterValue = value.toLowerCase();
    // return this.options.filter(option => option.emp_name.toLowerCase().includes(filterValue));
    return this.options.filter(option => option.emp_name.toLowerCase().indexOf(filterValue) === 0)
  }
  filterOptions() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.emp_name),
        map(emp_name => emp_name ? this._filter(emp_name) : this.options.slice())
      );
  }
  displayFn(user?: Employee): string | undefined {
    if (user !== null) {
      // fetch assigned projects
      this.ProjectService
        .getAssignedProject(user.emp_id.toString())
        .subscribe(response => {
          // this.incomingProject.project_id = response.project_id;
          // localStorage.setItem("pid", response.project_id.toString());
          // // this.assignedprojects.length=0
          // this.assignedprojects[0].project_id = response.project_id;
          // this.assignedprojects[0].title = response.title;
          this.assignedProjects.push(response);
          // console.log(response);

        });
    }




    // 
    return user ? user.emp_name : undefined;
  }



  curremp: string;
  currproj: string;

  devMethod(emp) {
    // this.curremp = emp.emp_name
    // this.currentDevsId = emp.emp_id
    // // console.log(emp)

    this.ProjectService
      .getAssignedProject(emp.emp_id)
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