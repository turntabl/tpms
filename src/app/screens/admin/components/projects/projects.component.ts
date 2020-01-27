import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
// import { ToastService } from 'ng-uikit-pro-standard';

declare var $: any;


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  columnsToDisplay = ['name'];
  dataSource = [];

  showSucessAlert: Boolean
  successMsg: string;
  showErrorAlert:Boolean
  errorMsg: string

  constructor(private ProjectService: ProjectService) {
  }

  projectForm = new FormGroup({
  project_name: new FormControl(''),
  });


  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this.ProjectService
      .getProject()
      .subscribe(response => {
        console.log("Printing response | ",response )
        if(response.code === "00"){
          this.dataSource = response.data;
        }else{
          this.dataSource = [];
        }  
      });
  }

  onSubmit() { 
    
    var formValues = this.projectForm.value;
    let requestData = { 
      project_name: formValues.project_name
    }
    console.log("Printing requestData | ",requestData)

   this.ProjectService
   .addNewProject(requestData) 
   .subscribe(response =>{
     if(response.code === "00"){
       this.getProjects();
      $("#modalSubscriptionForm").modal("hide");
      $('.modal-backdrop').remove();
      this.projectForm.reset();
      
     }else{
      $("#modalSubscriptionForm").modal("hide");
      $('.modal-backdrop').remove();
     }
   })
}

}
